// === Module 9349: set ===

// Module 9349 (set)
import set from "set" /* 2 */;

const obj = { ALL: null };
let set = new Set(["https://discord.com/connections/playstation-stg/link", "https://discord.com/connections/playstation/link"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleAuthorizationRedirectURIs.tsx");

export const ConsoleAuthorizationRedirectURIs = { PLAYSTATION: "https://discord.com/connections/playstation/link", PLAYSTATION_STAGING: "https://discord.com/connections/playstation-stg/link" };
export const ConsoleAuthorizationRedirectURIsSets = obj;