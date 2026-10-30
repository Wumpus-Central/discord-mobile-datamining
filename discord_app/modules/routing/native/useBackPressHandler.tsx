// discord_app/modules/routing/native/useBackPressHandler.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import KeyCommands from "../../keyboard/native/KeyCommands.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const BackPressTracking = tmp(6020);
require = fn;
const NativeModules = fn(17).NativeModules;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/native/useBackPressHandler.tsx");

export default function useBackPressHandler(current) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  noop = undefined;
  noop = noop.useRef(current);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_2.current = current;
  });
  const items = [flag];
  const effect = noop.useEffect(() => {
    if (flag) {
      const fn = () => ref.current();
      const obj2 = { input: KeyCommands.KeyInputs.ESCAPE, eventName: "keyCommandBackPress", onKeyCommand: fn };
      let fn2 = KeyCommands.subscribeKeyCommand(obj2);
      if (!obj3.isIOS()) {
        closure_1 = BackPressTracking.addBackPressListener(fn);
        fn2 = () => {
          closure_1.remove();
          fn2();
        };
        const tmpResult = BackPressTracking;
      }
      return fn2;
    }
  }, items);
}
export function subscribeToBackPress(onKeyCommand) {
  const obj = KeyCommands;
  const subscribeKeyCommandResult = obj.subscribeKeyCommand({
    input: KeyCommands.KeyInputs.ESCAPE,
    eventName: "keyCommandBackPress",
    onKeyCommand,
  });
  require = subscribeKeyCommandResult;
  const obj2 = { input: KeyCommands.KeyInputs.ESCAPE, eventName: "keyCommandBackPress", onKeyCommand };
  if (obj3.isIOS()) {
    return subscribeKeyCommandResult;
  } else {
    closure_1 = BackPressTracking.addBackPressListener(onKeyCommand);
    return () => {
      closure_1.remove();
      fn2();
    };
  }
  obj3 = PlatformUtils;
}
export const BackPressHandler = {
  minimize() {
    const MinimizeApp = NativeModules.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  },
};
