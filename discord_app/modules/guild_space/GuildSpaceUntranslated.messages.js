// === Module 2416: ? ===

// Module 2416
import AssetJsonUtils from "AssetJsonUtils" /* 1119 */;
import _mod2417 from "module_2417" /* 2417 */;
import module_1154_mod from "module_1154" /* 1154 */;
import size from "module_2" /* 2 */;

let module_1154 = module_1154_mod;
const loader = module_1154.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2417);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1154 = module_1154_mod;
const messagesProxy = module_1154.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/guild_space/GuildSpaceUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;