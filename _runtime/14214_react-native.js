// _runtime/14214_react-native.js
import react_native from "00017_react-native.js";

function getDevMenu() {}

export default () => () => {
  let Platform;
  let obj = {
    onCommand(type) {
      function reload() {
        console.warn("DevMenu." + "reload" + "() not available in this environment");
      }
      function show() {
        console.warn("DevMenu." + "show" + "() not available in this environment");
      }
      function getConstants() {
        return {};
      }
      function debugRemotely() {
        console.warn("DevMenu." + "debugRemotely" + "() not available in this environment");
      }
      function setHotLoadingEnabled() {
        console.warn("DevMenu." + "setHotLoadingEnabled" + "() not available in this environment");
      }
      function setProfilingEnabled() {
        console.warn("DevMenu." + "setProfilingEnabled" + "() not available in this environment");
      }
      if ("devtools.open" === type.type) {
        if ("devtools.open" === type.type) {
          if (typeof closure_1_1 === "function") {
            const OS = Platform.Platform.OS;
            const obj = { reload, show, getConstants, debugRemotely, setHotLoadingEnabled, setProfilingEnabled };
            obj.show();
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if ("devtools.reload" === type.type) {
          if (typeof closure_1_1 === "function") {
            const OS2 = Platform.Platform.OS;
            const obj2 = { reload, show, getConstants, debugRemotely, setHotLoadingEnabled, setProfilingEnabled };
            obj2.reload();
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    },
  };
  return obj;
};
