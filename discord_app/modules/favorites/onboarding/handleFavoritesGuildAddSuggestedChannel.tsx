// discord_app/modules/favorites/onboarding/handleFavoritesGuildAddSuggestedChannel.tsx
import formatResults from "../../share/formatResults.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_3 = async function _handleFavoritesGuildAddSuggestedChannel(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          c3 = 1;
          c4 = 1;
          let obj1 = { value: formatResults.getOrResolveChannelIdFromDestinationId(closure_0), done: false };
          return obj1;
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_129_0 = value;
            if (null != closure_129_0) {
              obj1 = closure_130_0(closure_130_1[2]);
              const obj3 = { channelIds: null, categoryName: null, source: "suggestions" };
              const items = [closure_129_0];
              obj3.channelIds = items;
              const intl = closure_130_0(closure_130_1[3]).intl;
              obj3.categoryName = intl.string(closure_130_0(closure_130_1[3]).t.OGiMXJ);
              c3 = 2;
              c4 = 1;
              const obj4 = { value: obj1.addFavoriteChannelsToCategory(obj3), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
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
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/onboarding/handleFavoritesGuildAddSuggestedChannel.tsx");

export default function handleFavoritesGuildAddSuggestedChannel() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
