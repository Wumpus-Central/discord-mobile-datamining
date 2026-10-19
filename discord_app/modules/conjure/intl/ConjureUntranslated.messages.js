// discord_app/modules/conjure/intl/ConjureUntranslated.messages.js
import AssetJsonUtils from "../../asset_json/native/AssetJsonUtils.tsx";
import _mod3821 from "../../../../_runtime/metro/03821__.js";
import module_1167_mod from "../../../../_runtime/metro/01167__.js";
import size from "../../../../_runtime/metro/00002__.js";

let module_1167 = module_1167_mod;
const loader = module_1167.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3821);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1167 = module_1167_mod;
const messagesProxy = module_1167.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/conjure/intl/ConjureUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;