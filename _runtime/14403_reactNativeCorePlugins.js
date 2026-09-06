// === Module 14403: reactNativeCorePlugins ===

// Module 14403 (reactNativeCorePlugins)
import keys2 from "keys" /* 14414 */;
import getHostFromUrl from "getHostFromUrl" /* 14433 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import getConstants from "getConstants" /* 82 */;
import getReactNativeVersion from "getReactNativeVersion" /* 14404 */;
import getReactNativeDimensions from "getReactNativeDimensions" /* 14406 */;
import sendToReactotron from "sendToReactotron" /* 14408 */;
import OverlayCreator from "OverlayCreator" /* 14409 */;
import module_14412 from "module_14412" /* 14412 */;
import objectifyError from "objectifyError" /* 14413 */;
import onSend from "onSend" /* 14426 */;
import module_14428 from "module_14428" /* 14428 */;
import getDevMenu from "getDevMenu" /* 14430 */;
import keys from "keys" /* 14431 */;
import getReactNativePlatformConstants from "getReactNativePlatformConstants" /* 14432 */;

if (!getConstants) {
  const obj6 = { default: null };
  obj6[0] = getConstants;
  let tmp13 = obj6;
} else {
  tmp13 = getConstants;
}
getConstants = tmp13;
if (!getReactNativeVersion) {
  const obj7 = { default: null };
  obj7[0] = getReactNativeVersion;
  let obj9 = obj7;
} else {
  obj9 = getReactNativeVersion;
}
if (!getReactNativeDimensions) {
  const obj8 = { default: null };
  obj8[0] = getReactNativeDimensions;
  let obj11 = obj8;
} else {
  obj11 = getReactNativeDimensions;
}
if (!sendToReactotron) {
  obj9 = { default: null };
  obj9[0] = sendToReactotron;
  let obj13 = obj9;
} else {
  obj13 = sendToReactotron;
}
if (!OverlayCreator) {
  const obj10 = { default: null };
  obj10[0] = OverlayCreator;
  let obj15 = obj10;
} else {
  obj15 = OverlayCreator;
}
if (!module_14412) {
  obj11 = { default: null };
  obj11[0] = module_14412;
  let obj17 = obj11;
} else {
  obj17 = module_14412;
}
if (!objectifyError) {
  const obj12 = { default: null };
  obj12[0] = objectifyError;
  let obj19 = obj12;
} else {
  obj19 = objectifyError;
}
if (!onSend) {
  obj13 = { default: null };
  obj13[0] = onSend;
  let obj22 = obj13;
} else {
  obj22 = onSend;
}
if (!module_14428) {
  const obj14 = { default: null };
  obj14[0] = module_14428;
  let obj24 = obj14;
} else {
  obj24 = module_14428;
}
if (!getDevMenu) {
  obj15 = { default: null };
  obj15[0] = getDevMenu;
  let obj26 = obj15;
} else {
  obj26 = getDevMenu;
}
if (!keys) {
  const obj16 = { default: null };
  obj16[0] = keys;
  let obj28 = obj16;
} else {
  obj28 = keys;
}
if (!getReactNativePlatformConstants) {
  obj17 = { default: null };
  obj17[0] = getReactNativePlatformConstants;
  let obj30 = obj17;
} else {
  obj30 = getReactNativePlatformConstants;
}
let c15 = "@REACTOTRON/clientId";
const defaultResult = obj30.default();
const model = defaultResult.model;
const systemName = defaultResult.systemName;
const obj18 = {
  createSocket(url) {
    const webSocket = new WebSocket(url);
    return webSocket;
  },
  host: ((localhost) => {
    try {
      const scriptURL = getConstants.default.getConstants().scriptURL;
      if (typeof scriptURL !== "string") {
        const _Error = Error;
        error = new Error("Invalid non-string URL");
        throw error;
      } else {
        return getHostFromUrl.getHostFromUrl(scriptURL);
      }
      const _default = getConstants.default;
    } catch (tmp8) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("getHost: \"" + tmp8.message + "\" for scriptURL - Falling back to " + "localhost");
      return "localhost";
    }
  })("localhost"),
  port: 9090,
  name: "React Native App",
  environment: "production",
  client: null,
  getClientId: null,
  setClientId: null,
  proxyHack: true
};
({ osRelease, serverHost, forceTouch, interfaceIdiom, uiMode, serial } = defaultResult);
obj19 = { reactotronLibraryName: "reactotron-react-native", reactotronLibraryVersion: "REACTOTRON_REACT_NATIVE_VERSION", platform: get_ActivityIndicator.Platform.OS, platformVersion: get_ActivityIndicator.Platform.Version, osRelease, model, serverHost, forceTouch, interfaceIdiom, systemName, uiMode, serial, reactNativeVersion: obj9.default() };
const merged = Object.assign(obj11.default());
obj18[5] = obj19;
let closure_14 = asyncGeneratorStep(() => {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  const iter = (function*() {
    if (screenScale === 2) {
      screenScale = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        screenScale = 2;
        if (0 === screenHeight) {
          if (arg0 === 1) {
            screenScale = 3;
            throw arg1;
          } else if (arg0 === 2) {
            screenScale = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let screenWidth = tmp5;
            closure_1 = tmp2;
            let str2;
            if (str2 === undefined) {
              str2 = "";
            }
            closure_1 = undefined;
            screenWidth = undefined;
            screenHeight = undefined;
            screenScale = undefined;
            closure_5 = undefined;
            closure_6 = undefined;
            screenHeight = 1;
            screenScale = 1;
            return { value: "PX_16", done: true };
          }
        } else if (arg0 === 1) {
          screenScale = 3;
          throw arg1;
        } else if (arg0 === 2) {
          screenScale = 3;
          obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else if (closure_18.asyncStorageHandler) {
          screenScale = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = closure_18.asyncStorageHandler.getItem(closure_15);
          return obj2;
        } else {
          closure_1 = screenScale.default();
          screenWidth = closure_1.screenWidth;
          screenHeight = closure_1.screenHeight;
          screenScale = closure_1.screenScale;
          const items = [screenWidth, screenHeight];
          const sorted = items.sort();
          closure_5 = sorted.join("-");
          const Platform = screenWidth.Platform;
          const obj3 = { ios: null, android: null, default: "" };
          obj3[0] = closure_17;
          obj3[1] = closure_16;
          closure_6 = Platform.select(obj3);
          const items1 = [str2, screenWidth.Platform.OS, screenWidth.Platform.Version, closure_6, closure_5, screenScale];
          const _Boolean = Boolean;
          const found = items1.filter(Boolean);
          screenScale = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = found.join("-");
          return obj4;
        }
      } catch (tmp25) {
        screenScale = tmp;
        throw tmp25;
      }
    }
  })();
  iter.next();
  return iter;
});
obj18[6] = function getClientId() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let closure_13 = asyncGeneratorStep((arg0) => {
  closure_0 = arg0;
  c1 = 0;
  return (function*(arg0) {
    if (c1 === 2) {
      c1 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else if (closure_1_18.asyncStorageHandler) {
          c1 = 3;
          obj = { value: null, done: true };
          obj[0] = closure_1_18.asyncStorageHandler.setItem(closure_1_15, tmp4);
          return obj;
        } else {
          c1 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp6) {
        c1 = tmp;
        throw tmp6;
      }
    }
  })();
});
obj18[7] = function setClientId(payload) {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let items = [obj13.default(), obj19.default(), obj28.default(), obj17.default(), obj15.default(), obj22.default(), obj24.default(), obj26.default()];
const client = keys2.createClient(obj18);
client.useReactNative = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  if (false !== obj.errors) {
    const errors = obj.errors;
    let tmp3 = null;
    if (typeof errors === "object") {
      tmp3 = errors;
    }
    client.use(obj19.default(tmp3));
  }
  if (false !== obj.log) {
    client.use(obj28.default());
  }
  if (false !== obj.editor) {
    const editor = obj.editor;
    let tmp10 = null;
    if (typeof editor === "object") {
      tmp10 = editor;
    }
    client.use(obj17.default(tmp10));
  }
  if (false !== obj.overlay) {
    client.use(obj15.default());
  }
  if (false !== obj.asyncStorage) {
    const asyncStorage = obj.asyncStorage;
    let tmp17 = null;
    if (typeof asyncStorage === "object") {
      tmp17 = asyncStorage;
    }
    client.use(obj13.default(tmp17));
  }
  if (false !== obj.networking) {
    const networking = obj.networking;
    let tmp21 = null;
    if (typeof networking === "object") {
      tmp21 = networking;
    }
    client.use(obj22.default(tmp21));
  }
  if (false !== obj.storybook) {
    client.use(obj24.default());
  }
  if (false !== obj.devTools) {
    client.use(obj26.default());
  }
  return client;
};
client.setAsyncStorageHandler = (asyncStorageHandler) => {
  client.asyncStorageHandler = asyncStorageHandler;
  return client;
};

export const asyncStorage = obj22.default;
export const devTools = obj22.default;
export const networking = obj22.default;
export const openInEditor = obj17.default;
export const overlay = obj15.default;
export const storybook = obj24.default;
export const trackGlobalErrors = obj19.default;
export const trackGlobalLogs = obj28.default;
export const reactNativeCorePlugins = items;
export default client;