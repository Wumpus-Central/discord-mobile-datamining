// === Module 4414: ? ===

// Module 4414
import AssetJsonUtils from "AssetJsonUtils" /* 1117 */;
import _mod4415 from "module_4415" /* 4415 */;
import module_1152_mod from "module_1152" /* 1152 */;
import size from "module_2" /* 2 */;

let module_1152 = module_1152_mod;
const loader = module_1152.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod4415);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1152 = module_1152_mod;
const messagesProxy = module_1152.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/user_settings/connected_apps/ConnectedApps.messages.js");

export default messagesProxy;
export const messagesLoader = loader;