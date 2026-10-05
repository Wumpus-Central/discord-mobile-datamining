// discord_app/modules/devtools/native/components/DevToolsLazy.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import KeyCommands from "../../../keyboard/native/KeyCommands.tsx";
import react from "../../../../../_runtime/00019_react.js";
import DeveloperExperimentStore from "../../../../stores/DeveloperExperimentStore.tsx";
import DevToolsSettingsStore from "../../DevToolsSettingsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let NSUserDefaultsBridge;

const NativeModules = react_native.NativeModules;
const jsx = Fragment.jsx;
let obj = {
  input: "o",
  modifierFlags: KeyCommands.KeyModifierFlags.keyModifierControl,
  eventName: "keyCommandShowDevTools",
  discoverabilityTitle: "Open DevTools Panel",
  onKeyCommand() {
    const promise = asyncRequire(14406, dependencyMap.paths);
    promise.then((navigateToDevTools) => {
      navigateToDevTools.navigateToDevTools();
    });
    return true;
  },
};
let items = [obj];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let isDeveloper;
      let showDevWidget;
      let stateFromStores;
      let tmp12;
      let tmp14;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      let obj = stateFromStores(576);
      const cResult = obj.c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [DeveloperExperimentStore];
        const fn = function v() {
          return isDeveloper.isDeveloper;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = stateFromStores(504);
      stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [DevToolsSettingsStore];
        class D {
          constructor() {
            return showDevWidget.showDevWidget;
          }
        }
        cResult[2] = items1;
        cResult[3] = D;
        tmp9 = D;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult4 = stateFromStores(504);
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
      if (cResult[4] !== stateFromStores) {
        const fn2 = function h() {
          const obj = PlatformUtils;
          if (obj.isIOS()) {
            DeveloperExperimentStore.addChangeListener(() => {
              NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
              if (NSUserDefaultsBridge != null) {
                const result = NSUserDefaultsBridge.setIsDiscordDeveloper(stateFromStores);
              }
            });
          }
        };
        cResult[4] = stateFromStores;
        class D {
          constructor() {
            return showDevWidget.showDevWidget;
          }
        }
        cResult[5] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      const effect = react.useEffect(tmp12);
      if (cResult[6] !== stateFromStores) {
        const tmp15 = stateFromStores ? items : [];
        cResult[6] = stateFromStores;
        class D {
          constructor() {
            return showDevWidget.showDevWidget;
          }
        }
        cResult[7] = tmp15;
        tmp14 = tmp15;
      } else {
        tmp14 = cResult[7];
      }
      const tmpResult5 = stateFromStores(5781);
      const keyCommands = tmpResult5.useKeyCommands(tmp14);
      if (stateFromStores) {
        if (stateFromStores1) {
          let tmp19;
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            cResult[8] = stateFromStores(15840);
            stateFromStores(15840);
            class D {
              constructor() {
                return showDevWidget.showDevWidget;
              }
            }
          }
          class D {
            constructor() {
              return showDevWidget.showDevWidget;
            }
          }
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp21 = <_default />;
            class D {
              constructor() {
                return showDevWidget.showDevWidget;
              }
            }
            tmp19 = tmp21;
          } else {
            tmp19 = cResult[9];
          }
          return tmp19;
        }
      }
      return null;
    }
  : () => {
      let isDeveloper;
      let showDevWidget;
      let stateFromStores;
      let obj = stateFromStores(504);
      items = [DeveloperExperimentStore];
      const tmp = stateFromStores;
      stateFromStores = obj.useStateFromStores(items, () => isDeveloper.isDeveloper);
      const items1 = [DevToolsSettingsStore];
      const obj2 = stateFromStores(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () => showDevWidget.showDevWidget);
      const effect = react.useEffect(() => {
        const obj = PlatformUtils;
        if (obj.isIOS()) {
          DeveloperExperimentStore.addChangeListener(() => {
            NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
            if (NSUserDefaultsBridge != null) {
              const result = NSUserDefaultsBridge.setIsDiscordDeveloper(stateFromStores);
            }
          });
        }
      });
      const obj3 = stateFromStores(5781);
      const keyCommands = obj3.useKeyCommands(stateFromStores ? items : []);
      if (stateFromStores) {
        if (stateFromStores1) {
          return jsx(tmp(15840).default, {});
        }
      }
      return null;
    };
let result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsLazy.tsx");

export default tmp2;
