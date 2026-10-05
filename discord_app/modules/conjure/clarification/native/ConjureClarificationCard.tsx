// === Module 16716: ConjureClarificationCard ===

// Module 16716 (ConjureClarificationCard)
import nativeDefault from "native" /* 587 */;
import ConjureClarification from "ConjureClarification" /* 16719 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onSubmit) => {
  let t = dependencyMap;
  const cResult = clarification(576).c(82);
  ({ projectId, clarification } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const onDismiss = onSubmit.onDismiss;
  let tmp3 = closure_8();
  dependencyMap = tmp3;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp6 = first1(noop.useState(first), 2);
  first1 = tmp6[0];
  noop = tmp8;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = {};
    cResult[1] = obj4;
    let tmp9 = obj4;
  } else {
    tmp9 = cResult[1];
  }
  const tmp5Result = first1(noop.useState(tmp9), 2);
  View = tmp5Result[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj5 = {};
    cResult[2] = obj5;
    let tmp11 = obj5;
  } else {
    tmp11 = cResult[2];
  }
  const tmp5Result3 = first1(noop.useState(tmp11), 2);
  closure_6 = tmp5Result3[1];
  const tmp5Result4 = first1(noop.useState(0), 2);
  closure_7 = tmp5Result4[1];
  closure_8 = tmp14;
  const bound = Math.min(tmp5Result4[0], length - 1);
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
  if (cResult[4] !== clarification.questions[bound]) {
    const isImageQuestionResult = clarification(16717).isImageQuestion(tmp16);
    cResult[4] = tmp16;
    cResult[5] = isImageQuestionResult;
    let tmp19 = isImageQuestionResult;
    const tmpResult5 = clarification(16717);
  } else {
    tmp19 = cResult[5];
  }
  closure_13 = tmp19;
  if (true === clarification.questions[bound].multi_select) {
    let tmp21 = tmp5Result3[0][tmp16.id];
    if (tmp21 == null) {
      tmp21 = bound;
    }
    let optionHeader = tmp21;
  } else {
    optionHeader = clarification(16717).answeredOptionIds(first1[tmp16.id]);
    const tmpResult6 = clarification(16717);
  }
  const tmpResult = clarification(4594);
  const conjureOwnImages = clarification(16718).useConjureOwnImages(projectId, first1, tmp8);
  if (cResult[6] === first1) {
    if (cResult[7] === clarification) {
      if (cResult[8] === bound) {
        if (cResult[9] === onSubmit) {
          if (cResult[10] === tmp16.id) {
            let tmp22 = cResult[11];
          }
          closure_15 = tmp22;
          if (cResult[12] === tmp17) {
            if (cResult[13] === tmp19) {
              if (cResult[14] === tmp16) {
                if (cResult[15] === tmp22) {
                  let tmp23 = cResult[16];
                }
                closure_16 = tmp23;
                if (cResult[17] === tmp14) {
                  if (cResult[18] === bound) {
                    let tmp24 = cResult[19];
                  }
                  let str = tmp5Result[0][tmp16.id];
                  if (str == null) {
                    str = "";
                  }
                  class Z {
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
                        tmp3 = closure_13;
                        if (closure_13) {
                          tmp6 = closure_4;
                          tmp7 = closure_4((arg0) => {
                            obj = {};
                            const merged = Object.assign(arg0);
                            obj[user.id] = obj;
                            return obj;
                          });
                        } else {
                          tmp4 = closure_15;
                          tmp5 = closure_15(obj);
                        }
                      }
                      return;
                    }
                  }
                  let multiSelectAnswerResult = null;
                  if (tmp17) {
                    const tmpResult8 = clarification(16719);
                    class Z {
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
                          tmp3 = closure_13;
                          if (closure_13) {
                            tmp6 = closure_4;
                            tmp7 = closure_4((arg0) => {
                              obj = {};
                              const merged = Object.assign(arg0);
                              obj[user.id] = obj;
                              return obj;
                            });
                          } else {
                            tmp4 = closure_15;
                            tmp5 = closure_15(obj);
                          }
                        }
                        return;
                      }
                    }
                    multiSelectAnswerResult = tmpResult8.multiSelectAnswer(tmp16, optionHeader, str, conjureOwnImages.multiPartFor(tmp16));
                  }
                  if (cResult[20] === str) {
                    if (cResult[21] === multiSelectAnswerResult) {
                      if (cResult[22] === tmp22) {
                        let tmp30 = cResult[23];
                      }
                      if (cResult[24] === first1) {
                        if (cResult[25] === str) {
                          if (cResult[26] === multiSelectAnswerResult) {
                            if (cResult[27] === tmp16.id) {
                              closure_19 = tmp31;
                              if (cResult[29] === bound) {
                                if (cResult[30] === length) {
                                  let tmp36 = cResult[31];
                                }
                                if (cResult[32] !== tmp16.question) {
                                  { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: null }.children = tmp16.question;
                                  class Z {
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
                                        tmp3 = closure_13;
                                        if (closure_13) {
                                          tmp6 = closure_4;
                                          tmp7 = closure_4((arg0) => {
                                            obj = {};
                                            const merged = Object.assign(arg0);
                                            obj[user.id] = obj;
                                            return obj;
                                          });
                                        } else {
                                          tmp4 = closure_15;
                                          tmp5 = closure_15(obj);
                                        }
                                      }
                                      return;
                                    }
                                  }
                                  cResult[32] = tmp16.question;
                                  cResult[33] = tmp42;
                                  let tmp40 = tmp42;
                                  let obj7 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: null };
                                } else {
                                  tmp40 = cResult[33];
                                }
                                if (cResult[34] === tmp3.customField) {
                                  if (cResult[35] === tmp36) {
                                    if (cResult[36] === tmp40) {
                                      let tmp43 = cResult[37];
                                    }
                                    if (cResult[38] !== onDismiss) {
                                      let tmp47 = null;
                                      if (null != onDismiss) {
                                        const obj8 = { IconComponent: null, onPress: null, accessibilityLabel: null };
                                        class Z {
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
                                              tmp3 = closure_13;
                                              if (closure_13) {
                                                tmp6 = closure_4;
                                                tmp7 = closure_4((arg0) => {
                                                  obj = {};
                                                  const merged = Object.assign(arg0);
                                                  obj[user.id] = obj;
                                                  return obj;
                                                });
                                              } else {
                                                tmp4 = closure_15;
                                                tmp5 = closure_15(obj);
                                              }
                                            }
                                            return;
                                          }
                                        }
                                        obj8.IconComponent = clarification(6017).XSmallIcon;
                                        obj8.onPress = onDismiss;
                                        let intl = clarification(1126).intl;
                                        obj8.accessibilityLabel = intl.string(onSubmit(3723).qVXlk0);
                                        tmp47 = closure_6(tmp50, obj8);
                                      }
                                      class Z {
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
                                            tmp3 = closure_13;
                                            if (closure_13) {
                                              tmp6 = closure_4;
                                              tmp7 = closure_4((arg0) => {
                                                obj = {};
                                                const merged = Object.assign(arg0);
                                                obj[user.id] = obj;
                                                return obj;
                                              });
                                            } else {
                                              tmp4 = closure_15;
                                              tmp5 = closure_15(obj);
                                            }
                                          }
                                          return;
                                        }
                                      }
                                      cResult[39] = tmp47;
                                      let tmp46 = tmp47;
                                    } else {
                                      tmp46 = cResult[39];
                                    }
                                    if (cResult[40] === tmp3.footer) {
                                      if (cResult[41] === tmp43) {
                                        if (cResult[42] === tmp46) {
                                          let tmp51 = cResult[43];
                                        }
                                        if (cResult[44] !== tmp17) {
                                          let tmp55 = null;
                                          if (tmp17) {
                                            let obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                            class Z {
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
                                                  tmp3 = closure_13;
                                                  if (closure_13) {
                                                    tmp6 = closure_4;
                                                    tmp7 = closure_4((arg0) => {
                                                      obj = {};
                                                      const merged = Object.assign(arg0);
                                                      obj[user.id] = obj;
                                                      return obj;
                                                    });
                                                  } else {
                                                    tmp4 = closure_15;
                                                    tmp5 = closure_15(obj);
                                                  }
                                                }
                                                return;
                                              }
                                            }
                                            obj9.children = obj22.string(onSubmit(3723).tE8qbz);
                                            tmp55 = closure_6(clarification(4886).Text, obj9);
                                          }
                                          class Z {
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
                                                tmp3 = closure_13;
                                                if (closure_13) {
                                                  tmp6 = closure_4;
                                                  tmp7 = closure_4((arg0) => {
                                                    obj = {};
                                                    const merged = Object.assign(arg0);
                                                    obj[user.id] = obj;
                                                    return obj;
                                                  });
                                                } else {
                                                  tmp4 = closure_15;
                                                  tmp5 = closure_15(obj);
                                                }
                                              }
                                              return;
                                            }
                                          }
                                          cResult[45] = tmp55;
                                          let tmp54 = tmp55;
                                        } else {
                                          tmp54 = cResult[45];
                                        }
                                        if (cResult[46] === accessibilityRole) {
                                          if (cResult[47] === tmp14) {
                                            if (cResult[48] === tmp23) {
                                              if (cResult[49] === tmp17) {
                                                if (cResult[50] === conjureOwnImages) {
                                                  if (cResult[51] === tmp19) {
                                                    if (cResult[52] === projectId) {
                                                      if (cResult[53] === tmp16) {
                                                        if (cResult[54] === optionHeader) {
                                                          if (cResult[55] === tmp3.optionHeader) {
                                                            if (cResult[57] === tmp30) {
                                                              if (cResult[58] === str) {
                                                                if (cResult[59] === tmp19) {
                                                                  if (cResult[60] === tmp16.id) {
                                                                    if (cResult[61] === tmp16.question) {
                                                                      let tmp61 = cResult[62];
                                                                    }
                                                                    if (cResult[63] === tmp14) {
                                                                      if (cResult[64] === tmp24) {
                                                                        if (cResult[65] === bound) {
                                                                          if (cResult[66] === tmp17) {
                                                                            if (cResult[67] === tmp31) {
                                                                              if (cResult[68] === tmp19) {
                                                                                if (cResult[69] === tmp22) {
                                                                                  if (cResult[70] === tmp3.customField) {
                                                                                    if (cResult[71] === tmp3.footer) {
                                                                                      if (cResult[72] === tmp63) {
                                                                                        if (cResult[75] === tmp3.card) {
                                                                                          if (cResult[76] === tmp51) {
                                                                                            if (cResult[77] === tmp54) {
                                                                                              if (cResult[78] === tmp58) {
                                                                                                if (cResult[79] === tmp61) {
                                                                                                  if (cResult[80] === tmp64) {
                                                                                                    let tmp74 = cResult[81];
                                                                                                  }
                                                                                                  return tmp74;
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                        class Z {
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
                                                                                              tmp3 = closure_13;
                                                                                              if (closure_13) {
                                                                                                tmp6 = closure_4;
                                                                                                tmp7 = closure_4((arg0) => {
                                                                                                  obj = {};
                                                                                                  const merged = Object.assign(arg0);
                                                                                                  obj[user.id] = obj;
                                                                                                  return obj;
                                                                                                });
                                                                                              } else {
                                                                                                tmp4 = closure_15;
                                                                                                tmp5 = closure_15(obj);
                                                                                              }
                                                                                            }
                                                                                            return;
                                                                                          }
                                                                                        }
                                                                                        let obj10 = { style: tmp3.card, children: null };
                                                                                        let items = [tmp51, tmp54, tmp58, tmp61, tmp64];
                                                                                        obj10.children = items;
                                                                                        const tmp76 = closure_7(View, obj10);
                                                                                        cResult[75] = tmp3.card;
                                                                                        cResult[76] = tmp51;
                                                                                        cResult[77] = tmp54;
                                                                                        cResult[78] = tmp58;
                                                                                        cResult[79] = tmp61;
                                                                                        cResult[80] = tmp64;
                                                                                        cResult[81] = tmp76;
                                                                                        tmp74 = tmp76;
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
                                                                          tmp3 = closure_13;
                                                                          if (closure_13) {
                                                                            tmp6 = closure_4;
                                                                            tmp7 = closure_4((arg0) => {
                                                                              obj = {};
                                                                              const merged = Object.assign(arg0);
                                                                              obj[user.id] = obj;
                                                                              return obj;
                                                                            });
                                                                          } else {
                                                                            tmp4 = closure_15;
                                                                            tmp5 = closure_15(obj);
                                                                          }
                                                                        }
                                                                        return;
                                                                      }
                                                                    }
                                                                    const obj11 = { style: tmp3.footer, children: null };
                                                                    let tmp67 = null;
                                                                    if (bound > 0) {
                                                                      tmp67 = null;
                                                                      if (!tmp14) {
                                                                        const obj12 = { variant: "tertiary", size: "sm", text: null, onPress: null };
                                                                        class Z {
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
                                                                              tmp3 = closure_13;
                                                                              if (closure_13) {
                                                                                tmp6 = closure_4;
                                                                                tmp7 = closure_4((arg0) => {
                                                                                  obj = {};
                                                                                  const merged = Object.assign(arg0);
                                                                                  obj[user.id] = obj;
                                                                                  return obj;
                                                                                });
                                                                              } else {
                                                                                tmp4 = closure_15;
                                                                                tmp5 = closure_15(obj);
                                                                              }
                                                                            }
                                                                            return;
                                                                          }
                                                                        }
                                                                        obj12.text = obj25.string(onSubmit(3723).Pk5lfA);
                                                                        obj12.onPress = tmp24;
                                                                        tmp67 = closure_6(clarification(5594).Button, obj12);
                                                                      }
                                                                    }
                                                                    let items1 = [tmp67, , ];
                                                                    const obj13 = { style: tmp3.customField };
                                                                    items1[1] = closure_6(View, obj13);
                                                                    let tmp71 = tmp14;
                                                                    if (!tmp14) {
                                                                      tmp71 = null == tmp31;
                                                                    }
                                                                    let obj14 = { variant: "primary", size: "sm", disabled: tmp71, text: null, onPress: null };
                                                                    let intl2 = clarification(1126).intl;
                                                                    if (bound === tmp35) {
                                                                      t = clarification(1126).t;
                                                                      let w1nRmT = t.geKm7t;
                                                                    } else {
                                                                      w1nRmT = onSubmit(3723).w1nRmT;
                                                                    }
                                                                    obj14.text = intl2.string(w1nRmT);
                                                                    obj14.onPress = function onPress() {
                                                                      if (null != closure_19) {
                                                                        closure_15(tmp);
                                                                      }
                                                                    };
                                                                    obj14 = closure_6(clarification(5594).Button, obj14);
                                                                    items1[2] = obj14;
                                                                    obj11.children = items1;
                                                                    closure_7(View, obj11);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            class Z {
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
                                                                  tmp3 = closure_13;
                                                                  if (closure_13) {
                                                                    tmp6 = closure_4;
                                                                    tmp7 = closure_4((arg0) => {
                                                                      obj = {};
                                                                      const merged = Object.assign(arg0);
                                                                      obj[user.id] = obj;
                                                                      return obj;
                                                                    });
                                                                  } else {
                                                                    tmp4 = closure_15;
                                                                    tmp5 = closure_15(obj);
                                                                  }
                                                                }
                                                                return;
                                                              }
                                                            }
                                                            cResult[57] = tmp30;
                                                            cResult[58] = str;
                                                            cResult[59] = tmp19;
                                                            cResult[60] = tmp16.id;
                                                            cResult[61] = tmp16.question;
                                                            cResult[62] = null;
                                                            tmp61 = tmp62;
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
                                              tmp3 = closure_13;
                                              if (closure_13) {
                                                tmp6 = closure_4;
                                                tmp7 = closure_4((arg0) => {
                                                  obj = {};
                                                  const merged = Object.assign(arg0);
                                                  obj[user.id] = obj;
                                                  return obj;
                                                });
                                              } else {
                                                tmp4 = closure_15;
                                                tmp5 = closure_15(obj);
                                              }
                                            }
                                            return;
                                          }
                                        }
                                        cResult[46] = accessibilityRole;
                                        cResult[47] = tmp14;
                                        cResult[48] = tmp23;
                                        cResult[49] = tmp17;
                                        cResult[50] = conjureOwnImages;
                                        cResult[51] = tmp19;
                                        cResult[52] = projectId;
                                        cResult[53] = tmp16;
                                        cResult[54] = optionHeader;
                                        optionHeader = tmp3.optionHeader;
                                        cResult[55] = optionHeader;
                                        cResult[56] = tmp59;
                                      }
                                    }
                                    class Z {
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
                                          tmp3 = closure_13;
                                          if (closure_13) {
                                            tmp6 = closure_4;
                                            tmp7 = closure_4((arg0) => {
                                              obj = {};
                                              const merged = Object.assign(arg0);
                                              obj[user.id] = obj;
                                              return obj;
                                            });
                                          } else {
                                            tmp4 = closure_15;
                                            tmp5 = closure_15(obj);
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    const obj16 = { style: tmp3.footer, children: null };
                                    const items2 = [tmp43, tmp46];
                                    obj16.children = items2;
                                    const tmp53 = closure_7(View, obj16);
                                    cResult[40] = tmp3.footer;
                                    cResult[41] = tmp43;
                                    cResult[42] = tmp46;
                                    cResult[43] = tmp53;
                                    tmp51 = tmp53;
                                  }
                                }
                                class Z {
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
                                      tmp3 = closure_13;
                                      if (closure_13) {
                                        tmp6 = closure_4;
                                        tmp7 = closure_4((arg0) => {
                                          obj = {};
                                          const merged = Object.assign(arg0);
                                          obj[user.id] = obj;
                                          return obj;
                                        });
                                      } else {
                                        tmp4 = closure_15;
                                        tmp5 = closure_15(obj);
                                      }
                                    }
                                    return;
                                  }
                                }
                                const obj17 = { style: tmp3.customField, children: null };
                                const items3 = [tmp36, tmp40];
                                obj17.children = items3;
                                const tmp45 = closure_7(View, obj17);
                                cResult[34] = tmp3.customField;
                                cResult[35] = tmp36;
                                cResult[36] = tmp40;
                                cResult[37] = tmp45;
                                tmp43 = tmp45;
                              }
                              class Z {
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
                                    tmp3 = closure_13;
                                    if (closure_13) {
                                      tmp6 = closure_4;
                                      tmp7 = closure_4((arg0) => {
                                        obj = {};
                                        const merged = Object.assign(arg0);
                                        obj[user.id] = obj;
                                        return obj;
                                      });
                                    } else {
                                      tmp4 = closure_15;
                                      tmp5 = closure_15(obj);
                                    }
                                  }
                                  return;
                                }
                              }
                              if (length > 1) {
                                const obj18 = { variant: "text-xs/semibold", color: "text-muted", children: null };
                                class Z {
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
                                      tmp3 = closure_13;
                                      if (closure_13) {
                                        tmp6 = closure_4;
                                        tmp7 = closure_4((arg0) => {
                                          obj = {};
                                          const merged = Object.assign(arg0);
                                          obj[user.id] = obj;
                                          return obj;
                                        });
                                      } else {
                                        tmp4 = closure_15;
                                        tmp5 = closure_15(obj);
                                      }
                                    }
                                    return;
                                  }
                                }
                                const obj19 = { index: bound + 1, total: length };
                                obj18.children = obj15.formatToPlainString(onSubmit(3723).yzYUjq, obj19);
                                const tmp37 = closure_6(clarification(4886).Text, obj18);
                              }
                              cResult[29] = bound;
                              cResult[30] = length;
                              cResult[31] = tmp37;
                              tmp36 = tmp37;
                            }
                          }
                        }
                      }
                      if (null != multiSelectAnswerResult) {
                        class Z {
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
                              tmp3 = closure_13;
                              if (closure_13) {
                                tmp6 = closure_4;
                                tmp7 = closure_4((arg0) => {
                                  obj = {};
                                  const merged = Object.assign(arg0);
                                  obj[user.id] = obj;
                                  return obj;
                                });
                              } else {
                                tmp4 = closure_15;
                                tmp5 = closure_15(obj);
                              }
                            }
                            return;
                          }
                        }
                      } else if ("" !== str.trim()) {
                        const obj20 = { kind: "custom", text: str.trim() };
                        let tmp32 = obj20;
                      } else {
                        tmp32 = first1[tmp16.id];
                        if (tmp32 == null) {
                          tmp32 = null;
                        }
                      }
                      class Z {
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
                            tmp3 = closure_13;
                            if (closure_13) {
                              tmp6 = closure_4;
                              tmp7 = closure_4((arg0) => {
                                obj = {};
                                const merged = Object.assign(arg0);
                                obj[user.id] = obj;
                                return obj;
                              });
                            } else {
                              tmp4 = closure_15;
                              tmp5 = closure_15(obj);
                            }
                          }
                          return;
                        }
                      }
                      cResult[24] = first1;
                      cResult[25] = str;
                      cResult[26] = multiSelectAnswerResult;
                      multiSelectAnswerResult = tmp16.id;
                      cResult[27] = multiSelectAnswerResult;
                      cResult[28] = tmp32;
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
                  cResult[22] = tmp22;
                  cResult[23] = ie;
                  tmp30 = ie;
                }
                class Z {
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
                      tmp3 = closure_13;
                      if (closure_13) {
                        tmp6 = closure_4;
                        tmp7 = closure_4((arg0) => {
                          obj = {};
                          const merged = Object.assign(arg0);
                          obj[user.id] = obj;
                          return obj;
                        });
                      } else {
                        tmp4 = closure_15;
                        tmp5 = closure_15(obj);
                      }
                    }
                    return;
                  }
                }
                cResult[17] = tmp14;
                cResult[18] = bound;
                cResult[19] = tmp25;
                tmp24 = tmp25;
              }
            }
          }
          class Z {
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
                tmp3 = closure_13;
                if (closure_13) {
                  tmp6 = closure_4;
                  tmp7 = closure_4((arg0) => {
                    obj = {};
                    const merged = Object.assign(arg0);
                    obj[user.id] = obj;
                    return obj;
                  });
                } else {
                  tmp4 = closure_15;
                  tmp5 = closure_15(obj);
                }
              }
              return;
            }
          }
          cResult[12] = tmp17;
          cResult[13] = tmp19;
          cResult[14] = tmp16;
          cResult[15] = tmp22;
          cResult[16] = Z;
          tmp23 = Z;
        }
      }
    }
  }
  class V {
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
        obj5 = closure_0(closure_2[11]);
        tmp16 = clarification;
        tmp17 = closure_9;
        result = obj5.followingClarificationStep(clarification, obj1, closure_9);
        if (null == result) {
          tmp14Result = tmp14(tmp15[11]);
          result1 = tmp14Result.formatClarificationAnswers(tmp16, obj1);
          str = "";
          if ("" !== result1) {
            tmp14Result1 = tmp14(tmp15[11]);
            result2 = tmp14Result1.clarificationAnswersPayload(tmp16, obj1);
            tmp14Result2 = tmp14(tmp15[11]);
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
  cResult[6] = first1;
  cResult[7] = clarification;
  cResult[8] = bound;
  cResult[9] = onSubmit;
  cResult[10] = clarification.questions[bound].id;
  cResult[11] = V;
  tmp22 = V;
  const tmpResult7 = clarification(16718);
}) : ((onSubmit) => {
  ({ projectId, clarification } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const onDismiss = onSubmit.onDismiss;
  let first;
  noop = undefined;
  c5 = undefined;
  closure_8 = undefined;
  c14 = undefined;
  let callback;
  let callback1;
  let str;
  c18 = undefined;
  c19 = undefined;
  let tmp = closure_8();
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
  closure_8 = tmp9;
  const bound = Math.min(tmp8[0], length - 1);
  id = tmp11;
  closure_11 = tmp12;
  let t = dependencyMap;
  const tmp5 = first(noop.useState({}), 2);
  const accessibilityRole = clarification(4594).useCheckboxA11yNative({ checked: false }).accessibilityRole;
  let obj2 = clarification(4594);
  const isImageQuestionResult = clarification(16717).isImageQuestion(clarification.questions[bound]);
  c13 = isImageQuestionResult;
  if (true === clarification.questions[bound].multi_select) {
    let tmp16 = tmp7[0][tmp11.id];
    if (tmp16 == null) {
      tmp16 = bound;
    }
    let answeredOptionIdsResult = tmp16;
  } else {
    answeredOptionIdsResult = tmp13(16717).answeredOptionIds(first[tmp11.id]);
    const tmp13Result = tmp13(16717);
  }
  c14 = answeredOptionIdsResult;
  let obj3 = clarification(16717);
  const conjureOwnImages = clarification(16718).useConjureOwnImages(projectId, first, tmp4);
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
    const tmp13Result4 = tmp13(16719);
    multiSelectAnswerResult = tmp13Result4.multiSelectAnswer(tmp11, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp11));
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
    let tmp27 = null;
    if ("" !== multiSelectAnswerResult.text) {
      tmp27 = multiSelectAnswerResult;
    }
    let tmp26 = tmp27;
  } else if ("" !== str.trim()) {
    let obj4 = { kind: "custom", text: str.trim() };
    tmp26 = obj4;
  } else {
    tmp26 = first[tmp11.id];
    if (tmp26 == null) {
      tmp26 = null;
    }
  }
  c19 = tmp26;
  let obj5 = { style: tmp.card, children: null };
  let obj6 = { style: tmp.footer, children: null };
  let obj7 = { style: tmp.customField, children: null };
  let tmp30 = null;
  if (clarification.questions.length > 1) {
    const obj8 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    let intl = tmp13(1126).intl;
    let obj9 = { index: bound + 1, total: length };
    obj8.children = intl.formatToPlainString(onSubmit(3723).yzYUjq, obj9);
    tmp30 = closure_6(tmp13(4886).Text, obj8);
  }
  const items4 = [tmp30, closure_6(clarification(4886).Text, { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: clarification.questions[bound].question })];
  obj7.children = items4;
  const items5 = [closure_7(c5, obj7), ];
  let tmp33Result = null;
  if (null != onDismiss) {
    const obj11 = { IconComponent: tmp13(6017).XSmallIcon, onPress: onDismiss, accessibilityLabel: null };
    let intl2 = tmp13(1126).intl;
    obj11.accessibilityLabel = intl2.string(onSubmit(3723).qVXlk0);
    tmp33Result = tmp33(onSubmit(16551), obj11);
    const tmp36 = onSubmit(16551);
  }
  items5[1] = tmp33Result;
  obj6.children = items5;
  const items6 = [closure_7(c5, obj6), , , , ];
  let tmp33Result5 = null;
  if (true === clarification.questions[bound].multi_select) {
    const obj12 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl3 = tmp13(1126).intl;
    obj12.children = intl3.string(onSubmit(3723).tE8qbz);
    tmp33Result5 = tmp33(tmp13(4886).Text, obj12);
  }
  items6[1] = tmp33Result5;
  if (isImageQuestionResult) {
    const obj13 = { projectId, question: tmp11, selectedIds: answeredOptionIdsResult, disabled: tmp9, onPick: callback1, own: conjureOwnImages.controlsFor(tmp11, tmp9) };
    let tmp33Result6 = tmp33(onSubmit(16720), obj13);
    const tmp41 = onSubmit(16720);
  } else {
    options = tmp11.options;
    tmp33Result6 = options.map((answer) => {
      closure_0 = answer;
      let fn;
      if (!closure_8) {
        fn = () => callback1(closure_0);
      }
      const obj = { onPress: fn, border: null };
      str = undefined;
      if (closure_11) {
        if (_undefined2.includes(answer.id)) {
          str = "strong";
        }
      }
      obj.border = str;
      if (closure_11) {
        const obj2 = { accessibilityRole, accessibilityState: null };
        const obj3 = { checked: _undefined2.includes(answer.id), selected: _undefined2.includes(answer.id) };
        obj2.accessibilityState = obj3;
        let obj4 = obj2;
      } else {
        obj4 = {};
      }
      const merged = Object.assign(obj4);
      const intl = clarification(optionHeader[13]).intl;
      if (true === answer.recommended) {
        let AQbxhf = onSubmit(optionHeader[14])["2p6UFz"];
        let tmp10 = onSubmit;
      } else {
        AQbxhf = onSubmit(optionHeader[14]).AQbxhf;
        tmp10 = onSubmit;
      }
      obj.accessibilityLabel = intl.formatToPlainString(AQbxhf, { answer: answer.label });
      const obj6 = { style: optionHeader.optionHeader, children: null };
      let tmp13 = null;
      if (closure_11) {
        const obj7 = { checked: _undefined2.includes(answer.id) };
        tmp13 = closure_6(clarification(optionHeader[19]).FormCheckbox, obj7);
      }
      const items = [tmp13, closure_6(clarification(optionHeader[12]).Text, { variant: "text-sm/semibold", color: "text-default", children: answer.label }), ];
      let tmp16Result = null;
      if (true === answer.recommended) {
        const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: null };
        const intl2 = clarification(optionHeader[13]).intl;
        obj9.children = intl2.string(tmp10(optionHeader[14]).zku6r1);
        tmp16Result = closure_6(clarification(optionHeader[12]).Text, obj9);
      }
      items[2] = tmp16Result;
      obj6.children = items;
      const items1 = [closure_7(c5, obj6), ];
      let tmp16Result2 = null;
      if (null != answer.detail) {
        tmp16Result2 = null;
        if ("" !== answer.detail) {
          const obj10 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
          tmp16Result2 = closure_6(clarification(optionHeader[12]).Text, obj10);
        }
      }
      items1[1] = tmp16Result2;
      obj.children = items1;
      return closure_7(clarification(optionHeader[18]).Card, obj, answer.id);
    });
  }
  items6[2] = tmp33Result6;
  let tmp33Result7 = null;
  if (!isImageQuestionResult) {
    const obj14 = { size: "md", placeholder: null, accessibilityLabel: null, value: null, onChange: null, onSubmitEditing: null, returnKeyType: "send" };
    const intl4 = tmp13(1126).intl;
    obj14.placeholder = intl4.string(onSubmit(3723)["tOC+tn"]);
    const intl5 = tmp13(1126).intl;
    const obj15 = { question: tmp11.question };
    obj14.accessibilityLabel = intl5.formatToPlainString(onSubmit(3723)["4JeYPB"], obj15);
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
    tmp33Result7 = tmp33(tmp13(6098).TextInput, obj14);
  }
  items6[3] = tmp33Result7;
  if (clarification.questions.length <= 1) {
    if (!tmp12) {
      if (!isImageQuestionResult) {
        items6[4] = null;
        obj5.children = items6;
        return tmp28(tmp29, obj5);
      }
    }
  }
  const obj16 = { style: tmp.footer, children: null };
  let tmp33Result8 = null;
  if (bound > 0) {
    tmp33Result8 = null;
    if (!tmp9) {
      const obj17 = { variant: "tertiary", size: "sm", text: null, onPress: null };
      const intl6 = tmp13(1126).intl;
      obj17.text = intl6.string(onSubmit(3723).Pk5lfA);
      obj17.onPress = callback2;
      tmp33Result8 = tmp33(tmp13(5594).Button, obj17);
    }
  }
  const items7 = [tmp33Result8, closure_6(c5, { style: tmp.customField }), ];
  if (!tmp9) {
    tmp9 = null == tmp26;
  }
  let obj19 = { variant: "primary", size: "sm", disabled: tmp9, text: null, onPress: null };
  const intl7 = tmp13(1126).intl;
  if (bound === clarification.questions.length - 1) {
    t = tmp13(1126).t;
    let w1nRmT = t.geKm7t;
  } else {
    w1nRmT = onSubmit(3723).w1nRmT;
  }
  obj19.text = intl7.string(w1nRmT);
  obj19.onPress = function onPress() {
    if (null != c19) {
      callback(tmp);
    }
  };
  obj19 = tmp33(tmp13(5594).Button, obj19);
  items7[2] = obj19;
  obj16.children = items7;
  closure_7(c5, obj16);
});