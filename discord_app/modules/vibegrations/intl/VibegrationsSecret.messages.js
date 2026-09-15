// === Module 3593: ? ===

// Module 3593
import AssetJsonUtils from "AssetJsonUtils" /* 1119 */;
import _mod3594 from "module_3594" /* 3594 */;
import module_1154_mod from "module_1154" /* 1154 */;
import size from "module_2" /* 2 */;

let module_1154 = module_1154_mod;
const loader = module_1154.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3594);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1154 = module_1154_mod;
const messagesProxy = module_1154.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/vibegrations/intl/VibegrationsSecret.messages.js");

export default messagesProxy;
export const messagesLoader = loader;