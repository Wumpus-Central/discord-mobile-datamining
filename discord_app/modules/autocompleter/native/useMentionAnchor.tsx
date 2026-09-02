// === Module 12184: isMentionAnchorValid ===

// Module 12184 (isMentionAnchorValid)
import AutocompleteFormDivider from "AutocompleteFormDivider" /* 10361 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

require = arg1;
function isMentionAnchorValid(arr, arg1, anchor, arg3, arg4) {
  let startsWithResult = null != anchor;
  if (startsWithResult) {
    startsWithResult = anchor >= 0;
  }
  if (startsWithResult) {
    startsWithResult = arr.startsWith(arg3, anchor);
  }
  if (startsWithResult) {
    startsWithResult = arg1 >= anchor + arg3.length;
  }
  if (!startsWithResult) {
    return startsWithResult;
  } else {
    let isSingleLineRunResult = arg4;
    const sum = anchor + arg3.length;
    let allowSpaces;
    if (arg4 != null) {
      allowSpaces = isSingleLineRunResult.allowSpaces;
    }
    if (true === allowSpaces) {
      let num2 = isSingleLineRunResult.maxQueryLength;
      const diff = arg1 - sum;
      if (num2 == null) {
        num2 = 64;
      }
      isSingleLineRunResult = diff <= num2;
      if (isSingleLineRunResult) {
        isSingleLineRunResult = AutocompleteFormDivider.isSingleLineRun(arr, sum, arg1);
        const obj2 = AutocompleteFormDivider;
      }
      if (isSingleLineRunResult) {
        isSingleLineRunResult = !regex.test(arr.slice(sum, arg1));
      }
      let isUnbrokenRunResult = isSingleLineRunResult;
    } else {
      isUnbrokenRunResult = AutocompleteFormDivider.isUnbrokenRun(arr, sum, arg1);
      const obj = AutocompleteFormDivider;
    }
  }
}
const re4 = /\s\s/;
let closure_6 = { kind: "idle" };
const result = require("set").fileFinishedImporting("modules/autocompleter/native/useMentionAnchor.tsx");

export default function useMentionAnchor(arr) {
  const _require = arg2;
  let obj = React;
  let tmp = closure_6;
  [anchor, tmp3] = callback(React.useState(closure_6), 2);
  dependencyMap = tmp3;
  anchor = null;
  if ("idle" !== anchor.kind) {
    anchor = anchor.anchor;
  }
  let tmp5 = arg2;
  if (arg2) {
    tmp5 = isMentionAnchorValid(arr, arg1, anchor, arg3, arg4);
  }
  let tmp12 = null;
  if (tmp5) {
    tmp12 = anchor;
  }
  let tmp13 = tmp;
  if (arg2) {
    const kind = anchor.kind;
    if ("idle" === kind) {
      const lastIndexOfResult = arr.lastIndexOf(arg3, arg1);
      let tmp19 = null;
      if (-1 !== lastIndexOfResult) {
        let tmp22 = null;
        if (obj5.isWhitespaceSeparatingBoundary(arr, lastIndexOfResult)) {
          tmp22 = null;
          if (isMentionAnchorValid(arr, arg1, lastIndexOfResult, arg3, arg4)) {
            tmp22 = lastIndexOfResult;
          }
        }
        tmp19 = tmp22;
        obj5 = _require(10361);
      }
      if (null != tmp19) {
        obj = { kind: "pending", anchor: null, seenText: null };
        obj[1] = tmp19;
        tmp = obj;
      }
      tmp13 = tmp;
    } else if ("active" === kind) {
      let tmp17 = tmp;
      if (tmp5) {
        tmp17 = anchor;
      }
      tmp13 = tmp17;
    } else if ("pending" === kind) {
      ({ anchor: anchor2, seenText } = anchor);
      if (tmp5) {
        obj = { kind: "active", anchor: null };
        obj[1] = anchor2;
        let tmp14 = obj;
      } else if (arr.startsWith(arg3, anchor2)) {
        obj1 = { kind: "pending", anchor: null, seenText: null };
        obj1[1] = anchor2;
        tmp14 = obj1;
      } else {
        tmp14 = tmp;
        if (anchor2 <= arr.length) {
          if (null == seenText) {
            const obj2 = { kind: "pending", anchor: null, seenText: null };
            obj2[1] = anchor2;
            obj2[2] = arr;
            let tmp15 = obj2;
          } else {
            tmp15 = anchor;
            if (seenText !== arr) {
              tmp15 = tmp;
            }
          }
        }
      }
      tmp13 = tmp14;
    }
  }
  let tmp29 = anchor.kind === tmp13.kind;
  if (tmp29) {
    if ("idle" === anchor.kind) {
      tmp29 = tmp30;
    } else if ("active" === anchor.kind) {
      let tmp32 = "active" === tmp13.kind;
      if (tmp32) {
        anchor = tmp13.anchor;
        tmp32 = anchor.anchor === anchor;
      }
      let tmp31 = tmp32;
    } else {
      tmp31 = "pending" === tmp13.kind && anchor.anchor === tmp13.anchor && anchor.seenText === tmp13.seenText;
    }
  }
  if (!tmp29) {
    tmp3(tmp13);
  }
  const tmp2 = callback(React.useState(closure_6), 2);
  const items = [arg2];
  return {
    anchor: tmp12,
    beginSearch: obj.useCallback((arg0) => {
      if (closure_0) {
        const obj = { kind: "pending", anchor: null, seenText: null };
        obj[1] = arg0;
        tmp3 = tmp3(obj);
      }
    }, items)
  };
};