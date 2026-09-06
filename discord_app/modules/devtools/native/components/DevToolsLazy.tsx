// === Module 14579: DevToolsLazy ===

// Module 14579 (DevToolsLazy)
import PlatformUtils2 from "PlatformUtils" /* 1115 */;
import NativeKeyCommandsModuleDefault from "NativeKeyCommandsModule" /* 14580 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7720 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7719 */;

require = fn;
const NativeModules = fn(17).NativeModules;
const jsx = fn(21).jsx;
let PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  let keyModifierControl = NativeKeyCommandsModuleDefault.getConstants().keyModifierControl;
  const importDefaultResult = NativeKeyCommandsModuleDefault;
} else {
  keyModifierControl = NativeModules.KeyCommandsView.keyModifierControl;
}
PlatformUtils = {
  input: "o",
  modifierFlags: keyModifierControl,
  eventName: "keyCommandShowDevTools",
  discoverabilityTitle: "Open DevTools Panel",
  onKeyCommand() {
    return (async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c1 = 1;
              c0 = 1;
              const obj1 = { value: require("asyncRequireImpl")(paths[8], paths.paths), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            value.navigateToDevTools();
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          c0 = tmp;
          throw tmp8;
        }
      }
    })();
  }
};
let items = [PlatformUtils];
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsLazy.tsx");

export default function DevToolsLazy() {
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
    obj = PlatformUtils2;
  });
  const obj2 = stateFromStores(504);
  const keyCommands = stateFromStores(14575).useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(15925).default, {});
    }
  }
  return null;
};