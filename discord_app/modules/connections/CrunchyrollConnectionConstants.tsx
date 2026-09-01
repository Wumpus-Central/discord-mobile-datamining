// discord_app/modules/connections/CrunchyrollConnectionConstants.tsx
import set from "../../../_runtime/00002_set.js";
import set2 from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";

const items = [set2.OAuth2Scopes.ACTIVITIES_WRITE, set2.OAuth2Scopes.EMAIL, set2.OAuth2Scopes.IDENTIFY];
const result = set.fileFinishedImporting("modules/connections/CrunchyrollConnectionConstants.tsx");

export const CRUNCHYROLL_LINK_DEST_ORIGIN = "https://crunchyroll.com";
export const CRUNCHYROLL_CLIENT_ID = "981509069309354054";
export const CRUNCHYROLL_CLIENT_SCOPES = items;
