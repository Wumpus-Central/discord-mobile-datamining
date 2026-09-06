// discord_app/modules/vibegrations/intl/VibegrationsUntranslated.messages.js
import AssetJsonUtils from "../../asset_json/native/AssetJsonUtils.tsx";
import _mod3548 from "../../../../_runtime/metro/03548__.js";
import 01155__ from "../../../../_runtime/metro/01155__.js";
import size from "../../../../_runtime/metro/00002__.js";

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3548);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/vibegrations/intl/VibegrationsUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;