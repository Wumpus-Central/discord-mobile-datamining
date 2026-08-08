// discord_app/modules/devtools/native/components/DevToolsLazy.tsx
import jsxProd from "jsxProd";
import noop from "noop";
import { NativeModules } from "get ActivityIndicator";
import init from "init";
import initialize from "initialize";
import { jsx } from "jsxProd";
import set from "set";
import set from "get ActivityIndicator";

const require = arg1;
if (set.isAndroid()) {
  let keyModifierControl = require("enforcing").getConstants().keyModifierControl;
  const importDefaultResult = require("enforcing");
} else {
  keyModifierControl = NativeModules.KeyCommandsView.keyModifierControl;
}
set = {
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
          v0 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              paths = 1;
              v0 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = v0(paths[9])(paths[8], paths.paths);
              return obj1;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            arg1.navigateToDevTools();
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          v0 = tmp;
          throw tmp8;
        }
      }
    })();
  }
};
let items = [set];
let result = set.fileFinishedImporting("modules/devtools/native/components/DevToolsLazy.tsx");

export default function DevToolsLazy() {
  const items = [init];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => isDeveloper.isDeveloper);
  const obj = stateFromStores(589);
  const tmp = stateFromStores;
  const items1 = [initialize];
  const stateFromStores1 = stateFromStores(589).useStateFromStores(items1, () => showDevWidget.showDevWidget);
  const effect = React.useEffect(() => {
    if (obj.isIOS()) {
      outer1_5.addChangeListener(() => {
        const NSUserDefaultsBridge = outer1_4.NSUserDefaultsBridge;
        if (NSUserDefaultsBridge != null) {
          const result = NSUserDefaultsBridge.setIsDiscordDeveloper(closure_0);
        }
      });
    }
  });
  const obj2 = stateFromStores(589);
  const keyCommands = stateFromStores(13835).useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(15059).default, {});
    }
  }
  return null;
};