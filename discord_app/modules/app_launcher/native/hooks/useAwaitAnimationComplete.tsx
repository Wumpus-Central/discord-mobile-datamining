// === Module 12162: useAwaitAnimationComplete ===

// Module 12162 (useAwaitAnimationComplete)
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx");

export const AwaitAnimationContext = function AwaitAnimationContext(children) {
  const handleQueuedCallback = children.handleQueuedCallback;
  const items = [handleQueuedCallback];
  return <redux.Provider value={noop.useMemo(() => ({ handleQueuedCallback }), items)}>{children.children}</redux.Provider>;
};
export const useAwaitAnimationCompletion = function useAwaitAnimationCompletion() {
  const context = noop.useContext(closure_2);
  if (null == context) {
    let fn = (fn) => fn();
  } else {
    fn = context.handleQueuedCallback;
  }
  return fn;
};