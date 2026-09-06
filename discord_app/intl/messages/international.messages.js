// discord_app/intl/messages/international.messages.js
import AssetJsonUtils from "../../modules/asset_json/native/AssetJsonUtils.tsx";
import _mod14189 from "../../../_runtime/metro/14189__.js";
import 01155__ from "../../../_runtime/metro/01155__.js";
import size from "../../../_runtime/metro/00002__.js";

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod14189);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;