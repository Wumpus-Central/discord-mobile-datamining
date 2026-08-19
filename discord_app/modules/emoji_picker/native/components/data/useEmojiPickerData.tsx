// === Module 9369: useEmojiPickerData ===

// Module 9369 (useEmojiPickerData)
import noop from "noop" /* 19 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;
import { LoadState } from "getEmojiToGroupId" /* 6727 */;
import { EmojiCategoryTypes } from "EmojiCategoryTypes" /* 6731 */;
import { EmojiPickerRenderingDataType as closure_7 } from "IMAGE_SIZE" /* 9301 */;

const require = fn;
let obj = { PLACEHOLDER: 0, [0]: "PLACEHOLDER", TITLE: 1, [1]: "TITLE", EMOJI_ROW: 2, [2]: "EMOJI_ROW", EMOJI_ROW_SLIM: 3, [3]: "EMOJI_ROW_SLIM", EMOJI_ROW_NSFW: 4, [4]: "EMOJI_ROW_NSFW", FOOTER_UPSELL: 5, [5]: "FOOTER_UPSELL", PREMIUM_INLINE_ROADBLOCK: 6, [6]: "PREMIUM_INLINE_ROADBLOCK", NATIVE_SECTION: 7, [7]: "NATIVE_SECTION" };
const result = require("obj132").fileFinishedImporting("modules/emoji_picker/native/components/data/useEmojiPickerData.tsx");

export default function useEmojiPickerData(emojiSections) {
  emojiSections = emojiSections.emojiSections;
  const rowSize = emojiSections.rowSize;
  const isNativeEmojiPickerEnabled = emojiSections.isNativeEmojiPickerEnabled;
  let items = [closure_4];
  const stateFromStores = emojiSections(isNativeEmojiPickerEnabled[4]).useStateFromStores(items, () => {
    let tmp = closure_1_4.loadState === LoadState.Loaded;
    if (!tmp) {
      tmp = !isNativeEmojiPickerEnabled;
    }
    return tmp;
  });
  const items1 = [stateFromStores, emojiSections, rowSize, isNativeEmojiPickerEnabled];
  return stateFromStores.useMemo(() => {
    obj = { type: closure_1_8.PLACEHOLDER, isSectionNitroLocked: false };
    const items = [obj];
    obj = { data: items, rowSize: obj, headerIndices: [], hasGuildData: stateFromStores, hasSearchData: false, hasSearchUpsell: false };
    const item = items.forEach((item, index) => {
      let tmp2 = tmp;
      let tmp3 = tmp2;
      if (tmp2) {
        let isSectionNitroLocked;
        if (items[index - 1] != null) {
          isSectionNitroLocked = tmp5.isSectionNitroLocked;
        }
        tmp3 = true !== isSectionNitroLocked;
      }
      if (tmp2) {
        let isSectionNitroLocked1;
        if (items[index + 1] != null) {
          isSectionNitroLocked1 = tmp9.isSectionNitroLocked;
        }
        tmp2 = true !== isSectionNitroLocked1;
      }
      if (item.type !== closure_2_7.NATIVE_SECTION) {
        if (tmp3) {
          items.push(rowSize(isNativeEmojiPickerEnabled[6])(emojiSections(isNativeEmojiPickerEnabled[7]).PremiumUpsellSectionDividerPosition.START));
          const tmp19 = rowSize(isNativeEmojiPickerEnabled[6]);
        }
        if (null != item.label) {
          obj = { type: null, title: null, isSectionNitroLocked: null };
          obj[0] = closure_2_8.TITLE;
          obj[1] = item.label;
          obj[2] = tmp;
          items.push(obj);
          const headerIndices = obj.headerIndices;
          headerIndices.push(items.length - 1);
        }
        const _Math = Math;
        const rounded = Math.ceil(item.emojis.length / obj);
        for (let num6 = 0; num6 < rounded; num6 = num6 + 1) {
          if (closure_1_2) {
            let tmp37 = 0 === num6;
            if (0 === num6) {
              tmp37 = item.type === closure_2_7.EMOJI;
            }
            if (tmp37) {
              let hasSearchData = obj.hasSearchData;
              let tmp39 = obj;
              if (!hasSearchData) {
                hasSearchData = item.footer === EmojiCategoryTypes.SEARCH_RESULTS;
              }
              if (!hasSearchData) {
                hasSearchData = item.footer === EmojiCategoryTypes.PREMIUM_UPSELL;
              }
              tmp39.hasSearchData = hasSearchData;
              let arr2 = items.push(rowSize(isNativeEmojiPickerEnabled[8])(item));
            }
          } else {
            let type = item.type;
            if (closure_2_7.EMOJI === type) {
              obj = { type: null, row: null, emojis: null, emojisDisabled: null, footer: null, isSectionNitroLocked: null };
              obj[0] = closure_2_8.EMOJI_ROW;
              obj[1] = num6;
              ({ emojis: obj2[2], emojisDisabled: obj2[3], footer: obj2[4] } = item);
              obj[5] = tmp;
              let arr3 = items.push(obj);
            } else if (tmp33.NSFW === type) {
              obj = { type: null, isSectionNitroLocked: null };
              obj[0] = closure_2_8.EMOJI_ROW_NSFW;
              obj[1] = tmp;
              let arr4 = items.push(obj);
            }
          }
        }
        if (item.footer === EmojiCategoryTypes.PREMIUM_UPSELL) {
          obj.hasSearchUpsell = true;
          obj1 = { type: null, id: null, isSectionNitroLocked: null };
          obj1[0] = closure_2_8.FOOTER_UPSELL;
          obj1[1] = tmp46.PREMIUM_UPSELL;
          obj1[2] = tmp;
          items.push(obj1);
        }
        if (tmp2) {
          items.push(rowSize(isNativeEmojiPickerEnabled[6])(emojiSections(isNativeEmojiPickerEnabled[7]).PremiumUpsellSectionDividerPosition.END));
          const tmp54 = rowSize(isNativeEmojiPickerEnabled[6]);
        }
      } else {
        items.push(rowSize(isNativeEmojiPickerEnabled[5])(item, tmp3, tmp2));
      }
    });
    return obj;
  }, items1);
};
export const EmojiPickerItemType = obj;