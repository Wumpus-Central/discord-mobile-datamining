// discord_app/modules/display_name_styles/DisplayNameStylesContext.tsx
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

const context = noop.createContext({ overrideSettings: false });
const result = set.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesContext.tsx");

export const DisplayNameStylesContext = context;