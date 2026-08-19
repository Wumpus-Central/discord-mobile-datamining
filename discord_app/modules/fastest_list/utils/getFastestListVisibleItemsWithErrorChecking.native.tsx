// === Module 8650: getFastestListVisibleItemsWithErrorChecking ===

// Module 8650 (getFastestListVisibleItemsWithErrorChecking)
import obj132 from "obj132" /* 2 */;
import logFastestListError from "logFastestListError" /* 8640 */;

const result = obj132.fileFinishedImporting("modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx");

export default function getFastestListVisibleItemsWithErrorChecking(arg0, sectionStart) {
  if (tmp) {
    let obj = { listId: null, sections: null, visibleItems: null };
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
  }
  return sectionStart;
};