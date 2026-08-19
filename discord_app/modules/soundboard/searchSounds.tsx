// === Module 7303: trackSearchStart ===

// Module 7303 (trackSearchStart)
import debounceDefault from "debounce" /* 636 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;
import ME from "ME" /* 676 */;

const require = fn;
function trackSearchStart(location_stack, channel_id) {
  const obj = { channel_id, search_type: constants2.SOUNDBOARD, location_stack };
  obj.track(constants.SEARCH_STARTED, obj);
}
function trackSearchResultViewed(total_results, location_stack, channel_id, query) {
  const obj = { search_type: constants2.SOUNDBOARD, channel_id, query, total_results: total_results.length, location_stack };
  obj.track(constants.SEARCH_RESULT_VIEWED, obj);
}
({ AnalyticEvents: c4, SearchTypes: c5 } = ME);
let closure_6 = debounceDefault(trackSearchStart, 350);
let closure_7 = debounceDefault(trackSearchResultViewed, 350);
let result = require("obj132").fileFinishedImporting("modules/soundboard/searchSounds.tsx");

export { trackSearchStart };
export { trackSearchResultViewed };
export const searchSounds = function searchSounds(arg0, availableSounds, stateFromStores, channel) {
  closure_0 = arg0;
  closure_1 = stateFromStores;
  closure_2 = channel;
  closure_3 = arg4;
  closure_4 = availableSounds.reduce((acc, item, index) => {
    let id;
    if (dependencyMap != null) {
      id = dependencyMap.id;
    }
    closure_1_6(customEmojiById, id);
    const toLocaleLowerCaseResult = lib.toLocaleLowerCase();
    lib = toLocaleLowerCaseResult;
    const name = item.name;
    const toLocaleLowerCaseResult1 = name.toLocaleLowerCase();
    customEmojiById = null;
    if (null != item.emojiId) {
      customEmojiById = customEmojiById.getCustomEmojiById(item.emojiId);
    }
    let result = null;
    if (null != item.emojiName) {
      result = stateFromStores(4034).convertSurrogateToName(item.emojiName, false);
      const obj2 = stateFromStores(4034);
    }
    let byName = null;
    if (null != result) {
      byName = stateFromStores(4034).getByName(result);
      const obj3 = stateFromStores(4034);
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
    if (names.some((item, index) => item.startsWith(closure_0))) {
      sum2 = sum1 + 5;
    }
    let sum3 = sum2;
    if (toLocaleLowerCaseResult1.endsWith(toLocaleLowerCaseResult)) {
      sum3 = sum2 + 4;
    }
    let sum4 = sum3;
    if (names.some((item, index) => item.endsWith(closure_0))) {
      sum4 = sum3 + 3;
    }
    const name2 = item.name;
    let sum5 = sum4;
    if (tmp22(toLocaleLowerCaseResult, name2.toLocaleLowerCase())) {
      sum5 = sum4 + 2;
    }
    let sum6 = sum5;
    if (names.some((item, index) => stateFromStores(channel[5])(closure_0, item))) {
      sum6 = sum5 + 1;
    }
    let result1 = sum6 > 0;
    if (0 < sum6) {
      result1 = lib(7304).canUseSoundboardSound(stateFromStores, item, dependencyMap);
      const obj4 = lib(7304);
    }
    let sum7 = sum6;
    if (result1) {
      sum7 = sum6 + 100;
    }
    acc[item.soundId] = sum7;
    return acc;
  }, {});
  const found = availableSounds.filter((item, index) => dependencyMap2[item.soundId] > 0);
  const sorted = found.sort((arg0, arg1) => dependencyMap2[arg1.soundId] - dependencyMap2[arg0.soundId]);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  callback(sorted, arg4, id, arg0);
  return sorted;
};