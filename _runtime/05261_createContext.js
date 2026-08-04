// _runtime/05261_createContext.js
import { createContext } from "noop";

const context = createContext(null);

export const BottomSheetGestureHandlersContext = context;
export const BottomSheetDraggableContext = createContext(null);