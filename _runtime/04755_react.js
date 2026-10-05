// _runtime/04755_react.js
import react from "00019_react.js";

const createContext = react.createContext;
const context = createContext(null);

export const PortalStateContext = context;
export const PortalDispatchContext = createContext(null);
