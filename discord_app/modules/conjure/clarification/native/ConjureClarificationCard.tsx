// discord_app/modules/conjure/clarification/native/ConjureClarificationCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConjureClarification from "../ConjureClarification.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4945);
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
  ? function ConjureClarificationCard(projectId) {
      const cResult = projectId(onSubmit[9]).c(102);
      projectId = projectId.projectId;
      const clarification = projectId.clarification;
      onSubmit = projectId.onSubmit;
      ({ onDismiss, onInputFocusChange } = projectId);
      const tmp4 = closure_8();
      noop = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp7 = onInputFocusChange(noop.useState(first), 2);
      const first1 = tmp7[0];
      closure_6 = tmp9;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let obj4 = {};
        cResult[1] = obj4;
        let tmp10 = obj4;
      } else {
        tmp10 = cResult[1];
      }
      const tmp6Result = onInputFocusChange(noop.useState(tmp10), 2);
      closure_7 = tmp6Result[1];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj5 = {};
        cResult[2] = obj5;
        let tmp12 = obj5;
      } else {
        tmp12 = cResult[2];
      }
      const tmp6Result5 = onInputFocusChange(noop.useState(tmp12), 2);
      closure_8 = tmp6Result5[1];
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let obj6 = {};
        cResult[3] = obj6;
        let tmp14 = obj6;
      } else {
        tmp14 = cResult[3];
      }
      let obj = projectId(onSubmit[9]);
      [tmp16, closure_9] = onInputFocusChange(noop.useState(tmp14), 2);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = {};
        cResult[4] = obj7;
        let tmp17 = obj7;
      } else {
        tmp17 = cResult[4];
      }
      const tmp6Result6 = onInputFocusChange(noop.useState(tmp14), 2);
      [tmp19, closure_10] = onInputFocusChange(noop.useState(tmp17), 2);
      const tmp6Result8 = onInputFocusChange(noop.useState(0), 2);
      closure_11 = tmp6Result8[1];
      const disabled = tmp21;
      const bound = Math.min(tmp6Result8[0], length - 1);
      const tmp23 = clarification.questions[bound];
      let id = tmp23;
      closure_15 = tmp24;
      if (cResult[5] !== tmp23) {
        const isImageQuestionResult = tmp(tmp2[10]).isImageQuestion(tmp23);
        cResult[5] = tmp23;
        cResult[6] = isImageQuestionResult;
        let tmp25 = isImageQuestionResult;
        let tmpResult = tmp(tmp2[10]);
      } else {
        tmp25 = cResult[6];
      }
      closure_16 = tmp25;
      if (true === tmp23.multi_select) {
        let tmp27 = tmp6Result5[0][tmp23.id];
        if (tmp27 == null) {
          tmp27 = closure_9;
        }
        let optionHeader = tmp27;
      } else {
        optionHeader = tmp(tmp2[10]).answeredOptionIds(first1[tmp23.id]);
        const tmpResult7 = tmp(tmp2[10]);
      }
      const tmp6Result7 = onInputFocusChange(noop.useState(tmp17), 2);
      const conjureOwnImages = projectId(onSubmit[11]).useConjureOwnImages(projectId, first1, tmp9);
      if (cResult[7] === first1) {
        if (cResult[8] === clarification) {
          if (cResult[9] === bound) {
            if (cResult[10] === onSubmit) {
              if (cResult[11] === projectId) {
                if (cResult[12] === tmp23.id) {
                  let tmp28 = cResult[13];
                }
                closure_18 = tmp28;
                if (cResult[14] === tmp24) {
                  if (cResult[15] === tmp25) {
                    if (cResult[16] === tmp23) {
                      if (cResult[17] === tmp28) {
                        let tmp29 = cResult[18];
                      }
                      closure_19 = tmp29;
                      if (cResult[19] === tmp21) {
                        if (cResult[20] === bound) {
                          let tmp30 = cResult[21];
                        }
                        let str = tmp6Result[0][tmp23.id];
                        if (str == null) {
                          str = "";
                        }
                        let multiSelectAnswerResult = null;
                        if (tmp24) {
                          const tmpResult9 = tmp(tmp2[12]);
                          multiSelectAnswerResult = tmpResult9.multiSelectAnswer(
                            tmp23,
                            optionHeader,
                            str,
                            conjureOwnImages.multiPartFor(tmp23),
                          );
                        }
                        if (cResult[22] === str) {
                          if (cResult[23] === tmp16) {
                            if (cResult[24] === tmp19) {
                              if (cResult[25] === tmp23.id) {
                                if (cResult[26] === tmp23.input) {
                                  id = cResult[27];
                                }
                                if (cResult[28] !== tmp23.id) {
                                  function pe(arg0, arg1) {
                                    closure_0 = arg0;
                                    closure_1 = arg1;
                                    closure_9((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_0;
                                      return obj;
                                    });
                                    closure_10((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_1;
                                      return obj;
                                    });
                                  }
                                  cResult[28] = tmp23.id;
                                  cResult[29] = pe;
                                  let tmp42 = pe;
                                } else {
                                  tmp42 = cResult[29];
                                }
                                if (cResult[30] === str) {
                                  if (cResult[31] === multiSelectAnswerResult) {
                                    if (cResult[32] === id) {
                                      if (cResult[33] === tmp28) {
                                        let tmp43 = cResult[34];
                                      }
                                      if (cResult[35] === first1) {
                                        if (cResult[36] === str) {
                                          if (cResult[37] === multiSelectAnswerResult) {
                                            if (cResult[38] === id) {
                                              if (cResult[39] === tmp23.id) {
                                                closure_23 = tmp44;
                                                if (cResult[41] === tmp43) {
                                                  if (cResult[42] === str) {
                                                    if (cResult[43] === onInputFocusChange) {
                                                      if (cResult[44] === tmp25) {
                                                        if (cResult[45] === tmp23) {
                                                          let tmp50 = cResult[46];
                                                        }
                                                        if (cResult[47] === bound) {
                                                          if (cResult[48] === length) {
                                                            let tmp54 = cResult[49];
                                                          }
                                                          if (cResult[50] !== tmp23.question) {
                                                            const obj8 = {
                                                              variant: "text-md/semibold",
                                                              color: "text-default",
                                                              accessibilityRole: "header",
                                                              children: tmp23.question,
                                                            };
                                                            const tmp60 = closure_6(tmp(tmp2[15]).Text, obj8);
                                                            cResult[50] = tmp23.question;
                                                            cResult[51] = tmp60;
                                                            let tmp58 = tmp60;
                                                          } else {
                                                            tmp58 = cResult[51];
                                                          }
                                                          if (cResult[52] === tmp4.customField) {
                                                            if (cResult[53] === tmp54) {
                                                              if (cResult[54] === tmp58) {
                                                                let tmp61 = cResult[55];
                                                              }
                                                              if (cResult[56] !== onDismiss) {
                                                                let tmp66 = null;
                                                                if (null != onDismiss) {
                                                                  const obj9 = {
                                                                    variant: "tertiary",
                                                                    size: "sm",
                                                                    icon: closure_6(tmp(tmp2[17]).XSmallIcon, {
                                                                      size: "sm",
                                                                    }),
                                                                    onPress: onDismiss,
                                                                    accessibilityLabel: null,
                                                                  };
                                                                  const intl3 = tmp(tmp2[6]).intl;
                                                                  obj9.accessibilityLabel = intl3.string(
                                                                    clarification(tmp2[7]).qVXlk0,
                                                                  );
                                                                  tmp66 = closure_6(tmp(tmp2[16]).IconButton, obj9);
                                                                }
                                                                cResult[56] = onDismiss;
                                                                cResult[57] = tmp66;
                                                                let tmp65 = tmp66;
                                                              } else {
                                                                tmp65 = cResult[57];
                                                              }
                                                              if (cResult[58] === tmp4.footer) {
                                                                if (cResult[59] === tmp61) {
                                                                  if (cResult[60] === tmp65) {
                                                                    let tmp69 = cResult[61];
                                                                  }
                                                                  if (cResult[62] !== tmp24) {
                                                                    let tmp74 = null;
                                                                    if (tmp24) {
                                                                      const obj10 = {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        children: null,
                                                                      };
                                                                      const intl4 = tmp(tmp2[6]).intl;
                                                                      obj10.children = intl4.string(
                                                                        clarification(tmp2[7]).tE8qbz,
                                                                      );
                                                                      tmp74 = closure_6(tmp(tmp2[15]).Text, obj10);
                                                                    }
                                                                    cResult[62] = tmp24;
                                                                    cResult[63] = tmp74;
                                                                    let tmp73 = tmp74;
                                                                  } else {
                                                                    tmp73 = cResult[63];
                                                                  }
                                                                  if (cResult[64] === tmp21) {
                                                                    if (cResult[65] === tmp29) {
                                                                      if (cResult[66] === tmp24) {
                                                                        if (cResult[67] === conjureOwnImages) {
                                                                          if (cResult[68] === tmp25) {
                                                                            if (cResult[69] === projectId) {
                                                                              if (cResult[70] === tmp23) {
                                                                                if (cResult[71] === optionHeader) {
                                                                                  if (
                                                                                    cResult[72] === tmp4.optionHeader
                                                                                  ) {
                                                                                    if (cResult[74] === tmp21) {
                                                                                      if (cResult[75] === tmp16) {
                                                                                        if (cResult[76] === tmp50) {
                                                                                          if (cResult[77] === tmp42) {
                                                                                            if (
                                                                                              cResult[78] === projectId
                                                                                            ) {
                                                                                              if (
                                                                                                cResult[79] === tmp23
                                                                                              ) {
                                                                                                let tmp84 = cResult[80];
                                                                                              }
                                                                                              let tmp91 = null;
                                                                                              if (
                                                                                                false !==
                                                                                                tmp23.allow_custom
                                                                                              ) {
                                                                                                tmp91 = tmp50;
                                                                                              }
                                                                                              if (
                                                                                                cResult[81] === tmp21
                                                                                              ) {
                                                                                                if (
                                                                                                  cResult[82] === tmp30
                                                                                                ) {
                                                                                                  if (
                                                                                                    cResult[83] ===
                                                                                                    bound
                                                                                                  ) {
                                                                                                    if (
                                                                                                      cResult[84] ===
                                                                                                      tmp24
                                                                                                    ) {
                                                                                                      if (
                                                                                                        cResult[85] ===
                                                                                                        tmp44
                                                                                                      ) {
                                                                                                        if (
                                                                                                          cResult[86] ===
                                                                                                          tmp25
                                                                                                        ) {
                                                                                                          if (
                                                                                                            cResult[87] ===
                                                                                                            tmp23
                                                                                                          ) {
                                                                                                            if (
                                                                                                              cResult[88] ===
                                                                                                              tmp28
                                                                                                            ) {
                                                                                                              if (
                                                                                                                cResult[89] ===
                                                                                                                tmp4.customField
                                                                                                              ) {
                                                                                                                if (
                                                                                                                  cResult[90] ===
                                                                                                                  tmp4.footer
                                                                                                                ) {
                                                                                                                  if (
                                                                                                                    cResult[91] ===
                                                                                                                    tmp92
                                                                                                                  ) {
                                                                                                                    if (
                                                                                                                      cResult[92] ===
                                                                                                                      length
                                                                                                                    ) {
                                                                                                                      let tmp93 =
                                                                                                                        cResult[93];
                                                                                                                    }
                                                                                                                    if (
                                                                                                                      cResult[94] ===
                                                                                                                      tmp4.card
                                                                                                                    ) {
                                                                                                                      if (
                                                                                                                        cResult[95] ===
                                                                                                                        tmp69
                                                                                                                      ) {
                                                                                                                        if (
                                                                                                                          cResult[96] ===
                                                                                                                          tmp73
                                                                                                                        ) {
                                                                                                                          if (
                                                                                                                            cResult[97] ===
                                                                                                                            tmp77
                                                                                                                          ) {
                                                                                                                            if (
                                                                                                                              cResult[98] ===
                                                                                                                              tmp84
                                                                                                                            ) {
                                                                                                                              if (
                                                                                                                                cResult[99] ===
                                                                                                                                tmp91
                                                                                                                              ) {
                                                                                                                                if (
                                                                                                                                  cResult[100] ===
                                                                                                                                  tmp93
                                                                                                                                ) {
                                                                                                                                  let tmp104 =
                                                                                                                                    cResult[101];
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
                                                                                                                        clarification(
                                                                                                                          tmp2[24],
                                                                                                                        ),
                                                                                                                        obj11,
                                                                                                                      );
                                                                                                                    cResult[94] =
                                                                                                                      tmp4.card;
                                                                                                                    cResult[95] =
                                                                                                                      tmp69;
                                                                                                                    cResult[96] =
                                                                                                                      tmp73;
                                                                                                                    cResult[97] =
                                                                                                                      tmp77;
                                                                                                                    cResult[98] =
                                                                                                                      tmp84;
                                                                                                                    cResult[99] =
                                                                                                                      tmp91;
                                                                                                                    cResult[100] =
                                                                                                                      tmp93;
                                                                                                                    cResult[101] =
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
                                                                                                      null ==
                                                                                                      tmp23.input
                                                                                                    ) {
                                                                                                      if (
                                                                                                        !tmpResult10.isTypedClarificationQuestion(
                                                                                                          tmp23,
                                                                                                        )
                                                                                                      ) {
                                                                                                        cResult[81] =
                                                                                                          tmp21;
                                                                                                        cResult[82] =
                                                                                                          tmp30;
                                                                                                        cResult[83] =
                                                                                                          bound;
                                                                                                        cResult[84] =
                                                                                                          tmp24;
                                                                                                        cResult[85] =
                                                                                                          tmp44;
                                                                                                        cResult[86] =
                                                                                                          tmp25;
                                                                                                        cResult[87] =
                                                                                                          tmp23;
                                                                                                        cResult[88] =
                                                                                                          tmp28;
                                                                                                        cResult[89] =
                                                                                                          tmp4.customField;
                                                                                                        cResult[90] =
                                                                                                          tmp4.footer;
                                                                                                        cResult[91] =
                                                                                                          tmp92;
                                                                                                        cResult[92] =
                                                                                                          length;
                                                                                                        cResult[93] =
                                                                                                          null;
                                                                                                        tmp93 = null;
                                                                                                      }
                                                                                                      tmpResult10 = tmp(
                                                                                                        tmp2[12],
                                                                                                      );
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
                                                                                                  const intl5 = tmp(
                                                                                                    tmp2[6],
                                                                                                  ).intl;
                                                                                                  obj13.text =
                                                                                                    intl5.string(
                                                                                                      clarification(
                                                                                                        tmp2[7],
                                                                                                      ).Pk5lfA,
                                                                                                    );
                                                                                                  obj13.onPress = tmp30;
                                                                                                  tmp97 = closure_6(
                                                                                                    tmp(tmp2[23])
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
                                                                                                first1,
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
                                                                                              const intl6 = tmp(
                                                                                                tmp2[6],
                                                                                              ).intl;
                                                                                              if (bound === tmp49) {
                                                                                                let w1nRmT = tmp(
                                                                                                  tmp2[6],
                                                                                                ).t.geKm7t;
                                                                                              } else {
                                                                                                w1nRmT = clarification(
                                                                                                  tmp2[7],
                                                                                                ).w1nRmT;
                                                                                              }
                                                                                              obj15.text =
                                                                                                intl6.string(w1nRmT);
                                                                                              obj15.onPress =
                                                                                                function onPress() {
                                                                                                  if (
                                                                                                    null != closure_23
                                                                                                  ) {
                                                                                                    closure_18(tmp);
                                                                                                  }
                                                                                                };
                                                                                              obj15 = closure_6(
                                                                                                tmp(tmp2[23]).Button,
                                                                                                obj15,
                                                                                              );
                                                                                              items1[2] = obj15;
                                                                                              obj12.children = items1;
                                                                                              closure_7(first1, obj12);
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
                                                                                        tmp89 = closure_10;
                                                                                      }
                                                                                      obj16.value = tmp89;
                                                                                      obj16.disabled = tmp21;
                                                                                      obj16.onChange = tmp42;
                                                                                      let tmp90 = null;
                                                                                      if (
                                                                                        false === tmp23.allow_custom
                                                                                      ) {
                                                                                        tmp90 = tmp50;
                                                                                      }
                                                                                      obj16.fallback = tmp90;
                                                                                      tmp86Result = closure_6(
                                                                                        clarification(tmp2[22]),
                                                                                        obj16,
                                                                                      );
                                                                                      const tmp88 = clarification(
                                                                                        tmp2[22],
                                                                                      );
                                                                                    }
                                                                                    cResult[74] = tmp21;
                                                                                    cResult[75] = tmp16;
                                                                                    cResult[76] = tmp50;
                                                                                    cResult[77] = tmp42;
                                                                                    cResult[78] = projectId;
                                                                                    cResult[79] = tmp23;
                                                                                    cResult[80] = tmp86Result;
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
                                                                    let mapped = closure_6(
                                                                      clarification(tmp2[18]),
                                                                      obj17,
                                                                    );
                                                                    const tmp82 = clarification(tmp2[18]);
                                                                  } else if (tmp24) {
                                                                    const obj18 = { hasIcons: false, children: null };
                                                                    const options = tmp23.options;
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
                                                                        const intl = projectId(onSubmit[6]).intl;
                                                                        str = intl.string(
                                                                          clarification(onSubmit[7]).zku6r1,
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
                                                                        return closure_19(closure_0);
                                                                      };
                                                                      return closure_6(
                                                                        projectId(onSubmit[20]).TableCheckboxRow,
                                                                        obj,
                                                                        label.id,
                                                                      );
                                                                    });
                                                                    mapped = closure_6(
                                                                      tmp(tmp2[19]).TableRowGroup,
                                                                      obj18,
                                                                    );
                                                                  } else {
                                                                    const options1 = tmp23.options;
                                                                    mapped = options1.map((answer) => {
                                                                      closure_0 = answer;
                                                                      let fn;
                                                                      if (!closure_12) {
                                                                        fn = () => closure_19(closure_0);
                                                                      }
                                                                      const obj = {
                                                                        onPress: fn,
                                                                        accessibilityLabel: null,
                                                                        children: null,
                                                                      };
                                                                      const intl = projectId(onSubmit[6]).intl;
                                                                      if (true === answer.recommended) {
                                                                        let AQbxhf = clarification(onSubmit[7])[
                                                                          "2p6UFz"
                                                                        ];
                                                                        let tmp5 = clarification;
                                                                      } else {
                                                                        AQbxhf = clarification(onSubmit[7]).AQbxhf;
                                                                        tmp5 = clarification;
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
                                                                        closure_6(projectId(onSubmit[15]).Text, {
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
                                                                        const intl2 = projectId(onSubmit[6]).intl;
                                                                        obj5.children = intl2.string(
                                                                          tmp5(onSubmit[7]).zku6r1,
                                                                        );
                                                                        tmp8Result = closure_6(
                                                                          projectId(onSubmit[15]).Text,
                                                                          obj5,
                                                                        );
                                                                      }
                                                                      items[1] = tmp8Result;
                                                                      obj3.children = items;
                                                                      const items1 = [closure_7(first1, obj3)];
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
                                                                            projectId(onSubmit[15]).Text,
                                                                            obj6,
                                                                          );
                                                                        }
                                                                      }
                                                                      items1[1] = tmp8Result2;
                                                                      obj.children = items1;
                                                                      return closure_7(
                                                                        projectId(onSubmit[21]).Card,
                                                                        obj,
                                                                        answer.id,
                                                                      );
                                                                    });
                                                                  }
                                                                  cResult[64] = tmp21;
                                                                  cResult[65] = tmp29;
                                                                  cResult[66] = tmp24;
                                                                  cResult[67] = conjureOwnImages;
                                                                  cResult[68] = tmp25;
                                                                  cResult[69] = projectId;
                                                                  cResult[70] = tmp23;
                                                                  cResult[71] = optionHeader;
                                                                  optionHeader = tmp4.optionHeader;
                                                                  cResult[72] = optionHeader;
                                                                  cResult[73] = mapped;
                                                                }
                                                              }
                                                              const obj19 = { style: tmp4.footer, children: null };
                                                              const items2 = [tmp61, tmp65];
                                                              obj19.children = items2;
                                                              const tmp72 = closure_7(first1, obj19);
                                                              cResult[58] = tmp4.footer;
                                                              cResult[59] = tmp61;
                                                              cResult[60] = tmp65;
                                                              cResult[61] = tmp72;
                                                              tmp69 = tmp72;
                                                            }
                                                          }
                                                          const obj20 = { style: tmp4.customField, children: null };
                                                          const items3 = [tmp54, tmp58];
                                                          obj20.children = items3;
                                                          const tmp64 = closure_7(first1, obj20);
                                                          cResult[52] = tmp4.customField;
                                                          cResult[53] = tmp54;
                                                          cResult[54] = tmp58;
                                                          cResult[55] = tmp64;
                                                          tmp61 = tmp64;
                                                        }
                                                        let tmp55 = null;
                                                        if (length > 1) {
                                                          const obj21 = {
                                                            variant: "text-xs/semibold",
                                                            color: "text-muted",
                                                            children: null,
                                                          };
                                                          let intl2 = tmp(tmp2[6]).intl;
                                                          const obj22 = { index: bound + 1, total: length };
                                                          obj21.children = intl2.formatToPlainString(
                                                            clarification(tmp2[7]).yzYUjq,
                                                            obj22,
                                                          );
                                                          tmp55 = closure_6(tmp(tmp2[15]).Text, obj21);
                                                        }
                                                        cResult[47] = bound;
                                                        cResult[48] = length;
                                                        cResult[49] = tmp55;
                                                        tmp54 = tmp55;
                                                      }
                                                    }
                                                  }
                                                }
                                                let tmp51 = null;
                                                if (!tmp25) {
                                                  const obj23 = {
                                                    size: "md",
                                                    placeholder: tmp(tmp2[12]).clarificationDraftPlaceholder(tmp23),
                                                    accessibilityLabel: null,
                                                    value: null,
                                                    onChange: null,
                                                    onSubmitEditing: null,
                                                    onFocus: null,
                                                    onBlur: null,
                                                    returnKeyType: "send",
                                                  };
                                                  let intl = tmp(tmp2[6]).intl;
                                                  const obj24 = { question: tmp23.question };
                                                  obj23.accessibilityLabel = intl.formatToPlainString(
                                                    clarification(tmp2[7])["4JeYPB"],
                                                    obj24,
                                                  );
                                                  obj23.value = str;
                                                  obj23.onChange = function onChange(arg0) {
                                                    closure_0 = arg0;
                                                    return closure_7((arg0) => {
                                                      const obj = {};
                                                      const merged = Object.assign(arg0);
                                                      obj[id.id] = closure_0;
                                                      return obj;
                                                    });
                                                  };
                                                  obj23.onSubmitEditing = tmp43;
                                                  obj23.onFocus = function onFocus() {
                                                    let tmpResult;
                                                    if (onInputFocusChange != null) {
                                                      tmpResult = tmp(true);
                                                    }
                                                    return tmpResult;
                                                  };
                                                  obj23.onBlur = function onBlur() {
                                                    let tmpResult;
                                                    if (onInputFocusChange != null) {
                                                      tmpResult = tmp(false);
                                                    }
                                                    return tmpResult;
                                                  };
                                                  tmp51 = closure_6(tmp(tmp2[14]).TextInput, obj23);
                                                  const tmpResult11 = tmp(tmp2[12]);
                                                }
                                                cResult[41] = tmp43;
                                                cResult[42] = str;
                                                cResult[43] = onInputFocusChange;
                                                cResult[44] = tmp25;
                                                cResult[45] = tmp23;
                                                cResult[46] = tmp51;
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
                                      cResult[35] = first1;
                                      cResult[36] = str;
                                      cResult[37] = multiSelectAnswerResult;
                                      cResult[38] = id;
                                      id = tmp23.id;
                                      cResult[39] = id;
                                      cResult[40] = tmp45;
                                    }
                                  }
                                }
                                function ve() {
                                  if (null == id) {
                                    if (null == multiSelectAnswerResult) {
                                      const trimmed = str.trim();
                                      if ("" !== trimmed) {
                                        const obj = { kind: "custom", text: trimmed };
                                        closure_18(obj);
                                      }
                                    } else if ("" !== multiSelectAnswerResult.text) {
                                      closure_18(multiSelectAnswerResult);
                                    }
                                  } else if ("" !== id.text) {
                                    closure_18(id);
                                  }
                                }
                                cResult[30] = str;
                                cResult[31] = multiSelectAnswerResult;
                                cResult[32] = id;
                                cResult[33] = tmp28;
                                cResult[34] = ve;
                                tmp43 = ve;
                              }
                            }
                          }
                        }
                        let entityAnswerResult = null;
                        if (null != tmp23.input) {
                          const tmpResult12 = tmp(tmp2[12]);
                          const input = tmp23.input;
                          let tmp37 = tmp16[tmp23.id];
                          if (tmp37 == null) {
                            tmp37 = closure_10;
                          }
                          entityAnswerResult = tmpResult12.entityAnswer(input, tmp37, str, tmp19[tmp23.id]);
                        }
                        cResult[22] = str;
                        cResult[23] = tmp16;
                        cResult[24] = tmp19;
                        cResult[25] = tmp23.id;
                        cResult[26] = tmp23.input;
                        cResult[27] = entityAnswerResult;
                        id = entityAnswerResult;
                      }
                      function ue() {
                        let tmp = closure_12;
                        if (!closure_12) {
                          tmp = 0 === bound;
                        }
                        if (!tmp) {
                          closure_11(bound - 1);
                        }
                      }
                      cResult[19] = tmp21;
                      cResult[20] = bound;
                      cResult[21] = ue;
                      tmp30 = ue;
                    }
                  }
                }
                function se(arg0) {
                  id = arg0;
                  if (closure_15) {
                    closure_8((arr) => {
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
                    closure_7((arg0) => {
                      obj = {};
                      const merged = Object.assign(arg0);
                      obj[user.id] = "";
                      return obj;
                    });
                    let obj = { kind: "option", optionId: null, text: null };
                    ({ id: obj.optionId, label: obj.text } = arg0);
                    if (closure_16) {
                      closure_6((arg0) => {
                        obj = {};
                        const merged = Object.assign(arg0);
                        obj[user.id] = obj;
                        return obj;
                      });
                    } else {
                      closure_18(obj);
                    }
                  }
                }
                cResult[14] = tmp24;
                cResult[15] = tmp25;
                cResult[16] = tmp23;
                cResult[17] = tmp28;
                cResult[18] = se;
                tmp29 = se;
              }
            }
          }
        }
      }
      function ne(arg0) {
        if (null != onSubmit) {
          let obj = {};
          const merged = Object.assign(first1);
          obj[id.id] = arg0;
          closure_6(obj);
          let result = projectId(onSubmit[12]).followingClarificationStep(result1, obj, bound);
          if (null == result) {
            result1 = projectId(onSubmit[12]).formatClarificationAnswers(tmp18, obj);
            if ("" !== result1) {
              const tmp16Result2 = projectId(onSubmit[13]);
              tmp16Result2.sendAfterLinkingApps(obj, tmp18, obj, () => {
                obj = ConjureClarification;
                const result = obj.clarificationAnswersPayload(clarification, obj);
                return onSubmit(
                  result1,
                  result,
                  ConjureClarification.clarificationAnswerAttachments(clarification, obj),
                );
              });
            }
            const tmp16Result = projectId(onSubmit[12]);
          } else {
            closure_11(result);
          }
          const obj4 = projectId(onSubmit[12]);
        }
      }
      cResult[7] = first1;
      cResult[8] = clarification;
      cResult[9] = bound;
      cResult[10] = onSubmit;
      cResult[11] = projectId;
      cResult[12] = tmp23.id;
      cResult[13] = ne;
      tmp28 = ne;
    }
  : function ConjureClarificationCard(projectId) {
      projectId = projectId.projectId;
      const clarification = projectId.clarification;
      const onSubmit = projectId.onSubmit;
      ({ onDismiss, onInputFocusChange: _slicedToArray } = projectId);
      first = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      c17 = undefined;
      let callback;
      let callback1;
      let str;
      c21 = undefined;
      c22 = undefined;
      c23 = undefined;
      let tmp = c8();
      noop = tmp;
      [first] = noop.useState({});
      closure_6 = tmp4;
      [tmp6, c7] = noop.useState({});
      let tmp5 = _slicedToArray(noop.useState({}), 2);
      [tmp8, c8] = noop.useState({});
      const tmp7 = _slicedToArray(noop.useState({}), 2);
      [tmp10, c9] = noop.useState({});
      const tmp11 = _slicedToArray(noop.useState({}), 2);
      closure_10 = tmp11[1];
      const tmp12 = _slicedToArray(noop.useState(0), 2);
      closure_11 = tmp12[1];
      let tmp13 = null == onSubmit;
      const disabled = tmp13;
      const bound = Math.min(tmp12[0], length - 1);
      let id = tmp15;
      closure_15 = tmp16;
      let t = onSubmit;
      const tmp9 = _slicedToArray(noop.useState({}), 2);
      const isImageQuestionResult = projectId(onSubmit[10]).isImageQuestion(clarification.questions[bound]);
      c16 = isImageQuestionResult;
      if (true === clarification.questions[bound].multi_select) {
        let tmp20 = tmp8[tmp15.id];
        if (tmp20 == null) {
          tmp20 = c9;
        }
        let answeredOptionIdsResult = tmp20;
      } else {
        answeredOptionIdsResult = tmp17(t[10]).answeredOptionIds(first[tmp15.id]);
        const tmp17Result = tmp17(t[10]);
      }
      c17 = answeredOptionIdsResult;
      const obj2 = projectId(onSubmit[10]);
      const conjureOwnImages = projectId(t[11]).useConjureOwnImages(projectId, first, tmp4);
      let items = [first, clarification, bound, onSubmit, projectId, clarification.questions[bound].id];
      callback = obj.useCallback((arg0) => {
        if (null != onSubmit) {
          let obj = {};
          const merged = Object.assign(first);
          obj[id.id] = arg0;
          closure_6(obj);
          let result = projectId(onSubmit[12]).followingClarificationStep(result1, obj, bound);
          if (null == result) {
            result1 = projectId(onSubmit[12]).formatClarificationAnswers(tmp18, obj);
            if ("" !== result1) {
              const tmp16Result2 = projectId(onSubmit[13]);
              tmp16Result2.sendAfterLinkingApps(obj, tmp18, obj, () => {
                obj = ConjureClarification;
                const result = obj.clarificationAnswersPayload(clarification, obj);
                return onSubmit(
                  result1,
                  result,
                  ConjureClarification.clarificationAnswerAttachments(clarification, obj),
                );
              });
            }
            const tmp16Result = projectId(onSubmit[12]);
          } else {
            closure_11(result);
          }
          const obj4 = projectId(onSubmit[12]);
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
        if (closure_15) {
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
          if (c16) {
            closure_6((arg0) => {
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
        let tmp = closure_12;
        if (!closure_12) {
          tmp = 0 === bound;
        }
        if (!tmp) {
          closure_11(bound - 1);
        }
      }, items2);
      if (str == null) {
        str = "";
      }
      let multiSelectAnswerResult = null;
      if (true === clarification.questions[bound].multi_select) {
        const tmp17Result7 = tmp17(t[12]);
        multiSelectAnswerResult = tmp17Result7.multiSelectAnswer(
          tmp15,
          answeredOptionIdsResult,
          str,
          conjureOwnImages.multiPartFor(tmp15),
        );
      }
      c21 = multiSelectAnswerResult;
      let entityAnswerResult = null;
      if (null != clarification.questions[bound].input) {
        const tmp17Result8 = tmp17(t[12]);
        const input = tmp15.input;
        let tmp30 = tmp10[tmp15.id];
        if (tmp30 == null) {
          tmp30 = closure_10;
        }
        entityAnswerResult = tmp17Result8.entityAnswer(input, tmp30, str, tmp11[0][tmp15.id]);
      }
      c22 = entityAnswerResult;
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
        closure_10((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[user.id] = closure_1;
          return obj;
        });
      }, items3);
      const callback4 = obj.useCallback(() => {
        if (null == _undefined3) {
          if (null == _undefined2) {
            const trimmed = str.trim();
            if ("" !== trimmed) {
              const obj = { kind: "custom", text: trimmed };
              callback(obj);
            }
          } else if ("" !== _undefined2.text) {
            callback(_undefined2);
          }
        } else if ("" !== _undefined3.text) {
          callback(_undefined3);
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
      c23 = tmp37;
      let tmp40 = null;
      if (!isImageQuestionResult) {
        let obj4 = {
          size: "md",
          placeholder: tmp17(t[12]).clarificationDraftPlaceholder(tmp15),
          accessibilityLabel: null,
          value: null,
          onChange: null,
          onSubmitEditing: null,
          onFocus: null,
          onBlur: null,
          returnKeyType: "send",
        };
        let intl = tmp17(t[6]).intl;
        let obj5 = { question: tmp15.question };
        obj4.accessibilityLabel = intl.formatToPlainString(clarification(t[7])["4JeYPB"], obj5);
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
        obj4.onFocus = function onFocus() {
          let tmpResult;
          if (_slicedToArray != null) {
            tmpResult = tmp(true);
          }
          return tmpResult;
        };
        obj4.onBlur = function onBlur() {
          let tmpResult;
          if (_slicedToArray != null) {
            tmpResult = tmp(false);
          }
          return tmpResult;
        };
        tmp40 = closure_6(tmp17(t[14]).TextInput, obj4);
        const tmp17Result9 = tmp17(t[12]);
      }
      let obj6 = { style: tmp.card, children: null };
      const obj7 = { style: tmp.footer, children: null };
      const obj8 = { style: tmp.customField, children: null };
      let tmp47 = null;
      const tmp17Result6 = projectId(t[11]);
      if (clarification.questions.length > 1) {
        const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: null };
        let intl2 = tmp17(t[6]).intl;
        const obj10 = { index: bound + 1, total: length };
        obj9.children = intl2.formatToPlainString(tmp44(t[7]).yzYUjq, obj10);
        tmp47 = closure_6(tmp17(t[15]).Text, obj9);
      }
      const items5 = [
        tmp47,
        closure_6(projectId(t[15]).Text, {
          variant: "text-md/semibold",
          color: "text-default",
          accessibilityRole: "header",
          children: clarification.questions[bound].question,
        }),
      ];
      obj8.children = items5;
      const items6 = [c7(first, obj8)];
      let tmp49Result = null;
      if (null != onDismiss) {
        const obj12 = {
          variant: "tertiary",
          size: "sm",
          icon: tmp49(tmp17(t[17]).XSmallIcon, { size: "sm" }),
          onPress: onDismiss,
          accessibilityLabel: null,
        };
        const intl3 = tmp17(t[6]).intl;
        obj12.accessibilityLabel = intl3.string(tmp44(t[7]).qVXlk0);
        tmp49Result = tmp49(tmp17(t[16]).IconButton, obj12);
      }
      items6[1] = tmp49Result;
      obj7.children = items6;
      const items7 = [c7(first, obj7), , , , ,];
      let tmp49Result5 = null;
      if (true === clarification.questions[bound].multi_select) {
        const obj13 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl4 = tmp17(t[6]).intl;
        obj13.children = intl4.string(tmp44(t[7]).tE8qbz);
        tmp49Result5 = tmp49(tmp17(t[15]).Text, obj13);
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
        let tmp49Result6 = tmp49(tmp44(t[18]), obj14);
        const tmp44Result = tmp44(t[18]);
      } else if (tmp16) {
        const obj15 = { hasIcons: false, children: null };
        const options = tmp15.options;
        obj15.children = options.map((label) => {
          closure_0 = label;
          const obj = { label: label.label, subLabel: null, checked: null, disabled: null, onPress: null };
          str = "";
          if (true === label.recommended) {
            const intl = projectId(onSubmit[6]).intl;
            str = intl.string(clarification(onSubmit[7]).zku6r1);
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
          return closure_6(projectId(onSubmit[20]).TableCheckboxRow, obj, label.id);
        });
        tmp49Result6 = tmp49(tmp17(t[19]).TableRowGroup, obj15);
      } else {
        const options1 = tmp15.options;
        tmp49Result6 = options1.map((answer) => {
          closure_0 = answer;
          let fn;
          if (!closure_12) {
            fn = () => callback1(closure_0);
          }
          const obj = { onPress: fn, accessibilityLabel: null, children: null };
          const intl = projectId(onSubmit[6]).intl;
          if (true === answer.recommended) {
            let AQbxhf = clarification(onSubmit[7])["2p6UFz"];
            let tmp5 = clarification;
          } else {
            AQbxhf = clarification(onSubmit[7]).AQbxhf;
            tmp5 = clarification;
          }
          obj.accessibilityLabel = intl.formatToPlainString(AQbxhf, { answer: answer.label });
          const obj3 = { style: optionHeader.optionHeader, children: null };
          const items = [
            closure_6(projectId(onSubmit[15]).Text, {
              variant: "text-sm/semibold",
              color: "text-default",
              children: answer.label,
            }),
          ];
          let tmp8Result = null;
          if (true === answer.recommended) {
            const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: null };
            const intl2 = projectId(onSubmit[6]).intl;
            obj5.children = intl2.string(tmp5(onSubmit[7]).zku6r1);
            tmp8Result = closure_6(projectId(onSubmit[15]).Text, obj5);
          }
          items[1] = tmp8Result;
          obj3.children = items;
          const items1 = [_undefined(first, obj3)];
          let tmp8Result2 = null;
          if (null != answer.detail) {
            tmp8Result2 = null;
            if ("" !== answer.detail) {
              const obj6 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
              tmp8Result2 = closure_6(projectId(onSubmit[15]).Text, obj6);
            }
          }
          items1[1] = tmp8Result2;
          obj.children = items1;
          return _undefined(projectId(onSubmit[21]).Card, obj, answer.id);
        });
      }
      items7[2] = tmp49Result6;
      let tmp49Result7 = null;
      if (null != clarification.questions[bound].input) {
        const obj16 = { projectId, question: tmp15, value: null, disabled: null, onChange: null, fallback: null };
        let tmp56 = tmp10[tmp15.id];
        if (tmp56 == null) {
          tmp56 = closure_10;
        }
        obj16.value = tmp56;
        obj16.disabled = tmp13;
        obj16.onChange = callback3;
        let tmp57 = null;
        if (false === tmp15.allow_custom) {
          tmp57 = tmp40;
        }
        obj16.fallback = tmp57;
        tmp49Result7 = tmp49(tmp44(t[22]), obj16);
        const tmp44Result2 = tmp44(t[22]);
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
              if (!tmp17Result10.isTypedClarificationQuestion(tmp15)) {
                items7[5] = null;
                obj6.children = items7;
                return tmp43(tmp45, obj6);
              }
              tmp17Result10 = tmp17(t[12]);
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
          const intl5 = tmp17(t[6]).intl;
          obj18.text = intl5.string(tmp44(t[7]).Pk5lfA);
          obj18.onPress = callback2;
          tmp49Result8 = tmp49(tmp17(t[23]).Button, obj18);
        }
      }
      const items8 = [tmp49Result8, closure_6(first, { style: tmp.customField })];
      if (!tmp13) {
        tmp13 = null == tmp37;
      }
      let obj20 = { variant: "primary", size: "sm", disabled: tmp13, text: null, onPress: null };
      const intl6 = tmp17(t[6]).intl;
      if (bound === clarification.questions.length - 1) {
        t = tmp17(t[6]).t;
        let w1nRmT = t.geKm7t;
      } else {
        w1nRmT = tmp44(t[7]).w1nRmT;
      }
      obj20.text = intl6.string(w1nRmT);
      obj20.onPress = function onPress() {
        if (null != c23) {
          callback(tmp);
        }
      };
      obj20 = tmp49(tmp17(t[23]).Button, obj20);
      items8[2] = obj20;
      obj17.children = items8;
      c7(first, obj17);
    };
