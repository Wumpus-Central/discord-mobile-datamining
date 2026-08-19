// === Module 2435: messagesProxy ===

// Module 2435 (messagesProxy)
import obj132 from "obj132" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1239 */;
import registerAsset from "registerAsset" /* 2436 */;
import module_1274 from "module_1274" /* 1274 */;

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = obj132.fileFinishedImporting("modules/report_to_mod/ReportToMod.messages.js");

export default messagesProxy;
export const messagesLoader = loader;