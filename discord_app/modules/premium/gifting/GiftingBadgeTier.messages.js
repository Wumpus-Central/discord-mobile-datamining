// discord_app/modules/premium/gifting/GiftingBadgeTier.messages.js
import set from "../../../../_runtime/00002_set.js";
import loadJsonAsset from "../../asset_json/native/AssetJsonUtils.tsx";
import registerAsset from "../../../../_runtime/02468_registerAsset.js";
import 01274__ from "../../../../_runtime/metro/01274__.js";

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = set.fileFinishedImporting("modules/premium/gifting/GiftingBadgeTier.messages.js");

export default messagesProxy;
export const messagesLoader = loader;