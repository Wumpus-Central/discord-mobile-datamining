// discord_app/modules/premium/gifting/GiftingBadgeTier.messages.js
import AssetJsonUtils from "../../asset_json/native/AssetJsonUtils.tsx";
import _mod2635 from "../../../../_runtime/metro/02635__.js";
import module_1164_mod from "../../../../_runtime/metro/01164__.js";
import size from "../../../../_runtime/metro/00002__.js";

let module_1164 = module_1164_mod;
const loader = module_1164.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2635);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1164 = module_1164_mod;
const messagesProxy = module_1164.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/premium/gifting/GiftingBadgeTier.messages.js");

export default messagesProxy;
export const messagesLoader = loader;