// === Module 14460: ? ===

// Module 14460
import AssetJsonUtils from "AssetJsonUtils" /* 1119 */;
import _mod14461 from "module_14461" /* 14461 */;
import module_1154_mod from "module_1154" /* 1154 */;
import size from "module_2" /* 2 */;

let module_1154 = module_1154_mod;
const loader = module_1154.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod14461);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1154 = module_1154_mod;
const messagesProxy = module_1154.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/untranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;