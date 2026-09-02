// === Module 1533: context ===

// Module 1533 (context)
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

let c0 = importAllResult;
const context = importAllResult.createContext(undefined);

export const SingleNavigatorContext = context;
export const EnsureSingleNavigator = function EnsureSingleNavigator(children) {
  importAllResult = undefined;
  importAllResult = importAllResult.useRef(undefined);
  return <context.Provider value={importAllResult.useMemo(() => ({
    register(current) {
      current = ref.current;
      if (undefined !== current) {
        if (current !== current) {
          const _Error = Error;
          error = new Error("Another navigator is already registered for this container. You likely have multiple navigators under a single \"NavigationContainer\" or \"Screen\". Make sure each navigator is under a separate \"Screen\" container. See https://reactnavigation.org/docs/nesting-navigators for a guide on nesting.");
          throw error;
        }
      }
      ref.current = current;
    },
    unregister(arg0) {
      if (arg0 === ref.current) {
        tmp.current = undefined;
      }
    }
  }), [])}>{arg0.children}</context.Provider>;
};