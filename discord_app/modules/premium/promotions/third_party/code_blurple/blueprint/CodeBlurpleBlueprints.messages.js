// discord_app/modules/premium/promotions/third_party/code_blurple/blueprint/CodeBlurpleBlueprints.messages.js
import AssetJsonUtils from "../../../../../asset_json/native/AssetJsonUtils.tsx";
import _mod4195 from "../../../../../../../_runtime/metro/04195__.js";
import module_1165_mod from "../../../../../../../_runtime/metro/01165__.js";
import size from "../../../../../../../_runtime/metro/00002__.js";

let module_1165 = module_1165_mod;
const loader = module_1165.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod4195);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1165 = module_1165_mod;
const messagesProxy = module_1165.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/premium/promotions/third_party/code_blurple/blueprint/CodeBlurpleBlueprints.messages.js");

export default messagesProxy;
export const messagesLoader = loader;