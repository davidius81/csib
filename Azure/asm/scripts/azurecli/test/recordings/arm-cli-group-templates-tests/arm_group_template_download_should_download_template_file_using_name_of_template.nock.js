// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.web', 'microsoft.insights', 'successbricks.cleardb'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://gallery.azure.com:443')
  .get('/Microsoft.Gallery/galleryitems/Microsoft.ASPNETStarterSite.0.2.2-preview')
  .reply(200, "{\"identity\":\"Microsoft.ASPNETStarterSite.0.2.2-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"ASPNETStarterSite\",\"itemDisplayName\":\"ASP.NET Starter Site\",\"version\":\"0.2.2-preview\",\"summary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"longSummary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"description\":\"<p>Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan-Default\",\"deploymentTemplateFileUrls\":{\"website_ExistingHostingPlan\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_ExistingHostingPlan.json\",\"website_NewHostingPlan\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan.json\",\"website_NewHostingPlan-Default\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"website_NewHostingPlan_BasicStandard\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan_BasicStandard.json\"}},\"categoryIds\":[\"web\",\"starterSite\"],\"screenshotUrls\":[],\"links\":[{\"id\":\"0\",\"displayName\":\"About Microsoft\",\"uri\":\"http://www.microsoft.com/\"},{\"id\":\"1\",\"displayName\":\"Documentation\",\"uri\":\"http://www.microsoft.com/web/category/all\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Wide.png\",\"hero\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=4e26808cbc9743e794890df83b8fe5f1; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 15 Apr 2015 18:56:38 GMT',
  'content-length': '2978' });
 return result; },
function (nock) { 
var result = 
nock('https://gallery.azure.com:443')
  .get('/Microsoft.Gallery/galleryitems/Microsoft.WebSiteMySQLDatabase.0.3.9-preview')
  .reply(200, "{\"identity\":\"Microsoft.WebSiteMySQLDatabase.0.3.9-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"WebSiteMySQLDatabase\",\"itemDisplayName\":\"Web app + MySQL\",\"version\":\"0.3.9-preview\",\"summary\":\"Enjoy secure and flexible development, deployment, and scaling options for your web app plus a MySQL database.\",\"longSummary\":\"Enjoy secure and flexible development, deployment, and scaling options for your web app plus a MySQL database.\",\"description\":\"<h3>Create and deploy web apps in seconds, as powerful as you need them</h3>\\n<p>Leverage your existing tools to create and deploy applications without the hassle of managing infrastructure. App Service web apps offer secure and flexible development, deployment, and scaling options for any sized web application. Use frameworks and templates to create web apps in seconds. Choose from source control options like TFS, GitHub, and BitBucket. Use any tool or OS to develop your app with .NET, PHP, Node.js or Python.</p>\\n<p>Use this Azure template to create a Web app and ClearDB MySQL Database together to start developing even faster.</p>\\n<ul>\\n<li>Fastest way to build for the cloud</li>\\n<li>Provision and deploy fast</li>\\n<li>Secure platform that scales automatically</li>\\n<li>Great experience for Visual Studio developers</li>\\n<li>Open and flexible for everyone</li>\\n<li>Monitor, alert, and auto scale</li>\\n</ul>\\n<p>MySQL Database requires a credit card to be associated with the subscription. To add credit card to your subscription, <a href=\\\"http://account.windowsazure.com/subscriptions\\\" target=\\\"_blank\\\">click here</a>. Additionally, MySQL Database is not available in certain regions and cannot be created by users who have an Enterprise Agreement or by co-admins. For more information, <a href=\\\"http://go.microsoft.com/fwlink/?LinkId=268693\\\" target=\\\"_blank\\\">click here</a>.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.WebSiteMySQLDatabase.0.3.9-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan_MySQL_NewDB-Default\",\"deploymentTemplateFileUrls\":{\"website_NewHostingPlan_MySQL_ExistingDB\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.WebSiteMySQLDatabase.0.3.9-preview/DeploymentTemplates/Website_NewHostingPlan_MySQL_ExistingDB.json\",\"website_NewHostingPlan_MySQL_NewDB\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.WebSiteMySQLDatabase.0.3.9-preview/DeploymentTemplates/Website_NewHostingPlan_MySQL_NewDB.json\",\"website_NewHostingPlanBasicStandard_MySQL_ExistingDB\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.WebSiteMySQLDatabase.0.3.9-preview/DeploymentTemplates/Website_NewHostingPlanBasicStandard_MySQL_ExistingDB.json\",\"website_NewHostingPlanBasicStandard_MySQL_NewDB\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.WebSiteMySQLDatabase.0.3.9-preview/DeploymentTemplates/Website_NewHostingPlanBasicStandard_MySQL_NewDB.json\",\"website_NewHostingPlan_MySQL_NewDB-Default\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.WebSiteMySQLDatabase.0.3.9-preview/DeploymentTemplates/Website_NewHostingPlan_MySQL_NewDB-Default.json\"}},\"categoryIds\":[\"azure\",\"web\",\"data\"],\"screenshotUrls\":[\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.WebSiteMySQLDatabase.0.3.9-preview/Screenshots/Image01.png\"],\"links\":[{\"id\":\"0\",\"displayName\":\"Documentation\",\"uri\":\"http://azure.microsoft.com/en-us/documentation/services/web-sites/\"},{\"id\":\"1\",\"displayName\":\"Solution Overview\",\"uri\":\"http://azure.microsoft.com/en-us/services/web-sites/\"},{\"id\":\"2\",\"displayName\":\"Solutions you can deliver\",\"uri\":\"http://azure.microsoft.com/en-us/solutions/web/\"},{\"id\":\"3\",\"displayName\":\"Pricing Details\",\"uri\":\"http://azure.microsoft.com/en-us/pricing/details/web-sites/\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.WebSiteMySQLDatabase.0.3.9-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.WebSiteMySQLDatabase.0.3.9-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.WebSiteMySQLDatabase.0.3.9-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.WebSiteMySQLDatabase.0.3.9-preview/Icons/Wide.png\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=7cbeae11f29c4661afc38fdb00cf2dd2; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 15 Apr 2015 18:56:37 GMT',
  'content-length': '4844' });
 return result; },
