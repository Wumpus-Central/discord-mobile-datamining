// === Module 4396: BraintreeUtils ===

// Module 4396 (BraintreeUtils)
import core_CodeSplittingUtils from "core/CodeSplittingUtils" /* 4398 */;
import BraintreeStore from "BraintreeStore" /* 4397 */;

require = fn;
const PaymentSettings = fn(1074).PaymentSettings;
const size = fn(2);
const result = size.fileFinishedImporting("utils/BraintreeUtils.tsx");

export const getBraintreeSDK = function getBraintreeSDK() {
  const obj2 = {
    createPromise() {
      return client(paths[4])(paths[3], paths.paths);
    },
    webpackId: 4401
  };
  return core_CodeSplittingUtils.importWithRetry({
    createPromise() {
      return client(paths[4])(paths[3], paths.paths);
    },
    webpackId: 4401
  }).then((result) => result.default);
};
export const collectDeviceData = function collectDeviceData() {
  let client = BraintreeStore.getClient();
  if (null == client) {
    let obj2 = {
      createPromise() {
          return client(paths[4])(paths[3], paths.paths);
        },
      webpackId: 4401
    };
    let importWithRetryResult = core_CodeSplittingUtils.importWithRetry(obj2);
    let nextPromise1 = core_CodeSplittingUtils.importWithRetry(obj2).then((result) => result.default).then((client) => {
      client = client.client;
      let obj = { authorization: constants.BRAINTREE.KEY };
      let obj2 = client.create({ authorization: constants.BRAINTREE.KEY });
      return client.create({ authorization: constants.BRAINTREE.KEY }).then((result) => {
        client = result;
        let obj = client(4398);
        let obj2 = {
          createPromise() {
            return client(paths[4])(paths[3], paths.paths);
          },
          webpackId: 4401
        };
        const importWithRetryResult = client(4398).importWithRetry({
          createPromise() {
            return client(paths[4])(paths[3], paths.paths);
          },
          webpackId: 4401
        });
        return client(4398).importWithRetry({
          createPromise() {
            return client(paths[4])(paths[3], paths.paths);
          },
          webpackId: 4401
        }).then((result) => result.default).then((dataCollector) => {
          dataCollector = dataCollector.dataCollector;
          const obj = { client };
          const obj2 = dataCollector.create({ client });
          return dataCollector.create({ client }).then((deviceData) => deviceData.deviceData).catch(() => null);
        });
      }).catch(() => null);
    });
    const nextPromise = core_CodeSplittingUtils.importWithRetry(obj2).then((result) => result.default);
  } else {
    const obj4 = {
      createPromise() {
          return client(paths[4])(paths[3], paths.paths);
        },
      webpackId: 4401
    };
    const importWithRetryResult1 = core_CodeSplittingUtils.importWithRetry(obj4);
    nextPromise1 = core_CodeSplittingUtils.importWithRetry(obj4).then((result) => result.default).then((dataCollector) => {
      dataCollector = dataCollector.dataCollector;
      const obj = { client };
      const obj2 = dataCollector.create({ client });
      return dataCollector.create({ client }).then((deviceData) => deviceData.deviceData).catch(() => null);
    });
    const nextPromise2 = core_CodeSplittingUtils.importWithRetry(obj4).then((result) => result.default);
  }
  return nextPromise1;
};