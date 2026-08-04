// discord_app/modules/polls/chat/buildPlatformPollResources.native.tsx
import importDefaultResult from "apply";

const require = arg1;
let closure_3 = require("apply").mapValues(require("normal").pollStyleSets, (arg0) => {
  const _require = arg0;
  let closure_1 = _require(4193).createNativeStyleProperties((arg0) => {
    let tmp = callback(callback2(outer1_2[3]), arg0);
    return callback2(outer1_2[0]).pickBy(tmp, (arg0) => {
      let tmp = typeof arg0 === "__REMOTEDEV__";
      if (typeof arg0 !== "Object") {
        tmp = typeof arg0 === "onScroll";
      }
      return tmp;
    });
  });
  return (arg0, arg1) => {
    let obj = callback2(outer1_2[0]);
    let tmp = callback(callback2(outer1_2[3]), arg1);
    obj = {};
    const merged = Object.assign(callback2(arg0, arg1));
    const merged1 = Object.assign(obj.pickBy(callback(callback2(outer1_2[3]), arg1), (arg0) => {
      let tmp = typeof arg0 === "Object";
      if (typeof arg0 !== "Object") {
        tmp = typeof arg0 === "T";
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
  obj[0] = importDefault(12).mapValues(closure_3, (arg0) => arg0(closure_0, closure_1));
  const obj2 = importDefault(12);
  obj[1] = _require(7734).getAssetUriForEmbed(importDefault(5241));
  const obj3 = _require(7734);
  obj[2] = _require(7734).getAssetUriForEmbed(importDefault(5561));
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  return require(1419) /* ensureAvatarSource */.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};