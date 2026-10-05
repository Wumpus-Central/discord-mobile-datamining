// === Module 9905: useEmojiPickerData ===

// Module 9905 (useEmojiPickerData)
import EmojiStore2 from "EmojiStore" /* 5638 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 5642 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9869 */;
import getEmojiPickerDataRowItemNativeSectionDefault from "getEmojiPickerDataRowItemNativeSection" /* 9906 */;
import getEmojiPickerDataRowPremiumInlineRoadblockDefault from "getEmojiPickerDataRowPremiumInlineRoadblock" /* 9907 */;
import PremiumUpsellSectionDivider from "PremiumUpsellSectionDivider" /* 9908 */;
import getEmojiPickerDataRowItemSlimEmojiDefault from "getEmojiPickerDataRowItemSlimEmoji" /* 9910 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const EmojiStore = EmojiStore2;
let isSectionNitroLocked;

const LoadState = EmojiStore2.LoadState;
const EmojiCategoryTypes = EmojiPickerConstants.EmojiCategoryTypes;
let closure_7 = EmojiPickerListConstants.EmojiPickerRenderingDataType;
const EmojiPickerItemType = { PLACEHOLDER: 0, [0]: "PLACEHOLDER", TITLE: 1, [1]: "TITLE", EMOJI_ROW: 2, [2]: "EMOJI_ROW", EMOJI_ROW_SLIM: 3, [3]: "EMOJI_ROW_SLIM", EMOJI_ROW_NSFW: 4, [4]: "EMOJI_ROW_NSFW", FOOTER_UPSELL: 5, [5]: "FOOTER_UPSELL", PREMIUM_INLINE_ROADBLOCK: 6, [6]: "PREMIUM_INLINE_ROADBLOCK", NATIVE_SECTION: 7, [7]: "NATIVE_SECTION" };
let closure_9 = ReactCompilerGating.isReactCompilerEnabled();
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/useEmojiPickerData.tsx");

export default function useEmojiPickerData(emojiSections) {
  let Loaded;
  let constants2;
  let constants3;
  let isNativeEmojiPickerEnabled;
  let loadState;
  let memo;
  let obj;
  let tmp16;
  if (closure_9) {
    let first;
    let tmp14;
    let obj4;
    const tmp9 = isNativeEmojiPickerEnabled;
    let obj2 = emojiSections(isNativeEmojiPickerEnabled[5]);
    const cResult = obj2.c(8);
    const emojiSections1 = emojiSections.emojiSections;
    const rowSize2 = emojiSections.rowSize;
    const isNativeEmojiPickerEnabled2 = emojiSections.isNativeEmojiPickerEnabled;
    const _Symbol = Symbol;
    const tmp8 = emojiSections;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [EmojiStore];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== isNativeEmojiPickerEnabled2) {
      const fn = function l() {
        return loadState.loadState === Loaded.Loaded || !isNativeEmojiPickerEnabled2;
      };
      cResult[1] = isNativeEmojiPickerEnabled2;
      cResult[2] = fn;
      tmp14 = fn;
    } else {
      tmp14 = cResult[2];
    }
    const tmp8Result = tmp8(tmp9[6]);
    const stateFromStores = tmp8Result.useStateFromStores(first, tmp14);
    if (cResult[3] === emojiSections1) {
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === isNativeEmojiPickerEnabled2) {
          if (cResult[6] === rowSize2) {
            obj4 = cResult[7];
          }
          memo = tmp16;
        }
      }
    }
    let obj3 = { type: obj.PLACEHOLDER, isSectionNitroLocked: false };
    const items1 = [obj3];
    obj4 = { data: items1, rowSize: rowSize2, headerIndices: [], hasGuildData: stateFromStores, hasSearchData: false, hasSearchUpsell: false };
    let item = emojiSections1.forEach((isSectionNitroLocked, index) => {
      let tmp2 = tmp;
      let tmp3 = tmp2;
      if (tmp3) {
        isSectionNitroLocked = undefined;
        if (emojiSections1[index - 1] != null) {
          isSectionNitroLocked = tmp5.isSectionNitroLocked;
        }
        tmp3 = true !== isSectionNitroLocked;
      }
      if (tmp2) {
        let isSectionNitroLocked1;
        if (emojiSections1[index + 1] != null) {
          isSectionNitroLocked1 = tmp9.isSectionNitroLocked;
        }
        tmp2 = true !== isSectionNitroLocked1;
      }
      if (isSectionNitroLocked.type !== constants2.NATIVE_SECTION) {
        let num6;
        if (tmp3) {
          const push = items1.push;
          const tmp19 = rowSize(isNativeEmojiPickerEnabled[8]);
          push(tmp19(emojiSections(isNativeEmojiPickerEnabled[9]).PremiumUpsellSectionDividerPosition.START));
        }
        if (null != isSectionNitroLocked.label) {
          const obj = { type: constants3.TITLE, title: isSectionNitroLocked.label, isSectionNitroLocked: true === isSectionNitroLocked.isSectionNitroLocked };
          items1.push(obj);
          const headerIndices = obj4.headerIndices;
          headerIndices.push(items1.length - 1);
        }
        const _Math = Math;
        const rounded = Math.ceil(isSectionNitroLocked.emojis.length / rowSize2);
        for (let num6 = 0; num6 < rounded; num6 = num6 + 1) {
          if (isNativeEmojiPickerEnabled2) {
            let tmp37 = 0 === num6;
            if (0 === num6) {
              tmp37 = isSectionNitroLocked.type === constants2.EMOJI;
            }
            if (tmp37) {
              let hasSearchData = obj4.hasSearchData;
              let tmp39 = obj4;
              if (!hasSearchData) {
                hasSearchData = isSectionNitroLocked.footer === constants.SEARCH_RESULTS;
              }
              if (!hasSearchData) {
                hasSearchData = isSectionNitroLocked.footer === constants.PREMIUM_UPSELL;
              }
              tmp39.hasSearchData = hasSearchData;
              let arr11 = items1.push(rowSize(isNativeEmojiPickerEnabled[10])(isSectionNitroLocked));
            }
          } else {
            let type = isSectionNitroLocked.type;
            if (constants2.EMOJI === type) {
              let obj3 = { type: constants3.EMOJI_ROW, row: num6, emojis: null, emojisDisabled: null, footer: null, isSectionNitroLocked: tmp };
              ({ emojis: obj2.emojis, emojisDisabled: obj2.emojisDisabled, footer: obj2.footer } = isSectionNitroLocked);
              let arr12 = items1.push(obj3);
            } else if (tmp33.NSFW === type) {
              obj4 = { type: constants3.EMOJI_ROW_NSFW, isSectionNitroLocked: tmp };
              let arr13 = items1.push(obj4);
            }
          }
        }
        if (isSectionNitroLocked.footer === constants.PREMIUM_UPSELL) {
          obj4.hasSearchUpsell = true;
          const obj7 = { type: constants3.FOOTER_UPSELL, id: tmp46.PREMIUM_UPSELL, isSectionNitroLocked: true === isSectionNitroLocked.isSectionNitroLocked };
          items1.push(obj7);
        }
        if (tmp2) {
          const push2 = items1.push;
          const tmp54 = rowSize(isNativeEmojiPickerEnabled[8]);
          push2(tmp54(emojiSections(isNativeEmojiPickerEnabled[9]).PremiumUpsellSectionDividerPosition.END));
        }
      } else {
        items1.push(rowSize(isNativeEmojiPickerEnabled[7])(isSectionNitroLocked, tmp3, tmp2));
      }
    });
    cResult[3] = emojiSections1;
    const num6 = 4;
    cResult[4] = stateFromStores;
    cResult[5] = isNativeEmojiPickerEnabled2;
    cResult[6] = rowSize2;
    cResult[7] = obj4;
    tmp16 = obj4;
  } else {
    emojiSections = emojiSections.emojiSections;
    const rowSize = emojiSections.rowSize;
    isNativeEmojiPickerEnabled = emojiSections.isNativeEmojiPickerEnabled;
    let tmp2 = emojiSections;
    let tmp3 = isNativeEmojiPickerEnabled;
    obj = emojiSections(isNativeEmojiPickerEnabled[6]);
    const items2 = [EmojiStore];
    const stateFromStores1 = obj.useStateFromStores(items2, () => EmojiStore.loadState === LoadState.Loaded || !isNativeEmojiPickerEnabled);
    const items3 = [stateFromStores1, emojiSections, rowSize, isNativeEmojiPickerEnabled];
    memo = stateFromStores1.useMemo(() => {
      let obj2;
      let obj = { type: constants3.PLACEHOLDER, isSectionNitroLocked: false };
      const items = [obj];
      obj2 = { data: items, rowSize: obj2, headerIndices: [], hasGuildData: stateFromStores1, hasSearchData: false, hasSearchUpsell: false };
      const item = items.forEach((isSectionNitroLocked, index) => {
        let obj;
        let tmp2 = tmp;
        let tmp3 = tmp2;
        if (tmp3) {
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
          let num6;
          if (tmp3) {
            const push = items.push;
            const tmp19 = getEmojiPickerDataRowPremiumInlineRoadblockDefault;
            push(tmp19(PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.START));
          }
          if (null != isSectionNitroLocked.label) {
            obj = { type: obj.TITLE, title: isSectionNitroLocked.label, isSectionNitroLocked: true === isSectionNitroLocked.isSectionNitroLocked };
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
                let hasSearchData = obj2.hasSearchData || isSectionNitroLocked.footer === EmojiCategoryTypes.SEARCH_RESULTS || isSectionNitroLocked.footer === EmojiCategoryTypes.PREMIUM_UPSELL;
                obj2.hasSearchData = hasSearchData;
                let arr11 = items.push(getEmojiPickerDataRowItemSlimEmojiDefault(isSectionNitroLocked));
              }
            } else {
              let type = isSectionNitroLocked.type;
              if (constants.EMOJI === type) {
                let obj3 = { type: obj.EMOJI_ROW, row: num6, emojis: null, emojisDisabled: null, footer: null, isSectionNitroLocked: tmp };
                ({ emojis: obj2.emojis, emojisDisabled: obj2.emojisDisabled, footer: obj2.footer } = isSectionNitroLocked);
                let arr12 = items.push(obj3);
              } else if (tmp33.NSFW === type) {
                let obj4 = { type: obj.EMOJI_ROW_NSFW, isSectionNitroLocked: tmp };
                let arr13 = items.push(obj4);
              }
            }
          }
          if (isSectionNitroLocked.footer === EmojiCategoryTypes.PREMIUM_UPSELL) {
            obj2.hasSearchUpsell = true;
            const obj7 = { type: obj.FOOTER_UPSELL, id: tmp46.PREMIUM_UPSELL, isSectionNitroLocked: true === isSectionNitroLocked.isSectionNitroLocked };
            items.push(obj7);
          }
          if (tmp2) {
            const push2 = items.push;
            const tmp54 = getEmojiPickerDataRowPremiumInlineRoadblockDefault;
            push2(tmp54(PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.END));
          }
        } else {
          items.push(getEmojiPickerDataRowItemNativeSectionDefault(isSectionNitroLocked, tmp3, tmp2));
        }
      });
      return obj2;
    }, items3);
  }
  return memo;
};
export { EmojiPickerItemType };