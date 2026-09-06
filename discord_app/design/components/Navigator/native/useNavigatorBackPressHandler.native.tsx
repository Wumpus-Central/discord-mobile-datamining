// === Module 5630: useNavigatorBackPressHandler ===

// Module 5630 (useNavigatorBackPressHandler)
import noop from "module_19" /* 19 */;

const require = fn;
fn(17).BackHandler;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = function useNavigatorBackPressHandler(callback) {
  _require = callback;
  dependencyMap = noop.useRef(callback);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_1.current = current;
  });
  const focusEffect = require("Link").useFocusEffect(noop.useCallback(() => {
    if (!obj.isIOS()) {
      current = BackHandler.addEventListener("hardwareBackPress", () => ref.current());
      return () => closure_0.remove();
    }
    obj = current(ref[3]);
  }, []));
};