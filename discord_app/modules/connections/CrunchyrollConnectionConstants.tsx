// discord_app/modules/connections/CrunchyrollConnectionConstants.tsx
import OAuth2Scopes from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const items = [
  OAuth2Scopes.OAuth2Scopes.ACTIVITIES_WRITE,
  OAuth2Scopes.OAuth2Scopes.EMAIL,
  OAuth2Scopes.OAuth2Scopes.IDENTIFY,
];
const result = size.fileFinishedImporting("modules/connections/CrunchyrollConnectionConstants.tsx");

export const CRUNCHYROLL_LINK_DEST_ORIGIN = "https://crunchyroll.com";
export const CRUNCHYROLL_CLIENT_ID = "981509069309354054";
export const CRUNCHYROLL_CLIENT_SCOPES = items;
