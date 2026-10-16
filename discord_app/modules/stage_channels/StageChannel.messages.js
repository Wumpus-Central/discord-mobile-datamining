// === Module 3995: ? ===

// Module 3995
import AssetJsonUtils from "AssetJsonUtils" /* 1132 */;
import _mod3996 from "module_3996" /* 3996 */;
import module_1167_mod from "module_1167" /* 1167 */;
import size from "module_2" /* 2 */;

let module_1167 = module_1167_mod;
const loader = module_1167.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3996);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1167 = module_1167_mod;
const messagesProxy = module_1167.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannel.messages.js");

export default messagesProxy;
export const messagesLoader = loader;