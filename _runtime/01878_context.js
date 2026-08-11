// _runtime/01878_context.js
import noop from "noop";

const useContext = noop.useContext;
const context = noop.createContext(undefined);

export const ToolbarContext = context;
export const useToolbarContext = () => {
  const tmp = useContext(context);
  if (tmp) {
    return tmp;
  } else {
    const _Error = Error;
    const error = new Error("KeyboardToolbar.* component must be used inside <KeyboardToolbar>");
    throw error;
  }
};