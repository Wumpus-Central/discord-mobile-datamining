// discord_app/utils/ContextUtils.tsx
import noop from "../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("utils/ContextUtils.tsx");

export default function createDefinedContext() {
  context = context.createContext(undefined);
  const items = [
    context,
    function useContext() {
      context = noop.useContext(context);
      if (null == context) {
        const _Error = Error;
        const error = new Error("Context was used outside of defined provider.");
        throw error;
      } else {
        return context;
      }
    },
    () => {
      context = context.useContext(context);
      if (null == context) {
        const _Error = Error;
        const error = new Error("Context was used outside of defined provider.");
        throw error;
      } else {
        return (children) => <context.Provider value={context}>{children.children}</context.Provider>;
      }
    },
  ];
  return items;
}
