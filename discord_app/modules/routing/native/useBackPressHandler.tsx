// === Module 4972: useBackPressHandler ===

// Module 4972 (useBackPressHandler)
import noop from "module_19" /* 19 */;

const require = fn;
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
    if (!obj.isIOS()) {
      if (flag) {
        current = closure_1_3.addEventListener("hardwareBackPress", () => ref.current());
        return () => closure_0.remove();
      }
    }
    obj = current(flag[2]);
  }, items);
};
export const BackPressHandler = {
  minimize() {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  }
};