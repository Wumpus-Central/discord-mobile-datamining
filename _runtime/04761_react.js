// === Module 4761: react ===

// Module 4761 (react)
import react from "react" /* 19 */;

const createContext = react.createContext;
const context = createContext(null);

export const PortalStateContext = context;
export const PortalDispatchContext = createContext(null);