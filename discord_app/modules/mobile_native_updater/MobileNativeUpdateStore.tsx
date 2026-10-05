// === Module 14158: MobileNativeUpdateStore ===

// Module 14158 (MobileNativeUpdateStore)
import LoggerDefault from "Logger" /* 3 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import MobileNativeUpdateUtils from "MobileNativeUpdateUtils" /* 13719 */;
import MobileNativeUpdateConstants from "MobileNativeUpdateConstants" /* 4868 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ UPDATE_CONFIG: c3, UPDATE_CHECK_INTERVAL: closure_4 } = MobileNativeUpdateConstants);
let closure_5 = new LoggerDefault("MobileNativeUpdateStore");
let obj = { lastCheck: null, checking: false, newBuild: null };
let c7 = null;
const tmp3 = new LoggerDefault("MobileNativeUpdateStore");
const Store = get_initializedDefault.Store;
class MobileNativeUpdateStore extends Store {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.hasUpdatesConfigured = null !== _false;
    return applyArgumentsResult;
  }
  checkForNewerBuild() {
    if (true !== obj.checking) {
      obj = DispatcherDefault;
      obj.dispatch({ type: "MOBILE_NATIVE_UPDATE_CHECK_STARTED" });
      let obj2 = MobileNativeUpdateUtils;
      const checkForNewerBuildResult = obj2.checkForNewerBuild();
      checkForNewerBuildResult.then((newBuild) => {
        obj = DispatcherDefault;
        const obj2 = { type: "MOBILE_NATIVE_UPDATE_CHECK_FINISHED", newBuild };
        obj.dispatch(obj2);
      }, () => {
        obj = DispatcherDefault;
        obj.dispatch({ type: "MOBILE_NATIVE_UPDATE_CHECK_FAILED" });
      });
    }
  }
  ensureInitialized() {
    let closure_7;
    let interval;
    let logger;
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
  }
  latestFetchedBuild() {
    this.ensureInitialized();
    return obj;
  }
}
const prototype = MobileNativeUpdateStore.prototype;
MobileNativeUpdateStore.displayName = "MobileNativeUpdateStore";
obj = {
  MOBILE_NATIVE_UPDATE_CHECK_STARTED: function handleCheckStarted() {
    obj = { checking: true };
    const merged = Object.assign(obj);
  },
  MOBILE_NATIVE_UPDATE_CHECK_FAILED: function handleCheckFailed() {
    obj = { checking: false };
    const merged = Object.assign(obj);
  },
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function handleCheckFinished(newBuild) {
    ({ lastCheck: new Date(), checking: false, newBuild });
    newBuild = newBuild.newBuild;
    new Date();
  }
};
const mobileNativeUpdateStore = new MobileNativeUpdateStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateStore.tsx");

export default mobileNativeUpdateStore;