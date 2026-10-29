// === Module 4822: BraintreeUtils ===

// Module 4822 (BraintreeUtils)
import core_CodeSplittingUtils from "core/CodeSplittingUtils" /* 4824 */;
import BraintreeStore from "BraintreeStore" /* 4823 */;

require = fn;
const PaymentSettings = fn(1084).PaymentSettings;
const size = fn(2);
const result = size.fileFinishedImporting("utils/BraintreeUtils.tsx");

export function getBraintreeSDK() {
  const obj2 = {
    createPromise() {
      return client(paths[4])(paths[3], paths.paths);
    },
    webpackId: 4827
  };
  return core_CodeSplittingUtils.importWithRetry({
    createPromise() {
      return client(paths[4])(paths[3], paths.paths);
    },
    webpackId: 4827
  }).then((result) => result.default);
}
export function collectDeviceData() {
  let client = BraintreeStore.getClient();
  if (null == client) {
    let obj2 = {
      createPromise() {
          return client(paths[4])(paths[3], paths.paths);
        },
      webpackId: 4827
    };
    let importWithRetryResult = core_CodeSplittingUtils.importWithRetry(obj2);
    let nextPromise1 = core_CodeSplittingUtils.importWithRetry(obj2).then((result) => result.default).then((client) => {
      client = client.client;
      let obj = { authorization: constants.BRAINTREE.KEY };
      let obj2 = client.create({ authorization: constants.BRAINTREE.KEY });
      return client.create({ authorization: constants.BRAINTREE.KEY }).then((result) => {
        client = result;
        let obj = client(4824);
        let obj2 = {
          createPromise() {
            return client(paths[4])(paths[3], paths.paths);
          },
          webpackId: 4827
        };
        const importWithRetryResult = client(4824).importWithRetry({
          createPromise() {
            return client(paths[4])(paths[3], paths.paths);
          },
          webpackId: 4827
        });
        return client(4824).importWithRetry({
          createPromise() {
            return client(paths[4])(paths[3], paths.paths);
          },
          webpackId: 4827
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
      webpackId: 4827
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
}