// === Module 9345: _computeCategories ===

// Module 9345 (_computeCategories)
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4034 */;
import initializeSearch from "initializeSearch" /* 9302 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 9346 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import EmojiCategoryTypes from "EmojiCategoryTypes" /* 6731 */;
import { EmojiPickerRenderingDataType as closure_7 } from "IMAGE_SIZE" /* 9301 */;

require = arg1;
function _computeCategories(arg0) {
  ({ categories, rowSize, isNativeEmojiPickerEnabled } = arg0);
  const items = [];
  const iter = categories[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let type = nextResult.type;
    let tmp3 = constants2;
    if (constants2.TOP_GUILD_EMOJI === type) {
      let tmp56 = nextResult;
      emojis = tmp2.emojis;
      let tmp57 = pushCategory;
      let obj = { emojiSections: null, renderingData: null, rowSize: null };
      obj[0] = items;
      obj = { type: null, emojis: null, emojisDisabled: null, label: null, footer: null };
      let tmp58 = constants3;
      obj[0] = constants3.EMOJI;
      obj[1] = emojis.slice(0, rowSize);
      ({ emojisDisabled: obj18[2], name: obj18[3] } = tmp2);
      obj[4] = tmp3.TOP_GUILD_EMOJI;
      obj[1] = obj;
      obj[2] = rowSize;
      let tmp59 = pushCategory(obj);
    } else if (tmp3.FAVORITES === type) {
      let tmp52 = pushCategory;
      obj1 = { emojiSections: null, renderingData: null, rowSize: null };
      obj1[0] = items;
      let obj2 = { type: null, emojis: null, emojisDisabled: null, label: null, footer: null };
      let tmp53 = constants3;
      obj2[0] = constants3.EMOJI;
      let tmp54 = nextResult;
      ({ emojis: obj16[1], emojisDisabled: obj16[2], name: obj16[3] } = tmp2);
      obj2[4] = tmp3.FAVORITES;
      obj1[1] = obj2;
      obj1[2] = rowSize;
      let tmp55 = pushCategory(obj1);
    } else if (tmp3.RECENT === type) {
      let tmp48 = pushCategory;
      let obj3 = { emojiSections: null, renderingData: null, rowSize: null };
      obj3[0] = items;
      let obj4 = { type: null, emojisDisabled: null, emojis: null, label: null, footer: null };
      let tmp49 = constants3;
      obj4[0] = constants3.EMOJI;
      let tmp50 = nextResult;
      ({ emojisDisabled: obj14[1], emojis: obj14[2], name: obj14[3] } = tmp2);
      obj4[4] = tmp3.RECENT;
      obj3[1] = obj4;
      obj3[2] = rowSize;
      let tmp51 = pushCategory(obj3);
    } else if (tmp3.GUILD === type) {
      let tmp25 = nextResult;
      ({ guild, emojis, emojisDisabled, emojisHidden } = tmp2);
      if (isNativeEmojiPickerEnabled) {
        let tmp40 = pushNativeCategory;
        let obj5 = { emojiSections: null, renderingData: null };
        obj5[0] = items;
        let obj6 = { type: null, label: null, guildId: null, emojiCount: null, emojisDisabled: null, emojisHidden: null, isSectionNitroLocked: null };
        let tmp41 = constants3;
        obj6[0] = constants3.NATIVE_SECTION;
        let tmp42 = guild;
        ({ name: obj12[1], id: obj12[2] } = guild);
        let tmp43 = emojis;
        obj6[3] = emojis.length;
        let tmp44 = emojisDisabled;
        obj6[4] = emojisDisabled;
        let tmp45 = emojisHidden;
        obj6[5] = emojisHidden;
        let tmp46 = nextResult;
        obj6[6] = tmp2.isNitroLocked;
        obj5[1] = obj6;
        let tmp47 = pushNativeCategory(obj5);
      } else {
        let tmp26 = require;
        let tmp27 = dependencyMap;
        obj6 = GuildNSFWContentLevel;
        let tmp28 = guild;
        if (obj6.shouldNSFWGateGuild(guild.id)) {
          let obj7 = { type: null, label: null, footer: null, emojis: null, isSectionNitroLocked: null };
          let tmp36 = constants3;
          obj7[0] = constants3.NSFW;
          let tmp37 = guild;
          obj7[1] = guild.name;
          obj7[2] = tmp3.GUILD;
          obj7[3] = [];
          let tmp38 = nextResult;
          obj7[4] = tmp2.isNitroLocked;
          let arr = items.push(obj7);
        } else {
          let tmp29 = pushCategory;
          let obj8 = { emojiSections: null, renderingData: null, rowSize: null };
          obj8[0] = items;
          let obj9 = { type: null, emojis: null, emojisDisabled: null, label: null, footer: null, isSectionNitroLocked: null };
          let tmp30 = constants3;
          obj9[0] = constants3.EMOJI;
          let tmp31 = emojis;
          obj9[1] = emojis;
          let tmp32 = emojisDisabled;
          obj9[2] = emojisDisabled;
          let tmp33 = guild;
          obj9[3] = guild.name;
          obj9[4] = tmp3.GUILD;
          let tmp34 = nextResult;
          obj9[5] = tmp2.isNitroLocked;
          obj8[1] = obj9;
          obj8[2] = rowSize;
          let tmp35 = pushCategory(obj8);
        }
      }
    } else if (tmp3.UNICODE === type) {
      let tmp60 = importDefault;
      let tmp61 = dependencyMap;
      let obj19 = parseRawEmojiObjectDefault;
      let tmp62 = nextResult;
      let byCategory = obj19.getByCategory(tmp2.name);
      if (isNativeEmojiPickerEnabled) {
        let obj10 = { emojiSections: null, renderingData: null };
        obj10[0] = items;
        let obj11 = { type: null, label: null, emojiCount: null, emojisDisabled: null, emojisHidden: null };
        let tmp13 = constants3;
        obj11[0] = constants3.NATIVE_SECTION;
        let tmp12 = pushNativeCategory;
        let tmp60Result = tmp60(12);
        let tmp14 = nextResult;
        obj11[1] = tmp60Result.capitalize(tmp2.name);
        let tmp15 = byCategory;
        let num;
        if (byCategory != null) {
          num = byCategory.length;
        }
        if (num == null) {
          num = 0;
        }
        obj11[2] = num;
        let _Set2 = Set;
        let tmp16 = new.target;
        let tmp17 = new.target;
        let set = new Set();
        let tmp19 = set;
        obj11[3] = set;
        let _Set3 = Set;
        let tmp20 = new.target;
        let tmp21 = new.target;
        let set1 = new Set();
        let tmp23 = set1;
        obj11[4] = set1;
        obj10[1] = obj11;
        let tmp12Result = tmp12(obj10);
      } else {
        obj = { emojiSections: null, renderingData: null, rowSize: null };
        obj[0] = items;
        let obj12 = { type: null, emojis: null, emojisDisabled: null, label: null, footer: null };
        let tmp5 = constants3;
        obj12[0] = constants3.EMOJI;
        let items1 = byCategory;
        let tmp4 = pushCategory;
        if (byCategory == null) {
          items1 = [];
        }
        obj12[1] = items1;
        let _Set = Set;
        let tmp6 = new.target;
        let tmp7 = new.target;
        let set2 = new Set();
        let tmp9 = set2;
        obj12[2] = set2;
        tmp60Result = tmp60(12);
        let tmp10 = nextResult;
        obj12[3] = tmp60Result.capitalize(tmp2.name);
        obj12[4] = tmp3.UNICODE;
        obj[1] = obj12;
        obj[2] = rowSize;
        let tmp4Result = tmp4(obj);
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
  let obj = { emojiSections: items, renderingData: null, rowSize: null };
  obj = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: "", footer: null };
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
      let tmp9 = nextResult;
      let addResult = set1.add(tmp8.id);
    }
    continue;
  }
  obj = { emojiSections: items, renderingData: null, rowSize: null };
  obj1 = { type: constants3.EMOJI, emojis: substr1, emojisDisabled: set1, label: null, footer: null };
  const set = new Set();
  const tmp2 = pushCategory;
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
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx");

export default function useComputeEmojiPickerFunctions() {
  return callback(React.useState(() => {
    const obj = { computeCategories: callback(1989).cachedFunction(closure_8), computeSearchResults: null };
    const obj2 = callback(1989);
    obj[1] = callback(1989).cachedFunction(closure_9);
    return obj;
  }), 1)[0];
};