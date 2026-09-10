// === Module 11789: buildPlatformPollResources ===

// Module 11789 (buildPlatformPollResources)
import nativeDefault from "native" /* 576 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1399 */;
import _modDef5668 from "module_5668" /* 5668 */;
import _modDef7196 from "module_7196" /* 7196 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7998 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_3 = apply.mapValues(fn(11790).pollStyleSets, (arg0) => {
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
    const obj = {};
    const merged = Object.assign(closure_1(arg0, arg1));
    const merged1 = Object.assign(obj.pickBy(closure_0(nativeDefault, arg1), (num) => {
      let tmp = typeof num === "number";
      if (typeof num !== "number") {
        tmp = typeof num === "boolean";
      }
      return tmp;
    }));
    return obj;
  };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/chat/buildPlatformPollResources.native.tsx");

export const buildPlatformPollResources = function buildPlatformPollResources(theme, layoutType) {
  closure_0 = theme;
  closure_1 = layoutType;
  const obj = { styles: apply.mapValues(closure_3, (fn) => fn(closure_0, closure_1)), selectedIcon: null, checkmarkIcon: null };
  obj.selectedIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7196);
  obj.checkmarkIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef5668);
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  return utils_AvatarUtils.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};