// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemToast.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import EmojiUtils from "../../../../utils/EmojiUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import toastUtils from "../../../../design/mana/components/Toast/toastUtils.native.tsx";
import CheckmarkLargeIcon from "../../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import XLargeIcon from "../../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx";
import _modDef5006 from "../../../../../_runtime/metro/05006__.js";
import _modDef5008 from "../../../../../_runtime/metro/05008__.js";
import _modDef5012 from "../../../../../_runtime/metro/05012__.js";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import CopyIcon from "../../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import Toast from "../../../../design/mana/components/Toast/Toast.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = "This is a toast message";
let c7 = "https://cdn.discordapp.com/embed/avatars/0.png";
let sum2 = 0;
const createStyles = fn(5091);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, previews: { alignItems: "center" } };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DemoGroup(arg0) {
      const cResult = c.c(11);
      ({ title, hint, demos } = arg0);
      if (cResult[0] !== title) {
        const obj2 = { variant: "text-lg/bold", children: title };
        const tmp6 = React4(Text_Text.Text, obj2);
        cResult[0] = title;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== hint) {
        const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: hint };
        const tmp9 = React4(Text_Text.Text, obj3);
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
            return closure_1_4(
              components_Button_Button.Button,
              { variant: "secondary", size: "sm", text: label.label, onPress: label.onPress },
              label.label,
            );
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
        obj4.children = hasOwnProperty(Stack_Stack.Stack, obj5);
        const tmp19 = React4(Card.Card, obj4);
        cResult[7] = tmp4;
        cResult[8] = tmp7;
        cResult[9] = cResult[5];
        cResult[10] = tmp19;
        tmp15 = tmp19;
      }
    }
  : function DemoGroup(demos) {
      demos = demos.demos;
      ({ title, hint } = demos);
      const obj = { children: null };
      const obj2 = { spacing: nativeDefault.space.PX_8, children: null };
      items = [
        React4(Text_Text.Text, { variant: "text-lg/bold", children: title }),
        React4(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: hint }),
        demos.map((label) =>
          closure_1_4(
            components_Button_Button.Button,
            { variant: "secondary", size: "sm", text: label.label, onPress: label.onPress },
            label.label,
          ),
        ),
      ];
      obj2.children = items;
      obj.children = hasOwnProperty(Stack_Stack.Stack, obj2);
      return React4(Card.Card, obj);
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LiveStores() {
      const cResult = c.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(currentToastMap) {
          currentToastMap = currentToastMap.currentToastMap;
          value = currentToastMap.get("app");
          let toast;
          if (value != null) {
            toast = value.toast;
          }
          return toast;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const toastStore = toastUtils.useToastStore(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function c(queuedToastsMap) {
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
        cResult[1] = fn2;
        let tmp6 = fn2;
      } else {
        tmp6 = cResult[1];
      }
      const tmpResult = toastUtils;
      const toastStore1 = toastUtils.useToastStore(tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp10 = React4(Text_Text.Text, { variant: "text-lg/bold", children: "Live store" });
        cResult[2] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[2];
      }
      let str = "text-subtle";
      if (null != toastStore) {
        str = "text-feedback-positive";
      }
      let str2;
      if (toastStore != null) {
        str2 = toastStore.text;
      }
      if (str2 == null) {
        str2 = "idle";
      }
      let str3 = "";
      if (toastStore1 > 0) {
        const _HermesInternal = HermesInternal;
        str3 = " (+" + toastStore1 + " queued)";
      }
      if (cResult[3] === str) {
        if (cResult[4] === str2) {
          if (cResult[5] === str3) {
            let tmp11 = cResult[6];
          }
          return tmp11;
        }
      }
      const obj2 = { children: null };
      const obj3 = { spacing: nativeDefault.space.PX_8, children: null };
      items = [tmp8];
      const obj4 = { variant: "text-md/medium", color: str, children: null };
      items1 = ["Mana: ", str2, str3];
      obj4.children = items1;
      items[1] = hasOwnProperty(Text_Text.Text, obj4);
      obj3.children = items;
      obj2.children = hasOwnProperty(Stack_Stack.Stack, obj3);
      const tmp12 = React4(Card.Card, obj2);
      cResult[3] = str;
      cResult[4] = str2;
      cResult[5] = str3;
      cResult[6] = tmp12;
      tmp11 = tmp12;
      const tmpResult2 = toastUtils;
    }
  : function LiveStores() {
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
      const obj3 = { spacing: nativeDefault.space.PX_8, children: null };
      items = [React4(Text_Text.Text, { variant: "text-lg/bold", children: "Live store" })];
      let str = "text-subtle";
      if (null != toastStore) {
        str = "text-feedback-positive";
      }
      const obj4 = { variant: "text-md/medium", color: str, children: null };
      let str2;
      if (toastStore != null) {
        str2 = toastStore.text;
      }
      if (str2 == null) {
        str2 = "idle";
      }
      items1 = ["Mana: ", str2];
      let str3 = "";
      if (toastStore1 > 0) {
        const _HermesInternal = HermesInternal;
        str3 = " (+" + toastStore1 + " queued)";
      }
      const obj5 = { children: null };
      items1[2] = str3;
      obj4.children = items1;
      items[1] = hasOwnProperty(Text_Text.Text, obj4);
      obj3.children = items;
      obj5.children = hasOwnProperty(Stack_Stack.Stack, obj3);
      return React4(Card.Card, obj5);
    };
let items = [
  {
    label: "Success \u2014 checkmark component",
    onPress() {
      const obj2 = {
        key: null,
        content: "Saved",
        IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon,
        iconColor: "status-positive",
      };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "SUCCESS_COMPONENT" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    },
  },
  {
    label: "Critical \u2014 X component",
    onPress() {
      const obj2 = {
        key: null,
        content: "Something went wrong",
        IconComponent: XLargeIcon.XLargeIcon,
        iconColor: "icon-feedback-critical",
      };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "ERROR_COMPONENT" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    },
  },
  {
    label: "Success \u2014 checkmark bitmap",
    onPress() {
      const obj2 = { key: null, content: "Saved", icon: _modDef5006 };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "SUCCESS_BITMAP" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    },
  },
  {
    label: "Critical \u2014 yellow alert bitmap",
    onPress() {
      const obj2 = { key: null, content: "Something went wrong", icon: _modDef5008 };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "ERROR_BITMAP" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    },
  },
  {
    label: "Default \u2014 information bitmap",
    onPress() {
      const obj2 = { key: null, content: Thisisatoastmessage, icon: _modDef5012 };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "INFO_BITMAP" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    },
  },
  {
    label: "Default \u2014 icon passthrough",
    onPress() {
      const obj2 = { key: null, content: "Copied", IconComponent: CopyIcon.CopyIcon };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "PASSTHROUGH" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    },
  },
  {
    label: "Default \u2014 no icon",
    onPress() {
      const obj2 = { key: null, content: Thisisatoastmessage };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "NO_ICON" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    },
  },
  {
    label: "Long text",
    onPress() {
      const obj2 = {
        key: null,
        content:
          "This is a much longer toast message that should wrap onto several lines and then clamp, so the container has to make room for it.",
      };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "LONG" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    },
  },
];
let items1 = [
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
    },
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
    },
  },
  {
    label: "Dismiss current",
    onPress() {
      return ToastActionCreatorsDefault.close();
    },
  },
];
const items2 = [
  {
    label: "Bottom position",
    onPress() {
      const obj2 = { key: null, content: Thisisatoastmessage, position: "bottom" };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "BOTTOM" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    },
  },
  {
    label: "Ten second duration",
    onPress() {
      const obj2 = { key: null, content: Thisisatoastmessage, toastDurationMs: 10000 };
      const sum = sum2 + 1;
      sum2 = sum;
      obj2.key = "" + "DURATION" + "-" + sum;
      return ToastActionCreatorsDefault.open(obj2);
    },
  },
];
ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_16 };
let obj6 = {
  label: "Success \u2014 checkmark component",
  onPress() {
    const obj2 = {
      key: null,
      content: "Saved",
      IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon,
      iconColor: "status-positive",
    };
    const sum = sum2 + 1;
    sum2 = sum;
    obj2.key = "" + "SUCCESS_COMPONENT" + "-" + sum;
    return ToastActionCreatorsDefault.open(obj2);
  },
};
let obj7 = {
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
  },
};
let obj8 = {
  label: "Bottom position",
  onPress() {
    const obj2 = { key: null, content: Thisisatoastmessage, position: "bottom" };
    const sum = sum2 + 1;
    sum2 = sum;
    obj2.key = "" + "BOTTOM" + "-" + sum;
    return ToastActionCreatorsDefault.open(obj2);
  },
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemToast.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserSettingsDesignSystemToast() {
      const cResult = c.c(21);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const emojiUrl = EmojiUtils.getEmojiUrl({ name: "\u{1F525}" });
        cResult[0] = emojiUrl;
        let first = emojiUrl;
        const tmpResult = EmojiUtils;
      } else {
        first = cResult[0];
      }
      const tmp6 = closure_9();
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp13 = React4(closure_11, {});
        const obj2 = {
          title: "Automatic mapping",
          hint: "These use the older toast props and are converted to Mana toasts. Checkmarks and Xs become status variants whether the call site passes a component or a bitmap.",
          demos: items,
        };
        const tmp16 = React4(closure_10, obj2);
        const obj3 = {
          title: "Queueing",
          hint: "Toasts queue, but repeats of the key on screen are dropped.",
          demos: items1,
        };
        const tmp18 = React4(closure_10, obj3);
        const obj4 = {
          title: "Placement",
          hint: "Both are deprecated on the Mana API but still forwarded, so existing call sites keep working.",
          demos: items2,
        };
        const tmp20 = React4(closure_10, obj4);
        cResult[1] = tmp13;
        cResult[2] = tmp16;
        cResult[3] = tmp18;
        cResult[4] = tmp20;
        let tmp10 = tmp20;
        let tmp9 = tmp18;
        let tmp8 = tmp16;
        let tmp7 = tmp13;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp29 = React4(Text_Text.Text, { variant: "text-lg/bold", children: "Components" });
        const obj5 = { text: Thisisatoastmessage, variant: "default" };
        const tmp31 = React4(Toast.Toast, obj5);
        const obj6 = {
          text: Thisisatoastmessage,
          variant: "default",
          icon: CircleInformationIcon.CircleInformationIcon,
        };
        const tmp32 = React4(Toast.Toast, obj6);
        const obj7 = {
          text: Thisisatoastmessage,
          variant: "default",
          icon: CircleInformationIcon.CircleInformationIcon,
          iconColor: nativeDefault.colors.ICON_BRAND,
          secondaryIconColor: nativeDefault.colors.ICON_DEFAULT,
        };
        const tmp34 = React4(Toast.Toast, obj7);
        const obj8 = { text: Thisisatoastmessage, variant: "success" };
        const tmp35 = React4(Toast.Toast, obj8);
        const obj9 = { text: Thisisatoastmessage, variant: "critical" };
        const tmp36 = React4(Toast.Toast, obj9);
        const tmp37 = React4(Text_Text.Text, { variant: "text-lg/bold", children: "Entities" });
        cResult[5] = tmp36;
        cResult[6] = tmp37;
        cResult[7] = tmp29;
        cResult[8] = tmp31;
        cResult[9] = tmp32;
        cResult[10] = tmp34;
        cResult[11] = tmp35;
        let tmp27 = tmp35;
        let tmp26 = tmp34;
        let tmp25 = tmp32;
        let tmp24 = tmp31;
        let tmp23 = tmp29;
        let tmp22 = tmp37;
        let tmp21 = tmp36;
      } else {
        tmp21 = cResult[5];
        tmp22 = cResult[6];
        tmp23 = cResult[7];
        tmp24 = cResult[8];
        tmp25 = cResult[9];
        tmp26 = cResult[10];
        tmp27 = cResult[11];
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        if ("" !== first) {
          const obj10 = { type: "emoji", src: first, alt: "\u{1F525}" };
          let obj11 = obj10;
        } else {
          obj11 = { type: "emoji", unicode: "\u{1F525}" };
        }
        const obj12 = { text: "Default reaction set to \u{1F525}", icon: obj11 };
        const tmp38Result = React4(Toast.Toast, obj12);
        cResult[12] = tmp38Result;
      } else {
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj13 = { text: "Nelly is now speaking", icon: null };
          const obj14 = { type: "avatar", src, alt: "Nelly" };
          obj13.icon = obj14;
          const tmp44 = React4(Toast.Toast, obj13);
          cResult[13] = tmp44;
          let tmp41 = tmp44;
        } else {
          tmp41 = cResult[13];
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const obj15 = { text: "Discord Staff", icon: null };
          const obj16 = { type: "guild", src, name: "Discord Staff" };
          obj15.icon = obj16;
          const tmp48 = React4(Toast.Toast, obj15);
          cResult[14] = tmp48;
          let tmp45 = tmp48;
        } else {
          tmp45 = cResult[14];
        }
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const obj17 = { text: "Discord Staff", icon: { type: "guild", src: null, name: "Discord Staff" } };
          const tmp51 = React4(Toast.Toast, obj17);
          cResult[15] = tmp51;
          let tmp49 = tmp51;
        } else {
          tmp49 = cResult[15];
        }
        if (cResult[16] !== tmp6.previews) {
          const obj18 = { spacing: nativeDefault.space.PX_16, children: null };
          items = [tmp7, tmp8, tmp9, tmp10];
          const obj19 = { children: null };
          const obj20 = { spacing: nativeDefault.space.PX_12, style: tmp6.previews, children: null };
          items1 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp21, tmp22, cResult[12], tmp41, tmp45, tmp49];
          obj20.children = items1;
          obj19.children = hasOwnProperty(Stack_Stack.Stack, obj20);
          items[4] = React4(Card.Card, obj19);
          obj18.children = items;
          const tmp56 = hasOwnProperty(Stack_Stack.Stack, obj18);
          cResult[16] = tmp6.previews;
          cResult[17] = tmp56;
          let tmp52 = tmp56;
        } else {
          tmp52 = cResult[17];
        }
        if (cResult[18] === tmp6.container) {
          if (cResult[19] === tmp52) {
            let tmp57 = cResult[20];
          }
          return tmp57;
        }
        const obj21 = { contentContainerStyle: tmp6.container, children: tmp52 };
        const tmp60 = React4(ScrollView, obj21);
        cResult[18] = tmp6.container;
        cResult[19] = tmp52;
        cResult[20] = tmp60;
        tmp57 = tmp60;
      }
    }
  : function UserSettingsDesignSystemToast() {
      const emojiUrl = EmojiUtils.getEmojiUrl({ name: "\u{1F525}" });
      const tmp4 = closure_9();
      const obj2 = { contentContainerStyle: tmp4.container, children: null };
      const obj3 = { spacing: nativeDefault.space.PX_16, children: null };
      items = [React4(closure_11, {}), , , ,];
      items[1] = React4(closure_10, {
        title: "Automatic mapping",
        hint: "These use the older toast props and are converted to Mana toasts. Checkmarks and Xs become status variants whether the call site passes a component or a bitmap.",
        demos: items,
      });
      items[2] = React4(closure_10, {
        title: "Queueing",
        hint: "Toasts queue, but repeats of the key on screen are dropped.",
        demos: items1,
      });
      items[3] = React4(closure_10, {
        title: "Placement",
        hint: "Both are deprecated on the Mana API but still forwarded, so existing call sites keep working.",
        demos: items2,
      });
      const obj7 = { spacing: nativeDefault.space.PX_12, style: tmp4.previews, children: null };
      items1 = [
        React4(Text_Text.Text, { variant: "text-lg/bold", children: "Components" }),
        React4(Toast.Toast, { text: Thisisatoastmessage, variant: "default" }),
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
      ];
      const obj4 = {
        title: "Automatic mapping",
        hint: "These use the older toast props and are converted to Mana toasts. Checkmarks and Xs become status variants whether the call site passes a component or a bitmap.",
        demos: items,
      };
      const obj5 = {
        title: "Queueing",
        hint: "Toasts queue, but repeats of the key on screen are dropped.",
        demos: items1,
      };
      const obj6 = {
        title: "Placement",
        hint: "Both are deprecated on the Mana API but still forwarded, so existing call sites keep working.",
        demos: items2,
      };
      const obj8 = { text: Thisisatoastmessage, variant: "default" };
      items1[2] = React4(Toast.Toast, {
        text: Thisisatoastmessage,
        variant: "default",
        icon: CircleInformationIcon.CircleInformationIcon,
      });
      const obj9 = { text: Thisisatoastmessage, variant: "default", icon: CircleInformationIcon.CircleInformationIcon };
      items1[3] = React4(Toast.Toast, {
        text: Thisisatoastmessage,
        variant: "default",
        icon: CircleInformationIcon.CircleInformationIcon,
        iconColor: nativeDefault.colors.ICON_BRAND,
        secondaryIconColor: nativeDefault.colors.ICON_DEFAULT,
      });
      items1[4] = React4(Toast.Toast, { text: Thisisatoastmessage, variant: "success" });
      items1[5] = React4(Toast.Toast, { text: Thisisatoastmessage, variant: "critical" });
      items1[6] = React4(Text_Text.Text, { variant: "text-lg/bold", children: "Entities" });
      if ("" !== emojiUrl) {
        const obj13 = { type: "emoji", src: emojiUrl, alt: "\u{1F525}" };
        let obj14 = obj13;
      } else {
        obj14 = { type: "emoji", unicode: "\u{1F525}" };
      }
      const obj15 = { children: null };
      items1[7] = React4(Toast.Toast, { text: "Default reaction set to \u{1F525}", icon: obj14 });
      const obj16 = { text: "Nelly is now speaking", icon: { type: "avatar", src, alt: "Nelly" } };
      items1[8] = React4(Toast.Toast, obj16);
      items1[9] = React4(Toast.Toast, { text: "Discord Staff", icon: { type: "guild", src, name: "Discord Staff" } });
      items1[10] = React4(Toast.Toast, {
        text: "Discord Staff",
        icon: { type: "guild", src: null, name: "Discord Staff" },
      });
      obj7.children = items1;
      obj15.children = hasOwnProperty(Stack_Stack.Stack, obj7);
      items[4] = React4(Card.Card, obj15);
      obj3.children = items;
      obj2.children = hasOwnProperty(Stack_Stack.Stack, obj3);
      return React4(ScrollView, obj2);
    };
