// === Module 11348: buildPlatformPollResources ===

// Module 11348 (buildPlatformPollResources)
import nativeDefault from "native" /* 587 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1405 */;
import AssetRegistryDefault from "AssetRegistry" /* 5992 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6640 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7605 */;
import PollStyles from "PollStyles" /* 11349 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

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