// discord_app/utils/BraintreeUtils.tsx
import _mod4057 from "../modules/core/CodeSplittingUtils.tsx";
import getClient from "../stores/billing/BraintreeStore.tsx";
import { PaymentSettings } from "../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("utils/BraintreeUtils.tsx");

export const getBraintreeSDK = function getBraintreeSDK() {
  const obj = {
    createPromise() {
      return callback(paths[4])(paths[3], paths.paths);
    },
    webpackId: 4060
  };
  return obj.importWithRetry(obj).then((result) => result.default);
};
export const collectDeviceData = function collectDeviceData() {
  client = client.getClient();
  if (null == client) {
    let obj = { createPromise: null, webpackId: null };
    obj[0] = function createPromise() {
      return callback(paths[4])(paths[3], paths.paths);
    };
    obj[1] = 4060;
    const obj3 = client(4057);
    let importWithRetryResult = client(4057).importWithRetry(obj);
    let nextPromise1 = client(4057).importWithRetry(obj).then((result) => result.default).then((result) => {
      client = result.client;
      let obj = { authorization: constants.BRAINTREE.KEY };
      obj = client.create(obj);
      return obj.then((result) => {
        const callback = result;
        callback(4057);
        let obj = {
          createPromise() {
            return callback(paths[4])(paths[3], paths.paths);
          },
          webpackId: 4060
        };
        const importWithRetryResult = obj.importWithRetry(obj);
        return obj.importWithRetry(obj).then((result) => result.default).then((result) => {
          const dataCollector = result.dataCollector;
          let obj = { client: closure_0 };
          obj = dataCollector.create(obj);
          return obj.then((result) => result.deviceData).catch((error) => null);
        });
      }).catch((error) => null);
    });
    const nextPromise = client(4057).importWithRetry(obj).then((result) => result.default);
  } else {
    client(4057);
    obj = { createPromise: null, webpackId: null };
    obj[0] = function createPromise() {
      return callback(paths[4])(paths[3], paths.paths);
    };
    obj[1] = 4060;
    const importWithRetryResult1 = obj.importWithRetry(obj);
    nextPromise1 = obj.importWithRetry(obj).then((result) => result.default).then((result) => {
      const dataCollector = result.dataCollector;
      let obj = { client: closure_0 };
      obj = dataCollector.create(obj);
      return obj.then((result) => result.deviceData).catch((error) => null);
    });
    const nextPromise2 = obj.importWithRetry(obj).then((result) => result.default);
  }
  return nextPromise1;
};