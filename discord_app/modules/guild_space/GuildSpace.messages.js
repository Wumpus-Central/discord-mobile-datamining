// === Module 2330: ? ===

// Module 2330
import AssetJsonUtils from "AssetJsonUtils" /* 1120 */;
import _mod2331 from "module_2331" /* 2331 */;
import module_1155 from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2331);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/guild_space/GuildSpace.messages.js");

export default messagesProxy;
export const messagesLoader = loader;