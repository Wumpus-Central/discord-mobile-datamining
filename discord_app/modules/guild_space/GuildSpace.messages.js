// === Module 2269: messagesProxy ===

// Module 2269 (messagesProxy)
import obj132 from "obj132" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1239 */;
import registerAsset from "registerAsset" /* 2270 */;
import module_1274 from "module_1274" /* 1274 */;

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = obj132.fileFinishedImporting("modules/guild_space/GuildSpace.messages.js");

export default messagesProxy;
export const messagesLoader = loader;