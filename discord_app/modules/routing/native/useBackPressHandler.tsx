// discord_app/modules/routing/native/useBackPressHandler.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import KeyCommands from "../../keyboard/native/KeyCommands.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const BackPressTracking = tmp(5375);
require = fn;
const NativeModules = fn(17).NativeModules;
const ReactCompilerGating = fn(558);
function subscribeToBackPress(onKeyCommand) {
  const obj = KeyCommands;
  const subscribeKeyCommandResult = obj.subscribeKeyCommand({
    input: KeyCommands.KeyInputs.ESCAPE,
    eventName: "keyCommandBackPress",
    onKeyCommand,
  });
  const require = subscribeKeyCommandResult;
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/native/useBackPressHandler.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useBackPressHandler(current, arg1) {
      _require = current;
      const cResult = require("c").c(5);
      dependencyMap = tmp2;
      noop = noop.useRef(current);
      if (cResult[0] !== current) {
        let fn = function c() {
          closure_2.current = current;
        };
        cResult[0] = current;
        cResult[1] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      const layoutEffect = obj2.useLayoutEffect(tmp3);
      if (cResult[2] !== (undefined === arg1 || arg1)) {
        let fn2 = function t() {
          if (closure_1) {
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
        };
        const items = [tmp2];
        cResult[2] = tmp2;
        cResult[3] = fn2;
        cResult[4] = items;
        let tmp6 = items;
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      const effect = obj2.useEffect(tmp5, tmp6);
    }
  : function useBackPressHandler(current) {
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
    };
export { subscribeToBackPress };
export const BackPressHandler = {
  minimize() {
    const MinimizeApp = NativeModules.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  },
};
