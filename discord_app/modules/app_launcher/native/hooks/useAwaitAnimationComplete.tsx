// discord_app/modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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