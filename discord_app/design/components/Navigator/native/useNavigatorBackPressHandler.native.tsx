import { Link } from "../../../../../_runtime/01481_Link.js";
// discord_app/design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx
import noop from "noop";

const require = arg1;
require("get ActivityIndicator").BackHandler;
const result = require("Link").fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = function useNavigatorBackPressHandler(callback) {
  const _require = callback;
  const dependencyMap = React.useRef(callback);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_1.current = closure_0;
  });
  const focusEffect = _Link.useFocusEffect(React.useCallback(() => {
    if (!obj.isIOS()) {
      const callback = outer1_3.addEventListener("hardwareBackPress", () => ref.current());
      return () => closure_0.remove();
    }
    obj = callback(table[3]);
  }, []));
};