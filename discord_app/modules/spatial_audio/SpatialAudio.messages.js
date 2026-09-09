// === Module 3494: ? ===

// Module 3494
import AssetJsonUtils from "AssetJsonUtils" /* 1120 */;
import _mod3495 from "module_3495" /* 3495 */;
import module_1155 from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3495);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudio.messages.js");

export default messagesProxy;
export const messagesLoader = loader;