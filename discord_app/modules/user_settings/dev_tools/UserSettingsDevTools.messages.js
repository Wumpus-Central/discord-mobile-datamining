// === Module 2209: ? ===

// Module 2209
import AssetJsonUtils from "AssetJsonUtils" /* 1132 */;
import _mod2210 from "module_2210" /* 2210 */;
import module_1167_mod from "module_1167" /* 1167 */;
import size from "module_2" /* 2 */;

let module_1167 = module_1167_mod;
const loader = module_1167.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2210);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1167 = module_1167_mod;
const messagesProxy = module_1167.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/UserSettingsDevTools.messages.js");

export default messagesProxy;
export const messagesLoader = loader;