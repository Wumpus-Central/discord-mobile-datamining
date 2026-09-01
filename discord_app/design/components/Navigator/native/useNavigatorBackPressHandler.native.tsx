// === Module 5501: useNavigatorBackPressHandler ===

// Module 5501 (useNavigatorBackPressHandler)
import closure_2 from "noop" /* 19 */;

const require = arg1;
require("get ActivityIndicator").BackHandler;
const result = require("set").fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = function useNavigatorBackPressHandler(callback) {
  const _require = callback;
  dependencyMap = React.useRef(callback);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_1.current = closure_0;
  });
  const focusEffect = _require(1500).useFocusEffect(React.useCallback(() => {
    if (!obj.isIOS()) {
      callback = closure_1_3.addEventListener("hardwareBackPress", () => ref.current());
      return () => closure_0.remove();
    }
    obj = callback(table[3]);
  }, []));
};