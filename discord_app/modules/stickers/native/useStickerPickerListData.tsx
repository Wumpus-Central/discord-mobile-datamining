// === Module 10430: useStickerPickerListData ===

// Module 10430 (useStickerPickerListData)
import closure_3 from "noop" /* 19 */;
import { useStickerPickerStore } from "useStickerPickerStore" /* 10404 */;
import PADDING_HORIZONTAL from "PADDING_HORIZONTAL" /* 10372 */;

const require = arg1;
({ MIN_MARGIN: c5, ROW_HEIGHT: closure_6, STICKER_SIZE: error, LABEL_HEIGHT } = PADDING_HORIZONTAL);
let obj = { STICKERS: 0, [0]: "STICKERS", NSFW: 1, [1]: "NSFW" };
let closure_9 = LABEL_HEIGHT + 2 * require("ExpressionPickerViewType").PADDING_VERTICAL;
const result = require("set").fileFinishedImporting("modules/stickers/native/useStickerPickerListData.tsx");

export default function useStickerPickerListData(containerWidth) {
  containerWidth = containerWidth.containerWidth;
  const searchResults = containerWidth.searchResults;
  const stickerFormats = containerWidth.stickerFormats;
  let stickerCategories;
  useStickerPickerStore = undefined;
  stickerCategories = containerWidth(stickerFormats[4]).useStickerCategories(containerWidth.channel);
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
    c4 = undefined;
    if (null != items) {
      const intl = containerWidth(stickerFormats[6]).intl;
      let str = intl.string(containerWidth(stickerFormats[6]).t["zkoeq/"]);
      if (str === undefined) {
        str = "";
      }
      let found = items.filter((format_type) => closure_2.includes(format_type.format_type));
      obj = searchResults(stickerFormats[5]);
      let chunkResult = obj.chunk(found, rounded);
      obj = { type: null, stickersByRow: null };
      obj[0] = closure_1_8.STICKERS;
      obj[1] = chunkResult;
      items3.push(obj);
      items.push(chunkResult.length);
      items2.push(str);
      const tmp11 = stickerFormats;
    } else {
      const mapped = items3.map((id) => {
        if (c4 === id.id) {
          closure_4 = arg1;
        }
        let shouldNSFWGateGuildResult = id.type === containerWidth(stickerFormats[7]).StickerCategoryTypes.GUILD;
        if (shouldNSFWGateGuildResult) {
          shouldNSFWGateGuildResult = containerWidth(tmp3[8]).shouldNSFWGateGuild(id.id);
          const tmp2Result = containerWidth(tmp3[8]);
        }
        ({ stickers, name } = id);
        if (name === undefined) {
          name = "";
        }
        if (true === shouldNSFWGateGuildResult) {
          obj = { type: null, stickersByRow: null };
          obj[0] = closure_2_8.NSFW;
          obj[1] = [];
          items3.push(obj);
          items.push(1);
        } else {
          const found = stickers.filter((format_type) => closure_2.includes(format_type.format_type));
          const chunkResult = searchResults(tmp3[5]).chunk(found, c0);
          obj = { type: null, stickersByRow: null };
          obj[0] = closure_2_8.STICKERS;
          obj[1] = chunkResult;
          items3.push(obj);
          items.push(chunkResult.length);
          const obj2 = searchResults(tmp3[5]);
        }
        items2.push(name);
      });
      const push = items1.push;
      c0 = 0;
      const items4 = [];
      HermesBuiltin.arraySpread(items.map((arg0, arg1) => {
        if (0 === arg1) {
          if (0 === arg0) {
            return 0;
          }
        }
        const sum = arg0 * closure_1_6 + closure_1_9 + 12 + c0;
        c0 = sum;
        return sum;
      }), 0);
      HermesBuiltin.apply(items4, items1);
    }
    obj = { sections: items, sectionHeights: items1, sectionSize: closure_1_9, sectionFooterSize: 12, sectionLabels: items2, rowHeight: closure_1_6, rowSize: rounded, rowsBySection: items3, packToScrollToIndex: c4 };
    return obj;
  }, items);
};
export const StickerPickerSectionType = obj;