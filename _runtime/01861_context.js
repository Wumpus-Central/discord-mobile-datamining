// === Module 1861: context ===

// Module 1861 (context)
import noop from "noop" /* 19 */;

const useContext = noop.useContext;
const context = noop.createContext(undefined);

export const ToolbarContext = context;
export const useToolbarContext = () => {
  const tmp = useContext(context);
  if (tmp) {
    return tmp;
  } else {
    const _Error = Error;
    error = new Error("KeyboardToolbar.* component must be used inside <KeyboardToolbar>");
    throw error;
  }
};