// _runtime/05578_context.js
import noop from "00019_noop.js";

const context = noop.createContext(null);

export const BottomSheetContext = context;
export const BottomSheetProvider = context.Provider;