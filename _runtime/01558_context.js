// _runtime/01558_context.js
const context = require("noop").createContext({ options: "r" });
context.displayName = "LinkingContext";

export default context;