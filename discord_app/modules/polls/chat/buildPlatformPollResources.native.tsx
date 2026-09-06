// === Module 11718: buildPlatformPollResources ===

// Module 11718 (buildPlatformPollResources)
import ensureAvatarSource from "ensureAvatarSource" /* 1399 */;
import registerAssetDefault from "registerAsset" /* 5618 */;
import registerAssetDefault2 from "registerAsset" /* 7144 */;
import importDefaultResult from "apply" /* 12 */;

require = arg1;
let closure_3 = importDefaultResult.mapValues(require("normal").pollStyleSets, (arg0) => {
  const _require = arg0;
  closure_1 = _require(4560).createNativeStyleProperties((arg0) => {
    let tmp = callback(callback2(closure_1_2[3]), arg0);
    return callback2(closure_1_2[0]).pickBy(tmp, (num) => {
      let tmp = typeof num !== "number";
      if (typeof num !== "number") {
        tmp = typeof num !== "boolean";
      }
      return tmp;
    });
  });
  return (arg0, arg1) => {
    let obj = callback2(closure_1_2[0]);
    let tmp = callback(callback2(closure_1_2[3]), arg1);
    obj = {};
    const merged = Object.assign(callback2(arg0, arg1));
    const merged1 = Object.assign(obj.pickBy(callback(callback2(closure_1_2[3]), arg1), (num) => {
      let tmp = typeof num === "number";
      if (typeof num !== "number") {
        tmp = typeof num === "boolean";
      }
      return tmp;
    }));
    return obj;
  };
});
const result = require("set").fileFinishedImporting("modules/polls/chat/buildPlatformPollResources.native.tsx");

export const buildPlatformPollResources = function buildPlatformPollResources(theme, layoutType) {
  const _require = theme;
  importDefault = layoutType;
  const obj = { styles: importDefaultResult.mapValues(closure_3, (arg0) => arg0(closure_0, closure_1)), selectedIcon: null, checkmarkIcon: null };
  const obj2 = importDefaultResult;
  obj[1] = _require(7946).getAssetUriForEmbed(registerAssetDefault2);
  const obj3 = _require(7946);
  obj[2] = _require(7946).getAssetUriForEmbed(registerAssetDefault);
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  return ensureAvatarSource.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};