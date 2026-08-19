// discord_app/modules/guild_space/GuildSpace.messages.js
import obj132 from "../../../_runtime/00002_obj132.js";
import loadJsonAsset from "../asset_json/native/AssetJsonUtils.tsx";
import registerAsset from "../../../_runtime/02270_registerAsset.js";
import 01274__ from "../../../_runtime/metro/01274__.js";

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = obj132.fileFinishedImporting("modules/guild_space/GuildSpace.messages.js");

export default messagesProxy;
export const messagesLoader = loader;