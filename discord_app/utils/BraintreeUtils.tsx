// === Module 4880: BraintreeUtils ===

// Module 4880 (BraintreeUtils)
import core_CodeSplittingUtils from "core/CodeSplittingUtils" /* 4882 */;
import BraintreeStore from "BraintreeStore" /* 4881 */;

require = fn;
const PaymentSettings = fn(1087).PaymentSettings;
const size = fn(2);
const result = size.fileFinishedImporting("utils/BraintreeUtils.tsx");

export const getBraintreeSDK = function getBraintreeSDK() {
  const obj2 = {
    createPromise() {
      return client(paths[4])(paths[3], paths.paths);
    },
    webpackId: 4885
  };
  return core_CodeSplittingUtils.importWithRetry({
    createPromise() {
      return client(paths[4])(paths[3], paths.paths);
    },
    webpackId: 4885
  }).then((result) => result.default);
};
export const collectDeviceData = function collectDeviceData() {
  let client = BraintreeStore.getClient();
  if (null == client) {
    let obj2 = {
      createPromise() {
          return client(paths[4])(paths[3], paths.paths);
        },
      webpackId: 4885
    };
    let importWithRetryResult = core_CodeSplittingUtils.importWithRetry(obj2);
    let nextPromise1 = core_CodeSplittingUtils.importWithRetry(obj2).then((result) => result.default).then((client) => {
      client = client.client;
      let obj = { authorization: constants.BRAINTREE.KEY };
      let obj2 = client.create({ authorization: constants.BRAINTREE.KEY });
      return client.create({ authorization: constants.BRAINTREE.KEY }).then((result) => {
        client = result;
        let obj = client(4882);
        let obj2 = {
          createPromise() {
            return client(paths[4])(paths[3], paths.paths);
          },
          webpackId: 4885
        };
        const importWithRetryResult = client(4882).importWithRetry({
          createPromise() {
            return client(paths[4])(paths[3], paths.paths);
          },
          webpackId: 4885
        });
        return client(4882).importWithRetry({
          createPromise() {
            return client(paths[4])(paths[3], paths.paths);
          },
          webpackId: 4885
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
      webpackId: 4885
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