// discord_app/utils/BraintreeUtils.tsx
import core_CodeSplittingUtils from "../modules/core/CodeSplittingUtils.tsx";
import BraintreeStore from "../stores/billing/BraintreeStore.tsx";

require = fn;
const PaymentSettings = fn(1074).PaymentSettings;
const size = fn(2);
const result = size.fileFinishedImporting("utils/BraintreeUtils.tsx");

export const getBraintreeSDK = function getBraintreeSDK() {
  const obj = {
    createPromise() {
      return client(paths[4])(paths[3], paths.paths);
    },
    webpackId: 4239,
  };
  return obj.importWithRetry(obj).then((result) => result.default);
};
export const collectDeviceData = function collectDeviceData() {
  let client = BraintreeStore.getClient();
  if (null == client) {
    let obj = {
      createPromise() {
        return client(paths[4])(paths[3], paths.paths);
      },
      webpackId: 4239,
    };
    let importWithRetryResult = core_CodeSplittingUtils.importWithRetry(obj);
    let nextPromise1 = core_CodeSplittingUtils
      .importWithRetry(obj)
      .then((result) => result.default)
      .then((client) => {
        client = client.client;
        let obj = { authorization: constants.BRAINTREE.KEY };
        obj = client.create(obj);
        return obj
          .then((result) => {
            client = result;
            client(4236);
            let obj = {
              createPromise() {
                return client(paths[4])(paths[3], paths.paths);
              },
              webpackId: 4239,
            };
            const importWithRetryResult = obj.importWithRetry(obj);
            return obj
              .importWithRetry(obj)
              .then((result) => result.default)
              .then((dataCollector) => {
                dataCollector = dataCollector.dataCollector;
                let obj = { client };
                obj = dataCollector.create(obj);
                return obj.then((deviceData) => deviceData.deviceData).catch(() => null);
              });
          })
          .catch(() => null);
      });
    const nextPromise = core_CodeSplittingUtils.importWithRetry(obj).then((result) => result.default);
  } else {
    obj = {
      createPromise() {
        return client(paths[4])(paths[3], paths.paths);
      },
      webpackId: 4239,
    };
    const importWithRetryResult1 = obj.importWithRetry(obj);
    nextPromise1 = obj
      .importWithRetry(obj)
      .then((result) => result.default)
      .then((dataCollector) => {
        dataCollector = dataCollector.dataCollector;
        let obj = { client };
        obj = dataCollector.create(obj);
        return obj.then((deviceData) => deviceData.deviceData).catch(() => null);
      });
    const nextPromise2 = obj.importWithRetry(obj).then((result) => result.default);
  }
  return nextPromise1;
};
