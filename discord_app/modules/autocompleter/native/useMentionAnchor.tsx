// === Module 12048: useMentionAnchor ===

// Module 12048 (useMentionAnchor)
import c from "c" /* 576 */;
import autocompleter_AutocompleteUtils from "autocompleter/AutocompleteUtils" /* 10084 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function isMentionAnchorValid(text, selectionEnd, anchor, prefix, options) {
  let startsWithResult = null != anchor;
  if (startsWithResult) {
    startsWithResult = anchor >= 0;
  }
  if (startsWithResult) {
    startsWithResult = text.startsWith(prefix, anchor);
  }
  if (startsWithResult) {
    startsWithResult = selectionEnd >= anchor + prefix.length;
  }
  if (!startsWithResult) {
    return startsWithResult;
  } else {
    let isSingleLineRunResult = options;
    const sum = anchor + prefix.length;
    let allowSpaces;
    if (options != null) {
      allowSpaces = isSingleLineRunResult.allowSpaces;
    }
    if (true === allowSpaces) {
      let num2 = isSingleLineRunResult.maxQueryLength;
      const diff = selectionEnd - sum;
      if (num2 == null) {
        num2 = 64;
      }
      isSingleLineRunResult = diff <= num2;
      if (isSingleLineRunResult) {
        isSingleLineRunResult = autocompleter_AutocompleteUtils.isSingleLineRun(text, sum, selectionEnd);
      }
      if (isSingleLineRunResult) {
        isSingleLineRunResult = !re4.test(text.slice(sum, selectionEnd));
      }
      let isUnbrokenRunResult = isSingleLineRunResult;
    } else {
      isUnbrokenRunResult = autocompleter_AutocompleteUtils.isUnbrokenRun(text, sum, selectionEnd);
    }
  }
}
function transition(anchor, enabled, enabled) {
  ({ text, selectionEnd, prefix, options } = enabled);
  if (enabled.enabled) {
    let tmp2 = anchor;
    const kind = anchor.kind;
    if ("idle" === kind) {
      const lastIndexOfResult = text.lastIndexOf(prefix, selectionEnd);
      let tmp7 = null;
      if (-1 !== lastIndexOfResult) {
        let tmp10 = null;
        if (obj4.isWhitespaceSeparatingBoundary(text, lastIndexOfResult)) {
          tmp10 = null;
          if (isMentionAnchorValid(text, selectionEnd, lastIndexOfResult, prefix, options)) {
            tmp10 = lastIndexOfResult;
          }
        }
        tmp7 = tmp10;
        obj4 = autocompleter_AutocompleteUtils;
      }
      if (null != tmp7) {
        const obj2 = { kind: "pending", anchor: tmp7, seenText: null };
        let tmp17 = obj2;
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
      ({ anchor, seenText } = tmp2);
      if (enabled) {
        const obj3 = { kind: "active", anchor };
        let tmp4 = obj3;
      } else if (text.startsWith(prefix, anchor)) {
        const obj5 = { kind: "pending", anchor, seenText: null };
        tmp4 = obj5;
      } else if (anchor > text.length) {
        tmp4 = closure_6;
      } else if (null == seenText) {
        const obj = { kind: "pending", anchor, seenText: text };
        tmp4 = obj;
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/autocompleter/native/useMentionAnchor.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((text, selectionEnd, enabled, prefix, options) => {
  closure_0 = enabled;
  const cResult = c.c(14);
  [tmp3, tmp4] = noop.useState(closure_6);
  dependencyMap = tmp4;
  if (cResult[0] === enabled) {
    if (cResult[1] === options) {
      if (cResult[2] === prefix) {
        if (cResult[3] === tmp3) {
          if (cResult[4] === selectionEnd) {
            if (cResult[5] === text) {
              let tmp5 = cResult[6];
              let tmp6 = cResult[7];
              let tmp7 = cResult[8];
            }
            if (!tmp7) {
              tmp4(tmp6);
            }
            if (cResult[9] !== enabled) {
              const fn = function k(anchor) {
                if (closure_0) {
                  const obj = { kind: "pending", anchor, seenText: null };
                  tmp4(obj);
                }
              };
              cResult[9] = enabled;
              cResult[10] = fn;
              let tmp24 = fn;
            } else {
              tmp24 = cResult[10];
            }
            if (cResult[11] === tmp24) {
              if (cResult[12] === tmp5) {
                let tmp25 = cResult[13];
              }
              return tmp25;
            }
            const obj2 = { anchor: tmp5, beginSearch: tmp24 };
            cResult[11] = tmp24;
            cResult[12] = tmp5;
            cResult[13] = obj2;
            tmp25 = obj2;
          }
        }
      }
    }
  }
  let anchor = null;
  if ("idle" !== tmp3.kind) {
    anchor = tmp3.anchor;
  }
  let tmp9 = enabled;
  if (enabled) {
    tmp9 = isMentionAnchorValid(text, selectionEnd, anchor, prefix, options);
  }
  let tmp16 = null;
  if (tmp9) {
    tmp16 = anchor;
  }
  const tmp17 = transition(tmp3, tmp9, { enabled, text, selectionEnd, prefix, options });
  let tmp18 = tmp3.kind === tmp17.kind;
  if (tmp18) {
    if ("idle" === tmp3.kind) {
      tmp18 = tmp19;
    } else if ("active" === tmp3.kind) {
      let tmp21 = `active` === tmp17.kind;
      if (tmp21) {
        tmp21 = tmp3.anchor === tmp17.anchor;
      }
    } else {
      const tmp20 = "pending" === tmp17.kind && tmp3.anchor === tmp17.anchor && tmp3.seenText === tmp17.seenText;
    }
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
  const obj3 = { enabled, text, selectionEnd, prefix, options };
  const tmp2 = _slicedToArray(noop.useState(closure_6), 2);
}) : ((text, selectionEnd, enabled, prefix, options) => {
  closure_0 = enabled;
  [anchor, tmp2] = noop.useState(closure_6);
  dependencyMap = tmp2;
  let anchor1 = null;
  if ("idle" !== anchor.kind) {
    anchor1 = anchor.anchor;
  }
  let tmp4 = enabled;
  if (enabled) {
    tmp4 = isMentionAnchorValid(text, selectionEnd, anchor1, prefix, options);
  }
  let tmp11 = null;
  if (tmp4) {
    tmp11 = anchor1;
  }
  const tmp12 = transition(anchor, tmp4, { enabled, text, selectionEnd, prefix, options });
  let tmp13 = anchor.kind === tmp12.kind;
  if (tmp13) {
    if ("idle" === anchor.kind) {
      tmp13 = tmp14;
    } else if ("active" === anchor.kind) {
      let tmp16 = "active" === tmp12.kind;
      if (tmp16) {
        anchor = tmp12.anchor;
        tmp16 = anchor.anchor === anchor;
      }
    } else {
      const tmp15 = "pending" === tmp12.kind && anchor.anchor === tmp12.anchor && anchor.seenText === tmp12.seenText;
    }
  }
  if (!tmp13) {
    tmp2(tmp12);
  }
  const obj3 = { anchor: tmp11, beginSearch: null };
  const items = [enabled];
  obj3.beginSearch = noop.useCallback((anchor) => {
    if (closure_0) {
      const obj = { kind: "pending", anchor, seenText: null };
      tmp2(obj);
    }
  }, items);
  return obj3;
});