// discord_app/utils/ContextUtils.tsx
import closure_0 from "../../_runtime/00019_noop.js";
import { jsx } from "../../_runtime/react/00021_jsxProd.js";

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