// discord_app/utils/ContextUtils.tsx
import noop from "../../_runtime/00019_noop.js";
import { jsx } from "../../_runtime/react/00021_jsxProd.js";

const result = require("obj132").fileFinishedImporting("utils/ContextUtils.tsx");

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
        return (children) => <context.Provider value={context}>{children.children}</context.Provider>;
      }
    }
  ];
  return items;
};