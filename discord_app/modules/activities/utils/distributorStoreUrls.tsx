// discord_app/modules/activities/utils/distributorStoreUrls.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const discord7937464 = "discord7937464";
let c1 = "www.xbox.com";
const msxbox = "msxbox";
const result = obj132.fileFinishedImporting("modules/activities/utils/distributorStoreUrls.tsx");

export const XBOX_DISCORD_OCID = "discord7937464";
export const XBOX_GAME_PASS_STORE_HOSTNAME = "www.xbox.com";
export const XBOX_GAME_PASS_PROTOCOL = "msxbox";
export const buildXboxGamePassStoreUrl = function buildXboxGamePassStoreUrl(id) {
  return "https://" + c1 + "/games/store/title/" + encodeURIComponent(id) + "?ocid=" + discord7937464;
};
export const buildXboxGamePassStoreDeepLinkUrl = function buildXboxGamePassStoreDeepLinkUrl(arg0) {
  return "" + msxbox + "://game/?productid=" + encodeURIComponent(arg0) + "&ocid=" + discord7937464;
};