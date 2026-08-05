import { registerAsset } from "../../../_runtime/13355_registerAsset.js";
import { loadJsonAsset } from "../../modules/asset_json/native/AssetJsonUtils.tsx";
// discord_app/intl/messages/untranslated.messages.js
import 01274__ from "../../../_runtime/metro/01274__.js";
import 01274__ from "../../../_runtime/metro/01274__.js";

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = loadJsonAsset /* loadJsonAsset */.loadJsonAsset(registerAsset /* registerAsset */);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = require("module_1274").fileFinishedImporting("intl/messages/untranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;