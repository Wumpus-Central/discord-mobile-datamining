// === Module 8762: getFastestListVisibleItemsDefault ===

// Module 8762 (getFastestListVisibleItemsDefault)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/fastest_list/getFastestListVisibleItemsDefault.tsx");

export default function getFastestListVisibleItemsDefault(arg0) {
  ({ estimatedListSize, sectionsVersioned } = arg0);
  ({ itemSizes, listHeaderSize, sections, sectionFooterSizes, sectionHeaderSizes } = sectionsVersioned);
  const obj = { sectionsId: sectionsVersioned.sectionsId, sectionStart: 0, sectionEnd: 0, itemStart: 0, itemEnd: -1 };
  if (listHeaderSize >= estimatedListSize) {
    return obj;
  } else {
    let num2 = 0;
    if (0 < sections.length) {
      while (true) {
        let tmp4 = num2;
        let tmp5 = listHeaderSize;
        let sum2 = listHeaderSize;
        if (0 !== sections[num2]) {
          obj.sectionEnd = num2;
          obj.itemEnd = 0;
          let sum = listHeaderSize + (tmp3 ? sectionHeaderSizes[0] : sectionHeaderSizes[num2]);
          if (sum >= estimatedListSize) {
            break;
          } else {
            let num = 0;
            let tmp8 = sum;
            let tmp9 = sum;
            if (0 < sections[num2]) {
              while (true) {
                obj.itemEnd = num;
                let tmp10 = num;
                let tmp11 = tmp8;
                if (tmp) {
                  let first = itemSizes[0].sizes[0];
                } else {
                  first = itemSizes[num2].sizes[num];
                }
                let sum1 = tmp8 + first;
                if (sum1 >= estimatedListSize) {
                  break;
                } else {
                  num = num + 1;
                  tmp8 = sum1;
                  tmp9 = sum1;
                  continue;
                }
              }
              return obj;
            }
            sum2 = tmp9 + (tmp2 ? sectionFooterSizes[0] : sectionFooterSizes[num2]);
            if (sum2 >= estimatedListSize) {
              return obj;
            }
          }
        }
        num2 = num2 + 1;
        listHeaderSize = sum2;
      }
      return obj;
    }
    return obj;
  }
};