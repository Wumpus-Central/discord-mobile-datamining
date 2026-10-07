// === Module 3525: ? ===

// Module 3525
import AssetJsonUtils from "AssetJsonUtils" /* 1130 */;
import _mod3526 from "module_3526" /* 3526 */;
import module_1165_mod from "module_1165" /* 1165 */;
import size from "module_2" /* 2 */;

let module_1165 = module_1165_mod;
const loader = module_1165.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3526);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1165 = module_1165_mod;
const messagesProxy = module_1165.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/premium/promotions/third_party/ThirdPartyPromotion.messages.js");

export default messagesProxy;
export const messagesLoader = loader;