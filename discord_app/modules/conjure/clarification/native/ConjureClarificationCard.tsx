// === Module 12468: ConjureClarificationCard ===

// Module 12468 (ConjureClarificationCard)
import nativeDefault from "native" /* 587 */;
import ConjureClarification from "ConjureClarification" /* 12471 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4971);
let obj2 = { card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, optionHeader: null, footer: null, customField: null, actions: null, backAction: null, linkConfigure: null };
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.optionHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.customField = { flex: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.actions = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-end", gap: nativeDefault.space.PX_8 };
obj2.backAction = { marginRight: "auto" };
obj2.linkConfigure = { alignSelf: "flex-end" };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = [];
let closure_10 = [];
const ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-end", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationCard(projectId) {
  const cResult = projectId(onSubmit[9]).c(121);
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  onSubmit = projectId.onSubmit;
  ({ onDismiss, onInputFocusChange } = projectId);
  ({ submitText, onBack, backText, hideSubmit } = projectId);
  let obj = projectId(onSubmit[9]);
  let tmp = projectId;
  const tmp2 = onSubmit;
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
  const tmp4 = closure_8();
  closure_7 = onInputFocusChange(noop.useState(tmp10), 2)[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj5 = {};
    cResult[2] = obj5;
    let tmp12 = obj5;
  } else {
    tmp12 = cResult[2];
  }
  const tmp6Result = onInputFocusChange(noop.useState(tmp10), 2);
  [r10059, closure_8] = onInputFocusChange(noop.useState(tmp12), 2);
  if (cResult[3] !== clarification.questions) {
    class D {
      constructor() {
        questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            let items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
    cResult[3] = clarification.questions;
    cResult[4] = D;
  } else {
    class D {
      constructor() {
        questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            let items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
  }
  const tmp6Result6 = onInputFocusChange(noop.useState(tmp12), 2);
  [r10071, closure_9] = onInputFocusChange(noop.useState(D), 2);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            let items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
    cResult[5] = tmp17;
  } else {
    class D {
      constructor() {
        questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            let items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
  }
  const tmp6Result7 = onInputFocusChange(noop.useState(D), 2);
  [r10083, closure_10] = onInputFocusChange(noop.useState(tmp17), 2);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            let items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
    cResult[6] = tmp20;
  } else {
    class D {
      constructor() {
        questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            let items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
  }
  const tmp6Result9 = onInputFocusChange(noop.useState(tmp20), 2);
  const first2 = tmp6Result9[0];
  closure_12 = tmp6Result9[1];
  const tmp6Result10 = onInputFocusChange(noop.useState(0), 2);
  closure_13 = tmp6Result10[1];
  const disabled = null == onSubmit;
  const bound = Math.min(tmp6Result10[0], clarification.questions.length - 1);
  let id = tmp25;
  closure_17 = tmp26;
  if (cResult[7] !== clarification.questions[bound]) {
    class D {
      constructor() {
        questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            let items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
    let isImageQuestionResult = obj6.isImageQuestion(tmp25);
    cResult[7] = tmp25;
    cResult[8] = isImageQuestionResult;
    const tmp27 = isImageQuestionResult;
  } else {
    class D {
      constructor() {
        questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            let items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
  }
  isImageQuestionResult = tmp27;
  if (true === clarification.questions[bound].multi_select) {
    class D {
      constructor() {
        questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            let items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
    if (tmp30 == null) {
      class D {
        constructor() {
          questions = clarification.questions;
          return Object.fromEntries(questions.flatMap((default_entities) => {
            if (null != default_entities.default_entities) {
              const items = [, ];
              ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
              const items1 = [items];
              let items2 = items1;
            } else {
              items2 = [];
            }
            return items2;
          }));
        }
      }
    }
  } else {
    class D {
      constructor() {
        questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            let items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
    obj7.answeredOptionIds(first1[tmp25.id]);
  }
  const tmp6Result8 = onInputFocusChange(noop.useState(tmp17), 2);
  const conjureOwnImages = tmp(tmp2[11]).useConjureOwnImages(projectId, first1, tmp9);
  if (cResult[9] === first1) {
    class D {
      constructor() {
        questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            let items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
  }
  function xe(arg0) {
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
  cResult[9] = first1;
  cResult[10] = clarification;
  cResult[11] = bound;
  cResult[12] = first2;
  cResult[13] = onSubmit;
  cResult[14] = projectId;
  cResult[15] = clarification.questions[bound].id;
  cResult[16] = xe;
  let tmpResult = tmp(tmp2[11]);
}) : (function ConjureClarificationCard(projectId) {
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  const onSubmit = projectId.onSubmit;
  ({ onDismiss, onInputFocusChange: _slicedToArray, submitText, onBack, backText, hideSubmit } = projectId);
  if (hideSubmit === undefined) {
    hideSubmit = false;
  }
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
  [tmp10, c9] = noop.useState(() => {
    const questions = clarification.questions;
    return Object.fromEntries(questions.flatMap((default_entities) => {
      if (null != default_entities.default_entities) {
        const items = [, ];
        ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
        const items1 = [items];
        let items2 = items1;
      } else {
        items2 = [];
      }
      return items2;
    }));
  });
  const tmp9 = _slicedToArray(noop.useState(() => {
    const questions = clarification.questions;
    return Object.fromEntries(questions.flatMap((default_entities) => {
      if (null != default_entities.default_entities) {
        const items = [, ];
        ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
        const items1 = [items];
        let items2 = items1;
      } else {
        items2 = [];
      }
      return items2;
    }));
  }), 2);
  [tmp12, c10] = noop.useState({});
  [first1, closure_12] = noop.useState({});
  const tmp15 = _slicedToArray(noop.useState(0), 2);
  closure_13 = tmp15[1];
  let tmp16 = null == onSubmit;
  const disabled = tmp16;
  const bound = Math.min(tmp15[0], length - 1);
  let id = tmp18;
  closure_17 = tmp19;
  let geKm7t = onSubmit;
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
    answeredOptionIdsResult = tmp20(geKm7t[10]).answeredOptionIds(first[tmp18.id]);
    const tmp20Result = tmp20(geKm7t[10]);
  }
  c19 = answeredOptionIdsResult;
  const obj2 = projectId(onSubmit[10]);
  const conjureOwnImages = projectId(geKm7t[11]).useConjureOwnImages(projectId, first, tmp4);
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
  let items2 = [tmp16, bound];
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
    const tmp20Result7 = tmp20(geKm7t[12]);
    multiSelectAnswerResult = tmp20Result7.multiSelectAnswer(tmp18, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp18));
  }
  c23 = multiSelectAnswerResult;
  let entityAnswerResult = null;
  if (null != clarification.questions[bound].input) {
    const tmp20Result8 = tmp20(geKm7t[12]);
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
  let tmp43;
  if (0 === bound) {
    if (!tmp16) {
      tmp43 = onBack;
    }
  }
  let tmp44 = null;
  if (!isImageQuestionResult) {
    let obj4 = { size: "md", placeholder: tmp20(geKm7t[12]).clarificationDraftPlaceholder(tmp18), accessibilityLabel: null, value: null, onChange: null, onSubmitEditing: null, onFocus: null, onBlur: null, returnKeyType: "send" };
    let intl = tmp20(geKm7t[6]).intl;
    let obj5 = { question: tmp18.question };
    obj4.accessibilityLabel = intl.formatToPlainString(clarification(geKm7t[7])["4JeYPB"], obj5);
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
    tmp44 = closure_6(tmp20(geKm7t[14]).TextInput, obj4);
    const tmp20Result9 = tmp20(geKm7t[12]);
  }
  let obj6 = { style: tmp.card, children: null };
  const obj7 = { style: tmp.footer, children: null };
  const obj8 = { style: tmp.customField, children: null };
  let tmp51 = null;
  const tmp20Result6 = projectId(geKm7t[11]);
  if (clarification.questions.length > 1) {
    const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    let intl2 = tmp20(geKm7t[6]).intl;
    const obj10 = { index: bound + 1, total: length };
    obj9.children = intl2.formatToPlainString(tmp48(geKm7t[7]).yzYUjq, obj10);
    tmp51 = closure_6(tmp20(geKm7t[15]).Text, obj9);
  }
  const items5 = [tmp51, closure_6(projectId(geKm7t[15]).Text, { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: clarification.questions[bound].question })];
  obj8.children = items5;
  const items6 = [c7(first, obj8), ];
  let tmp53Result = null;
  if (null != onDismiss) {
    const obj12 = { variant: "tertiary", size: "sm", icon: tmp53(tmp20(geKm7t[17]).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: null };
    const intl3 = tmp20(geKm7t[6]).intl;
    obj12.accessibilityLabel = intl3.string(tmp48(geKm7t[7]).qVXlk0);
    tmp53Result = tmp53(tmp20(geKm7t[16]).IconButton, obj12);
  }
  items6[1] = tmp53Result;
  obj7.children = items6;
  const items7 = [c7(first, obj7), , , , , , , ];
  let tmp53Result8 = null;
  if (true === clarification.questions[bound].multi_select) {
    const obj13 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl4 = tmp20(geKm7t[6]).intl;
    obj13.children = intl4.string(tmp48(geKm7t[7]).tE8qbz);
    tmp53Result8 = tmp53(tmp20(geKm7t[15]).Text, obj13);
  }
  items7[1] = tmp53Result8;
  if (isImageQuestionResult) {
    const obj14 = { projectId, question: tmp18, selectedIds: answeredOptionIdsResult, disabled: tmp16, onPick: callback1, own: conjureOwnImages.controlsFor(tmp18, tmp16) };
    let tmp53Result9 = tmp53(tmp48(geKm7t[18]), obj14);
    const tmp48Result = tmp48(geKm7t[18]);
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
    tmp53Result9 = tmp53(tmp20(geKm7t[19]).TableRowGroup, obj15);
  } else {
    const options1 = tmp18.options;
    tmp53Result9 = options1.map((answer) => {
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
  items7[2] = tmp53Result9;
  let tmp53Result10 = null;
  if (null != clarification.questions[bound].input) {
    const obj16 = { projectId, question: tmp18, value: null, disabled: null, onChange: null, fallback: null };
    let tmp60 = tmp10[tmp18.id];
    if (tmp60 == null) {
      tmp60 = c10;
    }
    obj16.value = tmp60;
    obj16.disabled = tmp16;
    obj16.onChange = callback3;
    let tmp61 = null;
    if (false === tmp18.allow_custom) {
      tmp61 = tmp44;
    }
    obj16.fallback = tmp61;
    tmp53Result10 = tmp53(tmp48(geKm7t[22]), obj16);
    const tmp48Result3 = tmp48(geKm7t[22]);
  }
  items7[3] = tmp53Result10;
  let tmp62 = null;
  if (true === clarification.questions[bound].link) {
    let arr11 = tmp10[tmp18.id];
    if (arr11 == null) {
      arr11 = c10;
    }
    tmp62 = null;
    if (arr11.length > 0) {
      if (null == first1[tmp18.id]) {
        const obj17 = { style: tmp.linkConfigure, children: null };
        const obj18 = { variant: "tertiary", size: "sm", text: null, disabled: null, onPress: null };
        const intl5 = tmp20(geKm7t[6]).intl;
        obj18.text = intl5.string(tmp48(geKm7t[7]).eCzCxC);
        obj18.disabled = tmp16;
        obj18.onPress = function onPress() {
          return closure_12((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[id.id] = "auto";
            return obj;
          });
        };
        obj17.children = tmp53(tmp20(geKm7t[23]).Button, obj18);
        let tmp53Result11 = tmp53(tmp50, obj17);
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
        tmp53Result11 = tmp53(tmp48(geKm7t[24]), obj19);
        const tmp48Result4 = tmp48(geKm7t[24]);
      }
    }
  }
  items7[4] = tmp62;
  let tmp53Result12 = null;
  if (null != clarification.questions[bound].note) {
    const obj20 = { variant: "text-xs/normal", color: "text-muted", children: tmp18.note };
    tmp53Result12 = tmp53(tmp20(geKm7t[15]).Text, obj20);
  }
  items7[5] = tmp53Result12;
  let tmp67 = null;
  if (false !== clarification.questions[bound].allow_custom) {
    tmp67 = tmp44;
  }
  items7[6] = tmp67;
  if (clarification.questions.length <= 1) {
    if (!tmp19) {
      if (!isImageQuestionResult) {
        if (null == tmp18.input) {
          if (null == onBack) {
            let tmp47Result = null;
            const tmp20Result10 = tmp20(geKm7t[12]);
          }
          items7[7] = tmp47Result;
          obj6.children = items7;
          return tmp47(tmp49, obj6);
        }
      }
    }
  }
  const obj21 = { style: tmp.actions, children: null };
  if (bound <= 0) {
    let tmp53Result14 = null;
    const items8 = [tmp53Result14, ];
    if (hideSubmit) {
      items8[1] = null;
      obj21.children = items8;
      tmp47Result = tmp47(tmp50, obj21);
    } else {
      if (!tmp16) {
        tmp16 = null == tmp40;
      }
      const obj22 = { variant: "primary", size: "sm", disabled: tmp16, text: null, onPress: null };
      if (bound === length - 1) {
        if (submitText == null) {
          const intl8 = tmp20(geKm7t[6]).intl;
          geKm7t = tmp20(geKm7t[6]).t.geKm7t;
          submitText = intl8.string(geKm7t);
        }
        let stringResult = submitText;
      } else {
        const intl7 = tmp20(geKm7t[6]).intl;
        stringResult = intl7.string(tmp48(geKm7t[7]).w1nRmT);
      }
      obj22.text = stringResult;
      obj22.onPress = function onPress() {
        if (null != c25) {
          callback(tmp);
        }
      };
      tmp53(tmp20(geKm7t[23]).Button, obj22);
    }
  }
  const obj23 = { style: tmp.backAction, children: null };
  if (backText == null) {
    const intl6 = tmp20(geKm7t[6]).intl;
    backText = intl6.string(tmp48(geKm7t[7]).Pk5lfA);
  }
  const obj24 = { variant: "tertiary", size: "sm", text: backText, onPress: null };
  if (tmp43 == null) {
    tmp43 = callback2;
  }
  obj24.onPress = tmp43;
  obj23.children = closure_6(projectId(geKm7t[23]).Button, obj24);
  tmp53Result14 = tmp53(tmp50, obj23);
});