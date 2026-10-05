// _runtime/metro/01525__.js
import Fragment from "../react/00021_Fragment.js";
import react from "../00019_react.js";

const jsx = Fragment.jsx;
const context = react.createContext(undefined);

export const SingleNavigatorContext = context;
export const EnsureSingleNavigator = function EnsureSingleNavigator(children) {
  children = children.children;
  let closure_0 = react.useRef(undefined);
  return (
    <context.Provider
      value={react.useMemo(() => {
        let ref;
        return {
          register(current) {
            current = ref.current;
            if (undefined !== current) {
              if (current !== current) {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error(
                  'Another navigator is already registered for this container. You likely have multiple navigators under a single "NavigationContainer" or "Screen". Make sure each navigator is under a separate "Screen" container. See https://reactnavigation.org/docs/nesting-navigators for a guide on nesting.',
                );
                throw error;
              }
            }
            ref.current = current;
          },
          unregister(arg0) {
            if (arg0 === ref.current) {
              tmp.current = undefined;
            }
          },
        };
      }, [])}
    >
      {children}
    </context.Provider>
  );
};
