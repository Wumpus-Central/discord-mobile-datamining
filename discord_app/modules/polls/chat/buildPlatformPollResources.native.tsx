// discord_app/modules/polls/chat/buildPlatformPollResources.native.tsx
import importDefaultResult from "apply";

const require = arg1;
let closure_3 = require("apply").mapValues(require("normal").pollStyleSets, (arg0) => {
  const _require = arg0;
  let closure_1 = _require("../../../design/components/Styles/native/createStyles.tsx").createNativeStyleProperties((arg0) => {
    let tmp = callback(callback2(outer1_2[3]), arg0);
    return callback2(outer1_2[0]).pickBy(tmp, (num) => {
      let tmp = typeof num !== "number";
      if (typeof num !== "number") {
        tmp = typeof num !== "boolean";
      }
      return tmp;
    });
  });
  return (arg0, arg1) => {
    let obj = callback2(outer1_2[0]);
    let tmp = callback(callback2(outer1_2[3]), arg1);
    obj = {};
    const merged = Object.assign(callback2(arg0, arg1));
    const merged1 = Object.assign(obj.pickBy(callback(callback2(outer1_2[3]), arg1), (num) => {
      let tmp = typeof num === "number";
      if (typeof num !== "number") {
        tmp = typeof num === "boolean";
      }
      return tmp;
    }));
    return obj;
  };
});
const result = require("createCacheKey").fileFinishedImporting("modules/polls/chat/buildPlatformPollResources.native.tsx");

export const buildPlatformPollResources = function buildPlatformPollResources(theme, layoutType) {
  const _require = theme;
  const importDefault = layoutType;
  const obj = { styles: null, selectedIcon: null, checkmarkIcon: null };
  obj[0] = require("../../../../_runtime/00012_apply.js").mapValues(closure_3, (arg0) => arg0(closure_0, closure_1));
  const obj2 = require("../../../../_runtime/00012_apply.js");
  obj[1] = _require("../../messages/native/renderer/EmbedUtils.tsx").getAssetUriForEmbed(require("../../../../_runtime/05332_registerAsset.js"));
  const obj3 = _require("../../messages/native/renderer/EmbedUtils.tsx");
  obj[2] = _require("../../messages/native/renderer/EmbedUtils.tsx").getAssetUriForEmbed(require("../../../../_runtime/05652_registerAsset.js"));
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  return require("../../../utils/native/AvatarUtils.tsx") /* ensureAvatarSource */.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};