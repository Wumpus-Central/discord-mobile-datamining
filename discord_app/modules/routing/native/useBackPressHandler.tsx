// === Module 5266: useBackPressHandler ===

// Module 5266 (useBackPressHandler)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import KeyCommands from "KeyCommands" /* 5267 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ BackHandler: c3, NativeModules: closure_4 } = get_ActivityIndicator);
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
        closure_1 = React3.addEventListener("hardwareBackPress", fn);
        fn2 = () => {
          closure_1.remove();
          fn2();
        };
      }
      return fn2;
    }
  }, items);
};
export const subscribeToBackPress = function subscribeToBackPress(onKeyCommand) {
  const obj = KeyCommands;
  const subscribeKeyCommandResult = obj.subscribeKeyCommand({ input: KeyCommands.KeyInputs.ESCAPE, eventName: "keyCommandBackPress", onKeyCommand });
  require = subscribeKeyCommandResult;
  const obj2 = { input: KeyCommands.KeyInputs.ESCAPE, eventName: "keyCommandBackPress", onKeyCommand };
  if (obj3.isIOS()) {
    return subscribeKeyCommandResult;
  } else {
    closure_1 = React3.addEventListener("hardwareBackPress", onKeyCommand);
    return () => {
      closure_1.remove();
      fn2();
    };
  }
  obj3 = PlatformUtils;
};
export const BackPressHandler = {
  minimize() {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  }
};