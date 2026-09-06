// === Module 9262: ConsoleAuthorizationRedirectURIs ===

// Module 9262 (ConsoleAuthorizationRedirectURIs)
import size from "module_2" /* 2 */;

const obj = { ALL: new Set(["https://discord.com/connections/playstation-stg/link", "https://discord.com/connections/playstation/link"]) };
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleAuthorizationRedirectURIs.tsx");

export const ConsoleAuthorizationRedirectURIs = { PLAYSTATION: "https://discord.com/connections/playstation/link", PLAYSTATION_STAGING: "https://discord.com/connections/playstation-stg/link" };
export const ConsoleAuthorizationRedirectURIsSets = obj;