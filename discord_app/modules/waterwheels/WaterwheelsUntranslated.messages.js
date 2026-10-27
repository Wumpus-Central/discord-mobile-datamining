// === Module 2405: ? ===

// Module 2405
import AssetJsonUtils from "AssetJsonUtils" /* 1129 */;
import _mod2406 from "module_2406" /* 2406 */;
import module_1164_mod from "module_1164" /* 1164 */;
import size from "module_2" /* 2 */;

let module_1164 = module_1164_mod;
const loader = module_1164.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2406);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1164 = module_1164_mod;
const messagesProxy = module_1164.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/waterwheels/WaterwheelsUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;