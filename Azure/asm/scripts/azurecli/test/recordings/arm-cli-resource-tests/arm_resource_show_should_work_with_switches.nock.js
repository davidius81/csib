// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '3ca49042-782a-4cc9-89b5-ee1b487fe115',
    name: 'AzSdkCore1',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1449d5b7-8a83-47db-ae4c-9b03e888bad0',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb', 'microsoft.web'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '261eeda169d379b19f54f88457265333',
  date: 'Thu, 12 Mar 2015 18:26:50 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource1495?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource1495' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31982',
  'x-ms-request-id': 'efd8ea53-651c-4ca9-bdd6-12f278f73e87',
  'x-ms-correlation-request-id': 'efd8ea53-651c-4ca9-bdd6-12f278f73e87',
  'x-ms-routing-request-id': 'WESTUS:20150312T182650Z:efd8ea53-651c-4ca9-bdd6-12f278f73e87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:26:50 GMT',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'e310b4afcc2c75bf869b83131d91fe98',
  date: 'Thu, 12 Mar 2015 18:26:50 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource1495?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xTestResource1495\",\"name\":\"xTestResource1495\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1177',
  'x-ms-request-id': 'e23eb768-e786-49af-b9a4-f94830469d3c',
  'x-ms-correlation-request-id': 'e23eb768-e786-49af-b9a4-f94830469d3c',
  'x-ms-routing-request-id': 'WESTUS:20150312T182651Z:e23eb768-e786-49af-b9a4-f94830469d3c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:26:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'a30bb7239bb07ea799abdabc18410b6b',
  date: 'Thu, 12 Mar 2015 18:26:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource1495/providers/Microsoft.Web//sites/xTestGrpRes638?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3f01830a-47c6-433e-923f-b44b40c5b830',
  'x-ms-correlation-request-id': '3f01830a-47c6-433e-923f-b44b40c5b830',
  'x-ms-routing-request-id': 'WESTUS:20150312T182653Z:3f01830a-47c6-433e-923f-b44b40c5b830',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:26:52 GMT',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '60549f208b3271858e8d86bfbd1a617e',
  date: 'Thu, 12 Mar 2015 18:26:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource1495/providers/Microsoft.Web//sites/xTestGrpRes638?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xTestResource1495/providers/Microsoft.Web/sites/xTestGrpRes638\",\"name\":\"xTestGrpRes638\",\"type\":\"Microsoft.Web/sites\",\"kind\":null,\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes638\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres638.azurewebsites.net\"],\"webSpace\":\"xTestResource1495-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-003.api.azurewebsites.windows.net:454/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/webspaces/xTestResource1495-SouthCentralUSwebspace/sites/xTestGrpRes638\",\"repositorySiteName\":\"xTestGrpRes638\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres638.azurewebsites.net\",\"xtestgrpres638.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres638.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres638.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2015-03-12T18:26:58.187\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes638\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"kind\":null,\"cloningInfo\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1848',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ee567bd6-e429-4b53-9fbf-51cbd0d4ab2c',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1178',
  'x-ms-correlation-request-id': 'd3ec652e-1119-466d-81eb-c529cafbf2fe',
  'x-ms-routing-request-id': 'WESTUS:20150312T182700Z:d3ec652e-1119-466d-81eb-c529cafbf2fe',
  date: 'Thu, 12 Mar 2015 18:26:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '2292313827e17789b3371403ed62f562',
  date: 'Thu, 12 Mar 2015 18:27:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource1495/providers/Microsoft.Web//sites/xTestGrpRes638?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xTestResource1495/providers/Microsoft.Web/sites/xTestGrpRes638\",\"name\":\"xTestGrpRes638\",\"type\":\"Microsoft.Web/sites\",\"kind\":null,\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes638\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres638.azurewebsites.net\"],\"webSpace\":\"xTestResource1495-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-003.api.azurewebsites.windows.net:454/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/webspaces/xTestResource1495-SouthCentralUSwebspace/sites/xTestGrpRes638\",\"repositorySiteName\":\"xTestGrpRes638\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres638.azurewebsites.net\",\"xtestgrpres638.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres638.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres638.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2015-03-12T18:26:58.28\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes638\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"kind\":null,\"cloningInfo\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1847',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D05CF220053E80"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'edef3b1a-e301-4fa9-912c-f21152ba5118',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '31979',
  'x-ms-correlation-request-id': '1a4274b4-648f-4c19-8e5c-eb1369839998',
  'x-ms-routing-request-id': 'WESTUS:20150312T182701Z:1a4274b4-648f-4c19-8e5c-eb1369839998',
  date: 'Thu, 12 Mar 2015 18:27:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource1495/providers/Microsoft.Web//sites/xTestGrpRes638/providers/Microsoft.Authorization/permissions?api-version=2014-07-01-preview')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '45',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:ed14fc49-d716-4bf8-8402-61d478ea5b48',
  'x-ms-ratelimit-remaining-subscription-reads': '31970',
  'x-ms-correlation-request-id': '140fd1f7-85f1-4755-9049-dec6e6fddaa0',
  'x-ms-routing-request-id': 'WESTUS:20150312T182701Z:140fd1f7-85f1-4755-9049-dec6e6fddaa0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:27:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '909a3c00f8d673bd9e90b5a060cba775',
  date: 'Thu, 12 Mar 2015 18:27:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource1495?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMTQ5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-request-id': '851d0e3c-235c-4343-9cad-d84aecd9cd13',
  'x-ms-correlation-request-id': '851d0e3c-235c-4343-9cad-d84aecd9cd13',
  'x-ms-routing-request-id': 'WESTUS:20150312T182703Z:851d0e3c-235c-4343-9cad-d84aecd9cd13',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:27:02 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '92ef99d82957782ea3a5153c7ea7e9dd',
  date: 'Thu, 12 Mar 2015 18:27:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMTQ5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMTQ5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '31981',
  'x-ms-request-id': '30715dc5-6354-458c-82c8-69448da785e1',
  'x-ms-correlation-request-id': '30715dc5-6354-458c-82c8-69448da785e1',
  'x-ms-routing-request-id': 'WESTUS:20150312T182718Z:30715dc5-6354-458c-82c8-69448da785e1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:27:18 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource1495','xTestGrpRes638'];};