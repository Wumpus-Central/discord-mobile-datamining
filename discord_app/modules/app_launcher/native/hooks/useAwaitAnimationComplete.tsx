// === Module 11340: AwaitAnimationContext ===

// Module 11340 (AwaitAnimationContext)
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

let c0 = importAllResult;
let context = importAllResult.createContext(null);
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx");

export const AwaitAnimationContext = function AwaitAnimationContext(children) {
  const handleQueuedCallback = children.handleQueuedCallback;
  const items = [handleQueuedCallback];
  return <redux.Provider value={handleQueuedCallback.useMemo(() => ({ handleQueuedCallback }), items)}>{children.children}</redux.Provider>;
};
export const useAwaitAnimationCompletion = function useAwaitAnimationCompletion() {
  const context = importAllResult.useContext(closure_2);
  if (null == context) {
    let fn = (fn) => fn();
  } else {
    fn = context.handleQueuedCallback;
  }
  return fn;
};