// discord_app/intl/messages/untranslated.messages.js
import set from "../../../_runtime/00002_set.js";
import loadJsonAsset from "../../modules/asset_json/native/AssetJsonUtils.tsx";
import registerAsset from "../../../_runtime/14053_registerAsset.js";
import 01273__ from "../../../_runtime/metro/01273__.js";

const loader = module_1273.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1273.makeMessagesProxy(loader);
const result = set.fileFinishedImporting("intl/messages/untranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;