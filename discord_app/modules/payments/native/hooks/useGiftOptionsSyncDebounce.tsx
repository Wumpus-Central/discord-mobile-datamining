// === Module 10164: useGiftOptionsSyncDebounce ===

// Module 10164 (useGiftOptionsSyncDebounce)
import _modDef12 from "module_12" /* 12 */;
import useInitialValueDefault from "useInitialValue" /* 5910 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/native/hooks/useGiftOptionsSyncDebounce.tsx");

export default function useGiftOptionsSyncDebounce(arg0) {
  importDefault = arg0;
  dependencyMap = noop.useRef(null);
  noop = noop.useRef(null);
  noop.useRef([]);
  const tmp = useInitialValueDefault(() => _modDef12.debounce(() => {
    closure_1_2.current = ref.current;
    closure_1_0((arg0) => arg0 + 1);
  }, 500));
  closure_4 = tmp;
  const resolveSyncs = noop.useCallback((arg0) => {
    closure_3.current = [];
    for (const item10008 of tmp) {
      let item10008Result = item10008(arg0);
      continue;
    }
  }, []);
  const items = [tmp, resolveSyncs];
  const effect = noop.useEffect(() => () => {
    closure_1_4.cancel();
    resolveSyncs(false);
  }, items);
  const items1 = [tmp];
  const items2 = [tmp];
  const callback1 = noop.useCallback((current) => {
    closure_1.current = current;
    let flag = ref.current !== current;
    if (flag) {
      closure_4();
      flag = true;
    }
    return flag;
  }, items1);
  const callback2 = noop.useCallback((current) => {
    closure_4.cancel();
    closure_2.current = current;
  }, items2);
  const callback3 = noop.useCallback(() => new Promise((arg0) => {
    const current = ref.current;
    return current.push(arg0);
  }), []);
  return { waitForPause: callback1, flush: callback2, waitForSync: callback3, resolveSyncs, isAwaitingSync: noop.useCallback(() => ref2.current.length > 0, []) };
};