// discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx
import noop from "../../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const obj = {};
const context = noop.createContext(obj);
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx",
);

export const ManaContext = context;
export const useManaContext = () => noop.useContext(context);
export const ManaContextProvider = function ManaContextProvider(children) {
  value = children.value;
  if (value == null) {
    value = obj;
  }
  return <context.Provider value={value}>{children.children}</context.Provider>;
};
