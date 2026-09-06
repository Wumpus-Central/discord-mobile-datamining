// === Module 1518: ? ===

// Module 1518
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const context = noop.createContext(undefined);

export const SingleNavigatorContext = context;
export const EnsureSingleNavigator = function EnsureSingleNavigator(children) {
  closure_0 = noop.useRef(undefined);
  return <context.Provider value={noop.useMemo(() => ({
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