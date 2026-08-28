// _runtime/14018_getDevMenu.js
import closure_0 from "00017_get_ActivityIndicator.js";

function getDevMenu() {

}

export default () => () => ({
  onCommand(type) {
    if ("devtools.open" === type.type) {
      if ("devtools.open" === type.type) {
        if (typeof closure_1 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let obj = { reload: null, show: null, getConstants: null, debugRemotely: null, setHotLoadingEnabled: null, setProfilingEnabled: null };
        obj[0] = function reload() {
          console.warn("DevMenu." + "reload" + "() not available in this environment");
        };
        obj[1] = function show() {
          console.warn("DevMenu." + "show" + "() not available in this environment");
        };
        obj[2] = function getConstants() {
          return {};
        };
        obj[3] = function debugRemotely() {
          console.warn("DevMenu." + "debugRemotely" + "() not available in this environment");
        };
        obj[4] = function setHotLoadingEnabled() {
          console.warn("DevMenu." + "setHotLoadingEnabled" + "() not available in this environment");
        };
        obj[5] = function setProfilingEnabled() {
          console.warn("DevMenu." + "setProfilingEnabled" + "() not available in this environment");
        };
        const OS = Platform.Platform.OS;
        obj.show();
      }
      if ("devtools.reload" === type.type) {
        if (typeof closure_1 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        obj = { reload: null, show: null, getConstants: null, debugRemotely: null, setHotLoadingEnabled: null, setProfilingEnabled: null };
        obj[0] = function reload() {
          console.warn("DevMenu." + "reload" + "() not available in this environment");
        };
        obj[1] = function show() {
          console.warn("DevMenu." + "show" + "() not available in this environment");
        };
        obj[2] = function getConstants() {
          return {};
        };
        obj[3] = function debugRemotely() {
          console.warn("DevMenu." + "debugRemotely" + "() not available in this environment");
        };
        obj[4] = function setHotLoadingEnabled() {
          console.warn("DevMenu." + "setHotLoadingEnabled" + "() not available in this environment");
        };
        obj[5] = function setProfilingEnabled() {
          console.warn("DevMenu." + "setProfilingEnabled" + "() not available in this environment");
        };
        const OS2 = Platform.Platform.OS;
        obj.reload();
      }
    }
  }
});