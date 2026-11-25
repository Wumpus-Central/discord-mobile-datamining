// discord_app/intl/messages/untranslated.messages.js
import AssetJsonUtils from "../../modules/asset_json/native/AssetJsonUtils.tsx";
import _mod15570 from "../../../_runtime/metro/15570__.js";
import module_1151_mod from "../../../_runtime/metro/01151__.js";
import size from "../../../_runtime/metro/00002__.js";

let module_1151 = module_1151_mod;
const loader = module_1151.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod15570);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1151 = module_1151_mod;
const messagesProxy = module_1151.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/untranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;