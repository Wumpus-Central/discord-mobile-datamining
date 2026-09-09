// discord_app/modules/premium/youtube_3pp/Youtube3PP.messages.js
import AssetJsonUtils from "../../asset_json/native/AssetJsonUtils.tsx";
import _mod3333 from "../../../../_runtime/metro/03333__.js";
import 01155__ from "../../../../_runtime/metro/01155__.js";
import size from "../../../../_runtime/metro/00002__.js";

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3333);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/premium/youtube_3pp/Youtube3PP.messages.js");

export default messagesProxy;
export const messagesLoader = loader;