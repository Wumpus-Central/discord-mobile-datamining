// === Module 14265: ? ===

// Module 14265
import AssetJsonUtils from "AssetJsonUtils" /* 1120 */;
import _mod14266 from "module_14266" /* 14266 */;
import module_1155 from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod14266);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;