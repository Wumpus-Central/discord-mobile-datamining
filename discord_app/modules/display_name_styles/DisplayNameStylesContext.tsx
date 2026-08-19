// === Module 4817: context ===

// Module 4817 (context)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;

const context = noop.createContext({ overrideSettings: false });
const result = obj132.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesContext.tsx");

export const DisplayNameStylesContext = context;