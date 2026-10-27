// === Module 2403: ? ===

// Module 2403
import AssetJsonUtils from "AssetJsonUtils" /* 1129 */;
import _mod2404 from "module_2404" /* 2404 */;
import module_1164_mod from "module_1164" /* 1164 */;
import size from "module_2" /* 2 */;

let module_1164 = module_1164_mod;
const loader = module_1164.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2404);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1164 = module_1164_mod;
const messagesProxy = module_1164.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInvitesUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;