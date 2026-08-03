// === Module 6176: ? ===

// Module 6176
import HeaderRecord from "HeaderRecord";

let c0;
let closure_1;
({ FindResultDirections: c0, AutocompleterResultTypes: closure_1 } = HeaderRecord);
const result = require("set").fileFinishedImporting("modules/autocompleter/findNextSelectedResult.tsx");
function findNextSelectedResult(DOWN, closure_23, items) {
  if (0 === items.length) {
    return 0;
  } else {
    let tmp = closure_23;
    if (null != arg3) {
      tmp = arg3;
      if (arg3 === closure_23) {
        return closure_23;
      }
    }
    let num = 1;
    if (DOWN === constants.UP) {
      num = -1;
    }
    const sum = closure_23 + num;
    if (sum >= 0) {
      if (sum < length) {
        let tmp13Result = sum;
        if (items[sum].type === constants2.HEADER) {
          tmp13Result = callback(DOWN, sum, items, tmp);
        }
      }
      return tmp13Result;
    }
    let num2 = -1;
    if (sum < 0) {
      num2 = length;
    }
    tmp13Result = callback(DOWN, num2, items, tmp);
    const tmp13 = callback;
  }
}

export default findNextSelectedResult;