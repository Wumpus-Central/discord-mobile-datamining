// === Module 3877: ? ===

// Module 3877
import AssetJsonUtils from "AssetJsonUtils" /* 1119 */;
import _mod3878 from "module_3878" /* 3878 */;
import module_1154_mod from "module_1154" /* 1154 */;
import size from "module_2" /* 2 */;

let module_1154 = module_1154_mod;
const loader = module_1154.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3878);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1154 = module_1154_mod;
const messagesProxy = module_1154.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/game_mode/GameMode.messages.js");

export default messagesProxy;
export const messagesLoader = loader;