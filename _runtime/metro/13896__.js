// === Module 13896: ? ===

// Module 13896
import emptyPromise2 from "emptyPromise" /* 13907 */;
import _mod13926 from "module_13926" /* 13926 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator_mod from "module_17" /* 17 */;
import get_mod from "module_82" /* 82 */;
import get_ActivityIndicator_mod from "module_13897" /* 13897 */;
import get_ActivityIndicator_mod from "module_13899" /* 13899 */;
import sendToReactotron from "sendToReactotron" /* 13901 */;
import OverlayCreator from "OverlayCreator" /* 13902 */;
import module_13905 from "module_13905" /* 13905 */;
import objectifyError from "objectifyError" /* 13906 */;
import module_13919 from "module_13919" /* 13919 */;
import module_13921 from "module_13921" /* 13921 */;
import get_ActivityIndicator_mod from "module_13923" /* 13923 */;
import emptyPromise from "module_13924" /* 13924 */;
import get_ActivityIndicator_mod from "module_13925" /* 13925 */;

let get_ActivityIndicator = get_ActivityIndicator_mod;
let get = get_mod;
if (!get) {
  const obj9 = { default: get };
  let tmp13 = obj9;
} else {
  tmp13 = get;
}
get = tmp13;
let get_ActivityIndicator = get_ActivityIndicator_mod;
if (!get_ActivityIndicator) {
  const obj11 = { default: get_ActivityIndicator };
  let obj10 = obj11;
} else {
  obj10 = get_ActivityIndicator;
}
let get_ActivityIndicator = get_ActivityIndicator_mod;
if (!get_ActivityIndicator) {
  const obj13 = { default: get_ActivityIndicator };
  let obj12 = obj13;
} else {
  obj12 = get_ActivityIndicator;
}
if (!sendToReactotron) {
  const obj15 = { default: sendToReactotron };
  let obj14 = obj15;
} else {
  obj14 = sendToReactotron;
}
if (!OverlayCreator) {
  const obj17 = { default: OverlayCreator };
  let obj16 = obj17;
} else {
  obj16 = OverlayCreator;
}
if (!module_13905) {
  const obj19 = { default: module_13905 };
  let obj18 = obj19;
} else {
  obj18 = module_13905;
}
if (!objectifyError) {
  const obj21 = { default: objectifyError };
  let obj20 = obj21;
} else {
  obj20 = objectifyError;
}
if (!module_13919) {
  const obj23 = { default: module_13919 };
  let obj22 = obj23;
} else {
  obj22 = module_13919;
}
if (!module_13921) {
  const obj25 = { default: module_13921 };
  let obj24 = obj25;
} else {
  obj24 = module_13921;
}
let get_ActivityIndicator = get_ActivityIndicator_mod;
if (!get_ActivityIndicator) {
  const obj27 = { default: get_ActivityIndicator };
  let obj26 = obj27;
} else {
  obj26 = get_ActivityIndicator;
}
if (!emptyPromise) {
  const obj29 = { default: emptyPromise };
  let obj28 = obj29;
} else {
  obj28 = emptyPromise;
}
let get_ActivityIndicator = get_ActivityIndicator_mod;
if (!get_ActivityIndicator) {
  const obj31 = { default: get_ActivityIndicator };
  let obj30 = obj31;
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
        return _mod13926.getHostFromUrl(scriptURL);
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
const merged = Object.assign(obj12.default());
url.client = { reactotronLibraryName: "reactotron-react-native", reactotronLibraryVersion: "REACTOTRON_REACT_NATIVE_VERSION", platform: get_ActivityIndicator.Platform.OS, platformVersion: get_ActivityIndicator.Platform.Version, osRelease, model, serverHost, forceTouch, interfaceIdiom, systemName, uiMode, serial, reactNativeVersion: obj10.default() };
let closure_14 = asyncGeneratorStep(async () => {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj = { value, done: true };
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
          const obj2 = { value, done: true };
          return obj2;
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
          return { value: "flex", done: true };
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else if (closure_130_18.asyncStorageHandler) {
        c4 = 3;
        const obj4 = { value: closure_130_18.asyncStorageHandler.getItem(closure_130_15), done: true };
        return obj4;
      } else {
        closure_129_1 = closure_130_4.default();
        screenWidth = closure_129_1.screenWidth;
        screenHeight = closure_129_1.screenHeight;
        screenScale = closure_129_1.screenScale;
        const items = [screenWidth, screenHeight];
        const sorted = items.sort();
        closure_129_5 = sorted.join("-");
        const Platform = closure_130_2.Platform;
        const obj5 = { ios: closure_130_17, android: closure_130_16, default: "" };
        closure_129_6 = Platform.select(obj5);
        const items1 = [closure_129_0, closure_130_2.Platform.OS, closure_130_2.Platform.Version, closure_129_6, closure_129_5, screenScale];
        const _Boolean = Boolean;
        const found = items1.filter(Boolean);
        c4 = 3;
        const obj6 = { value: found.join("-"), done: true };
        return obj6;
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
      const obj2 = { value, done: true };
      return obj2;
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
        const obj3 = { value, done: true };
        return obj3;
      } else if (client.asyncStorageHandler) {
        c1 = 3;
        const obj = { value: client.asyncStorageHandler.setItem(c15, tmp4), done: true };
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
let items = [obj14.default(), obj20.default(), obj28.default(), obj18.default(), obj16.default(), obj22.default(), obj24.default(), obj26.default()];
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
    client.use(obj18.default(tmp10));
  }
  if (false !== obj.overlay) {
    client.use(obj16.default());
  }
  if (false !== obj.asyncStorage) {
    const asyncStorage = obj.asyncStorage;
    let tmp17 = null;
    if (typeof asyncStorage === "object") {
      tmp17 = asyncStorage;
    }
    client.use(obj14.default(tmp17));
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

export const asyncStorage = obj14.default;
export const devTools = obj26.default;
export const networking = obj22.default;
export const openInEditor = obj18.default;
export const overlay = obj16.default;
export const storybook = obj24.default;
export const trackGlobalErrors = obj20.default;
export const trackGlobalLogs = obj28.default;
export const reactNativeCorePlugins = items;
export default client;