// === Module 17091: DevToolsLazy ===

// Module 17091 (DevToolsLazy)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import noop from "module_19" /* 19 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 8838 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8837 */;

require = fn;
const NativeModules = fn(17).NativeModules;
const jsx = fn(21).jsx;
let items = [
  {
    input: "o",
    modifierFlags: fn(6331).KeyModifierFlags.keyModifierControl,
    eventName: "keyCommandShowDevTools",
    discoverabilityTitle: "Open DevTools Panel",
    onKeyCommand() {
      asyncRequireImpl(17092, dependencyMap.paths).then((navigateToDevTools) => {
        navigateToDevTools.navigateToDevTools();
      });
      return true;
    }
  }
];
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
    obj = PlatformUtils;
  });
  const obj2 = stateFromStores(504);
  const keyCommands = stateFromStores(6331).useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(18678).default, {});
    }
  }
  return null;
};