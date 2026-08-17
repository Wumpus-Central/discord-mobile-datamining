// discord_app/modules/emoji_picker/native/components/data/useEmojiPickerData.tsx
import closure_3 from "noop" /* 19 */;
import closure_4 from "getEmojiToGroupId" /* 6727 */;
import { LoadState } from "getEmojiToGroupId" /* 6727 */;
import { EmojiCategoryTypes } from "EmojiCategoryTypes" /* 6731 */;
import { EmojiPickerRenderingDataType as closure_7 } from "IMAGE_SIZE" /* 9301 */;

const require = arg1;
let obj = { PLACEHOLDER: 0, [0]: "PLACEHOLDER", TITLE: 1, [1]: "TITLE", EMOJI_ROW: 2, [2]: "EMOJI_ROW", EMOJI_ROW_SLIM: 3, [3]: "EMOJI_ROW_SLIM", EMOJI_ROW_NSFW: 4, [4]: "EMOJI_ROW_NSFW", FOOTER_UPSELL: 5, [5]: "FOOTER_UPSELL", PREMIUM_INLINE_ROADBLOCK: 6, [6]: "PREMIUM_INLINE_ROADBLOCK", NATIVE_SECTION: 7, [7]: "NATIVE_SECTION" };
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/data/useEmojiPickerData.tsx");

export default function useEmojiPickerData(emojiSections) {
  emojiSections = emojiSections.emojiSections;
  const rowSize = emojiSections.rowSize;
  const isNativeEmojiPickerEnabled = emojiSections.isNativeEmojiPickerEnabled;
  let stateFromStores;
  let items = [closure_4];
  stateFromStores = emojiSections(isNativeEmojiPickerEnabled[4]).useStateFromStores(items, () => {
    let tmp = closure_1_4.loadState === closure_1_5.Loaded;
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
    const item = items.forEach((isSectionNitroLocked) => {
      let tmp2 = tmp;
      let tmp3 = tmp2;
      if (tmp2) {
        isSectionNitroLocked = undefined;
        if (items[arg1 - 1] != null) {
          isSectionNitroLocked = tmp5.isSectionNitroLocked;
        }
        tmp3 = true !== isSectionNitroLocked;
      }
      if (tmp2) {
        let isSectionNitroLocked1;
        if (items[arg1 + 1] != null) {
          isSectionNitroLocked1 = tmp9.isSectionNitroLocked;
        }
        tmp2 = true !== isSectionNitroLocked1;
      }
      if (isSectionNitroLocked.type !== closure_2_7.NATIVE_SECTION) {
        if (tmp3) {
          items.push(rowSize(isNativeEmojiPickerEnabled[6])(emojiSections(isNativeEmojiPickerEnabled[7]).PremiumUpsellSectionDividerPosition.START));
          const tmp19 = rowSize(isNativeEmojiPickerEnabled[6]);
        }
        if (null != isSectionNitroLocked.label) {
          obj = { type: null, title: null, isSectionNitroLocked: null };
          obj[0] = closure_2_8.TITLE;
          obj[1] = isSectionNitroLocked.label;
          obj[2] = tmp;
          items.push(obj);
          const headerIndices = obj.headerIndices;
          headerIndices.push(items.length - 1);
        }
        const _Math = Math;
        const rounded = Math.ceil(isSectionNitroLocked.emojis.length / obj);
        for (let num6 = 0; num6 < rounded; num6 = num6 + 1) {
          let tmp31 = closure_1_2;
          let tmp32 = num6;
          if (closure_1_2) {
            let tmp37 = 0 === num6;
            if (0 === num6) {
              let tmp38 = closure_2_7;
              tmp37 = isSectionNitroLocked.type === closure_2_7.EMOJI;
            }
            if (tmp37) {
              let hasSearchData = obj.hasSearchData;
              let tmp39 = obj;
              if (!hasSearchData) {
                let tmp40 = closure_2_6;
                hasSearchData = isSectionNitroLocked.footer === closure_2_6.SEARCH_RESULTS;
              }
              if (!hasSearchData) {
                let tmp41 = closure_2_6;
                hasSearchData = isSectionNitroLocked.footer === closure_2_6.PREMIUM_UPSELL;
              }
              tmp39.hasSearchData = hasSearchData;
              let tmp42 = items;
              let tmp43 = rowSize;
              let tmp44 = isNativeEmojiPickerEnabled;
              let arr2 = items.push(rowSize(isNativeEmojiPickerEnabled[8])(isSectionNitroLocked));
            }
          } else {
            let type = isSectionNitroLocked.type;
            if (closure_2_7.EMOJI === type) {
              let tmp34 = items;
              obj = { type: null, row: null, emojis: null, emojisDisabled: null, footer: null, isSectionNitroLocked: null };
              let tmp35 = closure_2_8;
              obj[0] = closure_2_8.EMOJI_ROW;
              obj[1] = num6;
              ({ emojis: obj2[2], emojisDisabled: obj2[3], footer: obj2[4] } = isSectionNitroLocked);
              obj[5] = tmp;
              let arr3 = items.push(obj);
            } else if (tmp33.NSFW === type) {
              let tmp57 = items;
              obj = { type: null, isSectionNitroLocked: null };
              let tmp58 = closure_2_8;
              obj[0] = closure_2_8.EMOJI_ROW_NSFW;
              obj[1] = tmp;
              let arr4 = items.push(obj);
            }
          }
        }
        if (isSectionNitroLocked.footer === closure_2_6.PREMIUM_UPSELL) {
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
        items.push(rowSize(isNativeEmojiPickerEnabled[5])(isSectionNitroLocked, tmp3, tmp2));
      }
    });
    return obj;
  }, items1);
};
export const EmojiPickerItemType = obj;