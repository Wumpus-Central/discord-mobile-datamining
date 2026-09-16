// === Module 10432: useComputeEmojiPickerFunctions ===

// Module 10432 (useComputeEmojiPickerFunctions)
import _modDef12 from "module_12" /* 12 */;
import FunctionUtils from "FunctionUtils" /* 1934 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4290 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 10424 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 10433 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
      let emojis1 = tmp2.emojis;
      let obj2 = { emojiSections: items, renderingData: null, rowSize: null };
      let obj3 = { type: constants3.EMOJI, emojis: emojis1.slice(0, rowSize), emojisDisabled: null, label: null, footer: null };
      ({ emojisDisabled: obj18.emojisDisabled, name: obj18.label } = tmp2);
      obj3.footer = constants2.TOP_GUILD_EMOJI;
      obj2.renderingData = obj3;
      obj2.rowSize = rowSize;
      let tmp59 = pushCategory(obj2);
    } else if (constants2.FAVORITES === type) {
      let obj4 = { emojiSections: items, renderingData: null, rowSize: null };
      let obj5 = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: null, footer: null };
      ({ emojis: obj16.emojis, emojisDisabled: obj16.emojisDisabled, name: obj16.label } = tmp2);
      obj5.footer = constants2.FAVORITES;
      obj4.renderingData = obj5;
      obj4.rowSize = rowSize;
      let tmp55 = pushCategory(obj4);
    } else if (constants2.RECENT === type) {
      let obj6 = { emojiSections: items, renderingData: null, rowSize: null };
      let obj8 = { type: constants3.EMOJI, emojisDisabled: null, emojis: null, label: null, footer: null };
      ({ emojisDisabled: obj14.emojisDisabled, emojis: obj14.emojis, name: obj14.label } = tmp2);
      obj8.footer = constants2.RECENT;
      obj6.renderingData = obj8;
      obj6.rowSize = rowSize;
      let tmp51 = pushCategory(obj6);
    } else if (constants2.GUILD === type) {
      ({ guild, emojis, emojisDisabled, emojisHidden } = tmp2);
      if (isNativeEmojiPickerEnabled) {
        let obj9 = { emojiSections: items, renderingData: null };
        let obj10 = { type: constants3.NATIVE_SECTION, label: null, guildId: null, emojiCount: null, emojisDisabled: null, emojisHidden: null, isSectionNitroLocked: null };
        ({ name: obj12.label, id: obj12.guildId } = guild);
        obj10.emojiCount = emojis.length;
        obj10.emojisDisabled = emojisDisabled;
        obj10.emojisHidden = emojisHidden;
        obj10.isSectionNitroLocked = tmp2.isNitroLocked;
        obj9.renderingData = obj10;
        let tmp47 = pushNativeCategory(obj9);
      } else {
        let obj7 = age_gate_AgeGateUtils;
        if (obj7.shouldNSFWGateGuild(guild.id)) {
          let obj11 = { type: constants3.NSFW, label: guild.name, footer: constants2.GUILD, emojis: [], isSectionNitroLocked: null };
          obj11.isSectionNitroLocked = tmp2.isNitroLocked;
          let arr = items.push(obj11);
        } else {
          let obj13 = { emojiSections: items, renderingData: null, rowSize: null };
          let obj15 = { type: constants3.EMOJI, emojis, emojisDisabled, label: guild.name, footer: constants2.GUILD, isSectionNitroLocked: null };
          obj15.isSectionNitroLocked = tmp2.isNitroLocked;
          obj13.renderingData = obj15;
          obj13.rowSize = rowSize;
          let tmp35 = pushCategory(obj13);
        }
      }
    } else if (constants2.UNICODE === type) {
      let obj19 = UnicodeEmojisDefault;
      let byCategory = obj19.getByCategory(tmp2.name);
      if (isNativeEmojiPickerEnabled) {
        let obj17 = { emojiSections: items, renderingData: null };
        let obj33 = { type: constants3.NATIVE_SECTION, label: null, emojiCount: null, emojisDisabled: null, emojisHidden: null };
        let tmp60Result = _modDef12;
        obj33.label = tmp60Result.capitalize(tmp2.name);
        let num;
        if (byCategory != null) {
          num = byCategory.length;
        }
        if (num == null) {
          num = 0;
        }
        obj33.emojiCount = num;
        let _Set2 = Set;
        let tmp16 = new.target;
        let tmp17 = new.target;
        let set = new Set();
        obj33.emojisDisabled = set;
        let _Set3 = Set;
        let tmp20 = new.target;
        let tmp21 = new.target;
        let set1 = new Set();
        obj33.emojisHidden = set1;
        obj17.renderingData = obj33;
        let tmp12Result = pushNativeCategory(obj17);
      } else {
        let obj = { emojiSections: items, renderingData: null, rowSize: null };
        let obj34 = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: null, footer: null };
        let items1 = byCategory;
        if (byCategory == null) {
          items1 = [];
        }
        obj34.emojis = items1;
        let _Set = Set;
        let tmp6 = new.target;
        let tmp7 = new.target;
        let set2 = new Set();
        obj34.emojisDisabled = set2;
        let tmp60Result2 = _modDef12;
        obj34.label = tmp60Result2.capitalize(tmp2.name);
        obj34.footer = constants2.UNICODE;
        obj.renderingData = obj34;
        obj.rowSize = rowSize;
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
  const obj = { emojiSections: items, renderingData: null, rowSize: null };
  const obj2 = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: "", footer: null };
  let substr = unlocked;
  if (unlocked.length > limit) {
    substr = unlocked.slice(0, limit);
  }
  obj2.emojis = substr;
  obj2.emojisDisabled = new Set();
  obj2.footer = constants2.SEARCH_RESULTS;
  obj.renderingData = obj2;
  obj.rowSize = rowSize;
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
  const obj3 = { emojiSections: items, renderingData: null, rowSize: null };
  const obj4 = { type: constants3.EMOJI, emojis: substr1, emojisDisabled: set1, label: null, footer: null };
  const set = new Set();
  obj4.label = EmojiPickerUtils.getStringForEmojiCategory(constants.PREMIUM_UPSELL);
  obj4.footer = constants2.PREMIUM_UPSELL;
  obj3.renderingData = obj4;
  obj3.rowSize = rowSize;
  pushCategory(obj3);
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
const EmojiPickerConstants = fn(5549);
({ EmojiCategories: hasOwnProperty, EmojiCategoryTypes: metroRequire } = EmojiPickerConstants);
const constants3 = fn(10429).EmojiPickerRenderingDataType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx");

export default function useComputeEmojiPickerFunctions() {
  return _slicedToArray(noop.useState(() => {
    const obj = { computeCategories: FunctionUtils.cachedFunction(_computeCategories), computeSearchResults: null };
    obj.computeSearchResults = FunctionUtils.cachedFunction(_computeSearchResults);
    return obj;
  }), 1)[0];
};