// discord_app/modules/premium/rust_3pp/Rust3PP.messages.js
import AssetJsonUtils from "../../asset_json/native/AssetJsonUtils.tsx";
import _mod3496 from "../../../../_runtime/metro/03496__.js";
import module_1165_mod from "../../../../_runtime/metro/01165__.js";
import size from "../../../../_runtime/metro/00002__.js";

let module_1165 = module_1165_mod;
const loader = module_1165.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3496);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1165 = module_1165_mod;
const messagesProxy = module_1165.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/premium/rust_3pp/Rust3PP.messages.js");

export default messagesProxy;
export const messagesLoader = loader;