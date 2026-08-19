// === Module 9789: set ===

// Module 9789 (set)
import obj132 from "obj132" /* 2 */;

const obj = { ALL: new Set(["https://discord.com/connections/playstation-stg/link", "https://discord.com/connections/playstation/link"]) };
const set = new Set(["https://discord.com/connections/playstation-stg/link", "https://discord.com/connections/playstation/link"]);
const result = obj132.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleAuthorizationRedirectURIs.tsx");

export const ConsoleAuthorizationRedirectURIs = { PLAYSTATION: "https://discord.com/connections/playstation/link", PLAYSTATION_STAGING: "https://discord.com/connections/playstation-stg/link" };
export const ConsoleAuthorizationRedirectURIsSets = obj;