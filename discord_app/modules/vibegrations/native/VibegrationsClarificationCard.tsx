// discord_app/modules/vibegrations/native/VibegrationsClarificationCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import VibegrationsClarification from "../lib/VibegrationsClarification.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4639);
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
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.customField = {
  flex: 1,
  minHeight: 36,
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsClarificationCard.tsx");

export default function VibegrationsClarificationCard(clarification) {
  clarification = clarification.clarification;
  const onSubmit = clarification.onSubmit;
  let first;
  noop = undefined;
  let bound;
  const tmp = bound();
  dependencyMap = tmp;
  const tmp2 = first(noop.useState({}), 2);
  first = tmp2[0];
  noop = tmp2[1];
  const tmp4 = first(noop.useState({}), 2);
  closure_5 = tmp4[1];
  let tmp5 = first(noop.useState(0), 2);
  closure_6 = tmp5[1];
  closure_7 = tmp6;
  bound = Math.min(tmp5[0], length - 1);
  const id = tmp8;
  let items = [first, clarification, bound, onSubmit, clarification.questions[bound].id];
  const callback = noop.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_4(obj);
      const result = VibegrationsClarification.nextClarificationStep(clarification, obj, bound);
      if (null == result) {
        const result1 = VibegrationsClarification.formatClarificationAnswers(clarification, obj);
        if ("" !== result1) {
          tmp(result1);
        }
        const tmp13Result = VibegrationsClarification;
      } else {
        closure_6(result);
      }
    }
  }, items);
  let items1 = [callback];
  closure_11 = noop.useCallback((id) => callback({ kind: "option", optionId: id.id, text: id.label }), items1);
  const items2 = [clarification, null == onSubmit, bound];
  let str = tmp4[0][tmp8.id];
  const callback1 = noop.useCallback(() => {
    if (!closure_7) {
      if (0 !== bound) {
        closure_0 = clarification.questions[bound - 1];
        closure_4((arg0) => {
          const merged = Object.assign(arg0);
          delete tmp[tmp2];
          return {};
        });
        closure_5((arg0) => {
          const merged = Object.assign(arg0);
          delete tmp[tmp2];
          return {};
        });
        closure_6(bound - 1);
      }
    }
  }, items2);
  if (str == null) {
    str = "";
  }
  const items3 = [str, callback];
  const obj2 = { style: tmp.card, children: null };
  let tmp14 = null;
  const callback2 = noop.useCallback(() => {
    const trimmed = str.trim();
    if ("" !== trimmed) {
      const obj = { kind: "custom", text: trimmed };
      callback(obj);
    }
  }, items3);
  if (clarification.questions.length > 1) {
    let obj3 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    let intl = clarification(1115).intl;
    const obj4 = { index: bound + 1, total: length };
    obj3.children = intl.formatToPlainString(onSubmit(3591)["7bypa+"], obj4);
    tmp14 = closure_6(clarification(4635).Text, obj3);
  }
  const items4 = [
    tmp14,
    closure_6(clarification(4635).Text, {
      variant: "text-md/semibold",
      color: "text-default",
      children: clarification.questions[bound].question,
    }),
    ,
  ];
  const options = tmp8.options;
  items4[2] = options.map((answer) => {
    closure_0 = answer;
    let fn;
    if (!closure_7) {
      fn = () => closure_11(closure_0);
    }
    const obj = { onPress: fn, accessibilityLabel: null, children: null };
    const intl = clarification(optionHeader[8]).intl;
    if (true === answer.recommended) {
      let k7lEgj = onSubmit(optionHeader[9]).aL1BKQ;
      let tmp5 = onSubmit;
    } else {
      k7lEgj = onSubmit(optionHeader[9]).k7lEgj;
      tmp5 = onSubmit;
    }
    obj.accessibilityLabel = intl.formatToPlainString(k7lEgj, { answer: answer.label });
    const obj3 = { style: optionHeader.optionHeader, children: null };
    const items = [
      closure_6(clarification(optionHeader[7]).Text, {
        variant: "text-sm/semibold",
        color: "text-default",
        children: answer.label,
      }),
    ];
    let tmp8Result = null;
    if (true === answer.recommended) {
      const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: null };
      const intl2 = clarification(optionHeader[8]).intl;
      obj5.children = intl2.string(tmp5(optionHeader[9]).OXRWyV);
      tmp8Result = closure_6(clarification(optionHeader[7]).Text, obj5);
    }
    items[1] = tmp8Result;
    obj3.children = items;
    const items1 = [closure_7(closure_5, obj3)];
    let tmp8Result2 = null;
    if (null != answer.detail) {
      tmp8Result2 = null;
      if ("" !== answer.detail) {
        const obj6 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
        tmp8Result2 = closure_6(clarification(optionHeader[7]).Text, obj6);
      }
    }
    items1[1] = tmp8Result2;
    obj.children = items1;
    return closure_7(clarification(optionHeader[10]).Card, obj, answer.id);
  });
  let obj6 = { style: tmp.footer, children: null };
  let tmp19Result = null;
  if (bound > 0) {
    tmp19Result = null;
    if (!tmp6) {
      const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
      let intl2 = tmp20(1115).intl;
      obj7.text = intl2.string(onSubmit(3591).yKdgqw);
      obj7.onPress = callback1;
      tmp19Result = tmp19(tmp20(5059).Button, obj7);
    }
  }
  const items5 = [tmp19Result];
  const obj8 = { style: tmp.customField, children: null };
  const obj9 = {
    size: "md",
    isCentered: false,
    placeholder: null,
    value: null,
    onChange: null,
    onSubmitEditing: null,
    returnKeyType: "send",
  };
  const intl3 = tmp20(1115).intl;
  obj9.placeholder = intl3.string(onSubmit(3591).qifsdL);
  obj9.value = str;
  obj9.onChange = function onChange(arg0) {
    closure_0 = arg0;
    return closure_5((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[id.id] = closure_0;
      return obj;
    });
  };
  obj9.onSubmitEditing = callback2;
  obj8.children = closure_6(clarification(14268).GhostInput, obj9);
  items5[1] = closure_6(closure_5, obj8);
  obj6.children = items5;
  items4[3] = closure_7(closure_5, obj6);
  obj2.children = items4;
  return closure_7(closure_5, obj2);
}
