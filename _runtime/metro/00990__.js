// === Module 990: ? ===

// Module 990
import _mod878 from "module_878" /* 878 */;

require = arg1;
const dependencyMap = arg6;
function processEvent(tags, originalException) {
  originalException = undefined;
  if (null != originalException) {
    originalException = originalException.originalException;
  }
  let tmp2;
  if (originalException) {
    let originalException1;
    if (null != originalException) {
      originalException1 = originalException.originalException;
    }
    tmp2 = originalException1;
  }
  const obj = { turbo_module: _mod878.isTurboModuleEnabled(), fabric: null, react_native_version: null, expo: null };
  obj.fabric = _mod878.isFabricEnabled();
  obj.react_native_version = _mod878.getReactNativeVersion();
  obj.expo = _mod878.isExpo();
  if (obj6.isHermesEnabled()) {
    obj.js_engine = "hermes";
    const hermesVersion = _mod878.getHermesVersion();
    if (hermesVersion) {
      obj.hermes_version = hermesVersion;
    }
    obj.hermes_debug_info = !(function isEventWithHermesBytecodeFrames(exception) {
      exception = exception.exception;
      let items;
      if (null !== exception) {
        if (undefined !== exception) {
          items = exception.values;
        }
      }
      if (!items) {
        const threads = exception.threads;
        let values2;
        if (null !== threads) {
          if (undefined !== threads) {
            values2 = threads.values;
          }
        }
        items = values2;
      }
      if (!items) {
        items = [];
      }
      const iter = items[Symbol.iterator]();
      while (iter !== undefined) {
        let stacktrace = iter.next().stacktrace;
        let tmp2 = stacktrace;
        let frames;
        if (null !== stacktrace) {
          if (undefined !== tmp2) {
            frames = tmp2.frames;
          }
        }
        if (!frames) {
          frames = [];
        }
        for (const item10023 of frames) {
          if (undefined === item10023.platform) {
            if (1 === tmp7.lineno) {
              obj.return();
              iter.return();
              let flag = true;
              return true;
            }
          }
          continue;
        }
        continue;
      }
      return false;
    })(tags);
    const tmp4Result = _mod878;
  } else {
    let jsEngine;
    if (null != tmp2) {
      jsEngine = tmp2.jsEngine;
    }
    if (jsEngine) {
      obj.js_engine = tmp2.jsEngine;
    }
  }
  if ("hermes" === obj.js_engine) {
    const _Object = Object;
    tags.tags = Object.assign({ hermes: true }, tags.tags);
  }
  let componentStack;
  if (null != tmp2) {
    componentStack = tmp2.componentStack;
  }
  if (componentStack) {
    obj.component_stack = tmp2.componentStack;
  }
  obj6 = _mod878;
  const expoGoVersion = _mod878.getExpoGoVersion();
  if (expoGoVersion) {
    obj.expo_go_version = expoGoVersion;
  }
  const tmp4Result3 = _mod878;
  const expoSdkVersion = _mod878.getExpoSdkVersion();
  if (expoSdkVersion) {
    obj.expo_sdk_version = expoSdkVersion;
  }
  tags.contexts = Object.assign({ react_native_context: obj }, tags.contexts);
  return tags;
}

export () => ({
  name: "ReactNativeInfo",
  setupOnce() {

  },
  processEvent
})