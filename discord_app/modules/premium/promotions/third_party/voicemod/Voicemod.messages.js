// === Module 4518: ? ===

// Module 4518
import AssetJsonUtils from "AssetJsonUtils" /* 1117 */;
import _mod4519 from "module_4519" /* 4519 */;
import module_1152_mod from "module_1152" /* 1152 */;
import size from "module_2" /* 2 */;

let module_1152 = module_1152_mod;
const loader = module_1152.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod4519);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1152 = module_1152_mod;
const messagesProxy = module_1152.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/premium/promotions/third_party/voicemod/Voicemod.messages.js");

export default messagesProxy;
export const messagesLoader = loader;