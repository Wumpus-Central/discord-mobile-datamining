// === Module 7035: createDefinedContext ===

// Module 7035 (createDefinedContext)
import closure_0 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const result = require("set").fileFinishedImporting("utils/ContextUtils.tsx");

export default function createDefinedContext() {
  context = context.createContext(undefined);
  const items = [
    context,
    function useContext(context) {
      context = context.useContext(context);
      if (null == context) {
        const _Error = Error;
        error = new Error("Context was used outside of defined provider.");
        throw error;
      } else {
        return context;
      }
    },
    () => {
      context = context.useContext(context);
      if (null == context) {
        const _Error = Error;
        error = new Error("Context was used outside of defined provider.");
        throw error;
      } else {
        return (children) => closure_2_1(context.Provider, { value: context, children: children.children });
      }
    }
  ];
  return items;
};