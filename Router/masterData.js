const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const multer = require("multer");
const db = require("../DB_Connection/pg_connect");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { log_info, log_error } = require("../Settings/log");
const upload = multer();
const cookieparser = require("cookie-parser");
const fs = require("fs");
const nodemailer = require("nodemailer");
var apikey = "'" + process.env.apikey + "'";

var reqData;
dotenv.config();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: false }));
router.use(upload.array());
router.use(cookieparser());

var opts = {};
opts.jwtFromRequest = (req) => {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies["jwt"];
    }
    return token;
};
opts.secretOrKey = fs.readFileSync("./RSA/rsa.public");

router.use(function(req, res, next) {
    reqData = Object.keys(req.query).length !== 0 ? req.query : req.body;
    next();
});

passport.use(
    new JwtStrategy(opts, async function(payload, done) {
        console.log("JWT based authentication");
        if (payload.data.UserId) {
            return done(null, payload);
        } else {
            return done(new Error("Unauthorized"), null);
        }
    })
);

router.use(passport.initialize());

//Business Vertical Master Data API

router.post("/GetBusinessVerticalMasterData", function(req, res) {
    var response = {
        StatusId: 0,
        Message: null,
        BusinessVerticalMasterData: [],
    };
    if (!reqData.ApiKey || reqData.ApiKey != apikey) {
        log_info("Started", "GetBusinessVerticalMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Unauthorized API Request!";
        log_info("Ended", "GetBusinessVerticalMasterData", reqData.UserId);
        log_info(
            "Unauthorized",
            "GetBusinessVerticalMasterData",
            reqData.UserId
        );
        res.status(401).send(response);
        return;
    }

    if (!reqData.UserId || reqData.UserId < 0) {
        log_info("Started", "GetBusinessVerticalMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid UserId";
        log_info(
            "Missing",
            "GetBusinessVerticalMasterData",
            reqData.UserId,
            "UserId"
        );
        log_info("Ended", "GetBusinessVerticalMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    if (!reqData.UserRoleId || reqData.UserRoleId < 0) {
        log_info("Started", "GetBusinessVerticalMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid UserRoleId";
        log_info(
            "Missing",
            "GetBusinessVerticalMasterData",
            reqData.UserId,
            "UserRoleId"
        );
        log_info("Ended", "GetBusinessVerticalMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    if (!reqData.OrganizationId || reqData.OrganizationId < 0) {
        log_info("Started", "GetBusinessVerticalMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid OrganizationId";
        log_info(
            "Missing",
            "GetBusinessVerticalMasterData",
            reqData.UserId,
            "OrganizationId"
        );
        log_info("Ended", "GetBusinessVerticalMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    try {
        log_info("Started", "GetBusinessVerticalMasterData", reqData.UserId);
        //throw new Error('error');
        const connection = new db();
        const query = `SELECT * from organization.fn_get_business_vertical_master_data(${reqData.UserId},${reqData.UserRoleId},${reqData.OrganizationId})`;
        connection.Query_Function(query, function(varlistData) {
            response.StatusId =
                1;
            response.Message = "Success";
            response.BusinessVerticalMasterData = varlistData;
            log_info("Ended", "GetBusinessVerticalMasterData", reqData.UserId);
            res.send(response);
        });
    } catch (err) {
        log_error("GetBusinessVerticalMasterData", err);
        log_info("Ended", "GetBusinessVerticalMasterData", reqData.UserId);
        res.status(500).send("Error");
    }
});

//Product Master Data API

router.post("/GetProductMasterData", function(req, res) {
    var response = {
        StatusId: 0,
        Message: null,
        ProductMasterData: [],
    };
    if (!reqData.ApiKey || reqData.ApiKey != apikey) {
        log_info("Started", "GetProductMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Unauthorized API Request!";
        log_info("Ended", "GetProductMasterData", reqData.UserId);
        log_info(
            "Unauthorized",
            "GetProductMasterData",
            reqData.UserId
        );
        res.status(401).send(response);
        return;
    }

    if (!reqData.UserId || reqData.UserId < 0) {
        log_info("Started", "GetProductMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid UserId";
        log_info(
            "Missing",
            "GetProductMasterData",
            reqData.UserId,
            "UserId"
        );
        log_info("Ended", "GetProductMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    if (!reqData.UserRoleId || reqData.UserRoleId < 0) {
        log_info("Started", "GetProductMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid UserRoleId";
        log_info(
            "Missing",
            "GetProductMasterData",
            reqData.UserId,
            "UserRoleId"
        );
        log_info("Ended", "GetProductMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    if (!reqData.OrganizationId || reqData.OrganizationId < 0) {
        log_info("Started", "GetProductMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid OrganizationId";
        log_info(
            "Missing",
            "GetProductMasterData",
            reqData.UserId,
            "OrganizationId"
        );
        log_info("Ended", "GetProductMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    try {
        log_info("Started", "GetProductMasterData", reqData.UserId);
        //throw new Error('error');
        const connection = new db();
        const query = `SELECT * from organization.fn_get_product_master_data(${reqData.UserId},${reqData.UserRoleId},${reqData.OrganizationId})`;
        connection.Query_Function(query, function(varlistData) {
            response.StatusId =
                1;
            response.Message = "Success";
            response.ProductMasterData = varlistData;
            log_info("Ended", "GetProductMasterData", reqData.UserId);
            res.send(response);
        });
    } catch (err) {
        log_error("GetProductMasterData", err);
        log_info("Ended", "GetProductMasterData", reqData.UserId);
        res.status(500).send("Error");
    }
});

//Customer Master Data API

router.post("/GetCustomerMasterData", function(req, res) {
    var response = {
        StatusId: 0,
        Message: null,
        CustomerMasterData: [],
    };
    if (!reqData.ApiKey || reqData.ApiKey != apikey) {
        log_info("Started", "GetCustomerMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Unauthorized API Request!";
        log_info("Ended", "GetCustomerMasterData", reqData.UserId);
        log_info(
            "Unauthorized",
            "GetCustomerMasterData",
            reqData.UserId
        );
        res.status(401).send(response);
        return;
    }

    if (!reqData.UserId || reqData.UserId < 0) {
        log_info("Started", "GetCustomerMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid UserId";
        log_info(
            "Missing",
            "GetCustomerMasterData",
            reqData.UserId,
            "UserId"
        );
        log_info("Ended", "GetCustomerMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    if (!reqData.UserRoleId || reqData.UserRoleId < 0) {
        log_info("Started", "GetCustomerMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid UserRoleId";
        log_info(
            "Missing",
            "GetCustomerMasterData",
            reqData.UserId,
            "UserRoleId"
        );
        log_info("Ended", "GetCustomerMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    if (!reqData.OrganizationId || reqData.OrganizationId < 0) {
        log_info("Started", "GetCustomerMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid OrganizationId";
        log_info(
            "Missing",
            "GetCustomerMasterData",
            reqData.UserId,
            "OrganizationId"
        );
        log_info("Ended", "GetCustomerMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    try {
        log_info("Started", "GetCustomerMasterData", reqData.UserId);
        //throw new Error('error');
        const connection = new db();
        const query = `SELECT * from sales.fn_get_customer_master_data(${reqData.UserId},${reqData.UserRoleId},${reqData.OrganizationId})`;
        connection.Query_Function(query, function(varlistData) {
            response.StatusId =
                1;
            response.Message = "Success";
            response.CustomerMasterData = varlistData;
            log_info("Ended", "GetCustomerMasterData", reqData.UserId);
            res.send(response);
        });
    } catch (err) {
        log_error("GetCustomerMasterData", err);
        log_info("Ended", "GetCustomerMasterData", reqData.UserId);
        res.status(500).send("Error");
    }
});

//Lead Master Data API

router.post("/GetLeadMasterData", function(req, res) {
    var response = {
        StatusId: 0,
        Message: null,
        LeadMasterData: [],
    };
    if (!reqData.ApiKey || reqData.ApiKey != apikey) {
        log_info("Started", "GetLeadMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Unauthorized API Request!";
        log_info("Ended", "GetLeadMasterData", reqData.UserId);
        log_info(
            "Unauthorized",
            "GetLeadMasterData",
            reqData.UserId
        );
        res.status(401).send(response);
        return;
    }

    if (!reqData.UserId || reqData.UserId < 0) {
        log_info("Started", "GetLeadMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid UserId";
        log_info(
            "Missing",
            "GetLeadMasterData",
            reqData.UserId,
            "UserId"
        );
        log_info("Ended", "GetLeadMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    if (!reqData.UserRoleId || reqData.UserRoleId < 0) {
        log_info("Started", "GetLeadMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid UserRoleId";
        log_info(
            "Missing",
            "GetLeadMasterData",
            reqData.UserId,
            "UserRoleId"
        );
        log_info("Ended", "GetLeadMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    if (!reqData.OrganizationId || reqData.OrganizationId < 0) {
        log_info("Started", "GetLeadMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid OrganizationId";
        log_info(
            "Missing",
            "GetLeadMasterData",
            reqData.UserId,
            "OrganizationId"
        );
        log_info("Ended", "GetLeadMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    try {
        log_info("Started", "GetLeadMasterData", reqData.UserId);
        //throw new Error('error');
        const connection = new db();
        const query = `SELECT * from sales.fn_get_lead_master_data(${reqData.UserId},${reqData.UserRoleId},${reqData.OrganizationId})`;
        connection.Query_Function(query, function(varlistData) {
            response.StatusId =
                1;
            response.Message = "Success";
            response.LeadMasterData = varlistData;
            log_info("Ended", "GetLeadMasterData", reqData.UserId);
            res.send(response);
        });
    } catch (err) {
        log_error("GetLeadMasterData", err);
        log_info("Ended", "GetLeadMasterData", reqData.UserId);
        res.status(500).send("Error");
    }
});

//Opportunity Master Data API

router.post("/GetOpportunityMasterData", function(req, res) {
    var response = {
        StatusId: 0,
        Message: null,
        OpportunityMasterData: [],
    };
    if (!reqData.ApiKey || reqData.ApiKey != apikey) {
        log_info("Started", "GetOpportunityMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Unauthorized API Request!";
        log_info("Ended", "GetOpportunityMasterData", reqData.UserId);
        log_info(
            "Unauthorized",
            "GetOpportunityMasterData",
            reqData.UserId
        );
        res.status(401).send(response);
        return;
    }

    if (!reqData.UserId || reqData.UserId < 0) {
        log_info("Started", "GetOpportunityMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid UserId";
        log_info(
            "Missing",
            "GetOpportunityMasterData",
            reqData.UserId,
            "UserId"
        );
        log_info("Ended", "GetOpportunityMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    if (!reqData.UserRoleId || reqData.UserRoleId < 0) {
        log_info("Started", "GetOpportunityMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid UserRoleId";
        log_info(
            "Missing",
            "GetOpportunityMasterData",
            reqData.UserId,
            "UserRoleId"
        );
        log_info("Ended", "GetOpportunityMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    if (!reqData.OrganizationId || reqData.OrganizationId < 0) {
        log_info("Started", "GetOpportunityMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid OrganizationId";
        log_info(
            "Missing",
            "GetOpportunityMasterData",
            reqData.UserId,
            "OrganizationId"
        );
        log_info("Ended", "GetOpportunityMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    try {
        log_info("Started", "GetOpportunityMasterData", reqData.UserId);
        //throw new Error('error');
        const connection = new db();
        const query = `SELECT * from sales.fn_get_opportunity_master_data(${reqData.UserId},${reqData.UserRoleId},${reqData.OrganizationId})`;
        connection.Query_Function(query, function(varlistData) {
            response.StatusId =
                1;
            response.Message = "Success";
            response.OpportunityMasterData = varlistData;
            log_info("Ended", "GetOpportunityMasterData", reqData.UserId);
            res.send(response);
        });
    } catch (err) {
        log_error("GetOpportunityMasterData", err);
        log_info("Ended", "GetOpportunityMasterData", reqData.UserId);
        res.status(500).send("Error");
    }
});

//Scheme Master Data API

router.post("/GetSchemeMasterData", function(req, res) {
    var response = {
        StatusId: 0,
        Message: null,
        SchemeMasterData: [],
    };
    if (!reqData.ApiKey || reqData.ApiKey != apikey) {
        log_info("Started", "GetSchemeMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Unauthorized API Request!";
        log_info("Ended", "GetSchemeMasterData", reqData.UserId);
        log_info(
            "Unauthorized",
            "GetSchemeMasterData",
            reqData.UserId
        );
        res.status(401).send(response);
        return;
    }

    if (!reqData.UserId || reqData.UserId < 0) {
        log_info("Started", "GetSchemeMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid UserId";
        log_info(
            "Missing",
            "GetSchemeMasterData",
            reqData.UserId,
            "UserId"
        );
        log_info("Ended", "GetSchemeMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    if (!reqData.UserRoleId || reqData.UserRoleId < 0) {
        log_info("Started", "GetSchemeMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid UserRoleId";
        log_info(
            "Missing",
            "GetSchemeMasterData",
            reqData.UserId,
            "UserRoleId"
        );
        log_info("Ended", "GetSchemeMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    if (!reqData.OrganizationId || reqData.OrganizationId < 0) {
        log_info("Started", "GetSchemeMasterData", reqData.UserId);
        response.StatusId = -1;
        response.Message = "Missing/Invalid OrganizationId";
        log_info(
            "Missing",
            "GetSchemeMasterData",
            reqData.UserId,
            "OrganizationId"
        );
        log_info("Ended", "GetSchemeMasterData", reqData.UserId);
        res.send(response);
        return;
    }
    try {
        log_info("Started", "GetSchemeMasterData", reqData.UserId);
        //throw new Error('error');
        const connection = new db();
        const query = `SELECT * from sales.fn_get_scheme_master_data(${reqData.UserId},${reqData.UserRoleId},${reqData.OrganizationId})`;
        connection.Query_Function(query, function(varlistData) {
            response.StatusId =
                1;
            response.Message = "Success";
            response.SchemeMasterData = varlistData;
            log_info("Ended", "GetSchemeMasterData", reqData.UserId);
            res.send(response);
        });
    } catch (err) {
        log_error("GetSchemeMasterData", err);
        log_info("Ended", "GetSchemeMasterData", reqData.UserId);
        res.status(500).send("Error");
    }
});


module.exports = router;