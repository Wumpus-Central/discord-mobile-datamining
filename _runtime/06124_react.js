// _runtime/06124_react.js
import react from "00019_react.js";

const createContext = react.createContext;
const context = createContext(null);

export const BottomSheetGestureHandlersContext = context;
export const BottomSheetDraggableContext = createContext(null);
