// === Module 14187: ? ===

// Module 14187
import ArgType2 from "ArgType" /* 14198 */;
import _mod14217 from "module_14217" /* 14217 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react_native_mod from "react-native" /* 17 */;
import get_mod from "module_82" /* 82 */;
import getReactNativeVersion from "getReactNativeVersion" /* 14188 */;
import getReactNativeDimensions from "getReactNativeDimensions" /* 14190 */;
import _asyncToGenerator_mod2 from "_asyncToGenerator" /* 14192 */;
import OverlayCreator from "OverlayCreator" /* 14193 */;
import module_14196 from "module_14196" /* 14196 */;
import module_14197 from "module_14197" /* 14197 */;
import module_14210 from "module_14210" /* 14210 */;
import module_14212 from "module_14212" /* 14212 */;
import react_native_mod2 from "react-native" /* 14214 */;
import ArgType from "module_14215" /* 14215 */;
import getReactNativePlatformConstants from "getReactNativePlatformConstants" /* 14216 */;

let c1, c3, c4;

let forceTouch;
let interfaceIdiom;
let obj10;
let obj12;
let obj14;
let obj16;
let obj18;
let obj20;
let obj22;
let obj24;
let obj26;
let obj28;
let obj30;
let obj32;
let osRelease;
let serial;
let serverHost;
let tmp13;
let uiMode;
let _asyncToGenerator = _asyncToGenerator_mod2;
let react_native = react_native_mod2;
let get = get_mod;
if (!get) {
  tmp13 = { default: get };
  const obj9 = { default: get };
} else {
  tmp13 = get;
}
get = tmp13;
if (!getReactNativeVersion) {
  obj10 = { default: getReactNativeVersion };
  const obj11 = { default: getReactNativeVersion };
} else {
  obj10 = getReactNativeVersion;
}
if (!getReactNativeDimensions) {
  obj12 = { default: getReactNativeDimensions };
  const obj13 = { default: getReactNativeDimensions };
} else {
  obj12 = getReactNativeDimensions;
}
_asyncToGenerator = _asyncToGenerator_mod2;
if (!_asyncToGenerator) {
  obj14 = { default: _asyncToGenerator };
  const obj15 = { default: _asyncToGenerator };
} else {
  obj14 = _asyncToGenerator;
}
if (!OverlayCreator) {
  obj16 = { default: OverlayCreator };
  const obj17 = { default: OverlayCreator };
} else {
  obj16 = OverlayCreator;
}
if (!module_14196) {
  obj18 = { default: module_14196 };
  const obj19 = { default: module_14196 };
} else {
  obj18 = module_14196;
}
if (!module_14197) {
  obj20 = { default: module_14197 };
  const obj21 = { default: module_14197 };
} else {
  obj20 = module_14197;
}
if (!module_14210) {
  obj22 = { default: module_14210 };
  const obj23 = { default: module_14210 };
} else {
  obj22 = module_14210;
}
if (!module_14212) {
  obj24 = { default: module_14212 };
  const obj25 = { default: module_14212 };
} else {
  obj24 = module_14212;
}
react_native = react_native_mod2;
if (!react_native) {
  obj26 = { default: react_native };
  const obj27 = { default: react_native };
} else {
  obj26 = react_native;
}
if (!ArgType) {
  obj28 = { default: ArgType };
  const obj29 = { default: ArgType };
} else {
  obj28 = ArgType;
}
if (!getReactNativePlatformConstants) {
  obj30 = { default: getReactNativePlatformConstants };
  const obj31 = { default: getReactNativePlatformConstants };
} else {
  obj30 = getReactNativePlatformConstants;
}
let c15 = "@REACTOTRON/clientId";
const defaultResult = obj30.default();
const model = defaultResult.model;
const systemName = defaultResult.systemName;
const url = {
  createSocket(url) {
    const webSocket = new WebSocket(url);
    return webSocket;
  },
  host: (function() {
    try {
      const _default = get.default;
      const scriptURL = _default.getConstants().scriptURL;
      if (typeof scriptURL !== "string") {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Invalid non-string URL");
        throw error;
      } else {
        return _mod14217.getHostFromUrl(scriptURL);
      }
    } catch (tmp6) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("getHost: \"" + tmp6.message + "\" for scriptURL - Falling back to " + "localhost");
      return "localhost";
    }
  })("localhost"),
  port: 9090,
  name: "React Native App",
  environment: "production",
  client: obj32,
  getClientId() {
    return closure_14(...arguments);
  },
  setClientId(payload) {
    return closure_13(...arguments);
  },
  proxyHack: true
};
({ osRelease, serverHost, forceTouch, interfaceIdiom, uiMode, serial } = defaultResult);
obj32 = { reactotronLibraryName: "reactotron-react-native", reactotronLibraryVersion: "REACTOTRON_REACT_NATIVE_VERSION", platform: react_native.Platform.OS, platformVersion: react_native.Platform.Version, osRelease, model, serverHost, forceTouch, interfaceIdiom, systemName, uiMode, serial, reactNativeVersion: obj10.default() };
const merged = Object.assign(obj12.default());
let closure_14 = _asyncToGenerator(async () => {
  let asyncStorageHandler;
  let closure_1;
  let closure_0 = arg0;
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj = { value, done: true };
      return obj;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      let str2;
      let tmp;
      let screenWidth;
      let screenHeight;
      let screenScale;
      let closure_5;
      let closure_6;
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
          let closure_2 = tmp4;
          str2 = closure_0;
          if (closure_0 === undefined) {
            str2 = "";
          }
          tmp = undefined;
          screenWidth = undefined;
          screenHeight = undefined;
          screenScale = undefined;
          closure_5 = undefined;
          closure_6 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "Reflect", done: true };
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
        const obj4 = { value: asyncStorageHandler.getItem(closure_130_15), done: true };
        asyncStorageHandler = closure_130_18.asyncStorageHandler;
        return obj4;
      } else {
        tmp = closure_130_4.default();
        screenWidth = tmp.screenWidth;
        screenHeight = tmp.screenHeight;
        screenScale = tmp.screenScale;
        const items = [screenWidth, screenHeight];
        const sorted = items.sort();
        closure_5 = sorted.join("-");
        const Platform = closure_130_2.Platform;
        const obj5 = { ios: closure_130_17, android: closure_130_16, default: "" };
        closure_6 = Platform.select(obj5);
        const items1 = [str2, closure_130_2.Platform.OS, closure_130_2.Platform.Version, closure_6, closure_5, screenScale];
        const _Boolean = Boolean;
        const found = items1.filter(Boolean);
        c4 = 3;
        const obj6 = { value: found.join("-"), done: true };
        return obj6;
      }
    } catch (tmp24) {
      c4 = 3;
      throw tmp24;
    }
  }
});
let closure_13 = _asyncToGenerator(async (arg0) => {
  let asyncStorageHandler;
  let closure_0;
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
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
        const obj = { value: asyncStorageHandler.setItem(c15, tmp3), done: true };
        asyncStorageHandler = client.asyncStorageHandler;
        return obj;
      } else {
        c1 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp5) {
      c1 = 3;
      throw tmp5;
    }
  }
});
let items = [obj14.default(), obj20.default(), obj28.default(), obj18.default(), obj16.default(), obj22.default(), obj24.default(), obj26.default()];
const client = ArgType2.createClient(url);
client.useReactNative = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  if (false !== obj.errors) {
    const errors = obj.errors;
    let tmp3 = null;
    const use = client.use;
    const _default = obj20.default;
    if (typeof errors === "object") {
      tmp3 = errors;
    }
    use(_default(tmp3));
  }
  if (false !== obj.log) {
    client.use(obj28.default());
  }
  if (false !== obj.editor) {
    const editor = obj.editor;
    let tmp10 = null;
    const use2 = client.use;
    const _default2 = obj18.default;
    if (typeof editor === "object") {
      tmp10 = editor;
    }
    use2(_default2(tmp10));
  }
  if (false !== obj.overlay) {
    client.use(obj16.default());
  }
  if (false !== obj.asyncStorage) {
    const asyncStorage = obj.asyncStorage;
    let tmp17 = null;
    const use3 = client.use;
    const _default3 = obj14.default;
    if (typeof asyncStorage === "object") {
      tmp17 = asyncStorage;
    }
    use3(_default3(tmp17));
  }
  if (false !== obj.networking) {
    const networking = obj.networking;
    let tmp21 = null;
    const use4 = client.use;
    const _default4 = obj22.default;
    if (typeof networking === "object") {
      tmp21 = networking;
    }
    use4(_default4(tmp21));
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
const asyncStorage_export = obj14.default;
const networking_export = obj22.default;

export { asyncStorage_export as asyncStorage };
export const devTools = obj26.default;
export { networking_export as networking };
export const openInEditor = obj18.default;
export const overlay = obj16.default;
export const storybook = obj24.default;
export const trackGlobalErrors = obj20.default;
export const trackGlobalLogs = obj28.default;
export const reactNativeCorePlugins = items;
export default client;