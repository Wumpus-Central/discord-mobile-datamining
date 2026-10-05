// discord_app/components_native/ErrorBoundary.tsx
import get_initialized from "../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../_runtime/00576_react.js";
import DispatcherDefault from "../Dispatcher.tsx";
import intl4 from "../intl/index.native.tsx";
import native from "../design/void/native.tsx";
import SentryUtilsDefault from "../utils/SentryUtils.native.tsx";
import native2 from "../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../design/components/Text/native/Text.tsx";
import components_Button_Button from "../design/components/Button/native/Button.native.tsx";
import AppCrash from "../design/components/Illustration/native/redesign/generated/AppCrash.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import react from "../../_runtime/00019_react.js";
import react_native from "../../_runtime/00017_react-native.js";
import BuildOverrideStore from "../modules/build_overrides/BuildOverrideStore.tsx";
import Fragment from "../../_runtime/react/00021_Fragment.js";
import createStyles from "../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c1, c4;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
({ NativeModules: metroRequire, View: metroImportDefault } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
const unpackModuleId = createStyles.createLegacyClassComponentStyles({
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
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentBuildOverride;
      let require;
      let tmp5;
      let tmp6;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(6);
      let tmp4 = _slicedToArray(react.useState(false), 2);
      [tmp5, require] = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [BuildOverrideStore];
        const fn = function s() {
          const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
          let id;
          if (overrides != null) {
            const tmp4 = overrides[require("build_overrides/BuildOverrideUtils").DEVICE_FIELD];
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
      const tmpResult = get_initialized;
      if (null == tmpResult.useStateFromStores(tmp6, tmp7)) {
        return null;
      } else {
        let tmp9;
        let tmp11;
        let tmp13;
        const _Symbol2 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          let closure_0 = _asyncToGenerator(async () => {
            let obj2;
            if (c4 === 2) {
              c4 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              let c3;
              try {
                c4 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c3 = 1;
                    tmp(true);
                    c1 = 2;
                    c4 = 1;
                    const obj5 = { value: obj2.clearBuildOverride(), done: false };
                    obj2 = tmp(dependencyMap[9]);
                    return obj5;
                  }
                } else {
                  if (1 === tmp4) {
                    c3 = 0;
                    tmp(false);
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c4 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    c3 = 0;
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp13) {
                let closure_2 = tmp13;
                if (0 === c3) {
                  c4 = 3;
                  throw tmp13;
                } else {
                  c1 = 1;
                }
              }
            }
          });
          function clearOverride() {
            return closure_0(...arguments);
          }
          cResult[2] = clearOverride;
          tmp9 = clearOverride;
        } else {
          tmp9 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl4.intl;
          const stringResult = intl.string(intl4.t["/Nz9rY"]);
          cResult[3] = stringResult;
          tmp11 = stringResult;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== tmp5) {
          let obj2 = { variant: "secondary", loading: tmp5, text: tmp11, onPress: tmp9 };
          const tmp15 = closure_9(components_Button_Button.Button, obj2);
          cResult[4] = tmp5;
          cResult[5] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[5];
        }
        return tmp13;
      }
    }
  : () => {
      let closure_0;
      let currentBuildOverride;
      let first;
      let intl;
      let obj = function _clearOverride2() {
        obj = _asyncToGenerator(async () => {
          let obj2;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
            try {
              c4 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  c3 = 1;
                  closure_2_0(true);
                  c1 = 2;
                  c4 = 1;
                  const obj5 = { value: obj2.clearBuildOverride(), done: false };
                  obj2 = tmp(closure_2[9]);
                  return obj5;
                }
              } else {
                if (1 === tmp4) {
                  c3 = 0;
                  closure_128_0(false);
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c4 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  c3 = 0;
                }
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp13) {
              closure_2 = tmp13;
              if (0 === c3) {
                c4 = 3;
                throw tmp13;
              } else {
                c1 = 1;
              }
            }
          }
        });
        return obj(...arguments);
      };
      [first, _require] = react.useState(false);
      const tmp3 = _require;
      obj = require("get initialized");
      const items = [BuildOverrideStore];
      if (
        null ==
        obj.useStateFromStores(items, () => {
          const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
          let id;
          if (overrides != null) {
            const tmp4 = overrides[closure_0(undefined, dependencyMap[9]).DEVICE_FIELD];
            if (tmp4 != null) {
              id = tmp4.id;
            }
          }
          return id;
        })
      ) {
        return null;
      } else {
        let obj2 = {
          variant: "secondary",
          loading: first,
          text: intl.string(tmp3(1126).t["/Nz9rY"]),
          onPress: function clearOverride() {
            return obj(...arguments);
          },
        };
        const Button = tmp3(5594).Button;
        intl = tmp3(1126).intl;
        return closure_9(Button, obj2);
      }
    };
const PureComponent = react.PureComponent;
class ErrorBoundary extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.state = { error: null, info: null };
    applyArgumentsResult.discordErrorsSet = false;
    return applyArgumentsResult;
  }
  componentDidCatch(error, info) {
    this.triggerSoftCrash(error, info);
  }
  triggerSoftCrash(error, info) {
    const obj = { error, info };
    this.setState(obj);
    const obj2 = SentryUtilsDefault;
    const obj3 = { extra: info };
    obj2.captureCrash(error, obj3);
    const obj4 = DispatcherDefault;
    obj4.dispatch({ type: "CLEAR_CACHES", reason: "App Crashed", resetSocket: true });
  }
  handleReload() {
    metroRequire = metroRequire.BundleUpdaterManager;
    metroRequire.reload();
  }
  componentDidMount() {
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
  }
  componentWillUnmount() {
    if (this.discordErrorsSet) {
      const _window = window;
      window.DiscordErrors = null;
      tmp.discordErrorsSet = false;
    }
  }
  render() {
    let children;
    let intl;
    let intl2;
    let intl3;
    let items;
    let items1;
    let str;
    const self = this;
    const tmp = closure_11(this.context);
    const error = this.state.error;
    if (null !== error) {
      const obj = {
        Illustration: AppCrash.AppCrash,
        title: intl.string(intl4.t.tx8CkI),
        body: intl2.string(intl4.t.CvQlAH),
        titleStyle: null,
        bodyStyle: null,
        children: items,
      };
      const EmptyState = native.EmptyState;
      intl = intl4.intl;
      intl2 = intl4.intl;
      ({ text: obj.titleStyle, text: obj.bodyStyle } = tmp);
      const obj2 = { style: tmp.error, variant: "text-sm/medium", color: "text-muted", children: str };
      str = undefined;
      const Text = Text_Text.Text;
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
      items = [React4(Text, obj2), ,];
      const obj3 = { style: tmp.buttons, children: items1 };
      items1 = [React4(closure_12, {})];
      const obj4 = { text: intl3.string(intl4.t["4n8OJn"]), onPress: self.handleReload };
      const Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      items1[1] = React4(Button, obj4);
      items[1] = authStore(metroImportDefault, obj3);
      items[2] = null;
      children = authStore(EmptyState, obj);
    } else {
      children = self.props.children;
    }
    return children;
  }
}
const prototype = ErrorBoundary.prototype;
ErrorBoundary.contextType = native2.ThemeContext;
const result = size.fileFinishedImporting("components_native/ErrorBoundary.tsx");

export default ErrorBoundary;
