// discord_app/modules/display_name_styles/DisplayNameStylesContext.tsx
import set from "../../../_runtime/00002_set.js";
import noop from "../../../_runtime/00019_noop.js";

const context = noop.createContext({ overrideSettings: false });
const result = set.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesContext.tsx");

export const DisplayNameStylesContext = context;
