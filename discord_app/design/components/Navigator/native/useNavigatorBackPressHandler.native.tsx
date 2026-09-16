// discord_app/design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx
import useBackPressHandler from "../../../../modules/routing/native/useBackPressHandler.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = function useNavigatorBackPressHandler(callback) {
  _require = callback;
  dependencyMap = noop.useRef(callback);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_1.current = current;
  });
  const focusEffect = require("Link").useFocusEffect(
    noop.useCallback(() => useBackPressHandler.subscribeToBackPress(() => ref.current()), []),
  );
};
