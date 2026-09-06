// === Module 14394: MobileNativeUpdateStore ===

// Module 14394 (MobileNativeUpdateStore)
import LoggerDefault from "Logger" /* 3 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import MobileNativeUpdateUtils from "MobileNativeUpdateUtils" /* 13906 */;
import MobileNativeUpdateConstants from "MobileNativeUpdateConstants" /* 4541 */;
import size from "module_2" /* 2 */;

({ UPDATE_CONFIG: c3, UPDATE_CHECK_INTERVAL: closure_4 } = MobileNativeUpdateConstants);
let closure_5 = new LoggerDefault("MobileNativeUpdateStore");
let obj = { lastCheck: null, checking: false, newBuild: null };
let c7 = null;
const Store = initializeDefault.Store;
class MobileNativeUpdateStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.hasUpdatesConfigured = null !== UPDATE_CONFIG;
    return applyArgumentsResult;
  }
}
const prototype = MobileNativeUpdateStore.prototype;
prototype["checkForNewerBuild"] = function checkForNewerBuild() {
  if (true !== obj.checking) {
    obj = DispatcherDefault;
    obj.dispatch({ type: "MOBILE_NATIVE_UPDATE_CHECK_STARTED" });
    MobileNativeUpdateUtils.checkForNewerBuild().then((newBuild) => {
      obj = { type: "MOBILE_NATIVE_UPDATE_CHECK_FINISHED", newBuild };
      obj.dispatch(obj);
    }, () => {
      DispatcherDefault.dispatch({ type: "MOBILE_NATIVE_UPDATE_CHECK_FAILED" });
    });
    const checkForNewerBuildResult = MobileNativeUpdateUtils.checkForNewerBuild();
  }
};
prototype["ensureInitialized"] = function ensureInitialized() {
  const self = this;
  if (this.hasUpdatesConfigured) {
    if (null === interval) {
      function backgroundUpdateCheck() {
        logger.info("Checking for new native builds in the background");
        self.checkForNewerBuild();
      }
      const _setInterval = setInterval;
      interval = setInterval(backgroundUpdateCheck, closure_4.asMilliseconds());
      const _setTimeout = setTimeout;
      const timerId = setTimeout(backgroundUpdateCheck, 1000);
    }
  }
};
prototype["latestFetchedBuild"] = function latestFetchedBuild() {
  this.ensureInitialized();
  return obj;
};
MobileNativeUpdateStore.displayName = "MobileNativeUpdateStore";
obj = {
  MOBILE_NATIVE_UPDATE_CHECK_STARTED: function handleCheckStarted() {
    obj = {};
    const merged = Object.assign(obj);
    obj.checking = true;
  },
  MOBILE_NATIVE_UPDATE_CHECK_FAILED: function handleCheckFailed() {
    obj = {};
    const merged = Object.assign(obj);
    obj.checking = false;
  },
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function handleCheckFinished(newBuild) {
    obj = { lastCheck: new Date(), checking: false, newBuild: newBuild.newBuild };
  }
};
const mobileNativeUpdateStore = new MobileNativeUpdateStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateStore.tsx");

export default mobileNativeUpdateStore;