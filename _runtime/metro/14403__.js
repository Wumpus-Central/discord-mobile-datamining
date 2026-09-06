// === Module 14403: ? ===

// Module 14403
import emptyPromise2 from "emptyPromise" /* 14414 */;
import _mod14433 from "module_14433" /* 14433 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import get from "module_82" /* 82 */;
import get_ActivityIndicator from "module_14404" /* 14404 */;
import get_ActivityIndicator from "module_14406" /* 14406 */;
import sendToReactotron from "sendToReactotron" /* 14408 */;
import OverlayCreator from "OverlayCreator" /* 14409 */;
import module_14412 from "module_14412" /* 14412 */;
import objectifyError from "objectifyError" /* 14413 */;
import module_14426 from "module_14426" /* 14426 */;
import module_14428 from "module_14428" /* 14428 */;
import get_ActivityIndicator from "module_14430" /* 14430 */;
import emptyPromise from "module_14431" /* 14431 */;
import get_ActivityIndicator from "module_14432" /* 14432 */;

if (!get) {
  const obj6 = { default: get };
  let tmp13 = obj6;
} else {
  tmp13 = get;
}
get = tmp13;
if (!get_ActivityIndicator) {
  const obj7 = { default: get_ActivityIndicator };
  let obj9 = obj7;
} else {
  obj9 = get_ActivityIndicator;
}
if (!get_ActivityIndicator) {
  const obj8 = { default: get_ActivityIndicator };
  let obj11 = obj8;
} else {
  obj11 = get_ActivityIndicator;
}
if (!sendToReactotron) {
  obj9 = { default: sendToReactotron };
  let obj13 = obj9;
} else {
  obj13 = sendToReactotron;
}
if (!OverlayCreator) {
  const obj10 = { default: OverlayCreator };
  let obj15 = obj10;
} else {
  obj15 = OverlayCreator;
}
if (!module_14412) {
  obj11 = { default: module_14412 };
  let obj17 = obj11;
} else {
  obj17 = module_14412;
}
if (!objectifyError) {
  const obj12 = { default: objectifyError };
  let obj20 = obj12;
} else {
  obj20 = objectifyError;
}
if (!module_14426) {
  obj13 = { default: module_14426 };
  let obj22 = obj13;
} else {
  obj22 = module_14426;
}
if (!module_14428) {
  const obj14 = { default: module_14428 };
  let obj24 = obj14;
} else {
  obj24 = module_14428;
}
if (!get_ActivityIndicator) {
  obj15 = { default: get_ActivityIndicator };
  let obj26 = obj15;
} else {
  obj26 = get_ActivityIndicator;
}
if (!emptyPromise) {
  const obj16 = { default: emptyPromise };
  let obj28 = obj16;
} else {
  obj28 = emptyPromise;
}
if (!get_ActivityIndicator) {
  obj17 = { default: get_ActivityIndicator };
  let obj30 = obj17;
} else {
  obj30 = get_ActivityIndicator;
}
let c15 = "@REACTOTRON/clientId";
const defaultResult = obj30.default();
const model = defaultResult.model;
const systemName = defaultResult.systemName;
const url = {
  createSocket(dependencyMap) {
    const webSocket = new WebSocket(dependencyMap);
    return webSocket;
  },
  host: (() => {
    try {
      const scriptURL = get.default.getConstants().scriptURL;
      if (typeof scriptURL !== "string") {
        const _Error = Error;
        const error = new Error("Invalid non-string URL");
        throw error;
      } else {
        return _mod14433.getHostFromUrl(scriptURL);
      }
      const _default = get.default;
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
const merged = Object.assign(obj11.default());
url.client = { reactotronLibraryName: "reactotron-react-native", reactotronLibraryVersion: "REACTOTRON_REACT_NATIVE_VERSION", platform: get_ActivityIndicator.Platform.OS, platformVersion: get_ActivityIndicator.Platform.Version, osRelease, model, serverHost, forceTouch, interfaceIdiom, systemName, uiMode, serial, reactNativeVersion: obj9.default() };
let closure_14 = asyncGeneratorStep(async () => {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let str2 = closure_0;
          if (closure_0 === undefined) {
            str2 = "";
          }
          closure_129_0 = str2;
          closure_129_1 = undefined;
          let screenWidth;
          let screenHeight;
          let screenScale;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj1 = { value, done: true };
        return obj1;
      } else if (closure_130_18.asyncStorageHandler) {
        c4 = 3;
        const obj2 = { value: closure_130_18.asyncStorageHandler.getItem(closure_130_15), done: true };
        return obj2;
      } else {
        closure_129_1 = closure_130_4.default();
        screenWidth = closure_129_1.screenWidth;
        screenHeight = closure_129_1.screenHeight;
        screenScale = closure_129_1.screenScale;
        const items = [screenWidth, screenHeight];
        const sorted = items.sort();
        closure_129_5 = sorted.join("-");
        const Platform = closure_130_2.Platform;
        const obj3 = { ios: closure_130_17, android: closure_130_16, default: "" };
        closure_129_6 = Platform.select(obj3);
        const items1 = [closure_129_0, closure_130_2.Platform.OS, closure_130_2.Platform.Version, closure_129_6, closure_129_5, screenScale];
        const _Boolean = Boolean;
        const found = items1.filter(Boolean);
        c4 = 3;
        const obj4 = { value: found.join("-"), done: true };
        return obj4;
      }
    } catch (tmp25) {
      c4 = tmp;
      throw tmp25;
    }
  }
});
url.getClientId = function getClientId() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let closure_13 = asyncGeneratorStep(async (arg0) => {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      } else if (client.asyncStorageHandler) {
        c1 = 3;
        obj = { value: client.asyncStorageHandler.setItem(c15, tmp4), done: true };
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
});
url.setClientId = function setClientId(payload) {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let items = [obj13.default(), obj20.default(), obj28.default(), obj17.default(), obj15.default(), obj22.default(), obj24.default(), obj26.default()];
const client = emptyPromise2.createClient(url);
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
    client.use(obj20.default(tmp3));
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
export const trackGlobalErrors = obj20.default;
export const trackGlobalLogs = obj28.default;
export const reactNativeCorePlugins = items;
export default client;