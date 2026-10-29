// === Module 4281: ? ===

// Module 4281
import AssetJsonUtils from "AssetJsonUtils" /* 1129 */;
import _mod4282 from "module_4282" /* 4282 */;
import module_1164_mod from "module_1164" /* 1164 */;
import size from "module_2" /* 2 */;

let module_1164 = module_1164_mod;
const loader = module_1164.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod4282);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1164 = module_1164_mod;
const messagesProxy = module_1164.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaign.messages.js");

export default messagesProxy;
export const messagesLoader = loader;