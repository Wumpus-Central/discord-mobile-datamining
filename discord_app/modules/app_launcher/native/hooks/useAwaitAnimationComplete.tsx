// discord_app/modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx");

export const AwaitAnimationContext = function AwaitAnimationContext(children) {
  const handleQueuedCallback = children.handleQueuedCallback;
  const items = [handleQueuedCallback];
  return <redux.Provider value={noop.useMemo(() => ({ handleQueuedCallback }), items)}>{arg0.children}</redux.Provider>;
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
