// discord_app/modules/quests/native/PlayableReward.messages.js
import AssetJsonUtils from "../../asset_json/native/AssetJsonUtils.tsx";
import _mod4727 from "../../../../_runtime/metro/04727__.js";
import module_1151_mod from "../../../../_runtime/metro/01151__.js";
import size from "../../../../_runtime/metro/00002__.js";

let module_1151 = module_1151_mod;
const loader = module_1151.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod4727);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1151 = module_1151_mod;
const messagesProxy = module_1151.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/quests/native/PlayableReward.messages.js");

export default messagesProxy;
export const messagesLoader = loader;