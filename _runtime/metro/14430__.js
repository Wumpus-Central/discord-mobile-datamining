// === Module 14430: ? ===

// Module 14430
import get_ActivityIndicator from "module_17" /* 17 */;

function getDevMenu() {

}

export default () => () => ({
  onCommand(type) {
    if ("devtools.open" === type.type) {
      if ("devtools.open" === type.type) {
        if (typeof closure_1_1 === "function") {
          let obj = {
            reload() {
                    console.warn("DevMenu." + "reload" + "() not available in this environment");
                  },
            show() {
                    console.warn("DevMenu." + "show" + "() not available in this environment");
                  },
            getConstants() {
                    return {};
                  },
            debugRemotely() {
                    console.warn("DevMenu." + "debugRemotely" + "() not available in this environment");
                  },
            setHotLoadingEnabled() {
                    console.warn("DevMenu." + "setHotLoadingEnabled" + "() not available in this environment");
                  },
            setProfilingEnabled() {
                    console.warn("DevMenu." + "setProfilingEnabled" + "() not available in this environment");
                  }
          };
          const OS = Platform.Platform.OS;
          obj.show();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if ("devtools.reload" === type.type) {
        if (typeof closure_1_1 === "function") {
          obj = {
            reload() {
                    console.warn("DevMenu." + "reload" + "() not available in this environment");
                  },
            show() {
                    console.warn("DevMenu." + "show" + "() not available in this environment");
                  },
            getConstants() {
                    return {};
                  },
            debugRemotely() {
                    console.warn("DevMenu." + "debugRemotely" + "() not available in this environment");
                  },
            setHotLoadingEnabled() {
                    console.warn("DevMenu." + "setHotLoadingEnabled" + "() not available in this environment");
                  },
            setProfilingEnabled() {
                    console.warn("DevMenu." + "setProfilingEnabled" + "() not available in this environment");
                  }
          };
          const OS2 = Platform.Platform.OS;
          obj.reload();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
});