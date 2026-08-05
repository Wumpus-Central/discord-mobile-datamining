// discord_app/modules/autocompleter/native/useMentionAnchor.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { AutocompleteFormDivider } from "AutocompleteUtils.tsx";

const require = arg1;
let closure_4 = { kind: "idle" };
const result = require("AutocompleteFormDivider").fileFinishedImporting("modules/autocompleter/native/useMentionAnchor.tsx");

export default function useMentionAnchor(c22) {
  let anchor;
  let anchor2;
  let seenText;
  let tmp3;
  const _require = arg2;
  let obj = React;
  let tmp = closure_4;
  [anchor, tmp3] = callback(React.useState(closure_4), 2);
  const dependencyMap = tmp3;
  anchor = null;
  if ("idle" !== anchor.kind) {
    anchor = anchor.anchor;
  }
  let tmp5 = arg2;
  if (arg2) {
    let startsWithResult = null != anchor;
    if (startsWithResult) {
      startsWithResult = anchor >= 0;
    }
    if (startsWithResult) {
      startsWithResult = c22.startsWith(arg3, anchor);
    }
    if (startsWithResult) {
      startsWithResult = arg1 >= anchor + arg3.length;
    }
    if (startsWithResult) {
      let obj1 = _AutocompleteFormDivider;
      startsWithResult = obj1.isUnbrokenRun(c22, anchor + arg3.length, arg1);
    }
    tmp5 = startsWithResult;
  }
  let tmp9 = null;
  if (tmp5) {
    tmp9 = anchor;
  }
  let tmp10 = tmp;
  if (arg2) {
    const kind = anchor.kind;
    if ("idle" === kind) {
      const lastIndexOfResult = c22.lastIndexOf(arg3, arg1);
      let tmp16 = null;
      if (-1 !== lastIndexOfResult) {
        let tmp18 = null;
        if (obj9.isWhitespaceSeparatingBoundary(c22, lastIndexOfResult)) {
          let startsWithResult1 = null != lastIndexOfResult;
          if (startsWithResult1) {
            startsWithResult1 = lastIndexOfResult >= 0;
          }
          if (startsWithResult1) {
            startsWithResult1 = c22.startsWith(arg3, lastIndexOfResult);
          }
          if (startsWithResult1) {
            startsWithResult1 = arg1 >= lastIndexOfResult + arg3.length;
          }
          if (startsWithResult1) {
            startsWithResult1 = tmp25(9831).isUnbrokenRun(c22, lastIndexOfResult + arg3.length, arg1);
            const tmp25Result = tmp25(9831);
          }
          tmp18 = null;
          if (startsWithResult1) {
            tmp18 = lastIndexOfResult;
          }
        }
        tmp16 = tmp18;
        obj9 = _AutocompleteFormDivider;
        tmp25 = _require;
      }
      if (null != tmp16) {
        obj = { kind: "pending", anchor: null, seenText: null };
        obj[1] = tmp16;
        tmp = obj;
      }
      tmp10 = tmp;
    } else if ("active" === kind) {
      let tmp14 = tmp;
      if (tmp5) {
        tmp14 = anchor;
      }
      tmp10 = tmp14;
    } else if ("pending" === kind) {
      ({ anchor: anchor2, seenText } = anchor);
      if (tmp5) {
        obj = { kind: "active", anchor: null };
        obj[1] = anchor2;
        let tmp11 = obj;
      } else if (c22.startsWith(arg3, anchor2)) {
        obj1 = { kind: "pending", anchor: null, seenText: null };
        obj1[1] = anchor2;
        tmp11 = obj1;
      } else {
        tmp11 = tmp;
        if (anchor2 <= c22.length) {
          if (null == seenText) {
            const obj2 = { kind: "pending", anchor: null, seenText: null };
            obj2[1] = anchor2;
            obj2[2] = c22;
            let tmp12 = obj2;
          } else {
            tmp12 = anchor;
            if (seenText !== c22) {
              tmp12 = tmp;
            }
          }
        }
      }
      tmp10 = tmp11;
    }
  }
  let tmp19 = anchor.kind === tmp10.kind;
  if (tmp19) {
    if ("idle" === anchor.kind) {
      tmp19 = tmp20;
    } else if ("active" === anchor.kind) {
      let tmp22 = "active" === tmp10.kind;
      if (tmp22) {
        anchor = tmp10.anchor;
        tmp22 = anchor.anchor === anchor;
      }
      let tmp21 = tmp22;
    } else {
      tmp21 = "pending" === tmp10.kind && anchor.anchor === tmp10.anchor && anchor.seenText === tmp10.seenText;
    }
  }
  if (!tmp19) {
    tmp3(tmp10);
  }
  const tmp2 = callback(React.useState(closure_4), 2);
  const items = [arg2];
  return {
    anchor: tmp9,
    beginSearch: obj.useCallback((arg0) => {
      if (closure_0) {
        const obj = { kind: "pending", anchor: null, seenText: null };
        obj[1] = arg0;
        tmp3 = tmp3(obj);
      }
    }, items)
  };
};