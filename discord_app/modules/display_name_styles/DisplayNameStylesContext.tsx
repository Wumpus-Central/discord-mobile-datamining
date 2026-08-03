// === Module 4487: context ===

// Module 4487 (context)
const context = require("noop").createContext({ overrideSettings: false });
const result = require("set").fileFinishedImporting("modules/display_name_styles/DisplayNameStylesContext.tsx");

export const DisplayNameStylesContext = context;