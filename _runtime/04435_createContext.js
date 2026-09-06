// _runtime/04435_createContext.js
import noop from "00019_noop.js";

const createContext = noop.createContext;
const context = createContext(null);

export const PortalStateContext = context;
export const PortalDispatchContext = createContext(null);
