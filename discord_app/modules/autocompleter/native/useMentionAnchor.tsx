// discord_app/modules/autocompleter/native/useMentionAnchor.tsx
import react2 from "../../../../_runtime/00576_react.js";
import autocompleter_AutocompleteUtils from "AutocompleteUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function isMentionAnchorValid(text, selectionEnd, anchor, prefix, options) {
  let startsWithResult =
    null != anchor && anchor >= 0 && text.startsWith(prefix, anchor) && selectionEnd >= anchor + prefix.length;
  if (startsWithResult) {
    let isUnbrokenRunResult;
    const sum = anchor + prefix.length;
    let allowSpaces;
    if (options != null) {
      allowSpaces = options.allowSpaces;
    }
    if (true === allowSpaces) {
      let num2 = options.maxQueryLength;
      const diff = selectionEnd - sum;
      if (num2 == null) {
        num2 = 64;
      }
      let isSingleLineRunResult = diff <= num2;
      if (isSingleLineRunResult) {
        const obj2 = autocompleter_AutocompleteUtils;
        isSingleLineRunResult = obj2.isSingleLineRun(text, sum, selectionEnd);
      }
      if (isSingleLineRunResult) {
        isSingleLineRunResult = !re4.test(text.slice(sum, selectionEnd));
      }
      isUnbrokenRunResult = isSingleLineRunResult;
    } else {
      const obj = autocompleter_AutocompleteUtils;
      isUnbrokenRunResult = obj.isUnbrokenRun(text, sum, selectionEnd);
    }
    startsWithResult = isUnbrokenRunResult;
  }
  return startsWithResult;
}
function transition(kind, enabled, enabled2) {
  let anchor;
  let options;
  let prefix;
  let seenText;
  let selectionEnd;
  let text;
  ({ text, selectionEnd, prefix, options } = enabled);
  if (enabled.enabled) {
    let tmp2 = kind;
    kind = kind.kind;
    if ("idle" === kind) {
      let tmp17;
      const lastIndexOfResult = text.lastIndexOf(prefix, selectionEnd);
      let tmp7 = null;
      if (-1 !== lastIndexOfResult) {
        let tmp10 = null;
        const obj4 = autocompleter_AutocompleteUtils;
        if (obj4.isWhitespaceSeparatingBoundary(text, lastIndexOfResult)) {
          tmp10 = null;
          if (isMentionAnchorValid(text, selectionEnd, lastIndexOfResult, prefix, options)) {
            tmp10 = lastIndexOfResult;
          }
        }
        tmp7 = tmp10;
      }
      if (null != tmp7) {
        tmp17 = { kind: "pending", anchor: tmp7, seenText: null };
        const obj2 = { kind: "pending", anchor: tmp7, seenText: null };
      } else {
        tmp17 = closure_6;
      }
      return tmp17;
    } else if ("active" === kind) {
      if (!enabled) {
        tmp2 = closure_6;
      }
      return tmp2;
    } else if ("pending" === kind) {
      let tmp4;
      ({ anchor, seenText } = tmp2);
      if (enabled) {
        tmp4 = { kind: "active", anchor };
        const obj3 = { kind: "active", anchor };
      } else if (text.startsWith(prefix, anchor)) {
        tmp4 = { kind: "pending", anchor, seenText: null };
        const obj5 = { kind: "pending", anchor, seenText: null };
      } else if (anchor > text.length) {
        tmp4 = closure_6;
      } else if (null == seenText) {
        tmp4 = { kind: "pending", anchor, seenText: text };
        const obj = { kind: "pending", anchor, seenText: text };
      } else {
        tmp4 = tmp2;
        if (seenText !== text) {
          tmp4 = closure_6;
        }
      }
      return tmp4;
    }
  } else {
    return closure_6;
  }
}
const re4 = /\s\s/;
let closure_6 = { kind: "idle" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (text, selectionEnd, enabled, prefix, options) => {
      let tmp3;
      let tmp4;
      let closure_0 = enabled;
      let obj = react2;
      const cResult = obj.c(14);
      [tmp3, tmp4] = _slicedToArray(react.useState(closure_6), 2);
      let closure_1 = tmp4;
      const tmp2 = _slicedToArray(react.useState(closure_6), 2);
      if (cResult[0] === enabled) {
        if (cResult[1] === options) {
          if (cResult[2] === prefix) {
            if (cResult[3] === tmp3) {
              if (cResult[4] === selectionEnd) {
                let tmp5;
                let tmp6;
                let tmp7;
                let tmp23;
                if (cResult[5] === text) {
                  tmp5 = cResult[6];
                  tmp6 = cResult[7];
                  tmp7 = cResult[8];
                }
                if (!tmp7) {
                  tmp4(tmp6);
                }
                if (cResult[9] !== enabled) {
                  const fn = function k(anchor) {
                    let tmp4;
                    if (closure_0) {
                      const obj = { kind: "pending", anchor, seenText: null };
                      tmp4 = tmp4(obj);
                    }
                  };
                  cResult[9] = enabled;
                  cResult[10] = fn;
                  tmp23 = fn;
                } else {
                  tmp23 = cResult[10];
                }
                if (cResult[11] === tmp23) {
                  let tmp24;
                  if (cResult[12] === tmp5) {
                    tmp24 = cResult[13];
                  }
                  return tmp24;
                }
                const obj2 = { anchor: tmp5, beginSearch: tmp23 };
                cResult[11] = tmp23;
                cResult[12] = tmp5;
                cResult[13] = obj2;
                tmp24 = obj2;
              }
            }
          }
        }
      }
      let anchor = null;
      if ("idle" !== tmp3.kind) {
        anchor = tmp3.anchor;
      }
      const tmp9 = enabled && isMentionAnchorValid(text, selectionEnd, anchor, prefix, options);
      let tmp16 = null;
      if (tmp9) {
        tmp16 = anchor;
      }
      const obj3 = { enabled, text, selectionEnd, prefix, options };
      const tmp17 = transition(tmp3, tmp9, obj3);
      let tmp18 = tmp3.kind === tmp17.kind;
      if (tmp18) {
        let tmp19 = "idle" === tmp3.kind;
        if (!tmp19) {
          let tmp20;
          if ("active" === tmp3.kind) {
            tmp20 = "active" === tmp17.kind && tmp3.anchor === tmp17.anchor;
          } else {
            tmp20 = "pending" === tmp17.kind && tmp3.anchor === tmp17.anchor && tmp3.seenText === tmp17.seenText;
          }
          tmp19 = tmp20;
        }
        tmp18 = tmp19;
      }
      cResult[0] = enabled;
      cResult[1] = options;
      cResult[2] = prefix;
      cResult[3] = tmp3;
      cResult[4] = selectionEnd;
      cResult[5] = text;
      cResult[6] = tmp16;
      cResult[7] = tmp17;
      cResult[8] = tmp18;
      tmp7 = tmp18;
      tmp6 = tmp17;
      tmp5 = tmp16;
    }
  : (text, selectionEnd, enabled, prefix, options) => {
      let items;
      let tmp2;
      let tmp3;
      let closure_0 = enabled;
      [tmp2, tmp3] = react.useState(closure_6);
      let closure_1 = tmp3;
      let anchor = null;
      _slicedToArray(react.useState(closure_6), 2);
      if ("idle" !== tmp2.kind) {
        anchor = tmp2.anchor;
      }
      const tmp5 = enabled && isMentionAnchorValid(text, selectionEnd, anchor, prefix, options);
      let tmp12 = null;
      if (tmp5) {
        tmp12 = anchor;
      }
      const obj2 = { enabled, text, selectionEnd, prefix, options };
      const tmp13 = transition(tmp2, tmp5, obj2);
      let tmp14 = tmp2.kind === tmp13.kind;
      if (tmp14) {
        let tmp15 = "idle" === tmp2.kind;
        if (!tmp15) {
          let tmp16;
          if ("active" === tmp2.kind) {
            tmp16 = "active" === tmp13.kind && tmp2.anchor === tmp13.anchor;
          } else {
            tmp16 = "pending" === tmp13.kind && tmp2.anchor === tmp13.anchor && tmp2.seenText === tmp13.seenText;
          }
          tmp15 = tmp16;
        }
        tmp14 = tmp15;
      }
      if (!tmp14) {
        tmp3(tmp13);
      }
      const obj3 = {
        anchor: tmp12,
        beginSearch: react.useCallback((anchor) => {
          if (closure_0) {
            const obj = { kind: "pending", anchor, seenText: null };
            tmp3(obj);
          }
        }, items),
      };
      items = [enabled];
      return obj3;
    };
const result = size.fileFinishedImporting("modules/autocompleter/native/useMentionAnchor.tsx");

export default tmp2;
