// === Module 4252: createContext ===

// Module 4252 (createContext)
import noop from "noop" /* 19 */;

const createContext = noop.createContext;
const context = createContext(null);

export const PortalStateContext = context;
export const PortalDispatchContext = createContext(null);