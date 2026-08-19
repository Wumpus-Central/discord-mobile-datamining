// discord_app/modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx
import importAllResult from "../../../../_runtime/00019_noop.js";
import { NOOP } from "../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

let c0 = importAllResult;
const context = importAllResult.createContext({
  registerDismiss(arg0) {
    return NOOP;
  },
  handleDismissCoachmarkOnScroll: "a"
});
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx");

export const useCollectiblesCoachmarkScrollDismissContext = function useCollectiblesCoachmarkScrollDismissContext() {
  return importAllResult.useContext(closure_3);
};
export const CollectiblesCoachmarkScrollDismissProvider = function CollectiblesCoachmarkScrollDismissProvider(children) {
  importAllResult = undefined;
  importAllResult = importAllResult.useRef(null);
  closure_1 = importAllResult.useRef(null);
  const callback = importAllResult.useCallback((current) => {
    closure_0 = current;
    closure_0.current = current;
    closure_1.current = null;
    return () => {
      if (ref.current === ref) {
        tmp.current = null;
        closure_1_1.current = null;
      }
    };
  }, []);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    const current = ref.current;
    if (null != current) {
      const contentOffset = nativeEvent.nativeEvent.contentOffset;
      if (null != ref2.current) {
        const _Math = Math;
        if (Math.abs(contentOffset.x - ref2.current) >= 16) {
          tmp.current = null;
          ref2.current = null;
          current();
        }
      } else {
        ref2.current = contentOffset.x;
      }
    }
  }, []);
  const items = [callback, callback1];
  return callback(callback1.Provider, { value: importAllResult.useMemo(() => ({ registerDismiss: callback, handleDismissCoachmarkOnScroll: callback1 }), items), children: children.children });
};