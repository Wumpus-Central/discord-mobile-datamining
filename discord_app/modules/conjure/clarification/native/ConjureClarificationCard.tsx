// discord_app/modules/conjure/clarification/native/ConjureClarificationCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConjureClarification from "../ConjureClarification.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 },
  optionHeader: null,
  footer: null,
  customField: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.optionHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.customField = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = [];
let closure_10 = [];
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureClarificationCard(onSubmit) {
      const cResult = clarification(576).c(101);
      ({ projectId, clarification } = onSubmit);
      onSubmit = onSubmit.onSubmit;
      const onDismiss = onSubmit.onDismiss;
      const tmp4 = closure_8();
      dependencyMap = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp7 = first1(noop.useState(first), 2);
      first1 = tmp7[0];
      noop = tmp9;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {};
        cResult[1] = obj4;
        let tmp10 = obj4;
      } else {
        tmp10 = cResult[1];
      }
      const tmp6Result = first1(noop.useState(tmp10), 2);
      closure_5 = tmp6Result[1];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj5 = {};
        cResult[2] = obj5;
        let tmp12 = obj5;
      } else {
        tmp12 = cResult[2];
      }
      const tmp6Result5 = first1(noop.useState(tmp12), 2);
      closure_6 = tmp6Result5[1];
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let obj6 = {};
        cResult[3] = obj6;
        let tmp14 = obj6;
      } else {
        tmp14 = cResult[3];
      }
      let obj = clarification(576);
      [tmp16, closure_7] = first1(noop.useState(tmp14), 2);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = {};
        cResult[4] = obj7;
        let tmp17 = obj7;
      } else {
        tmp17 = cResult[4];
      }
      const tmp6Result6 = first1(noop.useState(tmp14), 2);
      [tmp19, closure_8] = first1(noop.useState(tmp17), 2);
      const tmp6Result8 = first1(noop.useState(0), 2);
      closure_9 = tmp6Result8[1];
      const disabled = tmp21;
      const bound = Math.min(tmp6Result8[0], length - 1);
      const tmp23 = clarification.questions[bound];
      let id = tmp23;
      closure_13 = tmp24;
      if (cResult[5] !== tmp23) {
        const isImageQuestionResult = clarification(17239).isImageQuestion(tmp23);
        cResult[5] = tmp23;
        cResult[6] = isImageQuestionResult;
        let tmp25 = isImageQuestionResult;
        const tmpResult = clarification(17239);
      } else {
        tmp25 = cResult[6];
      }
      closure_14 = tmp25;
      if (true === tmp23.multi_select) {
        let tmp27 = tmp6Result5[0][tmp23.id];
        if (tmp27 == null) {
          tmp27 = closure_9;
        }
        let optionHeader = tmp27;
      } else {
        optionHeader = clarification(17239).answeredOptionIds(first1[tmp23.id]);
        const tmpResult5 = clarification(17239);
      }
      const tmp6Result7 = first1(noop.useState(tmp17), 2);
      const conjureOwnImages = clarification(17240).useConjureOwnImages(projectId, first1, tmp9);
      if (cResult[7] === first1) {
        if (cResult[8] === clarification) {
          if (cResult[9] === bound) {
            if (cResult[10] === onSubmit) {
              if (cResult[11] === tmp23.id) {
                let tmp28 = cResult[12];
              }
              closure_16 = tmp28;
              if (cResult[13] === tmp24) {
                if (cResult[14] === tmp25) {
                  if (cResult[15] === tmp23) {
                    if (cResult[16] === tmp28) {
                      let tmp29 = cResult[17];
                    }
                    closure_17 = tmp29;
                    if (cResult[18] === tmp21) {
                      if (cResult[19] === bound) {
                        let tmp30 = cResult[20];
                      }
                      let str = tmp6Result[0][tmp23.id];
                      if (str == null) {
                        str = "";
                      }
                      let multiSelectAnswerResult = null;
                      if (tmp24) {
                        const tmpResult7 = clarification(17241);
                        multiSelectAnswerResult = tmpResult7.multiSelectAnswer(
                          tmp23,
                          optionHeader,
                          str,
                          conjureOwnImages.multiPartFor(tmp23),
                        );
                      }
                      if (cResult[21] === str) {
                        if (cResult[22] === tmp16) {
                          if (cResult[23] === tmp19) {
                            if (cResult[24] === tmp23.id) {
                              if (cResult[25] === tmp23.input) {
                                id = cResult[26];
                              }
                              if (cResult[27] !== tmp23.id) {
                                function fe(arg0, arg1) {
                                  closure_0 = arg0;
                                  closure_1 = arg1;
                                  closure_7((arg0) => {
                                    const obj = {};
                                    const merged = Object.assign(arg0);
                                    obj[user.id] = closure_0;
                                    return obj;
                                  });
                                  closure_8((arg0) => {
                                    const obj = {};
                                    const merged = Object.assign(arg0);
                                    obj[user.id] = closure_1;
                                    return obj;
                                  });
                                }
                                cResult[27] = tmp23.id;
                                cResult[28] = fe;
                                let tmp42 = fe;
                              } else {
                                tmp42 = cResult[28];
                              }
                              if (cResult[29] === str) {
                                if (cResult[30] === multiSelectAnswerResult) {
                                  if (cResult[31] === id) {
                                    if (cResult[32] === tmp28) {
                                      let tmp43 = cResult[33];
                                    }
                                    if (cResult[34] === first1) {
                                      if (cResult[35] === str) {
                                        if (cResult[36] === multiSelectAnswerResult) {
                                          if (cResult[37] === id) {
                                            if (cResult[38] === tmp23.id) {
                                              closure_21 = tmp44;
                                              if (cResult[40] === tmp43) {
                                                if (cResult[41] === str) {
                                                  if (cResult[42] === tmp25) {
                                                    if (cResult[43] === tmp23.id) {
                                                      if (cResult[44] === tmp23.question) {
                                                        let tmp50 = cResult[45];
                                                      }
                                                      if (cResult[46] === bound) {
                                                        if (cResult[47] === length) {
                                                          let tmp54 = cResult[48];
                                                        }
                                                        if (cResult[49] !== tmp23.question) {
                                                          const obj8 = {
                                                            variant: "text-md/semibold",
                                                            color: "text-default",
                                                            accessibilityRole: "header",
                                                            children: tmp23.question,
                                                          };
                                                          const tmp60 = closure_6(clarification(5088).Text, obj8);
                                                          cResult[49] = tmp23.question;
                                                          cResult[50] = tmp60;
                                                          let tmp58 = tmp60;
                                                        } else {
                                                          tmp58 = cResult[50];
                                                        }
                                                        if (cResult[51] === tmp4.customField) {
                                                          if (cResult[52] === tmp54) {
                                                            if (cResult[53] === tmp58) {
                                                              let tmp61 = cResult[54];
                                                            }
                                                            if (cResult[55] !== onDismiss) {
                                                              let tmp66 = null;
                                                              if (null != onDismiss) {
                                                                const obj9 = {
                                                                  variant: "tertiary",
                                                                  size: "sm",
                                                                  icon: closure_6(clarification(6207).XSmallIcon, {
                                                                    size: "sm",
                                                                  }),
                                                                  onPress: onDismiss,
                                                                  accessibilityLabel: null,
                                                                };
                                                                const intl4 = clarification(1126).intl;
                                                                obj9.accessibilityLabel = intl4.string(
                                                                  onSubmit(3849).qVXlk0,
                                                                );
                                                                tmp66 = closure_6(clarification(7573).IconButton, obj9);
                                                              }
                                                              cResult[55] = onDismiss;
                                                              cResult[56] = tmp66;
                                                              let tmp65 = tmp66;
                                                            } else {
                                                              tmp65 = cResult[56];
                                                            }
                                                            if (cResult[57] === tmp4.footer) {
                                                              if (cResult[58] === tmp61) {
                                                                if (cResult[59] === tmp65) {
                                                                  let tmp69 = cResult[60];
                                                                }
                                                                if (cResult[61] !== tmp24) {
                                                                  let tmp74 = null;
                                                                  if (tmp24) {
                                                                    const obj10 = {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-muted",
                                                                      children: null,
                                                                    };
                                                                    const intl5 = clarification(1126).intl;
                                                                    obj10.children = intl5.string(
                                                                      onSubmit(3849).tE8qbz,
                                                                    );
                                                                    tmp74 = closure_6(clarification(5088).Text, obj10);
                                                                  }
                                                                  cResult[61] = tmp24;
                                                                  cResult[62] = tmp74;
                                                                  let tmp73 = tmp74;
                                                                } else {
                                                                  tmp73 = cResult[62];
                                                                }
                                                                if (cResult[63] === tmp21) {
                                                                  if (cResult[64] === tmp29) {
                                                                    if (cResult[65] === tmp24) {
                                                                      if (cResult[66] === conjureOwnImages) {
                                                                        if (cResult[67] === tmp25) {
                                                                          if (cResult[68] === projectId) {
                                                                            if (cResult[69] === tmp23) {
                                                                              if (cResult[70] === optionHeader) {
                                                                                if (cResult[71] === tmp4.optionHeader) {
                                                                                  if (cResult[73] === tmp21) {
                                                                                    if (cResult[74] === tmp16) {
                                                                                      if (cResult[75] === tmp50) {
                                                                                        if (cResult[76] === tmp42) {
                                                                                          if (
                                                                                            cResult[77] === projectId
                                                                                          ) {
                                                                                            if (cResult[78] === tmp23) {
                                                                                              let tmp84 = cResult[79];
                                                                                            }
                                                                                            let tmp91 = null;
                                                                                            if (
                                                                                              false !==
                                                                                              tmp23.allow_custom
                                                                                            ) {
                                                                                              tmp91 = tmp50;
                                                                                            }
                                                                                            if (cResult[80] === tmp21) {
                                                                                              if (
                                                                                                cResult[81] === tmp30
                                                                                              ) {
                                                                                                if (
                                                                                                  cResult[82] === bound
                                                                                                ) {
                                                                                                  if (
                                                                                                    cResult[83] ===
                                                                                                    tmp24
                                                                                                  ) {
                                                                                                    if (
                                                                                                      cResult[84] ===
                                                                                                      tmp44
                                                                                                    ) {
                                                                                                      if (
                                                                                                        cResult[85] ===
                                                                                                        tmp25
                                                                                                      ) {
                                                                                                        if (
                                                                                                          cResult[86] ===
                                                                                                          tmp23.input
                                                                                                        ) {
                                                                                                          if (
                                                                                                            cResult[87] ===
                                                                                                            tmp28
                                                                                                          ) {
                                                                                                            if (
                                                                                                              cResult[88] ===
                                                                                                              tmp4.customField
                                                                                                            ) {
                                                                                                              if (
                                                                                                                cResult[89] ===
                                                                                                                tmp4.footer
                                                                                                              ) {
                                                                                                                if (
                                                                                                                  cResult[90] ===
                                                                                                                  tmp92
                                                                                                                ) {
                                                                                                                  if (
                                                                                                                    cResult[91] ===
                                                                                                                    length
                                                                                                                  ) {
                                                                                                                    let tmp93 =
                                                                                                                      cResult[92];
                                                                                                                  }
                                                                                                                  if (
                                                                                                                    cResult[93] ===
                                                                                                                    tmp4.card
                                                                                                                  ) {
                                                                                                                    if (
                                                                                                                      cResult[94] ===
                                                                                                                      tmp69
                                                                                                                    ) {
                                                                                                                      if (
                                                                                                                        cResult[95] ===
                                                                                                                        tmp73
                                                                                                                      ) {
                                                                                                                        if (
                                                                                                                          cResult[96] ===
                                                                                                                          tmp77
                                                                                                                        ) {
                                                                                                                          if (
                                                                                                                            cResult[97] ===
                                                                                                                            tmp84
                                                                                                                          ) {
                                                                                                                            if (
                                                                                                                              cResult[98] ===
                                                                                                                              tmp91
                                                                                                                            ) {
                                                                                                                              if (
                                                                                                                                cResult[99] ===
                                                                                                                                tmp93
                                                                                                                              ) {
                                                                                                                                let tmp104 =
                                                                                                                                  cResult[100];
                                                                                                                              }
                                                                                                                              return tmp104;
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                  const obj11 =
                                                                                                                    {
                                                                                                                      style:
                                                                                                                        tmp4.card,
                                                                                                                      children:
                                                                                                                        null,
                                                                                                                    };
                                                                                                                  let items =
                                                                                                                    [
                                                                                                                      tmp69,
                                                                                                                      tmp73,
                                                                                                                      tmp77,
                                                                                                                      tmp84,
                                                                                                                      tmp91,
                                                                                                                      tmp93,
                                                                                                                    ];
                                                                                                                  obj11.children =
                                                                                                                    items;
                                                                                                                  const tmp107 =
                                                                                                                    closure_7(
                                                                                                                      onSubmit(
                                                                                                                        17149,
                                                                                                                      ),
                                                                                                                      obj11,
                                                                                                                    );
                                                                                                                  cResult[93] =
                                                                                                                    tmp4.card;
                                                                                                                  cResult[94] =
                                                                                                                    tmp69;
                                                                                                                  cResult[95] =
                                                                                                                    tmp73;
                                                                                                                  cResult[96] =
                                                                                                                    tmp77;
                                                                                                                  cResult[97] =
                                                                                                                    tmp84;
                                                                                                                  cResult[98] =
                                                                                                                    tmp91;
                                                                                                                  cResult[99] =
                                                                                                                    tmp93;
                                                                                                                  cResult[100] =
                                                                                                                    tmp107;
                                                                                                                  tmp104 =
                                                                                                                    tmp107;
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                            if (length <= 1) {
                                                                                              if (!tmp24) {
                                                                                                if (!tmp25) {
                                                                                                  if (
                                                                                                    null == tmp23.input
                                                                                                  ) {
                                                                                                    cResult[80] = tmp21;
                                                                                                    cResult[81] = tmp30;
                                                                                                    cResult[82] = bound;
                                                                                                    cResult[83] = tmp24;
                                                                                                    cResult[84] = tmp44;
                                                                                                    cResult[85] = tmp25;
                                                                                                    cResult[86] =
                                                                                                      tmp23.input;
                                                                                                    cResult[87] = tmp28;
                                                                                                    cResult[88] =
                                                                                                      tmp4.customField;
                                                                                                    cResult[89] =
                                                                                                      tmp4.footer;
                                                                                                    cResult[90] = tmp92;
                                                                                                    cResult[91] =
                                                                                                      length;
                                                                                                    cResult[92] = null;
                                                                                                    tmp93 = null;
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                            const obj12 = {
                                                                                              style: tmp4.footer,
                                                                                              children: null,
                                                                                            };
                                                                                            let tmp97 = null;
                                                                                            if (bound > 0) {
                                                                                              tmp97 = null;
                                                                                              if (!tmp21) {
                                                                                                const obj13 = {
                                                                                                  variant: "tertiary",
                                                                                                  size: "sm",
                                                                                                  text: null,
                                                                                                  onPress: null,
                                                                                                };
                                                                                                const intl6 =
                                                                                                  clarification(
                                                                                                    1126,
                                                                                                  ).intl;
                                                                                                obj13.text =
                                                                                                  intl6.string(
                                                                                                    onSubmit(3849)
                                                                                                      .Pk5lfA,
                                                                                                  );
                                                                                                obj13.onPress = tmp30;
                                                                                                tmp97 = closure_6(
                                                                                                  clarification(5379)
                                                                                                    .Button,
                                                                                                  obj13,
                                                                                                );
                                                                                              }
                                                                                            }
                                                                                            let items1 = [tmp97, ,];
                                                                                            const obj14 = {
                                                                                              style: tmp4.customField,
                                                                                            };
                                                                                            items1[1] = closure_6(
                                                                                              closure_5,
                                                                                              obj14,
                                                                                            );
                                                                                            let tmp101 = tmp21;
                                                                                            if (!tmp21) {
                                                                                              tmp101 = null == tmp44;
                                                                                            }
                                                                                            let obj15 = {
                                                                                              variant: "primary",
                                                                                              size: "sm",
                                                                                              disabled: tmp101,
                                                                                              text: null,
                                                                                              onPress: null,
                                                                                            };
                                                                                            const intl7 =
                                                                                              clarification(1126).intl;
                                                                                            if (bound === tmp49) {
                                                                                              let w1nRmT =
                                                                                                clarification(1126).t
                                                                                                  .geKm7t;
                                                                                            } else {
                                                                                              w1nRmT =
                                                                                                onSubmit(3849).w1nRmT;
                                                                                            }
                                                                                            obj15.text =
                                                                                              intl7.string(w1nRmT);
                                                                                            obj15.onPress =
                                                                                              function onPress() {
                                                                                                if (
                                                                                                  null != closure_21
                                                                                                ) {
                                                                                                  closure_16(tmp);
                                                                                                }
                                                                                              };
                                                                                            obj15 = closure_6(
                                                                                              clarification(5379)
                                                                                                .Button,
                                                                                              obj15,
                                                                                            );
                                                                                            items1[2] = obj15;
                                                                                            obj12.children = items1;
                                                                                            closure_7(closure_5, obj12);
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  let tmp86Result = null;
                                                                                  if (null != tmp23.input) {
                                                                                    const obj16 = {
                                                                                      projectId,
                                                                                      question: tmp23,
                                                                                      value: null,
                                                                                      disabled: null,
                                                                                      onChange: null,
                                                                                      fallback: null,
                                                                                    };
                                                                                    let tmp89 = tmp16[tmp23.id];
                                                                                    if (tmp89 == null) {
                                                                                      tmp89 = disabled;
                                                                                    }
                                                                                    obj16.value = tmp89;
                                                                                    obj16.disabled = tmp21;
                                                                                    obj16.onChange = tmp42;
                                                                                    let tmp90 = null;
                                                                                    if (false === tmp23.allow_custom) {
                                                                                      tmp90 = tmp50;
                                                                                    }
                                                                                    obj16.fallback = tmp90;
                                                                                    tmp86Result = closure_6(
                                                                                      onSubmit(17248),
                                                                                      obj16,
                                                                                    );
                                                                                    const tmp88 = onSubmit(17248);
                                                                                  }
                                                                                  cResult[73] = tmp21;
                                                                                  cResult[74] = tmp16;
                                                                                  cResult[75] = tmp50;
                                                                                  cResult[76] = tmp42;
                                                                                  cResult[77] = projectId;
                                                                                  cResult[78] = tmp23;
                                                                                  cResult[79] = tmp86Result;
                                                                                  tmp84 = tmp86Result;
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                                if (tmp25) {
                                                                  const obj17 = {
                                                                    projectId,
                                                                    question: tmp23,
                                                                    selectedIds: optionHeader,
                                                                    disabled: tmp21,
                                                                    onPick: tmp29,
                                                                    own: conjureOwnImages.controlsFor(tmp23, tmp21),
                                                                  };
                                                                  let mapped = closure_6(onSubmit(17242), obj17);
                                                                  const tmp82 = onSubmit(17242);
                                                                } else if (tmp24) {
                                                                  const obj18 = { hasIcons: false, children: null };
                                                                  options = tmp23.options;
                                                                  obj18.children = options.map((label) => {
                                                                    closure_0 = label;
                                                                    const obj = {
                                                                      label: label.label,
                                                                      subLabel: null,
                                                                      checked: null,
                                                                      disabled: null,
                                                                      onPress: null,
                                                                    };
                                                                    str = "";
                                                                    if (true === label.recommended) {
                                                                      const intl = clarification(optionHeader[6]).intl;
                                                                      str = intl.string(
                                                                        onSubmit(optionHeader[7]).zku6r1,
                                                                      );
                                                                    }
                                                                    const items = [str];
                                                                    let str2 = label.detail;
                                                                    if (str2 == null) {
                                                                      str2 = "";
                                                                    }
                                                                    items[1] = str2;
                                                                    const found = items.filter((item) => "" !== item);
                                                                    let joined;
                                                                    if (found.length > 0) {
                                                                      joined = found.join(" \u00B7 ");
                                                                    }
                                                                    obj.subLabel = joined;
                                                                    obj.checked = optionHeader.includes(label.id);
                                                                    obj.disabled = disabled;
                                                                    obj.onPress = function onPress() {
                                                                      return closure_17(closure_0);
                                                                    };
                                                                    return closure_6(
                                                                      clarification(optionHeader[19]).TableCheckboxRow,
                                                                      obj,
                                                                      label.id,
                                                                    );
                                                                  });
                                                                  mapped = closure_6(
                                                                    clarification(6264).TableRowGroup,
                                                                    obj18,
                                                                  );
                                                                } else {
                                                                  const options1 = tmp23.options;
                                                                  mapped = options1.map((answer) => {
                                                                    closure_0 = answer;
                                                                    let fn;
                                                                    if (!closure_10) {
                                                                      fn = () => closure_17(closure_0);
                                                                    }
                                                                    const obj = {
                                                                      onPress: fn,
                                                                      accessibilityLabel: null,
                                                                      children: null,
                                                                    };
                                                                    const intl = clarification(optionHeader[6]).intl;
                                                                    if (true === answer.recommended) {
                                                                      let AQbxhf = onSubmit(optionHeader[7])["2p6UFz"];
                                                                      let tmp5 = onSubmit;
                                                                    } else {
                                                                      AQbxhf = onSubmit(optionHeader[7]).AQbxhf;
                                                                      tmp5 = onSubmit;
                                                                    }
                                                                    obj.accessibilityLabel = intl.formatToPlainString(
                                                                      AQbxhf,
                                                                      { answer: answer.label },
                                                                    );
                                                                    const obj3 = {
                                                                      style: optionHeader.optionHeader,
                                                                      children: null,
                                                                    };
                                                                    const items = [
                                                                      closure_6(clarification(optionHeader[14]).Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "text-default",
                                                                        children: answer.label,
                                                                      }),
                                                                    ];
                                                                    let tmp8Result = null;
                                                                    if (true === answer.recommended) {
                                                                      const obj5 = {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: null,
                                                                      };
                                                                      const intl2 = clarification(optionHeader[6]).intl;
                                                                      obj5.children = intl2.string(
                                                                        tmp5(optionHeader[7]).zku6r1,
                                                                      );
                                                                      tmp8Result = closure_6(
                                                                        clarification(optionHeader[14]).Text,
                                                                        obj5,
                                                                      );
                                                                    }
                                                                    items[1] = tmp8Result;
                                                                    obj3.children = items;
                                                                    const items1 = [closure_1_7(closure_5, obj3)];
                                                                    let tmp8Result2 = null;
                                                                    if (null != answer.detail) {
                                                                      tmp8Result2 = null;
                                                                      if ("" !== answer.detail) {
                                                                        const obj6 = {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: answer.detail,
                                                                        };
                                                                        tmp8Result2 = closure_6(
                                                                          clarification(optionHeader[14]).Text,
                                                                          obj6,
                                                                        );
                                                                      }
                                                                    }
                                                                    items1[1] = tmp8Result2;
                                                                    obj.children = items1;
                                                                    return closure_1_7(
                                                                      clarification(optionHeader[20]).Card,
                                                                      obj,
                                                                      answer.id,
                                                                    );
                                                                  });
                                                                }
                                                                cResult[63] = tmp21;
                                                                cResult[64] = tmp29;
                                                                cResult[65] = tmp24;
                                                                cResult[66] = conjureOwnImages;
                                                                cResult[67] = tmp25;
                                                                cResult[68] = projectId;
                                                                cResult[69] = tmp23;
                                                                cResult[70] = optionHeader;
                                                                optionHeader = tmp4.optionHeader;
                                                                cResult[71] = optionHeader;
                                                                cResult[72] = mapped;
                                                              }
                                                            }
                                                            const obj19 = { style: tmp4.footer, children: null };
                                                            const items2 = [tmp61, tmp65];
                                                            obj19.children = items2;
                                                            const tmp72 = closure_7(closure_5, obj19);
                                                            cResult[57] = tmp4.footer;
                                                            cResult[58] = tmp61;
                                                            cResult[59] = tmp65;
                                                            cResult[60] = tmp72;
                                                            tmp69 = tmp72;
                                                          }
                                                        }
                                                        const obj20 = { style: tmp4.customField, children: null };
                                                        const items3 = [tmp54, tmp58];
                                                        obj20.children = items3;
                                                        const tmp64 = closure_7(closure_5, obj20);
                                                        cResult[51] = tmp4.customField;
                                                        cResult[52] = tmp54;
                                                        cResult[53] = tmp58;
                                                        cResult[54] = tmp64;
                                                        tmp61 = tmp64;
                                                      }
                                                      let tmp55 = null;
                                                      if (length > 1) {
                                                        const obj21 = {
                                                          variant: "text-xs/semibold",
                                                          color: "text-muted",
                                                          children: null,
                                                        };
                                                        const intl3 = clarification(1126).intl;
                                                        const obj22 = { index: bound + 1, total: length };
                                                        obj21.children = intl3.formatToPlainString(
                                                          onSubmit(3849).yzYUjq,
                                                          obj22,
                                                        );
                                                        tmp55 = closure_6(clarification(5088).Text, obj21);
                                                      }
                                                      cResult[46] = bound;
                                                      cResult[47] = length;
                                                      cResult[48] = tmp55;
                                                      tmp54 = tmp55;
                                                    }
                                                  }
                                                }
                                              }
                                              let tmp51 = null;
                                              if (!tmp25) {
                                                const obj23 = {
                                                  size: "md",
                                                  placeholder: null,
                                                  accessibilityLabel: null,
                                                  value: null,
                                                  onChange: null,
                                                  onSubmitEditing: null,
                                                  returnKeyType: "send",
                                                };
                                                let intl = clarification(1126).intl;
                                                obj23.placeholder = intl.string(onSubmit(3849)["tOC+tn"]);
                                                let intl2 = clarification(1126).intl;
                                                const obj24 = { question: tmp23.question };
                                                obj23.accessibilityLabel = intl2.formatToPlainString(
                                                  onSubmit(3849)["4JeYPB"],
                                                  obj24,
                                                );
                                                obj23.value = str;
                                                obj23.onChange = function onChange(arg0) {
                                                  closure_0 = arg0;
                                                  return closure_5((arg0) => {
                                                    const obj = {};
                                                    const merged = Object.assign(arg0);
                                                    obj[id.id] = closure_0;
                                                    return obj;
                                                  });
                                                };
                                                obj23.onSubmitEditing = tmp43;
                                                tmp51 = closure_6(clarification(6285).TextInput, obj23);
                                              }
                                              cResult[40] = tmp43;
                                              cResult[41] = str;
                                              cResult[42] = tmp25;
                                              cResult[43] = tmp23.id;
                                              cResult[44] = tmp23.question;
                                              cResult[45] = tmp51;
                                              tmp50 = tmp51;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (null != id) {
                                      let tmp47 = null;
                                      if ("" !== id.text) {
                                        tmp47 = id;
                                      }
                                      let tmp45 = tmp47;
                                    } else if (null != multiSelectAnswerResult) {
                                      let tmp46 = null;
                                      if ("" !== multiSelectAnswerResult.text) {
                                        tmp46 = multiSelectAnswerResult;
                                      }
                                      tmp45 = tmp46;
                                    } else if ("" !== str.trim()) {
                                      const obj25 = { kind: "custom", text: str.trim() };
                                      tmp45 = obj25;
                                    } else {
                                      tmp45 = first1[tmp23.id];
                                      if (tmp45 == null) {
                                        tmp45 = null;
                                      }
                                    }
                                    cResult[34] = first1;
                                    cResult[35] = str;
                                    cResult[36] = multiSelectAnswerResult;
                                    cResult[37] = id;
                                    id = tmp23.id;
                                    cResult[38] = id;
                                    cResult[39] = tmp45;
                                  }
                                }
                              }
                              function ve() {
                                if (null == id) {
                                  if (null == multiSelectAnswerResult) {
                                    const trimmed = str.trim();
                                    if ("" !== trimmed) {
                                      const obj = { kind: "custom", text: trimmed };
                                      closure_16(obj);
                                    }
                                  } else if ("" !== multiSelectAnswerResult.text) {
                                    closure_16(multiSelectAnswerResult);
                                  }
                                } else if ("" !== id.text) {
                                  closure_16(id);
                                }
                              }
                              cResult[29] = str;
                              cResult[30] = multiSelectAnswerResult;
                              cResult[31] = id;
                              cResult[32] = tmp28;
                              cResult[33] = ve;
                              tmp43 = ve;
                            }
                          }
                        }
                      }
                      let entityAnswerResult = null;
                      if (null != tmp23.input) {
                        const tmpResult8 = clarification(17241);
                        const input = tmp23.input;
                        let tmp37 = tmp16[tmp23.id];
                        if (tmp37 == null) {
                          tmp37 = disabled;
                        }
                        entityAnswerResult = tmpResult8.entityAnswer(input, tmp37, str, tmp19[tmp23.id]);
                      }
                      cResult[21] = str;
                      cResult[22] = tmp16;
                      cResult[23] = tmp19;
                      cResult[24] = tmp23.id;
                      cResult[25] = tmp23.input;
                      cResult[26] = entityAnswerResult;
                      id = entityAnswerResult;
                    }
                    function de() {
                      let tmp = closure_10;
                      if (!closure_10) {
                        tmp = 0 === bound;
                      }
                      if (!tmp) {
                        closure_9(bound - 1);
                      }
                    }
                    cResult[18] = tmp21;
                    cResult[19] = bound;
                    cResult[20] = de;
                    tmp30 = de;
                  }
                }
              }
              function re(arg0) {
                id = arg0;
                if (closure_13) {
                  closure_6((arr) => {
                    obj = {};
                    const merged = Object.assign(arr);
                    let tmp3 = arr[user.id];
                    if (tmp3 == null) {
                      tmp3 = closure_9;
                    }
                    obj[user.id] = ConjureClarification.toggleClarificationOption(user, tmp3, id.id);
                    return obj;
                  });
                } else {
                  closure_5((arg0) => {
                    obj = {};
                    const merged = Object.assign(arg0);
                    obj[user.id] = "";
                    return obj;
                  });
                  let obj = { kind: "option", optionId: null, text: null };
                  ({ id: obj.optionId, label: obj.text } = arg0);
                  if (closure_14) {
                    closure_4((arg0) => {
                      obj = {};
                      const merged = Object.assign(arg0);
                      obj[user.id] = obj;
                      return obj;
                    });
                  } else {
                    closure_16(obj);
                  }
                }
              }
              cResult[13] = tmp24;
              cResult[14] = tmp25;
              cResult[15] = tmp23;
              cResult[16] = tmp28;
              cResult[17] = re;
              tmp29 = re;
            }
          }
        }
      }
      function le(arg0) {
        if (null != onSubmit) {
          const obj = {};
          const merged = Object.assign(first1);
          obj[id.id] = arg0;
          closure_4(obj);
          const result = ConjureClarification.followingClarificationStep(clarification, obj, bound);
          if (null == result) {
            const result1 = ConjureClarification.formatClarificationAnswers(clarification, obj);
            if ("" !== result1) {
              const result2 = ConjureClarification.clarificationAnswersPayload(clarification, obj);
              const tmp14Result3 = ConjureClarification;
              tmp(result1, result2, ConjureClarification.clarificationAnswerAttachments(clarification, obj));
              const tmp14Result4 = ConjureClarification;
            }
            const tmp14Result = ConjureClarification;
          } else {
            closure_9(result);
          }
        }
      }
      cResult[7] = first1;
      cResult[8] = clarification;
      cResult[9] = bound;
      cResult[10] = onSubmit;
      cResult[11] = tmp23.id;
      cResult[12] = le;
      tmp28 = le;
      const tmpResult6 = clarification(17240);
    }
  : function ConjureClarificationCard(onSubmit) {
      ({ projectId, clarification } = onSubmit);
      onSubmit = onSubmit.onSubmit;
      const onDismiss = onSubmit.onDismiss;
      let first;
      noop = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      closure_8 = undefined;
      c15 = undefined;
      let callback;
      let callback1;
      let str;
      c19 = undefined;
      c20 = undefined;
      c21 = undefined;
      let tmp = closure_8();
      dependencyMap = tmp;
      const tmp2 = first(noop.useState({}), 2);
      first = tmp2[0];
      noop = tmp4;
      [tmp6, c5] = first(noop.useState({}), 2);
      let tmp5 = first(noop.useState({}), 2);
      [tmp8, c6] = first(noop.useState({}), 2);
      const tmp7 = first(noop.useState({}), 2);
      [tmp10, c7] = first(noop.useState({}), 2);
      const tmp11 = first(noop.useState({}), 2);
      closure_8 = tmp11[1];
      const tmp12 = first(noop.useState(0), 2);
      closure_9 = tmp12[1];
      let tmp13 = null == onSubmit;
      const disabled = tmp13;
      const bound = Math.min(tmp12[0], length - 1);
      let id = tmp15;
      closure_13 = tmp16;
      let t = dependencyMap;
      const tmp9 = first(noop.useState({}), 2);
      const isImageQuestionResult = clarification(17239).isImageQuestion(clarification.questions[bound]);
      c14 = isImageQuestionResult;
      if (true === clarification.questions[bound].multi_select) {
        let tmp20 = tmp8[tmp15.id];
        if (tmp20 == null) {
          tmp20 = closure_9;
        }
        let answeredOptionIdsResult = tmp20;
      } else {
        answeredOptionIdsResult = tmp17(17239).answeredOptionIds(first[tmp15.id]);
        const tmp17Result = tmp17(17239);
      }
      c15 = answeredOptionIdsResult;
      const obj2 = clarification(17239);
      const conjureOwnImages = clarification(17240).useConjureOwnImages(projectId, first, tmp4);
      let items = [first, clarification, bound, onSubmit, clarification.questions[bound].id];
      callback = obj.useCallback((arg0) => {
        if (null != onSubmit) {
          const obj = {};
          const merged = Object.assign(first);
          obj[id.id] = arg0;
          closure_4(obj);
          const result = ConjureClarification.followingClarificationStep(clarification, obj, bound);
          if (null == result) {
            const result1 = ConjureClarification.formatClarificationAnswers(clarification, obj);
            if ("" !== result1) {
              const result2 = ConjureClarification.clarificationAnswersPayload(clarification, obj);
              const tmp14Result3 = ConjureClarification;
              tmp(result1, result2, ConjureClarification.clarificationAnswerAttachments(clarification, obj));
              const tmp14Result4 = ConjureClarification;
            }
            const tmp14Result = ConjureClarification;
          } else {
            closure_9(result);
          }
        }
      }, items);
      let items1 = [
        true === clarification.questions[bound].multi_select,
        isImageQuestionResult,
        clarification.questions[bound],
        callback,
      ];
      callback1 = obj.useCallback((arg0) => {
        id = arg0;
        if (closure_13) {
          _undefined2((arr) => {
            obj = {};
            const merged = Object.assign(arr);
            let tmp3 = arr[user.id];
            if (tmp3 == null) {
              tmp3 = closure_9;
            }
            obj[user.id] = ConjureClarification.toggleClarificationOption(user, tmp3, id.id);
            return obj;
          });
        } else {
          _undefined((arg0) => {
            obj = {};
            const merged = Object.assign(arg0);
            obj[user.id] = "";
            return obj;
          });
          let obj = { kind: "option", optionId: null, text: null };
          ({ id: obj.optionId, label: obj.text } = arg0);
          if (c14) {
            closure_4((arg0) => {
              obj = {};
              const merged = Object.assign(arg0);
              obj[user.id] = obj;
              return obj;
            });
          } else {
            callback(obj);
          }
        }
      }, items1);
      const items2 = [tmp13, bound];
      str = tmp6[tmp15.id];
      const callback2 = obj.useCallback(() => {
        let tmp = closure_10;
        if (!closure_10) {
          tmp = 0 === bound;
        }
        if (!tmp) {
          closure_9(bound - 1);
        }
      }, items2);
      if (str == null) {
        str = "";
      }
      let multiSelectAnswerResult = null;
      if (true === clarification.questions[bound].multi_select) {
        const tmp17Result5 = tmp17(17241);
        multiSelectAnswerResult = tmp17Result5.multiSelectAnswer(
          tmp15,
          answeredOptionIdsResult,
          str,
          conjureOwnImages.multiPartFor(tmp15),
        );
      }
      c19 = multiSelectAnswerResult;
      let entityAnswerResult = null;
      if (null != clarification.questions[bound].input) {
        const tmp17Result6 = tmp17(17241);
        const input = tmp15.input;
        let tmp30 = tmp10[tmp15.id];
        if (tmp30 == null) {
          tmp30 = disabled;
        }
        entityAnswerResult = tmp17Result6.entityAnswer(input, tmp30, str, tmp11[0][tmp15.id]);
      }
      c20 = entityAnswerResult;
      const items3 = [clarification.questions[bound].id];
      const items4 = [str, multiSelectAnswerResult, entityAnswerResult, callback];
      const callback3 = obj.useCallback((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        _undefined3((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[user.id] = closure_0;
          return obj;
        });
        closure_8((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[user.id] = closure_1;
          return obj;
        });
      }, items3);
      const callback4 = obj.useCallback(() => {
        if (null == _undefined4) {
          if (null == _undefined) {
            const trimmed = str.trim();
            if ("" !== trimmed) {
              const obj = { kind: "custom", text: trimmed };
              callback(obj);
            }
          } else if ("" !== _undefined.text) {
            callback(_undefined);
          }
        } else if ("" !== _undefined4.text) {
          callback(_undefined4);
        }
      }, items4);
      if (null != entityAnswerResult) {
        let tmp39 = null;
        if ("" !== entityAnswerResult.text) {
          tmp39 = entityAnswerResult;
        }
        let tmp37 = tmp39;
      } else if (null != multiSelectAnswerResult) {
        let tmp38 = null;
        if ("" !== multiSelectAnswerResult.text) {
          tmp38 = multiSelectAnswerResult;
        }
        tmp37 = tmp38;
      } else if ("" !== str.trim()) {
        let obj3 = { kind: "custom", text: str.trim() };
        tmp37 = obj3;
      } else {
        tmp37 = first[tmp15.id];
        if (tmp37 == null) {
          tmp37 = null;
        }
      }
      c21 = tmp37;
      let tmp40 = null;
      if (!isImageQuestionResult) {
        const obj4 = {
          size: "md",
          placeholder: null,
          accessibilityLabel: null,
          value: null,
          onChange: null,
          onSubmitEditing: null,
          returnKeyType: "send",
        };
        let intl = tmp17(1126).intl;
        obj4.placeholder = intl.string(onSubmit(3849)["tOC+tn"]);
        let intl2 = tmp17(1126).intl;
        let obj5 = { question: tmp15.question };
        obj4.accessibilityLabel = intl2.formatToPlainString(onSubmit(3849)["4JeYPB"], obj5);
        obj4.value = str;
        obj4.onChange = function onChange(arg0) {
          closure_0 = arg0;
          return _undefined((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[id.id] = closure_0;
            return obj;
          });
        };
        obj4.onSubmitEditing = callback4;
        tmp40 = c6(tmp17(6285).TextInput, obj4);
      }
      let obj6 = { style: tmp.card, children: null };
      const obj7 = { style: tmp.footer, children: null };
      const obj8 = { style: tmp.customField, children: null };
      let tmp47 = null;
      const tmp17Result4 = clarification(17240);
      if (clarification.questions.length > 1) {
        const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: null };
        const intl3 = tmp17(1126).intl;
        const obj10 = { index: bound + 1, total: length };
        obj9.children = intl3.formatToPlainString(tmp44(3849).yzYUjq, obj10);
        tmp47 = c6(tmp17(5088).Text, obj9);
      }
      const items5 = [
        tmp47,
        c6(clarification(5088).Text, {
          variant: "text-md/semibold",
          color: "text-default",
          accessibilityRole: "header",
          children: clarification.questions[bound].question,
        }),
      ];
      obj8.children = items5;
      const items6 = [c7(c5, obj8)];
      let tmp49Result = null;
      if (null != onDismiss) {
        const obj12 = {
          variant: "tertiary",
          size: "sm",
          icon: tmp49(tmp17(6207).XSmallIcon, { size: "sm" }),
          onPress: onDismiss,
          accessibilityLabel: null,
        };
        const intl4 = tmp17(1126).intl;
        obj12.accessibilityLabel = intl4.string(tmp44(3849).qVXlk0);
        tmp49Result = tmp49(tmp17(7573).IconButton, obj12);
      }
      items6[1] = tmp49Result;
      obj7.children = items6;
      const items7 = [c7(c5, obj7), , , , ,];
      let tmp49Result5 = null;
      if (true === clarification.questions[bound].multi_select) {
        const obj13 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl5 = tmp17(1126).intl;
        obj13.children = intl5.string(tmp44(3849).tE8qbz);
        tmp49Result5 = tmp49(tmp17(5088).Text, obj13);
      }
      items7[1] = tmp49Result5;
      if (isImageQuestionResult) {
        const obj14 = {
          projectId,
          question: tmp15,
          selectedIds: answeredOptionIdsResult,
          disabled: tmp13,
          onPick: callback1,
          own: conjureOwnImages.controlsFor(tmp15, tmp13),
        };
        let tmp49Result6 = tmp49(tmp44(17242), obj14);
        const tmp44Result = tmp44(17242);
      } else if (tmp16) {
        const obj15 = { hasIcons: false, children: null };
        options = tmp15.options;
        obj15.children = options.map((label) => {
          closure_0 = label;
          const obj = { label: label.label, subLabel: null, checked: null, disabled: null, onPress: null };
          str = "";
          if (true === label.recommended) {
            const intl = clarification(optionHeader[6]).intl;
            str = intl.string(onSubmit(optionHeader[7]).zku6r1);
          }
          const items = [str];
          let str2 = label.detail;
          if (str2 == null) {
            str2 = "";
          }
          items[1] = str2;
          const found = items.filter((item) => "" !== item);
          let joined;
          if (found.length > 0) {
            joined = found.join(" \u00B7 ");
          }
          obj.subLabel = joined;
          obj.checked = _undefined4.includes(label.id);
          obj.disabled = disabled;
          obj.onPress = function onPress() {
            return callback1(closure_0);
          };
          return _undefined2(clarification(optionHeader[19]).TableCheckboxRow, obj, label.id);
        });
        tmp49Result6 = tmp49(tmp17(6264).TableRowGroup, obj15);
      } else {
        const options1 = tmp15.options;
        tmp49Result6 = options1.map((answer) => {
          closure_0 = answer;
          let fn;
          if (!closure_10) {
            fn = () => callback1(closure_0);
          }
          const obj = { onPress: fn, accessibilityLabel: null, children: null };
          const intl = clarification(optionHeader[6]).intl;
          if (true === answer.recommended) {
            let AQbxhf = onSubmit(optionHeader[7])["2p6UFz"];
            let tmp5 = onSubmit;
          } else {
            AQbxhf = onSubmit(optionHeader[7]).AQbxhf;
            tmp5 = onSubmit;
          }
          obj.accessibilityLabel = intl.formatToPlainString(AQbxhf, { answer: answer.label });
          const obj3 = { style: optionHeader.optionHeader, children: null };
          const items = [
            _undefined2(clarification(optionHeader[14]).Text, {
              variant: "text-sm/semibold",
              color: "text-default",
              children: answer.label,
            }),
          ];
          let tmp8Result = null;
          if (true === answer.recommended) {
            const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: null };
            const intl2 = clarification(optionHeader[6]).intl;
            obj5.children = intl2.string(tmp5(optionHeader[7]).zku6r1);
            tmp8Result = _undefined2(clarification(optionHeader[14]).Text, obj5);
          }
          items[1] = tmp8Result;
          obj3.children = items;
          const items1 = [_undefined3(c5, obj3)];
          let tmp8Result2 = null;
          if (null != answer.detail) {
            tmp8Result2 = null;
            if ("" !== answer.detail) {
              const obj6 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
              tmp8Result2 = _undefined2(clarification(optionHeader[14]).Text, obj6);
            }
          }
          items1[1] = tmp8Result2;
          obj.children = items1;
          return _undefined3(clarification(optionHeader[20]).Card, obj, answer.id);
        });
      }
      items7[2] = tmp49Result6;
      let tmp49Result7 = null;
      if (null != clarification.questions[bound].input) {
        const obj16 = { projectId, question: tmp15, value: null, disabled: null, onChange: null, fallback: null };
        let tmp56 = tmp10[tmp15.id];
        if (tmp56 == null) {
          tmp56 = disabled;
        }
        obj16.value = tmp56;
        obj16.disabled = tmp13;
        obj16.onChange = callback3;
        let tmp57 = null;
        if (false === tmp15.allow_custom) {
          tmp57 = tmp40;
        }
        obj16.fallback = tmp57;
        tmp49Result7 = tmp49(tmp44(17248), obj16);
        const tmp44Result2 = tmp44(17248);
      }
      items7[3] = tmp49Result7;
      let tmp58 = null;
      if (false !== clarification.questions[bound].allow_custom) {
        tmp58 = tmp40;
      }
      items7[4] = tmp58;
      if (clarification.questions.length <= 1) {
        if (!tmp16) {
          if (!isImageQuestionResult) {
            if (null == tmp15.input) {
              items7[5] = null;
              obj6.children = items7;
              return tmp43(tmp45, obj6);
            }
          }
        }
      }
      const obj17 = { style: tmp.footer, children: null };
      let tmp49Result8 = null;
      if (bound > 0) {
        tmp49Result8 = null;
        if (!tmp13) {
          const obj18 = { variant: "tertiary", size: "sm", text: null, onPress: null };
          const intl6 = tmp17(1126).intl;
          obj18.text = intl6.string(tmp44(3849).Pk5lfA);
          obj18.onPress = callback2;
          tmp49Result8 = tmp49(tmp17(5379).Button, obj18);
        }
      }
      const items8 = [tmp49Result8, c6(c5, { style: tmp.customField })];
      if (!tmp13) {
        tmp13 = null == tmp37;
      }
      let obj20 = { variant: "primary", size: "sm", disabled: tmp13, text: null, onPress: null };
      const intl7 = tmp17(1126).intl;
      if (bound === clarification.questions.length - 1) {
        t = tmp17(1126).t;
        let w1nRmT = t.geKm7t;
      } else {
        w1nRmT = tmp44(3849).w1nRmT;
      }
      obj20.text = intl7.string(w1nRmT);
      obj20.onPress = function onPress() {
        if (null != c21) {
          callback(tmp);
        }
      };
      obj20 = tmp49(tmp17(5379).Button, obj20);
      items8[2] = obj20;
      obj17.children = items8;
      c7(c5, obj17);
    };
