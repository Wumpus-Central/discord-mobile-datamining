// === Module 3524: ? ===

// Module 3524
import AssetJsonUtils from "AssetJsonUtils" /* 1120 */;
import _mod3525 from "module_3525" /* 3525 */;
import module_1155 from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3525);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudio.messages.js");

export default messagesProxy;
export const messagesLoader = loader;