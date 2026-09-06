// === Module 16606: VibegrationsClarificationCard ===

// Module 16606 (VibegrationsClarificationCard)
import nativeDefault from "native" /* 576 */;
import VibegrationsClarification from "VibegrationsClarification" /* 16607 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { card: null, optionHeader: null, footer: null, customField: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles.card = createStyles;
createStyles.optionHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.footer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.customField = { flex: 1, minHeight: 36, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round };
let closure_8 = createStyles.createStyles(createStyles);
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
  let obj = noop;
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
  obj = { style: tmp.card, children: null };
  let tmp14 = null;
  const callback2 = obj.useCallback(() => {
    const trimmed = str.trim();
    if ("" !== trimmed) {
      const obj = { kind: "custom", text: trimmed };
      callback(obj);
    }
  }, items3);
  if (clarification.questions.length > 1) {
    obj = { variant: "text-xs/semibold", color: "text-muted", children: null };
    let intl = clarification(1114).intl;
    const obj1 = { index: bound + 1, total: length };
    obj.children = intl.formatToPlainString(onSubmit(3547)["7bypa+"], obj1);
    tmp14 = closure_6(clarification(4556).Text, obj);
  }
  const items4 = [tmp14, closure_6(clarification(4556).Text, { variant: "text-md/semibold", color: "text-default", children: clarification.questions[bound].question }), , ];
  const options = tmp8.options;
  items4[2] = options.map((answer) => {
    closure_0 = answer;
    let fn;
    if (!closure_7) {
      fn = () => closure_11(closure_0);
    }
    let obj = { onPress: fn, accessibilityLabel: null, children: null };
    const intl = clarification(optionHeader[8]).intl;
    if (true === answer.recommended) {
      let k7lEgj = onSubmit(optionHeader[9]).aL1BKQ;
      let tmp5 = onSubmit;
    } else {
      k7lEgj = onSubmit(optionHeader[9]).k7lEgj;
      tmp5 = onSubmit;
    }
    obj = { answer: answer.label };
    obj.accessibilityLabel = intl.formatToPlainString(k7lEgj, obj);
    obj = { style: optionHeader.optionHeader, children: null };
    const items = [closure_6(clarification(optionHeader[7]).Text, { variant: "text-sm/semibold", color: "text-default", children: answer.label }), ];
    let tmp8Result = null;
    if (true === answer.recommended) {
      const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
      const intl2 = clarification(optionHeader[8]).intl;
      obj2.children = intl2.string(tmp5(optionHeader[9]).OXRWyV);
      tmp8Result = closure_6(clarification(optionHeader[7]).Text, obj2);
    }
    items[1] = tmp8Result;
    obj.children = items;
    const items1 = [closure_7(closure_5, obj), ];
    tmp8Result = null;
    if (null != answer.detail) {
      tmp8Result = null;
      if ("" !== answer.detail) {
        const obj3 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
        tmp8Result = closure_6(clarification(optionHeader[7]).Text, obj3);
      }
    }
    items1[1] = tmp8Result;
    obj.children = items1;
    return closure_7(clarification(optionHeader[10]).Card, obj, answer.id);
  });
  let obj3 = { style: tmp.footer, children: null };
  let tmp19Result = null;
  if (bound > 0) {
    tmp19Result = null;
    if (!tmp6) {
      const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
      let intl2 = tmp20(1114).intl;
      obj4.text = intl2.string(onSubmit(3547).yKdgqw);
      obj4.onPress = callback1;
      tmp19Result = tmp19(tmp20(4975).Button, obj4);
    }
  }
  const items5 = [tmp19Result, ];
  const obj5 = { style: tmp.customField, children: null };
  const obj6 = { size: "md", isCentered: false, placeholder: null, value: null, onChange: null, onSubmitEditing: null, returnKeyType: "send" };
  const intl3 = tmp20(1114).intl;
  obj6.placeholder = intl3.string(onSubmit(3547).qifsdL);
  obj6.value = str;
  obj6.onChange = function onChange(arg0) {
    closure_0 = arg0;
    return closure_5((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[id.id] = closure_0;
      return obj;
    });
  };
  obj6.onSubmitEditing = callback2;
  obj5.children = closure_6(clarification(14170).GhostInput, obj6);
  items5[1] = closure_6(closure_5, obj5);
  obj3.children = items5;
  items4[3] = closure_7(closure_5, obj3);
  obj.children = items4;
  return closure_7(closure_5, obj);
};