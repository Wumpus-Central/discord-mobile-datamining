// discord_app/modules/autocompleter/native/useMentionAnchor.tsx
import autocompleter_AutocompleteUtils from "AutocompleteUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function isMentionAnchorValid(seenText, arg1, anchor, arg3, arg4) {
  let startsWithResult = null != anchor;
  if (startsWithResult) {
    startsWithResult = anchor >= 0;
  }
  if (startsWithResult) {
    startsWithResult = seenText.startsWith(arg3, anchor);
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
        isSingleLineRunResult = autocompleter_AutocompleteUtils.isSingleLineRun(seenText, sum, arg1);
      }
      if (isSingleLineRunResult) {
        isSingleLineRunResult = !re4.test(seenText.slice(sum, arg1));
      }
      let isUnbrokenRunResult = isSingleLineRunResult;
    } else {
      isUnbrokenRunResult = autocompleter_AutocompleteUtils.isUnbrokenRun(seenText, sum, arg1);
    }
  }
}
const re4 = /\s\s/;
let closure_6 = { kind: "idle" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/autocompleter/native/useMentionAnchor.tsx");

export default function useMentionAnchor(seenText, arg1, arg2, arg3, arg4) {
  closure_0 = arg2;
  let obj = noop;
  let tmp = closure_6;
  [anchor, tmp3] = _slicedToArray(noop.useState(closure_6), 2);
  dependencyMap = tmp3;
  anchor = null;
  if ("idle" !== anchor.kind) {
    anchor = anchor.anchor;
  }
  let tmp5 = arg2;
  if (arg2) {
    tmp5 = isMentionAnchorValid(seenText, arg1, anchor, arg3, arg4);
  }
  let tmp12 = null;
  if (tmp5) {
    tmp12 = anchor;
  }
  let tmp13 = tmp;
  if (arg2) {
    const kind = anchor.kind;
    if ("idle" === kind) {
      const lastIndexOfResult = seenText.lastIndexOf(arg3, arg1);
      let tmp19 = null;
      if (-1 !== lastIndexOfResult) {
        let tmp22 = null;
        if (obj5.isWhitespaceSeparatingBoundary(seenText, lastIndexOfResult)) {
          tmp22 = null;
          if (isMentionAnchorValid(seenText, arg1, lastIndexOfResult, arg3, arg4)) {
            tmp22 = lastIndexOfResult;
          }
        }
        tmp19 = tmp22;
        obj5 = autocompleter_AutocompleteUtils;
      }
      if (null != tmp19) {
        obj = { kind: "pending", anchor: tmp19, seenText: null };
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
        obj = { kind: "active", anchor: anchor2 };
        let tmp14 = obj;
      } else if (seenText.startsWith(arg3, anchor2)) {
        const obj1 = { kind: "pending", anchor: anchor2, seenText: null };
        tmp14 = obj1;
      } else {
        tmp14 = tmp;
        if (anchor2 <= seenText.length) {
          if (null == seenText) {
            const obj2 = { kind: "pending", anchor: anchor2, seenText };
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
    } else {
      const tmp31 = "pending" === tmp13.kind && anchor.anchor === tmp13.anchor && anchor.seenText === tmp13.seenText;
    }
  }
  if (!tmp29) {
    tmp3(tmp13);
  }
  const obj3 = { anchor: tmp12, beginSearch: null };
  const items = [arg2];
  obj3.beginSearch = obj.useCallback((anchor) => {
    if (closure_0) {
      const obj = { kind: "pending", anchor, seenText: null };
      tmp3 = tmp3(obj);
    }
  }, items);
  return obj3;
}
