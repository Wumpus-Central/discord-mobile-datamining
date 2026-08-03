// === Module 4129: createContext ===

// Module 4129 (createContext)
import { createContext } from "noop";

const context = createContext(null);

export const PortalStateContext = context;
export const PortalDispatchContext = createContext(null);