// === Module 18977: InterestPickerCompletion ===

// Module 18977 (InterestPickerCompletion)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerCompletion.tsx");

export function getInterestPickerCompletion(arg0, arg1) {
  items = [];
  if (arg1) {
    let arr2 = items;
  } else {
    HermesBuiltin.arraySpread(arg0, 0);
    arr2 = items;
  }
  return { picks: arr2, pick_count: arr2.length, pick_ids: arr2 };
}