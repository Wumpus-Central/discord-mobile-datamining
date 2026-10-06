// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemToast.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import EmojiUtils from "../../../../utils/EmojiUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import toastUtils from "../../../../design/mana/components/Toast/toastUtils.native.tsx";
import DesignSystemsNotificationComponentsExperiment from "../../../design/DesignSystemsNotificationComponentsExperiment.tsx";
import CheckmarkLargeIcon from "../../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import XLargeIcon from "../../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04811_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/04813_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../../_runtime/04817_AssetRegistry.js";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import CopyIcon from "../../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import Toast_Toast from "../../../../design/mana/components/Toast/Toast.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ToastStore from "../../../toast/native/ToastStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
let obj2;
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = "This is a toast message";
let c8 = "https://cdn.discordapp.com/embed/avatars/0.png";
let c9 = 0;
let obj = { container: obj2, previews: { alignItems: "center" } };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let Stack;
      let demos;
      let hint;
      let obj5;
      let title;
      let tmp10;
      let tmp4;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(11);
      ({ title, hint, demos } = arg0);
      if (cResult[0] !== title) {
        const obj2 = { variant: "text-lg/bold", children: title };
        const tmp6 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[0] = title;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== hint) {
        const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: hint };
        const tmp9 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[2] = hint;
        cResult[3] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== demos) {
        let tmp12;
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(label) {
            const obj = { variant: "secondary", size: "sm", text: label.label, onPress: label.onPress };
            return closure_1_5(components_Button_Button.Button, obj, label.label);
          };
          cResult[6] = fn;
          tmp12 = fn;
        } else {
          tmp12 = cResult[6];
        }
        const mapped = demos.map(tmp12);
        cResult[4] = demos;
        cResult[5] = mapped;
        tmp10 = mapped;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[7] === tmp4) {
        if (cResult[8] === tmp7) {
          let tmp14;
          if (cResult[9] === tmp10) {
            tmp14 = cResult[10];
          }
          return tmp14;
        }
      }
      const obj4 = { children: metroRequire(Stack, obj5) };
      const Card = Card_Card.Card;
      obj5 = { spacing: nativeDefault.space.PX_8, children: items };
      Stack = Stack_Stack.Stack;
      items = [tmp4, tmp7, tmp10];
      const tmp15 = hasOwnProperty(Card, obj4);
      cResult[7] = tmp4;
      cResult[8] = tmp7;
      cResult[9] = tmp10;
      cResult[10] = tmp15;
      tmp14 = tmp15;
    }
  : (demos) => {
      let Stack;
      let hint;
      let obj2;
      let title;
      demos = demos.demos;
      ({ title, hint } = demos);
      let obj = { children: metroRequire(Stack, obj2) };
      const Card = Card_Card.Card;
      obj2 = { spacing: nativeDefault.space.PX_8, children: items };
      Stack = Stack_Stack.Stack;
      items = [
        hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: title }),
        hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: hint }),
        demos.map((label) => {
          const obj = { variant: "secondary", size: "sm", text: label.label, onPress: label.onPress };
          return closure_1_5(components_Button_Button.Button, obj, label.label);
        }),
      ];
      return hasOwnProperty(Card, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Stack;
      let content;
      let obj3;
      let tmp10;
      let tmp12;
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(17);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [ToastStore];
        const fn = function o() {
          return content.getContent();
        };
        let num = 0;
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function u(currentToastMap) {
          currentToastMap = currentToastMap.currentToastMap;
          const value = currentToastMap.get("app");
          let toast;
          if (value != null) {
            toast = value.toast;
          }
          return toast;
        };
        cResult[2] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult3 = toastUtils;
      const toastStore = tmpResult3.useToastStore(tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function p(queuedToastsMap) {
          queuedToastsMap = queuedToastsMap.queuedToastsMap;
          const value = queuedToastsMap.get("app");
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
        tmp10 = fn3;
      } else {
        tmp10 = cResult[3];
      }
      const tmpResult4 = toastUtils;
      const toastStore1 = tmpResult4.useToastStore(tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Live stores" });
        cResult[4] = tmp14;
        tmp12 = tmp14;
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
          let tmp15;
          let tmp17;
          if (cResult[7] === str4) {
            tmp15 = cResult[8];
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
            tmp17 = str7;
          } else {
            tmp17 = cResult[10];
          }
          if (cResult[11] === tmp17) {
            let tmp18;
            if (cResult[12] === str) {
              tmp18 = cResult[13];
            }
            if (cResult[14] === tmp18) {
              let tmp21;
              if (cResult[15] === tmp15) {
                tmp21 = cResult[16];
              }
              return tmp21;
            }
            const obj2 = { children: metroRequire(Stack, obj3) };
            const Card = Card_Card.Card;
            obj3 = { spacing: nativeDefault.space.PX_8, children: items1 };
            Stack = Stack_Stack.Stack;
            items1 = [tmp12, tmp15, tmp18];
            const tmp25 = hasOwnProperty(Card, obj2);
            cResult[14] = tmp18;
            cResult[15] = tmp15;
            cResult[16] = tmp25;
            tmp21 = tmp25;
          }
          const obj4 = { variant: "text-md/medium", color: str, children: items2 };
          items2 = ["Legacy: ", tmp17];
          const tmp20 = metroRequire(Text_Text.Text, obj4);
          cResult[11] = tmp17;
          cResult[12] = str;
          cResult[13] = tmp20;
          tmp18 = tmp20;
        }
      }
      const obj5 = { variant: "text-md/medium", color: str2, children: items3 };
      items3 = ["Mana: ", str3, str4];
      const tmp16 = metroRequire(Text_Text.Text, obj5);
      cResult[5] = str2;
      cResult[6] = str3;
      cResult[7] = str4;
      cResult[8] = tmp16;
      tmp15 = tmp16;
    }
  : () => {
      let content;
      items = [ToastStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => content.getContent());
      const obj2 = toastUtils;
      const toastStore = obj2.useToastStore((currentToastMap) => {
        currentToastMap = currentToastMap.currentToastMap;
        const value = currentToastMap.get("app");
        let toast;
        if (value != null) {
          toast = value.toast;
        }
        return toast;
      });
      const obj3 = toastUtils;
      const toastStore1 = obj3.useToastStore((queuedToastsMap) => {
        queuedToastsMap = queuedToastsMap.queuedToastsMap;
        const value = queuedToastsMap.get("app");
        let num;
        if (value != null) {
          num = value.length;
        }
        if (num == null) {
          num = 0;
        }
        return num;
      });
      const Card = Card_Card.Card;
      const obj4 = { spacing: nativeDefault.space.PX_8, children: items1 };
      const Stack = Stack_Stack.Stack;
      items1 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Live stores" }), ,];
      let str = "text-subtle";
      let str2 = "text-subtle";
      const Text = Text_Text.Text;
      if (null != toastStore) {
        str2 = "text-feedback-positive";
      }
      let str3;
      const obj5 = { variant: "text-md/medium", color: str2, children: items2 };
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
      items1[1] = metroRequire(Text, obj5);
      const Text2 = Text_Text.Text;
      if (null != stateFromStores) {
        str = "text-feedback-positive";
      }
      let str7 = "idle";
      const obj6 = { variant: "text-md/medium", color: str, children: items3 };
      if (null != stateFromStores) {
        let str8 = "(rendered content)";
        if (typeof stateFromStores.content === "string") {
          str8 = stateFromStores.content;
        }
        str7 = str8;
      }
      items3 = ["Legacy: ", str7];
      const obj7 = { children: metroRequire(Stack, obj4) };
      items1[2] = metroRequire(Text2, obj6);
      return hasOwnProperty(Card, obj7);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Stack;
      let first;
      let obj5;
      let tmp11;
      let tmp14;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(6);
      const obj2 = DesignSystemsNotificationComponentsExperiment;
      const designSystemsNotificationComponents = obj2.useDesignSystemsNotificationComponents(
        "UserSettingsDesignSystemToast",
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Active renderer" });
        cResult[0] = tmp7;
        first = tmp7;
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
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp13 = hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children:
            "Routing happens per toast, so the stores below are what actually rendered. Toggle 2026-09-design-systems-notification-components to switch renderers.",
        });
        cResult[3] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== tmp8) {
        const obj4 = { children: metroRequire(Stack, obj5) };
        const Card = Card_Card.Card;
        obj5 = { spacing: nativeDefault.space.PX_8, children: items };
        Stack = Stack_Stack.Stack;
        items = [first, tmp8, tmp11];
        const tmp18 = hasOwnProperty(Card, obj4);
        cResult[4] = tmp8;
        cResult[5] = tmp18;
        tmp14 = tmp18;
      } else {
        tmp14 = cResult[5];
      }
      return tmp14;
    }
  : () => {
      const obj = DesignSystemsNotificationComponentsExperiment;
      const designSystemsNotificationComponents = obj.useDesignSystemsNotificationComponents(
        "UserSettingsDesignSystemToast",
      );
      const Card = Card_Card.Card;
      const obj2 = { spacing: nativeDefault.space.PX_8, children: items };
      const Stack = Stack_Stack.Stack;
      items = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Active renderer" }), ,];
      let str = "Legacy toast";
      const Text = Text_Text.Text;
      if (designSystemsNotificationComponents) {
        str = "Mana toast";
      }
      const obj3 = { children: metroRequire(Stack, obj2) };
      items[1] = hasOwnProperty(Text, { variant: "text-md/medium", children: str });
      items[2] = hasOwnProperty(Text_Text.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children:
          "Routing happens per toast, so the stores below are what actually rendered. Toggle 2026-09-design-systems-notification-components to switch renderers.",
      });
      return hasOwnProperty(Card, obj3);
    };
