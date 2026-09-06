// discord_app/modules/guild_space/GuildSpace.messages.js
import AssetJsonUtils from "../asset_json/native/AssetJsonUtils.tsx";
import _mod2331 from "../../../_runtime/metro/02331__.js";
import 01155__ from "../../../_runtime/metro/01155__.js";
import size from "../../../_runtime/metro/00002__.js";

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod2331);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/guild_space/GuildSpace.messages.js");

export default messagesProxy;
export const messagesLoader = loader;