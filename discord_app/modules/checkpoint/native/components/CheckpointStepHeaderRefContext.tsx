// discord_app/modules/checkpoint/native/components/CheckpointStepHeaderRefContext.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointStepHeaderRefContext.tsx");

export default context;
export function CheckpointStepFocusProvider(arg0) {
  let isScreenReaderEnabled;
  ({ route, children } = arg0);
  _require = noop.useRef(null);
  value = noop.useCallback((current) => {
    closure_0.current = current;
  }, []);
  isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const items = [route, isScreenReaderEnabled];
  const effect = noop.useEffect(() => {
    if (isScreenReaderEnabled) {
      const _setTimeout = setTimeout;
      setTimeout(() => ref(isScreenReaderEnabled[3]).setAccessibilityFocus({ ref }), 100);
      return () => clearTimeout(closure_0);
    }
  }, items);
  return <context.Provider value={value}>{children}</context.Provider>;
}
