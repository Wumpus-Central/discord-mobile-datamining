// discord_app/design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx
import noop from "noop";
import { createStandardNavigationFactories } from "../../../../../_runtime/01501_createStandardNavigationFactories.js";

const require = arg1;
require("get ActivityIndicator").BackHandler;
const result = require("createStandardNavigationFactories").fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = function useNavigatorBackPressHandler(callback) {
  const _require = callback;
  const dependencyMap = React.useRef(callback);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_1.current = closure_0;
  });
  const focusEffect = _createStandardNavigationFactories.useFocusEffect(React.useCallback(() => {
    if (!obj.isIOS()) {
      const callback = outer1_3.addEventListener("hardwareBackPress", () => ref.current());
      return () => closure_0.remove();
    }
    obj = callback(table[3]);
  }, []));
};