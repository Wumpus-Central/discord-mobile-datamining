// === Module 6947: ContextUtils ===

// Module 6947 (ContextUtils)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("utils/ContextUtils.tsx");

export default function createDefinedContext() {
  let closure_1;
  let context = react.createContext(undefined);
  let tmp2 = context;
  let tmp3 = dependencyMap;
  let obj = context(558);
  const tmp4 = obj.isReactCompilerEnabled() ? (function() {
    context = react.useContext(context);
    if (null == context) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Context was used outside of defined provider.");
      throw error;
    } else {
      return context;
    }
  }) : (function() {
    context = react.useContext(context);
    if (null == context) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Context was used outside of defined provider.");
      throw error;
    } else {
      return context;
    }
  });
  dependencyMap = tmp4;
  const items = [context, tmp4, ];
  const tmp2Result = tmp2(558);
  items[2] = tmp2Result.isReactCompilerEnabled() ? (() => {
    let tmp3;
    const obj = context(closure_1[3]);
    const cResult = obj.c(2);
    const tmp2 = closure_1();
    const value = tmp2;
    if (cResult[0] !== tmp2) {
      const fn = function n(children) {
        return <context.Provider value={value}>{children.children}</context.Provider>;
      };
      cResult[0] = tmp2;
      cResult[1] = fn;
      tmp3 = fn;
    } else {
      tmp3 = cResult[1];
    }
    return tmp3;
  }) : (() => {
    const value = closure_1();
    return (children) => <context.Provider value={value}>{children.children}</context.Provider>;
  });
  return items;
};