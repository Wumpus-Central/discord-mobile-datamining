// === Module 10157: useStickerPickerListData ===

// Module 10157 (useStickerPickerListData)
import _modDef12 from "module_12" /* 12 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import StickersTypes from "StickersTypes" /* 5436 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 9912 */;
import PremiumUpsellSectionDivider from "PremiumUpsellSectionDivider" /* 9921 */;
import StickerPickerStore from "StickerPickerStore" /* 10127 */;
import react from "react" /* 19 */;
import StickerPickerConstants from "StickerPickerConstants" /* 10095 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c5, importDefault, packToScrollToIndex, rowHeight;

let LABEL_HEIGHT;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let useStickerPickerStore = StickerPickerStore.useStickerPickerStore;
({ MIN_MARGIN: hasOwnProperty, ROW_HEIGHT: metroRequire, STICKER_SIZE: metroImportDefault, LABEL_HEIGHT } = StickerPickerConstants);
const StickerPickerSectionType = { STICKERS: 0, [0]: "STICKERS", NSFW: 1, [1]: "NSFW" };
const sectionSize = LABEL_HEIGHT + 2 * ExpressionPickerConstants.PADDING_VERTICAL;
let closure_10 = PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let closure_6;
  let containerWidth;
  let first;
  let items;
  let items1;
  let items2;
  let items3;
  let rounded;
  let searchResults;
  let stickerFormats;
  let tmp22;
  let obj = stickerFormats(items3[6]);
  const cResult = obj.c(30);
  ({ searchResults, stickerFormats } = arg0);
  ({ channel, containerWidth } = arg0);
  let obj2 = stickerFormats(items3[7]);
  const stickerCategories = obj2.useStickerCategories(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(packToScrollTo) {
      return packToScrollTo.packToScrollTo;
    };
    let num = 0;
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = items2(first);
  rowHeight = tmp6;
  let tmp2Result = stickerFormats(tmp3[8]);
  const mobileStickerPickerUpsellRestyleEnabled = tmp2Result.useMobileStickerPickerUpsellRestyleEnabled("native.useStickerPickerListData");
  rounded = Math.floor((containerWidth - items) / (rounded + items));
  if (cResult[1] === tmp6) {
    if (cResult[2] === rounded) {
      if (cResult[3] === searchResults) {
        if (cResult[4] === stickerCategories) {
          if (cResult[5] === stickerFormats) {
            let tmp9;
            let tmp10;
            let tmp12;
            let tmp13;
            let tmp14;
            if (cResult[6] === mobileStickerPickerUpsellRestyleEnabled) {
              tmp9 = cResult[7];
              tmp10 = cResult[8];
              importDefault = cResult[9];
              items3 = cResult[10];
              tmp12 = cResult[11];
              tmp13 = cResult[12];
              tmp14 = cResult[13];
              items1 = cResult[14];
              items2 = cResult[15];
              items = cResult[16];
            }
            if (cResult[18] === tmp9) {
              if (cResult[19] === tmp10) {
                if (cResult[20] === importDefault) {
                  if (cResult[21] === rounded) {
                    if (cResult[22] === tmp11) {
                      if (cResult[23] === tmp12) {
                        if (cResult[24] === tmp13) {
                          if (cResult[25] === tmp14) {
                            if (cResult[26] === tmp15) {
                              if (cResult[27] === tmp16) {
                                let tmp31;
                                if (cResult[28] === tmp17) {
                                  tmp31 = cResult[29];
                                }
                                return tmp31;
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
            let obj3 = { sections: tmp17, sectionHeights: tmp14, sectionSize, sectionFooterSize: 12, sectionFooterSizes: tmp13, sectionDividerPositions: tmp12, listHeaderDividerPosition: tmp9, listHeaderSize: tmp10, sectionLabels: tmp15, sectionNitroLocked: tmp16, rowHeight, rowSize: rounded, rowsBySection: tmp11, packToScrollToIndex: importDefault };
            cResult[18] = tmp9;
            cResult[19] = tmp10;
            cResult[20] = importDefault;
            cResult[21] = rounded;
            cResult[22] = tmp11;
            cResult[23] = tmp12;
            cResult[24] = tmp13;
            cResult[25] = tmp14;
            cResult[26] = tmp15;
            cResult[27] = tmp16;
            cResult[28] = tmp17;
            cResult[29] = obj3;
            tmp31 = obj3;
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
    let obj;
    let str = "";
    if (undefined !== intl) {
      str = intl;
    }
    const tmp = undefined !== arg3 && arg3;
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
    items2.push(tmp);
  }
  if (null != searchResults) {
    let str = "";
    if (!mobileStickerPickerUpsellRestyleEnabled) {
      const intl = stickerFormats(tmp3[10]).intl;
      str = intl.string(stickerFormats(tmp3[10]).t["zkoeq/"]);
    }
    if (searchResults.rest.length > 0) {
      pushCategory(searchResults.rest, str);
    }
    if (searchResults.nitroLocked.length > 0) {
      const nitroLocked = searchResults.nitroLocked;
      const intl2 = stickerFormats(tmp3[10]).intl;
      pushCategory(nitroLocked, intl2.string(stickerFormats(items3[10]).t.pAF6xE));
    }
  } else {
    const mapped = stickerCategories.map((id, index) => {
      if (closure_6 === id.id) {
        c1 = index;
      }
      let shouldNSFWGateGuildResult = id.type === StickersTypes.StickerCategoryTypes.GUILD;
      if (shouldNSFWGateGuildResult) {
        const tmp2Result = age_gate_AgeGateUtils;
        shouldNSFWGateGuildResult = tmp2Result.shouldNSFWGateGuild(id.id);
      }
      pushCategory(id.stickers, id.name, shouldNSFWGateGuildResult, true === id.isNitroLocked);
    });
  }
  let START = null;
  if (true === items2[0]) {
    START = stickerFormats(tmp3[4]).PremiumUpsellSectionDividerPosition.START;
  }
  const mapped1 = items2.map((item, index) => {
    let flag = items2[index + 1];
    if (flag == null) {
      flag = false;
    }
    let tmp = null;
    if (item !== flag) {
      const PremiumUpsellSectionDividerPosition = rounded(items1[4]).PremiumUpsellSectionDividerPosition;
      tmp = flag ? PremiumUpsellSectionDividerPosition.START : PremiumUpsellSectionDividerPosition.END;
    }
    return tmp;
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
    tmp22 = fn2;
  } else {
    tmp22 = cResult[17];
  }
  const items4 = [];
  const mapped2 = mapped1.map(tmp22);
  if (null == searchResults) {
    const push = items4.push;
    const items5 = [];
    HermesBuiltin.arraySpread(items5, items.map((item, index) => {
      if (0 === index) {
        if (0 === item) {
          return 0;
        }
      }
      sum = item * pushCategory + sectionSize + mapped2[index] + sum;
      return sum;
    }), 0);
    HermesBuiltin.apply(push, items5, items4);
  }
  cResult[1] = tmp6;
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
  tmp14 = items4;
  tmp13 = mapped2;
  tmp12 = mapped1;
  tmp10 = num3;
  tmp9 = START;
}) : ((containerWidth) => {
  let closure_4;
  containerWidth = containerWidth.containerWidth;
  const searchResults = containerWidth.searchResults;
  const stickerFormats = containerWidth.stickerFormats;
  useStickerPickerStore = undefined;
  const channel = containerWidth.channel;
  let obj = containerWidth(stickerFormats[7]);
  const stickerCategories = obj.useStickerCategories(channel);
  const tmp2 = useStickerPickerStore((packToScrollTo) => packToScrollTo.packToScrollTo);
  useStickerPickerStore = tmp2;
  let obj2 = containerWidth(stickerFormats[8]);
  const mobileStickerPickerUpsellRestyleEnabled = obj2.useMobileStickerPickerUpsellRestyleEnabled("native.useStickerPickerListData");
  let items = [containerWidth, stickerCategories, stickerFormats, searchResults, tmp2, mobileStickerPickerUpsellRestyleEnabled];
  return stickerCategories.useMemo(() => {
    let rounded;
    function pushCategory(nitroLocked) {
      let obj;
      let str = intl;
      if (intl === undefined) {
        str = "";
      }
      let flag = arg3;
      if (arg3 === undefined) {
        flag = false;
      }
      if (true === arg2) {
        obj = { type: obj.NSFW, stickersByRow: [] };
        items3.push(obj);
        items.push(1);
      } else {
        const found = nitroLocked.filter((format_type) => items1.includes(format_type.format_type));
        const obj2 = _modDef12;
        const chunkResult = obj2.chunk(found, rounded);
        const obj3 = { type: obj.STICKERS, stickersByRow: chunkResult };
        items3.push(obj3);
        items.push(chunkResult.length);
      }
      items1.push(str);
      items2.push(flag);
    }
    rounded = Math.floor((rounded - mobileStickerPickerUpsellRestyleEnabled) / (closure_1_7 + mobileStickerPickerUpsellRestyleEnabled));
    const items = [];
    const items1 = [];
    const items2 = [];
    const items3 = [];
    packToScrollToIndex = undefined;
    if (null != items) {
      let str = "";
      if (!packToScrollToIndex) {
        const intl = containerWidth(stickerFormats[10]).intl;
        str = intl.string(containerWidth(stickerFormats[10]).t["zkoeq/"]);
      }
      let num = 0;
      if (items.rest.length > 0) {
        pushCategory(items.rest, str);
      }
      if (items.nitroLocked.length > 0) {
        const nitroLocked = tmp3.nitroLocked;
        const intl2 = containerWidth(stickerFormats[10]).intl;
        pushCategory(nitroLocked, intl2.string(containerWidth(stickerFormats[10]).t.pAF6xE));
      }
    } else {
      const mapped = items2.map((id, index) => {
        if (closure_4 === id.id) {
          c5 = index;
        }
        let shouldNSFWGateGuildResult = id.type === StickersTypes.StickerCategoryTypes.GUILD;
        if (shouldNSFWGateGuildResult) {
          const tmp2Result = age_gate_AgeGateUtils;
          shouldNSFWGateGuildResult = tmp2Result.shouldNSFWGateGuild(id.id);
        }
        pushCategory(id.stickers, id.name, shouldNSFWGateGuildResult, true === id.isNitroLocked);
      });
    }
    let START = null;
    if (true === items2[0]) {
      START = containerWidth(stickerFormats[4]).PremiumUpsellSectionDividerPosition.START;
    }
    const mapped1 = items2.map((item, index) => {
      let flag = items2[index + 1];
      if (flag == null) {
        flag = false;
      }
      let tmp = null;
      if (item !== flag) {
        const PremiumUpsellSectionDividerPosition = rounded(items1[4]).PremiumUpsellSectionDividerPosition;
        tmp = flag ? PremiumUpsellSectionDividerPosition.START : PremiumUpsellSectionDividerPosition.END;
      }
      return tmp;
    });
    let num2 = 0;
    if (null != START) {
      num2 = closure_1_10;
    }
    const items4 = [];
    const mapped2 = mapped1.map((item) => {
      let num = 12;
      if (null != item) {
        num = closure_1_10;
      }
      return num;
    });
    if (null == items) {
      const push = items4.push;
      let sum = num2;
      const items5 = [];
      HermesBuiltin.arraySpread(items5, items.map((item, index) => {
        if (0 === index) {
          if (0 === item) {
            return 0;
          }
        }
        sum = item * pushCategory + sectionSize + mapped2[index] + sum;
        return sum;
      }), 0);
      HermesBuiltin.apply(push, items5, items4);
    }
    let obj = { sections: items, sectionHeights: items4, sectionSize, sectionFooterSize: 12, sectionFooterSizes: mapped2, sectionDividerPositions: mapped1, listHeaderDividerPosition: START, listHeaderSize: num2, sectionLabels: items1, sectionNitroLocked: items2, rowHeight, rowSize: rounded, rowsBySection: items3, packToScrollToIndex };
    return obj;
  }, items);
});
const result = size.fileFinishedImporting("modules/stickers/native/useStickerPickerListData.tsx");

export default tmp3;
export { StickerPickerSectionType };