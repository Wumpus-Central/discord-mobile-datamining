// === Module 3865: ? ===

// Module 3865
import AssetJsonUtils from "AssetJsonUtils" /* 1118 */;
import _mod3866 from "module_3866" /* 3866 */;
import module_1153_mod from "module_1153" /* 1153 */;
import size from "module_2" /* 2 */;

let module_1153 = module_1153_mod;
const loader = module_1153.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3866);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1153 = module_1153_mod;
const messagesProxy = module_1153.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/conjure/intl/ConjureUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;