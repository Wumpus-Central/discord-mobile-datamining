// discord_app/modules/user_settings/connected_apps/ConnectedApps.messages.js
import AssetJsonUtils from "../../asset_json/native/AssetJsonUtils.tsx";
import _mod4288 from "../../../../_runtime/metro/04288__.js";
import module_1152_mod from "../../../../_runtime/metro/01152__.js";
import size from "../../../../_runtime/metro/00002__.js";

let module_1152 = module_1152_mod;
const loader = module_1152.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod4288);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1152 = module_1152_mod;
const messagesProxy = module_1152.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/user_settings/connected_apps/ConnectedApps.messages.js");

export default messagesProxy;
export const messagesLoader = loader;