// discord_app/intl/messages/international.messages.js
import 01274__ from "../../../_runtime/metro/01274__.js";
import 01274__ from "../../../_runtime/metro/01274__.js";

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = require("../../modules/asset_json/native/AssetJsonUtils.tsx") /* loadJsonAsset */.loadJsonAsset(require("../../../_runtime/13357_registerAsset.js") /* registerAsset */);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = require("module_1274").fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;