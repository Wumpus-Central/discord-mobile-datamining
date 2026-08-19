// discord_app/modules/devtools/native/components/DevToolsLazy.tsx
import enforcingDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeKeyCommandsModule.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { NativeModules } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import init from "../../../../stores/DeveloperExperimentStore.tsx";
import initialize from "../../DevToolsSettingsStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import obj132 from "../../../../utils/PlatformUtils.tsx";

const require = fn;
if (obj132.isAndroid()) {
  let keyModifierControl = enforcingDefault.getConstants().keyModifierControl;
  const importDefaultResult = enforcingDefault;
} else {
  keyModifierControl = NativeModules.KeyCommandsView.keyModifierControl;
}
obj132 = {
  input: "o",
  modifierFlags: keyModifierControl,
  eventName: "keyCommandShowDevTools",
  discoverabilityTitle: "Open DevTools Panel",
  onKeyCommand() {
    return callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw navigateToDevTools;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = navigateToDevTools;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v0 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              v0 = 3;
              throw navigateToDevTools;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = navigateToDevTools;
              return obj;
            } else {
              paths = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = v0(paths[9])(paths[8], paths.paths);
              return obj1;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw navigateToDevTools;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = navigateToDevTools;
            return obj;
          } else {
            navigateToDevTools.navigateToDevTools();
            v0 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp8) {
          v0 = tmp;
          throw tmp8;
        }
      }
    })();
  }
};
let items = [obj132];
let result = obj132.fileFinishedImporting("modules/devtools/native/components/DevToolsLazy.tsx");

export default function DevToolsLazy() {
  items = [closure_5];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => isDeveloper.isDeveloper);
  let obj = stateFromStores(589);
  const tmp = stateFromStores;
  const items1 = [closure_6];
  const stateFromStores1 = stateFromStores(589).useStateFromStores(items1, () => showDevWidget.showDevWidget);
  const effect = React.useEffect(() => {
    if (obj.isIOS()) {
      closure_1_5.addChangeListener(() => {
        const NSUserDefaultsBridge = closure_1_4.NSUserDefaultsBridge;
        if (NSUserDefaultsBridge != null) {
          const result = NSUserDefaultsBridge.setIsDiscordDeveloper(closure_0);
        }
      });
    }
    obj = stateFromStores(dependencyMap[6]);
  });
  const obj2 = stateFromStores(589);
  const keyCommands = stateFromStores(13940).useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(15192).default, {});
    }
  }
  return null;
};