let obj3 = {
  label: "Success \u2014 checkmark component",
  onPress() {
    const tmp = ToastActionCreatorsDefault;
    const obj = {
      key: "" + "SUCCESS_COMPONENT" + "-" + c9,
      content: "Saved",
      IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon,
      iconColor: "status-positive",
    };
    c9 = c9 + 1;
    const open = tmp.open;
    return open(obj);
  },
};
let items = [
  obj3,
  {
    label: "Critical \u2014 X component",
    onPress() {
      const tmp = ToastActionCreatorsDefault;
      const obj = {
        key: "" + "ERROR_COMPONENT" + "-" + c9,
        content: "Something went wrong",
        IconComponent: XLargeIcon.XLargeIcon,
        iconColor: "icon-feedback-critical",
      };
      c9 = c9 + 1;
      const open = tmp.open;
      return open(obj);
    },
  },
  {
    label: "Success \u2014 checkmark bitmap",
    onPress() {
      const tmp = ToastActionCreatorsDefault;
      const obj = { key: "" + "SUCCESS_BITMAP" + "-" + c9, content: "Saved", icon: AssetRegistryDefault };
      c9 = c9 + 1;
      const open = tmp.open;
      return open(obj);
    },
  },
  {
    label: "Critical \u2014 yellow alert bitmap",
    onPress() {
      const tmp = ToastActionCreatorsDefault;
      const obj = { key: "" + "ERROR_BITMAP" + "-" + c9, content: "Something went wrong", icon: AssetRegistryDefault2 };
      c9 = c9 + 1;
      const open = tmp.open;
      return open(obj);
    },
  },
  {
    label: "Default \u2014 information bitmap",
    onPress() {
      const tmp = ToastActionCreatorsDefault;
      const obj = { key: "" + "INFO_BITMAP" + "-" + c9, content: Thisisatoastmessage, icon: AssetRegistryDefault3 };
      c9 = c9 + 1;
      const open = tmp.open;
      return open(obj);
    },
  },
  {
    label: "Default \u2014 icon passthrough",
    onPress() {
      const tmp = ToastActionCreatorsDefault;
      const obj = { key: "" + "PASSTHROUGH" + "-" + c9, content: "Copied", IconComponent: CopyIcon.CopyIcon };
      c9 = c9 + 1;
      const open = tmp.open;
      return open(obj);
    },
  },
  {
    label: "Default \u2014 no icon",
    onPress() {
      const obj = { key: "" + "NO_ICON" + "-" + c9, content: Thisisatoastmessage };
      c9 = c9 + 1;
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      return open(obj);
    },
  },
  {
    label: "Long text",
    onPress() {
      const obj = {
        key: "" + "LONG" + "-" + c9,
        content:
          "This is a much longer toast message that should wrap onto several lines and then clamp, so the container has to make room for it.",
      };
      c9 = c9 + 1;
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      return open(obj);
    },
  },
];
let obj4 = {
  label: "Rendered icon",
  onPress() {
    const obj = {
      key: "" + "RENDERED_ICON" + "-" + c9,
      content: "Icon is a render function",
      icon() {
        return closure_1_5(CircleInformationIcon.CircleInformationIcon, { size: "sm", color: "text-brand" });
      },
    };
    c9 = c9 + 1;
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    return open(obj);
  },
};
let items1 = [
  obj4,
  {
    label: "Rendered content",
    onPress() {
      const obj = {
        key: "" + "RENDERED_CONTENT" + "-" + c9,
        content() {
          return closure_1_5(Text_Text.Text, {
            variant: "text-sm/semibold",
            color: "text-brand",
            children: "Content is a render function",
          });
        },
      };
      c9 = c9 + 1;
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      return open(obj);
    },
  },
  {
    label: "Unsubstitutable bitmap",
    onPress() {
      const obj = {
        key: "" + "UNMAPPED_BITMAP" + "-" + c9,
        content: "Icon has no Mana equivalent",
        icon: { uri: "https://cdn.discordapp.com/embed/avatars/0.png" },
      };
      c9 = c9 + 1;
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      return open(obj);
    },
  },
];
let obj5 = {
  label: "Queue three",
  onPress() {
    let sum1;
    let sum2;
    const obj = { key: "" + "QUEUE" + "-" + c9, content: "First of three" };
    c9 = c9 + 1;
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    open(obj);
    const obj2 = { key: "" + "QUEUE" + "-" + sum1, content: "Second of three" };
    sum1 = c9 + 1;
    c9 = sum1;
    const open2 = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    open2(obj2);
    const obj3 = { key: "" + "QUEUE" + "-" + sum2, content: "Third of three" };
    sum2 = c9 + 1;
    c9 = sum2;
    const open3 = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    open3(obj3);
  },
};
let items2 = [
  obj5,
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
      const obj = ToastActionCreatorsDefault;
      return obj.close();
    },
  },
];
let obj6 = {
  label: "Bottom position",
  onPress() {
    const obj = { key: "" + "BOTTOM" + "-" + c9, content: Thisisatoastmessage, position: "bottom" };
    c9 = c9 + 1;
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    return open(obj);
  },
};
let items3 = [
  obj6,
  {
    label: "Ten second duration",
    onPress() {
      const obj = { key: "" + "DURATION" + "-" + c9, content: Thisisatoastmessage, toastDurationMs: 10000 };
      c9 = c9 + 1;
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      return open(obj);
    },
  },
];
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Stack2;
      let first;
      let obj15;
      let obj17;
      let obj21;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp27;
      let tmp28;
      let tmp29;
      let tmp30;
      let tmp31;
      let tmp32;
      let tmp33;
      let tmp44;
      let tmp47;
      let tmp51;
      let tmp55;
      let tmp58;
      let tmp7;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(23);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = EmojiUtils;
        const emojiUrl = tmpResult.getEmojiUrl({ name: "\u{1F525}" });
        cResult[0] = emojiUrl;
        first = emojiUrl;
      } else {
        first = cResult[0];
      }
      const tmp6 = closure_10();
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = hasOwnProperty(closure_13, {});
        const tmp17 = hasOwnProperty(closure_12, {});
        const obj2 = {
          title: "Mana renderer",
          hint: "Under the experiment these all route to the Mana toast. Checkmarks and Xs become status variants whether the call site passes a component or a bitmap.",
          demos: items,
        };
        const tmp20 = hasOwnProperty(closure_11, obj2);
        const obj3 = {
          title: "Legacy fallback",
          hint: "No Mana equivalent, so these stay on the legacy renderer even with the experiment on. Watch which store they land in above.",
          demos: items1,
        };
        const tmp22 = hasOwnProperty(closure_11, obj3);
        const obj4 = {
          title: "Queueing",
          hint: "The legacy store holds one toast and drops repeats of the key on screen; the Mana store queues.",
          demos: items2,
        };
        const tmp24 = hasOwnProperty(closure_11, obj4);
        const obj5 = {
          title: "Placement",
          hint: "Both are deprecated on the Mana API but still forwarded, so existing call sites keep working.",
          demos: items3,
        };
        const tmp26 = hasOwnProperty(closure_11, obj5);
        cResult[1] = tmp15;
        cResult[2] = tmp17;
        cResult[3] = tmp20;
        cResult[4] = tmp22;
        cResult[5] = tmp24;
        cResult[6] = tmp26;
        tmp12 = tmp26;
        tmp11 = tmp24;
        tmp10 = tmp22;
        tmp9 = tmp20;
        tmp8 = tmp17;
        tmp7 = tmp15;
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
        const obj7 = {
          text: Thisisatoastmessage,
          variant: "default",
          icon: CircleInformationIcon.CircleInformationIcon,
        };
        const Toast = Toast_Toast.Toast;
        const tmp38 = hasOwnProperty(Toast, obj7);
        const obj8 = {
          text: Thisisatoastmessage,
          variant: "default",
          icon: CircleInformationIcon.CircleInformationIcon,
          iconColor: nativeDefault.colors.ICON_BRAND,
          secondaryIconColor: nativeDefault.colors.ICON_DEFAULT,
        };
        const Toast2 = Toast_Toast.Toast;
        const tmp40 = hasOwnProperty(Toast2, obj8);
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
        tmp33 = tmp38;
        tmp32 = tmp37;
        tmp31 = tmp35;
        tmp30 = tmp43;
        tmp29 = tmp42;
        tmp28 = tmp41;
        tmp27 = tmp40;
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
        let obj12;
        const Toast3 = Toast_Toast.Toast;
        if ("" !== first) {
          obj12 = { type: "emoji", src: first, alt: "\u{1F525}" };
          const obj11 = { type: "emoji", src: first, alt: "\u{1F525}" };
        } else {
          obj12 = { type: "emoji", unicode: "\u{1F525}" };
        }
        const obj13 = { text: "Default reaction set to \u{1F525}", icon: obj12 };
        const tmp45Result = hasOwnProperty(Toast3, obj13);
        cResult[14] = tmp45Result;
        tmp44 = tmp45Result;
      } else {
        tmp44 = cResult[14];
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const obj14 = { text: "Nelly is now speaking", icon: obj15 };
        obj15 = { type: "avatar", src, alt: "Nelly" };
        const tmp50 = hasOwnProperty(Toast_Toast.Toast, obj14);
        cResult[15] = tmp50;
        tmp47 = tmp50;
      } else {
        tmp47 = cResult[15];
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const obj16 = { text: "Discord Staff", icon: obj17 };
        obj17 = { type: "guild", src, name: "Discord Staff" };
        const tmp54 = hasOwnProperty(Toast_Toast.Toast, obj16);
        cResult[16] = tmp54;
        tmp51 = tmp54;
      } else {
        tmp51 = cResult[16];
      }
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj18 = { text: "Discord Staff", icon: { type: "guild", src: null, name: "Discord Staff" } };
        const tmp57 = hasOwnProperty(Toast_Toast.Toast, obj18);
        cResult[17] = tmp57;
        tmp55 = tmp57;
      } else {
        tmp55 = cResult[17];
      }
      if (cResult[18] !== tmp6.previews) {
        const obj19 = { spacing: nativeDefault.space.PX_16, children: items };
        const Stack = Stack_Stack.Stack;
        items = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
        const obj20 = { children: metroRequire(Stack2, obj21) };
        const Card = Card_Card.Card;
        obj21 = { spacing: nativeDefault.space.PX_12, style: tmp6.previews, children: items1 };
        Stack2 = Stack_Stack.Stack;
        items1 = [tmp31, tmp32, tmp33, tmp27, tmp28, tmp29, tmp30, tmp44, tmp47, tmp51, tmp55];
        items[6] = hasOwnProperty(Card, obj20);
        const tmp62 = metroRequire(Stack, obj19);
        cResult[18] = tmp6.previews;
        cResult[19] = tmp62;
        tmp58 = tmp62;
      } else {
        tmp58 = cResult[19];
      }
      if (cResult[20] === tmp6.container) {
        let tmp63;
        if (cResult[21] === tmp58) {
          tmp63 = cResult[22];
        }
        return tmp63;
      }
      const obj22 = { contentContainerStyle: tmp6.container, children: tmp58 };
      const tmp64 = hasOwnProperty(ScrollView, obj22);
      cResult[20] = tmp6.container;
      cResult[21] = tmp58;
      cResult[22] = tmp64;
      tmp63 = tmp64;
    }
  : () => {
      let Stack;
      let obj15;
      let obj18;
      let obj3;
      const obj = EmojiUtils;
      const emojiUrl = obj.getEmojiUrl({ name: "\u{1F525}" });
      const tmp4 = closure_10();
      const obj2 = { contentContainerStyle: tmp4.container, children: metroRequire(Stack, obj3) };
      obj3 = { spacing: nativeDefault.space.PX_16, children: items };
      Stack = Stack_Stack.Stack;
      items = [hasOwnProperty(closure_13, {}), hasOwnProperty(closure_12, {}), , , , ,];
      const obj4 = {
        title: "Mana renderer",
        hint: "Under the experiment these all route to the Mana toast. Checkmarks and Xs become status variants whether the call site passes a component or a bitmap.",
        demos: items,
      };
      items[2] = hasOwnProperty(closure_11, obj4);
      const obj5 = {
        title: "Legacy fallback",
        hint: "No Mana equivalent, so these stay on the legacy renderer even with the experiment on. Watch which store they land in above.",
        demos: items1,
      };
      items[3] = hasOwnProperty(closure_11, obj5);
      const obj6 = {
        title: "Queueing",
        hint: "The legacy store holds one toast and drops repeats of the key on screen; the Mana store queues.",
        demos: items2,
      };
      items[4] = hasOwnProperty(closure_11, obj6);
      const obj7 = {
        title: "Placement",
        hint: "Both are deprecated on the Mana API but still forwarded, so existing call sites keep working.",
        demos: items3,
      };
      items[5] = hasOwnProperty(closure_11, obj7);
      const Card = Card_Card.Card;
      const obj8 = { spacing: nativeDefault.space.PX_12, style: tmp4.previews, children: items1 };
      const Stack2 = Stack_Stack.Stack;
      items1 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Components" }), , , , , , , , , ,];
      const obj9 = { text: Thisisatoastmessage, variant: "default" };
      items1[1] = hasOwnProperty(Toast_Toast.Toast, obj9);
      const obj10 = {
        text: Thisisatoastmessage,
        variant: "default",
        icon: CircleInformationIcon.CircleInformationIcon,
      };
      const Toast = Toast_Toast.Toast;
      items1[2] = hasOwnProperty(Toast, obj10);
      const obj11 = {
        text: Thisisatoastmessage,
        variant: "default",
        icon: CircleInformationIcon.CircleInformationIcon,
        iconColor: nativeDefault.colors.ICON_BRAND,
        secondaryIconColor: nativeDefault.colors.ICON_DEFAULT,
      };
      const Toast2 = Toast_Toast.Toast;
      items1[3] = hasOwnProperty(Toast2, obj11);
      const obj12 = { text: Thisisatoastmessage, variant: "success" };
      items1[4] = hasOwnProperty(Toast_Toast.Toast, obj12);
      const obj13 = { text: Thisisatoastmessage, variant: "critical" };
      items1[5] = hasOwnProperty(Toast_Toast.Toast, obj13);
      items1[6] = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Entities" });
      const Toast3 = Toast_Toast.Toast;
      if ("" !== emojiUrl) {
        obj15 = { type: "emoji", src: emojiUrl, alt: "\u{1F525}" };
        const obj14 = { type: "emoji", src: emojiUrl, alt: "\u{1F525}" };
      } else {
        obj15 = { type: "emoji", unicode: "\u{1F525}" };
      }
      const obj16 = { children: metroRequire(Stack2, obj8) };
      items1[7] = hasOwnProperty(Toast3, { text: "Default reaction set to \u{1F525}", icon: obj15 });
      const obj17 = { text: "Nelly is now speaking", icon: obj18 };
      obj18 = { type: "avatar", src, alt: "Nelly" };
      items1[8] = hasOwnProperty(Toast_Toast.Toast, obj17);
      const obj19 = { text: "Discord Staff", icon: { type: "guild", src, name: "Discord Staff" } };
      items1[9] = hasOwnProperty(Toast_Toast.Toast, obj19);
      items1[10] = hasOwnProperty(Toast_Toast.Toast, {
        text: "Discord Staff",
        icon: { type: "guild", src: null, name: "Discord Staff" },
      });
      items[6] = hasOwnProperty(Card, obj16);
      return hasOwnProperty(ScrollView, obj2);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemToast.tsx",
);

export default tmp4;
