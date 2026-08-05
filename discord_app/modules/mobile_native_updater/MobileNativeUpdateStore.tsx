// discord_app/modules/mobile_native_updater/MobileNativeUpdateStore.tsx
import UPDATE_CHECK_INTERVAL from "UPDATE_CHECK_INTERVAL";
import { Store } from "initialize";
import { dispatcher } from "../../Dispatcher.tsx";
import { _checkForNewerBuild } from "MobileNativeUpdateUtils.tsx";

let c3;
let c4;
({ UPDATE_CONFIG: c3, UPDATE_CHECK_INTERVAL: c4 } = UPDATE_CHECK_INTERVAL);
let c5 = new require("dispatcher")("MobileNativeUpdateStore");
let closure_6 = { lastCheck: null, checking: false, newBuild: null };
let c7 = null;
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
    dispatcher.dispatch({ type: "MOBILE_NATIVE_UPDATE_CHECK_STARTED" });
    let obj = dispatcher;
    const obj2 = _checkForNewerBuild;
    _checkForNewerBuild.checkForNewerBuild().then((newBuild) => {
      let obj = callback(709);
      obj = { type: "MOBILE_NATIVE_UPDATE_CHECK_FINISHED", newBuild };
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
        outer1_5.info("Checking for new native builds in the background");
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
const mobileNativeUpdateStore = new MobileNativeUpdateStore(require("dispatcher"), {
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
    const obj = { lastCheck: null, checking: false, newBuild: null };
    obj[0] = new Date();
    obj[2] = newBuild.newBuild;
  }
});
let obj = {
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
    const obj = { lastCheck: null, checking: false, newBuild: null };
    obj[0] = new Date();
    obj[2] = newBuild.newBuild;
  }
};
const tmp3 = new require("dispatcher")("MobileNativeUpdateStore");
const result = require("initialize").fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateStore.tsx");

export default mobileNativeUpdateStore;