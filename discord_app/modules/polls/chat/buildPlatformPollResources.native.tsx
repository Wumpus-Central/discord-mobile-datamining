// === Module 12749: buildPlatformPollResources ===

// Module 12749 (buildPlatformPollResources)
import nativeDefault from "native" /* 575 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1414 */;
import _modDef7056 from "module_7056" /* 7056 */;
import _modDef7377 from "module_7377" /* 7377 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8467 */;
import apply from "apply" /* 12 */;

require = fn;
let closure_3 = apply.mapValues(fn(12750).pollStyleSets, (arg0) => {
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

export function buildPlatformPollResources(theme, layoutType) {
  closure_0 = theme;
  closure_1 = layoutType;
  const obj = { styles: apply.mapValues(closure_3, (fn) => fn(closure_0, closure_1)), selectedIcon: null, checkmarkIcon: null };
  obj.selectedIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7377);
  obj.checkmarkIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7056);
  return obj;
}
export function getAvatarUrl(currentUser, guildId) {
  return utils_AvatarUtils.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
}