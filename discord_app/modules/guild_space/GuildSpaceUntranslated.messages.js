// discord_app/modules/guild_space/GuildSpaceUntranslated.messages.js
import AssetJsonUtils from "../asset_json/native/AssetJsonUtils.tsx";
import AssetRegistry from "../../../_runtime/02428_AssetRegistry.js";
import module_1165_mod from "../../../_runtime/metro/01165__.js";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry);
    return jsonAsset.then((result) => ({ default: result }));
  },
};
let module_1165 = module_1165_mod;
const loader = module_1165.createLoader(obj, "en-US");
module_1165 = module_1165_mod;
const messagesProxy = module_1165.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/guild_space/GuildSpaceUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
