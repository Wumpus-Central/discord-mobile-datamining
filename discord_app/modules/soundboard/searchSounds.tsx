// discord_app/modules/soundboard/searchSounds.tsx
import debounceDefault from "../../../_runtime/00636_debounce.js";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import closure_3 from "../emojis/EmojiStore.tsx";
import ME from "../../Constants.tsx";

const require = arg1;
function trackSearchStart(location_stack, channel_id) {
  let obj = expandEventPropertiesDefault;
  obj = { channel_id, search_type: constants2.SOUNDBOARD, location_stack };
  obj.track(constants.SEARCH_STARTED, obj);
}
function trackSearchResultViewed(total_results, location_stack, channel_id, query) {
  let obj = expandEventPropertiesDefault;
  obj = { search_type: constants2.SOUNDBOARD, channel_id, query, total_results: total_results.length, location_stack };
  obj.track(constants.SEARCH_RESULT_VIEWED, obj);
}
({ AnalyticEvents: c4, SearchTypes: c5 } = ME);
let closure_6 = debounceDefault(trackSearchStart, 350);
let closure_7 = debounceDefault(trackSearchResultViewed, 350);
let result = require("set").fileFinishedImporting("modules/soundboard/searchSounds.tsx");

export { trackSearchStart };
export { trackSearchResultViewed };
export const searchSounds = function searchSounds(arg0, availableSounds, stateFromStores, channel) {
  closure_0 = arg0;
  closure_1 = stateFromStores;
  closure_2 = channel;
  closure_3 = arg4;
  closure_4 = availableSounds.reduce((arg0, name) => {
    let id;
    if (dependencyMap != null) {
      id = tmp3.id;
    }
    closure_1_6(customEmojiById, id);
    const toLocaleLowerCaseResult = lib.toLocaleLowerCase();
    lib = toLocaleLowerCaseResult;
    name = name.name;
    const toLocaleLowerCaseResult1 = name.toLocaleLowerCase();
    customEmojiById = null;
    if (null != name.emojiId) {
      customEmojiById = customEmojiById.getCustomEmojiById(name.emojiId);
    }
    let result = null;
    if (null != name.emojiName) {
      result = stateFromStores(4038).convertSurrogateToName(name.emojiName, false);
      const obj2 = stateFromStores(4038);
    }
    let byName = null;
    if (null != result) {
      byName = stateFromStores(4038).getByName(result);
      const obj3 = stateFromStores(4038);
    }
    if (null != customEmojiById) {
      const items = [customEmojiById.name];
      let names = items;
    } else {
      names = undefined;
      if (byName != null) {
        names = byName.names;
      }
      if (names == null) {
        names = [];
      }
    }
    let num = 0;
    if (toLocaleLowerCaseResult === toLocaleLowerCaseResult1) {
      num = 8;
    }
    let sum = num;
    if (names.includes(toLocaleLowerCaseResult)) {
      sum = num + 7;
    }
    let sum1 = sum;
    if (toLocaleLowerCaseResult1.startsWith(toLocaleLowerCaseResult)) {
      sum1 = sum + 6;
    }
    let sum2 = sum1;
    if (names.some((str) => str.startsWith(closure_0))) {
      sum2 = sum1 + 5;
    }
    let sum3 = sum2;
    if (toLocaleLowerCaseResult1.endsWith(toLocaleLowerCaseResult)) {
      sum3 = sum2 + 4;
    }
    let sum4 = sum3;
    if (names.some((str) => str.endsWith(closure_0))) {
      sum4 = sum3 + 3;
    }
    const name2 = name.name;
    let sum5 = sum4;
    if (tmp22(toLocaleLowerCaseResult, name2.toLocaleLowerCase())) {
      sum5 = sum4 + 2;
    }
    let sum6 = sum5;
    if (names.some((arg0) => closure_1_1(closure_1_2[5])(closure_0, arg0))) {
      sum6 = sum5 + 1;
    }
    let result1 = sum6 > 0;
    if (0 < sum6) {
      result1 = lib(6068).canUseSoundboardSound(stateFromStores, name, tmp3);
      const obj4 = lib(6068);
    }
    let sum7 = sum6;
    if (result1) {
      sum7 = sum6 + 100;
    }
    arg0[name.soundId] = sum7;
    return arg0;
  }, {});
  const found = availableSounds.filter((arg0) => dependencyMap2[arg0.soundId] > 0);
  const sorted = found.sort((arg0, arg1) => dependencyMap2[arg1.soundId] - dependencyMap2[arg0.soundId]);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  closure_7(sorted, arg4, id, arg0);
  return sorted;
};