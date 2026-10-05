// discord_app/modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import react2 from "../../../../../_runtime/00576_react.js";
import FunctionUtils from "../../../../utils/FunctionUtils.tsx";
import UnicodeEmojisDefault from "../../../emojis/UnicodeEmojis.tsx";
import EmojiPickerListConstants from "EmojiPickerListConstants.tsx";
import EmojiPickerUtils from "../../EmojiPickerUtils.tsx";
import age_gate_AgeGateUtils from "../../../age_gate/native/AgeGateUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import EmojiPickerConstants from "../../EmojiPickerConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let set, set2;

let hasOwnProperty;
let metroRequire;
function _computeCategories(arg0) {
  let categories;
  let emojis;
  let emojis2;
  let emojisDisabled;
  let emojisHidden;
  let guild;
  let isNativeEmojiPickerEnabled;
  let items1;
  let num;
  let obj10;
  let obj13;
  let obj19;
  let obj3;
  let obj38;
  let obj39;
  let obj5;
  let obj8;
  let rowSize;
  let set1;
  let tmp58Result;
  let tmp58Result2;
  ({ categories, rowSize, isNativeEmojiPickerEnabled } = arg0);
  const items = [];
  const iter = categories[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let type = nextResult.type;
    if (metroRequire.TOP_GUILD_EMOJI === type) {
      let emojis1 = tmp2.emojis;
      let obj2 = { emojiSections: items, renderingData: obj3, rowSize };
      obj3 = {
        type: constants3.EMOJI,
        emojis: emojis1.slice(0, rowSize),
        emojisDisabled: null,
        label: null,
        footer: metroRequire.TOP_GUILD_EMOJI,
      };
      ({ emojisDisabled: obj20.emojisDisabled, name: obj20.label } = tmp2);
      let tmp57 = pushCategory(obj2);
    } else if (metroRequire.FAVORITES === type) {
      let obj4 = { emojiSections: items, renderingData: obj5, rowSize };
      obj5 = {
        type: constants3.EMOJI,
        emojis: null,
        emojisDisabled: null,
        label: null,
        footer: metroRequire.FAVORITES,
      };
      ({ emojis: obj18.emojis, emojisDisabled: obj18.emojisDisabled, name: obj18.label } = tmp2);
      let tmp53 = pushCategory(obj4);
    } else if (metroRequire.SUGGESTED === type) {
      let obj6 = { emojiSections: items, renderingData: obj8, rowSize };
      obj8 = {
        type: constants3.EMOJI,
        emojis: emojis2.slice(0, rowSize),
        emojisDisabled: null,
        label: null,
        footer: metroRequire.SUGGESTED,
      };
      emojis2 = tmp2.emojis;
      ({ emojisDisabled: obj16.emojisDisabled, name: obj16.label } = tmp2);
      let tmp49 = pushCategory(obj6);
    } else if (metroRequire.RECENT === type) {
      let obj9 = { emojiSections: items, renderingData: obj10, rowSize };
      obj10 = { type: constants3.EMOJI, emojisDisabled: null, emojis: null, label: null, footer: metroRequire.RECENT };
      ({ emojisDisabled: obj14.emojisDisabled, emojis: obj14.emojis, name: obj14.label } = tmp2);
      let tmp45 = pushCategory(obj9);
    } else if (metroRequire.GUILD === type) {
      ({ guild, emojis, emojisDisabled, emojisHidden } = tmp2);
      if (isNativeEmojiPickerEnabled) {
        let obj11 = { emojiSections: items, renderingData: obj13 };
        obj13 = {
          type: constants3.NATIVE_SECTION,
          label: null,
          guildId: null,
          emojiCount: emojis.length,
          emojisDisabled,
          emojisHidden,
          isSectionNitroLocked: tmp2.isNitroLocked,
        };
        ({ name: obj12.label, id: obj12.guildId } = guild);
        let tmp41 = pushNativeCategory(obj11);
      } else {
        let obj7 = age_gate_AgeGateUtils;
        if (obj7.shouldNSFWGateGuild(guild.id)) {
          let obj15 = {
            type: constants3.NSFW,
            label: guild.name,
            footer: metroRequire.GUILD,
            emojis: [],
            isSectionNitroLocked: tmp2.isNitroLocked,
          };
          let arr = items.push(obj15);
        } else {
          let obj17 = { emojiSections: items, renderingData: obj19, rowSize };
          obj19 = {
            type: constants3.EMOJI,
            emojis,
            emojisDisabled,
            label: guild.name,
            footer: metroRequire.GUILD,
            isSectionNitroLocked: tmp2.isNitroLocked,
          };
          let tmp29 = pushCategory(obj17);
        }
      }
    } else if (metroRequire.UNICODE === type) {
      let obj21 = UnicodeEmojisDefault;
      let byCategory = obj21.getByCategory(tmp2.name);
      if (isNativeEmojiPickerEnabled) {
        let obj37 = { emojiSections: items, renderingData: obj38 };
        obj38 = {
          type: constants3.NATIVE_SECTION,
          label: tmp58Result.capitalize(tmp2.name),
          emojiCount: num,
          emojisDisabled: set,
          emojisHidden: set1,
        };
        tmp58Result = _modDef12;
        num = undefined;
        if (byCategory != null) {
          num = byCategory.length;
        }
        if (num == null) {
          num = 0;
        }
        let _Set2 = Set;
        let self3 = this;
        let self4 = this;
        set = new Set();
        let _Set3 = Set;
        let self5 = this;
        let self6 = this;
        set1 = new Set();
        let tmp10Result = pushNativeCategory(obj37);
      } else {
        let obj = { emojiSections: items, renderingData: obj39, rowSize };
        obj39 = {
          type: constants3.EMOJI,
          emojis: items1,
          emojisDisabled: set2,
          label: tmp58Result2.capitalize(tmp2.name),
          footer: metroRequire.UNICODE,
        };
        items1 = byCategory;
        if (byCategory == null) {
          items1 = [];
        }
        let _Set = Set;
        let self = this;
        let self2 = this;
        set2 = new Set();
        tmp58Result2 = _modDef12;
        let tmp4Result = pushCategory(obj);
      }
    }
    continue;
  }
  return items;
}
function _computeSearchResults(emojis) {
  let limit;
  let locked;
  let obj2;
  let obj4;
  let obj6;
  let rowSize;
  let substr;
  let unlocked;
  ({ locked, unlocked } = emojis.emojis);
  ({ rowSize, limit } = emojis);
  if (limit === undefined) {
    const _Number = Number;
    limit = Number.MAX_SAFE_INTEGER;
  }
  const items = [];
  const obj = { emojiSections: items, renderingData: obj2, rowSize };
  obj2 = {
    type: constants3.EMOJI,
    emojis: substr,
    emojisDisabled: new Set(),
    label: "",
    footer: metroRequire.SEARCH_RESULTS,
  };
  substr = unlocked;
  if (unlocked.length > limit) {
    substr = unlocked.slice(0, limit);
  }
  new Set();
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
  const obj3 = { emojiSections: items, renderingData: obj4, rowSize };
  obj4 = {
    type: constants3.EMOJI,
    emojis: substr1,
    emojisDisabled: set1,
    label: obj6.getStringForEmojiCategory(hasOwnProperty.PREMIUM_UPSELL),
    footer: metroRequire.PREMIUM_UPSELL,
  };
  obj6 = EmojiPickerUtils;
  pushCategory(obj3);
  return items;
}
function pushCategory(renderingData) {
  const emojis = renderingData.renderingData.emojis;
  const tmp = null != emojis && 0 !== emojis.length;
  if (tmp) {
    const emojiSections = renderingData.emojiSections;
    emojiSections.push(renderingData.renderingData);
  }
}
function pushNativeCategory(emojiSections) {
  emojiSections = emojiSections.emojiSections;
  emojiSections.push(emojiSections.renderingData);
}
({ EmojiCategories: hasOwnProperty, EmojiCategoryTypes: metroRequire } = EmojiPickerConstants);
const constants3 = EmojiPickerListConstants.EmojiPickerRenderingDataType;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          let obj2;
          let obj3;
          const obj = {
            computeCategories: obj2.cachedFunction(_computeCategories),
            computeSearchResults: obj3.cachedFunction(_computeSearchResults),
          };
          obj2 = FunctionUtils;
          obj3 = FunctionUtils;
          return obj;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return _slicedToArray(react.useState(first), 1)[0];
    }
  : () =>
      _slicedToArray(
        react.useState(() => {
          let obj2;
          let obj3;
          const obj = {
            computeCategories: obj2.cachedFunction(_computeCategories),
            computeSearchResults: obj3.cachedFunction(_computeSearchResults),
          };
          obj2 = FunctionUtils;
          obj3 = FunctionUtils;
          return obj;
        }),
        1,
      )[0];
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx");

export default tmp3;
