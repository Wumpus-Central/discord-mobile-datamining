// discord_app/modules/soundboard/searchSounds.tsx
import debounceDefault from "../../../_runtime/00551_debounce.js";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import fuzzysearchDefault from "../../../_runtime/05709_fuzzysearch.js";
import SoundboardUtils from "SoundboardUtils.tsx";
import EmojiStore from "../emojis/EmojiStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
function trackSearchStart(location_stack, channel_id) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { channel_id, search_type: hasOwnProperty.SOUNDBOARD, location_stack };
  obj.track(constants.SEARCH_STARTED, obj2);
}
function trackSearchResultViewed(total_results, location_stack, channel_id, query) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = {
    search_type: hasOwnProperty.SOUNDBOARD,
    channel_id,
    query,
    total_results: total_results.length,
    location_stack,
  };
  obj.track(constants.SEARCH_RESULT_VIEWED, obj2);
}
({ AnalyticEvents: closure_4, SearchTypes: hasOwnProperty } = Constants);
let closure_6 = debounceDefault(trackSearchStart, 350);
let closure_7 = debounceDefault(trackSearchResultViewed, 350);
let result = size.fileFinishedImporting("modules/soundboard/searchSounds.tsx");

export { trackSearchStart };
export { trackSearchResultViewed };
export const searchSounds = function searchSounds(View, availableSounds, stateFromStores, channel, arg4) {
  let closure_1 = stateFromStores;
  let closure_3 = arg4;
  let closure_4 = availableSounds.reduce((acc, soundId) => {
    let names;
    let id;
    if (channel != null) {
      id = channel.id;
    }
    closure_6(closure_3, id);
    soundId = soundId.soundId;
    const toLocaleLowerCaseResult = View.toLocaleLowerCase();
    const name = soundId.name;
    const toLocaleLowerCaseResult1 = name.toLocaleLowerCase();
    let customEmojiById = null;
    if (null != soundId.emojiId) {
      customEmojiById = EmojiStore.getCustomEmojiById(soundId.emojiId);
    }
    let result = null;
    if (null != soundId.emojiName) {
      const obj2 = UnicodeEmojisDefault;
      result = obj2.convertSurrogateToName(soundId.emojiName, false);
    }
    let byName = null;
    if (null != result) {
      const obj3 = UnicodeEmojisDefault;
      byName = obj3.getByName(result);
    }
    if (null != customEmojiById) {
      const items = [customEmojiById.name];
      names = items;
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
    const name2 = soundId.name;
    let sum5 = sum4;
    const tmp22 = fuzzysearchDefault;
    if (tmp22(toLocaleLowerCaseResult, name2.toLocaleLowerCase())) {
      sum5 = sum4 + 2;
    }
    let sum6 = sum5;
    if (names.some((item) => stateFromStores(channel[5])(toLocaleLowerCaseResult, item))) {
      sum6 = sum5 + 1;
    }
    let result1 = sum6 > 0;
    if (0 < sum6) {
      const obj4 = SoundboardUtils;
      result1 = obj4.canUseSoundboardSound(stateFromStores, soundId, channel);
    }
    let sum7 = sum6;
    if (result1) {
      sum7 = sum6 + 100;
    }
    acc[soundId] = sum7;
    return acc;
  }, {});
  const found = availableSounds.filter((item) => closure_4[item.soundId] > 0);
  const sorted = found.sort((arg0, arg1) => closure_4[arg1.soundId] - closure_4[arg0.soundId]);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  closure_7(sorted, arg4, id, View);
  return sorted;
};
