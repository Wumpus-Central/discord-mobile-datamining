// _runtime/05411_createContext.js
import { createContext } from "noop";

const context = createContext(null);

export const BottomSheetGestureHandlersContext = context;
export const BottomSheetDraggableContext = createContext(null);