// === Module 15665: UserSettingsDesignSystemToast ===

// Module 15665 (UserSettingsDesignSystemToast)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import EmojiUtils from "EmojiUtils" /* 4527 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import toastUtils from "toastUtils" /* 4569 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4574 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4577 */;
import XLargeIcon from "XLargeIcon" /* 4795 */;
import _modDef4805 from "module_4805" /* 4805 */;
import _modDef4807 from "module_4807" /* 4807 */;
import _modDef4811 from "module_4811" /* 4811 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4812 */;
import CopyIcon from "CopyIcon" /* 4843 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import Card from "Card" /* 5995 */;
import Toast_Toast from "Toast/Toast" /* 14261 */;
import noop from "module_19" /* 19 */;
import ToastStore from "ToastStore" /* 15666 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = "This is a toast message";
let c8 = "https://cdn.discordapp.com/embed/avatars/0.png";
let sum2 = 0;
const createStyles = fn(4890);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, previews: { alignItems: "center" } };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(11);
  ({ title, hint, demos } = arg0);
  if (cResult[0] !== title) {
    const obj2 = { variant: "text-lg/bold", children: title };
    const tmp6 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = title;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== hint) {
    const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: hint };
    const tmp9 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[2] = hint;
    cResult[3] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== demos) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(label) {
        return closure_1_5(components_Button_Button.Button, { variant: "secondary", size: "sm", text: label.label, onPress: label.onPress }, label.label);
      };
      cResult[6] = fn;
      let tmp12 = fn;
    } else {
      tmp12 = cResult[6];
    }
    const mapped = demos.map(tmp12);
    cResult[4] = demos;
    cResult[5] = mapped;
  } else {
    if (cResult[7] === tmp4) {
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp10) {
          let tmp15 = cResult[10];
        }
        return tmp15;
      }
    }
    const obj4 = { children: null };
    const obj5 = { spacing: nativeDefault.space.PX_8, children: null };
    items = [tmp4, tmp7, cResult[5]];
    obj5.children = items;
    obj4.children = timestampProducer(Stack_Stack.Stack, obj5);
    const tmp19 = hasOwnProperty(Card.Card, obj4);
    cResult[7] = tmp4;
    cResult[8] = tmp7;
    cResult[9] = cResult[5];
    cResult[10] = tmp19;
    tmp15 = tmp19;
  }
}) : ((demos) => {
  demos = demos.demos;
  ({ title, hint } = demos);
  const obj = { children: null };
  const obj2 = { spacing: nativeDefault.space.PX_8, children: null };
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: title }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: hint }), demos.map((label) => closure_1_5(components_Button_Button.Button, { variant: "secondary", size: "sm", text: label.label, onPress: label.onPress }, label.label))];
  obj2.children = items;
  obj.children = timestampProducer(Stack_Stack.Stack, obj2);
  return hasOwnProperty(Card.Card, obj);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [ToastStore];
    const fn = function o() {
      return content.getContent();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(currentToastMap) {
      currentToastMap = currentToastMap.currentToastMap;
      value = currentToastMap.get("app");
      let toast;
      if (value != null) {
        toast = value.toast;
      }
      return toast;
    };
    cResult[2] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = initialize;
  const toastStore = toastUtils.useToastStore(tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function p(queuedToastsMap) {
      queuedToastsMap = queuedToastsMap.queuedToastsMap;
      value = queuedToastsMap.get("app");
      let num;
      if (value != null) {
        num = value.length;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    };
    cResult[3] = fn3;
    let tmp10 = fn3;
  } else {
    tmp10 = cResult[3];
  }
  const tmpResult3 = toastUtils;
  const toastStore1 = toastUtils.useToastStore(tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Live stores" });
    cResult[4] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  let str = "text-subtle";
  let str2 = "text-subtle";
  if (null != toastStore) {
    str2 = "text-feedback-positive";
  }
  let str3;
  if (toastStore != null) {
    str3 = toastStore.text;
  }
  if (str3 == null) {
    str3 = "idle";
  }
  let str4 = "";
  if (toastStore1 > 0) {
    const _HermesInternal = HermesInternal;
    str4 = " (+" + toastStore1 + " queued)";
  }
  if (cResult[5] === str2) {
    if (cResult[6] === str3) {
      if (cResult[7] === str4) {
        let tmp15 = cResult[8];
      }
      if (null != stateFromStores) {
        str = "text-feedback-positive";
      }
      if (cResult[9] !== stateFromStores) {
        let str7 = "idle";
        if (null != stateFromStores) {
          let str8 = "(rendered content)";
          if (typeof stateFromStores.content === "string") {
            str8 = stateFromStores.content;
          }
          str7 = str8;
        }
        cResult[9] = stateFromStores;
        cResult[10] = str7;
        let tmp17 = str7;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] === tmp17) {
        if (cResult[12] === str) {
          let tmp18 = cResult[13];
        }
        if (cResult[14] === tmp18) {
          if (cResult[15] === tmp15) {
            let tmp21 = cResult[16];
          }
          return tmp21;
        }
        const obj2 = { children: null };
        const obj3 = { spacing: nativeDefault.space.PX_8, children: null };
        items1 = [tmp12, tmp15, tmp18];
        obj3.children = items1;
        obj2.children = timestampProducer(Stack_Stack.Stack, obj3);
        const tmp25 = hasOwnProperty(Card.Card, obj2);
        cResult[14] = tmp18;
        cResult[15] = tmp15;
        cResult[16] = tmp25;
        tmp21 = tmp25;
      }
      const obj4 = { variant: "text-md/medium", color: str, children: null };
      items2 = ["Legacy: ", tmp17];
      obj4.children = items2;
      const tmp20 = timestampProducer(Text_Text.Text, obj4);
      cResult[11] = tmp17;
      cResult[12] = str;
      cResult[13] = tmp20;
      tmp18 = tmp20;
    }
  }
  const obj5 = { variant: "text-md/medium", color: str2, children: null };
  items3 = ["Mana: ", str3, str4];
  obj5.children = items3;
  const tmp16 = timestampProducer(Text_Text.Text, obj5);
  cResult[5] = str2;
  cResult[6] = str3;
  cResult[7] = str4;
  cResult[8] = tmp16;
  tmp15 = tmp16;
  const tmpResult4 = toastUtils;
}) : (() => {
  items = [ToastStore];
  const stateFromStores = initialize.useStateFromStores(items, () => content.getContent());
  const toastStore = toastUtils.useToastStore((currentToastMap) => {
    currentToastMap = currentToastMap.currentToastMap;
    value = currentToastMap.get("app");
    let toast;
    if (value != null) {
      toast = value.toast;
    }
    return toast;
  });
  const toastStore1 = toastUtils.useToastStore((queuedToastsMap) => {
    queuedToastsMap = queuedToastsMap.queuedToastsMap;
    value = queuedToastsMap.get("app");
    let num;
    if (value != null) {
      num = value.length;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const obj4 = { spacing: nativeDefault.space.PX_8, children: null };
  items1 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Live stores" }), , ];
  let str = "text-subtle";
  let str2 = "text-subtle";
  if (null != toastStore) {
    str2 = "text-feedback-positive";
  }
  const obj5 = { variant: "text-md/medium", color: str2, children: null };
  let str3;
  if (toastStore != null) {
    str3 = toastStore.text;
  }
  if (str3 == null) {
    str3 = "idle";
  }
  items2 = ["Mana: ", str3];
  let str4 = "";
  if (toastStore1 > 0) {
    const _HermesInternal = HermesInternal;
    str4 = " (+" + toastStore1 + " queued)";
  }
  items2[2] = str4;
  obj5.children = items2;
  items1[1] = timestampProducer(Text_Text.Text, obj5);
  if (null != stateFromStores) {
    str = "text-feedback-positive";
  }
  const obj6 = { variant: "text-md/medium", color: str, children: null };
  let str7 = "idle";
  if (null != stateFromStores) {
    let str8 = "(rendered content)";
    if (typeof stateFromStores.content === "string") {
      str8 = stateFromStores.content;
    }
    str7 = str8;
  }
  const obj7 = { children: null };
  items3 = ["Legacy: ", str7];
  obj6.children = items3;
  items1[2] = timestampProducer(Text_Text.Text, obj6);
  obj4.children = items1;
  obj7.children = timestampProducer(Stack_Stack.Stack, obj4);
  return hasOwnProperty(Card.Card, obj7);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.useDesignSystemsNotificationComponents("UserSettingsDesignSystemToast");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Active renderer" });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  let str = "Legacy toast";
  if (designSystemsNotificationComponents) {
    str = "Mana toast";
  }
  if (cResult[1] !== str) {
    const obj3 = { variant: "text-md/medium", children: str };
    const tmp10 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[1] = str;
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Routing happens per toast, so the stores below are what actually rendered. Toggle 2026-09-design-systems-notification-components to switch renderers." });
    cResult[3] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== tmp8) {
    const obj4 = { children: null };
    const obj5 = { spacing: nativeDefault.space.PX_8, children: null };
    items = [first, tmp8, tmp11];
    obj5.children = items;
    obj4.children = timestampProducer(Stack_Stack.Stack, obj5);
    const tmp18 = hasOwnProperty(Card.Card, obj4);
    cResult[4] = tmp8;
    cResult[5] = tmp18;
    let tmp14 = tmp18;
  } else {
    tmp14 = cResult[5];
  }
  return tmp14;
}) : (() => {
  const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.useDesignSystemsNotificationComponents("UserSettingsDesignSystemToast");
  const obj2 = { spacing: nativeDefault.space.PX_8, children: null };
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Active renderer" }), , ];
  let str = "Legacy toast";
  if (designSystemsNotificationComponents) {
    str = "Mana toast";
  }
  const obj3 = { children: null };
  items[1] = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", children: str });
  items[2] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Routing happens per toast, so the stores below are what actually rendered. Toggle 2026-09-design-systems-notification-components to switch renderers." });
  obj2.children = items;
  obj3.children = timestampProducer(Stack_Stack.Stack, obj2);
  return hasOwnProperty(Card.Card, obj3);
});
let items = [
  {
    label: "Success \u2014 checkmark component",
    onPress() {
      const obj2 = { key: null, content: "Saved", IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon, iconColor: "status-positive" };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "SUCCESS_COMPONENT" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  },
  {
    label: "Critical \u2014 X component",
    onPress() {
      const obj2 = { key: null, content: "Something went wrong", IconComponent: XLargeIcon.XLargeIcon, iconColor: "icon-feedback-critical" };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "ERROR_COMPONENT" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  },
  {
    label: "Success \u2014 checkmark bitmap",
    onPress() {
      const obj2 = { key: null, content: "Saved", icon: _modDef4805 };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "SUCCESS_BITMAP" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  },
  {
    label: "Critical \u2014 yellow alert bitmap",
    onPress() {
      const obj2 = { key: null, content: "Something went wrong", icon: _modDef4807 };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "ERROR_BITMAP" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  },
  {
    label: "Default \u2014 information bitmap",
    onPress() {
      const obj2 = { key: null, content: Thisisatoastmessage, icon: _modDef4811 };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "INFO_BITMAP" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  },
  {
    label: "Default \u2014 icon passthrough",
    onPress() {
      const obj2 = { key: null, content: "Copied", IconComponent: CopyIcon.CopyIcon };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "PASSTHROUGH" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  },
  {
    label: "Default \u2014 no icon",
    onPress() {
      const obj2 = { key: null, content: Thisisatoastmessage };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "NO_ICON" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  },
  {
    label: "Long text",
    onPress() {
      const obj2 = { key: null, content: "This is a much longer toast message that should wrap onto several lines and then clamp, so the container has to make room for it." };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "LONG" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  }
];
let items1 = [
  {
    label: "Rendered icon",
    onPress() {
      const obj2 = {
        key: null,
        content: "Icon is a render function",
        icon() {
          return closure_1_5(CircleInformationIcon.CircleInformationIcon, { size: "sm", color: "text-brand" });
        }
      };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "RENDERED_ICON" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  },
  {
    label: "Rendered content",
    onPress() {
      const obj2 = {
        key: null,
        content() {
          return closure_1_5(Text_Text.Text, { variant: "text-sm/semibold", color: "text-brand", children: "Content is a render function" });
        }
      };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "RENDERED_CONTENT" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  },
  {
    label: "Unsubstitutable bitmap",
    onPress() {
      const obj2 = { key: null, content: "Icon has no Mana equivalent", icon: { uri: "https://cdn.discordapp.com/embed/avatars/0.png" } };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "UNMAPPED_BITMAP" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  }
];
let items2 = [
  {
    label: "Queue three",
    onPress() {
      const obj2 = { key: null, content: "First of three" };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "QUEUE" + "-" + sum;
      ToastActionCreatorsDefault.open(obj2);
      const obj4 = { key: null, content: "Second of three" };
      const sum1 = sum2 + 1;
      sum2 = sum1;
      obj4.key = "" + "QUEUE" + "-" + sum1;
      ToastActionCreatorsDefault.open(obj4);
      const obj6 = { key: null, content: "Third of three" };
      sum2 = sum2 + 1;
      obj6.key = "" + "QUEUE" + "-" + sum2;
      ToastActionCreatorsDefault.open(obj6);
    }
  },
  {
    label: "Same key three times",
    onPress() {
      let num = 0;
      do {
        let obj = ToastActionCreatorsDefault;
        let openResult = obj.open({ key: "DEDUPE_DEMO", content: "Should only appear once" });
        num = num + 1;
      } while (num < 3);
    }
  },
  {
    label: "Dismiss current",
    onPress() {
      return ToastActionCreatorsDefault.close();
    }
  }
];
let items3 = [
  {
    label: "Bottom position",
    onPress() {
      const obj2 = { key: null, content: Thisisatoastmessage, position: "bottom" };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "BOTTOM" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  },
  {
    label: "Ten second duration",
    onPress() {
      const obj2 = { key: null, content: Thisisatoastmessage, toastDurationMs: 10000 };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "DURATION" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    }
  }
];
ReactCompilerGating = fn(558);
let obj10 = {
  label: "Bottom position",
  onPress() {
    const obj2 = { key: null, content: Thisisatoastmessage, position: "bottom" };
    const sum = sum2 + 1;
    sum2 = sum;
    obj2.key = "" + "BOTTOM" + "-" + sum;
    return ToastActionCreatorsDefault.open(obj2);
  }
};
let obj3 = { padding: nativeDefault.space.PX_16 };
let obj7 = {
  label: "Success \u2014 checkmark component",
  onPress() {
    const obj2 = { key: null, content: "Saved", IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon, iconColor: "status-positive" };
    const sum = sum2 + 1;
    sum2 = sum;
    obj2.key = "" + "SUCCESS_COMPONENT" + "-" + sum;
    return ToastActionCreatorsDefault.open(obj2);
  }
};
let obj8 = {
  label: "Rendered icon",
  onPress() {
    const obj2 = {
      key: null,
      content: "Icon is a render function",
      icon() {
        return closure_1_5(CircleInformationIcon.CircleInformationIcon, { size: "sm", color: "text-brand" });
      }
    };
    const sum = sum2 + 1;
    sum2 = sum;
    obj2.key = "" + "RENDERED_ICON" + "-" + sum;
    return ToastActionCreatorsDefault.open(obj2);
  }
};
let obj9 = {
  label: "Queue three",
  onPress() {
    const obj2 = { key: null, content: "First of three" };
    const sum = sum2 + 1;
    sum2 = sum;
    obj2.key = "" + "QUEUE" + "-" + sum;
    ToastActionCreatorsDefault.open(obj2);
    const obj4 = { key: null, content: "Second of three" };
    const sum1 = sum2 + 1;
    sum2 = sum1;
    obj4.key = "" + "QUEUE" + "-" + sum1;
    ToastActionCreatorsDefault.open(obj4);
    const obj6 = { key: null, content: "Third of three" };
    sum2 = sum2 + 1;
    obj6.key = "" + "QUEUE" + "-" + sum2;
    ToastActionCreatorsDefault.open(obj6);
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemToast.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(23);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const emojiUrl = EmojiUtils.getEmojiUrl({ name: "\u{1F525}" });
    cResult[0] = emojiUrl;
    let first = emojiUrl;
    const tmpResult = EmojiUtils;
  } else {
    first = cResult[0];
  }
  const tmp6 = closure_10();
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp15 = hasOwnProperty(closure_13, {});
    const tmp17 = hasOwnProperty(closure_12, {});
    const obj2 = { title: "Mana renderer", hint: "Under the experiment these all route to the Mana toast. Checkmarks and Xs become status variants whether the call site passes a component or a bitmap.", demos: items };
    const tmp20 = hasOwnProperty(closure_11, obj2);
    const obj3 = { title: "Legacy fallback", hint: "No Mana equivalent, so these stay on the legacy renderer even with the experiment on. Watch which store they land in above.", demos: items1 };
    const tmp22 = hasOwnProperty(closure_11, obj3);
    const obj4 = { title: "Queueing", hint: "The legacy store holds one toast and drops repeats of the key on screen; the Mana store queues.", demos: items2 };
    const tmp24 = hasOwnProperty(closure_11, obj4);
    const obj5 = { title: "Placement", hint: "Both are deprecated on the Mana API but still forwarded, so existing call sites keep working.", demos: items3 };
    const tmp26 = hasOwnProperty(closure_11, obj5);
    cResult[1] = tmp15;
    cResult[2] = tmp17;
    cResult[3] = tmp20;
    cResult[4] = tmp22;
    cResult[5] = tmp24;
    cResult[6] = tmp26;
    let tmp12 = tmp26;
    let tmp11 = tmp24;
    let tmp10 = tmp22;
    let tmp9 = tmp20;
    let tmp8 = tmp17;
    let tmp7 = tmp15;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
    tmp9 = cResult[3];
    tmp10 = cResult[4];
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp35 = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Components" });
    const obj6 = { text: Thisisatoastmessage, variant: "default" };
    const tmp37 = hasOwnProperty(Toast_Toast.Toast, obj6);
    const obj7 = { text: Thisisatoastmessage, variant: "default", icon: CircleInformationIcon.CircleInformationIcon };
    const tmp38 = hasOwnProperty(Toast_Toast.Toast, obj7);
    const obj8 = { text: Thisisatoastmessage, variant: "default", icon: CircleInformationIcon.CircleInformationIcon, iconColor: nativeDefault.colors.ICON_BRAND, secondaryIconColor: nativeDefault.colors.ICON_DEFAULT };
    const tmp40 = hasOwnProperty(Toast_Toast.Toast, obj8);
    const obj9 = { text: Thisisatoastmessage, variant: "success" };
    const tmp41 = hasOwnProperty(Toast_Toast.Toast, obj9);
    const obj10 = { text: Thisisatoastmessage, variant: "critical" };
    const tmp42 = hasOwnProperty(Toast_Toast.Toast, obj10);
    const tmp43 = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Entities" });
    cResult[7] = tmp40;
    cResult[8] = tmp41;
    cResult[9] = tmp42;
    cResult[10] = tmp43;
    cResult[11] = tmp35;
    cResult[12] = tmp37;
    cResult[13] = tmp38;
    let tmp33 = tmp38;
    let tmp32 = tmp37;
    let tmp31 = tmp35;
    let tmp30 = tmp43;
    let tmp29 = tmp42;
    let tmp28 = tmp41;
    let tmp27 = tmp40;
  } else {
    tmp27 = cResult[7];
    tmp28 = cResult[8];
    tmp29 = cResult[9];
    tmp30 = cResult[10];
    tmp31 = cResult[11];
    tmp32 = cResult[12];
    tmp33 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    if ("" !== first) {
      const obj11 = { type: "emoji", src: first, alt: "\u{1F525}" };
      let obj12 = obj11;
    } else {
      obj12 = { type: "emoji", unicode: "\u{1F525}" };
    }
    const obj13 = { text: "Default reaction set to \u{1F525}", icon: obj12 };
    const tmp44Result = hasOwnProperty(Toast_Toast.Toast, obj13);
    cResult[14] = tmp44Result;
  } else {
    const _Symbol = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const obj14 = { text: "Nelly is now speaking", icon: null };
      const obj15 = { type: "avatar", src, alt: "Nelly" };
      obj14.icon = obj15;
      const tmp50 = hasOwnProperty(Toast_Toast.Toast, obj14);
      cResult[15] = tmp50;
      let tmp47 = tmp50;
    } else {
      tmp47 = cResult[15];
    }
    const _Symbol2 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      const obj16 = { text: "Discord Staff", icon: null };
      const obj17 = { type: "guild", src, name: "Discord Staff" };
      obj16.icon = obj17;
      const tmp54 = hasOwnProperty(Toast_Toast.Toast, obj16);
      cResult[16] = tmp54;
      let tmp51 = tmp54;
    } else {
      tmp51 = cResult[16];
    }
    const _Symbol3 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      const obj18 = { text: "Discord Staff", icon: { type: "guild", src: null, name: "Discord Staff" } };
      const tmp57 = hasOwnProperty(Toast_Toast.Toast, obj18);
      cResult[17] = tmp57;
      let tmp55 = tmp57;
    } else {
      tmp55 = cResult[17];
    }
    if (cResult[18] !== tmp6.previews) {
      const obj19 = { spacing: nativeDefault.space.PX_16, children: null };
      items = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, ];
      const obj20 = { children: null };
      const obj21 = { spacing: nativeDefault.space.PX_12, style: tmp6.previews, children: null };
      items1 = [tmp31, tmp32, tmp33, tmp27, tmp28, tmp29, tmp30, cResult[14], tmp47, tmp51, tmp55];
      obj21.children = items1;
      obj20.children = timestampProducer(Stack_Stack.Stack, obj21);
      items[6] = hasOwnProperty(Card.Card, obj20);
      obj19.children = items;
      const tmp62 = timestampProducer(Stack_Stack.Stack, obj19);
      cResult[18] = tmp6.previews;
      cResult[19] = tmp62;
      let tmp58 = tmp62;
    } else {
      tmp58 = cResult[19];
    }
    if (cResult[20] === tmp6.container) {
      if (cResult[21] === tmp58) {
        let tmp63 = cResult[22];
      }
      return tmp63;
    }
    const obj22 = { contentContainerStyle: tmp6.container, children: tmp58 };
    const tmp66 = hasOwnProperty(ScrollView, obj22);
    cResult[20] = tmp6.container;
    cResult[21] = tmp58;
    cResult[22] = tmp66;
    tmp63 = tmp66;
  }
}) : (() => {
  const emojiUrl = EmojiUtils.getEmojiUrl({ name: "\u{1F525}" });
  const tmp4 = closure_10();
  const obj2 = { contentContainerStyle: tmp4.container, children: null };
  const obj3 = { spacing: nativeDefault.space.PX_16, children: null };
  items = [hasOwnProperty(closure_13, {}), hasOwnProperty(closure_12, {}), , , , , ];
  items[2] = hasOwnProperty(closure_11, { title: "Mana renderer", hint: "Under the experiment these all route to the Mana toast. Checkmarks and Xs become status variants whether the call site passes a component or a bitmap.", demos: items });
  items[3] = hasOwnProperty(closure_11, { title: "Legacy fallback", hint: "No Mana equivalent, so these stay on the legacy renderer even with the experiment on. Watch which store they land in above.", demos: items1 });
  items[4] = hasOwnProperty(closure_11, { title: "Queueing", hint: "The legacy store holds one toast and drops repeats of the key on screen; the Mana store queues.", demos: items2 });
  items[5] = hasOwnProperty(closure_11, { title: "Placement", hint: "Both are deprecated on the Mana API but still forwarded, so existing call sites keep working.", demos: items3 });
  const obj8 = { spacing: nativeDefault.space.PX_12, style: tmp4.previews, children: null };
  items1 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Components" }), hasOwnProperty(Toast_Toast.Toast, { text: Thisisatoastmessage, variant: "default" }), , , , , , , , , ];
  const obj4 = { title: "Mana renderer", hint: "Under the experiment these all route to the Mana toast. Checkmarks and Xs become status variants whether the call site passes a component or a bitmap.", demos: items };
  const obj5 = { title: "Legacy fallback", hint: "No Mana equivalent, so these stay on the legacy renderer even with the experiment on. Watch which store they land in above.", demos: items1 };
  const obj6 = { title: "Queueing", hint: "The legacy store holds one toast and drops repeats of the key on screen; the Mana store queues.", demos: items2 };
  const obj7 = { title: "Placement", hint: "Both are deprecated on the Mana API but still forwarded, so existing call sites keep working.", demos: items3 };
  const obj9 = { text: Thisisatoastmessage, variant: "default" };
  items1[2] = hasOwnProperty(Toast_Toast.Toast, { text: Thisisatoastmessage, variant: "default", icon: CircleInformationIcon.CircleInformationIcon });
  const obj10 = { text: Thisisatoastmessage, variant: "default", icon: CircleInformationIcon.CircleInformationIcon };
  items1[3] = hasOwnProperty(Toast_Toast.Toast, { text: Thisisatoastmessage, variant: "default", icon: CircleInformationIcon.CircleInformationIcon, iconColor: nativeDefault.colors.ICON_BRAND, secondaryIconColor: nativeDefault.colors.ICON_DEFAULT });
  items1[4] = hasOwnProperty(Toast_Toast.Toast, { text: Thisisatoastmessage, variant: "success" });
  items1[5] = hasOwnProperty(Toast_Toast.Toast, { text: Thisisatoastmessage, variant: "critical" });
  items1[6] = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Entities" });
  if ("" !== emojiUrl) {
    const obj14 = { type: "emoji", src: emojiUrl, alt: "\u{1F525}" };
    let obj15 = obj14;
  } else {
    obj15 = { type: "emoji", unicode: "\u{1F525}" };
  }
  const obj16 = { children: null };
  items1[7] = hasOwnProperty(Toast_Toast.Toast, { text: "Default reaction set to \u{1F525}", icon: obj15 });
  const obj17 = { text: "Nelly is now speaking", icon: { type: "avatar", src, alt: "Nelly" } };
  items1[8] = hasOwnProperty(Toast_Toast.Toast, obj17);
  items1[9] = hasOwnProperty(Toast_Toast.Toast, { text: "Discord Staff", icon: { type: "guild", src, name: "Discord Staff" } });
  items1[10] = hasOwnProperty(Toast_Toast.Toast, { text: "Discord Staff", icon: { type: "guild", src: null, name: "Discord Staff" } });
  obj8.children = items1;
  obj16.children = timestampProducer(Stack_Stack.Stack, obj8);
  items[6] = hasOwnProperty(Card.Card, obj16);
  obj3.children = items;
  obj2.children = timestampProducer(Stack_Stack.Stack, obj3);
  return hasOwnProperty(ScrollView, obj2);
});