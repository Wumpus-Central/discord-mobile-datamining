// === Module 6947: ContextUtils ===

// Module 6947 (ContextUtils)
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("utils/ContextUtils.tsx");

export default function createDefinedContext() {
  let context = noop.createContext(undefined);
  const tmp4 = context(558).isReactCompilerEnabled() ? (() => {
    context = noop.useContext(context);
    if (null == context) {
      const _Error = Error;
      const error = new Error("Context was used outside of defined provider.");
      throw error;
    } else {
      return context;
    }
  }) : (() => {
    context = noop.useContext(context);
    if (null == context) {
      const _Error = Error;
      const error = new Error("Context was used outside of defined provider.");
      throw error;
    } else {
      return context;
    }
  });
  dependencyMap = tmp4;
  const obj = context(558);
  const items = [
    context,
    tmp4,
    context(558).isReactCompilerEnabled() ? (() => {
      const cResult = context(576).c(2);
      const tmp2 = dependencyMap();
      value = tmp2;
      if (cResult[0] !== tmp2) {
        const fn = function n(children) {
          return <context.Provider value={value}>{children.children}</context.Provider>;
        };
        cResult[0] = tmp2;
        cResult[1] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }) : (() => {
      value = dependencyMap();
      return (children) => <context.Provider value={value}>{children.children}</context.Provider>;
    })
  ];
  return items;
};