// === Module 9345: _computeCategories ===

// Module 9345 (_computeCategories)
import applyDefault from "apply" /* 12 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4034 */;
import initializeSearch from "initializeSearch" /* 9302 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 9346 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import EmojiCategoryTypes from "EmojiCategoryTypes" /* 6731 */;
import { EmojiPickerRenderingDataType as closure_7 } from "IMAGE_SIZE" /* 9301 */;

require = fn;
function _computeCategories(arg0) {
  ({ categories, rowSize, isNativeEmojiPickerEnabled } = arg0);
  const items = [];
  const iter = categories[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let type = nextResult.type;
    if (constants2.TOP_GUILD_EMOJI === type) {
      emojis = tmp2.emojis;
      let obj = { emojiSections: null, renderingData: null, rowSize: null };
      obj[0] = items;
      obj = { type: null, emojis: null, emojisDisabled: null, label: null, footer: null };
      obj[0] = constants3.EMOJI;
      obj[1] = emojis.slice(0, rowSize);
      ({ emojisDisabled: obj18[2], name: obj18[3] } = tmp2);
      obj[4] = constants2.TOP_GUILD_EMOJI;
      obj[1] = obj;
      obj[2] = rowSize;
      let tmp59 = pushCategory(obj);
    } else if (constants2.FAVORITES === type) {
      obj1 = { emojiSections: null, renderingData: null, rowSize: null };
      obj1[0] = items;
      let obj2 = { type: null, emojis: null, emojisDisabled: null, label: null, footer: null };
      obj2[0] = constants3.EMOJI;
      ({ emojis: obj16[1], emojisDisabled: obj16[2], name: obj16[3] } = tmp2);
      obj2[4] = constants2.FAVORITES;
      obj1[1] = obj2;
      obj1[2] = rowSize;
      let tmp55 = pushCategory(obj1);
    } else if (constants2.RECENT === type) {
      let obj3 = { emojiSections: null, renderingData: null, rowSize: null };
      obj3[0] = items;
      let obj4 = { type: null, emojisDisabled: null, emojis: null, label: null, footer: null };
      obj4[0] = constants3.EMOJI;
      ({ emojisDisabled: obj14[1], emojis: obj14[2], name: obj14[3] } = tmp2);
      obj4[4] = constants2.RECENT;
      obj3[1] = obj4;
      obj3[2] = rowSize;
      let tmp51 = pushCategory(obj3);
    } else if (constants2.GUILD === type) {
      ({ guild, emojis, emojisDisabled, emojisHidden } = tmp2);
      if (isNativeEmojiPickerEnabled) {
        let obj5 = { emojiSections: null, renderingData: null };
        obj5[0] = items;
        let obj6 = { type: null, label: null, guildId: null, emojiCount: null, emojisDisabled: null, emojisHidden: null, isSectionNitroLocked: null };
        obj6[0] = constants3.NATIVE_SECTION;
        ({ name: obj12[1], id: obj12[2] } = guild);
        obj6[3] = emojis.length;
        obj6[4] = emojisDisabled;
        obj6[5] = emojisHidden;
        obj6[6] = tmp2.isNitroLocked;
        obj5[1] = obj6;
        let tmp47 = pushNativeCategory(obj5);
      } else {
        obj6 = GuildNSFWContentLevel;
        if (obj6.shouldNSFWGateGuild(guild.id)) {
          let obj7 = { type: null, label: null, footer: null, emojis: null, isSectionNitroLocked: null };
          obj7[0] = constants3.NSFW;
          obj7[1] = guild.name;
          obj7[2] = constants2.GUILD;
          obj7[3] = [];
          obj7[4] = tmp2.isNitroLocked;
          let arr = items.push(obj7);
        } else {
          let obj8 = { emojiSections: null, renderingData: null, rowSize: null };
          obj8[0] = items;
          let obj9 = { type: null, emojis: null, emojisDisabled: null, label: null, footer: null, isSectionNitroLocked: null };
          obj9[0] = constants3.EMOJI;
          obj9[1] = emojis;
          obj9[2] = emojisDisabled;
          obj9[3] = guild.name;
          obj9[4] = constants2.GUILD;
          obj9[5] = tmp2.isNitroLocked;
          obj8[1] = obj9;
          obj8[2] = rowSize;
          let tmp35 = pushCategory(obj8);
        }
      }
    } else if (constants2.UNICODE === type) {
      let obj19 = parseRawEmojiObjectDefault;
      let byCategory = obj19.getByCategory(tmp2.name);
      if (isNativeEmojiPickerEnabled) {
        let obj10 = { emojiSections: null, renderingData: null };
        obj10[0] = items;
        let obj11 = { type: null, label: null, emojiCount: null, emojisDisabled: null, emojisHidden: null };
        obj11[0] = constants3.NATIVE_SECTION;
        let tmp60Result = applyDefault;
        obj11[1] = tmp60Result.capitalize(tmp2.name);
        let num;
        if (byCategory != null) {
          num = byCategory.length;
        }
        if (num == null) {
          num = 0;
        }
        obj11[2] = num;
        let _Set2 = Set;
        let set = new Set();
        obj11[3] = set;
        let _Set3 = Set;
        let set1 = new Set();
        obj11[4] = set1;
        obj10[1] = obj11;
        let tmp12Result = pushNativeCategory(obj10);
      } else {
        obj = { emojiSections: null, renderingData: null, rowSize: null };
        obj[0] = items;
        let obj12 = { type: null, emojis: null, emojisDisabled: null, label: null, footer: null };
        obj12[0] = constants3.EMOJI;
        let items1 = byCategory;
        if (byCategory == null) {
          items1 = [];
        }
        obj12[1] = items1;
        let _Set = Set;
        let set2 = new Set();
        obj12[2] = set2;
        tmp60Result = applyDefault;
        obj12[3] = tmp60Result.capitalize(tmp2.name);
        obj12[4] = constants2.UNICODE;
        obj[1] = obj12;
        obj[2] = rowSize;
        let tmp4Result = pushCategory(obj);
      }
    }
    continue;
  }
  return items;
}
function _computeSearchResults(emojis) {
  ({ locked, unlocked } = emojis.emojis);
  ({ rowSize, limit } = emojis);
  if (limit === undefined) {
    const _Number = Number;
    limit = Number.MAX_SAFE_INTEGER;
  }
  const items = [];
  let obj = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: "", footer: null };
  let substr = unlocked;
  if (unlocked.length > limit) {
    substr = unlocked.slice(0, limit);
  }
  obj[1] = substr;
  obj[2] = new Set();
  obj[4] = constants2.SEARCH_RESULTS;
  obj[1] = obj;
  obj[2] = rowSize;
  pushCategory(obj);
  let substr1 = locked;
  if (locked.length > limit) {
    substr1 = locked.slice(0, limit);
  }
  const set1 = new Set();
  const iter = locked[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (null != nextResult.id) {
      let addResult = set1.add(tmp8.id);
    }
    continue;
  }
  obj = { emojiSections: items, renderingData: null, rowSize: null };
  obj1 = { type: constants3.EMOJI, emojis: substr1, emojisDisabled: set1, label: null, footer: null };
  const set = new Set();
  obj1[3] = initializeSearch.getStringForEmojiCategory(constants.PREMIUM_UPSELL);
  obj1[4] = constants2.PREMIUM_UPSELL;
  obj[1] = obj1;
  obj[2] = rowSize;
  pushCategory(obj);
  return items;
}
function pushCategory(renderingData) {
  const emojis = renderingData.renderingData.emojis;
  let tmp = null != emojis;
  if (tmp) {
    tmp = 0 !== emojis.length;
  }
  if (tmp) {
    const emojiSections = renderingData.emojiSections;
    emojiSections.push(renderingData.renderingData);
  }
}
function pushNativeCategory(emojiSections) {
  emojiSections = emojiSections.emojiSections;
  emojiSections.push(emojiSections.renderingData);
}
({ EmojiCategories: c5, EmojiCategoryTypes: closure_6 } = EmojiCategoryTypes);
const result = require("obj132").fileFinishedImporting("modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx");

export default function useComputeEmojiPickerFunctions() {
  return callback(React.useState(() => {
    const obj = { computeCategories: callback(1989).cachedFunction(closure_8), computeSearchResults: null };
    const obj2 = callback(1989);
    obj[1] = callback(1989).cachedFunction(closure_9);
    return obj;
  }), 1)[0];
};