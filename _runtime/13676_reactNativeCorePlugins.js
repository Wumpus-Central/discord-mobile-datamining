// _runtime/13676_reactNativeCorePlugins.js
import asyncGeneratorStep from "sendToReactotron";
import get_ActivityIndicator from "get ActivityIndicator";
import getConstants from "getConstants";
import getReactNativeVersion from "getReactNativeVersion";
import getReactNativeDimensions from "getReactNativeDimensions";
import sendToReactotron from "sendToReactotron";
import OverlayCreator from "OverlayCreator";
import 13685__ from "metro/13685__.js";
import objectifyError from "objectifyError";
import onSend from "onSend";
import 13701__ from "metro/13701__.js";
import getDevMenu from "getDevMenu";
import keys from "keys";
import getReactNativePlatformConstants from "getReactNativePlatformConstants";
import { getHostFromUrl } from "13706_getHostFromUrl.js";

let forceTouch;
let interfaceIdiom;
let osRelease;
let serial;
let serverHost;
let uiMode;
if (!getConstants) {
  const obj6 = { default: null };
  obj6[0] = getConstants;
  let tmp13 = obj6;
} else {
  tmp13 = getConstants;
}
let c3 = tmp13;
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
if (!module_13685) {
  obj11 = { default: null };
  obj11[0] = module_13685;
  let obj17 = obj11;
} else {
  obj17 = module_13685;
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
if (!module_13701) {
  const obj14 = { default: null };
  obj14[0] = module_13701;
  let obj24 = obj14;
} else {
  obj24 = module_13701;
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
      const scriptURL = tmp13.default.getConstants().scriptURL;
      if (typeof scriptURL !== "string") {
        const _Error = Error;
        const error = new Error("Invalid non-string URL");
        throw error;
      } else {
        return getHostFromUrl.getHostFromUrl(scriptURL);
      }
      const _default = tmp13.default;
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
  let closure_0 = arg0;
  let c3 = 0;
  let c4 = 0;
  const iter = (function*() {
    let screenWidth = tmp5;
    let closure_1 = tmp2;
    if (str2 === undefined) {
      str2 = "";
    }
    yield "ct";
    if (closure_18.asyncStorageHandler) {
      return closure_18.asyncStorageHandler.getItem(closure_15);
    }
    closure_1 = screenScale.default();
    screenWidth = closure_1.screenWidth;
    const items = [screenWidth, screenHeight];
    const sorted = items.sort();
    let closure_5 = sorted.join("-");
    const Platform = screenWidth.Platform;
    const obj3 = { ios: null, android: null, default: "" };
    obj3[0] = closure_17;
    obj3[1] = closure_16;
    let closure_6 = Platform.select(obj3);
    const items1 = [str2, screenWidth.Platform.OS, screenWidth.Platform.Version, closure_6, closure_5, screenScale];
    const _Boolean = Boolean;
    const found = items1.filter(Boolean);
    return found.join("-");
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
  let closure_0 = arg0;
  let c1 = 0;
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
        } else if (outer1_18.asyncStorageHandler) {
          c1 = 3;
          obj = { value: null, done: true };
          obj[0] = outer1_18.asyncStorageHandler.setItem(outer1_15, tmp4);
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
const client = require("keys").createClient(obj18);
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