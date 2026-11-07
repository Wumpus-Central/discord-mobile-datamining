// discord_app/modules/conjure/clarification/native/ConjureClarificationCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConjureClarification from "../ConjureClarification.tsx";
import ConjureImageOptions from "../ConjureImageOptions.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5140);
let obj2 = {
  card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 },
  optionHeader: null,
  footer: null,
  customField: null,
  actions: null,
  backAction: null,
  linkConfigure: null,
  noImage: null,
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
obj2.noImage = { alignSelf: "flex-start" };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = [];
let closure_10 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default function ConjureClarificationCard(projectId) {
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
  let callback2;
  c23 = undefined;
  c24 = undefined;
  let result1;
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
          items = [,];
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
            items = [,];
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
  const isImageQuestionResult = projectId(onSubmit[8]).isImageQuestion(clarification.questions[bound]);
  c18 = isImageQuestionResult;
  if (true === clarification.questions[bound].multi_select) {
    let intl = tmp20(geKm7t[6]).intl;
    let stringResult = intl.string(clarification(geKm7t[7]).tE8qbz);
  } else {
    stringResult = tmp20(geKm7t[8]).uploadHint(tmp18);
    const tmp20Result = tmp20(geKm7t[8]);
  }
  if (true === clarification.questions[bound].multi_select) {
    let tmp25 = tmp8[tmp18.id];
    if (tmp25 == null) {
      tmp25 = c9;
    }
    let answeredOptionIdsResult = tmp25;
  } else {
    answeredOptionIdsResult = tmp20(geKm7t[8]).answeredOptionIds(first[tmp18.id]);
    const tmp20Result10 = tmp20(geKm7t[8]);
  }
  c19 = answeredOptionIdsResult;
  const obj2 = projectId(onSubmit[8]);
  const conjureOwnImages = projectId(geKm7t[9]).useConjureOwnImages(projectId, first, tmp4);
  items = [clarification, bound, first1, onSubmit, projectId];
  callback = obj.useCallback((arg0) => {
    if (null != onSubmit) {
      const result = ConjureClarification.followingClarificationStep(clarification, arg0, bound);
      if (null == result) {
        const tmp3Result = ConjureClarification;
        result1 = tmp3Result.submitClarificationAnswers(projectId, clarification, arg0, first1, onSubmit);
      } else {
        closure_13(result);
      }
    }
  }, items);
  let items1 = [callback, first, onSubmit, clarification.questions[bound].id];
  callback1 = obj.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_6(obj);
      callback(obj);
    }
  }, items1);
  let items2 = [
    true === clarification.questions[bound].multi_select,
    isImageQuestionResult,
    clarification.questions[bound],
    callback1,
  ];
  callback2 = obj.useCallback((arg0) => {
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
        callback1(obj);
      }
    }
  }, items2);
  const items3 = [clarification.questions[bound].id, callback1];
  const items4 = [tmp16, bound];
  const callback3 = obj.useCallback(() => {
    _undefined((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[id.id] = "";
      return obj;
    });
    callback1(ConjureImageOptions.noImageAnswer());
  }, items3);
  let str = tmp6[tmp18.id];
  const callback4 = obj.useCallback(() => {
    let tmp = closure_14;
    if (!closure_14) {
      tmp = 0 === bound;
    }
    if (!tmp) {
      closure_13(bound - 1);
    }
  }, items4);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (true === clarification.questions[bound].multi_select) {
    const tmp20Result12 = tmp20(geKm7t[10]);
    multiSelectAnswerResult = tmp20Result12.multiSelectAnswer(
      tmp18,
      answeredOptionIdsResult,
      str,
      conjureOwnImages.multiPartFor(tmp18),
    );
  }
  let entityAnswerResult = null;
  if (null != clarification.questions[bound].input) {
    const tmp20Result13 = tmp20(geKm7t[10]);
    const input = tmp18.input;
    let tmp37 = tmp10[tmp18.id];
    if (tmp37 == null) {
      tmp37 = c10;
    }
    entityAnswerResult = tmp20Result13.entityAnswer(input, tmp37, str, tmp12[tmp18.id]);
  }
  const items5 = [clarification.questions[bound].id];
  const callback5 = obj.useCallback((arg0, arg1) => {
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
  }, items5);
  const tmp20Result11 = projectId(geKm7t[9]);
  let uploadNoteAnswerResult = multiSelectAnswerResult;
  if (multiSelectAnswerResult == null) {
    uploadNoteAnswerResult = tmp20(geKm7t[10]).uploadNoteAnswer(tmp18, first[tmp18.id], str);
    const tmp20Result15 = tmp20(geKm7t[10]);
  }
  let result = projectId(geKm7t[10]).clarificationDraftAnswer(entityAnswerResult, uploadNoteAnswerResult, str);
  c23 = result;
  const items6 = [result, callback1];
  let tmp46 = result;
  const callback6 = obj.useCallback(() => {
    if (null != c23) {
      callback1(tmp);
    }
  }, items6);
  if (result == null) {
    let tmp47 = null;
    if (null == entityAnswerResult) {
      tmp47 = null;
      if (null == multiSelectAnswerResult) {
        let tmp48 = first[tmp18.id];
        if (tmp48 == null) {
          tmp48 = null;
        }
        tmp47 = tmp48;
      }
    }
    tmp46 = tmp47;
  }
  c24 = tmp46;
  result1 = null;
  if (null == tmp46) {
    result1 = tmp20(geKm7t[10]).skippedClarificationAnswers(clarification, first, bound);
    const tmp20Result16 = tmp20(geKm7t[10]);
  }
  let tmp51;
  if (0 === bound) {
    if (!tmp16) {
      tmp51 = onBack;
    }
  }
  if (!isImageQuestionResult) {
    let obj3 = {
      size: "md",
      placeholder: tmp20(geKm7t[10]).clarificationDraftPlaceholder(tmp18),
      accessibilityLabel: null,
      value: null,
      onChange: null,
      onSubmitEditing: null,
      onFocus: null,
      onBlur: null,
      returnKeyType: "send",
    };
    let intl2 = tmp20(geKm7t[6]).intl;
    const obj4 = { question: tmp18.question };
    obj3.accessibilityLabel = intl2.formatToPlainString(clarification(geKm7t[7])["4JeYPB"], obj4);
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
    obj3.onSubmitEditing = callback6;
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
    let tmp52 = closure_6(tmp20(geKm7t[11]).TextInput, obj3);
    const tmp20Result17 = tmp20(geKm7t[10]);
  } else {
    tmp52 = null;
  }
  let obj5 = { style: tmp.card, holdsKeyboard: true, children: null };
  let obj6 = { style: tmp.footer, children: null };
  const obj7 = { style: tmp.customField, children: null };
  let tmp59 = null;
  const tmp20Result14 = projectId(geKm7t[10]);
  if (clarification.questions.length > 1) {
    const obj8 = { variant: "body-xs/semibold", color: "text-muted", children: null };
    const intl3 = tmp20(geKm7t[6]).intl;
    const obj9 = { index: bound + 1, total: length };
    obj8.children = intl3.formatToPlainString(tmp56(geKm7t[7]).yzYUjq, obj9);
    tmp59 = closure_6(tmp20(geKm7t[13]).Text, obj8);
  }
  const items7 = [
    tmp59,
    closure_6(projectId(geKm7t[13]).Text, {
      variant: "body-md/semibold",
      color: "text-default",
      accessibilityRole: "header",
      children: clarification.questions[bound].question,
    }),
  ];
  obj7.children = items7;
  const items8 = [c7(first, obj7)];
  let tmp61Result = null;
  if (null != onDismiss) {
    const obj11 = {
      variant: "tertiary",
      size: "sm",
      icon: tmp61(tmp20(geKm7t[15]).XSmallIcon, { size: "sm" }),
      onPress: onDismiss,
      accessibilityLabel: null,
    };
    const intl4 = tmp20(geKm7t[6]).intl;
    obj11.accessibilityLabel = intl4.string(tmp56(geKm7t[7]).qVXlk0);
    tmp61Result = tmp61(tmp20(geKm7t[14]).IconButton, obj11);
  }
  items8[1] = tmp61Result;
  obj6.children = items8;
  const items9 = [c7(first, obj6), , , , , , , ,];
  let tmp61Result9 = null;
  if (null != stringResult) {
    const obj12 = { variant: "body-xs/normal", color: "text-muted", children: stringResult };
    tmp61Result9 = tmp61(tmp20(geKm7t[13]).Text, obj12);
  }
  items9[1] = tmp61Result9;
  if (isImageQuestionResult) {
    const obj13 = {
      projectId,
      question: tmp18,
      selectedIds: answeredOptionIdsResult,
      disabled: tmp16,
      onPick: callback2,
      own: conjureOwnImages.controlsFor(tmp18, tmp16),
    };
    let tmp61Result10 = tmp61(tmp56(geKm7t[16]), obj13);
    const tmp56Result = tmp56(geKm7t[16]);
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
      items = [str];
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
        return callback2(closure_0);
      };
      return closure_6(projectId(onSubmit[18]).TableCheckboxRow, obj, label.id);
    });
    tmp61Result10 = tmp61(tmp20(geKm7t[17]).TableRowGroup, obj14);
  } else {
    const options1 = tmp18.options;
    tmp61Result10 = options1.map((answer) => {
      closure_0 = answer;
      const obj = {
        onPress() {
          return callback2(closure_0);
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
      items = [
        closure_6(projectId(onSubmit[13]).Text, {
          variant: "body-sm/semibold",
          color: "text-default",
          children: answer.label,
        }),
      ];
      let tmp8Result = null;
      if (true === answer.recommended) {
        const obj5 = { variant: "body-xs/semibold", color: "text-muted", children: null };
        const intl2 = projectId(onSubmit[6]).intl;
        obj5.children = intl2.string(tmp5(onSubmit[7]).zku6r1);
        tmp8Result = closure_6(projectId(onSubmit[13]).Text, obj5);
      }
      items[1] = tmp8Result;
      obj3.children = items;
      const items1 = [_undefined(first, obj3)];
      let tmp8Result2 = null;
      if (null != answer.detail) {
        tmp8Result2 = null;
        if ("" !== answer.detail) {
          const obj6 = { variant: "body-xs/normal", color: "text-muted", children: answer.detail };
          tmp8Result2 = closure_6(projectId(onSubmit[13]).Text, obj6);
        }
      }
      items1[1] = tmp8Result2;
      obj.children = items1;
      return _undefined(projectId(onSubmit[19]).Card, obj, answer.id);
    });
  }
  items9[2] = tmp61Result10;
  let tmp61Result11 = null;
  if (null != clarification.questions[bound].input) {
    const obj15 = { projectId, question: tmp18, value: null, disabled: null, onChange: null, fallback: null };
    let tmp68 = tmp10[tmp18.id];
    if (tmp68 == null) {
      tmp68 = c10;
    }
    obj15.value = tmp68;
    obj15.disabled = tmp16;
    obj15.onChange = callback5;
    let tmp69 = null;
    if (false === tmp18.allow_custom) {
      tmp69 = tmp52;
    }
    obj15.fallback = tmp69;
    tmp61Result11 = tmp61(tmp56(geKm7t[20]), obj15);
    const tmp56Result4 = tmp56(geKm7t[20]);
  }
  items9[3] = tmp61Result11;
  let tmp70 = null;
  if (true === clarification.questions[bound].link) {
    let arr13 = tmp10[tmp18.id];
    if (arr13 == null) {
      arr13 = c10;
    }
    tmp70 = null;
    if (arr13.length > 0) {
      if (null == first1[tmp18.id]) {
        const obj16 = { style: tmp.linkConfigure, children: null };
        const obj17 = { variant: "tertiary", size: "sm", text: null, disabled: null, onPress: null };
        const intl5 = tmp20(geKm7t[6]).intl;
        obj17.text = intl5.string(tmp56(geKm7t[7]).eCzCxC);
        obj17.disabled = tmp16;
        obj17.onPress = function onPress() {
          return closure_12((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[id.id] = "auto";
            return obj;
          });
        };
        obj16.children = tmp61(tmp20(geKm7t[21]).Button, obj17);
        let tmp61Result12 = tmp61(tmp58, obj16);
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
        tmp61Result12 = tmp61(tmp56(geKm7t[22]), obj18);
        const tmp56Result5 = tmp56(geKm7t[22]);
      }
    }
  }
  items9[4] = tmp70;
  let tmp61Result13 = null;
  if (null != clarification.questions[bound].note) {
    const obj19 = { variant: "body-xs/normal", color: "text-muted", children: tmp18.note };
    tmp61Result13 = tmp61(tmp20(geKm7t[13]).Text, obj19);
  }
  items9[5] = tmp61Result13;
  let tmp75 = null;
  if (false !== clarification.questions[bound].allow_custom) {
    tmp75 = tmp52;
  }
  items9[6] = tmp75;
  let tmp61Result14 = null;
  if (true === clarification.questions[bound].upload) {
    const obj20 = { style: tmp.noImage, children: null };
    const obj21 = { variant: "tertiary", size: "sm", text: null, disabled: null, onPress: null };
    const intl6 = tmp20(geKm7t[6]).intl;
    obj21.text = intl6.string(tmp56(geKm7t[7]).zxSq2q);
    obj21.disabled = tmp16;
    obj21.onPress = callback3;
    obj20.children = tmp61(tmp20(geKm7t[21]).Button, obj21);
    tmp61Result14 = tmp61(tmp58, obj20);
  }
  items9[7] = tmp61Result14;
  if (clarification.questions.length <= 1) {
    if (!tmp19) {
      if (!isImageQuestionResult) {
        if (null == tmp18.input) {
          if (null == onBack) {
            if (true !== tmp18.optional) {
              let tmp55Result = null;
              const tmp20Result18 = tmp20(geKm7t[10]);
            }
            items9[8] = tmp55Result;
            obj5.children = items9;
            return tmp55(tmp57, obj5);
          }
        }
      }
    }
  }
  const obj22 = { style: tmp.actions, children: null };
  if (bound <= 0) {
    let tmp61Result16 = null;
    const items10 = [tmp61Result16];
    if (hideSubmit) {
      items10[1] = null;
      obj22.children = items10;
      tmp55Result = tmp55(tmp58, obj22);
    } else {
      if (!tmp16) {
        tmp16 = null == tmp46 && !tmp50;
        const tmp80 = null == tmp46 && !tmp50;
      }
      const obj23 = { variant: "primary", size: "sm", disabled: tmp16, text: null, onPress: null };
      if (bound === length - 1) {
        if (submitText == null) {
          const intl9 = tmp20(geKm7t[6]).intl;
          geKm7t = tmp20(geKm7t[6]).t.geKm7t;
          submitText = intl9.string(geKm7t);
        }
        let stringResult1 = submitText;
      } else {
        const intl8 = tmp20(geKm7t[6]).intl;
        const tmp56Result6 = tmp56(geKm7t[7]);
        stringResult1 = intl8.string(tmp50 ? tmp56Result6.ZcrbKz : tmp56Result6.w1nRmT);
      }
      obj23.text = stringResult1;
      obj23.onPress = function onPress() {
        if (null != c24) {
          callback1(tmp);
        } else if (null != result1) {
          closure_6(result1);
          callback(result1);
        }
      };
      tmp61(tmp20(geKm7t[21]).Button, obj23);
    }
  }
  const obj24 = { style: tmp.backAction, children: null };
  if (backText == null) {
    const intl7 = tmp20(geKm7t[6]).intl;
    backText = intl7.string(tmp56(geKm7t[7]).Pk5lfA);
  }
  const obj25 = { variant: "tertiary", size: "sm", text: backText, onPress: null };
  if (tmp51 == null) {
    tmp51 = callback4;
  }
  obj25.onPress = tmp51;
  obj24.children = closure_6(projectId(geKm7t[21]).Button, obj25);
  tmp61Result16 = tmp61(tmp58, obj24);
}
