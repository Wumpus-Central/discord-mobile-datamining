// discord_app/modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx
import importAllResult from "noop";
import { NOOP } from "sum";
import { jsx } from "jsxProd";

let c0 = importAllResult;
const context = importAllResult.createContext({
  registerDismiss(arg0) {
    return NOOP;
  },
  handleDismissCoachmarkOnScroll: "Array"
});
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx");

export const useCollectiblesCoachmarkScrollDismissContext = function useCollectiblesCoachmarkScrollDismissContext() {
  return importAllResult.useContext(closure_3);
};
export const CollectiblesCoachmarkScrollDismissProvider = function CollectiblesCoachmarkScrollDismissProvider(children) {
  let importAllResult;
  let closure_1;
  let callback;
  let callback1;
  importAllResult = importAllResult.useRef(null);
  closure_1 = importAllResult.useRef(null);
  callback = importAllResult.useCallback((current) => {
    let closure_0 = current;
    closure_0.current = current;
    closure_1.current = null;
    return () => {
      if (ref.current === ref) {
        tmp.current = null;
        outer1_1.current = null;
      }
    };
  }, []);
  callback1 = importAllResult.useCallback((nativeEvent) => {
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
  const items = [callback, callback1];
  return callback(callback1.Provider, { value: importAllResult.useMemo(() => ({ registerDismiss: callback, handleDismissCoachmarkOnScroll: callback1 }), items), children: children.children });
};