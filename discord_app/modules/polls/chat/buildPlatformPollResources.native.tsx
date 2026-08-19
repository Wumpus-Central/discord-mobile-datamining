// === Module 8432: buildPlatformPollResources ===

// Module 8432 (buildPlatformPollResources)
import ensureAvatarSource from "ensureAvatarSource" /* 1438 */;
import registerAssetDefault from "registerAsset" /* 6944 */;
import registerAssetDefault2 from "registerAsset" /* 7180 */;
import importDefaultResult from "apply" /* 12 */;

require = fn;
let closure_3 = importDefaultResult.mapValues(require("normal").pollStyleSets, (arg0) => {
  const _require = arg0;
  closure_1 = _require(4661).createNativeStyleProperties((arg0) => {
    let tmp = callback(callback2(dependencyMap[3]), arg0);
    return callback2(dependencyMap[0]).pickBy(tmp, (num) => {
      let tmp = typeof num !== "number";
      if (typeof num !== "number") {
        tmp = typeof num !== "boolean";
      }
      return tmp;
    });
  });
  return (arg0, arg1) => {
    callback2(dependencyMap[0]);
    let tmp = callback(callback2(dependencyMap[3]), arg1);
    const obj = {};
    const merged = Object.assign(callback2(arg0, arg1));
    const merged1 = Object.assign(obj.pickBy(callback(callback2(dependencyMap[3]), arg1), (num) => {
      let tmp = typeof num === "number";
      if (typeof num !== "number") {
        tmp = typeof num === "boolean";
      }
      return tmp;
    }));
    return obj;
  };
});
const result = require("obj132").fileFinishedImporting("modules/polls/chat/buildPlatformPollResources.native.tsx");

export const buildPlatformPollResources = function buildPlatformPollResources(theme, layoutType) {
  const _require = theme;
  importDefault = layoutType;
  const obj = { styles: importDefaultResult.mapValues(closure_3, (fn) => fn(closure_0, closure_1)), selectedIcon: null, checkmarkIcon: null };
  obj[1] = _require(8171).getAssetUriForEmbed(registerAssetDefault);
  const obj3 = _require(8171);
  obj[2] = _require(8171).getAssetUriForEmbed(registerAssetDefault2);
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  return ensureAvatarSource.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};