// discord_app/modules/emoji_picker/native/components/data/useEmojiPickerData.tsx
import getEmojiPickerDataRowItemNativeSectionDefault from "getEmojiPickerDataRowItemNativeSection.tsx";
import getEmojiPickerDataRowPremiumInlineRoadblockDefault from "getEmojiPickerDataRowPremiumInlineRoadblock.tsx";
import PremiumUpsellSectionDivider from "../../../../premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx";
import getEmojiPickerDataRowItemSlimEmojiDefault from "getEmojiPickerDataRowItemSlimEmoji.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../../../emojis/EmojiStore.tsx";

require = fn;
const LoadState = fn(5766).LoadState;
const EmojiCategoryTypes = fn(5770).EmojiCategoryTypes;
let closure_7 = fn(9742).EmojiPickerRenderingDataType;
const EmojiPickerItemType = {
  PLACEHOLDER: 0,
  [0]: "PLACEHOLDER",
  TITLE: 1,
  [1]: "TITLE",
  EMOJI_ROW: 2,
  [2]: "EMOJI_ROW",
  EMOJI_ROW_SLIM: 3,
  [3]: "EMOJI_ROW_SLIM",
  EMOJI_ROW_NSFW: 4,
  [4]: "EMOJI_ROW_NSFW",
  FOOTER_UPSELL: 5,
  [5]: "FOOTER_UPSELL",
  PREMIUM_INLINE_ROADBLOCK: 6,
  [6]: "PREMIUM_INLINE_ROADBLOCK",
  NATIVE_SECTION: 7,
  [7]: "NATIVE_SECTION",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/useEmojiPickerData.tsx");

export default function useEmojiPickerData(emojiSections) {
  emojiSections = emojiSections.emojiSections;
  const rowSize = emojiSections.rowSize;
  const isNativeEmojiPickerEnabled = emojiSections.isNativeEmojiPickerEnabled;
  let items = [EmojiStore];
  const stateFromStores = emojiSections(isNativeEmojiPickerEnabled[4]).useStateFromStores(items, () => {
    let tmp = EmojiStore.loadState === LoadState.Loaded;
    if (!tmp) {
      tmp = !isNativeEmojiPickerEnabled;
    }
    return tmp;
  });
  const items1 = [stateFromStores, emojiSections, rowSize, isNativeEmojiPickerEnabled];
  return stateFromStores.useMemo(() => {
    const items = [{ type: constants.PLACEHOLDER, isSectionNitroLocked: false }];
    obj2 = {
      data: items,
      rowSize: obj2,
      headerIndices: [],
      hasGuildData: stateFromStores,
      hasSearchData: false,
      hasSearchUpsell: false,
    };
    const item = items.forEach((isSectionNitroLocked, index) => {
      let tmp2 = tmp;
      let tmp3 = tmp2;
      if (tmp2) {
        isSectionNitroLocked = undefined;
        if (emojiSections[index - 1] != null) {
          isSectionNitroLocked = tmp5.isSectionNitroLocked;
        }
        tmp3 = true !== isSectionNitroLocked;
      }
      if (tmp2) {
        let isSectionNitroLocked1;
        if (emojiSections[index + 1] != null) {
          isSectionNitroLocked1 = tmp9.isSectionNitroLocked;
        }
        tmp2 = true !== isSectionNitroLocked1;
      }
      if (isSectionNitroLocked.type !== constants.NATIVE_SECTION) {
        if (tmp3) {
          items.push(
            getEmojiPickerDataRowPremiumInlineRoadblockDefault(
              PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.START,
            ),
          );
        }
        if (null != isSectionNitroLocked.label) {
          const obj = { type: null, title: null, isSectionNitroLocked: null };
          obj.type = obj.TITLE;
          obj.title = isSectionNitroLocked.label;
          obj.isSectionNitroLocked = tmp;
          items.push(obj);
          const headerIndices = obj2.headerIndices;
          headerIndices.push(items.length - 1);
        }
        const _Math = Math;
        const rounded = Math.ceil(isSectionNitroLocked.emojis.length / rowSize);
        for (let num6 = 0; num6 < rounded; num6 = num6 + 1) {
          if (isNativeEmojiPickerEnabled) {
            let tmp37 = 0 === num6;
            if (0 === num6) {
              tmp37 = isSectionNitroLocked.type === constants.EMOJI;
            }
            if (tmp37) {
              let hasSearchData = obj2.hasSearchData;
              if (!hasSearchData) {
                hasSearchData = isSectionNitroLocked.footer === EmojiCategoryTypes.SEARCH_RESULTS;
              }
              if (!hasSearchData) {
                hasSearchData = isSectionNitroLocked.footer === EmojiCategoryTypes.PREMIUM_UPSELL;
              }
              obj2.hasSearchData = hasSearchData;
              let arr12 = items.push(getEmojiPickerDataRowItemSlimEmojiDefault(isSectionNitroLocked));
            }
          } else {
            let type = isSectionNitroLocked.type;
            if (constants.EMOJI === type) {
              let obj3 = {
                type: null,
                row: null,
                emojis: null,
                emojisDisabled: null,
                footer: null,
                isSectionNitroLocked: null,
              };
              obj3.type = obj.EMOJI_ROW;
              obj3.row = num6;
              ({
                emojis: obj2.emojis,
                emojisDisabled: obj2.emojisDisabled,
                footer: obj2.footer,
              } = isSectionNitroLocked);
              obj3.isSectionNitroLocked = tmp;
              let arr13 = items.push(obj3);
            } else if (tmp33.NSFW === type) {
              let obj4 = { type: null, isSectionNitroLocked: null };
              obj4.type = obj.EMOJI_ROW_NSFW;
              obj4.isSectionNitroLocked = tmp;
              let arr14 = items.push(obj4);
            }
          }
        }
        if (isSectionNitroLocked.footer === EmojiCategoryTypes.PREMIUM_UPSELL) {
          obj2.hasSearchUpsell = true;
          const obj7 = { type: obj.FOOTER_UPSELL, id: tmp46.PREMIUM_UPSELL, isSectionNitroLocked: tmp };
          items.push(obj7);
        }
        if (tmp2) {
          items.push(
            getEmojiPickerDataRowPremiumInlineRoadblockDefault(
              PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.END,
            ),
          );
        }
      } else {
        items.push(getEmojiPickerDataRowItemNativeSectionDefault(isSectionNitroLocked, tmp3, tmp2));
      }
    });
    return obj2;
  }, items1);
}
export { EmojiPickerItemType };
