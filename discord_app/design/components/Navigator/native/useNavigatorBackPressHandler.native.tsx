// === Module 6318: useNavigatorBackPressHandler ===

// Module 6318 (useNavigatorBackPressHandler)
import noop from "noop" /* 19 */;

const require = fn;
require("get ActivityIndicator").BackHandler;
const result = require("obj132").fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = function useNavigatorBackPressHandler(callback) {
  const _require = callback;
  dependencyMap = React.useRef(callback);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_1.current = closure_0;
  });
  const focusEffect = _require(1501).useFocusEffect(React.useCallback(() => {
    if (!obj.isIOS()) {
      callback = BackHandler.addEventListener("hardwareBackPress", (event) => ref.current());
      return () => closure_0.remove();
    }
    obj = callback(table[3]);
  }, []));
};