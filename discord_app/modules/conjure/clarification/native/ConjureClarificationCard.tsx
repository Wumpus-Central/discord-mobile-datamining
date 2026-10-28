// discord_app/modules/conjure/clarification/native/ConjureClarificationCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConjureClarification from "../ConjureClarification.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5004);
let obj2 = {
  card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 },
  optionHeader: null,
  footer: null,
  customField: null,
  actions: null,
  backAction: null,
  linkConfigure: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.optionHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.customField = { flex: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.actions = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: nativeDefault.space.PX_8,
};
obj2.backAction = { marginRight: "auto" };
obj2.linkConfigure = { alignSelf: "flex-end" };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = [];
let closure_10 = [];
const ReactCompilerGating = fn(558);
let obj6 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: nativeDefault.space.PX_8,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureClarificationCard(projectId) {
      const cResult = projectId(onSubmit[9]).c(107);
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
        const obj4 = {};
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
        class X {
          constructor() {
            questions = clarification.questions;
            return Object.fromEntries(
              questions.flatMap((default_entities) => {
                if (null != default_entities.default_entities) {
                  const items = [,];
                  ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                  const items1 = [items];
                  let items2 = items1;
                } else {
                  items2 = [];
                }
                return items2;
              }),
            );
          }
        }
        cResult[3] = clarification.questions;
        cResult[4] = X;
      } else {
        class X {
          constructor() {
            questions = clarification.questions;
            return Object.fromEntries(
              questions.flatMap((default_entities) => {
                if (null != default_entities.default_entities) {
                  const items = [,];
                  ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                  const items1 = [items];
                  let items2 = items1;
                } else {
                  items2 = [];
                }
                return items2;
              }),
            );
          }
        }
      }
      const tmp6Result6 = onInputFocusChange(noop.useState(tmp12), 2);
      [r10071, closure_9] = onInputFocusChange(noop.useState(X), 2);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor() {
            questions = clarification.questions;
            return Object.fromEntries(
              questions.flatMap((default_entities) => {
                if (null != default_entities.default_entities) {
                  const items = [,];
                  ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                  const items1 = [items];
                  let items2 = items1;
                } else {
                  items2 = [];
                }
                return items2;
              }),
            );
          }
        }
        cResult[5] = tmp17;
      } else {
        class X {
          constructor() {
            questions = clarification.questions;
            return Object.fromEntries(
              questions.flatMap((default_entities) => {
                if (null != default_entities.default_entities) {
                  const items = [,];
                  ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                  const items1 = [items];
                  let items2 = items1;
                } else {
                  items2 = [];
                }
                return items2;
              }),
            );
          }
        }
      }
      const tmp6Result7 = onInputFocusChange(noop.useState(X), 2);
      closure_10 = onInputFocusChange(noop.useState(tmp17), 2)[1];
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor() {
            questions = clarification.questions;
            return Object.fromEntries(
              questions.flatMap((default_entities) => {
                if (null != default_entities.default_entities) {
                  const items = [,];
                  ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                  const items1 = [items];
                  let items2 = items1;
                } else {
                  items2 = [];
                }
                return items2;
              }),
            );
          }
        }
        cResult[6] = tmp20;
      } else {
        class X {
          constructor() {
            questions = clarification.questions;
            return Object.fromEntries(
              questions.flatMap((default_entities) => {
                if (null != default_entities.default_entities) {
                  const items = [,];
                  ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                  const items1 = [items];
                  let items2 = items1;
                } else {
                  items2 = [];
                }
                return items2;
              }),
            );
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
        class X {
          constructor() {
            questions = clarification.questions;
            return Object.fromEntries(
              questions.flatMap((default_entities) => {
                if (null != default_entities.default_entities) {
                  const items = [,];
                  ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                  const items1 = [items];
                  let items2 = items1;
                } else {
                  items2 = [];
                }
                return items2;
              }),
            );
          }
        }
        let isImageQuestionResult = obj6.isImageQuestion(tmp25);
        cResult[7] = tmp25;
        cResult[8] = isImageQuestionResult;
        const tmp27 = isImageQuestionResult;
      } else {
        class X {
          constructor() {
            questions = clarification.questions;
            return Object.fromEntries(
              questions.flatMap((default_entities) => {
                if (null != default_entities.default_entities) {
                  const items = [,];
                  ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                  const items1 = [items];
                  let items2 = items1;
                } else {
                  items2 = [];
                }
                return items2;
              }),
            );
          }
        }
      }
      isImageQuestionResult = tmp27;
      if (true === clarification.questions[bound].multi_select) {
        class X {
          constructor() {
            questions = clarification.questions;
            return Object.fromEntries(
              questions.flatMap((default_entities) => {
                if (null != default_entities.default_entities) {
                  const items = [,];
                  ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                  const items1 = [items];
                  let items2 = items1;
                } else {
                  items2 = [];
                }
                return items2;
              }),
            );
          }
        }
        if (tmp30 == null) {
          class X {
            constructor() {
              questions = clarification.questions;
              return Object.fromEntries(
                questions.flatMap((default_entities) => {
                  if (null != default_entities.default_entities) {
                    const items = [,];
                    ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                    const items1 = [items];
                    let items2 = items1;
                  } else {
                    items2 = [];
                  }
                  return items2;
                }),
              );
            }
          }
        }
      } else {
        class X {
          constructor() {
            questions = clarification.questions;
            return Object.fromEntries(
              questions.flatMap((default_entities) => {
                if (null != default_entities.default_entities) {
                  const items = [,];
                  ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                  const items1 = [items];
                  let items2 = items1;
                } else {
                  items2 = [];
                }
                return items2;
              }),
            );
          }
        }
        obj7.answeredOptionIds(first1[tmp25.id]);
      }
      const tmp6Result8 = onInputFocusChange(noop.useState(tmp17), 2);
      const conjureOwnImages = tmp(tmp2[11]).useConjureOwnImages(projectId, first1, tmp9);
      if (cResult[9] === first1) {
        class X {
          constructor() {
            questions = clarification.questions;
            return Object.fromEntries(
              questions.flatMap((default_entities) => {
                if (null != default_entities.default_entities) {
                  const items = [,];
                  ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                  const items1 = [items];
                  let items2 = items1;
                } else {
                  items2 = [];
                }
                return items2;
              }),
            );
          }
        }
      }
      function fe(arg0) {
        if (null != onSubmit) {
          const obj = {};
          const merged = Object.assign(first1);
          obj[id.id] = arg0;
          closure_6(obj);
          const result = ConjureClarification.followingClarificationStep(clarification, obj, bound);
          if (null == result) {
            const tmp18Result = ConjureClarification;
            const result1 = tmp18Result.submitClarificationAnswers(projectId, clarification, obj, first2, onSubmit);
          } else {
            closure_13(result);
          }
        }
      }
      cResult[9] = first1;
      cResult[10] = clarification;
      cResult[11] = bound;
      cResult[12] = first2;
      cResult[13] = onSubmit;
      cResult[14] = projectId;
      cResult[15] = clarification.questions[bound].id;
      cResult[16] = fe;
      let tmpResult = tmp(tmp2[11]);
    }
  : function ConjureClarificationCard(projectId) {
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
      [tmp10, c9] = noop.useState(() => {
        const questions = clarification.questions;
        return Object.fromEntries(
          questions.flatMap((default_entities) => {
            if (null != default_entities.default_entities) {
              const items = [,];
              ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
              const items1 = [items];
              let items2 = items1;
            } else {
              items2 = [];
            }
            return items2;
          }),
        );
      });
      const tmp9 = _slicedToArray(
        noop.useState(() => {
          const questions = clarification.questions;
          return Object.fromEntries(
            questions.flatMap((default_entities) => {
              if (null != default_entities.default_entities) {
                const items = [,];
                ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
                const items1 = [items];
                let items2 = items1;
              } else {
                items2 = [];
              }
              return items2;
            }),
          );
        }),
        2,
      );
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
          const obj = {};
          const merged = Object.assign(first);
          obj[id.id] = arg0;
          closure_6(obj);
          const result = ConjureClarification.followingClarificationStep(clarification, obj, bound);
          if (null == result) {
            const tmp18Result = ConjureClarification;
            const result1 = tmp18Result.submitClarificationAnswers(projectId, clarification, obj, first1, onSubmit);
          } else {
            closure_13(result);
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
      let str = tmp6[tmp18.id];
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
        const tmp20Result8 = tmp20(geKm7t[12]);
        multiSelectAnswerResult = tmp20Result8.multiSelectAnswer(
          tmp18,
          answeredOptionIdsResult,
          str,
          conjureOwnImages.multiPartFor(tmp18),
        );
      }
      let entityAnswerResult = null;
      if (null != clarification.questions[bound].input) {
        const tmp20Result9 = tmp20(geKm7t[12]);
        const input = tmp18.input;
        let tmp33 = tmp10[tmp18.id];
        if (tmp33 == null) {
          tmp33 = c10;
        }
        entityAnswerResult = tmp20Result9.entityAnswer(input, tmp33, str, tmp12[tmp18.id]);
      }
      const items3 = [clarification.questions[bound].id];
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
      const tmp20Result7 = projectId(geKm7t[11]);
      let result = projectId(geKm7t[12]).clarificationDraftAnswer(entityAnswerResult, multiSelectAnswerResult, str);
      c22 = result;
      const items4 = [result, callback];
      let tmp41 = result;
      const callback4 = obj.useCallback(() => {
        if (null != c22) {
          callback(tmp);
        }
      }, items4);
      if (result == null) {
        let tmp42 = null;
        if (null == entityAnswerResult) {
          tmp42 = null;
          if (null == multiSelectAnswerResult) {
            let tmp43 = first[tmp18.id];
            if (tmp43 == null) {
              tmp43 = null;
            }
            tmp42 = tmp43;
          }
        }
        tmp41 = tmp42;
      }
      c23 = tmp41;
      let tmp44;
      if (0 === bound) {
        if (!tmp16) {
          tmp44 = onBack;
        }
      }
      let tmp45 = null;
      if (!isImageQuestionResult) {
        let obj3 = {
          size: "md",
          placeholder: tmp20(geKm7t[12]).clarificationDraftPlaceholder(tmp18),
          accessibilityLabel: null,
          value: null,
          onChange: null,
          onSubmitEditing: null,
          onFocus: null,
          onBlur: null,
          returnKeyType: "send",
        };
        let intl = tmp20(geKm7t[6]).intl;
        const obj4 = { question: tmp18.question };
        obj3.accessibilityLabel = intl.formatToPlainString(clarification(geKm7t[7])["4JeYPB"], obj4);
        obj3.value = str;
        obj3.onChange = function onChange(arg0) {
          closure_0 = arg0;
          return _undefined((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[id.id] = closure_0;
            return obj;
          });
        };
        obj3.onSubmitEditing = callback4;
        obj3.onFocus = function onFocus() {
          let tmpResult;
          if (_slicedToArray != null) {
            tmpResult = tmp(true);
          }
          return tmpResult;
        };
        obj3.onBlur = function onBlur() {
          let tmpResult;
          if (_slicedToArray != null) {
            tmpResult = tmp(false);
          }
          return tmpResult;
        };
        tmp45 = closure_6(tmp20(geKm7t[13]).TextInput, obj3);
        const tmp20Result11 = tmp20(geKm7t[12]);
      }
      let obj5 = { style: tmp.card, children: null };
      let obj6 = { style: tmp.footer, children: null };
      const obj7 = { style: tmp.customField, children: null };
      let tmp52 = null;
      const tmp20Result10 = projectId(geKm7t[12]);
      if (clarification.questions.length > 1) {
        const obj8 = { variant: "text-xs/semibold", color: "text-muted", children: null };
        let intl2 = tmp20(geKm7t[6]).intl;
        const obj9 = { index: bound + 1, total: length };
        obj8.children = intl2.formatToPlainString(tmp49(geKm7t[7]).yzYUjq, obj9);
        tmp52 = closure_6(tmp20(geKm7t[14]).Text, obj8);
      }
      const items5 = [
        tmp52,
        closure_6(projectId(geKm7t[14]).Text, {
          variant: "text-md/semibold",
          color: "text-default",
          accessibilityRole: "header",
          children: clarification.questions[bound].question,
        }),
      ];
      obj7.children = items5;
      const items6 = [c7(first, obj7)];
      let tmp54Result = null;
      if (null != onDismiss) {
        const obj11 = {
          variant: "tertiary",
          size: "sm",
          icon: tmp54(tmp20(geKm7t[16]).XSmallIcon, { size: "sm" }),
          onPress: onDismiss,
          accessibilityLabel: null,
        };
        const intl3 = tmp20(geKm7t[6]).intl;
        obj11.accessibilityLabel = intl3.string(tmp49(geKm7t[7]).qVXlk0);
        tmp54Result = tmp54(tmp20(geKm7t[15]).IconButton, obj11);
      }
      items6[1] = tmp54Result;
      obj6.children = items6;
      const items7 = [c7(first, obj6), , , , , , ,];
      let tmp54Result8 = null;
      if (true === clarification.questions[bound].multi_select) {
        const obj12 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl4 = tmp20(geKm7t[6]).intl;
        obj12.children = intl4.string(tmp49(geKm7t[7]).tE8qbz);
        tmp54Result8 = tmp54(tmp20(geKm7t[14]).Text, obj12);
      }
      items7[1] = tmp54Result8;
      if (isImageQuestionResult) {
        const obj13 = {
          projectId,
          question: tmp18,
          selectedIds: answeredOptionIdsResult,
          disabled: tmp16,
          onPick: callback1,
          own: conjureOwnImages.controlsFor(tmp18, tmp16),
        };
        let tmp54Result9 = tmp54(tmp49(geKm7t[17]), obj13);
        const tmp49Result = tmp49(geKm7t[17]);
      } else if (tmp19) {
        const obj14 = { hasIcons: false, children: null };
        const options = tmp18.options;
        obj14.children = options.map((label) => {
          closure_0 = label;
          const obj = { label: label.label, subLabel: null, checked: null, disabled: null, onPress: null };
          let str = "";
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
          obj.checked = _undefined5.includes(label.id);
          obj.disabled = disabled;
          obj.onPress = function onPress() {
            return callback1(closure_0);
          };
          return closure_6(projectId(onSubmit[19]).TableCheckboxRow, obj, label.id);
        });
        tmp54Result9 = tmp54(tmp20(geKm7t[18]).TableRowGroup, obj14);
      } else {
        const options1 = tmp18.options;
        tmp54Result9 = options1.map((answer) => {
          closure_0 = answer;
          const obj = {
            onPress() {
              return callback1(closure_0);
            },
            disabled,
            accessibilityLabel: null,
            children: null,
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
          const items = [
            closure_6(projectId(onSubmit[14]).Text, {
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
            tmp8Result = closure_6(projectId(onSubmit[14]).Text, obj5);
          }
          items[1] = tmp8Result;
          obj3.children = items;
          const items1 = [_undefined(first, obj3)];
          let tmp8Result2 = null;
          if (null != answer.detail) {
            tmp8Result2 = null;
            if ("" !== answer.detail) {
              const obj6 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
              tmp8Result2 = closure_6(projectId(onSubmit[14]).Text, obj6);
            }
          }
          items1[1] = tmp8Result2;
          obj.children = items1;
          return _undefined(projectId(onSubmit[20]).Card, obj, answer.id);
        });
      }
      items7[2] = tmp54Result9;
      let tmp54Result10 = null;
      if (null != clarification.questions[bound].input) {
        const obj15 = { projectId, question: tmp18, value: null, disabled: null, onChange: null, fallback: null };
        let tmp61 = tmp10[tmp18.id];
        if (tmp61 == null) {
          tmp61 = c10;
        }
        obj15.value = tmp61;
        obj15.disabled = tmp16;
        obj15.onChange = callback3;
        let tmp62 = null;
        if (false === tmp18.allow_custom) {
          tmp62 = tmp45;
        }
        obj15.fallback = tmp62;
        tmp54Result10 = tmp54(tmp49(geKm7t[21]), obj15);
        const tmp49Result3 = tmp49(geKm7t[21]);
      }
      items7[3] = tmp54Result10;
      let tmp63 = null;
      if (true === clarification.questions[bound].link) {
        let arr11 = tmp10[tmp18.id];
        if (arr11 == null) {
          arr11 = c10;
        }
        tmp63 = null;
        if (arr11.length > 0) {
          if (null == first1[tmp18.id]) {
            const obj16 = { style: tmp.linkConfigure, children: null };
            const obj17 = { variant: "tertiary", size: "sm", text: null, disabled: null, onPress: null };
            const intl5 = tmp20(geKm7t[6]).intl;
            obj17.text = intl5.string(tmp49(geKm7t[7]).eCzCxC);
            obj17.disabled = tmp16;
            obj17.onPress = function onPress() {
              return closure_12((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[id.id] = "auto";
                return obj;
              });
            };
            obj16.children = tmp54(tmp20(geKm7t[22]).Button, obj17);
            let tmp54Result11 = tmp54(tmp51, obj16);
          } else {
            let str2 = first1[tmp18.id];
            if (str2 == null) {
              str2 = "auto";
            }
            const obj18 = {
              value: str2,
              disabled: tmp16,
              onChange(arg0) {
                closure_0 = arg0;
                return closure_12((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[id.id] = closure_0;
                  return obj;
                });
              },
            };
            tmp54Result11 = tmp54(tmp49(geKm7t[23]), obj18);
            const tmp49Result4 = tmp49(geKm7t[23]);
          }
        }
      }
      items7[4] = tmp63;
      let tmp54Result12 = null;
      if (null != clarification.questions[bound].note) {
        const obj19 = { variant: "text-xs/normal", color: "text-muted", children: tmp18.note };
        tmp54Result12 = tmp54(tmp20(geKm7t[14]).Text, obj19);
      }
      items7[5] = tmp54Result12;
      let tmp68 = null;
      if (false !== clarification.questions[bound].allow_custom) {
        tmp68 = tmp45;
      }
      items7[6] = tmp68;
      if (clarification.questions.length <= 1) {
        if (!tmp19) {
          if (!isImageQuestionResult) {
            if (null == tmp18.input) {
              if (null == onBack) {
                let tmp48Result = null;
                const tmp20Result12 = tmp20(geKm7t[12]);
              }
              items7[7] = tmp48Result;
              obj5.children = items7;
              return tmp48(tmp50, obj5);
            }
          }
        }
      }
      const obj20 = { style: tmp.actions, children: null };
      if (bound <= 0) {
        let tmp54Result14 = null;
        const items8 = [tmp54Result14];
        if (hideSubmit) {
          items8[1] = null;
          obj20.children = items8;
          tmp48Result = tmp48(tmp51, obj20);
        } else {
          if (!tmp16) {
            tmp16 = null == tmp41;
          }
          const obj21 = { variant: "primary", size: "sm", disabled: tmp16, text: null, onPress: null };
          if (bound === length - 1) {
            if (submitText == null) {
              const intl8 = tmp20(geKm7t[6]).intl;
              geKm7t = tmp20(geKm7t[6]).t.geKm7t;
              submitText = intl8.string(geKm7t);
            }
            let stringResult = submitText;
          } else {
            const intl7 = tmp20(geKm7t[6]).intl;
            stringResult = intl7.string(tmp49(geKm7t[7]).w1nRmT);
          }
          obj21.text = stringResult;
          obj21.onPress = function onPress() {
            if (null != c23) {
              callback(tmp);
            }
          };
          tmp54(tmp20(geKm7t[22]).Button, obj21);
        }
      }
      const obj22 = { style: tmp.backAction, children: null };
      if (backText == null) {
        const intl6 = tmp20(geKm7t[6]).intl;
        backText = intl6.string(tmp49(geKm7t[7]).Pk5lfA);
      }
      const obj23 = { variant: "tertiary", size: "sm", text: backText, onPress: null };
      if (tmp44 == null) {
        tmp44 = callback2;
      }
      obj23.onPress = tmp44;
      obj22.children = closure_6(projectId(geKm7t[22]).Button, obj23);
      tmp54Result14 = tmp54(tmp51, obj22);
    };
