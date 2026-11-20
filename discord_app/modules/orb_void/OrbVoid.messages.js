// === Module 2357: ? ===

// Module 2357
import AssetJsonUtils from "AssetJsonUtils" /* 1116 */;
import _mod2358 from "module_2358" /* 2358 */;
import module_1151_mod from "module_1151" /* 1151 */;
import size from "module_2" /* 2 */;

let module_1151 = module_1151_mod;
const loader = module_1151.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2358);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1151 = module_1151_mod;
const messagesProxy = module_1151.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/orb_void/OrbVoid.messages.js");

export default messagesProxy;
export const messagesLoader = loader;