// === Module 14156: CheckpointStepHeaderRefContext ===

// Module 14156 (CheckpointStepHeaderRefContext)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointStepHeaderRefContext.tsx");

export default context;
export function CheckpointStepFocusProvider(arg0) {
  let isScreenReaderEnabled;
  ({ route, children } = arg0);
  let tmp = isScreenReaderEnabled(noop.useState(null), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  value = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_1(arg0);
    return () => closure_1((arg0) => {
      let tmp = null;
      if (arg0 !== closure_1_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  isScreenReaderEnabled = first(5505).useIsScreenReaderEnabled();
  items = [route, first, isScreenReaderEnabled];
  const effect = noop.useEffect(() => {
    if (isScreenReaderEnabled) {
      if (null != current) {
        const _setTimeout = setTimeout;
        current = setTimeout(() => {
          const obj2 = { ref: { current } };
          return first(closure_1[4]).setAccessibilityFocus(obj2);
        }, 100);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
  return <context.Provider value={value}>{children}</context.Provider>;
}