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
const createStyles = fn(5306);
let obj2 = {
  card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 },
  optionHeader: null,
  footer: null,
  customField: null,
  actions: null,
  backAction: null,
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
  c18 = undefined;
  let callback;
  let callback1;
  let callback2;
  c22 = undefined;
  c23 = undefined;
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
  const tmp11 = _slicedToArray(noop.useState({}), 2);
  closure_10 = tmp11[1];
  let geKm7t = onSubmit;
  const obj2 = clarification(onSubmit[8])(projectId, clarification, tmp10);
  const builds = obj2.builds;
  const tmp13 = _slicedToArray(noop.useState(0), 2);
  closure_12 = tmp13[1];
  let tmp14 = null == onSubmit;
  const disabled = tmp14;
  const bound = Math.min(tmp13[0], length - 1);
  let id = tmp16;
  const linkForResult = obj2.linkFor(clarification.questions[bound].id);
  closure_16 = tmp18;
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
  const isImageQuestionResult = projectId(onSubmit[9]).isImageQuestion(clarification.questions[bound]);
  c17 = isImageQuestionResult;
  if (true === clarification.questions[bound].multi_select) {
    let intl = tmp19(geKm7t[6]).intl;
    let stringResult = intl.string(tmp12(geKm7t[7]).tE8qbz);
  } else {
    stringResult = tmp19(geKm7t[9]).uploadHint(tmp16);
    const tmp19Result = tmp19(geKm7t[9]);
  }
  if (true === clarification.questions[bound].multi_select) {
    let tmp23 = tmp8[tmp16.id];
    if (tmp23 == null) {
      tmp23 = c9;
    }
    let answeredOptionIdsResult = tmp23;
  } else {
    answeredOptionIdsResult = tmp19(geKm7t[9]).answeredOptionIds(first[tmp16.id]);
    const tmp19Result12 = tmp19(geKm7t[9]);
  }
  c18 = answeredOptionIdsResult;
  let obj3 = projectId(onSubmit[9]);
  const conjureOwnImages = projectId(geKm7t[10]).useConjureOwnImages(projectId, first, tmp4);
  items = [clarification, bound, builds, onSubmit, projectId];
  callback = obj.useCallback((arg0) => {
    if (null != onSubmit) {
      const result = ConjureClarification.followingClarificationStep(clarification, arg0, bound);
      if (null == result) {
        const tmp3Result = ConjureClarification;
        result1 = tmp3Result.submitClarificationAnswers(projectId, clarification, arg0, builds, onSubmit);
      } else {
        closure_12(result);
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
    if (closure_16) {
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
      if (c17) {
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
  const items4 = [tmp14, bound];
  const callback3 = obj.useCallback(() => {
    _undefined((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[id.id] = "";
      return obj;
    });
    callback1(ConjureImageOptions.noImageAnswer());
  }, items3);
  let str = tmp6[tmp16.id];
  const callback4 = obj.useCallback(() => {
    let tmp = closure_13;
    if (!closure_13) {
      tmp = 0 === bound;
    }
    if (!tmp) {
      closure_12(bound - 1);
    }
  }, items4);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (true === clarification.questions[bound].multi_select) {
    const tmp19Result14 = tmp19(geKm7t[11]);
    multiSelectAnswerResult = tmp19Result14.multiSelectAnswer(
      tmp16,
      answeredOptionIdsResult,
      str,
      conjureOwnImages.multiPartFor(tmp16),
    );
  }
  let entityAnswerResult = null;
  if (null != clarification.questions[bound].input) {
    const tmp19Result15 = tmp19(geKm7t[11]);
    const input = tmp16.input;
    let tmp35 = tmp10[tmp16.id];
    if (tmp35 == null) {
      tmp35 = closure_10;
    }
    entityAnswerResult = tmp19Result15.entityAnswer(input, tmp35, str, tmp11[0][tmp16.id]);
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
    closure_10((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[user.id] = closure_1;
      return obj;
    });
  }, items5);
  const tmp19Result13 = projectId(geKm7t[10]);
  let uploadNoteAnswerResult = multiSelectAnswerResult;
  if (multiSelectAnswerResult == null) {
    uploadNoteAnswerResult = tmp19(geKm7t[11]).uploadNoteAnswer(tmp16, first[tmp16.id], str);
    const tmp19Result17 = tmp19(geKm7t[11]);
  }
  let result = projectId(geKm7t[11]).clarificationDraftAnswer(entityAnswerResult, uploadNoteAnswerResult, str);
  c22 = result;
  const items6 = [result, callback1];
  let tmp44 = result;
  const callback6 = obj.useCallback(() => {
    if (null != c22) {
      callback1(tmp);
    }
  }, items6);
  if (result == null) {
    let tmp45 = null;
    if (null == entityAnswerResult) {
      tmp45 = null;
      if (null == multiSelectAnswerResult) {
        let tmp46 = first[tmp16.id];
        if (tmp46 == null) {
          tmp46 = null;
        }
        tmp45 = tmp46;
      }
    }
    tmp44 = tmp45;
  }
  c23 = tmp44;
  result1 = null;
  if (null == tmp44) {
    result1 = tmp19(geKm7t[11]).skippedClarificationAnswers(clarification, first, bound);
    const tmp19Result18 = tmp19(geKm7t[11]);
  }
  let tmp49;
  if (0 === bound) {
    if (!tmp14) {
      tmp49 = onBack;
    }
  }
  if (!isImageQuestionResult) {
    const obj4 = {
      size: "md",
      placeholder: tmp19(geKm7t[11]).clarificationDraftPlaceholder(tmp16),
      accessibilityLabel: null,
      value: null,
      onChange: null,
      onSubmitEditing: null,
      onFocus: null,
      onBlur: null,
      returnKeyType: "send",
    };
    let intl2 = tmp19(geKm7t[6]).intl;
    let obj5 = { question: tmp16.question };
    obj4.accessibilityLabel = intl2.formatToPlainString(tmp12(geKm7t[7])["4JeYPB"], obj5);
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
    obj4.onSubmitEditing = callback6;
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
    let tmp50 = closure_6(tmp19(geKm7t[12]).TextInput, obj4);
    const tmp19Result19 = tmp19(geKm7t[11]);
  } else {
    tmp50 = null;
  }
  let obj6 = { style: tmp.card, holdsKeyboard: true, children: null };
  const obj7 = { style: tmp.footer, children: null };
  const obj8 = { style: tmp.customField, children: null };
  let tmp55 = null;
  const tmp19Result16 = projectId(geKm7t[11]);
  if (clarification.questions.length > 1) {
    const obj9 = { variant: "body-xs/semibold", color: "text-muted", children: null };
    const intl3 = tmp19(geKm7t[6]).intl;
    const obj10 = { index: bound + 1, total: length };
    obj9.children = intl3.formatToPlainString(tmp12(geKm7t[7]).yzYUjq, obj10);
    tmp55 = closure_6(tmp19(geKm7t[14]).Text, obj9);
  }
  const items7 = [
    tmp55,
    closure_6(projectId(geKm7t[14]).Text, {
      variant: "body-md/semibold",
      color: "text-default",
      accessibilityRole: "header",
      children: clarification.questions[bound].question,
    }),
  ];
  obj8.children = items7;
  const items8 = [c7(first, obj8)];
  let tmp57Result = null;
  if (null != onDismiss) {
    const obj12 = {
      variant: "tertiary",
      size: "sm",
      icon: tmp57(tmp19(geKm7t[16]).XSmallIcon, { size: "sm" }),
      onPress: onDismiss,
      accessibilityLabel: null,
    };
    const intl4 = tmp19(geKm7t[6]).intl;
    obj12.accessibilityLabel = intl4.string(tmp12(geKm7t[7]).qVXlk0);
    tmp57Result = tmp57(tmp19(geKm7t[15]).IconButton, obj12);
  }
  items8[1] = tmp57Result;
  obj7.children = items8;
  const items9 = [c7(first, obj7), , , , , , , ,];
  let tmp57Result9 = null;
  if (null != stringResult) {
    const obj13 = { variant: "body-xs/normal", color: "text-muted", children: stringResult };
    tmp57Result9 = tmp57(tmp19(geKm7t[14]).Text, obj13);
  }
  items9[1] = tmp57Result9;
  if (isImageQuestionResult) {
    const obj14 = {
      projectId,
      question: tmp16,
      selectedIds: answeredOptionIdsResult,
      disabled: tmp14,
      onPick: callback2,
      own: conjureOwnImages.controlsFor(tmp16, tmp14),
    };
    let tmp57Result10 = tmp57(tmp12(geKm7t[17]), obj14);
    const tmp12Result4 = tmp12(geKm7t[17]);
  } else if (tmp18) {
    const obj15 = { hasIcons: false, children: null };
    const options = tmp16.options;
    obj15.children = options.map((label) => {
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
      obj.checked = _undefined4.includes(label.id);
      obj.disabled = disabled;
      obj.onPress = function onPress() {
        return callback2(closure_0);
      };
      return closure_6(projectId(onSubmit[19]).TableCheckboxRow, obj, label.id);
    });
    tmp57Result10 = tmp57(tmp19(geKm7t[18]).TableRowGroup, obj15);
  } else {
    const options1 = tmp16.options;
    tmp57Result10 = options1.map((answer) => {
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
        closure_6(projectId(onSubmit[14]).Text, {
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
        tmp8Result = closure_6(projectId(onSubmit[14]).Text, obj5);
      }
      items[1] = tmp8Result;
      obj3.children = items;
      const items1 = [_undefined(first, obj3)];
      let tmp8Result2 = null;
      if (null != answer.detail) {
        tmp8Result2 = null;
        if ("" !== answer.detail) {
          const obj6 = { variant: "body-xs/normal", color: "text-muted", children: answer.detail };
          tmp8Result2 = closure_6(projectId(onSubmit[14]).Text, obj6);
        }
      }
      items1[1] = tmp8Result2;
      obj.children = items1;
      return _undefined(projectId(onSubmit[20]).Card, obj, answer.id);
    });
  }
  items9[2] = tmp57Result10;
  let tmp57Result11 = null;
  if (null != clarification.questions[bound].input) {
    const obj16 = { projectId, question: tmp16, value: null, disabled: null, onChange: null, fallback: null };
    let tmp64 = tmp10[tmp16.id];
    if (tmp64 == null) {
      tmp64 = closure_10;
    }
    obj16.value = tmp64;
    obj16.disabled = tmp14;
    obj16.onChange = callback5;
    const tmp12Result5 = tmp12(geKm7t[21]);
    let tmp65 = null;
    if (!tmp19Result20.clarificationShowsOtherAnswer(tmp16)) {
      tmp65 = tmp50;
    }
    obj16.fallback = tmp65;
    tmp57Result11 = tmp57(tmp12Result5, obj16);
    tmp19Result20 = tmp19(geKm7t[11]);
  }
  items9[3] = tmp57Result11;
  let tmp57Result12 = null;
  if (null != linkForResult) {
    const obj17 = { link: linkForResult, disabled: tmp14 };
    tmp57Result12 = tmp57(tmp12(geKm7t[22]), obj17);
  }
  items9[4] = tmp57Result12;
  let tmp57Result13 = null;
  if (null != clarification.questions[bound].note) {
    const obj18 = { variant: "body-xs/normal", color: "text-muted", children: tmp16.note };
    tmp57Result13 = tmp57(tmp19(geKm7t[14]).Text, obj18);
  }
  items9[5] = tmp57Result13;
  const obj11 = {
    variant: "body-md/semibold",
    color: "text-default",
    accessibilityRole: "header",
    children: clarification.questions[bound].question,
  };
  const tmp12Result = clarification(geKm7t[13]);
  let tmp68 = null;
  if (tmp19Result21.clarificationShowsOtherAnswer(clarification.questions[bound])) {
    tmp68 = tmp50;
  }
  items9[6] = tmp68;
  let tmp57Result14 = null;
  if (true === clarification.questions[bound].upload) {
    const obj19 = { style: tmp.noImage, children: null };
    const obj20 = { variant: "tertiary", size: "sm", text: null, disabled: null, onPress: null };
    const intl5 = tmp19(geKm7t[6]).intl;
    obj20.text = intl5.string(tmp12(geKm7t[7]).zxSq2q);
    obj20.disabled = tmp14;
    obj20.onPress = callback3;
    obj19.children = tmp57(tmp19(geKm7t[23]).Button, obj20);
    tmp57Result14 = tmp57(tmp54, obj19);
  }
  items9[7] = tmp57Result14;
  if (clarification.questions.length <= 1) {
    if (!tmp18) {
      if (!isImageQuestionResult) {
        if (null == tmp16.input) {
          if (null == onBack) {
            if (true !== tmp16.optional) {
              let tmp52Result = null;
              const tmp19Result22 = tmp19(geKm7t[11]);
            }
            items9[8] = tmp52Result;
            obj6.children = items9;
            return tmp52(tmp12Result, obj6);
          }
        }
      }
    }
  }
  const obj21 = { style: tmp.actions, children: null };
  if (bound <= 0) {
    let tmp57Result16 = null;
    const items10 = [tmp57Result16];
    if (hideSubmit) {
      items10[1] = null;
      obj21.children = items10;
      tmp52Result = tmp52(tmp54, obj21);
    } else {
      if (!tmp14) {
        tmp14 = null == tmp44 && !tmp48;
        const tmp73 = null == tmp44 && !tmp48;
      }
      const obj22 = { variant: "primary", size: "sm", disabled: tmp14, text: null, onPress: null };
      if (bound === length - 1) {
        if (submitText == null) {
          const intl8 = tmp19(geKm7t[6]).intl;
          geKm7t = tmp19(geKm7t[6]).t.geKm7t;
          submitText = intl8.string(geKm7t);
        }
        let stringResult1 = submitText;
      } else {
        const intl7 = tmp19(geKm7t[6]).intl;
        const tmp12Result6 = tmp12(geKm7t[7]);
        stringResult1 = intl7.string(tmp48 ? tmp12Result6.ZcrbKz : tmp12Result6.w1nRmT);
      }
      obj22.text = stringResult1;
      obj22.onPress = function onPress() {
        if (null != c23) {
          callback1(tmp);
        } else if (null != result1) {
          closure_6(result1);
          callback(result1);
        }
      };
      tmp57(tmp19(geKm7t[23]).Button, obj22);
    }
  }
  const obj23 = { style: tmp.backAction, children: null };
  if (backText == null) {
    const intl6 = tmp19(geKm7t[6]).intl;
    backText = intl6.string(tmp12(geKm7t[7]).Pk5lfA);
  }
  const obj24 = { variant: "tertiary", size: "sm", text: backText, onPress: null };
  if (tmp49 == null) {
    tmp49 = callback4;
  }
  obj24.onPress = tmp49;
  obj23.children = closure_6(projectId(geKm7t[23]).Button, obj24);
  tmp57Result16 = tmp57(tmp54, obj23);
}
