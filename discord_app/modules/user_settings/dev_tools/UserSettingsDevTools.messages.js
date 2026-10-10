// === Module 2206: ? ===

// Module 2206
import AssetJsonUtils from "AssetJsonUtils" /* 1130 */;
import _mod2207 from "module_2207" /* 2207 */;
import module_1165_mod from "module_1165" /* 1165 */;
import size from "module_2" /* 2 */;

let module_1165 = module_1165_mod;
const loader = module_1165.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2207);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1165 = module_1165_mod;
const messagesProxy = module_1165.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/UserSettingsDevTools.messages.js");

export default messagesProxy;
export const messagesLoader = loader;