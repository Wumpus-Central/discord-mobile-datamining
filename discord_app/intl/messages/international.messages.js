// discord_app/intl/messages/international.messages.js
import AssetJsonUtils from "../../modules/asset_json/native/AssetJsonUtils.tsx";
import _mod16015 from "../../../_runtime/metro/16015__.js";
import module_1152_mod from "../../../_runtime/metro/01152__.js";
import size from "../../../_runtime/metro/00002__.js";

let module_1152 = module_1152_mod;
const loader = module_1152.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod16015);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1152 = module_1152_mod;
const messagesProxy = module_1152.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;