// discord_app/modules/conjure/clarification/native/ConjureClarificationCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConjureClarification from "../ConjureClarification.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, optionHeader: null, footer: null, customField: null };
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.optionHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.customField = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = [];
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationCard(onSubmit) {
  const cResult = clarification(576).c(80);
  ({ projectId, clarification } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const onDismiss = onSubmit.onDismiss;
  const tmp4 = disabled();
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
  View = tmp6Result[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj5 = {};
    cResult[2] = obj5;
    let tmp12 = obj5;
  } else {
    tmp12 = cResult[2];
  }
  const tmp6Result3 = first1(noop.useState(tmp12), 2);
  closure_6 = tmp6Result3[1];
  const tmp6Result4 = first1(noop.useState(0), 2);
  closure_7 = tmp6Result4[1];
  disabled = tmp15;
  const bound = Math.min(tmp6Result4[0], length - 1);
  id = tmp17;
  closure_11 = tmp18;
  if (cResult[3] !== clarification.questions[bound]) {
    const isImageQuestionResult = clarification(17013).isImageQuestion(tmp17);
    cResult[3] = tmp17;
    cResult[4] = isImageQuestionResult;
    let tmp19 = isImageQuestionResult;
    const tmpResult = clarification(17013);
  } else {
    tmp19 = cResult[4];
  }
  closure_12 = tmp19;
  if (true === clarification.questions[bound].multi_select) {
    let tmp21 = tmp6Result3[0][tmp17.id];
    if (tmp21 == null) {
      tmp21 = bound;
    }
    let optionHeader = tmp21;
  } else {
    optionHeader = clarification(17013).answeredOptionIds(first1[tmp17.id]);
    const tmpResult4 = clarification(17013);
  }
  let obj = clarification(576);
  const conjureOwnImages = clarification(17014).useConjureOwnImages(projectId, first1, tmp9);
  if (cResult[5] === first1) {
    if (cResult[6] === clarification) {
      if (cResult[7] === bound) {
        if (cResult[8] === onSubmit) {
          if (cResult[9] === tmp17.id) {
            let tmp22 = cResult[10];
          }
          closure_14 = tmp22;
          if (cResult[11] === tmp18) {
            if (cResult[12] === tmp19) {
              if (cResult[13] === tmp17) {
                if (cResult[14] === tmp22) {
                  let tmp23 = cResult[15];
                }
                closure_15 = tmp23;
                if (cResult[16] === tmp15) {
                  if (cResult[17] === bound) {
                    let tmp24 = cResult[18];
                  }
                  let str = tmp6Result[0][tmp17.id];
                  if (str == null) {
                    str = "";
                  }
                  class Z {
                    constructor() {
                      tmp = closure_8;
                      if (!closure_8) {
                        tmp2 = closure_9;
                        num = 0;
                        tmp = 0 === closure_9;
                      }
                      if (!tmp) {
                        tmp3 = closure_7;
                        tmp4 = closure_9;
                        num2 = 1;
                        tmp5 = closure_7(closure_9 - 1);
                      }
                      return;
                    }
                  }
                  let multiSelectAnswerResult = null;
                  if (tmp18) {
                    const tmpResult6 = clarification(17015);
                    class Z {
                      constructor() {
                        tmp = closure_8;
                        if (!closure_8) {
                          tmp2 = closure_9;
                          num = 0;
                          tmp = 0 === closure_9;
                        }
                        if (!tmp) {
                          tmp3 = closure_7;
                          tmp4 = closure_9;
                          num2 = 1;
                          tmp5 = closure_7(closure_9 - 1);
                        }
                        return;
                      }
                    }
                    multiSelectAnswerResult = tmpResult6.multiSelectAnswer(tmp17, optionHeader, str, conjureOwnImages.multiPartFor(tmp17));
                  }
                  if (cResult[19] === str) {
                    if (cResult[20] === multiSelectAnswerResult) {
                      if (cResult[21] === tmp22) {
                        let tmp29 = cResult[22];
                      }
                      if (cResult[23] === first1) {
                        if (cResult[24] === str) {
                          if (cResult[25] === multiSelectAnswerResult) {
                            if (cResult[26] === tmp17.id) {
                              closure_18 = tmp30;
                              if (cResult[28] === bound) {
                                if (cResult[29] === length) {
                                  let tmp35 = cResult[30];
                                }
                                if (cResult[31] !== tmp17.question) {
                                  { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: null }.children = tmp17.question;
                                  class Z {
                                    constructor() {
                                      tmp = closure_8;
                                      if (!closure_8) {
                                        tmp2 = closure_9;
                                        num = 0;
                                        tmp = 0 === closure_9;
                                      }
                                      if (!tmp) {
                                        tmp3 = closure_7;
                                        tmp4 = closure_9;
                                        num2 = 1;
                                        tmp5 = closure_7(closure_9 - 1);
                                      }
                                      return;
                                    }
                                  }
                                  cResult[31] = tmp17.question;
                                  cResult[32] = tmp41;
                                  let tmp39 = tmp41;
                                  let obj6 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: null };
                                } else {
                                  tmp39 = cResult[32];
                                }
                                if (cResult[33] === tmp4.customField) {
                                  if (cResult[34] === tmp35) {
                                    if (cResult[35] === tmp39) {
                                      let tmp42 = cResult[36];
                                    }
                                    if (cResult[37] !== onDismiss) {
                                      let tmp46 = null;
                                      if (null != onDismiss) {
                                        const obj7 = { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null };
                                        class Z {
                                          constructor() {
                                            tmp = closure_8;
                                            if (!closure_8) {
                                              tmp2 = closure_9;
                                              num = 0;
                                              tmp = 0 === closure_9;
                                            }
                                            if (!tmp) {
                                              tmp3 = closure_7;
                                              tmp4 = closure_9;
                                              num2 = 1;
                                              tmp5 = closure_7(closure_9 - 1);
                                            }
                                            return;
                                          }
                                        }
                                        obj7.onPress = onDismiss;
                                        let intl = clarification(1126).intl;
                                        obj7.accessibilityLabel = intl.string(onSubmit(3827).qVXlk0);
                                        tmp46 = closure_6(clarification(8106).IconButton, obj7);
                                      }
                                      class Z {
                                        constructor() {
                                          tmp = closure_8;
                                          if (!closure_8) {
                                            tmp2 = closure_9;
                                            num = 0;
                                            tmp = 0 === closure_9;
                                          }
                                          if (!tmp) {
                                            tmp3 = closure_7;
                                            tmp4 = closure_9;
                                            num2 = 1;
                                            tmp5 = closure_7(closure_9 - 1);
                                          }
                                          return;
                                        }
                                      }
                                      cResult[38] = tmp46;
                                      let tmp45 = tmp46;
                                    } else {
                                      tmp45 = cResult[38];
                                    }
                                    if (cResult[39] === tmp4.footer) {
                                      if (cResult[40] === tmp42) {
                                        if (cResult[41] === tmp45) {
                                          let tmp49 = cResult[42];
                                        }
                                        if (cResult[43] !== tmp18) {
                                          let tmp53 = null;
                                          if (tmp18) {
                                            const obj8 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                            class Z {
                                              constructor() {
                                                tmp = closure_8;
                                                if (!closure_8) {
                                                  tmp2 = closure_9;
                                                  num = 0;
                                                  tmp = 0 === closure_9;
                                                }
                                                if (!tmp) {
                                                  tmp3 = closure_7;
                                                  tmp4 = closure_9;
                                                  num2 = 1;
                                                  tmp5 = closure_7(closure_9 - 1);
                                                }
                                                return;
                                              }
                                            }
                                            obj8.children = obj20.string(onSubmit(3827).tE8qbz);
                                            tmp53 = closure_6(clarification(5086).Text, obj8);
                                          }
                                          class Z {
                                            constructor() {
                                              tmp = closure_8;
                                              if (!closure_8) {
                                                tmp2 = closure_9;
                                                num = 0;
                                                tmp = 0 === closure_9;
                                              }
                                              if (!tmp) {
                                                tmp3 = closure_7;
                                                tmp4 = closure_9;
                                                num2 = 1;
                                                tmp5 = closure_7(closure_9 - 1);
                                              }
                                              return;
                                            }
                                          }
                                          cResult[44] = tmp53;
                                          let tmp52 = tmp53;
                                        } else {
                                          tmp52 = cResult[44];
                                        }
                                        if (cResult[45] === tmp15) {
                                          if (cResult[46] === tmp23) {
                                            if (cResult[47] === tmp18) {
                                              if (cResult[48] === conjureOwnImages) {
                                                if (cResult[49] === tmp19) {
                                                  if (cResult[50] === projectId) {
                                                    if (cResult[51] === tmp17) {
                                                      if (cResult[52] === optionHeader) {
                                                        if (cResult[53] === tmp4.optionHeader) {
                                                          if (cResult[55] === tmp29) {
                                                            if (cResult[56] === str) {
                                                              if (cResult[57] === tmp19) {
                                                                if (cResult[58] === tmp17.id) {
                                                                  if (cResult[59] === tmp17.question) {
                                                                    let tmp59 = cResult[60];
                                                                  }
                                                                  if (cResult[61] === tmp15) {
                                                                    if (cResult[62] === tmp24) {
                                                                      if (cResult[63] === bound) {
                                                                        if (cResult[64] === tmp18) {
                                                                          if (cResult[65] === tmp30) {
                                                                            if (cResult[66] === tmp19) {
                                                                              if (cResult[67] === tmp22) {
                                                                                if (cResult[68] === tmp4.customField) {
                                                                                  if (cResult[69] === tmp4.footer) {
                                                                                    if (cResult[70] === tmp61) {
                                                                                      if (cResult[73] === tmp4.card) {
                                                                                        if (cResult[74] === tmp49) {
                                                                                          if (cResult[75] === tmp52) {
                                                                                            if (cResult[76] === tmp56) {
                                                                                              if (cResult[77] === tmp59) {
                                                                                                if (cResult[78] === tmp62) {
                                                                                                  let tmp72 = cResult[79];
                                                                                                }
                                                                                                return tmp72;
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      class Z {
                                                                                        constructor() {
                                                                                          tmp = closure_8;
                                                                                          if (!closure_8) {
                                                                                            tmp2 = closure_9;
                                                                                            num = 0;
                                                                                            tmp = 0 === closure_9;
                                                                                          }
                                                                                          if (!tmp) {
                                                                                            tmp3 = closure_7;
                                                                                            tmp4 = closure_9;
                                                                                            num2 = 1;
                                                                                            tmp5 = closure_7(closure_9 - 1);
                                                                                          }
                                                                                          return;
                                                                                        }
                                                                                      }
                                                                                      const obj9 = { style: tmp4.card, children: null };
                                                                                      let items = [tmp49, tmp52, tmp56, tmp59, tmp62];
                                                                                      obj9.children = items;
                                                                                      const tmp74 = closure_7(onSubmit(16948), obj9);
                                                                                      cResult[73] = tmp4.card;
                                                                                      cResult[74] = tmp49;
                                                                                      cResult[75] = tmp52;
                                                                                      cResult[76] = tmp56;
                                                                                      cResult[77] = tmp59;
                                                                                      cResult[78] = tmp62;
                                                                                      cResult[79] = tmp74;
                                                                                      tmp72 = tmp74;
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
                                                                    constructor() {
                                                                      tmp = closure_8;
                                                                      if (!closure_8) {
                                                                        tmp2 = closure_9;
                                                                        num = 0;
                                                                        tmp = 0 === closure_9;
                                                                      }
                                                                      if (!tmp) {
                                                                        tmp3 = closure_7;
                                                                        tmp4 = closure_9;
                                                                        num2 = 1;
                                                                        tmp5 = closure_7(closure_9 - 1);
                                                                      }
                                                                      return;
                                                                    }
                                                                  }
                                                                  const obj10 = { style: tmp4.footer, children: null };
                                                                  let tmp65 = null;
                                                                  if (bound > 0) {
                                                                    tmp65 = null;
                                                                    if (!tmp15) {
                                                                      const obj11 = { variant: "tertiary", size: "sm", text: null, onPress: null };
                                                                      class Z {
                                                                        constructor() {
                                                                          tmp = closure_8;
                                                                          if (!closure_8) {
                                                                            tmp2 = closure_9;
                                                                            num = 0;
                                                                            tmp = 0 === closure_9;
                                                                          }
                                                                          if (!tmp) {
                                                                            tmp3 = closure_7;
                                                                            tmp4 = closure_9;
                                                                            num2 = 1;
                                                                            tmp5 = closure_7(closure_9 - 1);
                                                                          }
                                                                          return;
                                                                        }
                                                                      }
                                                                      obj11.text = obj23.string(onSubmit(3827).Pk5lfA);
                                                                      obj11.onPress = tmp24;
                                                                      tmp65 = closure_6(clarification(5375).Button, obj11);
                                                                    }
                                                                  }
                                                                  let items1 = [tmp65, , ];
                                                                  const obj12 = { style: tmp4.customField };
                                                                  items1[1] = closure_6(View, obj12);
                                                                  let tmp69 = tmp15;
                                                                  if (!tmp15) {
                                                                    tmp69 = null == tmp30;
                                                                  }
                                                                  let obj14 = { variant: "primary", size: "sm", disabled: tmp69, text: null, onPress: null };
                                                                  let intl2 = clarification(1126).intl;
                                                                  if (bound === tmp34) {
                                                                    let w1nRmT = clarification(1126).t.geKm7t;
                                                                  } else {
                                                                    w1nRmT = onSubmit(3827).w1nRmT;
                                                                  }
                                                                  obj14.text = intl2.string(w1nRmT);
                                                                  obj14.onPress = function onPress() {
                                                                    if (null != closure_18) {
                                                                      closure_14(tmp);
                                                                    }
                                                                  };
                                                                  obj14 = closure_6(clarification(5375).Button, obj14);
                                                                  items1[2] = obj14;
                                                                  obj10.children = items1;
                                                                  closure_7(View, obj10);
                                                                }
                                                              }
                                                            }
                                                          }
                                                          class Z {
                                                            constructor() {
                                                              tmp = closure_8;
                                                              if (!closure_8) {
                                                                tmp2 = closure_9;
                                                                num = 0;
                                                                tmp = 0 === closure_9;
                                                              }
                                                              if (!tmp) {
                                                                tmp3 = closure_7;
                                                                tmp4 = closure_9;
                                                                num2 = 1;
                                                                tmp5 = closure_7(closure_9 - 1);
                                                              }
                                                              return;
                                                            }
                                                          }
                                                          cResult[55] = tmp29;
                                                          cResult[56] = str;
                                                          cResult[57] = tmp19;
                                                          cResult[58] = tmp17.id;
                                                          cResult[59] = tmp17.question;
                                                          cResult[60] = null;
                                                          tmp59 = tmp60;
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
                                          constructor() {
                                            tmp = closure_8;
                                            if (!closure_8) {
                                              tmp2 = closure_9;
                                              num = 0;
                                              tmp = 0 === closure_9;
                                            }
                                            if (!tmp) {
                                              tmp3 = closure_7;
                                              tmp4 = closure_9;
                                              num2 = 1;
                                              tmp5 = closure_7(closure_9 - 1);
                                            }
                                            return;
                                          }
                                        }
                                        cResult[45] = tmp15;
                                        cResult[46] = tmp23;
                                        cResult[47] = tmp18;
                                        cResult[48] = conjureOwnImages;
                                        cResult[49] = tmp19;
                                        cResult[50] = projectId;
                                        cResult[51] = tmp17;
                                        cResult[52] = optionHeader;
                                        optionHeader = tmp4.optionHeader;
                                        cResult[53] = optionHeader;
                                        cResult[54] = tmp57;
                                      }
                                    }
                                    class Z {
                                      constructor() {
                                        tmp = closure_8;
                                        if (!closure_8) {
                                          tmp2 = closure_9;
                                          num = 0;
                                          tmp = 0 === closure_9;
                                        }
                                        if (!tmp) {
                                          tmp3 = closure_7;
                                          tmp4 = closure_9;
                                          num2 = 1;
                                          tmp5 = closure_7(closure_9 - 1);
                                        }
                                        return;
                                      }
                                    }
                                    const obj15 = { style: tmp4.footer, children: null };
                                    const items2 = [tmp42, tmp45];
                                    obj15.children = items2;
                                    const tmp51 = closure_7(View, obj15);
                                    cResult[39] = tmp4.footer;
                                    cResult[40] = tmp42;
                                    cResult[41] = tmp45;
                                    cResult[42] = tmp51;
                                    tmp49 = tmp51;
                                  }
                                }
                                class Z {
                                  constructor() {
                                    tmp = closure_8;
                                    if (!closure_8) {
                                      tmp2 = closure_9;
                                      num = 0;
                                      tmp = 0 === closure_9;
                                    }
                                    if (!tmp) {
                                      tmp3 = closure_7;
                                      tmp4 = closure_9;
                                      num2 = 1;
                                      tmp5 = closure_7(closure_9 - 1);
                                    }
                                    return;
                                  }
                                }
                                const obj16 = { style: tmp4.customField, children: null };
                                const items3 = [tmp35, tmp39];
                                obj16.children = items3;
                                const tmp44 = closure_7(View, obj16);
                                cResult[33] = tmp4.customField;
                                cResult[34] = tmp35;
                                cResult[35] = tmp39;
                                cResult[36] = tmp44;
                                tmp42 = tmp44;
                              }
                              class Z {
                                constructor() {
                                  tmp = closure_8;
                                  if (!closure_8) {
                                    tmp2 = closure_9;
                                    num = 0;
                                    tmp = 0 === closure_9;
                                  }
                                  if (!tmp) {
                                    tmp3 = closure_7;
                                    tmp4 = closure_9;
                                    num2 = 1;
                                    tmp5 = closure_7(closure_9 - 1);
                                  }
                                  return;
                                }
                              }
                              if (length > 1) {
                                const obj17 = { variant: "text-xs/semibold", color: "text-muted", children: null };
                                class Z {
                                  constructor() {
                                    tmp = closure_8;
                                    if (!closure_8) {
                                      tmp2 = closure_9;
                                      num = 0;
                                      tmp = 0 === closure_9;
                                    }
                                    if (!tmp) {
                                      tmp3 = closure_7;
                                      tmp4 = closure_9;
                                      num2 = 1;
                                      tmp5 = closure_7(closure_9 - 1);
                                    }
                                    return;
                                  }
                                }
                                const obj18 = { index: bound + 1, total: length };
                                obj17.children = obj13.formatToPlainString(onSubmit(3827).yzYUjq, obj18);
                                const tmp36 = closure_6(clarification(5086).Text, obj17);
                              }
                              cResult[28] = bound;
                              cResult[29] = length;
                              cResult[30] = tmp36;
                              tmp35 = tmp36;
                            }
                          }
                        }
                      }
                      if (null != multiSelectAnswerResult) {
                        class Z {
                          constructor() {
                            tmp = closure_8;
                            if (!closure_8) {
                              tmp2 = closure_9;
                              num = 0;
                              tmp = 0 === closure_9;
                            }
                            if (!tmp) {
                              tmp3 = closure_7;
                              tmp4 = closure_9;
                              num2 = 1;
                              tmp5 = closure_7(closure_9 - 1);
                            }
                            return;
                          }
                        }
                      } else if ("" !== str.trim()) {
                        const obj19 = { kind: "custom", text: str.trim() };
                        let tmp31 = obj19;
                      } else {
                        tmp31 = first1[tmp17.id];
                        if (tmp31 == null) {
                          tmp31 = null;
                        }
                      }
                      class Z {
                        constructor() {
                          tmp = closure_8;
                          if (!closure_8) {
                            tmp2 = closure_9;
                            num = 0;
                            tmp = 0 === closure_9;
                          }
                          if (!tmp) {
                            tmp3 = closure_7;
                            tmp4 = closure_9;
                            num2 = 1;
                            tmp5 = closure_7(closure_9 - 1);
                          }
                          return;
                        }
                      }
                      cResult[23] = first1;
                      cResult[24] = str;
                      cResult[25] = multiSelectAnswerResult;
                      multiSelectAnswerResult = tmp17.id;
                      cResult[26] = multiSelectAnswerResult;
                      cResult[27] = tmp31;
                    }
                  }
                  function ee() {
                    if (null == multiSelectAnswerResult) {
                      const trimmed = closure_1_16.trim();
                      if ("" !== trimmed) {
                        const obj = { kind: "custom", text: trimmed };
                        closure_14(obj);
                      }
                    } else if ("" !== multiSelectAnswerResult.text) {
                      closure_14(multiSelectAnswerResult);
                    }
                  }
                  cResult[19] = str;
                  cResult[20] = multiSelectAnswerResult;
                  cResult[21] = tmp22;
                  cResult[22] = ee;
                  tmp29 = ee;
                }
                class Z {
                  constructor() {
                    tmp = closure_8;
                    if (!closure_8) {
                      tmp2 = closure_9;
                      num = 0;
                      tmp = 0 === closure_9;
                    }
                    if (!tmp) {
                      tmp3 = closure_7;
                      tmp4 = closure_9;
                      num2 = 1;
                      tmp5 = closure_7(closure_9 - 1);
                    }
                    return;
                  }
                }
                cResult[16] = tmp15;
                cResult[17] = bound;
                cResult[18] = Z;
                tmp24 = Z;
              }
            }
          }
          class N {
            constructor(arg0) {
              closure_0 = onSubmit;
              if (closure_11) {
                tmp8 = closure_6;
                tmp9 = closure_6((arr) => {
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
                tmp = closure_5;
                tmp2 = closure_5((arg0) => {
                  obj = {};
                  const merged = Object.assign(arg0);
                  obj[user.id] = "";
                  return obj;
                });
                obj = { kind: "option", optionId: null, text: null };
                ({ id: obj.optionId, label: obj.text } = onSubmit);
                closure_1 = obj;
                tmp3 = closure_12;
                if (closure_12) {
                  tmp6 = closure_4;
                  tmp7 = closure_4((arg0) => {
                    obj = {};
                    const merged = Object.assign(arg0);
                    obj[user.id] = obj;
                    return obj;
                  });
                } else {
                  tmp4 = closure_14;
                  tmp5 = closure_14(obj);
                }
              }
              return;
            }
          }
          cResult[11] = tmp18;
          cResult[12] = tmp19;
          cResult[13] = tmp17;
          cResult[14] = tmp22;
          cResult[15] = N;
          tmp23 = N;
        }
      }
    }
  }
  class M {
    constructor(arg0) {
      if (null != onSubmit) {
        tmp7 = onSubmit;
        obj1 = {};
        tmp8 = closure_3;
        tmp9 = obj1;
        merged = Object.assign(closure_3);
        tmp11 = closure_10;
        obj1[closure_10.id] = onSubmit;
        tmp12 = closure_4;
        tmp13 = closure_4(obj1);
        tmp14 = closure_0;
        tmp15 = closure_2;
        obj5 = closure_0(closure_2[12]);
        tmp16 = clarification;
        tmp17 = closure_9;
        result = obj5.followingClarificationStep(clarification, obj1, closure_9);
        if (null == result) {
          tmp14Result = tmp14(tmp15[12]);
          result1 = tmp14Result.formatClarificationAnswers(tmp16, obj1);
          str = "";
          if ("" !== result1) {
            tmp14Result1 = tmp14(tmp15[12]);
            result2 = tmp14Result1.clarificationAnswersPayload(tmp16, obj1);
            tmp14Result2 = tmp14(tmp15[12]);
            tmpResult = tmp(result1, result2, tmp14Result2.clarificationAnswerAttachments(tmp16, obj1));
          }
        } else {
          tmp2 = closure_7;
          tmp3 = closure_7(result);
        }
      }
      return;
    }
  }
  cResult[5] = first1;
  cResult[6] = clarification;
  cResult[7] = bound;
  cResult[8] = onSubmit;
  cResult[9] = clarification.questions[bound].id;
  cResult[10] = M;
  tmp22 = M;
  const tmpResult5 = clarification(17014);
}) : (function ConjureClarificationCard(onSubmit) {
  ({ projectId, clarification } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const onDismiss = onSubmit.onDismiss;
  let first;
  noop = undefined;
  c5 = undefined;
  let disabled;
  c13 = undefined;
  let callback;
  let callback1;
  let str;
  c17 = undefined;
  c18 = undefined;
  let tmp = disabled();
  dependencyMap = tmp;
  const tmp2 = first(noop.useState({}), 2);
  first = tmp2[0];
  noop = tmp4;
  [tmp6, c5] = first(noop.useState({}), 2);
  const tmp7 = first(noop.useState({}), 2);
  closure_6 = tmp7[1];
  const tmp8 = first(noop.useState(0), 2);
  closure_7 = tmp8[1];
  let tmp9 = null == onSubmit;
  disabled = tmp9;
  const bound = Math.min(tmp8[0], length - 1);
  id = tmp11;
  closure_11 = tmp12;
  let t = dependencyMap;
  let tmp5 = first(noop.useState({}), 2);
  const isImageQuestionResult = clarification(17013).isImageQuestion(clarification.questions[bound]);
  c12 = isImageQuestionResult;
  if (true === clarification.questions[bound].multi_select) {
    let tmp16 = tmp7[0][tmp11.id];
    if (tmp16 == null) {
      tmp16 = bound;
    }
    let answeredOptionIdsResult = tmp16;
  } else {
    answeredOptionIdsResult = tmp13(17013).answeredOptionIds(first[tmp11.id]);
    const tmp13Result = tmp13(17013);
  }
  c13 = answeredOptionIdsResult;
  const obj2 = clarification(17013);
  const conjureOwnImages = clarification(17014).useConjureOwnImages(projectId, first, tmp4);
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
        closure_7(result);
      }
    }
  }, items);
  let items1 = [true === clarification.questions[bound].multi_select, isImageQuestionResult, clarification.questions[bound], callback];
  callback1 = obj.useCallback((arg0) => {
    id = arg0;
    if (closure_11) {
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
      _undefined((arg0) => {
        obj = {};
        const merged = Object.assign(arg0);
        obj[user.id] = "";
        return obj;
      });
      let obj = { kind: "option", optionId: null, text: null };
      ({ id: obj.optionId, label: obj.text } = arg0);
      if (c12) {
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
  const items2 = [tmp9, bound];
  str = tmp6[tmp11.id];
  const callback2 = obj.useCallback(() => {
    let tmp = closure_8;
    if (!closure_8) {
      tmp = 0 === bound;
    }
    if (!tmp) {
      closure_7(bound - 1);
    }
  }, items2);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (true === clarification.questions[bound].multi_select) {
    const tmp13Result4 = tmp13(17015);
    multiSelectAnswerResult = tmp13Result4.multiSelectAnswer(tmp11, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp11));
  }
  c17 = multiSelectAnswerResult;
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
    let tmp27 = null;
    if ("" !== multiSelectAnswerResult.text) {
      tmp27 = multiSelectAnswerResult;
    }
    let tmp26 = tmp27;
  } else if ("" !== str.trim()) {
    let obj3 = { kind: "custom", text: str.trim() };
    tmp26 = obj3;
  } else {
    tmp26 = first[tmp11.id];
    if (tmp26 == null) {
      tmp26 = null;
    }
  }
  c18 = tmp26;
  const obj4 = { style: tmp.card, children: null };
  let obj5 = { style: tmp.footer, children: null };
  let obj6 = { style: tmp.customField, children: null };
  let tmp32 = null;
  const tmp13Result3 = clarification(17014);
  if (clarification.questions.length > 1) {
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    let intl = tmp13(1126).intl;
    const obj8 = { index: bound + 1, total: length };
    obj7.children = intl.formatToPlainString(tmp29(3827).yzYUjq, obj8);
    tmp32 = closure_6(tmp13(5086).Text, obj7);
  }
  const items4 = [tmp32, closure_6(clarification(5086).Text, { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: clarification.questions[bound].question })];
  obj6.children = items4;
  const items5 = [closure_7(c5, obj6), ];
  let tmp34Result = null;
  if (null != onDismiss) {
    const obj10 = { variant: "tertiary", size: "sm", icon: tmp34(tmp13(6210).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: null };
    let intl2 = tmp13(1126).intl;
    obj10.accessibilityLabel = intl2.string(tmp29(3827).qVXlk0);
    tmp34Result = tmp34(tmp13(8106).IconButton, obj10);
  }
  items5[1] = tmp34Result;
  obj5.children = items5;
  const items6 = [closure_7(c5, obj5), , , , ];
  let tmp34Result5 = null;
  if (true === clarification.questions[bound].multi_select) {
    const obj11 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl3 = tmp13(1126).intl;
    obj11.children = intl3.string(tmp29(3827).tE8qbz);
    tmp34Result5 = tmp34(tmp13(5086).Text, obj11);
  }
  items6[1] = tmp34Result5;
  if (isImageQuestionResult) {
    const obj12 = { projectId, question: tmp11, selectedIds: answeredOptionIdsResult, disabled: tmp9, onPick: callback1, own: conjureOwnImages.controlsFor(tmp11, tmp9) };
    let tmp34Result6 = tmp34(tmp29(17016), obj12);
    const tmp29Result = tmp29(17016);
  } else if (tmp12) {
    const obj13 = { hasIcons: false, children: null };
    options = tmp11.options;
    obj13.children = options.map((label) => {
      closure_0 = label;
      const obj = { label: label.label, subLabel: null, checked: null, disabled: null, onPress: null };
      str = "";
      if (true === label.recommended) {
        const intl = clarification(optionHeader[6]).intl;
        str = intl.string(onSubmit(optionHeader[7]).zku6r1);
      }
      const items = [str, ];
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
      obj.checked = _undefined2.includes(label.id);
      obj.disabled = disabled;
      obj.onPress = function onPress() {
        return callback1(closure_0);
      };
      return closure_6(clarification(optionHeader[18]).TableCheckboxRow, obj, label.id);
    });
    tmp34Result6 = tmp34(tmp13(6267).TableRowGroup, obj13);
  } else {
    const options1 = tmp11.options;
    tmp34Result6 = options1.map((answer) => {
      closure_0 = answer;
      let fn;
      if (!closure_8) {
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
      const items = [closure_6(clarification(optionHeader[13]).Text, { variant: "text-sm/semibold", color: "text-default", children: answer.label }), ];
      let tmp8Result = null;
      if (true === answer.recommended) {
        const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: null };
        const intl2 = clarification(optionHeader[6]).intl;
        obj5.children = intl2.string(tmp5(optionHeader[7]).zku6r1);
        tmp8Result = closure_6(clarification(optionHeader[13]).Text, obj5);
      }
      items[1] = tmp8Result;
      obj3.children = items;
      const items1 = [closure_7(c5, obj3), ];
      let tmp8Result2 = null;
      if (null != answer.detail) {
        tmp8Result2 = null;
        if ("" !== answer.detail) {
          const obj6 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
          tmp8Result2 = closure_6(clarification(optionHeader[13]).Text, obj6);
        }
      }
      items1[1] = tmp8Result2;
      obj.children = items1;
      return closure_7(clarification(optionHeader[19]).Card, obj, answer.id);
    });
  }
  items6[2] = tmp34Result6;
  let tmp34Result7 = null;
  if (!isImageQuestionResult) {
    const obj14 = { size: "md", placeholder: null, accessibilityLabel: null, value: null, onChange: null, onSubmitEditing: null, returnKeyType: "send" };
    const intl4 = tmp13(1126).intl;
    obj14.placeholder = intl4.string(tmp29(3827)["tOC+tn"]);
    const intl5 = tmp13(1126).intl;
    const obj15 = { question: tmp11.question };
    obj14.accessibilityLabel = intl5.formatToPlainString(tmp29(3827)["4JeYPB"], obj15);
    obj14.value = str;
    obj14.onChange = function onChange(arg0) {
      closure_0 = arg0;
      return _undefined((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[id.id] = closure_0;
        return obj;
      });
    };
    obj14.onSubmitEditing = callback3;
    tmp34Result7 = tmp34(tmp13(6283).TextInput, obj14);
  }
  items6[3] = tmp34Result7;
  if (clarification.questions.length <= 1) {
    if (!tmp12) {
      if (!isImageQuestionResult) {
        items6[4] = null;
        obj4.children = items6;
        return tmp28(tmp30, obj4);
      }
    }
  }
  const obj16 = { style: tmp.footer, children: null };
  let tmp34Result8 = null;
  if (bound > 0) {
    tmp34Result8 = null;
    if (!tmp9) {
      const obj17 = { variant: "tertiary", size: "sm", text: null, onPress: null };
      const intl6 = tmp13(1126).intl;
      obj17.text = intl6.string(tmp29(3827).Pk5lfA);
      obj17.onPress = callback2;
      tmp34Result8 = tmp34(tmp13(5375).Button, obj17);
    }
  }
  const items7 = [tmp34Result8, closure_6(c5, { style: tmp.customField }), ];
  if (!tmp9) {
    tmp9 = null == tmp26;
  }
  let obj19 = { variant: "primary", size: "sm", disabled: tmp9, text: null, onPress: null };
  const intl7 = tmp13(1126).intl;
  if (bound === clarification.questions.length - 1) {
    t = tmp13(1126).t;
    let w1nRmT = t.geKm7t;
  } else {
    w1nRmT = tmp29(3827).w1nRmT;
  }
  obj19.text = intl7.string(w1nRmT);
  obj19.onPress = function onPress() {
    if (null != c18) {
      callback(tmp);
    }
  };
  obj19 = tmp34(tmp13(5375).Button, obj19);
  items7[2] = obj19;
  obj16.children = items7;
  closure_7(c5, obj16);
});