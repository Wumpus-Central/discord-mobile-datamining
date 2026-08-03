// === Module 9398: context ===

// Module 9398 (context)
import importAllResult from "noop";

const context = require("noop").createContext(() => {

});
const result = require("set").fileFinishedImporting("modules/auth/native/components/WideAuthScrollContext.tsx");

export const WideAuthScrollContext = context;