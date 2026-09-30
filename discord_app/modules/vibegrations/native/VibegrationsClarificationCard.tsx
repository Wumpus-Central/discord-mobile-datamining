// discord_app/modules/vibegrations/native/VibegrationsClarificationCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import VibegrationsClarification from "../lib/VibegrationsClarification.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4866);
let obj2 = {
  card: {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    borderRadius: nativeDefault.radii.md,
    padding: nativeDefault.space.PX_12,
    marginTop: nativeDefault.space.PX_8,
    gap: nativeDefault.space.PX_8,
  },
  optionHeader: null,
  footer: null,
  customField: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
obj2.optionHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.customField = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsClarificationCard.tsx");

export default function VibegrationsClarificationCard(clarification) {
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
  let id = tmp10;
  closure_11 = tmp11;
  let t = dependencyMap;
  const tmp4 = first(noop.useState({}), 2);
  const accessibilityRole = clarification(4578).useCheckboxA11yNative({ checked: false }).accessibilityRole;
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
    multiSelectAnswerResult = tmp12(16599).multiSelectAnswer(tmp10, tmp13, str);
    const tmp12Result = tmp12(16599);
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
  let obj2 = clarification(4578);
  if (null != tmp18) {
    let obj4 = {};
    let merged = Object.assign(first);
    obj4[tmp10.id] = tmp18;
  }
  const obj5 = { style: tmp.card, children: null };
  let obj6 = { style: tmp.footer, children: null };
  let obj7 = { style: tmp.customField, children: null };
  let tmp27Result = null;
  const tmp12Result2 = clarification(16599);
  if (clarification.questions.length > 1) {
    const obj8 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    let intl = tmp12(1115).intl;
    let obj9 = { index: bound + 1, total: length };
    obj8.children = intl.formatToPlainString(onSubmit(3715)["7bypa+"], obj9);
    tmp27Result = tmp27(tmp12(4862).Text, obj8);
  }
  obj7.children = tmp27Result;
  const items4 = [closure_6(c5, obj7)];
  let tmp27Result4 = null;
  if (null != onDismiss) {
    let obj10 = { IconComponent: tmp12(6188).XSmallIcon, onPress: onDismiss, accessibilityLabel: null };
    let intl2 = tmp12(1115).intl;
    obj10.accessibilityLabel = intl2.string(onSubmit(3715).fMdUNR);
    tmp27Result4 = tmp27(onSubmit(16449), obj10);
    const tmp32 = onSubmit(16449);
  }
  items4[1] = tmp27Result4;
  obj6.children = items4;
  const items5 = [
    closure_7(c5, obj6),
    closure_6(clarification(4862).Text, {
      variant: "text-md/semibold",
      color: "text-default",
      children: clarification.questions[bound].question,
    }),
    ,
    ,
    ,
  ];
  let tmp27Result5 = null;
  if (true === clarification.questions[bound].multi_select) {
    const obj12 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl3 = tmp12(1115).intl;
    obj12.children = intl3.string(onSubmit(3715).jt5JBA);
    tmp27Result5 = tmp27(tmp12(4862).Text, obj12);
  }
  items5[2] = tmp27Result5;
  const options = tmp10.options;
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
    const intl = clarification(optionHeader[9]).intl;
    if (true === answer.recommended) {
      let k7lEgj = onSubmit(optionHeader[10]).aL1BKQ;
      let tmp10 = onSubmit;
    } else {
      k7lEgj = onSubmit(optionHeader[10]).k7lEgj;
      tmp10 = onSubmit;
    }
    obj.accessibilityLabel = intl.formatToPlainString(k7lEgj, { answer: answer.label });
    const obj6 = { style: optionHeader.optionHeader, children: null };
    let tmp13 = null;
    if (closure_11) {
      const obj7 = { checked: closure_13.includes(answer.id) };
      tmp13 = closure_6(clarification(optionHeader[14]).FormCheckbox, obj7);
    }
    const items = [
      tmp13,
      closure_6(clarification(optionHeader[8]).Text, {
        variant: "text-sm/semibold",
        color: "text-default",
        children: answer.label,
      }),
    ];
    let tmp16Result = null;
    if (true === answer.recommended) {
      const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: null };
      const intl2 = clarification(optionHeader[9]).intl;
      obj9.children = intl2.string(tmp10(optionHeader[10]).OXRWyV);
      tmp16Result = closure_6(clarification(optionHeader[8]).Text, obj9);
    }
    items[2] = tmp16Result;
    obj6.children = items;
    const items1 = [closure_7(c5, obj6)];
    let tmp16Result2 = null;
    if (null != answer.detail) {
      tmp16Result2 = null;
      if ("" !== answer.detail) {
        const obj10 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
        tmp16Result2 = closure_6(clarification(optionHeader[8]).Text, obj10);
      }
    }
    items1[1] = tmp16Result2;
    obj.children = items1;
    return closure_7(clarification(optionHeader[13]).Card, obj, answer.id);
  });
  const obj13 = {
    size: "md",
    placeholder: null,
    accessibilityLabel: null,
    value: null,
    onChange: null,
    onSubmitEditing: null,
    returnKeyType: "send",
  };
  const intl4 = tmp12(1115).intl;
  obj13.placeholder = intl4.string(onSubmit(3715).qifsdL);
  const intl5 = tmp12(1115).intl;
  obj13.accessibilityLabel = intl5.formatToPlainString(onSubmit(3715).XHESTL, {
    question: clarification.questions[bound].question,
  });
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
  items5[4] = closure_6(clarification(6220).TextInput, obj13);
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
      const intl6 = tmp12(1115).intl;
      obj16.text = intl6.string(tmp35(3715).yKdgqw);
      obj16.onPress = callback1;
      tmp27Result6 = tmp27(tmp12(5477).Button, obj16);
    }
  }
  const items6 = [tmp27Result6, closure_6(c5, { style: tmp.customField })];
  if (!tmp8) {
    tmp8 = null == tmp18;
  }
  let obj18 = { variant: "primary", size: "sm", disabled: tmp8, text: null, onPress: null };
  const intl7 = tmp12(1115).intl;
  if (tmp24) {
    t = tmp12(1115).t;
    let S7Sa6j = t.geKm7t;
  } else {
    S7Sa6j = tmp35(3715).S7Sa6j;
  }
  obj18.text = intl7.string(S7Sa6j);
  obj18.onPress = function onPress() {
    if (null != c18) {
      callback(tmp);
    }
  };
  obj18 = tmp27(tmp12(5477).Button, obj18);
  items6[2] = obj18;
  obj15.children = items6;
  closure_7(c5, obj15);
}
