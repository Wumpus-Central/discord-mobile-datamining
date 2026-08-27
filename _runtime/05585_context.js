// _runtime/05585_context.js
import noop from "00019_noop.js";

const context = noop.createContext(null);

export const BottomSheetInternalContext = context;
export const BottomSheetInternalProvider = context.Provider;