// discord_app/modules/feedback/native/FeedbackForm.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FeedbackUtils from "../FeedbackUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let FeedbackRating = fn(11262).FeedbackRating;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  ratingsLabel: { textAlign: "center" },
  reasonsHeader: { marginBottom: 8 },
  reasonsList: { overflow: "hidden", marginBottom: 12, padding: 0 },
  reason: { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE },
  doNotShowAgainContainer: null,
};
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj2.doNotShowAgainContainer = {
  paddingHorizontal: 0,
  paddingVertical: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingHorizontal: 0, paddingVertical: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/native/FeedbackForm.tsx");

export const FeedbackForm = ReactCompilerGating.isReactCompilerEnabled()
  ? (otherKey) => {
      const cResult = reasons(onFeedbackChanged[7]).c(48);
      ({ showDoNotShowAgainCheckbox, ratingsBodyLabel, reasonsHeaderLabel, reasons } = otherKey);
      otherKey = otherKey.otherKey;
      onFeedbackChanged = otherKey.onFeedbackChanged;
      const trackOpen = otherKey.trackOpen;
      const tmp3 = closure_8();
      noop = tmp3;
      const tmp5 = otherKey(onFeedbackChanged[8])(reasons);
      closure_5 = tmp5;
      if (cResult[0] !== reasons) {
        const shuffleResult = tmp4(tmp[9]).shuffle(reasons);
        cResult[0] = reasons;
        cResult[1] = shuffleResult;
        let tmp6 = shuffleResult;
        const tmp4Result = tmp4(tmp[9]);
      } else {
        tmp6 = cResult[1];
      }
      let obj = reasons(onFeedbackChanged[7]);
      const tmp8 = trackOpen;
      [arr, closure_6] = trackOpen(noop.useState(tmp6), 2);
      if (cResult[2] === otherKey) {
        if (cResult[3] === tmp5) {
          if (cResult[4] === reasons) {
            let tmp10 = cResult[5];
            let tmp11 = cResult[6];
          }
          const effect = obj3.useEffect(tmp10, tmp11);
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = {};
            cResult[7] = obj2;
            let tmp14 = obj2;
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
            let tmp17 = fn;
          } else {
            tmp17 = cResult[9];
          }
          tmp4(tmp[11])(tmp17);
          if (cResult[10] === first) {
            if (cResult[13] === first) {
              if (cResult[16] === first) {
                if (cResult[17] === onFeedbackChanged) {
                  let tmp21 = cResult[18];
                }
                closure_9 = tmp21;
                class I {
                  constructor(arg0) {
                    obj = {};
                    merged = Object.assign(closure_7);
                    obj.reason = otherKey;
                    tmp2 = closure_8(obj);
                    tmp3 = onFeedbackChanged(obj);
                    return;
                  }
                }
                const _Symbol2 = Symbol;
                if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                  class V {
                    constructor(arg0) {
                      return Boolean(otherKey.label);
                    }
                  }
                  class I {
                    constructor(arg0) {
                      obj = {};
                      merged = Object.assign(closure_7);
                      obj.reason = otherKey;
                      tmp2 = closure_8(obj);
                      tmp3 = onFeedbackChanged(obj);
                      return;
                    }
                  }
                  let found = V;
                } else {
                  class V {
                    constructor(arg0) {
                      return Boolean(otherKey.label);
                    }
                  }
                }
                if (cResult[24] === tmp21) {
                  class V {
                    constructor(arg0) {
                      return Boolean(otherKey.label);
                    }
                  }
                  found = arr.filter(found);
                  class I {
                    constructor(arg0) {
                      obj = {};
                      merged = Object.assign(closure_7);
                      obj.reason = otherKey;
                      tmp2 = closure_8(obj);
                      tmp3 = onFeedbackChanged(obj);
                      return;
                    }
                  }
                  cResult[19] = tmp21;
                  cResult[20] = arr;
                  cResult[21] = tmp3;
                  cResult[22] = tmp24;
                }
                const fn3 = function q(label, _exports22) {
                  closure_0 = label;
                  let tmp2 = null;
                  if (_exports22 > 0) {
                    tmp2 = closure_1_6(reasons(onFeedbackChanged[12]).FormDivider, {});
                  }
                  const obj = { children: null };
                  const items = [tmp2];
                  const obj2 = {
                    labelStyle: React.reason,
                    label: closure_1_6(reasons(onFeedbackChanged[12]).FormLabel, {
                      text: label.label,
                      numberOfLines: 2,
                    }),
                    onPress() {
                      return closure_9(closure_0);
                    },
                  };
                  items[1] = closure_1_6(reasons(onFeedbackChanged[12]).FormRow, obj2);
                  obj.children = items;
                  return first(React.Fragment, obj, _exports22);
                };
                cResult[24] = tmp21;
                cResult[25] = tmp3;
                cResult[26] = fn3;
              }
              class I {
                constructor(arg0) {
                  obj = {};
                  merged = Object.assign(closure_7);
                  obj.reason = otherKey;
                  tmp2 = closure_8(obj);
                  tmp3 = onFeedbackChanged(obj);
                  return;
                }
              }
              cResult[16] = first;
              cResult[17] = onFeedbackChanged;
              cResult[18] = I;
              tmp21 = I;
            }
            class P {
              constructor(arg0) {
                reason = null;
                if (otherKey !== FeedbackRating.GOOD) {
                  tmp2 = closure_7;
                  reason = closure_7.reason;
                }
                obj = {};
                merged = Object.assign(closure_7);
                obj.rating = otherKey;
                obj.reason = reason;
                tmp4 = closure_8(obj);
                tmp5 = onFeedbackChanged(obj);
                return;
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
            const obj = {};
            const merged = Object.assign(first);
            obj.doNotShowAgain = !flag;
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
          tmp = closure_2;
          obj = closure_1(closure_2[9]);
          tmp2 = reasons;
          if (!obj.isEqual(closure_5, reasons)) {
            tmp3 = closure_6;
            tmp4 = closure_0;
            obj2 = closure_0(tmp[10]);
            tmp5 = otherKey;
            tmp6 = closure_6(obj2.shuffleProblems(tmp2, otherKey));
          }
          return;
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
      const tmp9 = trackOpen(noop.useState(tmp6), 2);
    }
  : (otherKey) => {
      ({ ratingsBodyLabel, reasons } = otherKey);
      otherKey = otherKey.otherKey;
      const onFeedbackChanged = otherKey.onFeedbackChanged;
      const trackOpen = otherKey.trackOpen;
      c6 = undefined;
      closure_8 = undefined;
      ({ showDoNotShowAgainCheckbox, reasonsHeaderLabel } = otherKey);
      const tmp = closure_8();
      noop = tmp;
      const tmp4 = otherKey(onFeedbackChanged[8])(reasons);
      FeedbackRating = tmp4;
      let obj = otherKey(onFeedbackChanged[9]);
      let tmp2 = otherKey;
      [arr, c6] = trackOpen(noop.useState(otherKey(onFeedbackChanged[9]).shuffle(reasons)), 2);
      let items = [reasons, tmp4, otherKey];
      const effect = noop.useEffect(() => {
        if (!obj.isEqual(closure_5, reasons)) {
          _undefined(FeedbackUtils.shuffleProblems(reasons, otherKey));
        }
        obj = _modDef12;
      }, items);
      const tmp8 = trackOpen(noop.useState({}), 2);
      const first = tmp8[0];
      closure_8 = tmp8[1];
      otherKey(onFeedbackChanged[11])(() => {
        trackOpen();
      });
      const items1 = [first, onFeedbackChanged];
      const callback = noop.useCallback(() => {
        let flag = first.doNotShowAgain;
        if (flag == null) {
          flag = false;
        }
        const obj = {};
        const merged = Object.assign(first);
        obj.doNotShowAgain = !flag;
        closure_8(obj);
        onFeedbackChanged(first);
      }, items1);
      const found = arr.filter((label) => Boolean(label.label));
      let tmp14 = null;
      if (null != first.rating) {
        tmp14 = null;
        if (first.rating !== FeedbackRating.GOOD) {
          let obj2 = { children: null };
          const obj3 = {
            style: tmp.reasonsHeader,
            variant: "eyebrow",
            color: "text-default",
            children: reasonsHeaderLabel,
          };
          const items2 = [c6(reasons(tmp3[13]).Text, obj3)];
          const obj4 = { border: "subtle", style: tmp.reasonsList, children: tmp13 };
          items2[1] = c6(reasons(tmp3[14]).Card, obj4);
          obj2.children = items2;
          tmp14 = first(tmp5.Fragment, obj2);
        }
      }
      let tmp17 = null;
      if (null != ratingsBodyLabel) {
        const obj5 = {
          style: tmp.ratingsLabel,
          variant: "heading-md/semibold",
          color: "text-default",
          children: ratingsBodyLabel,
        };
        tmp17 = c6(reasons(tmp3[13]).Text, obj5);
      }
      const children = [tmp17, , ,];
      let rating = first.rating;
      const tmp16 = first;
      const tmp6 = trackOpen(noop.useState(otherKey(onFeedbackChanged[9]).shuffle(reasons)), 2);
      if (rating == null) {
        rating = null;
      }
      children[1] = c6(tmp2(onFeedbackChanged[15]), {
        selectedRating: rating,
        onChangeRating(rating) {
          reason = null;
          if (rating !== FeedbackRating.GOOD) {
            reason = first.reason;
          }
          const obj = {};
          const merged = Object.assign(first);
          obj.rating = rating;
          obj.reason = reason;
          closure_8(obj);
          onFeedbackChanged(obj);
        },
      });
      children[2] = tmp14;
      let tmp20Result = null;
      if (showDoNotShowAgainCheckbox) {
        const obj7 = { style: tmp.doNotShowAgainContainer, leading: null, label: null, onPress: null };
        let flag = first.doNotShowAgain;
        if (flag == null) {
          flag = false;
        }
        const obj8 = { selected: flag };
        obj7.leading = tmp20(reasons(tmp3[12]).FormRow.Checkbox, obj8);
        const obj9 = { text: null };
        const intl = tmp24(tmp3[16]).intl;
        obj9.text = intl.string(reasons(tmp3[16]).t["5E9SB9"]);
        obj7.label = tmp20(reasons(tmp3[12]).FormRow.Label, obj9);
        obj7.onPress = callback;
        tmp20Result = tmp20(reasons(tmp3[12]).FormRow, obj7);
      }
      children[3] = tmp20Result;
      return tmp16(noop.Fragment, { children });
    };
