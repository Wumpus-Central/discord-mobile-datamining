// discord_app/modules/feedback/native/FeedbackForm.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FeedbackUtils from "../FeedbackUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let FeedbackRating = fn(9621).FeedbackRating;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
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
  ? function FeedbackForm(otherKey) {
      const cResult = reasons(onFeedbackChanged[7]).c(48);
      ({ showDoNotShowAgainCheckbox, ratingsBodyLabel, reasonsHeaderLabel, reasons } = otherKey);
      otherKey = otherKey.otherKey;
      onFeedbackChanged = otherKey.onFeedbackChanged;
      const trackOpen = otherKey.trackOpen;
      const tmp4 = closure_8();
      noop = tmp4;
      const tmp6 = otherKey(onFeedbackChanged[8])(reasons);
      FeedbackRating = tmp6;
      if (cResult[0] !== reasons) {
        const shuffleResult = tmp5(tmp2[9]).shuffle(reasons);
        cResult[0] = reasons;
        cResult[1] = shuffleResult;
        let tmp7 = shuffleResult;
        const tmp5Result = tmp5(tmp2[9]);
      } else {
        tmp7 = cResult[1];
      }
      let obj = reasons(onFeedbackChanged[7]);
      const tmp9 = trackOpen;
      [arr, closure_6] = trackOpen(noop.useState(tmp7), 2);
      if (cResult[2] === otherKey) {
        if (cResult[3] === tmp6) {
          if (cResult[4] === reasons) {
            let tmp11 = cResult[5];
            let tmp12 = cResult[6];
          }
          const effect = obj3.useEffect(tmp11, tmp12);
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = {};
            cResult[7] = obj2;
            let tmp15 = obj2;
          } else {
            tmp15 = cResult[7];
          }
          const tmp9Result = tmp9(obj3.useState(tmp15), 2);
          const first = tmp9Result[0];
          closure_8 = tmp9Result[1];
          if (cResult[8] !== trackOpen) {
            const fn2 = function _() {
              trackOpen();
            };
            cResult[8] = trackOpen;
            cResult[9] = fn2;
            let tmp18 = fn2;
          } else {
            tmp18 = cResult[9];
          }
          tmp5(tmp2[11])(tmp18);
          if (cResult[10] === first) {
            if (cResult[11] === onFeedbackChanged) {
              let tmp20 = cResult[12];
            }
            if (cResult[13] === first) {
              if (cResult[14] === onFeedbackChanged) {
                let tmp21 = cResult[15];
              }
              if (cResult[16] === first) {
                if (cResult[17] === onFeedbackChanged) {
                  let tmp22 = cResult[18];
                }
                closure_9 = tmp22;
                if (cResult[19] === tmp22) {
                  if (cResult[20] === arr) {
                    if (cResult[21] === tmp4) {
                      let tmp28 = null != first.rating;
                      if (tmp28) {
                        tmp28 = first.rating !== FeedbackRating.GOOD;
                      }
                      if (cResult[27] === tmp28) {
                        if (cResult[28] === tmp23) {
                          if (cResult[29] === reasonsHeaderLabel) {
                            if (cResult[30] === tmp4) {
                              let tmp30 = cResult[31];
                            }
                            if (cResult[32] === ratingsBodyLabel) {
                              if (cResult[33] === tmp4) {
                                let tmp34 = cResult[34];
                              }
                              let rating = first.rating;
                              if (rating == null) {
                                rating = null;
                              }
                              if (cResult[35] === tmp21) {
                                if (cResult[36] === rating) {
                                  let tmp38 = cResult[37];
                                }
                                if (cResult[38] === first.doNotShowAgain) {
                                  if (cResult[39] === tmp20) {
                                    if (cResult[40] === showDoNotShowAgainCheckbox) {
                                      if (cResult[41] === tmp4) {
                                        let tmp41 = cResult[42];
                                      }
                                      if (cResult[43] === tmp30) {
                                        if (cResult[44] === tmp34) {
                                          if (cResult[45] === tmp38) {
                                            if (cResult[46] === tmp41) {
                                              let tmp44 = cResult[47];
                                            }
                                            return tmp44;
                                          }
                                        }
                                      }
                                      const obj4 = { children: null };
                                      let items = [tmp34, tmp38, tmp30, tmp41];
                                      obj4.children = items;
                                      const tmp46 = first(obj3.Fragment, obj4);
                                      cResult[43] = tmp30;
                                      cResult[44] = tmp34;
                                      cResult[45] = tmp38;
                                      cResult[46] = tmp41;
                                      cResult[47] = tmp46;
                                      tmp44 = tmp46;
                                    }
                                  }
                                }
                                let tmp43Result = null;
                                if (showDoNotShowAgainCheckbox) {
                                  const obj5 = {
                                    style: tmp4.doNotShowAgainContainer,
                                    leading: null,
                                    label: null,
                                    onPress: null,
                                  };
                                  let flag = first.doNotShowAgain;
                                  if (flag == null) {
                                    flag = false;
                                  }
                                  const obj6 = { selected: flag };
                                  obj5.leading = closure_6(reasons(tmp2[12]).FormRow.Checkbox, obj6);
                                  const obj7 = { text: null };
                                  const intl = reasons(tmp2[16]).intl;
                                  obj7.text = intl.string(reasons(tmp2[16]).t["5E9SB9"]);
                                  obj5.label = closure_6(reasons(tmp2[12]).FormRow.Label, obj7);
                                  obj5.onPress = tmp20;
                                  tmp43Result = closure_6(reasons(tmp2[12]).FormRow, obj5);
                                }
                                cResult[38] = first.doNotShowAgain;
                                cResult[39] = tmp20;
                                cResult[40] = showDoNotShowAgainCheckbox;
                                cResult[41] = tmp4;
                                cResult[42] = tmp43Result;
                                tmp41 = tmp43Result;
                              }
                              const obj8 = { selectedRating: rating, onChangeRating: tmp21 };
                              const tmp40 = closure_6(tmp5(tmp2[15]), obj8);
                              cResult[35] = tmp21;
                              cResult[36] = rating;
                              cResult[37] = tmp40;
                              tmp38 = tmp40;
                            }
                            let tmp35 = null;
                            if (null != ratingsBodyLabel) {
                              const obj9 = {
                                style: tmp4.ratingsLabel,
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: ratingsBodyLabel,
                              };
                              tmp35 = closure_6(reasons(tmp2[13]).Text, obj9);
                            }
                            cResult[32] = ratingsBodyLabel;
                            cResult[33] = tmp4;
                            cResult[34] = tmp35;
                            tmp34 = tmp35;
                          }
                        }
                      }
                      let tmp31 = null;
                      if (tmp28) {
                        const obj10 = { children: null };
                        const obj11 = {
                          style: tmp4.reasonsHeader,
                          variant: "eyebrow",
                          color: "text-default",
                          children: reasonsHeaderLabel,
                        };
                        const items1 = [closure_6(reasons(tmp2[13]).Text, obj11)];
                        const obj12 = { border: "subtle", style: tmp4.reasonsList, children: tmp23 };
                        items1[1] = closure_6(reasons(tmp2[14]).Card, obj12);
                        obj10.children = items1;
                        tmp31 = first(obj3.Fragment, obj10);
                      }
                      cResult[27] = tmp28;
                      cResult[28] = cResult[22];
                      cResult[29] = reasonsHeaderLabel;
                      cResult[30] = tmp4;
                      cResult[31] = tmp31;
                      tmp30 = tmp31;
                    }
                  }
                }
                const _Symbol2 = Symbol;
                if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                  class V {
                    constructor(arg0) {
                      return Boolean(otherKey.label);
                    }
                  }
                  cResult[23] = V;
                  let found = V;
                } else {
                  class V {
                    constructor(arg0) {
                      return Boolean(otherKey.label);
                    }
                  }
                }
                if (cResult[24] === tmp22) {
                  class V {
                    constructor(arg0) {
                      return Boolean(otherKey.label);
                    }
                  }
                  found = arr.filter(found);
                  const mapped = found.map(tmp24);
                  cResult[19] = tmp22;
                  cResult[20] = arr;
                  cResult[21] = tmp4;
                  cResult[22] = mapped;
                }
                const fn4 = function q(label, _exports2) {
                  closure_0 = label;
                  let tmp2 = null;
                  if (_exports2 > 0) {
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
                  return first(React.Fragment, obj, _exports2);
                };
                cResult[24] = tmp22;
                cResult[25] = tmp4;
                cResult[26] = fn4;
                tmp24 = fn4;
              }
              function handlePressReason(reason) {
                const obj = {};
                const merged = Object.assign(first);
                obj.reason = reason;
                closure_8(obj);
                onFeedbackChanged(obj);
              }
              cResult[16] = first;
              cResult[17] = onFeedbackChanged;
              cResult[18] = handlePressReason;
              tmp22 = handlePressReason;
            }
            function handleChangeRating(rating) {
              let reason = null;
              if (rating !== FeedbackRating.GOOD) {
                reason = first.reason;
              }
              const obj = {};
              const merged = Object.assign(first);
              obj.rating = rating;
              obj.reason = reason;
              closure_8(obj);
              onFeedbackChanged(obj);
            }
            cResult[13] = first;
            cResult[14] = onFeedbackChanged;
            cResult[15] = handleChangeRating;
            tmp21 = handleChangeRating;
          }
          const fn3 = function p() {
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
          cResult[12] = fn3;
          tmp20 = fn3;
        }
      }
      const fn = function y() {
        if (!obj.isEqual(closure_5, reasons)) {
          closure_1_6(FeedbackUtils.shuffleProblems(reasons, otherKey));
        }
        obj = _modDef12;
      };
      const items2 = [reasons, tmp6, otherKey];
      cResult[2] = otherKey;
      cResult[3] = tmp6;
      cResult[4] = reasons;
      cResult[5] = fn;
      cResult[6] = items2;
      tmp12 = items2;
      tmp11 = fn;
      const tmp10 = trackOpen(noop.useState(tmp7), 2);
    }
  : function FeedbackForm(otherKey) {
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
        onChangeRating: function handleChangeRating(rating) {
          let reason = null;
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
