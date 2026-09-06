// === Module 7343: searchSounds ===

// Module 7343 (searchSounds)
import debounceDefault from "debounce" /* 551 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4213 */;
import SoundboardUtils from "SoundboardUtils" /* 7344 */;
import EmojiStore from "EmojiStore" /* 5459 */;

require = fn;
function trackSearchStart(location_stack, channel_id) {
  const obj = { channel_id, search_type: constants2.SOUNDBOARD, location_stack };
  obj.track(constants.SEARCH_STARTED, obj);
}
function trackSearchResultViewed(total_results, location_stack, channel_id, query) {
  const obj = { search_type: constants2.SOUNDBOARD, channel_id, query, total_results: total_results.length, location_stack };
  obj.track(constants.SEARCH_RESULT_VIEWED, obj);
}
const Constants = fn(1074);
({ AnalyticEvents: closure_4, SearchTypes: hasOwnProperty } = Constants);
let closure_6 = debounceDefault(trackSearchStart, 350);
let closure_7 = debounceDefault(trackSearchResultViewed, 350);
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/searchSounds.tsx");

export { trackSearchStart };
export { trackSearchResultViewed };
export const searchSounds = function searchSounds(arg0, availableSounds, stateFromStores, channel, arg4) {
  closure_0 = arg0;
  closure_1 = stateFromStores;
  closure_3 = arg4;
  dependencyMap = availableSounds.reduce((acc, name) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    closure_6(closure_3, id);
    const toLocaleLowerCaseResult = closure_0.toLocaleLowerCase();
    closure_0 = toLocaleLowerCaseResult;
    name = name.name;
    const toLocaleLowerCaseResult1 = name.toLocaleLowerCase();
    let customEmojiById = null;
    if (null != name.emojiId) {
      customEmojiById = EmojiStore.getCustomEmojiById(name.emojiId);
    }
    let result = null;
    if (null != name.emojiName) {
      result = UnicodeEmojisDefault.convertSurrogateToName(name.emojiName, false);
    }
    let byName = null;
    if (null != result) {
      byName = UnicodeEmojisDefault.getByName(result);
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
    if (names.some((item) => item.startsWith(toLocaleLowerCaseResult))) {
      sum2 = sum1 + 5;
    }
    let sum3 = sum2;
    if (toLocaleLowerCaseResult1.endsWith(toLocaleLowerCaseResult)) {
      sum3 = sum2 + 4;
    }
    let sum4 = sum3;
    if (names.some((item) => item.endsWith(toLocaleLowerCaseResult))) {
      sum4 = sum3 + 3;
    }
    const name2 = name.name;
    let sum5 = sum4;
    if (tmp22(toLocaleLowerCaseResult, name2.toLocaleLowerCase())) {
      sum5 = sum4 + 2;
    }
    let sum6 = sum5;
    if (names.some((item) => closure_1(closure_2[5])(toLocaleLowerCaseResult, item))) {
      sum6 = sum5 + 1;
    }
    let result1 = sum6 > 0;
    if (0 < sum6) {
      result1 = SoundboardUtils.canUseSoundboardSound(closure_1, name, id);
    }
    let sum7 = sum6;
    if (result1) {
      sum7 = sum6 + 100;
    }
    acc[name.soundId] = sum7;
    return acc;
  }, {});
  const found = availableSounds.filter((item) => dependencyMap[item.soundId] > 0);
  const sorted = found.sort((arg0, arg1) => dependencyMap[arg1.soundId] - dependencyMap[arg0.soundId]);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  closure_7(sorted, arg4, id, arg0);
  return sorted;
};