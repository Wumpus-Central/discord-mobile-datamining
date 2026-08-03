import getClient from "getClient";
import { PaymentSettings } from "ME";

const require = arg1;
const result = require("module_3919").fileFinishedImporting("utils/BraintreeUtils.tsx");

export const getBraintreeSDK = function getBraintreeSDK() {
  let obj = require(3919);
  obj = {
    createPromise() {
      return callback(paths[4])(paths[3], paths.paths);
    },
    webpackId: 3922
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
    obj[1] = 3922;
    const obj3 = client(3919);
    let importWithRetryResult = client(3919).importWithRetry(obj);
    let nextPromise1 = client(3919).importWithRetry(obj).then((arg0) => arg0.default).then((client) => {
      client = client.client;
      let obj = { authorization: constants.BRAINTREE.KEY };
      obj = client.create(obj);
      return obj.then((arg0) => {
        const callback = arg0;
        let obj = callback(3919);
        obj = {
          createPromise() {
            return callback(paths[4])(paths[3], paths.paths);
          },
          webpackId: 3922
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
    const nextPromise = client(3919).importWithRetry(obj).then((arg0) => arg0.default);
  } else {
    obj = client(3919);
    obj = { createPromise: null, webpackId: null };
    obj[0] = function createPromise() {
      return callback(paths[4])(paths[3], paths.paths);
    };
    obj[1] = 3922;
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