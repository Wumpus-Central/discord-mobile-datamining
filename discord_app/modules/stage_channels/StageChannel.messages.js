// === Module 3957: ? ===

// Module 3957
import AssetJsonUtils from "AssetJsonUtils" /* 1130 */;
import _mod3958 from "module_3958" /* 3958 */;
import module_1165_mod from "module_1165" /* 1165 */;
import size from "module_2" /* 2 */;

let module_1165 = module_1165_mod;
const loader = module_1165.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3958);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1165 = module_1165_mod;
const messagesProxy = module_1165.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannel.messages.js");

export default messagesProxy;
export const messagesLoader = loader;