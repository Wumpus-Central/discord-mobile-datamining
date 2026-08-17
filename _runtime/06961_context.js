// _runtime/06961_context.js
import noop from "noop" /* 19 */;

const context = noop.createContext(null);

export const BottomSheetInternalContext = context;
export const BottomSheetInternalProvider = context.Provider;