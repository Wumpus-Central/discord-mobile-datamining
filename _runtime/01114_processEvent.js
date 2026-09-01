// _runtime/01114_processEvent.js
import isHermesEnabled from "01002_isHermesEnabled.js";

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
  const obj = {
    turbo_module: isHermesEnabled.isTurboModuleEnabled(),
    fabric: null,
    react_native_version: null,
    expo: null,
  };
  const obj2 = isHermesEnabled;
  obj[1] = isHermesEnabled.isFabricEnabled();
  const obj3 = isHermesEnabled;
  obj[2] = isHermesEnabled.getReactNativeVersion();
  const obj4 = isHermesEnabled;
  obj[3] = isHermesEnabled.isExpo();
  const obj5 = isHermesEnabled;
  if (obj6.isHermesEnabled()) {
    obj.js_engine = "hermes";
    let tmp4Result = tmp4(1002);
    const hermesVersion = tmp4Result.getHermesVersion();
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
        let values;
        if (null !== threads) {
          if (undefined !== threads) {
            values = threads.values;
          }
        }
        items = values;
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
          let tmp3 = stacktrace;
          if (undefined !== tmp2) {
            let tmp4 = stacktrace;
            frames = tmp2.frames;
          }
        }
        if (!frames) {
          frames = [];
        }
        let tmp5 = frames;
        let tmp6 = frames;
        for (const item10023 of frames) {
          if (undefined === item10023.platform) {
            let tmp8 = item10023;
            if (1 === tmp7.lineno) {
              let tmp9 = obj;
              obj.return();
              let tmp10 = iter;
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
  tmp4Result = tmp4(1002);
  const expoGoVersion = tmp4Result.getExpoGoVersion();
  if (expoGoVersion) {
    obj.expo_go_version = expoGoVersion;
  }
  obj6 = isHermesEnabled;
  const expoSdkVersion = isHermesEnabled.getExpoSdkVersion();
  if (expoSdkVersion) {
    obj.expo_sdk_version = expoSdkVersion;
  }
  tags.contexts = Object.assign({ react_native_context: obj }, tags.contexts);
  return tags;
}
arg5.reactNativeInfoIntegration = () => ({
  name: "ReactNativeInfo",
  setupOnce() {},
  processEvent,
});
