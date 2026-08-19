// === Module 2105: messagesProxy ===

// Module 2105 (messagesProxy)
import obj132 from "obj132" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1239 */;
import registerAsset from "registerAsset" /* 2106 */;
import module_1274 from "module_1274" /* 1274 */;

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = obj132.fileFinishedImporting("modules/checkout/messages/CheckoutUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;