// === Module 9960: ? ===

// Module 9960
import set from "set" /* 2 */;
import HeaderRecord from "HeaderRecord" /* 5461 */;

({ FindResultDirections: c0, AutocompleterResultTypes: closure_1 } = HeaderRecord);
const result = set.fileFinishedImporting("modules/autocompleter/findNextSelectedResult.tsx");
function findNextSelectedResult(DOWN, closure_23, arr) {
  if (0 === arr.length) {
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
        if (arr[sum].type === constants2.HEADER) {
          tmp13Result = callback(DOWN, sum, arr, tmp);
        }
      }
      return tmp13Result;
    }
    let num2 = -1;
    if (sum < 0) {
      num2 = length;
    }
    tmp13Result = callback(DOWN, num2, arr, tmp);
    const tmp13 = callback;
  }
}

export default findNextSelectedResult;