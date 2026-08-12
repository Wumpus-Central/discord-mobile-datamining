// discord_app/components_native/ErrorBoundary.tsx
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "set";
import getCurrentBuildOverride from "getCurrentBuildOverride";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../discord_common/js/packages/flux/index.tsx";
import { Button } from "../design/components/Button/native/Button.native.tsx";
import { getAppCrashSource } from "../design/components/Illustration/native/redesign/generated/AppCrash.tsx";
import { Text } from "../design/components/Text/native/Text.tsx";
import { Button } from "../design/void/native.tsx";
import { dispatcher } from "../Dispatcher.tsx";
import { getSystemLocale } from "../intl/index.native.tsx";
import { SentryUtils.native } from "../utils/SentryUtils.native.tsx";

let c10;
let c9;
let closure_6;
let error;
const require = arg1;
function MaybeClearBuildOverride() {
  function _clearOverride() {
    const self = this;
    const tmp = outer1_3(function*() {
      const callback = tmp3;
      let c3 = 1;
      outer1_0(true);
      const obj1 = outer1_0(outer1_2[8]);
      yield obj1.clearBuildOverride();
      if (1 === tmp7) {
        c3 = 0;
        callback(false);
        let c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      c3 = 0;
      return arg1;
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
  let obj = _initialize;
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
    return callback2(tmp2(4754).Button, obj);
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
  SentryUtils.native.captureCrash(error, obj);
  const obj2 = SentryUtils.native;
  dispatcher.dispatch({ type: "CLEAR_CACHES", reason: "App Crashed" });
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
    obj[0] = getAppCrashSource.AppCrash;
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.tx8CkI);
    const intl2 = getSystemLocale.intl;
    obj[2] = intl2.string(getSystemLocale.t.CvQlAH);
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
    const items = [closure_9(Text.Text, obj), , ];
    obj = { style: null, children: null };
    obj[0] = tmp.buttons;
    const items1 = [closure_9(MaybeClearBuildOverride, {}), ];
    const obj1 = { text: null, onPress: null };
    const intl3 = tmp3(1236).intl;
    obj1[0] = intl3.string(getSystemLocale.t["4n8OJn"]);
    obj1[1] = self.handleReload;
    items1[1] = closure_9(Button.Button, obj1);
    obj[1] = items1;
    items[1] = closure_10(closure_7, obj);
    items[2] = null;
    obj[5] = items;
    let children = tmp2(Button.EmptyState, obj);
  } else {
    children = self.props.children;
  }
  return children;
};
ErrorBoundary.contextType = require("ManaContext").ThemeContext;
const result = require("noop").fileFinishedImporting("components_native/ErrorBoundary.tsx");

export default ErrorBoundary;