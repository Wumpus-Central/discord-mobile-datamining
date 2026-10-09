// === Module 9430: useComputeEmojiPickerFunctions ===

// Module 9430 (useComputeEmojiPickerFunctions)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import FunctionUtils from "FunctionUtils" /* 2039 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4723 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 9401 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 9431 */;
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
      ({ emojisDisabled: obj20.emojisDisabled, name: obj20.label } = tmp2);
      obj3.footer = constants2.TOP_GUILD_EMOJI;
      obj2.renderingData = obj3;
      obj2.rowSize = rowSize;
      let tmp63 = pushCategory(obj2);
    } else if (constants2.FAVORITES === type) {
      let obj4 = { emojiSections: items, renderingData: null, rowSize: null };
      let obj5 = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: null, footer: null };
      ({ emojis: obj18.emojis, emojisDisabled: obj18.emojisDisabled, name: obj18.label } = tmp2);
      obj5.footer = constants2.FAVORITES;
      obj4.renderingData = obj5;
      obj4.rowSize = rowSize;
      let tmp59 = pushCategory(obj4);
    } else if (constants2.SUGGESTED === type) {
      let obj6 = { emojiSections: items, renderingData: null, rowSize: null };
      let obj8 = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: null, footer: null };
      let emojis2 = tmp2.emojis;
      obj8.emojis = emojis2.slice(0, rowSize);
      ({ emojisDisabled: obj16.emojisDisabled, name: obj16.label } = tmp2);
      obj8.footer = constants2.SUGGESTED;
      obj6.renderingData = obj8;
      obj6.rowSize = rowSize;
      let tmp55 = pushCategory(obj6);
    } else if (constants2.RECENT === type) {
      let obj9 = { emojiSections: items, renderingData: null, rowSize: null };
      let obj10 = { type: constants3.EMOJI, emojisDisabled: null, emojis: null, label: null, footer: null };
      ({ emojisDisabled: obj14.emojisDisabled, emojis: obj14.emojis, name: obj14.label } = tmp2);
      obj10.footer = constants2.RECENT;
      obj9.renderingData = obj10;
      obj9.rowSize = rowSize;
      let tmp51 = pushCategory(obj9);
    } else if (constants2.GUILD === type) {
      ({ guild, emojis, emojisDisabled, emojisHidden } = tmp2);
      if (isNativeEmojiPickerEnabled) {
        let obj11 = { emojiSections: items, renderingData: null };
        let obj13 = { type: constants3.NATIVE_SECTION, label: null, guildId: null, emojiCount: null, emojisDisabled: null, emojisHidden: null, isSectionNitroLocked: null };
        ({ name: obj12.label, id: obj12.guildId } = guild);
        obj13.emojiCount = emojis.length;
        obj13.emojisDisabled = emojisDisabled;
        obj13.emojisHidden = emojisHidden;
        obj13.isSectionNitroLocked = tmp2.isNitroLocked;
        obj11.renderingData = obj13;
        let tmp47 = pushNativeCategory(obj11);
      } else {
        let obj7 = age_gate_AgeGateUtils;
        if (obj7.shouldNSFWGateGuild(guild.id)) {
          let obj15 = { type: constants3.NSFW, label: guild.name, footer: constants2.GUILD, emojis: [], isSectionNitroLocked: null };
          obj15.isSectionNitroLocked = tmp2.isNitroLocked;
          let arr = items.push(obj15);
        } else {
          let obj17 = { emojiSections: items, renderingData: null, rowSize: null };
          let obj19 = { type: constants3.EMOJI, emojis, emojisDisabled, label: guild.name, footer: constants2.GUILD, isSectionNitroLocked: null };
          obj19.isSectionNitroLocked = tmp2.isNitroLocked;
          obj17.renderingData = obj19;
          obj17.rowSize = rowSize;
          let tmp35 = pushCategory(obj17);
        }
      }
    } else if (constants2.UNICODE === type) {
      let obj21 = UnicodeEmojisDefault;
      let byCategory = obj21.getByCategory(tmp2.name);
      if (isNativeEmojiPickerEnabled) {
        let obj37 = { emojiSections: items, renderingData: null };
        let obj38 = { type: constants3.NATIVE_SECTION, label: null, emojiCount: null, emojisDisabled: null, emojisHidden: null };
        let tmp64Result = _modDef12;
        obj38.label = tmp64Result.capitalize(tmp2.name);
        let num;
        if (byCategory != null) {
          num = byCategory.length;
        }
        if (num == null) {
          num = 0;
        }
        obj38.emojiCount = num;
        let _Set2 = Set;
        let tmp16 = new.target;
        let tmp17 = new.target;
        let set = new Set();
        obj38.emojisDisabled = set;
        let _Set3 = Set;
        let tmp20 = new.target;
        let tmp21 = new.target;
        let set1 = new Set();
        obj38.emojisHidden = set1;
        obj37.renderingData = obj38;
        let tmp12Result = pushNativeCategory(obj37);
      } else {
        let obj = { emojiSections: items, renderingData: null, rowSize: null };
        let obj39 = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: null, footer: null };
        let items1 = byCategory;
        if (byCategory == null) {
          items1 = [];
        }
        obj39.emojis = items1;
        let _Set = Set;
        let tmp6 = new.target;
        let tmp7 = new.target;
        let set2 = new Set();
        obj39.emojisDisabled = set2;
        let tmp64Result2 = _modDef12;
        obj39.label = tmp64Result2.capitalize(tmp2.name);
        obj39.footer = constants2.UNICODE;
        obj.renderingData = obj39;
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
const EmojiPickerConstants = fn(5998);
({ EmojiCategories: hasOwnProperty, EmojiCategoryTypes: metroRequire } = EmojiPickerConstants);
const constants3 = fn(9400).EmojiPickerRenderingDataType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useComputeEmojiPickerFunctions() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = { computeCategories: FunctionUtils.cachedFunction(_computeCategories), computeSearchResults: null };
      obj.computeSearchResults = FunctionUtils.cachedFunction(_computeSearchResults);
      return obj;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return _slicedToArray(noop.useState(first), 1)[0];
}) : (function useComputeEmojiPickerFunctions() {
  return _slicedToArray(noop.useState(() => {
    const obj = { computeCategories: FunctionUtils.cachedFunction(_computeCategories), computeSearchResults: null };
    obj.computeSearchResults = FunctionUtils.cachedFunction(_computeSearchResults);
    return obj;
  }), 1)[0];
});