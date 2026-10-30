// === Module 2140: ? ===

// Module 2140
import AssetJsonUtils from "AssetJsonUtils" /* 1118 */;
import _mod2141 from "module_2141" /* 2141 */;
import module_1153_mod from "module_1153" /* 1153 */;
import size from "module_2" /* 2 */;

let module_1153 = module_1153_mod;
const loader = module_1153.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2141);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1153 = module_1153_mod;
const messagesProxy = module_1153.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/AuthorizedApps.messages.js");

export default messagesProxy;
export const messagesLoader = loader;