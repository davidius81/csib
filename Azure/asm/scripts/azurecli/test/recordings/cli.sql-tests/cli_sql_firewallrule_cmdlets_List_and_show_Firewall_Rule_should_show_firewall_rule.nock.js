// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_SQL_TEST_LOCATION'] = 'West US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '61694000d96378b1b831955c8a2fd6ea',
  date: 'Fri, 13 Mar 2015 03:48:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers', '*')
  .reply(201, "<ServerName FullyQualifiedDomainName=\"ah7vtf11yq.database.windows.net\" xmlns=\"http://schemas.microsoft.com/sqlazure/2010/12/\">ah7vtf11yq</ServerName>", { 'cache-control': 'no-cache',
  'content-length': '149',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '9763ec2d92397535afca5f3f419bee62',
  date: 'Fri, 13 Mar 2015 03:48:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'bd65117b144c7a7eb4b91096631e6b91',
  date: 'Fri, 13 Mar 2015 03:48:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/ah7vtf11yq/firewallrules', '*')
  .reply(201, "<ServiceResource xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>rule1</Name><Type>Microsoft.SqlAzure.FirewallRule</Type><State>Normal</State><SelfLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/ah7vtf11yq/firewallrules/rule1</SelfLink><ParentLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/ah7vtf11yq</ParentLink><StartIPAddress>192.168.0.1</StartIPAddress><EndIPAddress>192.168.0.255</EndIPAddress></ServiceResource>", { 'cache-control': 'no-store,no-cache',
  'content-length': '594',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'f4a9ade4c06a784cb9d29203f2e47fc6',
  date: 'Fri, 13 Mar 2015 03:48:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '6b08b865a9977cb79126134384b66303',
  date: 'Fri, 13 Mar 2015 03:48:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/ah7vtf11yq/firewallrules')
  .reply(200, "<ServiceResources xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ServiceResource><Name>rule1</Name><Type>Microsoft.SqlAzure.FirewallRule</Type><State>Normal</State><SelfLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/ah7vtf11yq/firewallrules/rule1</SelfLink><ParentLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/ah7vtf11yq</ParentLink><StartIPAddress>192.168.0.1</StartIPAddress><EndIPAddress>192.168.0.255</EndIPAddress></ServiceResource></ServiceResources>", { 'cache-control': 'no-store,no-cache',
  'content-length': '631',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '2020c209db297e98925d7465232b90d7',
  date: 'Fri, 13 Mar 2015 03:48:55 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'be7c2301e0fd7d61ac98c59dc8651e40',
  date: 'Fri, 13 Mar 2015 03:48:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/ah7vtf11yq')
  .reply(200, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '00c5d43cee087b2f8071796ed02f328e',
  date: 'Fri, 13 Mar 2015 03:48:57 GMT' });
 return result; }]];