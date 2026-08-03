// === Module 9225: context ===

// Module 9225 (context)
import importAllResult from "noop";

const context = require("noop").createContext(() => {

});
const result = require("set").fileFinishedImporting("modules/auth/native/components/WideAuthScrollContext.tsx");

export const WideAuthScrollContext = context;