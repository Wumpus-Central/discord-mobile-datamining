// === Module 11538: buildPlatformPollResources ===

// Module 11538 (buildPlatformPollResources)
import nativeDefault from "native" /* 587 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1417 */;
import _modDef6183 from "module_6183" /* 6183 */;
import _modDef6824 from "module_6824" /* 6824 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7863 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_3 = apply.mapValues(fn(11539).pollStyleSets, (arg0) => {
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
  obj.selectedIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef6824);
  obj.checkmarkIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef6183);
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  return utils_AvatarUtils.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};