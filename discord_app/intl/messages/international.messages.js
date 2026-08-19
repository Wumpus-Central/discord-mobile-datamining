// === Module 13552: messagesProxy ===

// Module 13552 (messagesProxy)
import obj132 from "obj132" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1239 */;
import registerAsset from "registerAsset" /* 13553 */;
import module_1274 from "module_1274" /* 1274 */;

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = obj132.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;