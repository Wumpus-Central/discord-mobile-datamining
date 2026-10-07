// === Module 15885: ErrorBoundary ===

// Module 15885 (ErrorBoundary)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import AppCrash from "AppCrash" /* 9523 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11095 */;

require = fn;
get_ActivityIndicator = fn(17);
({ NativeModules: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let closure_11 = createStyles.createLegacyClassComponentStyles({ buttons: { position: "absolute", right: 32, bottom: 32, left: 32, gap: 12 }, debugLogsContainer: { position: "absolute", right: 32, top: 64, display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }, error: { marginTop: 24, textAlign: "center" }, text: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(6);
  const obj = require("c");
  [tmp5, closure_0] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BuildOverrideStore];
    const fn = function s() {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (overrides != null) {
        const tmp4 = overrides[closure_0(undefined, 11412).DEVICE_FIELD];
        if (tmp4 != null) {
          id = tmp4.id;
        }
      }
      return id;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let tmp4 = _slicedToArray(noop.useState(false), 2);
  if (null == tmpResult.useStateFromStores(tmp6, tmp7)) {
    return null;
  } else {
    const _Symbol2 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      _require = asyncGeneratorStep(async () => {
        tmp3(true);
        await tmp3(11412).clearBuildOverride();
        if (1 === tmp7) {
          c3 = 0;
          tmp3(false);
          c4 = 3;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      });
      function clearOverride() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[2] = clearOverride;
      let tmp9 = clearOverride;
    } else {
      tmp9 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t["/Nz9rY"]);
      cResult[3] = stringResult;
      let tmp11 = stringResult;
    } else {
      tmp11 = cResult[3];
    }
    if (cResult[4] !== tmp5) {
      const obj2 = { variant: "secondary", loading: tmp5, text: tmp11, onPress: tmp9 };
      const tmp15 = closure_9(tmp(5601).Button, obj2);
      cResult[4] = tmp5;
      cResult[5] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[5];
    }
    return tmp13;
  }
  tmpResult = require("initialize");
}) : (() => {
  closure_1 = async function _clearOverride2() {
    _require(true);
    await tmp3(tmp16[9]).clearBuildOverride();
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0(false);
      c4 = 3;
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    return value;
  };
  const tmp = _slicedToArray(noop.useState(false), 2);
  _require = tmp[1];
  const items = [BuildOverrideStore];
  if (null == obj.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let id;
    if (overrides != null) {
      const tmp4 = overrides[closure_0(undefined, dependencyMap[9]).DEVICE_FIELD];
      if (tmp4 != null) {
        id = tmp4.id;
      }
    }
    return id;
  })) {
    return null;
  } else {
    const obj2 = { variant: "secondary", loading: tmp[0], text: null, onPress: null };
    const intl = tmp2(1126).intl;
    obj2.text = intl.string(tmp2(1126).t["/Nz9rY"]);
    obj2.onPress = function clearOverride() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return closure_9(tmp2(5601).Button, obj2);
  }
  obj = require("initialize");
});
const PureComponent = noop.PureComponent;
class ErrorBoundary extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.state = { error: null, info: null };
    applyArgumentsResult.discordErrorsSet = false;
    return applyArgumentsResult;
  }
}
const prototype = ErrorBoundary.prototype;
prototype["componentDidCatch"] = function componentDidCatch(error, info) {
  this.triggerSoftCrash(error, info);
};
prototype["triggerSoftCrash"] = function triggerSoftCrash(error, info) {
  this.setState({ error, info });
  SentryUtilsDefault.captureCrash(error, { extra: info });
  const obj = { error, info };
  const obj3 = { extra: info };
  DispatcherDefault.dispatch({ type: "CLEAR_CACHES", reason: "App Crashed", resetSocket: true });
};
prototype["handleReload"] = function handleReload() {
  BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
  BundleUpdaterManager.reload();
};
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  if (null == window.DiscordErrors) {
    const _window = window;
    const obj = {
      softCrash(error) {
          self.triggerSoftCrash(error);
        }
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
  const tmp = closure_11(this.context);
  const error = this.state.error;
  if (null !== error) {
    const obj = { Illustration: AppCrash.AppCrash, title: null, body: null, titleStyle: null, bodyStyle: null, children: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.tx8CkI);
    const intl2 = util.intl;
    obj.body = intl2.string(util.t.CvQlAH);
    ({ text: obj.titleStyle, text: obj.bodyStyle } = tmp);
    const obj2 = { style: tmp.error, variant: "text-sm/medium", color: "text-muted", children: null };
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
    obj2.children = str;
    const items = [options(Text_Text.Text, obj2), , ];
    const obj3 = { style: tmp.buttons, children: null };
    const items1 = [options(closure_12, {}), ];
    const obj4 = { text: null, onPress: null };
    const intl3 = util.intl;
    obj4.text = intl3.string(util.t["4n8OJn"]);
    obj4.onPress = self.handleReload;
    items1[1] = options(components_Button_Button.Button, obj4);
    obj3.children = items1;
    items[1] = v65535(React5, obj3);
    items[2] = null;
    obj.children = items;
    let children = v65535(native.EmptyState, obj);
  } else {
    children = self.props.children;
  }
  return children;
};
ErrorBoundary.contextType = fn(4595).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/ErrorBoundary.tsx");

export default ErrorBoundary;