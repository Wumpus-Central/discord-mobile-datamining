// === Module 13708: MaybeClearBuildOverride ===

// Module 13708 (MaybeClearBuildOverride)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "set";
import getCurrentBuildOverride from "getCurrentBuildOverride";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_6;
let error;
const require = arg1;
function MaybeClearBuildOverride() {
  function _clearOverride() {
    const self = this;
    const tmp = outer1_3(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const callback = tmp3;
              let c3 = 1;
              outer1_0(true);
              let obj1 = outer1_0(outer1_2[8]);
              c1 = 2;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.clearBuildOverride();
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              callback(false);
              c4 = 3;
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c3 = 0;
            }
            c3 = 0;
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp16) {
          let closure_2 = tmp16;
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp16;
          } else {
            c1 = tmp;
          }
        }
      }
    });
    const _clearOverride = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback(importAllResult.useState(false), 2);
  const _require = tmp[1];
  let obj = _require(589);
  const items = [getCurrentBuildOverride];
  if (null == obj.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let id;
    if (overrides != null) {
      const tmp4 = overrides[callback(undefined, table[8]).DEVICE_FIELD];
      if (tmp4 != null) {
        id = tmp4.id;
      }
    }
    return id;
  })) {
    return null;
  } else {
    obj = { variant: "secondary", loading: null, text: null, onPress: null };
    obj[1] = tmp[0];
    const intl = tmp2(1236).intl;
    obj[2] = intl.string(tmp2(1236).t["/Nz9rY"]);
    obj[3] = function clearOverride() {
      const self = this;
      const apply = _clearOverride.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return callback2(tmp2(4666).Button, obj);
  }
}
let c5 = importAllResult;
({ NativeModules: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createLegacyClassComponentStyles({ buttons: { position: "absolute", right: 32, bottom: 32, left: 32, gap: 12 }, debugLogsContainer: { position: "absolute", right: 32, top: 64, display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }, error: { marginTop: 24, textAlign: "center" }, text: { textAlign: "center" } });
const PureComponent = importAllResult.PureComponent;
class ErrorBoundary extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.state = { error: null, info: null };
    applyArgumentsResult.discordErrorsSet = false;
    return applyArgumentsResult;
  }
}
const prototype = ErrorBoundary.prototype;
prototype["componentDidCatch"] = function componentDidCatch(error, extra) {
  this.triggerSoftCrash(error, extra);
};
prototype["triggerSoftCrash"] = function triggerSoftCrash(error, extra) {
  let obj = { error, info: extra };
  this.setState(obj);
  obj = { extra };
  importDefault(1208).captureCrash(error, obj);
  const obj2 = importDefault(1208);
  importDefault(709).dispatch({ type: "CLEAR_CACHES", reason: "App Crashed" });
};
prototype["handleReload"] = function handleReload() {
  BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
  BundleUpdaterManager.reload();
};
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  if (null == window.DiscordErrors) {
    const _window = window;
    const obj = { softCrash: null };
    obj[0] = function softCrash(error) {
      self.triggerSoftCrash(error);
    };
    window.DiscordErrors = obj;
    tmp.discordErrorsSet = true;
  }
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  if (this.discordErrorsSet) {
    const _window = window;
    window.DiscordErrors = null;
    tmp.discordErrorsSet = false;
  }
};
prototype["render"] = function render() {
  const self = this;
  const tmp = callback3(this.context);
  const error = this.state.error;
  if (null !== error) {
    let obj = { Illustration: null, title: null, body: null, titleStyle: null, bodyStyle: null, children: null };
    obj[0] = require(12348) /* getAppCrashSource */.AppCrash;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl.string(require(1236) /* getSystemLocale */.t.tx8CkI);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.CvQlAH);
    ({ text: obj[3], text: obj[4] } = tmp);
    obj = { style: null, variant: "text-sm/medium", color: "text-muted", children: null };
    obj[0] = tmp.error;
    let str;
    if (error != null) {
      str = error.message;
    }
    if (str == null) {
      let name;
      if (error != null) {
        name = error.name;
      }
      str = name;
    }
    if (str == null) {
      str = "Unknown Error";
    }
    obj[3] = str;
    const items = [closure_9(require(4251) /* Text */.Text, obj), , ];
    obj = { style: null, children: null };
    obj[0] = tmp.buttons;
    const items1 = [closure_9(MaybeClearBuildOverride, {}), ];
    const obj1 = { text: null, onPress: null };
    const intl3 = tmp3(1236).intl;
    obj1[0] = intl3.string(require(1236) /* getSystemLocale */.t["4n8OJn"]);
    obj1[1] = self.handleReload;
    items1[1] = closure_9(require(4666) /* Button */.Button, obj1);
    obj[1] = items1;
    items[1] = closure_10(closure_7, obj);
    items[2] = null;
    obj[5] = items;
    let children = tmp2(require(1297) /* Button */.EmptyState, obj);
  } else {
    children = self.props.children;
  }
  return children;
};
ErrorBoundary.contextType = require("ManaContext").ThemeContext;
const result = require("noop").fileFinishedImporting("components_native/ErrorBoundary.tsx");

export default ErrorBoundary;