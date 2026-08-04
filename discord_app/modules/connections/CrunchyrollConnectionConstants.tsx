// discord_app/modules/connections/CrunchyrollConnectionConstants.tsx
const items = [require("set").OAuth2Scopes.ACTIVITIES_WRITE, require("set").OAuth2Scopes.EMAIL, require("set").OAuth2Scopes.IDENTIFY];
const result = require("set").fileFinishedImporting("modules/connections/CrunchyrollConnectionConstants.tsx");

export const CRUNCHYROLL_LINK_DEST_ORIGIN = "https://crunchyroll.com";
export const CRUNCHYROLL_CLIENT_ID = "981509069309354054";
export const CRUNCHYROLL_CLIENT_SCOPES = items;