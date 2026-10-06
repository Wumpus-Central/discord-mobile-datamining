// === Module 11264: FeedbackForm ===

// Module 11264 (FeedbackForm)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 11262 */;
import FeedbackUtils from "FeedbackUtils" /* 11265 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let otherKey;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
let FeedbackRating = Constants.FeedbackRating;
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { ratingsLabel: { textAlign: "center" }, reasonsHeader: { marginBottom: 8 }, reasonsList: { overflow: "hidden", marginBottom: 12, padding: 0 }, reason: obj2, doNotShowAgainContainer: obj3 };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: 0, paddingVertical: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((otherKey) => {
  let arr;
  let closure_6;
  let onFeedbackChanged;
  let ratingsBodyLabel;
  let reasons;
  let reasonsHeaderLabel;
  let showDoNotShowAgainCheckbox;
  let tmp6;
  let obj = reasons(onFeedbackChanged[7]);
  const cResult = obj.c(48);
  ({ showDoNotShowAgainCheckbox, ratingsBodyLabel, reasonsHeaderLabel, reasons } = otherKey);
  otherKey = otherKey.otherKey;
  onFeedbackChanged = otherKey.onFeedbackChanged;
  const trackOpen = otherKey.trackOpen;
  const tmp3 = closure_8();
  react = tmp3;
  const tmp5 = otherKey(onFeedbackChanged[8])(reasons);
  let closure_5 = tmp5;
  if (cResult[0] !== reasons) {
    const tmp4Result = otherKey(onFeedbackChanged[9]);
    const shuffleResult = tmp4Result.shuffle(reasons);
    cResult[0] = reasons;
    cResult[1] = shuffleResult;
    tmp6 = shuffleResult;
  } else {
    tmp6 = cResult[1];
  }
  let obj3 = react;
  [arr, closure_6] = trackOpen(react.useState(tmp6), 2);
  trackOpen(react.useState(tmp6), 2);
  const tmp8 = trackOpen;
  if (cResult[2] === otherKey) {
    if (cResult[3] === tmp5) {
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp17;
      if (cResult[4] === reasons) {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      const effect = obj3.useEffect(tmp10, tmp11);
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {};
        cResult[7] = obj2;
        tmp14 = obj2;
      } else {
        tmp14 = cResult[7];
      }
      const tmp8Result = tmp8(obj3.useState(tmp14), 2);
      const first = tmp8Result[0];
      closure_8 = tmp8Result[1];
      if (cResult[8] !== trackOpen) {
        const fn = function _() {
          trackOpen();
        };
        cResult[8] = trackOpen;
        cResult[9] = fn;
        tmp17 = fn;
      } else {
        tmp17 = cResult[9];
      }
      otherKey(onFeedbackChanged[11])(tmp17);
      if (cResult[10] === first) {
        if (cResult[13] === first) {
          if (cResult[16] === first) {
            let tmp21;
            if (cResult[17] === onFeedbackChanged) {
              tmp21 = cResult[18];
            }
            let closure_9 = tmp21;
            class I {
              constructor(reason) {
                const obj = { reason };
                const merged = Object.assign(first);
                closure_8(obj);
                onFeedbackChanged(obj);
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              class V {
                constructor(label) {
                  return Boolean(label.label);
                }
              }
              class I {
                constructor(reason) {
                  const obj = { reason };
                  const merged = Object.assign(first);
                  closure_8(obj);
                  onFeedbackChanged(obj);
                }
              }
            } else {
              class V {
                constructor(label) {
                  return Boolean(label.label);
                }
              }
            }
            if (cResult[24] === tmp21) {
              class V {
                constructor(label) {
                  return Boolean(label.label);
                }
              }
              const found = arr.filter(V);
              class I {
                constructor(reason) {
                  const obj = { reason };
                  const merged = Object.assign(first);
                  closure_8(obj);
                  onFeedbackChanged(obj);
                }
              }
              cResult[19] = tmp21;
              cResult[20] = arr;
              cResult[21] = tmp3;
              cResult[22] = tmp26;
            }
            const fn3 = function q(label, duration) {
              let items;
              let obj3;
              let closure_0 = label;
              let tmp2 = null;
              const Fragment = React.Fragment;
              if (duration > 0) {
                tmp2 = closure_6(reasons(onFeedbackChanged[12]).FormDivider, {});
              }
              const obj = { children: items };
              items = [tmp2, ];
              const obj2 = {
                labelStyle: React.reason,
                label: closure_6(reasons(onFeedbackChanged[12]).FormLabel, obj3),
                onPress() {
                  return closure_9(label);
                }
              };
              const FormRow = reasons(onFeedbackChanged[12]).FormRow;
              obj3 = { text: label.label, numberOfLines: 2 };
              items[1] = closure_6(FormRow, obj2);
              return first(Fragment, obj, duration);
            };
            cResult[24] = tmp21;
            cResult[25] = tmp3;
            cResult[26] = fn3;
          }
          class I {
            constructor(reason) {
              const obj = { reason };
              const merged = Object.assign(first);
              closure_8(obj);
              onFeedbackChanged(obj);
            }
          }
          cResult[16] = first;
          cResult[17] = onFeedbackChanged;
          cResult[18] = I;
          tmp21 = I;
        }
        class P {
          constructor(rating) {
            reason = null;
            if (rating !== FeedbackRating.GOOD) {
              reason = first.reason;
            }
            const obj = { rating, reason };
            const merged = Object.assign(first);
            closure_8(obj);
            onFeedbackChanged(obj);
          }
        }
        cResult[13] = first;
        cResult[14] = onFeedbackChanged;
        cResult[15] = P;
      }
      const fn2 = function p() {
        let flag = first.doNotShowAgain;
        if (flag == null) {
          flag = false;
        }
        const obj = { doNotShowAgain: !flag };
        const merged = Object.assign(first);
        closure_8(obj);
        onFeedbackChanged(first);
      };
      cResult[10] = first;
      cResult[11] = onFeedbackChanged;
      cResult[12] = fn2;
    }
  }
  class A {
    constructor() {
      const obj = _modDef12;
      if (!obj.isEqual(closure_5, reasons)) {
        const obj2 = FeedbackUtils;
        closure_6(obj2.shuffleProblems(reasons, otherKey));
      }
    }
  }
  let items = [reasons, tmp5, otherKey];
  cResult[2] = otherKey;
  cResult[3] = tmp5;
  cResult[4] = reasons;
  cResult[5] = A;
  cResult[6] = items;
  tmp11 = items;
  tmp10 = A;
}) : ((otherKey) => {
  let Checkbox;
  let Label;
  let _undefined;
  let arr;
  let c6;
  let closure_5;
  let intl;
  let items2;
  let obj8;
  let obj9;
  let ratingsBodyLabel;
  let reasons;
  let reasonsHeaderLabel;
  let showDoNotShowAgainCheckbox;
  ({ ratingsBodyLabel, reasons } = otherKey);
  otherKey = otherKey.otherKey;
  const onFeedbackChanged = otherKey.onFeedbackChanged;
  const trackOpen = otherKey.trackOpen;
  c6 = undefined;
  closure_8 = undefined;
  ({ showDoNotShowAgainCheckbox, reasonsHeaderLabel } = otherKey);
  const tmp = closure_8();
  react = tmp;
  let tmp2 = otherKey;
  const tmp4 = otherKey(onFeedbackChanged[8])(reasons);
  FeedbackRating = tmp4;
  const useState = react.useState;
  let obj = otherKey(onFeedbackChanged[9]);
  [arr, c6] = trackOpen(useState(obj.shuffle(reasons)), 2);
  let items = [reasons, tmp4, otherKey];
  const tmp6 = trackOpen(useState(obj.shuffle(reasons)), 2);
  const effect = react.useEffect(() => {
    const obj = _modDef12;
    if (!obj.isEqual(closure_5, reasons)) {
      const obj2 = FeedbackUtils;
      _undefined(obj2.shuffleProblems(reasons, otherKey));
    }
  }, items);
  const tmp8 = trackOpen(react.useState({}), 2);
  const first = tmp8[0];
  closure_8 = tmp8[1];
  otherKey(onFeedbackChanged[11])(() => {
    trackOpen();
  });
  const items1 = [first, onFeedbackChanged];
  const callback = react.useCallback(() => {
    let flag = first.doNotShowAgain;
    if (flag == null) {
      flag = false;
    }
    const obj = { doNotShowAgain: !flag };
    const merged = Object.assign(first);
    closure_8(obj);
    onFeedbackChanged(first);
  }, items1);
  const found = arr.filter((label) => Boolean(label.label));
  let tmp14 = null;
  if (null != first.rating) {
    tmp14 = null;
    if (first.rating !== FeedbackRating.GOOD) {
      let obj2 = { children: items2 };
      const Fragment2 = tmp5.Fragment;
      let obj3 = { style: tmp.reasonsHeader, variant: "eyebrow", color: "text-default", children: reasonsHeaderLabel };
      items2 = [c6(reasons(tmp3[13]).Text, obj3), ];
      const obj4 = { border: "subtle", style: tmp.reasonsList, children: tmp13 };
      items2[1] = c6(reasons(onFeedbackChanged[14]).Card, obj4);
      tmp14 = first(Fragment2, obj2);
    }
  }
  let tmp17 = null;
  let Fragment = tmp5.Fragment;
  const tmp16 = first;
  if (null != ratingsBodyLabel) {
    const obj5 = { style: tmp.ratingsLabel, variant: "heading-md/semibold", color: "text-default", children: ratingsBodyLabel };
    tmp17 = c6(reasons(tmp3[13]).Text, obj5);
  }
  const children = [tmp17, , , ];
  let rating = first.rating;
  const tmp2Result = tmp2(onFeedbackChanged[15]);
  if (rating == null) {
    rating = null;
  }
  const obj6 = {
    selectedRating: rating,
    onChangeRating(rating) {
      reason = null;
      if (rating !== FeedbackRating.GOOD) {
        reason = first.reason;
      }
      const obj = { rating, reason };
      const merged = Object.assign(first);
      closure_8(obj);
      onFeedbackChanged(obj);
    }
  };
  children[1] = c6(tmp2Result, obj6);
  children[2] = tmp14;
  let tmp20Result = null;
  if (showDoNotShowAgainCheckbox) {
    const obj7 = { style: tmp.doNotShowAgainContainer, leading: c6(Checkbox, obj8), label: c6(Label, obj9), onPress: callback };
    let FormRow = reasons(tmp3[12]).FormRow;
    let flag = first.doNotShowAgain;
    Checkbox = reasons(tmp3[12]).FormRow.Checkbox;
    if (flag == null) {
      flag = false;
    }
    obj8 = { selected: flag };
    obj9 = { text: intl.string(reasons(onFeedbackChanged[16]).t["5E9SB9"]) };
    Label = tmp24(tmp3[12]).FormRow.Label;
    intl = tmp24(tmp3[16]).intl;
    tmp20Result = tmp20(FormRow, obj7);
  }
  children[3] = tmp20Result;
  return tmp16(Fragment, { children });
});
const result = size.fileFinishedImporting("modules/feedback/native/FeedbackForm.tsx");

export const FeedbackForm = tmp4;