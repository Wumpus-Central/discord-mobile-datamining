// discord_app/modules/app_startup/awaitExperiments.tsx
import Future from "../../../discord_common/js/shared/utils/Future.tsx";
import size from "../../../_runtime/metro/00002__.js";

const future = new Future.Future();
let closure_1 = null;
const result = size.fileFinishedImporting("modules/app_startup/awaitExperiments.tsx");

export function beginLoadedExperimentsTimeout() {
  const timeout = setTimeout(() => {
    future.resolve();
    c1 = null;
  }, 1000);
}
export function onExperimentsLoaded() {
  if (null != closure_1) {
    future.resolve();
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_1);
  }
}
export function getPromise() {
  return future.promise;
}
