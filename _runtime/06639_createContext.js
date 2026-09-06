// === Module 6639: createContext ===

// Module 6639 (createContext)
import noop from "noop" /* 19 */;

const createContext = noop.createContext;
const context = createContext(null);

export const BottomSheetGestureHandlersContext = context;
export const BottomSheetDraggableContext = createContext(null);