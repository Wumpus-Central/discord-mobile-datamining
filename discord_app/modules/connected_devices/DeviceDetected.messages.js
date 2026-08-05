// discord_app/modules/connected_devices/DeviceDetected.messages.js
import 01274__ from "../../../_runtime/metro/01274__.js";
import 01274__ from "../../../_runtime/metro/01274__.js";
import { registerAsset } from "../../../_runtime/03328_registerAsset.js";
import { loadJsonAsset } from "../asset_json/native/AssetJsonUtils.tsx";

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = require("module_1274").fileFinishedImporting("modules/connected_devices/DeviceDetected.messages.js");

export default messagesProxy;
export const messagesLoader = loader;