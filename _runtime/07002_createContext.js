// _runtime/07002_createContext.js
import noop from "00019_noop.js";

const createContext = noop.createContext;
const context = createContext(null);

export const BottomSheetGestureHandlersContext = context;
export const BottomSheetDraggableContext = createContext(null);