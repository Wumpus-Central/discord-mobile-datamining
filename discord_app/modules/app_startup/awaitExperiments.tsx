// discord_app/modules/app_startup/awaitExperiments.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import Future from "../../../discord_common/js/shared/utils/Future.tsx";

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