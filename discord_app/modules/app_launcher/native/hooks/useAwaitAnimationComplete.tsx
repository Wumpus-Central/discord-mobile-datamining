// discord_app/modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx
import c from "../../../../../_runtime/00576_c.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AwaitAnimationContext(arg0) {
      const cResult = c.c(5);
      ({ children, handleQueuedCallback } = arg0);
      if (cResult[0] !== handleQueuedCallback) {
        const obj2 = { handleQueuedCallback };
        cResult[0] = handleQueuedCallback;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      if (cResult[2] === children) {
        if (cResult[3] === tmp2) {
          let tmp3 = cResult[4];
        }
        return tmp3;
      }
      const tmp4 = <redux.Provider value={tmp2}>{children}</redux.Provider>;
      cResult[2] = children;
      cResult[3] = tmp2;
      cResult[4] = tmp4;
      tmp3 = tmp4;
    }
  : function AwaitAnimationContext(children) {
      const handleQueuedCallback = children.handleQueuedCallback;
      const items = [handleQueuedCallback];
      return (
        <redux.Provider value={noop.useMemo(() => ({ handleQueuedCallback }), items)}>
          {children.children}
        </redux.Provider>
      );
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx");

export const AwaitAnimationContext = tmp2;
export const useAwaitAnimationCompletion = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAwaitAnimationCompletion() {
      const cResult = c.c(1);
      const context = noop.useContext(closure_4);
      if (null == context) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function t(fn) {
            return fn();
          };
          cResult[0] = fn;
          let first = fn;
        } else {
          first = cResult[0];
        }
      } else {
        return context.handleQueuedCallback;
      }
    }
  : function useAwaitAnimationCompletion() {
      const context = noop.useContext(closure_4);
      if (null == context) {
        let fn = (fn) => fn();
      } else {
        fn = context.handleQueuedCallback;
      }
      return fn;
    };
