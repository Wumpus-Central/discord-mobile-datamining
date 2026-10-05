// === Module 990: reactNativeInfoIntegration ===

// Module 990 (reactNativeInfoIntegration)
import _mod878 from "module_878" /* 878 */;

function processEvent(tags, originalException) {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  function isEventWithHermesBytecodeFrames(exception) {
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
  }
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
  const obj = { turbo_module: obj2.isTurboModuleEnabled(), fabric: obj3.isFabricEnabled(), react_native_version: obj4.getReactNativeVersion(), expo: obj5.isExpo() };
  obj2 = _mod878;
  obj3 = _mod878;
  obj4 = _mod878;
  obj5 = _mod878;
  const obj6 = _mod878;
  if (obj6.isHermesEnabled()) {
    obj.js_engine = "hermes";
    const tmp4Result = _mod878;
    const hermesVersion = tmp4Result.getHermesVersion();
    if (hermesVersion) {
      obj.hermes_version = hermesVersion;
    }
    obj.hermes_debug_info = !isEventWithHermesBytecodeFrames(tags);
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
  const tmp4Result3 = _mod878;
  const expoGoVersion = tmp4Result3.getExpoGoVersion();
  if (expoGoVersion) {
    obj.expo_go_version = expoGoVersion;
  }
  const tmp4Result4 = _mod878;
  const expoSdkVersion = tmp4Result4.getExpoSdkVersion();
  if (expoSdkVersion) {
    obj.expo_sdk_version = expoSdkVersion;
  }
  tags.contexts = Object.assign({ react_native_context: obj }, tags.contexts);
  return tags;
}

export const reactNativeInfoIntegration = () => ({
  name: "ReactNativeInfo",
  setupOnce() {

  },
  processEvent
});