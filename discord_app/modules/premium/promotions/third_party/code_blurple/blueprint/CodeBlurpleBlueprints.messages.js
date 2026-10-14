// === Module 4194: ? ===

// Module 4194
import AssetJsonUtils from "AssetJsonUtils" /* 1130 */;
import _mod4195 from "module_4195" /* 4195 */;
import module_1165_mod from "module_1165" /* 1165 */;
import size from "module_2" /* 2 */;

let module_1165 = module_1165_mod;
const loader = module_1165.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod4195);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1165 = module_1165_mod;
const messagesProxy = module_1165.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/premium/promotions/third_party/code_blurple/blueprint/CodeBlurpleBlueprints.messages.js");

export default messagesProxy;
export const messagesLoader = loader;