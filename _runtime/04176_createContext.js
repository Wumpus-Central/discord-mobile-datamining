// _runtime/04176_createContext.js
import { createContext } from "noop";

const context = createContext(null);

export const PortalStateContext = context;
export const PortalDispatchContext = createContext(null);