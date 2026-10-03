// discord_app/modules/vibegrations/native/VibegrationsClarificationCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import VibegrationsClarification from "../lib/VibegrationsClarification.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, optionHeader: null, footer: null, customField: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.optionHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.customField = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = [];
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsClarificationCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((clarification) => {
  const cResult = clarification(576).c(99);
  clarification = clarification.clarification;
  const onSubmit = clarification.onSubmit;
  const onDismiss = clarification.onDismiss;
  const tmp4 = closure_8();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp7 = first1(noop.useState(first), 2);
  first1 = tmp7[0];
  noop = tmp7[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = {};
    cResult[1] = obj4;
    let tmp9 = obj4;
  } else {
    tmp9 = cResult[1];
  }
  const tmp6Result = first1(noop.useState(tmp9), 2);
  View = tmp6Result[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = {};
    cResult[2] = obj5;
    let tmp11 = obj5;
  } else {
    tmp11 = cResult[2];
  }
  const tmp6Result3 = first1(noop.useState(tmp11), 2);
  closure_6 = tmp6Result3[1];
  const tmp6Result4 = first1(noop.useState(0), 2);
  closure_7 = tmp6Result4[1];
  closure_8 = tmp14;
  const bound = Math.min(tmp6Result4[0], length - 1);
  id = tmp16;
  closure_11 = tmp17;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj6 = { checked: false };
    cResult[3] = obj6;
    let tmp18 = obj6;
  } else {
    tmp18 = cResult[3];
  }
  let obj = clarification(576);
  const accessibilityRole = clarification(4594).useCheckboxA11yNative(tmp18).accessibilityRole;
  let optionHeader = tmp6Result3[0][tmp16.id];
  if (optionHeader == null) {
    optionHeader = bound;
  }
  if (cResult[4] === first1) {
    if (cResult[5] === clarification) {
      if (cResult[6] === bound) {
        if (cResult[7] === onSubmit) {
          if (cResult[8] === tmp16.id) {
            let tmp19 = cResult[9];
          }
          closure_14 = tmp19;
          if (cResult[10] === tmp17) {
            if (cResult[11] === tmp16) {
              if (cResult[12] === tmp19) {
                options = cResult[13];
              }
              if (cResult[14] === tmp14) {
                let str = tmp6Result[0][tmp16.id];
                if (str == null) {
                  str = "";
                }
                class G {
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
                if (cResult[17] === str) {
                  if (cResult[18] === tmp17) {
                    if (cResult[19] === tmp16) {
                      if (cResult[20] === optionHeader) {
                        id = cResult[21];
                      }
                      if (cResult[22] === str) {
                        if (cResult[23] === id) {
                          if (cResult[26] === first1) {
                            if (cResult[27] === str) {
                              if (cResult[28] === id) {
                                if (cResult[29] === tmp16.id) {
                                  closure_18 = tmp24;
                                  if (cResult[31] === first1) {
                                    if (cResult[32] === tmp24) {
                                      if (cResult[33] === tmp16.id) {
                                        let tmp28 = cResult[34];
                                      }
                                      if (cResult[35] === clarification) {
                                        if (cResult[36] === bound) {
                                          if (cResult[39] === bound) {
                                            if (cResult[40] === length) {
                                              let tmp36 = cResult[41];
                                            }
                                            if (cResult[42] === tmp4.customField) {
                                              if (cResult[43] === tmp36) {
                                                let tmp40 = cResult[44];
                                              }
                                              if (cResult[45] !== onDismiss) {
                                                let tmp44 = null;
                                                if (null != onDismiss) {
                                                  let obj7 = { IconComponent: null, onPress: null, accessibilityLabel: null };
                                                  class G {
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
                                                  obj7.IconComponent = tmp(6017).XSmallIcon;
                                                  obj7.onPress = onDismiss;
                                                  let intl = tmp(1126).intl;
                                                  obj7.accessibilityLabel = intl.string(onSubmit(3723).fMdUNR);
                                                  tmp44 = closure_6(tmp47, obj7);
                                                }
                                                class G {
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
                                                cResult[46] = tmp44;
                                                let tmp43 = tmp44;
                                              } else {
                                                tmp43 = cResult[46];
                                              }
                                              if (cResult[47] === tmp4.footer) {
                                                if (cResult[48] === tmp40) {
                                                  if (cResult[51] !== tmp16.question) {
                                                    { variant: "text-md/semibold", color: "text-default", children: null }.children = tmp16.question;
                                                    class G {
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
                                                    cResult[51] = tmp16.question;
                                                    cResult[52] = tmp53;
                                                    const obj8 = { variant: "text-md/semibold", color: "text-default", children: null };
                                                  }
                                                  if (cResult[53] !== tmp17) {
                                                    let tmp55 = null;
                                                    if (tmp17) {
                                                      let obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                                      class G {
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
                                                      obj9.children = obj19.string(onSubmit(3723).jt5JBA);
                                                      tmp55 = closure_6(tmp(4886).Text, obj9);
                                                    }
                                                    class G {
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
                                                    cResult[54] = tmp55;
                                                  }
                                                  class G {
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
                                                  if (cResult[63] === accessibilityRole) {
                                                    if (cResult[64] === tmp14) {
                                                      if (cResult[65] === options) {
                                                        if (cResult[66] === tmp17) {
                                                          if (cResult[67] === optionHeader) {
                                                            if (cResult[68] === tmp4.optionHeader) {
                                                              let tmp58 = cResult[69];
                                                            }
                                                            const options1 = tmp16.options;
                                                            const mapped = options1.map(tmp58);
                                                            class G {
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
                                                            cResult[55] = accessibilityRole;
                                                            cResult[56] = tmp14;
                                                            cResult[57] = options;
                                                            cResult[58] = tmp17;
                                                            options = tmp16.options;
                                                            cResult[59] = options;
                                                            cResult[60] = optionHeader;
                                                            optionHeader = tmp4.optionHeader;
                                                            cResult[61] = optionHeader;
                                                            cResult[62] = mapped;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  function fe(answer) {
                                                    closure_0 = answer;
                                                    let fn;
                                                    if (!closure_8) {
                                                      fn = () => options(closure_0);
                                                    }
                                                    const obj = { onPress: fn, border: null };
                                                    let str;
                                                    if (closure_11) {
                                                      if (optionHeader.includes(answer.id)) {
                                                        str = "strong";
                                                      }
                                                    }
                                                    obj.border = str;
                                                    if (closure_11) {
                                                      const obj2 = { accessibilityRole, accessibilityState: null };
                                                      const obj3 = { checked: optionHeader.includes(answer.id), selected: optionHeader.includes(answer.id) };
                                                      obj2.accessibilityState = obj3;
                                                      let obj4 = obj2;
                                                    } else {
                                                      obj4 = {};
                                                    }
                                                    const merged = Object.assign(obj4);
                                                    const intl = clarification(optionHeader[11]).intl;
                                                    if (true === answer.recommended) {
                                                      let k7lEgj = onSubmit(optionHeader[12]).aL1BKQ;
                                                      let tmp10 = onSubmit;
                                                    } else {
                                                      k7lEgj = onSubmit(optionHeader[12]).k7lEgj;
                                                      tmp10 = onSubmit;
                                                    }
                                                    obj.accessibilityLabel = intl.formatToPlainString(k7lEgj, { answer: answer.label });
                                                    const obj6 = { style: optionHeader.optionHeader, children: null };
                                                    let tmp13 = null;
                                                    if (closure_11) {
                                                      const obj7 = { checked: optionHeader.includes(answer.id) };
                                                      tmp13 = closure_6(clarification(optionHeader[16]).FormCheckbox, obj7);
                                                    }
                                                    const items = [tmp13, closure_6(clarification(optionHeader[10]).Text, { variant: "text-sm/semibold", color: "text-default", children: answer.label }), ];
                                                    let tmp16Result = null;
                                                    if (true === answer.recommended) {
                                                      const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: null };
                                                      const intl2 = clarification(optionHeader[11]).intl;
                                                      obj9.children = intl2.string(tmp10(optionHeader[12]).OXRWyV);
                                                      tmp16Result = closure_6(clarification(optionHeader[10]).Text, obj9);
                                                    }
                                                    items[2] = tmp16Result;
                                                    obj6.children = items;
                                                    const items1 = [closure_7(closure_5, obj6), ];
                                                    let tmp16Result2 = null;
                                                    if (null != answer.detail) {
                                                      tmp16Result2 = null;
                                                      if ("" !== answer.detail) {
                                                        const obj10 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
                                                        tmp16Result2 = closure_6(clarification(optionHeader[10]).Text, obj10);
                                                      }
                                                    }
                                                    items1[1] = tmp16Result2;
                                                    obj.children = items1;
                                                    return closure_7(clarification(optionHeader[15]).Card, obj, answer.id);
                                                  }
                                                  cResult[63] = accessibilityRole;
                                                  cResult[64] = tmp14;
                                                  cResult[65] = options;
                                                  cResult[66] = tmp17;
                                                  cResult[67] = optionHeader;
                                                  cResult[68] = tmp4.optionHeader;
                                                  cResult[69] = fe;
                                                  tmp58 = fe;
                                                }
                                              }
                                              class G {
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
                                              let obj10 = { style: tmp4.footer, children: null };
                                              let items = [tmp40, tmp43];
                                              obj10.children = items;
                                              const tmp50 = closure_7(View, obj10);
                                              cResult[47] = tmp4.footer;
                                              cResult[48] = tmp40;
                                              cResult[49] = tmp43;
                                              cResult[50] = tmp50;
                                            }
                                            class G {
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
                                            const obj11 = { style: tmp4.customField, children: tmp36 };
                                            const tmp42 = closure_6(View, obj11);
                                            cResult[42] = tmp4.customField;
                                            cResult[43] = tmp36;
                                            cResult[44] = tmp42;
                                            tmp40 = tmp42;
                                          }
                                          class G {
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
                                            const obj13 = { variant: "text-xs/semibold", color: "text-muted", children: null };
                                            class G {
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
                                            const obj14 = { index: bound + 1, total: length };
                                            obj13.children = obj12.formatToPlainString(onSubmit(3723)["7bypa+"], obj14);
                                            const tmp37 = closure_6(tmp(4886).Text, obj13);
                                          }
                                          cResult[39] = bound;
                                          cResult[40] = length;
                                          cResult[41] = tmp37;
                                          tmp36 = tmp37;
                                        }
                                      }
                                      tmp(16705);
                                      class G {
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
                                      cResult[35] = clarification;
                                      cResult[36] = bound;
                                      cResult[37] = tmp28;
                                      cResult[38] = tmp34;
                                    }
                                  }
                                  class G {
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
                                  if (null != cResult[30]) {
                                    const obj15 = {};
                                    class G {
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
                                    obj15[tmp16.id] = tmp24;
                                  }
                                  cResult[31] = first1;
                                  cResult[32] = cResult[30];
                                  cResult[33] = tmp16.id;
                                  cResult[34] = tmp29;
                                  tmp28 = tmp29;
                                }
                              }
                            }
                          }
                          if (null != id) {
                            class G {
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
                            const obj16 = { kind: "custom", text: str.trim() };
                            let tmp25 = obj16;
                          } else {
                            tmp25 = first1[tmp16.id];
                            if (tmp25 == null) {
                              tmp25 = null;
                            }
                          }
                          class G {
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
                          cResult[26] = first1;
                          cResult[27] = str;
                          cResult[28] = id;
                          id = tmp16.id;
                          cResult[29] = id;
                          cResult[30] = tmp25;
                        }
                      }
                      class G {
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
                      cResult[22] = str;
                      cResult[23] = id;
                      cResult[24] = tmp19;
                      cResult[25] = tmp23;
                    }
                  }
                }
                let multiSelectAnswerResult = null;
                if (tmp17) {
                  multiSelectAnswerResult = tmp(16705).multiSelectAnswer(tmp16, optionHeader, str);
                  const tmpResult4 = tmp(16705);
                }
                cResult[17] = str;
                cResult[18] = tmp17;
                cResult[19] = tmp16;
                cResult[20] = optionHeader;
                cResult[21] = multiSelectAnswerResult;
                id = multiSelectAnswerResult;
              }
              class G {
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
              cResult[14] = tmp14;
              cResult[15] = bound;
              cResult[16] = G;
            }
          }
          class J {
            constructor(arg0) {
              closure_0 = clarification;
              if (closure_11) {
                tmp5 = closure_6;
                tmp6 = closure_6((arr) => {
                  const obj = {};
                  const merged = Object.assign(arr);
                  let tmp3 = arr[user.id];
                  if (tmp3 == null) {
                    tmp3 = closure_9;
                  }
                  obj[user.id] = VibegrationsClarification.toggleClarificationOption(user, tmp3, id.id);
                  return obj;
                });
              } else {
                tmp = closure_5;
                tmp2 = closure_5((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[user.id] = "";
                  return obj;
                });
                tmp3 = closure_14;
                obj = { kind: "option", optionId: null, text: null };
                ({ id: obj.optionId, label: obj.text } = clarification);
                tmp4 = closure_14(obj);
              }
              return;
            }
          }
          cResult[10] = tmp17;
          cResult[11] = tmp16;
          cResult[12] = tmp19;
          cResult[13] = J;
          options = J;
        }
      }
    }
  }
  class U {
    constructor(arg0) {
      if (null != onSubmit) {
        tmp6 = clarification;
        obj1 = {};
        tmp7 = closure_3;
        tmp8 = obj1;
        merged = Object.assign(closure_3);
        tmp10 = closure_10;
        obj1[closure_10.id] = clarification;
        tmp11 = closure_4;
        tmp12 = closure_4(obj1);
        tmp13 = closure_0;
        tmp14 = closure_2;
        obj4 = closure_0(closure_2[9]);
        tmp15 = clarification;
        tmp16 = closure_9;
        result = obj4.followingClarificationStep(clarification, obj1, closure_9);
        if (null == result) {
          tmp13Result = tmp13(tmp14[9]);
          result1 = tmp13Result.formatClarificationAnswers(tmp15, obj1);
          str = "";
          if ("" !== result1) {
            tmp13Result1 = tmp13(tmp14[9]);
            tmpResult = tmp(result1, tmp13Result1.clarificationAnswersPayload(tmp15, obj1));
          }
        } else {
          tmp2 = closure_7;
          tmp3 = closure_7(result);
        }
      }
      return;
    }
  }
  cResult[4] = first1;
  cResult[5] = clarification;
  cResult[6] = bound;
  cResult[7] = onSubmit;
  cResult[8] = clarification.questions[bound].id;
  cResult[9] = U;
  tmp19 = U;
}) : ((clarification) => {
  clarification = clarification.clarification;
  const onSubmit = clarification.onSubmit;
  const onDismiss = clarification.onDismiss;
  let first;
  noop = undefined;
  c5 = undefined;
  closure_8 = undefined;
  closure_13 = undefined;
  let callback;
  closure_15 = undefined;
  let str;
  c17 = undefined;
  c18 = undefined;
  let tmp = closure_8();
  dependencyMap = tmp;
  const tmp2 = first(noop.useState({}), 2);
  first = tmp2[0];
  noop = tmp2[1];
  [tmp5, c5] = first(noop.useState({}), 2);
  const tmp6 = first(noop.useState({}), 2);
  closure_6 = tmp6[1];
  const tmp7 = first(noop.useState(0), 2);
  closure_7 = tmp7[1];
  let tmp8 = null == onSubmit;
  closure_8 = tmp8;
  const bound = Math.min(tmp7[0], length - 1);
  id = tmp10;
  closure_11 = tmp11;
  let t = dependencyMap;
  const tmp4 = first(noop.useState({}), 2);
  const accessibilityRole = clarification(4594).useCheckboxA11yNative({ checked: false }).accessibilityRole;
  let tmp13 = tmp6[0][tmp10.id];
  if (tmp13 == null) {
    tmp13 = bound;
  }
  closure_13 = tmp13;
  let items = [first, clarification, bound, onSubmit, clarification.questions[bound].id];
  callback = obj.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_4(obj);
      const result = VibegrationsClarification.followingClarificationStep(clarification, obj, bound);
      if (null == result) {
        const result1 = VibegrationsClarification.formatClarificationAnswers(clarification, obj);
        if ("" !== result1) {
          tmp(result1, VibegrationsClarification.clarificationAnswersPayload(clarification, obj));
          const tmp13Result2 = VibegrationsClarification;
        }
        const tmp13Result = VibegrationsClarification;
      } else {
        closure_7(result);
      }
    }
  }, items);
  let items1 = [true === clarification.questions[bound].multi_select, clarification.questions[bound], callback];
  closure_15 = obj.useCallback((arg0) => {
    id = arg0;
    if (closure_11) {
      closure_6((arr) => {
        const obj = {};
        const merged = Object.assign(arr);
        let tmp3 = arr[user.id];
        if (tmp3 == null) {
          tmp3 = closure_9;
        }
        obj[user.id] = VibegrationsClarification.toggleClarificationOption(user, tmp3, id.id);
        return obj;
      });
    } else {
      _undefined((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[user.id] = "";
        return obj;
      });
      let obj = { kind: "option", optionId: null, text: null };
      ({ id: obj.optionId, label: obj.text } = arg0);
      callback(obj);
    }
  }, items1);
  const items2 = [tmp8, bound];
  str = tmp5[tmp10.id];
  const callback1 = obj.useCallback(() => {
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
    multiSelectAnswerResult = tmp12(16705).multiSelectAnswer(tmp10, tmp13, str);
    const tmp12Result = tmp12(16705);
  }
  c17 = multiSelectAnswerResult;
  const items3 = [str, multiSelectAnswerResult, callback];
  const callback2 = obj.useCallback(() => {
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
    let tmp19 = null;
    if ("" !== multiSelectAnswerResult.text) {
      tmp19 = multiSelectAnswerResult;
    }
    let tmp18 = tmp19;
  } else if ("" !== str.trim()) {
    let obj3 = { kind: "custom", text: str.trim() };
    tmp18 = obj3;
  } else {
    tmp18 = first[tmp10.id];
    if (tmp18 == null) {
      tmp18 = null;
    }
  }
  c18 = tmp18;
  let obj2 = clarification(4594);
  if (null != tmp18) {
    let obj4 = {};
    let merged = Object.assign(first);
    obj4[tmp10.id] = tmp18;
  }
  const obj5 = { style: tmp.card, children: null };
  let obj6 = { style: tmp.footer, children: null };
  let obj7 = { style: tmp.customField, children: null };
  let tmp27Result = null;
  const tmp12Result2 = clarification(16705);
  if (clarification.questions.length > 1) {
    const obj8 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    let intl = tmp12(1126).intl;
    let obj9 = { index: bound + 1, total: length };
    obj8.children = intl.formatToPlainString(onSubmit(3723)["7bypa+"], obj9);
    tmp27Result = tmp27(tmp12(4886).Text, obj8);
  }
  obj7.children = tmp27Result;
  const items4 = [closure_6(c5, obj7), ];
  let tmp27Result4 = null;
  if (null != onDismiss) {
    let obj10 = { IconComponent: tmp12(6017).XSmallIcon, onPress: onDismiss, accessibilityLabel: null };
    let intl2 = tmp12(1126).intl;
    obj10.accessibilityLabel = intl2.string(onSubmit(3723).fMdUNR);
    tmp27Result4 = tmp27(onSubmit(16547), obj10);
    const tmp32 = onSubmit(16547);
  }
  items4[1] = tmp27Result4;
  obj6.children = items4;
  const items5 = [closure_7(c5, obj6), closure_6(clarification(4886).Text, { variant: "text-md/semibold", color: "text-default", children: clarification.questions[bound].question }), , , , ];
  let tmp27Result5 = null;
  if (true === clarification.questions[bound].multi_select) {
    const obj12 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl3 = tmp12(1126).intl;
    obj12.children = intl3.string(onSubmit(3723).jt5JBA);
    tmp27Result5 = tmp27(tmp12(4886).Text, obj12);
  }
  items5[2] = tmp27Result5;
  options = tmp10.options;
  items5[3] = options.map((answer) => {
    closure_0 = answer;
    let fn;
    if (!closure_8) {
      fn = () => closure_15(closure_0);
    }
    const obj = { onPress: fn, border: null };
    str = undefined;
    if (closure_11) {
      if (closure_13.includes(answer.id)) {
        str = "strong";
      }
    }
    obj.border = str;
    if (closure_11) {
      const obj2 = { accessibilityRole, accessibilityState: null };
      const obj3 = { checked: closure_13.includes(answer.id), selected: closure_13.includes(answer.id) };
      obj2.accessibilityState = obj3;
      let obj4 = obj2;
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    const intl = clarification(optionHeader[11]).intl;
    if (true === answer.recommended) {
      let k7lEgj = onSubmit(optionHeader[12]).aL1BKQ;
      let tmp10 = onSubmit;
    } else {
      k7lEgj = onSubmit(optionHeader[12]).k7lEgj;
      tmp10 = onSubmit;
    }
    obj.accessibilityLabel = intl.formatToPlainString(k7lEgj, { answer: answer.label });
    const obj6 = { style: optionHeader.optionHeader, children: null };
    let tmp13 = null;
    if (closure_11) {
      const obj7 = { checked: closure_13.includes(answer.id) };
      tmp13 = closure_6(clarification(optionHeader[16]).FormCheckbox, obj7);
    }
    const items = [tmp13, closure_6(clarification(optionHeader[10]).Text, { variant: "text-sm/semibold", color: "text-default", children: answer.label }), ];
    let tmp16Result = null;
    if (true === answer.recommended) {
      const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: null };
      const intl2 = clarification(optionHeader[11]).intl;
      obj9.children = intl2.string(tmp10(optionHeader[12]).OXRWyV);
      tmp16Result = closure_6(clarification(optionHeader[10]).Text, obj9);
    }
    items[2] = tmp16Result;
    obj6.children = items;
    const items1 = [closure_7(c5, obj6), ];
    let tmp16Result2 = null;
    if (null != answer.detail) {
      tmp16Result2 = null;
      if ("" !== answer.detail) {
        const obj10 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
        tmp16Result2 = closure_6(clarification(optionHeader[10]).Text, obj10);
      }
    }
    items1[1] = tmp16Result2;
    obj.children = items1;
    return closure_7(clarification(optionHeader[15]).Card, obj, answer.id);
  });
  const obj13 = { size: "md", placeholder: null, accessibilityLabel: null, value: null, onChange: null, onSubmitEditing: null, returnKeyType: "send" };
  const intl4 = tmp12(1126).intl;
  obj13.placeholder = intl4.string(onSubmit(3723).qifsdL);
  const intl5 = tmp12(1126).intl;
  obj13.accessibilityLabel = intl5.formatToPlainString(onSubmit(3723).XHESTL, { question: clarification.questions[bound].question });
  obj13.value = str;
  obj13.onChange = function onChange(arg0) {
    closure_0 = arg0;
    return _undefined((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[id.id] = closure_0;
      return obj;
    });
  };
  obj13.onSubmitEditing = callback2;
  items5[4] = closure_6(clarification(6098).TextInput, obj13);
  if (clarification.questions.length <= 1) {
    if (!tmp11) {
      items5[5] = null;
      obj5.children = items5;
      return tmp25(tmp26, obj5);
    }
  }
  const obj15 = { style: tmp.footer, children: null };
  let tmp27Result6 = null;
  if (bound > 0) {
    tmp27Result6 = null;
    if (!tmp8) {
      const obj16 = { variant: "tertiary", size: "sm", text: null, onPress: null };
      const intl6 = tmp12(1126).intl;
      obj16.text = intl6.string(tmp35(3723).yKdgqw);
      obj16.onPress = callback1;
      tmp27Result6 = tmp27(tmp12(5594).Button, obj16);
    }
  }
  const items6 = [tmp27Result6, closure_6(c5, { style: tmp.customField }), ];
  if (!tmp8) {
    tmp8 = null == tmp18;
  }
  let obj18 = { variant: "primary", size: "sm", disabled: tmp8, text: null, onPress: null };
  const intl7 = tmp12(1126).intl;
  if (tmp24) {
    t = tmp12(1126).t;
    let S7Sa6j = t.geKm7t;
  } else {
    S7Sa6j = tmp35(3723).S7Sa6j;
  }
  obj18.text = intl7.string(S7Sa6j);
  obj18.onPress = function onPress() {
    if (null != c18) {
      callback(tmp);
    }
  };
  obj18 = tmp27(tmp12(5594).Button, obj18);
  items6[2] = obj18;
  obj15.children = items6;
  closure_7(c5, obj15);
});