// discord_app/modules/polls/chat/buildPlatformPollResources.native.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_AvatarUtils from "../../../utils/native/AvatarUtils.tsx";
import AssetRegistryDefault from "../../../../_runtime/05999_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/06647_AssetRegistry.js";
import renderer_EmbedUtils from "../../messages/native/renderer/EmbedUtils.tsx";
import PollStyles from "native/PollStyles.tsx";
import 00012__ from "../../../../_runtime/metro/00012__.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_3 = module_12.mapValues(PollStyles.pollStyleSets, (arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("createStyles");
  let closure_1 = obj.createNativeStyleProperties((arg0) => {
    let tmp = closure_0(nativeDefault, arg0);
    const obj = module_12;
    return obj.pickBy(tmp, (num) => {
      let tmp = typeof num !== "number";
      if (typeof num !== "number") {
        tmp = typeof num !== "boolean";
      }
      return tmp;
    });
  });
  return (arg0, arg1) => {
    const tmp = closure_0(nativeDefault, arg1);
    const obj = module_12;
    const obj2 = {};
    const pickByResult = obj.pickBy(tmp, (num) => typeof num === "number" || typeof num === "boolean");
    const merged = Object.assign(closure_1(arg0, arg1));
    const merged1 = Object.assign(pickByResult);
    return obj2;
  };
});
const result = size.fileFinishedImporting("modules/polls/chat/buildPlatformPollResources.native.tsx");

export const buildPlatformPollResources = function buildPlatformPollResources(theme, layoutType) {
  let obj2;
  let obj3;
  let obj4;
  let closure_0 = theme;
  let closure_1 = layoutType;
  const obj = { styles: obj2.mapValues(closure_3, (fn) => fn(closure_0, closure_1)), selectedIcon: obj3.getAssetUriForEmbed(AssetRegistryDefault2), checkmarkIcon: obj4.getAssetUriForEmbed(AssetRegistryDefault) };
  obj2 = module_12;
  obj3 = renderer_EmbedUtils;
  obj4 = renderer_EmbedUtils;
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  const obj = utils_AvatarUtils;
  return obj.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};