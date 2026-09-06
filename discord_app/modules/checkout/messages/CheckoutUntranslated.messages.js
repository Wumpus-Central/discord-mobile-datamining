// discord_app/modules/checkout/messages/CheckoutUntranslated.messages.js
import set from "../../../../_runtime/00002_set.js";
import loadJsonAsset from "../../asset_json/native/AssetJsonUtils.tsx";
import registerAsset from "../../../../_runtime/02167_registerAsset.js";
import 01155__ from "../../../../_runtime/metro/01155__.js";

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = set.fileFinishedImporting("modules/checkout/messages/CheckoutUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;