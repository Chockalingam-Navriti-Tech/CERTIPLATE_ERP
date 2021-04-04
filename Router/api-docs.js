const express = require("express");
const router = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cookieparser = require("cookie-parser");

router.use(cookieparser());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Certiplate ERP API's",
            description: "List of Certiplate ERP API's Description"
        },
    },
    apis: ["./Router/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
var options = {
    customCss: ".swagger-ui .topbar { display : none } .swagger-ui .scheme-container { display : none }",
    customSiteTitle: "Certiplate API",
    customfavIcon: "../views/favicon.ico",
};

/**
 * @swagger
 * /api/masterData/GetBusinessVerticalMasterData:
 *      post:
 *          summary: Get Business Vertical Master Data using your User Id
 *          description: Used to get business vertical master data
 *          consumes:
 *              - multipart/form-data
 *          tags:
 *              - Master Data Related API's
 *          parameters:
 *              - in: formData
 *                name: ApiKey
 *                required: true
 *                description: Enter API Key
 *                type: string
 *                format: password
 *              - in: formData
 *                name: UserId
 *                required: true
 *                description: Enter your User Id
 *                type: integer
 *              - in: formData
 *                name: UserRoleId
 *                required: true
 *                description: Enter your User Role Id
 *                type: integer
 *              - in: formData
 *                name: OrganizationId
 *                required: true
 *                description: Enter your Organization Id
 *                type: integer
 *          responses:
 *              200:
 *                  description: A successful response
 *                  schema:
 *                              type: object
 *                              properties:
 *                                  StatusId:
 *                                      type: integer
 *                                      description: Return 1 if success else -1
 *                                  Message:
 *                                      type: string
 *                                      description: Returns the message related to the request
 *                                  BusinessVerticalMasterData:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                           business_vertical_id:
 *                                               type: integer
 *                                               description: Returns business vertical id
 *                                           business_vertical_code:
 *                                               type: string
 *                                               description: Returns business vertical code
 *                                           business_vertical_name:
 *                                               type: string
 *                                               description: Returns business vertical name
 *                                           vertical_head_user_id:
 *                                               type: integer
 *                                               description: Returns vertical head user id
 *                                           vertical_head_user_name:
 *                                               type: string
 *                                               description: Returns vertical head user name
 *                                           active_status:
 *                                               type: boolean
 *                                               description: Returns account status
 *                                           organization_id:
 *                                               type: integer
 *                                               description: Returns organization id
 *                                           organization_name:
 *                                               type: string
 *                                               description: Returns organization name
 *              400:
 *                  description: Error in Connection
 *              401:
 *                  description: Unauthorized
 *              403:
 *                  description: Forbidden from access
 *              404:
 *                  description: Not Found
 * 
 * /api/masterData/GetProductMasterData:
 *      post:
 *          summary: Get Product Master Data using your User Id
 *          description: Used to get product master data
 *          consumes:
 *              - multipart/form-data
 *          tags:
 *              - Master Data Related API's
 *          parameters:
 *              - in: formData
 *                name: ApiKey
 *                required: true
 *                description: Enter API Key
 *                type: string
 *                format: password
 *              - in: formData
 *                name: UserId
 *                required: true
 *                description: Enter your User Id
 *                type: integer
 *              - in: formData
 *                name: UserRoleId
 *                required: true
 *                description: Enter your User Role Id
 *                type: integer
 *              - in: formData
 *                name: OrganizationId
 *                required: true
 *                description: Enter your Organization Id
 *                type: integer
 *          responses:
 *              200:
 *                  description: A successful response
 *                  schema:
 *                              type: object
 *                              properties:
 *                                  StatusId:
 *                                      type: integer
 *                                      description: Return 1 if success else -1
 *                                  Message:
 *                                      type: string
 *                                      description: Returns the message related to the request
 *                                  ProductMasterData:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                           product_id:
 *                                               type: integer
 *                                               description: Returns product id
 *                                           product_code:
 *                                               type: string
 *                                               description: Returns product code
 *                                           product_name:
 *                                               type: string
 *                                               description: Returns product name
 *                                           active_status:
 *                                               type: boolean
 *                                               description: Returns account status
 *                                           organization_id:
 *                                               type: integer
 *                                               description: Returns user organization id
 *                                           organization_name:
 *                                               type: string
 *                                               description: Returns organization name
 *                                           created_user_id:
 *                                               type: integer
 *                                               description: Returns created user id
 *                                           created_user_name:
 *                                               type: string
 *                                               description: Returns created user name
 *                                           created_datetime:
 *                                               type: string
 *                                               description: Returns created date time
 *                                           modified_user_id:
 *                                               type: integer
 *                                               description: Returns modified user id
 *                                           modified_user_name:
 *                                               type: string
 *                                               description: Returns modified user name
 *                                           modified_datetime:
 *                                               type: string
 *                                               description: Returns modified date and time
 *              400:
 *                  description: Error in Connection
 *              401:
 *                  description: Unauthorized
 *              403:
 *                  description: Forbidden from access
 *              404:
 *                  description: Not Found
 * 
 * /api/masterData/GetCustomerMasterData:
 *      post:
 *          summary: Get Customer Master Data using your User Id
 *          description: Used to get customer master data
 *          consumes:
 *              - multipart/form-data
 *          tags:
 *              - Master Data Related API's
 *          parameters:
 *              - in: formData
 *                name: ApiKey
 *                required: true
 *                description: Enter API Key
 *                type: string
 *                format: password
 *              - in: formData
 *                name: UserId
 *                required: true
 *                description: Enter your User Id
 *                type: integer
 *              - in: formData
 *                name: UserRoleId
 *                required: true
 *                description: Enter your User Role Id
 *                type: integer
 *              - in: formData
 *                name: OrganizationId
 *                required: true
 *                description: Enter your Organization Id
 *                type: integer
 *          responses:
 *              200:
 *                  description: A successful response
 *                  schema:
 *                              type: object
 *                              properties:
 *                                  StatusId:
 *                                      type: integer
 *                                      description: Return 1 if success else -1
 *                                  Message:
 *                                      type: string
 *                                      description: Returns the message related to the request
 *                                  CustomerMasterData:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                           customer_id:
 *                                               type: integer
 *                                           customer_code:
 *                                               type: string
 *                                           customer_name:
 *                                               type: string
 *                                           business_vertical_id:
 *                                               type: integer
 *                                           business_vertical_name:
 *                                               type: string
 *                                           gstin:
 *                                               type: string
 *                                           pan:
 *                                               type: string
 *                                           primary_spoc_id:
 *                                               type: integer
 *                                           primary_spoc_name:
 *                                               type: string
 *                                           primary_spoc_email:
 *                                               type: string
 *                                           primary_spoc_phone:
 *                                               type: string
 *                                           spoc_ids:
 *                                               type: string
 *                                           spoc_names:
 *                                               type: string
 *                                           spoc_emails:
 *                                               type: string
 *                                           opportunity_id:
 *                                               type: integer
 *                                           opportunity_name:
 *                                               type: string
 *                                           invoicing_address:
 *                                               type: string
 *                                           logo_file_name:
 *                                               type: string
 *                                           active_status:
 *                                               type: boolean
 *                                           organization_id:
 *                                               type: integer
 *                                           organization_name:
 *                                               type: string
 *                                           created_user_id:
 *                                               type: integer
 *                                               description: Returns created user id
 *                                           created_user_name:
 *                                               type: string
 *                                               description: Returns created user name
 *                                           created_datetime:
 *                                               type: string
 *                                               description: Returns created date time
 *                                           modified_user_id:
 *                                               type: integer
 *                                               description: Returns modified user id
 *                                           modified_user_name:
 *                                               type: string
 *                                               description: Returns modified user name
 *                                           modified_datetime:
 *                                               type: string
 *                                               description: Returns modified date and time
 *              400:
 *                  description: Error in Connection
 *              401:
 *                  description: Unauthorized
 *              403:
 *                  description: Forbidden from access
 *              404:
 *                  description: Not Found
 * 
 * /api/masterData/GetLeadMasterData:
 *      post:
 *          summary: Get Lead Master Data using your User Id
 *          description: Used to get lead master data
 *          consumes:
 *              - multipart/form-data
 *          tags:
 *              - Master Data Related API's
 *          parameters:
 *              - in: formData
 *                name: ApiKey
 *                required: true
 *                description: Enter API Key
 *                type: string
 *                format: password
 *              - in: formData
 *                name: UserId
 *                required: true
 *                description: Enter your User Id
 *                type: integer
 *              - in: formData
 *                name: UserRoleId
 *                required: true
 *                description: Enter your User Role Id
 *                type: integer
 *              - in: formData
 *                name: OrganizationId
 *                required: true
 *                description: Enter your Organization Id
 *                type: integer
 *          responses:
 *              200:
 *                  description: A successful response
 *                  schema:
 *                              type: object
 *                              properties:
 *                                  StatusId:
 *                                      type: integer
 *                                      description: Return 1 if success else -1
 *                                  Message:
 *                                      type: string
 *                                      description: Returns the message related to the request
 *                                  LeadMasterData:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                           lead_id:
 *                                               type: integer
 *                                           lead_name:
 *                                               type: string
 *                                           business_vertical_id:
 *                                               type: integer
 *                                           business_vertical_name:
 *                                               type: string
 *                                           product_id:
 *                                               type: integer
 *                                           product_name:
 *                                               type: string
 *                                           spoc_ids:
 *                                               type: string
 *                                           spoc_names:
 *                                               type: string
 *                                           spoc_emails:
 *                                               type: string
 *                                           lead_address:
 *                                               type: string
 *                                           geography_id:
 *                                               type: integer
 *                                           pin_code:
 *                                               type: integer
 *                                           state_name:
 *                                               type: string
 *                                           district_name:
 *                                               type: string
 *                                           status_id:
 *                                               type: integer
 *                                           estimated_units:
 *                                               type: integer
 *                                           estimated_revenue:
 *                                               type: integer
 *                                           active_status:
 *                                               type: boolean
 *                                           organization_id:
 *                                               type: integer
 *                                           organization_name:
 *                                               type: string
 *                                           created_user_id:
 *                                               type: integer
 *                                               description: Returns created user id
 *                                           created_user_name:
 *                                               type: string
 *                                               description: Returns created user name
 *                                           created_datetime:
 *                                               type: string
 *                                               description: Returns created date time
 *                                           modified_user_id:
 *                                               type: integer
 *                                               description: Returns modified user id
 *                                           modified_user_name:
 *                                               type: string
 *                                               description: Returns modified user name
 *                                           modified_datetime:
 *                                               type: string
 *                                               description: Returns modified date and time
 *              400:
 *                  description: Error in Connection
 *              401:
 *                  description: Unauthorized
 *              403:
 *                  description: Forbidden from access
 *              404:
 *                  description: Not Found
 * 
 * 
 * /api/masterData/GetOpportunityMasterData:
 *      post:
 *          summary: Get Opportunity Master Data using your User Id
 *          description: Used to get opportunity master data
 *          consumes:
 *              - multipart/form-data
 *          tags:
 *              - Master Data Related API's
 *          parameters:
 *              - in: formData
 *                name: ApiKey
 *                required: true
 *                description: Enter API Key
 *                type: string
 *                format: password
 *              - in: formData
 *                name: UserId
 *                required: true
 *                description: Enter your User Id
 *                type: integer
 *              - in: formData
 *                name: UserRoleId
 *                required: true
 *                description: Enter your User Role Id
 *                type: integer
 *              - in: formData
 *                name: OrganizationId
 *                required: true
 *                description: Enter your Organization Id
 *                type: integer
 *          responses:
 *              200:
 *                  description: A successful response
 *                  schema:
 *                              type: object
 *                              properties:
 *                                  StatusId:
 *                                      type: integer
 *                                      description: Return 1 if success else -1
 *                                  Message:
 *                                      type: string
 *                                      description: Returns the message related to the request
 *                                  OpportunityMasterData:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                           opportunity_id:
 *                                               type: integer
 *                                           opportunity_name:
 *                                               type: string
 *                                           lead_id:
 *                                               type: integer
 *                                           lead_name:
 *                                               type: string
 *                                           business_vertical_id:
 *                                               type: integer
 *                                           business_vertical_name:
 *                                               type: string
 *                                           product_id:
 *                                               type: integer
 *                                           product_name:
 *                                               type: string
 *                                           spoc_ids:
 *                                               type: string
 *                                           spoc_names:
 *                                               type: string
 *                                           spoc_emails:
 *                                               type: string
 *                                           opportunity_address:
 *                                               type: string
 *                                           geography_id:
 *                                               type: integer
 *                                           pin_code:
 *                                               type: integer
 *                                           state_name:
 *                                               type: string
 *                                           district_name:
 *                                               type: string
 *                                           status_id:
 *                                               type: integer
 *                                           estimated_units:
 *                                               type: integer
 *                                           estimated_revenue:
 *                                               type: integer
 *                                           organization_id:
 *                                               type: integer
 *                                           organization_name:
 *                                               type: string
 *                                           created_user_id:
 *                                               type: integer
 *                                               description: Returns created user id
 *                                           created_user_name:
 *                                               type: string
 *                                               description: Returns created user name
 *                                           created_datetime:
 *                                               type: string
 *                                               description: Returns created date time
 *                                           modified_user_id:
 *                                               type: integer
 *                                               description: Returns modified user id
 *                                           modified_user_name:
 *                                               type: string
 *                                               description: Returns modified user name
 *                                           modified_datetime:
 *                                               type: string
 *                                               description: Returns modified date and time
 *              400:
 *                  description: Error in Connection
 *              401:
 *                  description: Unauthorized
 *              403:
 *                  description: Forbidden from access
 *              404:
 *                  description: Not Found
 * 
 * 
 * /api/masterData/GetSchemeMasterData:
 *      post:
 *          summary: Get Scheme Master Data using your User Id
 *          description: Used to get scheme master data
 *          consumes:
 *              - multipart/form-data
 *          tags:
 *              - Master Data Related API's
 *          parameters:
 *              - in: formData
 *                name: ApiKey
 *                required: true
 *                description: Enter API Key
 *                type: string
 *                format: password
 *              - in: formData
 *                name: UserId
 *                required: true
 *                description: Enter your User Id
 *                type: integer
 *              - in: formData
 *                name: UserRoleId
 *                required: true
 *                description: Enter your User Role Id
 *                type: integer
 *              - in: formData
 *                name: OrganizationId
 *                required: true
 *                description: Enter your Organization Id
 *                type: integer
 *          responses:
 *              200:
 *                  description: A successful response
 *                  schema:
 *                              type: object
 *                              properties:
 *                                  StatusId:
 *                                      type: integer
 *                                      description: Return 1 if success else -1
 *                                  Message:
 *                                      type: string
 *                                      description: Returns the message related to the request
 *                                  SchemeMasterData:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                           scheme_id:
 *                                               type: integer
 *                                           scheme_code:
 *                                               type: string
 *                                           scheme_name:
 *                                               type: string
 *                                           scheme_start_date:
 *                                               type: string
 *                                           scheme_end_date:
 *                                               type: string
 *                                           funding_source_name:
 *                                               type: string
 *                                           total_budget_amount:
 *                                               type: integer
 *                                           active_status:
 *                                               type: boolean
 *                                           organization_id:
 *                                               type: integer
 *                                           organization_name:
 *                                               type: string
 *                                           created_user_id:
 *                                               type: integer
 *                                               description: Returns created user id
 *                                           created_user_name:
 *                                               type: string
 *                                               description: Returns created user name
 *                                           created_datetime:
 *                                               type: string
 *                                               description: Returns created date time
 *                                           modified_user_id:
 *                                               type: integer
 *                                               description: Returns modified user id
 *                                           modified_user_name:
 *                                               type: string
 *                                               description: Returns modified user name
 *                                           modified_datetime:
 *                                               type: string
 *                                               description: Returns modified date and time
 *              400:
 *                  description: Error in Connection
 *              401:
 *                  description: Unauthorized
 *              403:
 *                  description: Forbidden from access
 *              404:
 *                  description: Not Found
 */

router.use(function(req, res, next) {
    if (req.cookies["internal-access"] == "true") {
        next();
    } else res.redirect("/");
});
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));

module.exports = router;