// === Module 10416: useStickerPickerListData ===

// Module 10416 (useStickerPickerListData)
import _modDef12 from "module_12" /* 12 */;
import StickersTypes from "StickersTypes" /* 5268 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 10294 */;
import noop from "module_19" /* 19 */;

require = fn;
let useStickerPickerStore = fn(10390).useStickerPickerStore;
const StickerPickerConstants = fn(10273);
({ MIN_MARGIN: hasOwnProperty, ROW_HEIGHT: metroRequire, STICKER_SIZE: closure_7, LABEL_HEIGHT } = StickerPickerConstants);
const StickerPickerSectionType = { STICKERS: 0, [0]: "STICKERS", NSFW: 1, [1]: "NSFW" };
let closure_9 = LABEL_HEIGHT + 2 * fn(1219).PADDING_VERTICAL;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/useStickerPickerListData.tsx");

export default function useStickerPickerListData(containerWidth) {
  containerWidth = containerWidth.containerWidth;
  const searchResults = containerWidth.searchResults;
  const stickerFormats = containerWidth.stickerFormats;
  useStickerPickerStore = undefined;
  const stickerCategories = containerWidth(stickerFormats[4]).useStickerCategories(containerWidth.channel);
  const tmp2 = useStickerPickerStore((packToScrollTo) => packToScrollTo.packToScrollTo);
  useStickerPickerStore = tmp2;
  let items = [containerWidth, stickerCategories, stickerFormats, searchResults, tmp2];
  return stickerCategories.useMemo(() => {
    const rounded = Math.floor((c0 - closure_1_5) / (closure_1_7 + closure_1_5));
    c0 = rounded;
    const items = [];
    const items1 = [];
    const items2 = [];
    const items3 = [];
    packToScrollToIndex = undefined;
    if (null != items) {
      const intl = containerWidth(stickerFormats[6]).intl;
      let str = intl.string(containerWidth(stickerFormats[6]).t["zkoeq/"]);
      if (str === undefined) {
        str = "";
      }
      let found = items.filter((format_type) => items2.includes(format_type.format_type));
      let obj = searchResults(stickerFormats[5]);
      let chunkResult = obj.chunk(found, rounded);
      obj = { type: constants.STICKERS, stickersByRow: chunkResult };
      items3.push(obj);
      items.push(chunkResult.length);
      items2.push(str);
    } else {
      const mapped = items3.map((id, index) => {
        if (closure_4 === id.id) {
          closure_4 = index;
        }
        let shouldNSFWGateGuildResult = id.type === StickersTypes.StickerCategoryTypes.GUILD;
        if (shouldNSFWGateGuildResult) {
          shouldNSFWGateGuildResult = age_gate_AgeGateUtils.shouldNSFWGateGuild(id.id);
          const tmp2Result = age_gate_AgeGateUtils;
        }
        ({ stickers, name } = id);
        if (name === undefined) {
          name = "";
        }
        if (true === shouldNSFWGateGuildResult) {
          let obj = { type: null, stickersByRow: null };
          obj.type = obj.NSFW;
          obj.stickersByRow = [];
          items3.push(obj);
          items.push(1);
        } else {
          const found = stickers.filter((format_type) => items2.includes(format_type.format_type));
          const chunkResult = _modDef12.chunk(found, c0);
          obj = { type: null, stickersByRow: null };
          obj.type = obj.STICKERS;
          obj.stickersByRow = chunkResult;
          items3.push(obj);
          items.push(chunkResult.length);
        }
        items2.push(name);
      });
      const push = items1.push;
      c0 = 0;
      const items4 = [];
      HermesBuiltin.arraySpread(items.map((item, index) => {
        if (0 === index) {
          if (0 === item) {
            return 0;
          }
        }
        const sum = item * rowHeight + sectionSize + 12 + c0;
        c0 = sum;
        return sum;
      }), 0);
      HermesBuiltin.apply(items4, items1);
    }
    obj = { sections: items, sectionHeights: items1, sectionSize, sectionFooterSize: 12, sectionLabels: items2, rowHeight, rowSize: rounded, rowsBySection: items3, packToScrollToIndex };
    return obj;
  }, items);
};
export { StickerPickerSectionType };