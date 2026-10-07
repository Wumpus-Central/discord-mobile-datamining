// discord_app/modules/game_mode/GameMode.messages.js
import AssetJsonUtils from "../asset_json/native/AssetJsonUtils.tsx";
import _mod3916 from "../../../_runtime/metro/03916__.js";
import module_1165_mod from "../../../_runtime/metro/01165__.js";
import size from "../../../_runtime/metro/00002__.js";

let module_1165 = module_1165_mod;
const loader = module_1165.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3916);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1165 = module_1165_mod;
const messagesProxy = module_1165.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/game_mode/GameMode.messages.js");

export default messagesProxy;
export const messagesLoader = loader;