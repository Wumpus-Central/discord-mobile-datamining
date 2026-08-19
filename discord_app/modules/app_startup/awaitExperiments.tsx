// === Module 13555: future ===

// Module 13555 (future)
import obj132 from "obj132" /* 2 */;
import Future from "Future" /* 8451 */;

const future = new Future.Future();
let c1 = null;
const result = obj132.fileFinishedImporting("modules/app_startup/awaitExperiments.tsx");

export const beginLoadedExperimentsTimeout = function beginLoadedExperimentsTimeout() {
  const timeout = setTimeout(() => {
    closure_0.resolve();
    c1 = null;
  }, 1000);
};
export const onExperimentsLoaded = function onExperimentsLoaded() {
  if (null != c1) {
    future.resolve();
    const _clearTimeout = clearTimeout;
    clearTimeout(c1);
  }
};
export const getPromise = function getPromise() {
  return future.promise;
};