// === Module 10144: useStickerPickerListData ===

// Module 10144 (useStickerPickerListData)
import _modDef12 from "module_12" /* 12 */;
import StickersTypes from "StickersTypes" /* 5429 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 9899 */;
import noop from "module_19" /* 19 */;

require = fn;
let useStickerPickerStore = fn(10114).useStickerPickerStore;
const StickerPickerConstants = fn(10082);
({ MIN_MARGIN: hasOwnProperty, ROW_HEIGHT: metroRequire, STICKER_SIZE: closure_7, LABEL_HEIGHT } = StickerPickerConstants);
const StickerPickerSectionType = { STICKERS: 0, [0]: "STICKERS", NSFW: 1, [1]: "NSFW" };
const sectionSize = LABEL_HEIGHT + 2 * fn(1229).PADDING_VERTICAL;
let closure_10 = fn(9908).PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + fn(9908).PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/useStickerPickerListData.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = stickerFormats(items3[6]).c(30);
  ({ searchResults, stickerFormats } = arg0);
  ({ channel, containerWidth } = arg0);
  let obj = stickerFormats(items3[6]);
  const stickerCategories = stickerFormats(items3[7]).useStickerCategories(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(packToScrollTo) {
      return packToScrollTo.packToScrollTo;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = items2(first);
  rowHeight = tmp5;
  let obj2 = stickerFormats(items3[7]);
  const mobileStickerPickerUpsellRestyleEnabled = stickerFormats(items3[8]).useMobileStickerPickerUpsellRestyleEnabled("native.useStickerPickerListData");
  rounded = Math.floor((containerWidth - items) / (rounded + items));
  if (cResult[1] === tmp5) {
    if (cResult[2] === rounded) {
      if (cResult[3] === searchResults) {
        if (cResult[4] === stickerCategories) {
          if (cResult[5] === stickerFormats) {
            if (cResult[6] === mobileStickerPickerUpsellRestyleEnabled) {
              let tmp8 = cResult[7];
              let tmp9 = cResult[8];
              importDefault = cResult[9];
              items3 = cResult[10];
              let tmp11 = cResult[11];
              let tmp12 = cResult[12];
              let tmp13 = cResult[13];
              let items1 = cResult[14];
              items2 = cResult[15];
              items = cResult[16];
            }
            if (cResult[18] === tmp8) {
              if (cResult[19] === tmp9) {
                if (cResult[20] === importDefault) {
                  if (cResult[21] === rounded) {
                    if (cResult[22] === tmp10) {
                      if (cResult[23] === tmp11) {
                        if (cResult[24] === tmp12) {
                          if (cResult[25] === tmp13) {
                            if (cResult[26] === tmp14) {
                              if (cResult[27] === tmp15) {
                                if (cResult[28] === tmp16) {
                                  let tmp30 = cResult[29];
                                }
                                return tmp30;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            let obj3 = { sections: tmp16, sectionHeights: tmp13, sectionSize, sectionFooterSize: 12, sectionFooterSizes: tmp12, sectionDividerPositions: tmp11, listHeaderDividerPosition: tmp8, listHeaderSize: tmp9, sectionLabels: tmp14, sectionNitroLocked: tmp15, rowHeight, rowSize: rounded, rowsBySection: tmp10, packToScrollToIndex: importDefault };
            cResult[18] = tmp8;
            cResult[19] = tmp9;
            cResult[20] = importDefault;
            cResult[21] = rounded;
            cResult[22] = tmp10;
            cResult[23] = tmp11;
            cResult[24] = tmp12;
            cResult[25] = tmp13;
            cResult[26] = tmp14;
            cResult[27] = tmp15;
            cResult[28] = tmp16;
            cResult[29] = obj3;
            tmp30 = obj3;
          }
        }
      }
    }
  }
  items = [];
  items1 = [];
  items2 = [];
  items3 = [];
  importDefault = undefined;
  function pushCategory(nitroLocked, intl, arg2, arg3) {
    let str = "";
    if (undefined !== intl) {
      str = intl;
    }
    if (true === arg2) {
      const obj2 = { type: obj.NSFW, stickersByRow: [] };
      items3.push(obj2);
      items.push(1);
    } else {
      const found = nitroLocked.filter((format_type) => stickerFormats.includes(format_type.format_type));
      obj = _modDef12;
      const chunkResult = obj.chunk(found, rounded);
      const obj3 = { type: obj.STICKERS, stickersByRow: chunkResult };
      items3.push(obj3);
      items.push(chunkResult.length);
    }
    items1.push(str);
    items2.push(undefined !== arg3 && arg3);
    const tmp = undefined !== arg3 && arg3;
  }
  if (null != searchResults) {
    let str = "";
    if (!mobileStickerPickerUpsellRestyleEnabled) {
      const intl = stickerFormats(tmp2[10]).intl;
      str = intl.string(stickerFormats(tmp2[10]).t["zkoeq/"]);
    }
    if (searchResults.rest.length > 0) {
      pushCategory(searchResults.rest, str);
    }
    if (searchResults.nitroLocked.length > 0) {
      const intl2 = stickerFormats(tmp2[10]).intl;
      pushCategory(searchResults.nitroLocked, intl2.string(stickerFormats(tmp2[10]).t.pAF6xE));
    }
  } else {
    const mapped = stickerCategories.map((id, index) => {
      if (closure_6 === id.id) {
        closure_1 = index;
      }
      let shouldNSFWGateGuildResult = id.type === StickersTypes.StickerCategoryTypes.GUILD;
      if (shouldNSFWGateGuildResult) {
        shouldNSFWGateGuildResult = age_gate_AgeGateUtils.shouldNSFWGateGuild(id.id);
        const tmp2Result = age_gate_AgeGateUtils;
      }
      pushCategory(id.stickers, id.name, shouldNSFWGateGuildResult, true === id.isNitroLocked);
    });
  }
  closure_129_0 = items2;
  let START = null;
  if (true === items2[0]) {
    START = stickerFormats(tmp2[4]).PremiumUpsellSectionDividerPosition.START;
  }
  const mapped1 = items2.map((item, index) => {
    let flag = mapped2[index + 1];
    if (flag == null) {
      flag = false;
    }
    if (item === flag) {
      return null;
    } else {
      const PremiumUpsellSectionDividerPosition = containerWidth(stickerFormats[4]).PremiumUpsellSectionDividerPosition;
    }
  });
  let num3 = 0;
  if (null != START) {
    num3 = closure_10;
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b(arg0) {
      let num = 12;
      if (null != arg0) {
        num = closure_1_10;
      }
      return num;
    };
    cResult[17] = fn2;
    let tmp21 = fn2;
  } else {
    tmp21 = cResult[17];
  }
  const items4 = [];
  const mapped2 = mapped1.map(tmp21);
  if (null == searchResults) {
    const push = items4.push;
    closure_130_0 = mapped2;
    closure_130_1 = num3;
    const items5 = [];
    HermesBuiltin.arraySpread(items.map((item, index) => {
      if (0 === index) {
        if (0 === item) {
          return 0;
        }
      }
      sum = item * rowHeight + sectionSize + mapped2[index] + sum;
      return sum;
    }), 0);
    HermesBuiltin.apply(items5, items4);
  }
  cResult[1] = tmp5;
  cResult[2] = rounded;
  cResult[3] = searchResults;
  cResult[4] = stickerCategories;
  cResult[5] = stickerFormats;
  cResult[6] = mobileStickerPickerUpsellRestyleEnabled;
  cResult[7] = START;
  cResult[8] = num3;
  cResult[9] = importDefault;
  cResult[10] = items3;
  cResult[11] = mapped1;
  cResult[12] = mapped2;
  cResult[13] = items4;
  cResult[14] = items1;
  cResult[15] = items2;
  cResult[16] = items;
  tmp13 = items4;
  tmp12 = mapped2;
  tmp11 = mapped1;
  tmp9 = num3;
  tmp8 = START;
  const tmpResult = stickerFormats(items3[8]);
}) : ((containerWidth) => {
  containerWidth = containerWidth.containerWidth;
  const searchResults = containerWidth.searchResults;
  const stickerFormats = containerWidth.stickerFormats;
  useStickerPickerStore = undefined;
  const stickerCategories = containerWidth(stickerFormats[7]).useStickerCategories(containerWidth.channel);
  const tmp2 = useStickerPickerStore((packToScrollTo) => packToScrollTo.packToScrollTo);
  useStickerPickerStore = tmp2;
  let obj = containerWidth(stickerFormats[7]);
  const mobileStickerPickerUpsellRestyleEnabled = containerWidth(stickerFormats[8]).useMobileStickerPickerUpsellRestyleEnabled("native.useStickerPickerListData");
  let items = [containerWidth, stickerCategories, stickerFormats, searchResults, tmp2, mobileStickerPickerUpsellRestyleEnabled];
  return stickerCategories.useMemo(() => {
    function pushCategory(nitroLocked) {
      let str = intl;
      if (intl === undefined) {
        str = "";
      }
      let flag = arg3;
      if (arg3 === undefined) {
        flag = false;
      }
      if (true === arg2) {
        const obj = { type: null, stickersByRow: null };
        obj.type = obj.NSFW;
        obj.stickersByRow = [];
        items3.push(obj);
        num2.push(1);
      } else {
        const found = nitroLocked.filter((format_type) => items1.includes(format_type.format_type));
        const chunkResult = _modDef12.chunk(found, mapped2);
        const obj3 = { type: obj.STICKERS, stickersByRow: chunkResult };
        items3.push(obj3);
        num2.push(chunkResult.length);
      }
      items1.push(str);
      items2.push(flag);
    }
    const rounded = Math.floor((mapped2 - mobileStickerPickerUpsellRestyleEnabled) / (closure_1_7 + mobileStickerPickerUpsellRestyleEnabled));
    mapped2 = rounded;
    const items = [];
    let num2 = items;
    const items1 = [];
    const items2 = [];
    const items3 = [];
    packToScrollToIndex = undefined;
    if (null != num2) {
      let str = "";
      if (!packToScrollToIndex) {
        const intl = containerWidth(stickerFormats[10]).intl;
        str = intl.string(containerWidth(stickerFormats[10]).t["zkoeq/"]);
      }
      if (tmp2.rest.length > 0) {
        pushCategory(tmp2.rest, str);
      }
      if (tmp2.nitroLocked.length > 0) {
        const intl2 = containerWidth(stickerFormats[10]).intl;
        pushCategory(tmp2.nitroLocked, intl2.string(containerWidth(stickerFormats[10]).t.pAF6xE));
      }
    } else {
      const mapped = items2.map((id, index) => {
        if (closure_4 === id.id) {
          closure_5 = index;
        }
        let shouldNSFWGateGuildResult = id.type === StickersTypes.StickerCategoryTypes.GUILD;
        if (shouldNSFWGateGuildResult) {
          shouldNSFWGateGuildResult = age_gate_AgeGateUtils.shouldNSFWGateGuild(id.id);
          const tmp2Result = age_gate_AgeGateUtils;
        }
        pushCategory(id.stickers, id.name, shouldNSFWGateGuildResult, true === id.isNitroLocked);
      });
    }
    mapped2 = items2;
    let START = null;
    if (true === items2[0]) {
      START = containerWidth(stickerFormats[4]).PremiumUpsellSectionDividerPosition.START;
    }
    const mapped1 = items2.map((item, index) => {
      let flag = mapped2[index + 1];
      if (flag == null) {
        flag = false;
      }
      if (item === flag) {
        return null;
      } else {
        const PremiumUpsellSectionDividerPosition = containerWidth(stickerFormats[4]).PremiumUpsellSectionDividerPosition;
      }
    });
    num2 = 0;
    if (null != START) {
      num2 = closure_1_10;
    }
    const items4 = [];
    mapped2 = mapped1.map((item) => {
      let num = 12;
      if (null != item) {
        num = closure_1_10;
      }
      return num;
    });
    if (null == num2) {
      const push = items4.push;
      const items5 = [];
      HermesBuiltin.arraySpread(items.map((item, index) => {
        if (0 === index) {
          if (0 === item) {
            return 0;
          }
        }
        sum = item * rowHeight + sectionSize + mapped2[index] + sum;
        return sum;
      }), 0);
      HermesBuiltin.apply(items5, items4);
    }
    return { sections: items, sectionHeights: items4, sectionSize, sectionFooterSize: 12, sectionFooterSizes: mapped2, sectionDividerPositions: mapped1, listHeaderDividerPosition: START, listHeaderSize: num2, sectionLabels: items1, sectionNitroLocked: items2, rowHeight, rowSize: rounded, rowsBySection: items3, packToScrollToIndex };
  }, items);
});
export { StickerPickerSectionType };