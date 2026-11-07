// === Module 4411: ? ===

// Module 4411
import AssetJsonUtils from "AssetJsonUtils" /* 1117 */;
import _mod4412 from "module_4412" /* 4412 */;
import module_1152_mod from "module_1152" /* 1152 */;
import size from "module_2" /* 2 */;

let module_1152 = module_1152_mod;
const loader = module_1152.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod4412);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1152 = module_1152_mod;
const messagesProxy = module_1152.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaign.messages.js");

export default messagesProxy;
export const messagesLoader = loader;