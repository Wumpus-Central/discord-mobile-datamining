// === Module 16737: ConjureClarificationCard ===

// Module 16737 (ConjureClarificationCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ConjureClarification from "ConjureClarification" /* 16740 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_1, dependencyMap, id, onSubmit, tmp8;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let react = react_mod;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, optionHeader: obj3, footer: obj4, customField: { flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let closure_9 = [];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onSubmit) => {
  let answeredOptionIdsResult;
  let clarification;
  let closure_4;
  let closure_5;
  let first;
  let first1;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let obj19;
  let optionHeader;
  let projectId;
  let string;
  let tmp10;
  let tmp13;
  let tmp21;
  let tmp22;
  let w1nRmT;
  let tmp = clarification;
  let obj = clarification(576);
  const cResult = obj.c(82);
  ({ projectId, clarification } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const onDismiss = onSubmit.onDismiss;
  let tmp4 = closure_8();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  let obj3 = react;
  const tmp7 = first1(react.useState(first), 2);
  first1 = tmp7[0];
  react = tmp9;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = {};
    cResult[1] = obj4;
    tmp10 = obj4;
  } else {
    tmp10 = cResult[1];
  }
  const tmp6Result = first1(obj3.useState(tmp10), 2);
  View = tmp6Result[1];
  const first2 = tmp6Result[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj5 = {};
    cResult[2] = obj5;
    tmp13 = obj5;
  } else {
    tmp13 = cResult[2];
  }
  const tmp6Result3 = first1(obj3.useState(tmp13), 2);
  let closure_6 = tmp6Result3[1];
  const first3 = tmp6Result3[0];
  const tmp6Result4 = first1(obj3.useState(0), 2);
  let closure_7 = tmp6Result4[1];
  closure_8 = tmp17;
  const bound = Math.min(tmp6Result4[0], length - 1);
  id = tmp19;
  let closure_11 = tmp20;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj6 = { checked: false };
    cResult[3] = obj6;
    tmp21 = obj6;
  } else {
    tmp21 = cResult[3];
  }
  const tmpResult = tmp(4600);
  const accessibilityRole = tmpResult.useCheckboxA11yNative(tmp21).accessibilityRole;
  if (cResult[4] !== clarification.questions[bound]) {
    const tmpResult5 = tmp(16738);
    const isImageQuestionResult = tmpResult5.isImageQuestion(clarification.questions[bound]);
    cResult[4] = clarification.questions[bound];
    cResult[5] = isImageQuestionResult;
    tmp22 = isImageQuestionResult;
  } else {
    tmp22 = cResult[5];
  }
  let closure_13 = tmp22;
  if (true === clarification.questions[bound].multi_select) {
    let tmp25 = first3[tmp19.id];
    if (tmp25 == null) {
      tmp25 = bound;
    }
    answeredOptionIdsResult = tmp25;
  } else {
    const tmpResult6 = tmp(16738);
    answeredOptionIdsResult = tmpResult6.answeredOptionIds(first1[tmp19.id]);
  }
  const tmpResult7 = tmp(16739);
  const conjureOwnImages = tmpResult7.useConjureOwnImages(projectId, first1, tmp9);
  if (cResult[6] === first1) {
    if (cResult[7] === clarification) {
      if (cResult[8] === bound) {
        if (cResult[9] === onSubmit) {
          let tmp26;
          if (cResult[10] === clarification.questions[bound].id) {
            tmp26 = cResult[11];
          }
          let closure_15 = tmp26;
          if (cResult[12] === true === clarification.questions[bound].multi_select) {
            if (cResult[13] === tmp22) {
              if (cResult[14] === clarification.questions[bound]) {
                let tmp27;
                if (cResult[15] === tmp26) {
                  tmp27 = cResult[16];
                }
                let closure_16 = tmp27;
                if (cResult[17] === null == onSubmit) {
                  let tmp28;
                  if (cResult[18] === bound) {
                    tmp28 = cResult[19];
                  }
                  let str = first2[tmp19.id];
                  if (str == null) {
                    str = "";
                  }
                  class Z {
                    constructor(arg0) {
                      closure_0 = onSubmit;
                      tmp = closure_11;
                      if (tmp) {
                        tmp9 = closure_6;
                        tmp10 = closure_6((arr) => {
                          obj = {};
                          const merged = Object.assign(arr);
                          id = user.id;
                          let tmp4 = arr[user.id];
                          const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                          ConjureClarification;
                          if (tmp4 == null) {
                            tmp4 = closure_9;
                          }
                          obj[id] = toggleClarificationOption(user, tmp4, id.id);
                          return obj;
                        });
                      } else {
                        tmp2 = closure_5;
                        tmp3 = closure_5((arg0) => {
                          obj = {};
                          const merged = Object.assign(arg0);
                          obj[user.id] = "";
                          return obj;
                        });
                        obj = { kind: "option", optionId: null, text: null };
                        ({ id: obj.optionId, label: obj.text } = onSubmit);
                        closure_1 = obj;
                        tmp4 = closure_13;
                        if (tmp4) {
                          tmp7 = closure_4;
                          tmp8 = closure_4((arg0) => {
                            obj = {};
                            const merged = Object.assign(arg0);
                            obj[user.id] = obj;
                            return obj;
                          });
                        } else {
                          tmp5 = closure_15;
                          tmp6 = closure_15(obj);
                        }
                      }
                      return;
                    }
                  }
                  let multiSelectAnswerResult = null;
                  if (true === clarification.questions[bound].multi_select) {
                    const multiSelectAnswer = tmp(16740).multiSelectAnswer;
                    const tmpResult8 = tmp(16740);
                    class Z {
                      constructor(arg0) {
                        closure_0 = onSubmit;
                        tmp = closure_11;
                        if (tmp) {
                          tmp9 = closure_6;
                          tmp10 = closure_6((arr) => {
                            obj = {};
                            const merged = Object.assign(arr);
                            id = user.id;
                            let tmp4 = arr[user.id];
                            const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                            ConjureClarification;
                            if (tmp4 == null) {
                              tmp4 = closure_9;
                            }
                            obj[id] = toggleClarificationOption(user, tmp4, id.id);
                            return obj;
                          });
                        } else {
                          tmp2 = closure_5;
                          tmp3 = closure_5((arg0) => {
                            obj = {};
                            const merged = Object.assign(arg0);
                            obj[user.id] = "";
                            return obj;
                          });
                          obj = { kind: "option", optionId: null, text: null };
                          ({ id: obj.optionId, label: obj.text } = onSubmit);
                          closure_1 = obj;
                          tmp4 = closure_13;
                          if (tmp4) {
                            tmp7 = closure_4;
                            tmp8 = closure_4((arg0) => {
                              obj = {};
                              const merged = Object.assign(arg0);
                              obj[user.id] = obj;
                              return obj;
                            });
                          } else {
                            tmp5 = closure_15;
                            tmp6 = closure_15(obj);
                          }
                        }
                        return;
                      }
                    }
                    multiSelectAnswerResult = multiSelectAnswer(tmp19, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp19));
                  }
                  if (cResult[20] === str) {
                    if (cResult[21] === multiSelectAnswerResult) {
                      let tmp35;
                      let tmp37;
                      if (cResult[22] === tmp26) {
                        tmp35 = cResult[23];
                      }
                      if (cResult[24] === first1) {
                        if (cResult[25] === str) {
                          if (cResult[26] === multiSelectAnswerResult) {
                            let tmp36;
                            let tmp41;
                            if (cResult[27] === clarification.questions[bound].id) {
                              tmp36 = cResult[28];
                            }
                            let closure_19 = tmp36;
                            if (cResult[29] === bound) {
                              let tmp40;
                              let tmp44;
                              if (cResult[30] === clarification.questions.length) {
                                tmp40 = cResult[31];
                              }
                              if (cResult[32] !== clarification.questions[bound].question) {
                                let obj7 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: clarification.questions[bound].question };
                                class Z {
                                  constructor(arg0) {
                                    closure_0 = onSubmit;
                                    tmp = closure_11;
                                    if (tmp) {
                                      tmp9 = closure_6;
                                      tmp10 = closure_6((arr) => {
                                        obj = {};
                                        const merged = Object.assign(arr);
                                        id = user.id;
                                        let tmp4 = arr[user.id];
                                        const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                        ConjureClarification;
                                        if (tmp4 == null) {
                                          tmp4 = closure_9;
                                        }
                                        obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                        return obj;
                                      });
                                    } else {
                                      tmp2 = closure_5;
                                      tmp3 = closure_5((arg0) => {
                                        obj = {};
                                        const merged = Object.assign(arg0);
                                        obj[user.id] = "";
                                        return obj;
                                      });
                                      obj = { kind: "option", optionId: null, text: null };
                                      ({ id: obj.optionId, label: obj.text } = onSubmit);
                                      closure_1 = obj;
                                      tmp4 = closure_13;
                                      if (tmp4) {
                                        tmp7 = closure_4;
                                        tmp8 = closure_4((arg0) => {
                                          obj = {};
                                          const merged = Object.assign(arg0);
                                          obj[user.id] = obj;
                                          return obj;
                                        });
                                      } else {
                                        tmp5 = closure_15;
                                        tmp6 = closure_15(obj);
                                      }
                                    }
                                    return;
                                  }
                                }
                                cResult[32] = clarification.questions[bound].question;
                                cResult[33] = tmp46;
                                tmp44 = tmp46;
                              } else {
                                tmp44 = cResult[33];
                              }
                              if (cResult[34] === tmp4.customField) {
                                if (cResult[35] === tmp40) {
                                  let tmp47;
                                  let tmp50;
                                  if (cResult[36] === tmp44) {
                                    tmp47 = cResult[37];
                                  }
                                  if (cResult[38] !== onDismiss) {
                                    let tmp51 = null;
                                    if (null != onDismiss) {
                                      let obj8 = { IconComponent: tmp(6024).XSmallIcon, onPress: onDismiss, accessibilityLabel: intl.string(onSubmit(3753).qVXlk0) };
                                      class Z {
                                        constructor(arg0) {
                                          closure_0 = onSubmit;
                                          tmp = closure_11;
                                          if (tmp) {
                                            tmp9 = closure_6;
                                            tmp10 = closure_6((arr) => {
                                              obj = {};
                                              const merged = Object.assign(arr);
                                              id = user.id;
                                              let tmp4 = arr[user.id];
                                              const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                              ConjureClarification;
                                              if (tmp4 == null) {
                                                tmp4 = closure_9;
                                              }
                                              obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                              return obj;
                                            });
                                          } else {
                                            tmp2 = closure_5;
                                            tmp3 = closure_5((arg0) => {
                                              obj = {};
                                              const merged = Object.assign(arg0);
                                              obj[user.id] = "";
                                              return obj;
                                            });
                                            obj = { kind: "option", optionId: null, text: null };
                                            ({ id: obj.optionId, label: obj.text } = onSubmit);
                                            closure_1 = obj;
                                            tmp4 = closure_13;
                                            if (tmp4) {
                                              tmp7 = closure_4;
                                              tmp8 = closure_4((arg0) => {
                                                obj = {};
                                                const merged = Object.assign(arg0);
                                                obj[user.id] = obj;
                                                return obj;
                                              });
                                            } else {
                                              tmp5 = closure_15;
                                              tmp6 = closure_15(obj);
                                            }
                                          }
                                          return;
                                        }
                                      }
                                      intl = tmp(1126).intl;
                                      tmp51 = closure_6(tmp54, obj8);
                                    }
                                    class Z {
                                      constructor(arg0) {
                                        closure_0 = onSubmit;
                                        tmp = closure_11;
                                        if (tmp) {
                                          tmp9 = closure_6;
                                          tmp10 = closure_6((arr) => {
                                            obj = {};
                                            const merged = Object.assign(arr);
                                            id = user.id;
                                            let tmp4 = arr[user.id];
                                            const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                            ConjureClarification;
                                            if (tmp4 == null) {
                                              tmp4 = closure_9;
                                            }
                                            obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                            return obj;
                                          });
                                        } else {
                                          tmp2 = closure_5;
                                          tmp3 = closure_5((arg0) => {
                                            obj = {};
                                            const merged = Object.assign(arg0);
                                            obj[user.id] = "";
                                            return obj;
                                          });
                                          obj = { kind: "option", optionId: null, text: null };
                                          ({ id: obj.optionId, label: obj.text } = onSubmit);
                                          closure_1 = obj;
                                          tmp4 = closure_13;
                                          if (tmp4) {
                                            tmp7 = closure_4;
                                            tmp8 = closure_4((arg0) => {
                                              obj = {};
                                              const merged = Object.assign(arg0);
                                              obj[user.id] = obj;
                                              return obj;
                                            });
                                          } else {
                                            tmp5 = closure_15;
                                            tmp6 = closure_15(obj);
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    cResult[39] = tmp51;
                                    tmp50 = tmp51;
                                  } else {
                                    tmp50 = cResult[39];
                                  }
                                  if (cResult[40] === tmp4.footer) {
                                    if (cResult[41] === tmp47) {
                                      let tmp55;
                                      let tmp58;
                                      if (cResult[42] === tmp50) {
                                        tmp55 = cResult[43];
                                      }
                                      if (cResult[44] !== (true === clarification.questions[bound].multi_select)) {
                                        let tmp59 = null;
                                        if (true === clarification.questions[bound].multi_select) {
                                          let obj9 = { variant: "text-xs/normal", color: "text-muted", children: obj21.string(onSubmit(3753).tE8qbz) };
                                          const Text2 = tmp(4892).Text;
                                          class Z {
                                            constructor(arg0) {
                                              closure_0 = onSubmit;
                                              tmp = closure_11;
                                              if (tmp) {
                                                tmp9 = closure_6;
                                                tmp10 = closure_6((arr) => {
                                                  obj = {};
                                                  const merged = Object.assign(arr);
                                                  id = user.id;
                                                  let tmp4 = arr[user.id];
                                                  const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                                  ConjureClarification;
                                                  if (tmp4 == null) {
                                                    tmp4 = closure_9;
                                                  }
                                                  obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                                  return obj;
                                                });
                                              } else {
                                                tmp2 = closure_5;
                                                tmp3 = closure_5((arg0) => {
                                                  obj = {};
                                                  const merged = Object.assign(arg0);
                                                  obj[user.id] = "";
                                                  return obj;
                                                });
                                                obj = { kind: "option", optionId: null, text: null };
                                                ({ id: obj.optionId, label: obj.text } = onSubmit);
                                                closure_1 = obj;
                                                tmp4 = closure_13;
                                                if (tmp4) {
                                                  tmp7 = closure_4;
                                                  tmp8 = closure_4((arg0) => {
                                                    obj = {};
                                                    const merged = Object.assign(arg0);
                                                    obj[user.id] = obj;
                                                    return obj;
                                                  });
                                                } else {
                                                  tmp5 = closure_15;
                                                  tmp6 = closure_15(obj);
                                                }
                                              }
                                              return;
                                            }
                                          }
                                          tmp59 = closure_6(Text2, obj9);
                                        }
                                        class Z {
                                          constructor(arg0) {
                                            closure_0 = onSubmit;
                                            tmp = closure_11;
                                            if (tmp) {
                                              tmp9 = closure_6;
                                              tmp10 = closure_6((arr) => {
                                                obj = {};
                                                const merged = Object.assign(arr);
                                                id = user.id;
                                                let tmp4 = arr[user.id];
                                                const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                                ConjureClarification;
                                                if (tmp4 == null) {
                                                  tmp4 = closure_9;
                                                }
                                                obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                                return obj;
                                              });
                                            } else {
                                              tmp2 = closure_5;
                                              tmp3 = closure_5((arg0) => {
                                                obj = {};
                                                const merged = Object.assign(arg0);
                                                obj[user.id] = "";
                                                return obj;
                                              });
                                              obj = { kind: "option", optionId: null, text: null };
                                              ({ id: obj.optionId, label: obj.text } = onSubmit);
                                              closure_1 = obj;
                                              tmp4 = closure_13;
                                              if (tmp4) {
                                                tmp7 = closure_4;
                                                tmp8 = closure_4((arg0) => {
                                                  obj = {};
                                                  const merged = Object.assign(arg0);
                                                  obj[user.id] = obj;
                                                  return obj;
                                                });
                                              } else {
                                                tmp5 = closure_15;
                                                tmp6 = closure_15(obj);
                                              }
                                            }
                                            return;
                                          }
                                        }
                                        cResult[45] = tmp59;
                                        tmp58 = tmp59;
                                      } else {
                                        tmp58 = cResult[45];
                                      }
                                      if (cResult[46] === accessibilityRole) {
                                        if (cResult[47] === null == onSubmit) {
                                          if (cResult[48] === tmp27) {
                                            if (cResult[49] === true === clarification.questions[bound].multi_select) {
                                              if (cResult[50] === conjureOwnImages) {
                                                if (cResult[51] === tmp22) {
                                                  if (cResult[52] === projectId) {
                                                    if (cResult[53] === clarification.questions[bound]) {
                                                      if (cResult[54] === answeredOptionIdsResult) {
                                                        let tmp62;
                                                        if (cResult[55] === tmp4.optionHeader) {
                                                          tmp62 = cResult[56];
                                                        }
                                                        if (cResult[57] === tmp35) {
                                                          if (cResult[58] === str) {
                                                            if (cResult[59] === tmp22) {
                                                              if (cResult[60] === clarification.questions[bound].id) {
                                                                let tmp64;
                                                                if (cResult[61] === clarification.questions[bound].question) {
                                                                  tmp64 = cResult[62];
                                                                }
                                                                if (cResult[63] === null == onSubmit) {
                                                                  if (cResult[64] === tmp28) {
                                                                    if (cResult[65] === bound) {
                                                                      if (cResult[66] === true === clarification.questions[bound].multi_select) {
                                                                        if (cResult[67] === tmp36) {
                                                                          if (cResult[68] === tmp22) {
                                                                            if (cResult[69] === tmp26) {
                                                                              if (cResult[70] === tmp4.customField) {
                                                                                if (cResult[71] === tmp4.footer) {
                                                                                  if (cResult[72] === bound === tmp39) {
                                                                                    if (cResult[75] === tmp4.card) {
                                                                                      if (cResult[76] === tmp55) {
                                                                                        if (cResult[77] === tmp58) {
                                                                                          if (cResult[78] === tmp62) {
                                                                                            if (cResult[79] === tmp64) {
                                                                                              let tmp77;
                                                                                              if (cResult[80] === tmp67) {
                                                                                                tmp77 = cResult[81];
                                                                                              }
                                                                                              return tmp77;
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                    class Z {
                                                                                      constructor(arg0) {
                                                                                        closure_0 = onSubmit;
                                                                                        tmp = closure_11;
                                                                                        if (tmp) {
                                                                                          tmp9 = closure_6;
                                                                                          tmp10 = closure_6((arr) => {
                                                                                            obj = {};
                                                                                            const merged = Object.assign(arr);
                                                                                            id = user.id;
                                                                                            let tmp4 = arr[user.id];
                                                                                            const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                                                                            ConjureClarification;
                                                                                            if (tmp4 == null) {
                                                                                              tmp4 = closure_9;
                                                                                            }
                                                                                            obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                                                                            return obj;
                                                                                          });
                                                                                        } else {
                                                                                          tmp2 = closure_5;
                                                                                          tmp3 = closure_5((arg0) => {
                                                                                            obj = {};
                                                                                            const merged = Object.assign(arg0);
                                                                                            obj[user.id] = "";
                                                                                            return obj;
                                                                                          });
                                                                                          obj = { kind: "option", optionId: null, text: null };
                                                                                          ({ id: obj.optionId, label: obj.text } = onSubmit);
                                                                                          closure_1 = obj;
                                                                                          tmp4 = closure_13;
                                                                                          if (tmp4) {
                                                                                            tmp7 = closure_4;
                                                                                            tmp8 = closure_4((arg0) => {
                                                                                              obj = {};
                                                                                              const merged = Object.assign(arg0);
                                                                                              obj[user.id] = obj;
                                                                                              return obj;
                                                                                            });
                                                                                          } else {
                                                                                            tmp5 = closure_15;
                                                                                            tmp6 = closure_15(obj);
                                                                                          }
                                                                                        }
                                                                                        return;
                                                                                      }
                                                                                    }
                                                                                    let obj10 = { style: tmp4.card, children: items };
                                                                                    items = [tmp55, tmp58, tmp62, tmp64, tmp67];
                                                                                    const tmp79 = closure_7(View, obj10);
                                                                                    cResult[75] = tmp4.card;
                                                                                    cResult[76] = tmp55;
                                                                                    cResult[77] = tmp58;
                                                                                    cResult[78] = tmp62;
                                                                                    cResult[79] = tmp64;
                                                                                    cResult[80] = tmp67;
                                                                                    cResult[81] = tmp79;
                                                                                    tmp77 = tmp79;
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
                                                                class Z {
                                                                  constructor(arg0) {
                                                                    closure_0 = onSubmit;
                                                                    tmp = closure_11;
                                                                    if (tmp) {
                                                                      tmp9 = closure_6;
                                                                      tmp10 = closure_6((arr) => {
                                                                        obj = {};
                                                                        const merged = Object.assign(arr);
                                                                        id = user.id;
                                                                        let tmp4 = arr[user.id];
                                                                        const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                                                        ConjureClarification;
                                                                        if (tmp4 == null) {
                                                                          tmp4 = closure_9;
                                                                        }
                                                                        obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                                                        return obj;
                                                                      });
                                                                    } else {
                                                                      tmp2 = closure_5;
                                                                      tmp3 = closure_5((arg0) => {
                                                                        obj = {};
                                                                        const merged = Object.assign(arg0);
                                                                        obj[user.id] = "";
                                                                        return obj;
                                                                      });
                                                                      obj = { kind: "option", optionId: null, text: null };
                                                                      ({ id: obj.optionId, label: obj.text } = onSubmit);
                                                                      closure_1 = obj;
                                                                      tmp4 = closure_13;
                                                                      if (tmp4) {
                                                                        tmp7 = closure_4;
                                                                        tmp8 = closure_4((arg0) => {
                                                                          obj = {};
                                                                          const merged = Object.assign(arg0);
                                                                          obj[user.id] = obj;
                                                                          return obj;
                                                                        });
                                                                      } else {
                                                                        tmp5 = closure_15;
                                                                        tmp6 = closure_15(obj);
                                                                      }
                                                                    }
                                                                    return;
                                                                  }
                                                                }
                                                                let tmp71 = null;
                                                                const obj11 = { style: tmp4.footer, children: items1 };
                                                                const tmp69 = closure_7;
                                                                if (bound > 0) {
                                                                  tmp71 = null;
                                                                  if (null != onSubmit) {
                                                                    const obj12 = { variant: "tertiary", size: "sm", text: obj24.string(onSubmit(3753).Pk5lfA), onPress: tmp28 };
                                                                    const Button = tmp(5601).Button;
                                                                    class Z {
                                                                      constructor(arg0) {
                                                                        closure_0 = onSubmit;
                                                                        tmp = closure_11;
                                                                        if (tmp) {
                                                                          tmp9 = closure_6;
                                                                          tmp10 = closure_6((arr) => {
                                                                            obj = {};
                                                                            const merged = Object.assign(arr);
                                                                            id = user.id;
                                                                            let tmp4 = arr[user.id];
                                                                            const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                                                            ConjureClarification;
                                                                            if (tmp4 == null) {
                                                                              tmp4 = closure_9;
                                                                            }
                                                                            obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                                                            return obj;
                                                                          });
                                                                        } else {
                                                                          tmp2 = closure_5;
                                                                          tmp3 = closure_5((arg0) => {
                                                                            obj = {};
                                                                            const merged = Object.assign(arg0);
                                                                            obj[user.id] = "";
                                                                            return obj;
                                                                          });
                                                                          obj = { kind: "option", optionId: null, text: null };
                                                                          ({ id: obj.optionId, label: obj.text } = onSubmit);
                                                                          closure_1 = obj;
                                                                          tmp4 = closure_13;
                                                                          if (tmp4) {
                                                                            tmp7 = closure_4;
                                                                            tmp8 = closure_4((arg0) => {
                                                                              obj = {};
                                                                              const merged = Object.assign(arg0);
                                                                              obj[user.id] = obj;
                                                                              return obj;
                                                                            });
                                                                          } else {
                                                                            tmp5 = closure_15;
                                                                            tmp6 = closure_15(obj);
                                                                          }
                                                                        }
                                                                        return;
                                                                      }
                                                                    }
                                                                    tmp71 = closure_6(Button, obj12);
                                                                  }
                                                                }
                                                                items1 = [tmp71, , ];
                                                                const obj13 = { style: tmp4.customField };
                                                                items1[1] = closure_6(View, obj13);
                                                                let tmp75 = tmp17;
                                                                const Button2 = tmp(5601).Button;
                                                                const tmp74 = closure_6;
                                                                if (null != onSubmit) {
                                                                  tmp75 = null == tmp36;
                                                                }
                                                                const obj15 = {
                                                                  variant: "primary",
                                                                  size: "sm",
                                                                  disabled: tmp75,
                                                                  text: string(w1nRmT),
                                                                  onPress() {
                                                                                                                                  if (null != closure_19) {
                                                                                                                                    closure_15(tmp);
                                                                                                                                  }
                                                                                                                                }
                                                                };
                                                                let intl2 = tmp(1126).intl;
                                                                string = intl2.string;
                                                                if (bound === tmp39) {
                                                                  w1nRmT = tmp(1126).t.geKm7t;
                                                                } else {
                                                                  w1nRmT = onSubmit(3753).w1nRmT;
                                                                }
                                                                items1[2] = tmp74(Button2, obj15);
                                                                tmp69(View, obj11);
                                                              }
                                                            }
                                                          }
                                                        }
                                                        class Z {
                                                          constructor(arg0) {
                                                            closure_0 = onSubmit;
                                                            tmp = closure_11;
                                                            if (tmp) {
                                                              tmp9 = closure_6;
                                                              tmp10 = closure_6((arr) => {
                                                                obj = {};
                                                                const merged = Object.assign(arr);
                                                                id = user.id;
                                                                let tmp4 = arr[user.id];
                                                                const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                                                ConjureClarification;
                                                                if (tmp4 == null) {
                                                                  tmp4 = closure_9;
                                                                }
                                                                obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                                                return obj;
                                                              });
                                                            } else {
                                                              tmp2 = closure_5;
                                                              tmp3 = closure_5((arg0) => {
                                                                obj = {};
                                                                const merged = Object.assign(arg0);
                                                                obj[user.id] = "";
                                                                return obj;
                                                              });
                                                              obj = { kind: "option", optionId: null, text: null };
                                                              ({ id: obj.optionId, label: obj.text } = onSubmit);
                                                              closure_1 = obj;
                                                              tmp4 = closure_13;
                                                              if (tmp4) {
                                                                tmp7 = closure_4;
                                                                tmp8 = closure_4((arg0) => {
                                                                  obj = {};
                                                                  const merged = Object.assign(arg0);
                                                                  obj[user.id] = obj;
                                                                  return obj;
                                                                });
                                                              } else {
                                                                tmp5 = closure_15;
                                                                tmp6 = closure_15(obj);
                                                              }
                                                            }
                                                            return;
                                                          }
                                                        }
                                                        cResult[57] = tmp35;
                                                        cResult[58] = str;
                                                        cResult[59] = tmp22;
                                                        cResult[60] = clarification.questions[bound].id;
                                                        cResult[61] = clarification.questions[bound].question;
                                                        cResult[62] = null;
                                                        tmp64 = tmp65;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      class Z {
                                        constructor(arg0) {
                                          closure_0 = onSubmit;
                                          tmp = closure_11;
                                          if (tmp) {
                                            tmp9 = closure_6;
                                            tmp10 = closure_6((arr) => {
                                              obj = {};
                                              const merged = Object.assign(arr);
                                              id = user.id;
                                              let tmp4 = arr[user.id];
                                              const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                              ConjureClarification;
                                              if (tmp4 == null) {
                                                tmp4 = closure_9;
                                              }
                                              obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                              return obj;
                                            });
                                          } else {
                                            tmp2 = closure_5;
                                            tmp3 = closure_5((arg0) => {
                                              obj = {};
                                              const merged = Object.assign(arg0);
                                              obj[user.id] = "";
                                              return obj;
                                            });
                                            obj = { kind: "option", optionId: null, text: null };
                                            ({ id: obj.optionId, label: obj.text } = onSubmit);
                                            closure_1 = obj;
                                            tmp4 = closure_13;
                                            if (tmp4) {
                                              tmp7 = closure_4;
                                              tmp8 = closure_4((arg0) => {
                                                obj = {};
                                                const merged = Object.assign(arg0);
                                                obj[user.id] = obj;
                                                return obj;
                                              });
                                            } else {
                                              tmp5 = closure_15;
                                              tmp6 = closure_15(obj);
                                            }
                                          }
                                          return;
                                        }
                                      }
                                      cResult[46] = accessibilityRole;
                                      cResult[47] = null == onSubmit;
                                      cResult[48] = tmp27;
                                      cResult[49] = true === clarification.questions[bound].multi_select;
                                      cResult[50] = conjureOwnImages;
                                      cResult[51] = tmp22;
                                      cResult[52] = projectId;
                                      cResult[53] = clarification.questions[bound];
                                      cResult[54] = answeredOptionIdsResult;
                                      cResult[55] = tmp4.optionHeader;
                                      cResult[56] = tmp63;
                                      tmp62 = tmp63;
                                    }
                                  }
                                  class Z {
                                    constructor(arg0) {
                                      closure_0 = onSubmit;
                                      tmp = closure_11;
                                      if (tmp) {
                                        tmp9 = closure_6;
                                        tmp10 = closure_6((arr) => {
                                          obj = {};
                                          const merged = Object.assign(arr);
                                          id = user.id;
                                          let tmp4 = arr[user.id];
                                          const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                          ConjureClarification;
                                          if (tmp4 == null) {
                                            tmp4 = closure_9;
                                          }
                                          obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                          return obj;
                                        });
                                      } else {
                                        tmp2 = closure_5;
                                        tmp3 = closure_5((arg0) => {
                                          obj = {};
                                          const merged = Object.assign(arg0);
                                          obj[user.id] = "";
                                          return obj;
                                        });
                                        obj = { kind: "option", optionId: null, text: null };
                                        ({ id: obj.optionId, label: obj.text } = onSubmit);
                                        closure_1 = obj;
                                        tmp4 = closure_13;
                                        if (tmp4) {
                                          tmp7 = closure_4;
                                          tmp8 = closure_4((arg0) => {
                                            obj = {};
                                            const merged = Object.assign(arg0);
                                            obj[user.id] = obj;
                                            return obj;
                                          });
                                        } else {
                                          tmp5 = closure_15;
                                          tmp6 = closure_15(obj);
                                        }
                                      }
                                      return;
                                    }
                                  }
                                  const obj16 = { style: tmp4.footer, children: items2 };
                                  items2 = [tmp47, tmp50];
                                  const tmp57 = closure_7(View, obj16);
                                  cResult[40] = tmp4.footer;
                                  cResult[41] = tmp47;
                                  cResult[42] = tmp50;
                                  cResult[43] = tmp57;
                                  tmp55 = tmp57;
                                }
                              }
                              class Z {
                                constructor(arg0) {
                                  closure_0 = onSubmit;
                                  tmp = closure_11;
                                  if (tmp) {
                                    tmp9 = closure_6;
                                    tmp10 = closure_6((arr) => {
                                      obj = {};
                                      const merged = Object.assign(arr);
                                      id = user.id;
                                      let tmp4 = arr[user.id];
                                      const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                      ConjureClarification;
                                      if (tmp4 == null) {
                                        tmp4 = closure_9;
                                      }
                                      obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                      return obj;
                                    });
                                  } else {
                                    tmp2 = closure_5;
                                    tmp3 = closure_5((arg0) => {
                                      obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = "";
                                      return obj;
                                    });
                                    obj = { kind: "option", optionId: null, text: null };
                                    ({ id: obj.optionId, label: obj.text } = onSubmit);
                                    closure_1 = obj;
                                    tmp4 = closure_13;
                                    if (tmp4) {
                                      tmp7 = closure_4;
                                      tmp8 = closure_4((arg0) => {
                                        obj = {};
                                        const merged = Object.assign(arg0);
                                        obj[user.id] = obj;
                                        return obj;
                                      });
                                    } else {
                                      tmp5 = closure_15;
                                      tmp6 = closure_15(obj);
                                    }
                                  }
                                  return;
                                }
                              }
                              const obj17 = { style: tmp4.customField, children: items3 };
                              items3 = [tmp40, tmp44];
                              const tmp49 = closure_7(View, obj17);
                              cResult[34] = tmp4.customField;
                              cResult[35] = tmp40;
                              cResult[36] = tmp44;
                              cResult[37] = tmp49;
                              tmp47 = tmp49;
                            }
                            class Z {
                              constructor(arg0) {
                                closure_0 = onSubmit;
                                tmp = closure_11;
                                if (tmp) {
                                  tmp9 = closure_6;
                                  tmp10 = closure_6((arr) => {
                                    obj = {};
                                    const merged = Object.assign(arr);
                                    id = user.id;
                                    let tmp4 = arr[user.id];
                                    const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                    ConjureClarification;
                                    if (tmp4 == null) {
                                      tmp4 = closure_9;
                                    }
                                    obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                    return obj;
                                  });
                                } else {
                                  tmp2 = closure_5;
                                  tmp3 = closure_5((arg0) => {
                                    obj = {};
                                    const merged = Object.assign(arg0);
                                    obj[user.id] = "";
                                    return obj;
                                  });
                                  obj = { kind: "option", optionId: null, text: null };
                                  ({ id: obj.optionId, label: obj.text } = onSubmit);
                                  closure_1 = obj;
                                  tmp4 = closure_13;
                                  if (tmp4) {
                                    tmp7 = closure_4;
                                    tmp8 = closure_4((arg0) => {
                                      obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = obj;
                                      return obj;
                                    });
                                  } else {
                                    tmp5 = closure_15;
                                    tmp6 = closure_15(obj);
                                  }
                                }
                                return;
                              }
                            }
                            if (clarification.questions.length > 1) {
                              const obj18 = { variant: "text-xs/semibold", color: "text-muted", children: obj14.formatToPlainString(onSubmit(3753).yzYUjq, obj19) };
                              let Text = tmp(4892).Text;
                              class Z {
                                constructor(arg0) {
                                  closure_0 = onSubmit;
                                  tmp = closure_11;
                                  if (tmp) {
                                    tmp9 = closure_6;
                                    tmp10 = closure_6((arr) => {
                                      obj = {};
                                      const merged = Object.assign(arr);
                                      id = user.id;
                                      let tmp4 = arr[user.id];
                                      const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                      ConjureClarification;
                                      if (tmp4 == null) {
                                        tmp4 = closure_9;
                                      }
                                      obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                      return obj;
                                    });
                                  } else {
                                    tmp2 = closure_5;
                                    tmp3 = closure_5((arg0) => {
                                      obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = "";
                                      return obj;
                                    });
                                    obj = { kind: "option", optionId: null, text: null };
                                    ({ id: obj.optionId, label: obj.text } = onSubmit);
                                    closure_1 = obj;
                                    tmp4 = closure_13;
                                    if (tmp4) {
                                      tmp7 = closure_4;
                                      tmp8 = closure_4((arg0) => {
                                        obj = {};
                                        const merged = Object.assign(arg0);
                                        obj[user.id] = obj;
                                        return obj;
                                      });
                                    } else {
                                      tmp5 = closure_15;
                                      tmp6 = closure_15(obj);
                                    }
                                  }
                                  return;
                                }
                              }
                              obj19 = { index: bound + 1, total: clarification.questions.length };
                              tmp41 = closure_6(Text, obj18);
                            }
                            cResult[29] = bound;
                            cResult[30] = clarification.questions.length;
                            cResult[31] = tmp41;
                            tmp40 = tmp41;
                          }
                        }
                      }
                      if (null != multiSelectAnswerResult) {
                        class Z {
                          constructor(arg0) {
                            closure_0 = onSubmit;
                            tmp = closure_11;
                            if (tmp) {
                              tmp9 = closure_6;
                              tmp10 = closure_6((arr) => {
                                obj = {};
                                const merged = Object.assign(arr);
                                id = user.id;
                                let tmp4 = arr[user.id];
                                const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                                ConjureClarification;
                                if (tmp4 == null) {
                                  tmp4 = closure_9;
                                }
                                obj[id] = toggleClarificationOption(user, tmp4, id.id);
                                return obj;
                              });
                            } else {
                              tmp2 = closure_5;
                              tmp3 = closure_5((arg0) => {
                                obj = {};
                                const merged = Object.assign(arg0);
                                obj[user.id] = "";
                                return obj;
                              });
                              obj = { kind: "option", optionId: null, text: null };
                              ({ id: obj.optionId, label: obj.text } = onSubmit);
                              closure_1 = obj;
                              tmp4 = closure_13;
                              if (tmp4) {
                                tmp7 = closure_4;
                                tmp8 = closure_4((arg0) => {
                                  obj = {};
                                  const merged = Object.assign(arg0);
                                  obj[user.id] = obj;
                                  return obj;
                                });
                              } else {
                                tmp5 = closure_15;
                                tmp6 = closure_15(obj);
                              }
                            }
                            return;
                          }
                        }
                      } else if ("" !== str.trim()) {
                        tmp37 = { kind: "custom", text: str.trim() };
                        const obj20 = { kind: "custom", text: str.trim() };
                      } else {
                        tmp37 = first1[tmp19.id];
                        if (tmp37 == null) {
                          tmp37 = null;
                        }
                      }
                      class Z {
                        constructor(arg0) {
                          closure_0 = onSubmit;
                          tmp = closure_11;
                          if (tmp) {
                            tmp9 = closure_6;
                            tmp10 = closure_6((arr) => {
                              obj = {};
                              const merged = Object.assign(arr);
                              id = user.id;
                              let tmp4 = arr[user.id];
                              const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                              ConjureClarification;
                              if (tmp4 == null) {
                                tmp4 = closure_9;
                              }
                              obj[id] = toggleClarificationOption(user, tmp4, id.id);
                              return obj;
                            });
                          } else {
                            tmp2 = closure_5;
                            tmp3 = closure_5((arg0) => {
                              obj = {};
                              const merged = Object.assign(arg0);
                              obj[user.id] = "";
                              return obj;
                            });
                            obj = { kind: "option", optionId: null, text: null };
                            ({ id: obj.optionId, label: obj.text } = onSubmit);
                            closure_1 = obj;
                            tmp4 = closure_13;
                            if (tmp4) {
                              tmp7 = closure_4;
                              tmp8 = closure_4((arg0) => {
                                obj = {};
                                const merged = Object.assign(arg0);
                                obj[user.id] = obj;
                                return obj;
                              });
                            } else {
                              tmp5 = closure_15;
                              tmp6 = closure_15(obj);
                            }
                          }
                          return;
                        }
                      }
                      cResult[24] = first1;
                      cResult[25] = str;
                      cResult[26] = multiSelectAnswerResult;
                      cResult[27] = clarification.questions[bound].id;
                      cResult[28] = tmp37;
                      tmp36 = tmp37;
                    }
                  }
                  function ie() {
                    if (null == multiSelectAnswerResult) {
                      const trimmed = closure_1_17.trim();
                      if ("" !== trimmed) {
                        const obj = { kind: "custom", text: trimmed };
                        closure_15(obj);
                      }
                    } else if ("" !== multiSelectAnswerResult.text) {
                      closure_15(multiSelectAnswerResult);
                    }
                  }
                  cResult[20] = str;
                  cResult[21] = multiSelectAnswerResult;
                  cResult[22] = tmp26;
                  cResult[23] = ie;
                  tmp35 = ie;
                }
                class Z {
                  constructor(arg0) {
                    closure_0 = onSubmit;
                    tmp = closure_11;
                    if (tmp) {
                      tmp9 = closure_6;
                      tmp10 = closure_6((arr) => {
                        obj = {};
                        const merged = Object.assign(arr);
                        id = user.id;
                        let tmp4 = arr[user.id];
                        const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                        ConjureClarification;
                        if (tmp4 == null) {
                          tmp4 = closure_9;
                        }
                        obj[id] = toggleClarificationOption(user, tmp4, id.id);
                        return obj;
                      });
                    } else {
                      tmp2 = closure_5;
                      tmp3 = closure_5((arg0) => {
                        obj = {};
                        const merged = Object.assign(arg0);
                        obj[user.id] = "";
                        return obj;
                      });
                      obj = { kind: "option", optionId: null, text: null };
                      ({ id: obj.optionId, label: obj.text } = onSubmit);
                      closure_1 = obj;
                      tmp4 = closure_13;
                      if (tmp4) {
                        tmp7 = closure_4;
                        tmp8 = closure_4((arg0) => {
                          obj = {};
                          const merged = Object.assign(arg0);
                          obj[user.id] = obj;
                          return obj;
                        });
                      } else {
                        tmp5 = closure_15;
                        tmp6 = closure_15(obj);
                      }
                    }
                    return;
                  }
                }
                cResult[17] = null == onSubmit;
                cResult[18] = bound;
                cResult[19] = tmp29;
                tmp28 = tmp29;
              }
            }
          }
          class Z {
            constructor(arg0) {
              closure_0 = onSubmit;
              tmp = closure_11;
              if (tmp) {
                tmp9 = closure_6;
                tmp10 = closure_6((arr) => {
                  obj = {};
                  const merged = Object.assign(arr);
                  id = user.id;
                  let tmp4 = arr[user.id];
                  const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                  ConjureClarification;
                  if (tmp4 == null) {
                    tmp4 = closure_9;
                  }
                  obj[id] = toggleClarificationOption(user, tmp4, id.id);
                  return obj;
                });
              } else {
                tmp2 = closure_5;
                tmp3 = closure_5((arg0) => {
                  obj = {};
                  const merged = Object.assign(arg0);
                  obj[user.id] = "";
                  return obj;
                });
                obj = { kind: "option", optionId: null, text: null };
                ({ id: obj.optionId, label: obj.text } = onSubmit);
                closure_1 = obj;
                tmp4 = closure_13;
                if (tmp4) {
                  tmp7 = closure_4;
                  tmp8 = closure_4((arg0) => {
                    obj = {};
                    const merged = Object.assign(arg0);
                    obj[user.id] = obj;
                    return obj;
                  });
                } else {
                  tmp5 = closure_15;
                  tmp6 = closure_15(obj);
                }
              }
              return;
            }
          }
          cResult[12] = true === clarification.questions[bound].multi_select;
          cResult[13] = tmp22;
          cResult[14] = clarification.questions[bound];
          cResult[15] = tmp26;
          cResult[16] = Z;
          tmp27 = Z;
        }
      }
    }
  }
  class V {
    constructor(arg0) {
      if (null != onSubmit) {
        const obj = {};
        const merged = Object.assign(first1);
        obj[id.id] = arg0;
        closure_4(obj);
        const obj5 = ConjureClarification;
        const result = obj5.followingClarificationStep(clarification, obj, bound);
        if (null == result) {
          const tmp14Result = ConjureClarification;
          const result1 = tmp14Result.formatClarificationAnswers(clarification, obj);
          if ("" !== result1) {
            const tmp14Result3 = ConjureClarification;
            const result2 = tmp14Result3.clarificationAnswersPayload(clarification, obj);
            const tmp14Result4 = ConjureClarification;
            tmp(result1, result2, tmp14Result4.clarificationAnswerAttachments(clarification, obj));
          }
        } else {
          closure_7(result);
        }
      }
    }
  }
  cResult[6] = first1;
  cResult[7] = clarification;
  cResult[8] = bound;
  cResult[9] = onSubmit;
  cResult[10] = clarification.questions[bound].id;
  cResult[11] = V;
  tmp26 = V;
}) : ((onSubmit) => {
  let _undefined;
  let _undefined2;
  let answeredOptionIdsResult;
  let c5;
  let clarification;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items4;
  let items5;
  let items7;
  let obj15;
  let obj9;
  let optionHeader;
  let projectId;
  let string;
  let tmp28;
  let tmp35Result6;
  let tmp6;
  let w1nRmT;
  ({ projectId, clarification } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const onDismiss = onSubmit.onDismiss;
  let first;
  react = undefined;
  c5 = undefined;
  closure_8 = undefined;
  let c14;
  let callback;
  let callback1;
  let str;
  let c18;
  let c19;
  let tmp = closure_8();
  dependencyMap = tmp;
  let obj = react;
  const tmp2 = first(react.useState({}), 2);
  first = tmp2[0];
  let tmp4 = tmp2[1];
  react = tmp4;
  [tmp6, c5] = first(react.useState({}), 2);
  const tmp5 = first(react.useState({}), 2);
  const tmp7 = first(react.useState({}), 2);
  let closure_6 = tmp7[1];
  const first1 = tmp7[0];
  const tmp9 = first(react.useState(0), 2);
  let closure_7 = tmp9[1];
  let tmp10 = null == onSubmit;
  closure_8 = tmp10;
  const bound = Math.min(tmp9[0], length - 1);
  id = tmp12;
  let tmp13 = true === tmp12.multi_select;
  let closure_11 = tmp13;
  let obj2 = clarification(4600);
  const accessibilityRole = obj2.useCheckboxA11yNative({ checked: false }).accessibilityRole;
  let obj3 = clarification(16738);
  const isImageQuestionResult = obj3.isImageQuestion(clarification.questions[bound]);
  let c13 = isImageQuestionResult;
  if (tmp13) {
    let tmp18 = first1[tmp12.id];
    if (tmp18 == null) {
      tmp18 = bound;
    }
    answeredOptionIdsResult = tmp18;
  } else {
    let tmp14Result = tmp14(16738);
    answeredOptionIdsResult = tmp14Result.answeredOptionIds(first[tmp12.id]);
  }
  c14 = answeredOptionIdsResult;
  let tmp14Result3 = tmp14(16739);
  const conjureOwnImages = tmp14Result3.useConjureOwnImages(projectId, first, tmp4);
  let items = [first, clarification, bound, onSubmit, clarification.questions[bound].id];
  callback = obj.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_4(obj);
      const obj5 = ConjureClarification;
      const result = obj5.followingClarificationStep(clarification, obj, bound);
      if (null == result) {
        const tmp14Result = ConjureClarification;
        const result1 = tmp14Result.formatClarificationAnswers(clarification, obj);
        if ("" !== result1) {
          const tmp14Result3 = ConjureClarification;
          const result2 = tmp14Result3.clarificationAnswersPayload(clarification, obj);
          const tmp14Result4 = ConjureClarification;
          tmp(result1, result2, tmp14Result4.clarificationAnswerAttachments(clarification, obj));
        }
      } else {
        closure_7(result);
      }
    }
  }, items);
  let items1 = [tmp13, isImageQuestionResult, clarification.questions[bound], callback];
  callback1 = obj.useCallback((arg0) => {
    let user;
    id = arg0;
    if (closure_11) {
      closure_6((arr) => {
        obj = {};
        const merged = Object.assign(arr);
        id = user.id;
        let tmp4 = arr[user.id];
        const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
        ConjureClarification;
        if (tmp4 == null) {
          tmp4 = closure_9;
        }
        obj[id] = toggleClarificationOption(user, tmp4, id.id);
        return obj;
      });
    } else {
      const tmp3 = _undefined((arg0) => {
        obj = {};
        const merged = Object.assign(arg0);
        obj[user.id] = "";
        return obj;
      });
      let obj = { kind: "option", optionId: null, text: null };
      ({ id: obj.optionId, label: obj.text } = arg0);
      if (c13) {
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
  const items2 = [tmp10, bound];
  str = tmp6[tmp12.id];
  const callback2 = obj.useCallback(() => {
    const tmp = closure_8 || 0 === bound;
    if (!tmp) {
      closure_7(bound - 1);
    }
  }, items2);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (tmp13) {
    let tmp14Result4 = tmp14(16740);
    multiSelectAnswerResult = tmp14Result4.multiSelectAnswer(tmp12, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp12));
  }
  c18 = multiSelectAnswerResult;
  const items3 = [str, multiSelectAnswerResult, callback];
  const callback3 = obj.useCallback(() => {
    if (null == _undefined) {
      const trimmed = str.trim();
      if ("" !== trimmed) {
        const obj = { kind: "custom", text: trimmed };
        callback(obj);
      }
    } else if ("" !== _undefined.text) {
      callback(_undefined);
    }
  }, items3);
  if (null != multiSelectAnswerResult) {
    let tmp29 = null;
    if ("" !== multiSelectAnswerResult.text) {
      tmp29 = multiSelectAnswerResult;
    }
    tmp28 = tmp29;
  } else if ("" !== str.trim()) {
    let obj4 = { kind: "custom", text: str.trim() };
    tmp28 = obj4;
  } else {
    tmp28 = first[tmp12.id];
    if (tmp28 == null) {
      tmp28 = null;
    }
  }
  c19 = tmp28;
  let obj5 = { style: tmp.card, children: null };
  let obj6 = { style: tmp.footer, children: items5 };
  let obj7 = { style: tmp.customField, children: items4 };
  let tmp32 = null;
  if (clarification.questions.length > 1) {
    let obj8 = { variant: "text-xs/semibold", color: "text-muted", children: intl.formatToPlainString(onSubmit(3753).yzYUjq, obj9) };
    let Text = tmp14(4892).Text;
    intl = tmp14(1126).intl;
    obj9 = { index: bound + 1, total: clarification.questions.length };
    tmp32 = closure_6(Text, obj8);
  }
  items4 = [tmp32, ];
  let obj10 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: tmp12.question };
  items4[1] = closure_6(clarification(4892).Text, obj10);
  items5 = [closure_7(c5, obj7), ];
  let tmp35Result = null;
  if (null != onDismiss) {
    const obj11 = { IconComponent: clarification(6024).XSmallIcon, onPress: onDismiss, accessibilityLabel: intl2.string(onSubmit(3753).qVXlk0) };
    const tmp38 = onSubmit(16591);
    intl2 = tmp14(1126).intl;
    tmp35Result = tmp35(tmp38, obj11);
  }
  items5[1] = tmp35Result;
  const items6 = [closure_7(c5, obj6), , , , ];
  let tmp35Result5 = null;
  if (tmp13) {
    const obj12 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(onSubmit(3753).tE8qbz) };
    const Text2 = tmp14(4892).Text;
    intl3 = tmp14(1126).intl;
    tmp35Result5 = tmp35(Text2, obj12);
  }
  items6[1] = tmp35Result5;
  if (isImageQuestionResult) {
    const obj13 = { projectId, question: clarification.questions[bound], selectedIds: answeredOptionIdsResult, disabled: tmp10, onPick: callback1, own: conjureOwnImages.controlsFor(clarification.questions[bound], tmp10) };
    const tmp43 = onSubmit(16741);
    tmp35Result6 = tmp35(tmp43, obj13);
  } else {
    const options = tmp12.options;
    tmp35Result6 = options.map((answer) => {
      let AQbxhf;
      let formatToPlainString;
      let intl2;
      let items;
      let items1;
      let obj3;
      let obj4;
      let obj5;
      let tmp10;
      let closure_0 = answer;
      let fn;
      const Card = clarification(optionHeader[18]).Card;
      if (!closure_8) {
        fn = () => callback1(answer);
      }
      const obj = { onPress: fn, border: str, accessibilityLabel: formatToPlainString(AQbxhf, obj5), children: items1 };
      str = undefined;
      if (closure_11) {
        if (_undefined2.includes(answer.id)) {
          str = "strong";
        }
      }
      if (closure_11) {
        const obj2 = { accessibilityRole, accessibilityState: obj3 };
        obj4 = obj2;
        obj3 = { checked: _undefined2.includes(answer.id), selected: _undefined2.includes(answer.id) };
      } else {
        obj4 = {};
      }
      const merged = Object.assign(obj4);
      const intl = clarification(optionHeader[13]).intl;
      formatToPlainString = intl.formatToPlainString;
      if (true === answer.recommended) {
        AQbxhf = onSubmit(optionHeader[14])["2p6UFz"];
        tmp10 = onSubmit;
      } else {
        AQbxhf = onSubmit(optionHeader[14]).AQbxhf;
        tmp10 = onSubmit;
      }
      let tmp13 = null;
      obj5 = { answer: answer.label };
      const obj6 = { style: optionHeader.optionHeader, children: items };
      if (closure_11) {
        const obj7 = { checked: _undefined2.includes(answer.id) };
        const FormCheckbox = clarification(optionHeader[19]).FormCheckbox;
        tmp13 = closure_6(FormCheckbox, obj7);
      }
      items = [tmp13, , ];
      const obj8 = { variant: "text-sm/semibold", color: "text-default", children: answer.label };
      items[1] = closure_6(clarification(optionHeader[12]).Text, obj8);
      let tmp16Result = null;
      if (true === answer.recommended) {
        const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(tmp10(optionHeader[14]).zku6r1) };
        const Text = clarification(optionHeader[12]).Text;
        intl2 = clarification(optionHeader[13]).intl;
        tmp16Result = closure_6(Text, obj9);
      }
      items[2] = tmp16Result;
      items1 = [closure_7(c5, obj6), ];
      let tmp16Result2 = null;
      if (null != answer.detail) {
        tmp16Result2 = null;
        if ("" !== answer.detail) {
          const obj10 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
          tmp16Result2 = closure_6(clarification(optionHeader[12]).Text, obj10);
        }
      }
      items1[1] = tmp16Result2;
      return closure_7(Card, obj, answer.id);
    });
  }
  items6[2] = tmp35Result6;
  let tmp35Result7 = null;
  if (!isImageQuestionResult) {
    const obj14 = {
      size: "md",
      placeholder: intl4.string(onSubmit(3753)["tOC+tn"]),
      accessibilityLabel: intl5.formatToPlainString(onSubmit(3753)["4JeYPB"], obj15),
      value: str,
      onChange(arg0) {
          let closure_0 = arg0;
          return _undefined((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[id.id] = closure_0;
            return obj;
          });
        },
      onSubmitEditing: callback3,
      returnKeyType: "send"
    };
    const TextInput = tmp14(6105).TextInput;
    intl4 = tmp14(1126).intl;
    intl5 = tmp14(1126).intl;
    obj15 = { question: clarification.questions[bound].question };
    tmp35Result7 = tmp35(TextInput, obj14);
  }
  items6[3] = tmp35Result7;
  if (clarification.questions.length <= 1) {
    let tmp30Result;
    if (!tmp13) {
      tmp30Result = null;
    }
    items6[4] = tmp30Result;
    obj5.children = items6;
    return closure_7(c5, obj5);
  }
  let tmp35Result8 = null;
  const obj16 = { style: tmp.footer, children: items7 };
  if (bound > 0) {
    tmp35Result8 = null;
    if (!tmp10) {
      const obj17 = { variant: "tertiary", size: "sm", text: intl6.string(onSubmit(3753).Pk5lfA), onPress: callback2 };
      const Button = tmp14(5601).Button;
      intl6 = tmp14(1126).intl;
      tmp35Result8 = tmp35(Button, obj17);
    }
  }
  items7 = [tmp35Result8, , ];
  const obj18 = { style: tmp.customField };
  items7[1] = closure_6(c5, obj18);
  const Button2 = tmp14(5601).Button;
  if (!tmp10) {
    tmp10 = null == tmp28;
  }
  const obj19 = {
    variant: "primary",
    size: "sm",
    disabled: tmp10,
    text: string(w1nRmT),
    onPress() {
      if (null != c19) {
        callback(tmp);
      }
    }
  };
  const intl7 = tmp14(1126).intl;
  string = intl7.string;
  if (bound === clarification.questions.length - 1) {
    w1nRmT = tmp14(1126).t.geKm7t;
  } else {
    w1nRmT = onSubmit(3753).w1nRmT;
  }
  items7[2] = closure_6(Button2, obj19);
  tmp30Result = tmp30(tmp31, obj16);
});
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default tmp4;