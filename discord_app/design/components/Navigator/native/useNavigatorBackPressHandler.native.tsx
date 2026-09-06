// discord_app/design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

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
  const focusEffect = require("Link").useFocusEffect(
    noop.useCallback(() => {
      if (!obj.isIOS()) {
        current = BackHandler.addEventListener("hardwareBackPress", () => ref.current());
        return () => closure_0.remove();
      }
      obj = current(ref[3]);
    }, []),
  );
};
