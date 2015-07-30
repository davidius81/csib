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
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb'],
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreate/providers/Microsoft.Compute/virtualMachines/xplattestvm?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"sourceImage\": {\r\n        \"id\": \"/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/images/ad072bd3082149369c449ba5832401ae__Windows-Server-RDSHwO365P-on-Windows-Server-2012-R2-20150128-0010\"\r\n      },\r\n      \"destinationVhdsContainer\": \"https://xplatteststorage18870.blob.core.windows.net/xplatteststoragecnt14510/\",\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"xplattestvm-os-20150417-073440-651513\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage18870.blob.core.windows.net/xplatteststoragecnt14510/xplattestvm-os-20150417-073440-651513.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplattestvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreate/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"provisioningState\": \"creating\"\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreate/providers/Microsoft.Compute/virtualMachines/xplattestvm\",\r\n  \"name\": \"xplattestvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1553',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '618edf07-1b8d-446f-acad-32a27aafc6c1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31900',
  'x-ms-correlation-request-id': '4bad1312-8c50-47ca-8cf7-525fde6a8bc2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T193517Z:4bad1312-8c50-47ca-8cf7-525fde6a8bc2',
  date: 'Fri, 17 Apr 2015 19:35:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreate/providers/Microsoft.Compute/virtualMachines/xplattestvm?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"sourceImage\": {\r\n        \"id\": \"/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/images/ad072bd3082149369c449ba5832401ae__Windows-Server-RDSHwO365P-on-Windows-Server-2012-R2-20150128-0010\"\r\n      },\r\n      \"destinationVhdsContainer\": \"https://xplatteststorage18870.blob.core.windows.net/xplatteststoragecnt14510/\",\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"xplattestvm-os-20150417-073440-651513\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage18870.blob.core.windows.net/xplatteststoragecnt14510/xplattestvm-os-20150417-073440-651513.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplattestvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreate/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"provisioningState\": \"creating\"\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreate/providers/Microsoft.Compute/virtualMachines/xplattestvm\",\r\n  \"name\": \"xplattestvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1553',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '618edf07-1b8d-446f-acad-32a27aafc6c1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31900',
  'x-ms-correlation-request-id': '4bad1312-8c50-47ca-8cf7-525fde6a8bc2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T193517Z:4bad1312-8c50-47ca-8cf7-525fde6a8bc2',
  date: 'Fri, 17 Apr 2015 19:35:17 GMT',
  connection: 'close' });
 return result; }]];