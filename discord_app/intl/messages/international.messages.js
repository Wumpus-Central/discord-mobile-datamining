// === Module 15571: ? ===

// Module 15571
import AssetJsonUtils from "AssetJsonUtils" /* 1116 */;
import _mod15572 from "module_15572" /* 15572 */;
import module_1151_mod from "module_1151" /* 1151 */;
import size from "module_2" /* 2 */;

let module_1151 = module_1151_mod;
const loader = module_1151.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod15572);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1151 = module_1151_mod;
const messagesProxy = module_1151.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;