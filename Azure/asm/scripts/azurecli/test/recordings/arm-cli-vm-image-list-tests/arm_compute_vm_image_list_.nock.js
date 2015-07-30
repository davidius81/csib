// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/publishers/a10networks/artifacttypes/vmimage/offers/a10-vthunder-adc/skus/vthunder_byol/versions?api-version=2015-05-01-preview')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"1.0.0\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/a10networks/ArtifactTypes/VMImage/Offers/a10-vthunder-adc/Skus/vthunder_byol/Versions/1.0.0\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '276',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f4570b59-810f-46c8-b645-03b9af8dc717',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31983',
  'x-ms-correlation-request-id': 'da44fa08-43fe-4c1c-bf49-06d2231e252e',
  'x-ms-routing-request-id': 'EASTASIA:20150427T150110Z:da44fa08-43fe-4c1c-bf49-06d2231e252e',
  date: 'Mon, 27 Apr 2015 15:01:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/publishers/a10networks/artifacttypes/vmimage/offers/a10-vthunder-adc/skus/vthunder_byol/versions?api-version=2015-05-01-preview')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"1.0.0\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/a10networks/ArtifactTypes/VMImage/Offers/a10-vthunder-adc/Skus/vthunder_byol/Versions/1.0.0\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '276',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f4570b59-810f-46c8-b645-03b9af8dc717',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31983',
  'x-ms-correlation-request-id': 'da44fa08-43fe-4c1c-bf49-06d2231e252e',
  'x-ms-routing-request-id': 'EASTASIA:20150427T150110Z:da44fa08-43fe-4c1c-bf49-06d2231e252e',
  date: 'Mon, 27 Apr 2015 15:01:09 GMT',
  connection: 'close' });
 return result; }]];