// discord_app/components_native/ErrorBoundary.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import util from "../intl/index.native.tsx";
import native from "../design/void/native.tsx";
import SentryUtilsDefault from "../utils/SentryUtils.native.tsx";
import Text_Text from "../design/components/Text/native/Text.tsx";
import components_Button_Button from "../design/components/Button/native/Button.native.tsx";
import AppCrash from "../design/components/Illustration/native/redesign/generated/AppCrash.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import noop from "../../_runtime/metro/00019__.js";
import BuildOverrideStore from "../modules/build_overrides/BuildOverrideStore.tsx";

require = fn;
function MaybeClearBuildOverride() {
  closure_1 = async function _clearOverride() {
    _require(true);
    await tmp3(tmp16[8]).clearBuildOverride();
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0(false);
      c4 = 3;
    } else if (arg0 === 1) {
      c4 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    return arg1;
  };
  const tmp = _slicedToArray(noop.useState(false), 2);
  _require = tmp[1];
  let obj = require("initialize");
  const items = [BuildOverrideStore];
  if (
    null ==
    obj.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (overrides != null) {
        const tmp4 = overrides[closure_0(undefined, dependencyMap[8]).DEVICE_FIELD];
        if (tmp4 != null) {
          id = tmp4.id;
        }
      }
      return id;
    })
  ) {
    return null;
  } else {
    obj = { variant: "secondary", loading: tmp[0], text: null, onPress: null };
    const intl = tmp2(1114).intl;
    obj.text = intl.string(tmp2(1114).t["/Nz9rY"]);
    obj.onPress = function clearOverride() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return closure_9(tmp2(4975).Button, obj);
  }
}
get_ActivityIndicator = fn(17);
({ NativeModules: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createLegacyClassComponentStyles({
  buttons: { position: "absolute", right: 32, bottom: 32, left: 32, gap: 12 },
  debugLogsContainer: {
    position: "absolute",
    right: 32,
    top: 64,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  error: { marginTop: 24, textAlign: "center" },
  text: { textAlign: "center" },
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
  let obj = { error, info };
  this.setState(obj);
  obj = { extra: info };
  SentryUtilsDefault.captureCrash(error, obj);
  DispatcherDefault.dispatch({ type: "CLEAR_CACHES", reason: "App Crashed" });
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
      },
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
    let obj = {
      Illustration: AppCrash.AppCrash,
      title: null,
      body: null,
      titleStyle: null,
      bodyStyle: null,
      children: null,
    };
    const intl = util.intl;
    obj.title = intl.string(util.t.tx8CkI);
    const intl2 = util.intl;
    obj.body = intl2.string(util.t.CvQlAH);
    ({ text: obj.titleStyle, text: obj.bodyStyle } = tmp);
    obj = { style: tmp.error, variant: "text-sm/medium", color: "text-muted", children: null };
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
    obj.children = str;
    const items = [React7(Text_Text.Text, obj), ,];
    obj = { style: tmp.buttons, children: null };
    const items1 = [React7(MaybeClearBuildOverride, {})];
    const obj1 = { text: null, onPress: null };
    const intl3 = tmp3(1114).intl;
    obj1.text = intl3.string(util.t["4n8OJn"]);
    obj1.onPress = self.handleReload;
    items1[1] = React7(components_Button_Button.Button, obj1);
    obj.children = items1;
    items[1] = closure_1_10(React5, obj);
    items[2] = null;
    obj.children = items;
    let children = tmp2(native.EmptyState, obj);
  } else {
    children = self.props.children;
  }
  return children;
};
ErrorBoundary.contextType = fn(4271).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/ErrorBoundary.tsx");

export default ErrorBoundary;
