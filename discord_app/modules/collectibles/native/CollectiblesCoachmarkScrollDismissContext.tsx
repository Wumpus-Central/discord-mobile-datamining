// === Module 15817: CollectiblesCoachmarkScrollDismissContext ===

// Module 15817 (CollectiblesCoachmarkScrollDismissContext)
import noop from "module_19" /* 19 */;

const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
const redux = noop.createContext({
  registerDismiss() {
    return NOOP;
  },
  handleDismissCoachmarkOnScroll: "a"
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx");

export const useCollectiblesCoachmarkScrollDismissContext = function useCollectiblesCoachmarkScrollDismissContext() {
  return noop.useContext(closure_3);
};
export const CollectiblesCoachmarkScrollDismissProvider = function CollectiblesCoachmarkScrollDismissProvider(children) {
  noop.useRef(null);
  noop.useRef(null);
  const registerDismiss = noop.useCallback((current) => {
    current.current = current;
    closure_1.current = null;
    return () => {
      if (ref.current === ref) {
        tmp.current = null;
        closure_1.current = null;
      }
    };
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    const current = ref.current;
    if (null != current) {
      const contentOffset = nativeEvent.nativeEvent.contentOffset;
      if (null != ref2.current) {
        const _Math = Math;
        if (Math.abs(contentOffset.x - tmp3.current) >= 16) {
          tmp.current = null;
          tmp3.current = null;
          current();
        }
      } else {
        tmp3.current = contentOffset.x;
      }
    }
  }, []);
  const items = [registerDismiss, callback1];
  return <redux.Provider value={noop.useMemo(() => ({ registerDismiss, handleDismissCoachmarkOnScroll: callback1 }), items)}>{arg0.children}</redux.Provider>;
};