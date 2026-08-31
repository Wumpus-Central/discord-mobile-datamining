// === Module 16156: VibegrationsClarificationCard ===

// Module 16156 (VibegrationsClarificationCard)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { card: null, optionHeader: null, footer: null, customField: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.md, padding: ThemesDefault.space.PX_12, marginTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[3] = { flex: 1, minHeight: 36, justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj3 = { flex: 1, minHeight: 36, justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round };
let result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsClarificationCard.tsx");

export default function VibegrationsClarificationCard(clarification) {
  clarification = clarification.clarification;
  const onSubmit = clarification.onSubmit;
  dependencyMap = undefined;
  let first;
  let React;
  closure_5 = undefined;
  let callback;
  closure_7 = undefined;
  let bound;
  closure_9 = undefined;
  callback = undefined;
  closure_11 = undefined;
  let str;
  const tmp = bound();
  dependencyMap = tmp;
  let obj = React;
  const tmp2 = first(React.useState({}), 2);
  first = tmp2[0];
  React = tmp2[1];
  const tmp4 = first(React.useState({}), 2);
  closure_5 = tmp4[1];
  let tmp5 = first(React.useState(0), 2);
  callback = tmp5[1];
  closure_7 = tmp6;
  bound = Math.min(tmp5[0], length - 1);
  closure_9 = tmp8;
  let items = [first, clarification, bound, onSubmit, clarification.questions[bound].id];
  callback = React.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      callback(obj);
      const result = clarification(optionHeader[6]).nextClarificationStep(clarification, obj, bound);
      if (null == result) {
        const result1 = tmp13(tmp14[6]).formatClarificationAnswers(tmp15, obj);
        if ("" !== result1) {
          tmp(result1);
        }
        const tmp13Result = tmp13(tmp14[6]);
      } else {
        callback3(result);
      }
      const obj3 = clarification(optionHeader[6]);
      tmp13 = clarification;
      tmp14 = optionHeader;
      tmp15 = clarification;
    }
  }, items);
  let items1 = [callback];
  closure_11 = React.useCallback((id) => callback({ kind: "option", optionId: id.id, text: id.label }), items1);
  const items2 = [clarification, null == onSubmit, bound];
  str = tmp4[0][tmp8.id];
  const callback1 = React.useCallback(() => {
    if (!closure_7) {
      if (0 !== bound) {
        questions = questions.questions[tmp - 1];
        callback((arg0) => {
          const merged = Object.assign(arg0);
          delete tmp[tmp2];
          return {};
        });
        callback2((arg0) => {
          const merged = Object.assign(arg0);
          delete tmp[tmp2];
          return {};
        });
        callback3(tmp - 1);
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
      const obj = { kind: "custom", text: null };
      obj[1] = trimmed;
      callback(obj);
    }
  }, items3);
  if (clarification.questions.length > 1) {
    obj = { variant: "text-xs/semibold", color: "text-muted", children: null };
    let intl = clarification(1236).intl;
    obj1 = { index: null, total: null };
    obj1[0] = bound + 1;
    obj1[1] = length;
    obj[2] = intl.formatToPlainString(onSubmit(3471)["7bypa+"], obj1);
    tmp14 = callback(clarification(4444).Text, obj);
  }
  const items4 = [tmp14, callback(clarification(4444).Text, { variant: "text-md/semibold", color: "text-default", children: clarification.questions[bound].question }), , ];
  const options = tmp8.options;
  items4[2] = options.map((answer) => {
    closure_0 = answer;
    let fn;
    if (!closure_7) {
      fn = () => closure_1_11(closure_0);
    }
    let obj = { onPress: fn, accessibilityLabel: null, children: null };
    const intl = tmp2(tmp3[8]).intl;
    if (true === answer.recommended) {
      let k7lEgj = onSubmit(tmp3[9]).aL1BKQ;
      let tmp5 = onSubmit;
    } else {
      k7lEgj = onSubmit(tmp3[9]).k7lEgj;
      tmp5 = onSubmit;
    }
    obj = { answer: answer.label };
    obj[1] = intl.formatToPlainString(k7lEgj, obj);
    obj = { style: optionHeader.optionHeader, children: null };
    const items = [callback3(clarification(optionHeader[7]).Text, { variant: "text-sm/semibold", color: "text-default", children: answer.label }), ];
    let tmp8Result = null;
    if (true === answer.recommended) {
      const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
      const intl2 = tmp2(tmp3[8]).intl;
      obj2[2] = intl2.string(tmp5(tmp3[9]).OXRWyV);
      tmp8Result = tmp8(tmp2(tmp3[7]).Text, obj2);
    }
    items[1] = tmp8Result;
    obj[1] = items;
    const items1 = [closure_7(closure_5, obj), ];
    tmp8Result = null;
    if (null != answer.detail) {
      tmp8Result = null;
      if ("" !== answer.detail) {
        const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
        obj3[2] = answer.detail;
        tmp8Result = tmp8(tmp2(tmp3[7]).Text, obj3);
      }
    }
    items1[1] = tmp8Result;
    obj[2] = items1;
    return closure_7(clarification(optionHeader[10]).Card, obj, answer.id);
  });
  let obj3 = { style: tmp.footer, children: null };
  let tmp19Result = null;
  if (bound > 0) {
    tmp19Result = null;
    if (!tmp6) {
      const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
      let intl2 = tmp20(1236).intl;
      obj4[2] = intl2.string(onSubmit(3471).yKdgqw);
      obj4[3] = callback1;
      tmp19Result = tmp19(tmp20(4896).Button, obj4);
    }
  }
  const items5 = [tmp19Result, ];
  const obj5 = { style: tmp.customField, children: null };
  const obj6 = { size: "md", isCentered: false, placeholder: null, value: null, onChange: null, onSubmitEditing: null, returnKeyType: "send" };
  const intl3 = tmp20(1236).intl;
  obj6[2] = intl3.string(onSubmit(3471).qifsdL);
  obj6[3] = str;
  obj6[4] = function onChange(arg0) {
    closure_0 = arg0;
    return callback2((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[closure_1_9.id] = closure_0;
      return obj;
    });
  };
  obj6[5] = callback2;
  obj5[1] = callback(clarification(13780).GhostInput, obj6);
  items5[1] = callback(closure_5, obj5);
  obj3[1] = items5;
  items4[3] = closure_7(closure_5, obj3);
  obj[1] = items4;
  return closure_7(closure_5, obj);
};