// discord_app/modules/devtools/native/components/DevToolsLazy.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01987_asyncRequireImpl.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import DeveloperExperimentStore from "../../../../stores/DeveloperExperimentStore.tsx";
import DevToolsSettingsStore from "../../DevToolsSettingsStore.tsx";

require = fn;
const NativeModules = fn(17).NativeModules;
const jsx = fn(21).jsx;
let items = [
  {
    input: "o",
    modifierFlags: fn(5781).KeyModifierFlags.keyModifierControl,
    eventName: "keyCommandShowDevTools",
    discoverabilityTitle: "Open DevTools Panel",
    onKeyCommand() {
      asyncRequireImpl(14402, dependencyMap.paths).then((navigateToDevTools) => {
        navigateToDevTools.navigateToDevTools();
      });
      return true;
    },
  },
];
const ReactCompilerGating = fn(558);
let obj = {
  input: "o",
  modifierFlags: fn(5781).KeyModifierFlags.keyModifierControl,
  eventName: "keyCommandShowDevTools",
  discoverabilityTitle: "Open DevTools Panel",
  onKeyCommand() {
    asyncRequireImpl(14402, dependencyMap.paths).then((navigateToDevTools) => {
      navigateToDevTools.navigateToDevTools();
    });
    return true;
  },
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsLazy.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = stateFromStores(576).c(10);
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
      let obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [DevToolsSettingsStore];
        class D {
          constructor() {
            return closure_1_5.showDevWidget;
          }
        }
        cResult[2] = items1;
        cResult[3] = D;
        let tmp9 = D;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = stateFromStores(504);
      const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp8, tmp9);
      if (cResult[4] !== stateFromStores) {
        const fn2 = function h() {
          if (obj.isIOS()) {
            DeveloperExperimentStore.addChangeListener(() => {
              NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
              if (NSUserDefaultsBridge != null) {
                const result = NSUserDefaultsBridge.setIsDiscordDeveloper(stateFromStores);
              }
            });
          }
          obj = PlatformUtils;
        };
        cResult[4] = stateFromStores;
        class D {
          constructor() {
            return closure_1_5.showDevWidget;
          }
        }
        cResult[5] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      const effect = noop.useEffect(tmp12);
      if (cResult[6] !== stateFromStores) {
        const tmp14 = stateFromStores ? items : [];
        cResult[6] = stateFromStores;
        class D {
          constructor() {
            return closure_1_5.showDevWidget;
          }
        }
        cResult[7] = tmp14;
      } else {
        const keyCommands = tmp(5781).useKeyCommands(cResult[7]);
        class D {
          constructor() {
            return closure_1_5.showDevWidget;
          }
        }
        return null;
      }
      const tmpResult3 = stateFromStores(504);
    }
  : () => {
      items = [DeveloperExperimentStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => isDeveloper.isDeveloper);
      let obj = stateFromStores(504);
      const tmp = stateFromStores;
      const items1 = [DevToolsSettingsStore];
      const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => showDevWidget.showDevWidget);
      const effect = noop.useEffect(() => {
        if (obj.isIOS()) {
          DeveloperExperimentStore.addChangeListener(() => {
            NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
            if (NSUserDefaultsBridge != null) {
              const result = NSUserDefaultsBridge.setIsDiscordDeveloper(stateFromStores);
            }
          });
        }
        obj = PlatformUtils;
      });
      const obj2 = stateFromStores(504);
      const keyCommands = stateFromStores(5781).useKeyCommands(stateFromStores ? items : []);
      if (stateFromStores) {
        if (stateFromStores1) {
          return jsx(tmp(15836).default, {});
        }
      }
      return null;
    };
