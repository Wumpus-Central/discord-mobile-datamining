// === Module 4248: ? ===

// Module 4248
import AssetJsonUtils from "AssetJsonUtils" /* 1129 */;
import _mod4249 from "module_4249" /* 4249 */;
import module_1164_mod from "module_1164" /* 1164 */;
import size from "module_2" /* 2 */;

let module_1164 = module_1164_mod;
const loader = module_1164.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod4249);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1164 = module_1164_mod;
const messagesProxy = module_1164.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaign.messages.js");

export default messagesProxy;
export const messagesLoader = loader;