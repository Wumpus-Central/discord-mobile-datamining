// === Module 3688: ? ===

// Module 3688
import AssetJsonUtils from "AssetJsonUtils" /* 1120 */;
import _mod3689 from "module_3689" /* 3689 */;
import module_1155 from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3689);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/voice_channel_apps/VoiceChannelApps.messages.js");

export default messagesProxy;
export const messagesLoader = loader;