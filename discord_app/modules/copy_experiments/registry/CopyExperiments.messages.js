// === Module 2340: ? ===

// Module 2340
import AssetJsonUtils from "AssetJsonUtils" /* 1130 */;
import _mod2341 from "module_2341" /* 2341 */;
import module_1165_mod from "module_1165" /* 1165 */;
import size from "module_2" /* 2 */;

let module_1165 = module_1165_mod;
const loader = module_1165.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2341);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1165 = module_1165_mod;
const messagesProxy = module_1165.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/copy_experiments/registry/CopyExperiments.messages.js");

export default messagesProxy;
export const messagesLoader = loader;