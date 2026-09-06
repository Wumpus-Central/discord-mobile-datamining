// === Module 10293: useComputeEmojiPickerFunctions ===

// Module 10293 (useComputeEmojiPickerFunctions)
import _modDef12 from "module_12" /* 12 */;
import FunctionUtils from "FunctionUtils" /* 1933 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4213 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 10285 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 10294 */;
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
      emojis = tmp2.emojis;
      let obj = { emojiSections: items, renderingData: null, rowSize: null };
      obj = { type: constants3.EMOJI, emojis: emojis.slice(0, rowSize), emojisDisabled: null, label: null, footer: null };
      ({ emojisDisabled: obj18.emojisDisabled, name: obj18.label } = tmp2);
      obj.footer = constants2.TOP_GUILD_EMOJI;
      obj.renderingData = obj;
      obj.rowSize = rowSize;
      let tmp59 = pushCategory(obj);
    } else if (constants2.FAVORITES === type) {
      let obj1 = { emojiSections: items, renderingData: null, rowSize: null };
      let obj2 = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: null, footer: null };
      ({ emojis: obj16.emojis, emojisDisabled: obj16.emojisDisabled, name: obj16.label } = tmp2);
      obj2.footer = constants2.FAVORITES;
      obj1.renderingData = obj2;
      obj1.rowSize = rowSize;
      let tmp55 = pushCategory(obj1);
    } else if (constants2.RECENT === type) {
      let obj3 = { emojiSections: items, renderingData: null, rowSize: null };
      let obj4 = { type: constants3.EMOJI, emojisDisabled: null, emojis: null, label: null, footer: null };
      ({ emojisDisabled: obj14.emojisDisabled, emojis: obj14.emojis, name: obj14.label } = tmp2);
      obj4.footer = constants2.RECENT;
      obj3.renderingData = obj4;
      obj3.rowSize = rowSize;
      let tmp51 = pushCategory(obj3);
    } else if (constants2.GUILD === type) {
      ({ guild, emojis, emojisDisabled, emojisHidden } = tmp2);
      if (isNativeEmojiPickerEnabled) {
        let obj5 = { emojiSections: items, renderingData: null };
        let obj6 = { type: constants3.NATIVE_SECTION, label: null, guildId: null, emojiCount: null, emojisDisabled: null, emojisHidden: null, isSectionNitroLocked: null };
        ({ name: obj12.label, id: obj12.guildId } = guild);
        obj6.emojiCount = emojis.length;
        obj6.emojisDisabled = emojisDisabled;
        obj6.emojisHidden = emojisHidden;
        obj6.isSectionNitroLocked = tmp2.isNitroLocked;
        obj5.renderingData = obj6;
        let tmp47 = pushNativeCategory(obj5);
      } else {
        obj6 = age_gate_AgeGateUtils;
        if (obj6.shouldNSFWGateGuild(guild.id)) {
          let obj7 = { type: constants3.NSFW, label: guild.name, footer: constants2.GUILD, emojis: [], isSectionNitroLocked: null };
          obj7.isSectionNitroLocked = tmp2.isNitroLocked;
          let arr = items.push(obj7);
        } else {
          let obj8 = { emojiSections: items, renderingData: null, rowSize: null };
          let obj9 = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: null, footer: null, isSectionNitroLocked: null };
          obj9.emojis = emojis;
          obj9.emojisDisabled = emojisDisabled;
          obj9.label = guild.name;
          obj9.footer = constants2.GUILD;
          obj9.isSectionNitroLocked = tmp2.isNitroLocked;
          obj8.renderingData = obj9;
          obj8.rowSize = rowSize;
          let tmp35 = pushCategory(obj8);
        }
      }
    } else if (constants2.UNICODE === type) {
      let obj19 = UnicodeEmojisDefault;
      let byCategory = obj19.getByCategory(tmp2.name);
      if (isNativeEmojiPickerEnabled) {
        let obj10 = { emojiSections: items, renderingData: null };
        let obj11 = { type: constants3.NATIVE_SECTION, label: null, emojiCount: null, emojisDisabled: null, emojisHidden: null };
        let tmp60Result = _modDef12;
        obj11.label = tmp60Result.capitalize(tmp2.name);
        let num;
        if (byCategory != null) {
          num = byCategory.length;
        }
        if (num == null) {
          num = 0;
        }
        obj11.emojiCount = num;
        let _Set2 = Set;
        let tmp16 = new.target;
        let tmp17 = new.target;
        let set = new Set();
        obj11.emojisDisabled = set;
        let _Set3 = Set;
        let tmp20 = new.target;
        let tmp21 = new.target;
        let set1 = new Set();
        obj11.emojisHidden = set1;
        obj10.renderingData = obj11;
        let tmp12Result = pushNativeCategory(obj10);
      } else {
        obj = { emojiSections: items, renderingData: null, rowSize: null };
        let obj12 = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: null, footer: null };
        let items1 = byCategory;
        if (byCategory == null) {
          items1 = [];
        }
        obj12.emojis = items1;
        let _Set = Set;
        let tmp6 = new.target;
        let tmp7 = new.target;
        let set2 = new Set();
        obj12.emojisDisabled = set2;
        tmp60Result = _modDef12;
        obj12.label = tmp60Result.capitalize(tmp2.name);
        obj12.footer = constants2.UNICODE;
        obj.renderingData = obj12;
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
  let obj = { emojiSections: items, renderingData: null, rowSize: null };
  obj = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: "", footer: null };
  let substr = unlocked;
  if (unlocked.length > limit) {
    substr = unlocked.slice(0, limit);
  }
  obj.emojis = substr;
  obj.emojisDisabled = new Set();
  obj.footer = constants2.SEARCH_RESULTS;
  obj.renderingData = obj;
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
  obj = { emojiSections: items, renderingData: null, rowSize: null };
  const obj1 = { type: constants3.EMOJI, emojis: substr1, emojisDisabled: set1, label: null, footer: null };
  const set = new Set();
  obj1.label = EmojiPickerUtils.getStringForEmojiCategory(constants.PREMIUM_UPSELL);
  obj1.footer = constants2.PREMIUM_UPSELL;
  obj.renderingData = obj1;
  obj.rowSize = rowSize;
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
const EmojiPickerConstants = fn(5463);
({ EmojiCategories: hasOwnProperty, EmojiCategoryTypes: metroRequire } = EmojiPickerConstants);
const constants3 = fn(10290).EmojiPickerRenderingDataType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx");

export default function useComputeEmojiPickerFunctions() {
  return _slicedToArray(noop.useState(() => {
    const obj = { computeCategories: FunctionUtils.cachedFunction(_computeCategories), computeSearchResults: null };
    obj.computeSearchResults = FunctionUtils.cachedFunction(_computeSearchResults);
    return obj;
  }), 1)[0];
};