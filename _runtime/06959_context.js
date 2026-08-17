// _runtime/06959_context.js
import noop from "noop" /* 19 */;

const context = noop.createContext(null);

export const BottomSheetContext = context;
export const BottomSheetProvider = context.Provider;