function (nock) { 
var result = 
nock('https://gallerystoreprodch.blob.core.windows.net:443')
  .get('/prod-microsoft-windowsazure-gallery/Microsoft.WebSiteMySQLDatabase.0.3.9-preview/DeploymentTemplates/Website_NewHostingPlan_MySQL_NewDB-Default.json')
  .reply(200, "{\r\n    \"$schema\": \"http://schema.management.azure.com/schemas/2014-04-01-preview/deploymentTemplate.json#\",\r\n    \"contentVersion\": \"1.0.0.0\",\r\n    \"parameters\": {\r\n        \"siteName\": {\r\n            \"type\": \"string\"\r\n        },\r\n        \"hostingPlanName\": {\r\n            \"type\": \"string\"\r\n        },\r\n        \"hostingEnvironment\": {\r\n            \"type\": \"string\",\r\n            \"defaultValue\": \"\"\r\n        },\r\n       \"serverFarmResourceGroup\": {\r\n            \"type\": \"string\"\r\n        },\r\n        \"siteLocation\": {\r\n            \"type\": \"string\"\r\n        },\r\n        \"sku\": {\r\n            \"type\": \"string\",\r\n            \"allowedValues\": [\r\n                \"Free\",\r\n                \"Shared\",\r\n                \"Basic\",\r\n                \"Standard\",\r\n                \"Premium\"\r\n            ],\r\n            \"defaultValue\": \"Free\"\r\n        },\r\n        \"workerSize\": {\r\n            \"type\": \"string\",\r\n            \"allowedValues\": [\r\n                \"0\",\r\n                \"1\",\r\n                \"2\"\r\n            ],\r\n            \"defaultValue\": \"0\"\r\n        },\r\n        \"databaseName\": {\r\n            \"type\": \"string\"\r\n        },\r\n        \"databaseLocation\": {\r\n            \"type\": \"string\"\r\n        },\r\n        \"databaseSku\": {\r\n            \"type\": \"string\",\r\n            \"allowedValues\": [\r\n              \"Free\",\r\n              \"Jupiter\",\r\n              \"Saturn\",\r\n              \"Venus\"\r\n            ],\r\n            \"defaultValue\": \"Free\"\r\n        }\r\n    },\r\n    \"resources\": [\r\n        {\r\n            \"apiVersion\": \"2014-01-01\",\r\n            \"tags\": {\r\n                \"provision_source\": \"RMS\"\r\n            },\r\n            \"name\": \"[parameters('databaseName')]\",\r\n            \"type\": \"SuccessBricks.ClearDB/databases\",\r\n            \"location\": \"[parameters('databaseLocation')]\",\r\n\t    \"plan\": {\r\n                \"name\": \"[parameters('databaseSku')]\"\r\n            }\r\n        },\r\n        {\r\n            \"apiVersion\": \"2014-06-01\",\r\n            \"name\": \"[parameters('hostingPlanName')]\",\r\n            \"type\": \"Microsoft.Web/serverfarms\",\r\n            \"location\": \"[parameters('siteLocation')]\",\r\n            \"properties\": {\r\n                \"name\": \"[parameters('hostingPlanName')]\",\r\n                \"sku\": \"[parameters('sku')]\",\r\n                \"workerSize\": \"[parameters('workerSize')]\",\r\n                \"hostingEnvironment\": \"[parameters('hostingEnvironment')]\",\r\n                \"numberOfWorkers\": 0\r\n            }\r\n        },\r\n        {\r\n            \"apiVersion\": \"2015-02-01\",\r\n            \"name\": \"[parameters('siteName')]\",\r\n            \"type\": \"Microsoft.Web/sites\",\r\n            \"location\": \"[parameters('siteLocation')]\",\r\n            \"dependsOn\": [\r\n                \"[concat('Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n            ],\r\n            \"tags\": {\r\n                \"[concat('hidden-related:', '/subscriptions/', parameters('subscriptionId'),'/resourcegroups/', parameters('serverFarmResourceGroup'), '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\": \"empty\"\r\n            },\r\n            \"properties\": {\r\n                \"name\": \"[parameters('siteName')]\",\r\n                \"serverFarmId\":\"[concat('/subscriptions/', parameters('subscriptionId'),'/resourcegroups/', parameters('serverFarmResourceGroup'), '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n                \"hostingEnvironment\": \"[parameters('hostingEnvironment')]\"\r\n            },\r\n            \"resources\": [\r\n                {\r\n                    \"apiVersion\": \"2014-06-01\",\r\n                    \"type\": \"config\",\r\n                    \"name\": \"web\",\r\n                    \"dependsOn\": [\r\n                        \"[concat('Microsoft.Web/Sites/', parameters('siteName'))]\"\r\n                    ],\r\n                    \"properties\": {\r\n                        \"connectionStrings\": [\r\n                            {\r\n                                \"ConnectionString\": \"[reference(concat('SuccessBricks.ClearDB/databases/', parameters('databaseName'))).connectionString]\",\r\n                                \"Name\": \"DefaultConnection\",\r\n                                \"Type\": 0\r\n                            }\r\n                        ]\r\n                    }\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            \"apiVersion\": \"2014-04-01\",\r\n            \"name\": \"[concat(parameters('hostingPlanName'), '-', resourceGroup().name)]\",\r\n            \"type\": \"microsoft.insights/autoscalesettings\",\r\n            \"location\": \"East US\",\r\n            \"tags\": {\r\n                \"[concat('hidden-link:', '/subscriptions/', parameters('subscriptionId'),'/resourcegroups/', parameters('serverFarmResourceGroup'), '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\": \"Resource\"\r\n            },\r\n            \"dependsOn\": [\r\n\t            \"[concat('Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n\t        ],\r\n            \"properties\": {\r\n                \"profiles\": [\r\n                  {\r\n                    \"name\": \"Default\",\r\n                    \"capacity\": {\r\n                      \"minimum\": \"1\",\r\n                      \"maximum\": \"2\",\r\n                      \"default\": \"1\"\r\n                    },\r\n                    \"rules\": [\r\n                      {\r\n                        \"metricTrigger\": {\r\n                          \"metricName\": \"CpuPercentage\",\r\n                          \"metricResourceUri\": \"[concat('/subscriptions/', parameters('subscriptionId'),'/resourcegroups/', parameters('serverFarmResourceGroup'),  '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n                          \"timeGrain\": \"PT1M\",\r\n                          \"statistic\": \"Average\",\r\n                          \"timeWindow\": \"PT10M\",\r\n                          \"timeAggregation\": \"Average\",\r\n                          \"operator\": \"GreaterThan\",\r\n                          \"threshold\": 80.0\r\n                        },\r\n                        \"scaleAction\": {\r\n                          \"direction\": \"Increase\",\r\n                          \"type\": \"ChangeCount\",\r\n                          \"value\": \"1\",\r\n                          \"cooldown\": \"PT10M\"\r\n                        }\r\n                      },\r\n                      {\r\n                        \"metricTrigger\": {\r\n                          \"metricName\": \"CpuPercentage\",\r\n                          \"metricResourceUri\": \"[concat('/subscriptions/', parameters('subscriptionId'),'/resourcegroups/', parameters('serverFarmResourceGroup'),  '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n                          \"timeGrain\": \"PT1M\",\r\n                          \"statistic\": \"Average\",\r\n                          \"timeWindow\": \"PT1H\",\r\n                          \"timeAggregation\": \"Average\",\r\n                          \"operator\": \"LessThan\",\r\n                          \"threshold\": 60.0\r\n                        },\r\n                        \"scaleAction\": {\r\n                          \"direction\": \"Decrease\",\r\n                          \"type\": \"ChangeCount\",\r\n                          \"value\": \"1\",\r\n                          \"cooldown\": \"PT1H\"\r\n                        }\r\n                      }\r\n                    ]\r\n                  }\r\n                ],\r\n                \"enabled\": false,\r\n                \"name\": \"[concat(parameters('hostingPlanName'), '-', resourceGroup().name)]\",\r\n                \"targetResourceUri\": \"[concat('/subscriptions/', parameters('subscriptionId'),'/resourcegroups/', parameters('serverFarmResourceGroup'), '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n              }\r\n        },\r\n        {\r\n          \"apiVersion\": \"2014-04-01\",\r\n          \"name\": \"[concat('ServerErrors ', parameters('siteName'))]\",\r\n          \"type\": \"microsoft.insights/alertrules\",\r\n          \"location\": \"East US\",\r\n          \"dependsOn\": [\r\n\t          \"[concat('Microsoft.Web/sites/', parameters('siteName'))]\"\r\n\t      ],\r\n            \"tags\": {\r\n                \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\": \"Resource\"\r\n            },\r\n          \"properties\": {\r\n            \"name\": \"[concat('ServerErrors ', parameters('siteName'))]\",\r\n            \"description\": \"[concat(parameters('siteName'), ' has some server errors, status code 5xx.')]\",\r\n            \"isEnabled\": false,\r\n            \"condition\": {\r\n              \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\r\n              \"dataSource\": {\r\n                \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\r\n                \"resourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\",\r\n                \"metricName\": \"Http5xx\"\r\n              },\r\n              \"operator\": \"GreaterThan\",\r\n              \"threshold\": 0.0,\r\n              \"windowSize\": \"PT5M\"\r\n            },\r\n            \"action\": {\r\n              \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\r\n              \"sendToServiceOwners\": true,\r\n              \"customEmails\": []\r\n            }\r\n          }\r\n        },\r\n        {\r\n            \"apiVersion\": \"2014-04-01\",\r\n            \"name\": \"[concat('ForbiddenRequests ', parameters('siteName'))]\",\r\n            \"type\": \"microsoft.insights/alertrules\",\r\n            \"location\": \"East US\",\r\n            \"dependsOn\": [\r\n                \"[concat('Microsoft.Web/sites/', parameters('siteName'))]\"\r\n            ],\r\n            \"tags\": {\r\n                \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\": \"Resource\"\r\n            },\r\n            \"properties\": {\r\n                \"name\": \"[concat('ForbiddenRequests ', parameters('siteName'))]\",\r\n                \"description\": \"[concat(parameters('siteName'), ' has some requests that are forbidden, status code 403.')]\",\r\n                \"isEnabled\": false,\r\n                \"condition\": {\r\n                    \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\r\n                    \"dataSource\": {\r\n                        \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\r\n                        \"resourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\",\r\n                        \"metricName\": \"Http403\"\r\n                    },\r\n                    \"operator\": \"GreaterThan\",\r\n                    \"threshold\": 0,\r\n                    \"windowSize\": \"PT5M\"\r\n                },\r\n                \"action\": {\r\n                    \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\r\n                    \"sendToServiceOwners\": true,\r\n                    \"customEmails\": []\r\n                }\r\n            }\r\n        },\r\n        {\r\n            \"apiVersion\": \"2014-04-01\",\r\n            \"name\": \"[concat('CPUHigh ', parameters('hostingPlanName'))]\",\r\n            \"type\": \"microsoft.insights/alertrules\",\r\n            \"location\": \"East US\",\r\n            \"dependsOn\": [\r\n                \"[concat('Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n            ],\r\n            \"tags\": {\r\n                \"[concat('hidden-link:', '/subscriptions/', parameters('subscriptionId'),'/resourcegroups/', parameters('serverFarmResourceGroup'), '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\": \"Resource\"\r\n            },\r\n            \"properties\": {\r\n                \"name\": \"[concat('CPUHigh ', parameters('hostingPlanName'))]\",\r\n                \"description\": \"[concat('The average CPU is high across all the instances of ', parameters('hostingPlanName'))]\",\r\n                \"isEnabled\": false,\r\n                \"condition\": {\r\n                    \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\r\n                    \"dataSource\": {\r\n                        \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\r\n                        \"resourceUri\": \"[concat('/subscriptions/', parameters('subscriptionId'),'/resourcegroups/', parameters('serverFarmResourceGroup'),  '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n                        \"metricName\": \"CpuPercentage\"\r\n                    },\r\n                    \"operator\": \"GreaterThan\",\r\n                    \"threshold\": 90,\r\n                    \"windowSize\": \"PT15M\"\r\n                },\r\n                \"action\": {\r\n                    \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\r\n                    \"sendToServiceOwners\": true,\r\n                    \"customEmails\": []\r\n                }\r\n            }\r\n        },\r\n        {\r\n            \"apiVersion\": \"2014-04-01\",\r\n            \"name\": \"[concat('LongHttpQueue ', parameters('hostingPlanName'))]\",\r\n            \"type\": \"microsoft.insights/alertrules\",\r\n            \"location\": \"East US\",\r\n            \"dependsOn\": [\r\n                \"[concat('Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n            ],\r\n            \"tags\": {\r\n                \"[concat('hidden-link:', '/subscriptions/', parameters('subscriptionId'),'/resourcegroups/', parameters('serverFarmResourceGroup'),  '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\": \"Resource\"\r\n            },\r\n            \"properties\": {\r\n                \"name\": \"[concat('LongHttpQueue ', parameters('hostingPlanName'))]\",\r\n                \"description\": \"[concat('The HTTP queue for the instances of ', parameters('hostingPlanName'), ' has a large number of pending requests.')]\",\r\n                \"isEnabled\": false,\r\n                \"condition\": {\r\n                    \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\r\n                    \"dataSource\": {\r\n                        \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\r\n                        \"resourceUri\": \"[concat('/subscriptions/', parameters('subscriptionId'),'/resourcegroups/', parameters('serverFarmResourceGroup'), '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n                        \"metricName\": \"HttpQueueLength\"\r\n                    },\r\n                    \"operator\": \"GreaterThan\",\r\n                    \"threshold\": 100.0,\r\n                    \"windowSize\": \"PT5M\"\r\n                },\r\n                \"action\": {\r\n                    \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\r\n                    \"sendToServiceOwners\": true,\r\n                    \"customEmails\": []\r\n                }\r\n            }\r\n        },\r\n        {\r\n            \"apiVersion\": \"2014-04-01\",\r\n            \"name\": \"[parameters('siteName')]\",\r\n            \"type\": \"microsoft.insights/components\",\r\n            \"location\": \"Central US\",\r\n            \"dependsOn\": [\r\n                \"[concat('Microsoft.Web/sites/', parameters('siteName'))]\"\r\n            ],\r\n            \"tags\": {\r\n                \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\": \"Resource\"\r\n            },\r\n            \"properties\": {\r\n                \"ApplicationId\": \"[parameters('siteName')]\"\r\n            }\r\n        }\r\n    ]\r\n}", { 'cache-control': 'public, max-age=86400',
  'content-length': '15503',
  'content-type': 'application/json',
  'content-md5': 'Ar9/7bx6zKfsyYTKr4H3mw==',
  'last-modified': 'Tue, 14 Apr 2015 22:30:50 GMT',
  etag: '0x8D24519CB5A882E',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'efdda5b3-0001-0010-2d94-40584a000000',
  'x-ms-version': '2009-09-19',
  'x-ms-lease-status': 'unlocked',
  'x-ms-blob-type': 'BlockBlob',
  'access-control-expose-headers': 'x-ms-request-id,Server,x-ms-version,Content-Type,Cache-Control,Last-Modified,ETag,Content-MD5,x-ms-lease-status,x-ms-blob-type',
  'access-control-allow-origin': '*',
  date: 'Wed, 15 Apr 2015 18:56:39 GMT' });
 return result; }]];