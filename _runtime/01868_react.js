// _runtime/01868_react.js
import react from "00019_react.js";

const useContext = react.useContext;
const context = react.createContext(undefined);

export const ToolbarContext = context;
export const useToolbarContext = function () {
  const tmp = useContext(context);
  if (tmp) {
    return tmp;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("KeyboardToolbar.* component must be used inside <KeyboardToolbar>");
    throw error;
  }
};
