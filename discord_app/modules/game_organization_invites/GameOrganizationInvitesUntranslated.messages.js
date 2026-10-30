// discord_app/modules/game_organization_invites/GameOrganizationInvitesUntranslated.messages.js
import AssetJsonUtils from "../asset_json/native/AssetJsonUtils.tsx";
import _mod2406 from "../../../_runtime/metro/02406__.js";
import module_1153_mod from "../../../_runtime/metro/01153__.js";
import size from "../../../_runtime/metro/00002__.js";

let module_1153 = module_1153_mod;
const loader = module_1153.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2406);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1153 = module_1153_mod;
const messagesProxy = module_1153.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInvitesUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;