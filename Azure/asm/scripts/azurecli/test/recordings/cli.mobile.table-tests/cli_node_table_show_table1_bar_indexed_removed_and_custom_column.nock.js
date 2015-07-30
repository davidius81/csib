// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table1/columns')
  .reply(200, "[{\"name\":\"id\",\"type\":\"string\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=id\\/\",\"indexed\":true,\"zumoIndex\":false},{\"name\":\"__createdAt\",\"type\":\"date\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=__createdAt\\/\",\"indexed\":true,\"zumoIndex\":true},{\"name\":\"__updatedAt\",\"type\":\"date\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=__updatedAt\\/\",\"indexed\":false,\"zumoIndex\":false},{\"name\":\"__version\",\"type\":\"timestamp (MSSQL)\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=__version\\/\",\"indexed\":false,\"zumoIndex\":false},{\"name\":\"rowNumber\",\"type\":\"number\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=rowNumber\\/\",\"indexed\":false,\"zumoIndex\":false},{\"name\":\"bar\",\"type\":\"number\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=bar\\/\",\"indexed\":false,\"zumoIndex\":false},{\"name\":\"baz\",\"type\":\"boolean\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=baz\\/\",\"indexed\":true,\"zumoIndex\":true},{\"name\":\"custom\",\"type\":\"string\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=custom\\/\",\"indexed\":false,\"zumoIndex\":false}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2280',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '688865df36638e70a402a39008cb644f',
  date: 'Wed, 08 Apr 2015 01:32:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table1/permissions')
  .reply(200, "{\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/mobileservices\\/mobileservices\\/clitestnode1265\\/repository\\/service\\/table\\/table1.json\",\"insert\":\"public\",\"read\":\"admin\",\"update\":\"admin\",\"delete\":\"admin\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '257',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '7033c09797db835ba6a414584eb64540',
  date: 'Wed, 08 Apr 2015 01:32:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table1')
  .reply(200, "{\"idType\":\"string\",\"hasDeleted\":false,\"metrics\":{\"indexCount\":3,\"recordCount\":-1,\"sizeBytes\":0},\"name\":\"table1\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '300',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '1dafc27c44018ed0ae70a81b272f8dc2',
  date: 'Wed, 08 Apr 2015 01:32:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table1/scripts')
  .reply(200, "[]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'f4fddf16b66486dca3d0ee2936defd23',
  date: 'Wed, 08 Apr 2015 01:32:42 GMT' });
 return result; }]];