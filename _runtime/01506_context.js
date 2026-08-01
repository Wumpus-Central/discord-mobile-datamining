// === Module 1506: context ===

// Module 1506 (context)
import importAllResult from "noop";
import { jsx } from "jsxProd";

let c0 = importAllResult;
const context = importAllResult.createContext(undefined);

export default function EnsureSingleNavigator(children) {
  let importAllResult;
  importAllResult = importAllResult.useRef();
  return <context.Provider value={importAllResult.useMemo(() => ({
    register(current) {
      current = ref.current;
      if (undefined !== current) {
        if (current !== current) {
          const _Error = Error;
          const error = new Error("Another navigator is already registered for this container. You likely have multiple navigators under a single \"NavigationContainer\" or \"Screen\". Make sure each navigator is under a separate \"Screen\" container. See https://reactnavigation.org/docs/nesting-navigators for a guide on nesting.");
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
export const SingleNavigatorContext = context;