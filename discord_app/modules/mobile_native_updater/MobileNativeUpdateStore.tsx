// discord_app/modules/mobile_native_updater/MobileNativeUpdateStore.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import timestampDefault from "../debug/Logger.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import _checkForNewerBuild from "MobileNativeUpdateUtils.tsx";
import UPDATE_CHECK_INTERVAL from "MobileNativeUpdateConstants.tsx";

({ UPDATE_CONFIG: c3, UPDATE_CHECK_INTERVAL: c4 } = UPDATE_CHECK_INTERVAL);
let closure_5 = new timestampDefault("MobileNativeUpdateStore");
let closure_6 = { lastCheck: null, checking: false, newBuild: null };
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
  if (true !== checking.checking) {
    dispatcherDefault.dispatch({ type: "MOBILE_NATIVE_UPDATE_CHECK_STARTED" });
    _checkForNewerBuild.checkForNewerBuild().then((result) => {
      callback(709);
      const obj = { type: "MOBILE_NATIVE_UPDATE_CHECK_FINISHED", newBuild: result };
      obj.dispatch(obj);
    }, () => {
      callback(709).dispatch({ type: "MOBILE_NATIVE_UPDATE_CHECK_FAILED" });
    });
    const checkForNewerBuildResult = _checkForNewerBuild.checkForNewerBuild();
  }
};
prototype["ensureInitialized"] = function ensureInitialized() {
  const self = this;
  if (this.hasUpdatesConfigured) {
    if (null === interval) {
      function backgroundUpdateCheck() {
        closure_1_5.info("Checking for new native builds in the background");
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
  return closure_6;
};
MobileNativeUpdateStore.displayName = "MobileNativeUpdateStore";
const mobileNativeUpdateStore = new MobileNativeUpdateStore(dispatcherDefault, {
  MOBILE_NATIVE_UPDATE_CHECK_STARTED: function handleCheckStarted() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.checking = true;
  },
  MOBILE_NATIVE_UPDATE_CHECK_FAILED: function handleCheckFailed() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.checking = false;
  },
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function handleCheckFinished(newBuild) {
    const obj = { lastCheck: new Date(), checking: false, newBuild: newBuild.newBuild };
  }
});
const tmp3 = new timestampDefault("MobileNativeUpdateStore");
const result = obj132.fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateStore.tsx");

export default mobileNativeUpdateStore;