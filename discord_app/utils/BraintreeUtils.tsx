// === Module 4123: getBraintreeSDK ===

// Module 4123 (getBraintreeSDK)
import _mod4125 from "module_4125" /* 4125 */;
import closure_2 from "getClient" /* 4124 */;
import { PaymentSettings } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("utils/BraintreeUtils.tsx");

export const getBraintreeSDK = function getBraintreeSDK() {
  let obj = _mod4125;
  obj = {
    createPromise() {
      return callback(paths[4])(paths[3], paths.paths);
    },
    webpackId: 4128
  };
  return obj.importWithRetry(obj).then((arg0) => arg0.default);
};
export const collectDeviceData = function collectDeviceData() {
  client = client.getClient();
  if (null == client) {
    let obj = { createPromise: null, webpackId: null };
    obj[0] = function createPromise() {
      return callback(paths[4])(paths[3], paths.paths);
    };
    obj[1] = 4128;
    const obj3 = client(4125);
    let importWithRetryResult = client(4125).importWithRetry(obj);
    let nextPromise1 = client(4125).importWithRetry(obj).then((arg0) => arg0.default).then((client) => {
      client = client.client;
      let obj = { authorization: constants.BRAINTREE.KEY };
      obj = client.create(obj);
      return obj.then((arg0) => {
        const callback = arg0;
        let obj = callback(4125);
        obj = {
          createPromise() {
            return callback(paths[4])(paths[3], paths.paths);
          },
          webpackId: 4128
        };
        const importWithRetryResult = obj.importWithRetry(obj);
        return obj.importWithRetry(obj).then((arg0) => arg0.default).then((dataCollector) => {
          dataCollector = dataCollector.dataCollector;
          let obj = { client: closure_0 };
          obj = dataCollector.create(obj);
          return obj.then((deviceData) => deviceData.deviceData).catch(() => null);
        });
      }).catch(() => null);
    });
    const nextPromise = client(4125).importWithRetry(obj).then((arg0) => arg0.default);
  } else {
    obj = client(4125);
    obj = { createPromise: null, webpackId: null };
    obj[0] = function createPromise() {
      return callback(paths[4])(paths[3], paths.paths);
    };
    obj[1] = 4128;
    const importWithRetryResult1 = obj.importWithRetry(obj);
    nextPromise1 = obj.importWithRetry(obj).then((arg0) => arg0.default).then((dataCollector) => {
      dataCollector = dataCollector.dataCollector;
      let obj = { client: closure_0 };
      obj = dataCollector.create(obj);
      return obj.then((deviceData) => deviceData.deviceData).catch(() => null);
    });
    const nextPromise2 = obj.importWithRetry(obj).then((arg0) => arg0.default);
  }
  return nextPromise1;
};