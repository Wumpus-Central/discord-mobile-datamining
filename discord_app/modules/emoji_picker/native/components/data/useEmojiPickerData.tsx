// discord_app/modules/emoji_picker/native/components/data/useEmojiPickerData.tsx
import getEmojiPickerDataRowItemNativeSectionDefault from "getEmojiPickerDataRowItemNativeSection.tsx";
import getEmojiPickerDataRowPremiumInlineRoadblockDefault from "getEmojiPickerDataRowPremiumInlineRoadblock.tsx";
import PremiumUpsellSectionDivider from "../../../../premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx";
import getEmojiPickerDataRowItemSlimEmojiDefault from "getEmojiPickerDataRowItemSlimEmoji.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../../../emojis/EmojiStore.tsx";

require = fn;
const LoadState = fn(5638).LoadState;
const EmojiCategoryTypes = fn(5642).EmojiCategoryTypes;
let closure_7 = fn(9869).EmojiPickerRenderingDataType;
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
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/useEmojiPickerData.tsx");

export default function useEmojiPickerData(emojiSections) {
  if (closure_9) {
    const cResult = emojiSections(isNativeEmojiPickerEnabled[5]).c(8);
    const emojiSections1 = emojiSections.emojiSections;
    closure_129_0 = emojiSections1;
    const rowSize2 = emojiSections.rowSize;
    closure_129_1 = rowSize2;
    const isNativeEmojiPickerEnabled2 = emojiSections.isNativeEmojiPickerEnabled;
    closure_129_2 = isNativeEmojiPickerEnabled2;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [EmojiStore];
      cResult[0] = items;
      let first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== isNativeEmojiPickerEnabled2) {
      const fn = function l() {
        let tmp = EmojiStore.loadState === LoadState.Loaded;
        if (!tmp) {
          tmp = !isNativeEmojiPickerEnabled;
        }
        return tmp;
      };
      cResult[1] = isNativeEmojiPickerEnabled2;
      cResult[2] = fn;
      let tmp12 = fn;
    } else {
      tmp12 = cResult[2];
    }
    let obj2 = emojiSections(isNativeEmojiPickerEnabled[5]);
    const stateFromStores = emojiSections(isNativeEmojiPickerEnabled[6]).useStateFromStores(first, tmp12);
    if (cResult[3] === emojiSections1) {
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === isNativeEmojiPickerEnabled2) {
          if (cResult[6] === rowSize2) {
            closure_129_3 = cResult[7];
          }
        }
      }
    }
    let obj3 = { type: obj.PLACEHOLDER, isSectionNitroLocked: false };
    const items1 = [obj3];
    closure_129_4 = items1;
    let obj4 = {
      data: items1,
      rowSize: rowSize2,
      headerIndices: [],
      hasGuildData: stateFromStores,
      hasSearchData: false,
      hasSearchUpsell: false,
    };
    closure_129_3 = obj4;
    let item = emojiSections1.forEach((isSectionNitroLocked, index) => {
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
          EmojiStore.push(
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
          EmojiStore.push(obj);
          const headerIndices = stateFromStores1.headerIndices;
          headerIndices.push(EmojiStore.length - 1);
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
              let hasSearchData = stateFromStores1.hasSearchData;
              if (!hasSearchData) {
                hasSearchData = isSectionNitroLocked.footer === EmojiCategoryTypes.SEARCH_RESULTS;
              }
              if (!hasSearchData) {
                hasSearchData = isSectionNitroLocked.footer === EmojiCategoryTypes.PREMIUM_UPSELL;
              }
              stateFromStores1.hasSearchData = hasSearchData;
              let arr12 = EmojiStore.push(getEmojiPickerDataRowItemSlimEmojiDefault(isSectionNitroLocked));
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
              let arr13 = EmojiStore.push(obj3);
            } else if (tmp33.NSFW === type) {
              let obj4 = { type: null, isSectionNitroLocked: null };
              obj4.type = obj.EMOJI_ROW_NSFW;
              obj4.isSectionNitroLocked = tmp;
              let arr14 = EmojiStore.push(obj4);
            }
          }
        }
        if (isSectionNitroLocked.footer === EmojiCategoryTypes.PREMIUM_UPSELL) {
          stateFromStores1.hasSearchUpsell = true;
          const obj7 = { type: obj.FOOTER_UPSELL, id: tmp46.PREMIUM_UPSELL, isSectionNitroLocked: tmp };
          EmojiStore.push(obj7);
        }
        if (tmp2) {
          EmojiStore.push(
            getEmojiPickerDataRowPremiumInlineRoadblockDefault(
              PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.END,
            ),
          );
        }
      } else {
        EmojiStore.push(getEmojiPickerDataRowItemNativeSectionDefault(isSectionNitroLocked, tmp3, tmp2));
      }
    });
    cResult[3] = emojiSections1;
    cResult[4] = stateFromStores;
    cResult[5] = isNativeEmojiPickerEnabled2;
    cResult[6] = rowSize2;
    cResult[7] = obj4;
    const tmp6Result = emojiSections(isNativeEmojiPickerEnabled[6]);
  } else {
    emojiSections = emojiSections.emojiSections;
    const rowSize = emojiSections.rowSize;
    isNativeEmojiPickerEnabled = emojiSections.isNativeEmojiPickerEnabled;
    obj = emojiSections(isNativeEmojiPickerEnabled[6]);
    const items2 = [EmojiStore];
    const stateFromStores1 = obj.useStateFromStores(items2, () => {
      let tmp = EmojiStore.loadState === LoadState.Loaded;
      if (!tmp) {
        tmp = !isNativeEmojiPickerEnabled;
      }
      return tmp;
    });
    const items3 = [stateFromStores1, emojiSections, rowSize, isNativeEmojiPickerEnabled];
    return stateFromStores1.useMemo(() => {
      const items = [{ type: constants2.PLACEHOLDER, isSectionNitroLocked: false }];
      obj2 = {
        data: items,
        rowSize: obj2,
        headerIndices: [],
        hasGuildData: stateFromStores1,
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
    }, items3);
  }
}
export { EmojiPickerItemType };
