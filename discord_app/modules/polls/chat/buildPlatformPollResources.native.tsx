// === Module 11348: buildPlatformPollResources ===

// Module 11348 (buildPlatformPollResources)
import nativeDefault from "native" /* 587 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1405 */;
import _modDef5992 from "module_5992" /* 5992 */;
import _modDef6640 from "module_6640" /* 6640 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7605 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_3 = apply.mapValues(fn(11349).pollStyleSets, (arg0) => {
  _require = arg0;
  closure_1 = require("createStyles").createNativeStyleProperties((arg0) => {
    let tmp = closure_0(nativeDefault, arg0);
    return apply.pickBy(tmp, (num) => {
      let tmp = typeof num !== "number";
      if (typeof num !== "number") {
        tmp = typeof num !== "boolean";
      }
      return tmp;
    });
  });
  return (arg0, arg1) => {
    let tmp = closure_0(nativeDefault, arg1);
    const merged = Object.assign(closure_1(arg0, arg1));
    const merged1 = Object.assign(apply.pickBy(tmp, (num) => {
      let tmp = typeof num === "number";
      if (typeof num !== "number") {
        tmp = typeof num === "boolean";
      }
      return tmp;
    }));
    return {};
  };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/chat/buildPlatformPollResources.native.tsx");

export const buildPlatformPollResources = function buildPlatformPollResources(theme, layoutType) {
  closure_0 = theme;
  closure_1 = layoutType;
  const obj = { styles: apply.mapValues(closure_3, (fn) => fn(closure_0, closure_1)), selectedIcon: null, checkmarkIcon: null };
  obj.selectedIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef6640);
  obj.checkmarkIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef5992);
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  return utils_AvatarUtils.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};