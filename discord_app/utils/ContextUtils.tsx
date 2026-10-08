// discord_app/utils/ContextUtils.tsx
import noop from "../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("utils/ContextUtils.tsx");

export default function createDefinedContext() {
  let context = noop.createContext(undefined);
  const tmp4 = context(558).isReactCompilerEnabled()
    ? function useContext() {
        context = noop.useContext(context);
        if (null == context) {
          const _Error = Error;
          const error = new Error("Context was used outside of defined provider.");
          throw error;
        } else {
          return context;
        }
      }
    : function useContext() {
        context = noop.useContext(context);
        if (null == context) {
          const _Error = Error;
          const error = new Error("Context was used outside of defined provider.");
          throw error;
        } else {
          return context;
        }
      };
  dependencyMap = tmp4;
  const obj = context(558);
  const items = [
    context,
    tmp4,
    context(558).isReactCompilerEnabled()
      ? function useForwardedContext() {
          const cResult = context(576).c(2);
          const tmp2 = dependencyMap();
          value = tmp2;
          if (cResult[0] !== tmp2) {
            class ForwardedContext {
              constructor(arg0) {
                obj = { value: closure_0, children: arg0.children };
                return jsx(closure_0.Provider, obj);
              }
            }
            cResult[0] = tmp2;
            cResult[1] = ForwardedContext;
          } else {
            class ForwardedContext {
              constructor(arg0) {
                obj = { value: closure_0, children: arg0.children };
                return jsx(closure_0.Provider, obj);
              }
            }
          }
          return ForwardedContext;
        }
      : function useForwardedContext() {
          value = dependencyMap();
          return function ForwardedContext(children) {
            return <context.Provider value={value}>{children.children}</context.Provider>;
          };
        },
  ];
  return items;
}
