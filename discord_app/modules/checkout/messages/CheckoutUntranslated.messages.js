// discord_app/modules/checkout/messages/CheckoutUntranslated.messages.js
import AssetJsonUtils from "../../asset_json/native/AssetJsonUtils.tsx";
import _mod2294 from "../../../../_runtime/metro/02294__.js";
import module_1167_mod from "../../../../_runtime/metro/01167__.js";
import size from "../../../../_runtime/metro/00002__.js";

let module_1167 = module_1167_mod;
const loader = module_1167.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2294);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1167 = module_1167_mod;
const messagesProxy = module_1167.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/checkout/messages/CheckoutUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;