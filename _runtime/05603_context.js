// _runtime/05603_context.js
import noop from "00019_noop.js";

const context = noop.createContext(null);

export const BottomSheetModalInternalContext = context;
export const BottomSheetModalInternalProvider = context.Provider;