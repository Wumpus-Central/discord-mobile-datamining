// _runtime/05589_context.js
import noop from "00019_noop.js";

const context = noop.createContext(null);

export const BottomSheetModalContext = context;
export const BottomSheetModalProvider = context.Provider;