// discord_app/modules/guild_space/GuildSpaceUntranslated.messages.js
import AssetJsonUtils from "../asset_json/native/AssetJsonUtils.tsx";
import _mod2419 from "../../../_runtime/metro/02419__.js";
import module_1154_mod from "../../../_runtime/metro/01154__.js";
import size from "../../../_runtime/metro/00002__.js";

let module_1154 = module_1154_mod;
const loader = module_1154.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2419);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1154 = module_1154_mod;
const messagesProxy = module_1154.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/guild_space/GuildSpaceUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;