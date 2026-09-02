// discord_app/modules/favorites/onboarding/handleFavoritesGuildAddSuggestedChannel.tsx
import closure_2 from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = arg1;
function _handleFavoritesGuildAddSuggestedChannel() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function* (arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              dependencyMap = tmp2;
              let callback;
              c3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(closure_1_1[1]).getOrResolveChannelIdFromDestinationId(callback);
              return obj1;
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                callback = arg1;
                if (null != callback) {
                  obj1 = callback(10328);
                  const obj3 = { channelIds: null, categoryName: null, source: "suggestions" };
                  const items = [callback];
                  obj3[0] = items;
                  const intl = callback(1233).intl;
                  obj3[1] = intl.string(callback(1233).t.OGiMXJ);
                  c3 = 2;
                  c4 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = obj1.addFavoriteChannelsToCategory(obj3);
                  return obj4;
                }
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          c4 = tmp;
          throw tmp18;
        }
      }
    })();
  });
  closure_3 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting(
  "modules/favorites/onboarding/handleFavoritesGuildAddSuggestedChannel.tsx",
);

export default function handleFavoritesGuildAddSuggestedChannel() {
  const self = this;
  const apply = _handleFavoritesGuildAddSuggestedChannel.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
