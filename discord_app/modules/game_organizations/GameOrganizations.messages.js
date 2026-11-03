// === Module 2535: ? ===

// Module 2535
import AssetJsonUtils from "AssetJsonUtils" /* 1117 */;
import _mod2536 from "module_2536" /* 2536 */;
import module_1152_mod from "module_1152" /* 1152 */;
import size from "module_2" /* 2 */;

let module_1152 = module_1152_mod;
const loader = module_1152.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2536);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1152 = module_1152_mod;
const messagesProxy = module_1152.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/game_organizations/GameOrganizations.messages.js");

export default messagesProxy;
export const messagesLoader = loader;