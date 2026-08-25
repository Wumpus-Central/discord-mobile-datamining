// === Module 8695: getFastestListVisibleItemsWithErrorChecking ===

// Module 8695 (getFastestListVisibleItemsWithErrorChecking)
import set from "set" /* 2 */;
import logFastestListError from "logFastestListError" /* 8685 */;

const result = set.fileFinishedImporting("modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx");

export default function getFastestListVisibleItemsWithErrorChecking(arg0, sectionStart) {
  if (tmp) {
    let obj = logFastestListError;
    obj = { listId: null, sections: null, visibleItems: null };
    obj[0] = arg0;
    obj[1] = arg2;
    obj[2] = sectionStart;
    obj.logFastestListError("Visible items `sectionStart/End` is greater than the number of sections", obj);
  }
  if (tmp5) {
    obj = { listId: null, sections: null, visibleItems: null };
    obj[0] = arg0;
    obj[1] = arg2;
    obj[2] = sectionStart;
    logFastestListError.logFastestListError("Visible items `itemStart/End` is greater than the number of items in the first section", obj);
    const obj3 = logFastestListError;
  }
  return sectionStart;
};