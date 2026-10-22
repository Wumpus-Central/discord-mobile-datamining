// === Module 12406: ConjureClarificationCard ===

// Module 12406 (ConjureClarificationCard)
import nativeDefault from "native" /* 587 */;
import ConjureClarification from "ConjureClarification" /* 12409 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4969);
let obj2 = { card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, optionHeader: null, footer: null, customField: null, linkConfigure: null };
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.optionHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.customField = { flex: 1 };
obj2.linkConfigure = { alignSelf: "flex-end" };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = [];
let closure_10 = [];
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationCard(projectId) {
  const cResult = projectId(onSubmit[9]).c(112);
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  onSubmit = projectId.onSubmit;
  ({ onDismiss, onInputFocusChange } = projectId);
  let obj = projectId(onSubmit[9]);
  noop = closure_8();
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
  const tmp6Result6 = onInputFocusChange(noop.useState(tmp12), 2);
  closure_8 = tmp6Result6[1];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj6 = {};
    cResult[3] = obj6;
    let tmp14 = obj6;
  } else {
    tmp14 = cResult[3];
  }
  const tmp4 = closure_8();
  [tmp16, closure_9] = onInputFocusChange(noop.useState(tmp14), 2);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = {};
    cResult[4] = obj7;
    let tmp17 = obj7;
  } else {
    tmp17 = cResult[4];
  }
  const tmp6Result7 = onInputFocusChange(noop.useState(tmp14), 2);
  [tmp19, closure_10] = onInputFocusChange(noop.useState(tmp17), 2);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = {};
    cResult[5] = obj8;
    let tmp20 = obj8;
  } else {
    tmp20 = cResult[5];
  }
  const tmp6Result9 = onInputFocusChange(noop.useState(tmp20), 2);
  const first2 = tmp6Result9[0];
  closure_12 = tmp6Result9[1];
  const tmp6Result10 = onInputFocusChange(noop.useState(0), 2);
  closure_13 = tmp6Result10[1];
  const disabled = tmp24;
  const bound = Math.min(tmp6Result10[0], clarification.questions.length - 1);
  let id = tmp26;
  closure_17 = tmp27;
  if (cResult[6] !== clarification.questions[bound]) {
    const isImageQuestionResult = tmp(tmp2[10]).isImageQuestion(tmp26);
    cResult[6] = tmp26;
    cResult[7] = isImageQuestionResult;
    let tmp28 = isImageQuestionResult;
    let tmpResult = tmp(tmp2[10]);
  } else {
    tmp28 = cResult[7];
  }
  closure_18 = tmp28;
  if (true === clarification.questions[bound].multi_select) {
    let tmp31 = tmp6Result6[0][tmp26.id];
    if (tmp31 == null) {
      tmp31 = closure_9;
    }
    let answeredOptionIdsResult = tmp31;
  } else {
    answeredOptionIdsResult = tmp(tmp2[10]).answeredOptionIds(first1[tmp26.id]);
    const tmpResult4 = tmp(tmp2[10]);
  }
  const tmp6Result8 = onInputFocusChange(noop.useState(tmp17), 2);
  const conjureOwnImages = projectId(onSubmit[11]).useConjureOwnImages(projectId, first1, tmp9);
  if (cResult[8] === first1) {
    if (cResult[9] === clarification) {
      if (cResult[10] === bound) {
        if (cResult[11] === first2) {
          if (cResult[12] === onSubmit) {
            if (cResult[13] === projectId) {
              if (cResult[14] === tmp26.id) {
                let tmp32 = cResult[15];
              }
              closure_20 = tmp32;
              if (cResult[16] === tmp27) {
                if (cResult[17] === tmp28) {
                  if (cResult[18] === tmp26) {
                    if (cResult[19] === tmp32) {
                      let tmp33 = cResult[20];
                    }
                    closure_21 = tmp33;
                    if (cResult[21] === tmp24) {
                      let str = tmp6Result[0][tmp26.id];
                      if (str == null) {
                        str = "";
                      }
                      let multiSelectAnswerResult = null;
                      if (tmp27) {
                        const tmpResult6 = tmp(tmp2[12]);
                        multiSelectAnswerResult = tmpResult6.multiSelectAnswer(tmp26, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp26));
                      }
                      if (cResult[24] === str) {
                        if (cResult[25] === tmp16) {
                          if (cResult[26] === tmp19) {
                            if (cResult[27] === tmp26.id) {
                              if (cResult[28] === tmp26.input) {
                                let tmp40 = cResult[29];
                              }
                              const text = tmp40;
                              if (cResult[30] !== tmp26.id) {
                                class Ce {
                                  constructor(arg0, arg1) {
                                    closure_0 = projectId;
                                    closure_1 = arg1;
                                    tmp = closure_9((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_0;
                                      return obj;
                                    });
                                    tmp2 = closure_10((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_1;
                                      return obj;
                                    });
                                    return;
                                  }
                                }
                                cResult[30] = tmp26.id;
                                cResult[31] = Ce;
                              } else {
                                class Ce {
                                  constructor(arg0, arg1) {
                                    closure_0 = projectId;
                                    closure_1 = arg1;
                                    tmp = closure_9((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_0;
                                      return obj;
                                    });
                                    tmp2 = closure_10((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_1;
                                      return obj;
                                    });
                                    return;
                                  }
                                }
                              }
                              if (cResult[32] === str) {
                                class Ce {
                                  constructor(arg0, arg1) {
                                    closure_0 = projectId;
                                    closure_1 = arg1;
                                    tmp = closure_9((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_0;
                                      return obj;
                                    });
                                    tmp2 = closure_10((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_1;
                                      return obj;
                                    });
                                    return;
                                  }
                                }
                              }
                              function ke() {
                                if (null == text) {
                                  if (null == multiSelectAnswerResult) {
                                    const trimmed = str.trim();
                                    if ("" !== trimmed) {
                                      const obj = { kind: "custom", text: trimmed };
                                      closure_20(obj);
                                    }
                                  } else if ("" !== multiSelectAnswerResult.text) {
                                    closure_20(multiSelectAnswerResult);
                                  }
                                } else if ("" !== text.text) {
                                  closure_20(text);
                                }
                              }
                              cResult[32] = str;
                              cResult[33] = multiSelectAnswerResult;
                              cResult[34] = tmp40;
                              cResult[35] = tmp32;
                              cResult[36] = ke;
                            }
                          }
                        }
                      }
                      let entityAnswerResult = null;
                      if (null != tmp26.input) {
                        class Ce {
                          constructor(arg0, arg1) {
                            closure_0 = projectId;
                            closure_1 = arg1;
                            tmp = closure_9((arg0) => {
                              const obj = {};
                              const merged = Object.assign(arg0);
                              obj[user.id] = closure_0;
                              return obj;
                            });
                            tmp2 = closure_10((arg0) => {
                              const obj = {};
                              const merged = Object.assign(arg0);
                              obj[user.id] = closure_1;
                              return obj;
                            });
                            return;
                          }
                        }
                        const input = tmp26.input;
                        if (tmp16[tmp26.id] == null) {
                          class Ce {
                            constructor(arg0, arg1) {
                              closure_0 = projectId;
                              closure_1 = arg1;
                              tmp = closure_9((arg0) => {
                                const obj = {};
                                const merged = Object.assign(arg0);
                                obj[user.id] = closure_0;
                                return obj;
                              });
                              tmp2 = closure_10((arg0) => {
                                const obj = {};
                                const merged = Object.assign(arg0);
                                obj[user.id] = closure_1;
                                return obj;
                              });
                              return;
                            }
                          }
                        }
                        entityAnswerResult = obj14.entityAnswer(input, tmp42, str, tmp19[tmp26.id]);
                      }
                      cResult[24] = str;
                      cResult[25] = tmp16;
                      cResult[26] = tmp19;
                      cResult[27] = tmp26.id;
                      cResult[28] = tmp26.input;
                      cResult[29] = entityAnswerResult;
                      tmp40 = entityAnswerResult;
                    }
                    function xe() {
                      let tmp = closure_14;
                      if (!closure_14) {
                        tmp = 0 === bound;
                      }
                      if (!tmp) {
                        closure_13(bound - 1);
                      }
                    }
                    cResult[21] = tmp24;
                    cResult[22] = bound;
                    cResult[23] = xe;
                  }
                }
              }
              function fe(arg0) {
                id = arg0;
                if (closure_17) {
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
                  if (closure_18) {
                    closure_6((arg0) => {
                      obj = {};
                      const merged = Object.assign(arg0);
                      obj[user.id] = obj;
                      return obj;
                    });
                  } else {
                    closure_20(obj);
                  }
                }
              }
              cResult[16] = tmp27;
              cResult[17] = tmp28;
              cResult[18] = tmp26;
              cResult[19] = tmp32;
              cResult[20] = fe;
              tmp33 = fe;
            }
          }
        }
      }
    }
  }
  function de(arg0) {
    if (null != onSubmit) {
      let obj = {};
      const merged = Object.assign(first1);
      obj[id.id] = arg0;
      closure_6(obj);
      let result = projectId(onSubmit[12]).followingClarificationStep(result1, obj, bound);
      if (null == result) {
        result1 = projectId(onSubmit[12]).formatClarificationAnswers(tmp19, obj);
        if ("" !== result1) {
          const tmp17Result2 = projectId(onSubmit[13]);
          tmp17Result2.sendAfterLinkingApps(obj, tmp19, obj, first2, () => {
            obj = ConjureClarification;
            const result = obj.clarificationAnswersPayload(clarification, obj);
            return onSubmit(result1, result, ConjureClarification.clarificationAnswerAttachments(clarification, obj));
          });
        }
        const tmp17Result = projectId(onSubmit[12]);
      } else {
        closure_13(result);
      }
      const obj4 = projectId(onSubmit[12]);
    }
  }
  cResult[8] = first1;
  cResult[9] = clarification;
  cResult[10] = bound;
  cResult[11] = first2;
  cResult[12] = onSubmit;
  cResult[13] = projectId;
  cResult[14] = clarification.questions[bound].id;
  cResult[15] = de;
  tmp32 = de;
  const tmpResult5 = projectId(onSubmit[11]);
}) : (function ConjureClarificationCard(projectId) {
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  const onSubmit = projectId.onSubmit;
  ({ onDismiss, onInputFocusChange: _slicedToArray } = projectId);
  first = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  first1 = undefined;
  closure_12 = undefined;
  c19 = undefined;
  let callback;
  let callback1;
  let str;
  c23 = undefined;
  c24 = undefined;
  c25 = undefined;
  let tmp = c8();
  noop = tmp;
  [first] = noop.useState({});
  closure_6 = tmp4;
  [tmp6, c7] = noop.useState({});
  let tmp5 = _slicedToArray(noop.useState({}), 2);
  [tmp8, c8] = noop.useState({});
  const tmp7 = _slicedToArray(noop.useState({}), 2);
  [tmp10, c9] = noop.useState({});
  const tmp9 = _slicedToArray(noop.useState({}), 2);
  [tmp12, c10] = noop.useState({});
  [first1, closure_12] = noop.useState({});
  const tmp15 = _slicedToArray(noop.useState(0), 2);
  closure_13 = tmp15[1];
  let tmp16 = null == onSubmit;
  const disabled = tmp16;
  const bound = Math.min(tmp15[0], length - 1);
  let id = tmp18;
  closure_17 = tmp19;
  let t = onSubmit;
  const tmp11 = _slicedToArray(noop.useState({}), 2);
  const isImageQuestionResult = projectId(onSubmit[10]).isImageQuestion(clarification.questions[bound]);
  c18 = isImageQuestionResult;
  if (true === clarification.questions[bound].multi_select) {
    let tmp23 = tmp8[tmp18.id];
    if (tmp23 == null) {
      tmp23 = c9;
    }
    let answeredOptionIdsResult = tmp23;
  } else {
    answeredOptionIdsResult = tmp20(t[10]).answeredOptionIds(first[tmp18.id]);
    const tmp20Result = tmp20(t[10]);
  }
  c19 = answeredOptionIdsResult;
  const obj2 = projectId(onSubmit[10]);
  const conjureOwnImages = projectId(t[11]).useConjureOwnImages(projectId, first, tmp4);
  let items = [first, clarification, bound, first1, onSubmit, projectId, clarification.questions[bound].id];
  callback = obj.useCallback((arg0) => {
    if (null != onSubmit) {
      let obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_6(obj);
      let result = projectId(onSubmit[12]).followingClarificationStep(result1, obj, bound);
      if (null == result) {
        result1 = projectId(onSubmit[12]).formatClarificationAnswers(tmp19, obj);
        if ("" !== result1) {
          const tmp17Result2 = projectId(onSubmit[13]);
          tmp17Result2.sendAfterLinkingApps(obj, tmp19, obj, first1, () => {
            obj = ConjureClarification;
            const result = obj.clarificationAnswersPayload(clarification, obj);
            return onSubmit(result1, result, ConjureClarification.clarificationAnswerAttachments(clarification, obj));
          });
        }
        const tmp17Result = projectId(onSubmit[12]);
      } else {
        closure_13(result);
      }
      const obj4 = projectId(onSubmit[12]);
    }
  }, items);
  let items1 = [true === clarification.questions[bound].multi_select, isImageQuestionResult, clarification.questions[bound], callback];
  callback1 = obj.useCallback((arg0) => {
    id = arg0;
    if (closure_17) {
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
      if (c18) {
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
  const items2 = [tmp16, bound];
  str = tmp6[tmp18.id];
  const callback2 = obj.useCallback(() => {
    let tmp = closure_14;
    if (!closure_14) {
      tmp = 0 === bound;
    }
    if (!tmp) {
      closure_13(bound - 1);
    }
  }, items2);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (true === clarification.questions[bound].multi_select) {
    const tmp20Result7 = tmp20(t[12]);
    multiSelectAnswerResult = tmp20Result7.multiSelectAnswer(tmp18, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp18));
  }
  c23 = multiSelectAnswerResult;
  let entityAnswerResult = null;
  if (null != clarification.questions[bound].input) {
    const tmp20Result8 = tmp20(t[12]);
    const input = tmp18.input;
    let tmp33 = tmp10[tmp18.id];
    if (tmp33 == null) {
      tmp33 = c10;
    }
    entityAnswerResult = tmp20Result8.entityAnswer(input, tmp33, str, tmp12[tmp18.id]);
  }
  c24 = entityAnswerResult;
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
    _undefined4((arg0) => {
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
    let tmp42 = null;
    if ("" !== entityAnswerResult.text) {
      tmp42 = entityAnswerResult;
    }
    let tmp40 = tmp42;
  } else if (null != multiSelectAnswerResult) {
    let tmp41 = null;
    if ("" !== multiSelectAnswerResult.text) {
      tmp41 = multiSelectAnswerResult;
    }
    tmp40 = tmp41;
  } else if ("" !== str.trim()) {
    let obj3 = { kind: "custom", text: str.trim() };
    tmp40 = obj3;
  } else {
    tmp40 = first[tmp18.id];
    if (tmp40 == null) {
      tmp40 = null;
    }
  }
  c25 = tmp40;
  let tmp43 = null;
  if (!isImageQuestionResult) {
    let obj4 = { size: "md", placeholder: tmp20(t[12]).clarificationDraftPlaceholder(tmp18), accessibilityLabel: null, value: null, onChange: null, onSubmitEditing: null, onFocus: null, onBlur: null, returnKeyType: "send" };
    let intl = tmp20(t[6]).intl;
    let obj5 = { question: tmp18.question };
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
    tmp43 = closure_6(tmp20(t[14]).TextInput, obj4);
    const tmp20Result9 = tmp20(t[12]);
  }
  let obj6 = { style: tmp.card, children: null };
  const obj7 = { style: tmp.footer, children: null };
  const obj8 = { style: tmp.customField, children: null };
  let tmp50 = null;
  const tmp20Result6 = projectId(t[11]);
  if (clarification.questions.length > 1) {
    const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    let intl2 = tmp20(t[6]).intl;
    const obj10 = { index: bound + 1, total: length };
    obj9.children = intl2.formatToPlainString(tmp47(t[7]).yzYUjq, obj10);
    tmp50 = closure_6(tmp20(t[15]).Text, obj9);
  }
  const items5 = [tmp50, closure_6(projectId(t[15]).Text, { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: clarification.questions[bound].question })];
  obj8.children = items5;
  const items6 = [c7(first, obj8), ];
  let tmp52Result = null;
  if (null != onDismiss) {
    const obj12 = { variant: "tertiary", size: "sm", icon: tmp52(tmp20(t[17]).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: null };
    const intl3 = tmp20(t[6]).intl;
    obj12.accessibilityLabel = intl3.string(tmp47(t[7]).qVXlk0);
    tmp52Result = tmp52(tmp20(t[16]).IconButton, obj12);
  }
  items6[1] = tmp52Result;
  obj7.children = items6;
  const items7 = [c7(first, obj7), , , , , , ];
  let tmp52Result6 = null;
  if (true === clarification.questions[bound].multi_select) {
    const obj13 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl4 = tmp20(t[6]).intl;
    obj13.children = intl4.string(tmp47(t[7]).tE8qbz);
    tmp52Result6 = tmp52(tmp20(t[15]).Text, obj13);
  }
  items7[1] = tmp52Result6;
  if (isImageQuestionResult) {
    const obj14 = { projectId, question: tmp18, selectedIds: answeredOptionIdsResult, disabled: tmp16, onPick: callback1, own: conjureOwnImages.controlsFor(tmp18, tmp16) };
    let tmp52Result7 = tmp52(tmp47(t[18]), obj14);
    const tmp47Result = tmp47(t[18]);
  } else if (tmp19) {
    const obj15 = { hasIcons: false, children: null };
    const options = tmp18.options;
    obj15.children = options.map((label) => {
      closure_0 = label;
      const obj = { label: label.label, subLabel: null, checked: null, disabled: null, onPress: null };
      str = "";
      if (true === label.recommended) {
        const intl = projectId(onSubmit[6]).intl;
        str = intl.string(clarification(onSubmit[7]).zku6r1);
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
      obj.checked = _undefined5.includes(label.id);
      obj.disabled = disabled;
      obj.onPress = function onPress() {
        return callback1(closure_0);
      };
      return closure_6(projectId(onSubmit[20]).TableCheckboxRow, obj, label.id);
    });
    tmp52Result7 = tmp52(tmp20(t[19]).TableRowGroup, obj15);
  } else {
    const options1 = tmp18.options;
    tmp52Result7 = options1.map((answer) => {
      closure_0 = answer;
      const obj = {
        onPress() {
          return callback1(closure_0);
        },
        disabled,
        accessibilityLabel: null,
        children: null
      };
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
      const items = [closure_6(projectId(onSubmit[15]).Text, { variant: "text-sm/semibold", color: "text-default", children: answer.label }), ];
      let tmp8Result = null;
      if (true === answer.recommended) {
        const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: null };
        const intl2 = projectId(onSubmit[6]).intl;
        obj5.children = intl2.string(tmp5(onSubmit[7]).zku6r1);
        tmp8Result = closure_6(projectId(onSubmit[15]).Text, obj5);
      }
      items[1] = tmp8Result;
      obj3.children = items;
      const items1 = [_undefined(first, obj3), ];
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
  items7[2] = tmp52Result7;
  let tmp52Result8 = null;
  if (null != clarification.questions[bound].input) {
    const obj16 = { projectId, question: tmp18, value: null, disabled: null, onChange: null, fallback: null };
    let tmp59 = tmp10[tmp18.id];
    if (tmp59 == null) {
      tmp59 = c10;
    }
    obj16.value = tmp59;
    obj16.disabled = tmp16;
    obj16.onChange = callback3;
    let tmp60 = null;
    if (false === tmp18.allow_custom) {
      tmp60 = tmp43;
    }
    obj16.fallback = tmp60;
    tmp52Result8 = tmp52(tmp47(t[22]), obj16);
    const tmp47Result3 = tmp47(t[22]);
  }
  items7[3] = tmp52Result8;
  let tmp61 = null;
  if (true === clarification.questions[bound].link) {
    let arr11 = tmp10[tmp18.id];
    if (arr11 == null) {
      arr11 = c10;
    }
    tmp61 = null;
    if (arr11.length > 0) {
      if (null == first1[tmp18.id]) {
        const obj17 = { style: tmp.linkConfigure, children: null };
        const obj18 = { variant: "tertiary", size: "sm", text: null, disabled: null, onPress: null };
        const intl5 = tmp20(t[6]).intl;
        obj18.text = intl5.string(tmp47(t[7]).eCzCxC);
        obj18.disabled = tmp16;
        obj18.onPress = function onPress() {
          return closure_12((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[id.id] = "auto";
            return obj;
          });
        };
        obj17.children = tmp52(tmp20(t[23]).Button, obj18);
        let tmp52Result9 = tmp52(tmp49, obj17);
      } else {
        let str5 = first1[tmp18.id];
        if (str5 == null) {
          str5 = "auto";
        }
        const obj19 = {
          value: str5,
          disabled: tmp16,
          onChange(arg0) {
                  closure_0 = arg0;
                  return closure_12((arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj[id.id] = closure_0;
                    return obj;
                  });
                }
        };
        tmp52Result9 = tmp52(tmp47(t[24]), obj19);
        const tmp47Result4 = tmp47(t[24]);
      }
    }
  }
  items7[4] = tmp61;
  let tmp65 = null;
  if (false !== clarification.questions[bound].allow_custom) {
    tmp65 = tmp43;
  }
  items7[5] = tmp65;
  if (clarification.questions.length <= 1) {
    if (!tmp19) {
      if (!isImageQuestionResult) {
        if (null == tmp18.input) {
          if (!tmp20Result10.isTypedClarificationQuestion(tmp18)) {
            items7[6] = null;
            obj6.children = items7;
            return tmp46(tmp48, obj6);
          }
          tmp20Result10 = tmp20(t[12]);
        }
      }
    }
  }
  const obj20 = { style: tmp.footer, children: null };
  let tmp52Result10 = null;
  if (bound > 0) {
    tmp52Result10 = null;
    if (!tmp16) {
      const obj21 = { variant: "tertiary", size: "sm", text: null, onPress: null };
      const intl6 = tmp20(t[6]).intl;
      obj21.text = intl6.string(tmp47(t[7]).Pk5lfA);
      obj21.onPress = callback2;
      tmp52Result10 = tmp52(tmp20(t[23]).Button, obj21);
    }
  }
  const items8 = [tmp52Result10, closure_6(first, { style: tmp.customField }), ];
  if (!tmp16) {
    tmp16 = null == tmp40;
  }
  let obj23 = { variant: "primary", size: "sm", disabled: tmp16, text: null, onPress: null };
  const intl7 = tmp20(t[6]).intl;
  if (bound === clarification.questions.length - 1) {
    t = tmp20(t[6]).t;
    let w1nRmT = t.geKm7t;
  } else {
    w1nRmT = tmp47(t[7]).w1nRmT;
  }
  obj23.text = intl7.string(w1nRmT);
  obj23.onPress = function onPress() {
    if (null != c25) {
      callback(tmp);
    }
  };
  obj23 = tmp52(tmp20(t[23]).Button, obj23);
  items8[2] = obj23;
  obj20.children = items8;
  c7(first, obj20);
});