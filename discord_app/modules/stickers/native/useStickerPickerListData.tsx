// === Module 10505: useStickerPickerListData ===

// Module 10505 (useStickerPickerListData)
import _modDef12 from "module_12" /* 12 */;
import StickersTypes from "StickersTypes" /* 5319 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 10383 */;
import noop from "module_19" /* 19 */;

require = fn;
let useStickerPickerStore = fn(10479).useStickerPickerStore;
const StickerPickerConstants = fn(10362);
({ MIN_MARGIN: hasOwnProperty, ROW_HEIGHT: metroRequire, STICKER_SIZE: closure_7, LABEL_HEIGHT } = StickerPickerConstants);
const StickerPickerSectionType = { STICKERS: 0, [0]: "STICKERS", NSFW: 1, [1]: "NSFW" };
let closure_9 = LABEL_HEIGHT + 2 * fn(1219).PADDING_VERTICAL;
let closure_10 = fn(10395).PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + fn(10395).PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/useStickerPickerListData.tsx");

export default function useStickerPickerListData(containerWidth) {
  containerWidth = containerWidth.containerWidth;
  const searchResults = containerWidth.searchResults;
  const stickerFormats = containerWidth.stickerFormats;
  useStickerPickerStore = undefined;
  const stickerCategories = containerWidth(stickerFormats[5]).useStickerCategories(containerWidth.channel);
  const tmp2 = useStickerPickerStore((packToScrollTo) => packToScrollTo.packToScrollTo);
  useStickerPickerStore = tmp2;
  let items = [containerWidth, stickerCategories, stickerFormats, searchResults, tmp2];
  return stickerCategories.useMemo(() => {
    function pushCategory(arr) {
      let str = intl;
      if (intl === undefined) {
        str = "";
      }
      let flag = arg3;
      if (arg3 === undefined) {
        flag = false;
      }
      if (true === arg2) {
        let obj = { type: null, stickersByRow: null };
        obj.type = obj.NSFW;
        obj.stickersByRow = [];
        items3.push(obj);
        arr = num2.push(1);
      } else {
        const found = arr.filter((format_type) => items1.includes(format_type.format_type));
        const chunkResult = _modDef12.chunk(found, mapped2);
        obj = { type: null, stickersByRow: null };
        obj.type = obj.STICKERS;
        obj.stickersByRow = chunkResult;
        items3.push(obj);
        num2.push(chunkResult.length);
      }
      items1.push(str);
      items2.push(flag);
    }
    const rounded = Math.floor((mapped2 - closure_1_5) / (closure_1_7 + closure_1_5));
    mapped2 = rounded;
    const items = [];
    let num2 = items;
    const items1 = [];
    const items2 = [];
    const items3 = [];
    packToScrollToIndex = undefined;
    if (null != num2) {
      const intl = containerWidth(stickerFormats[7]).intl;
      pushCategory(tmp2, intl.string(containerWidth(stickerFormats[7]).t["zkoeq/"]));
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
};
export { StickerPickerSectionType };