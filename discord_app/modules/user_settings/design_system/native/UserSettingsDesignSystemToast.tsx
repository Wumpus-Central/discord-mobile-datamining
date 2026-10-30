// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemToast.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import EmojiUtils from "../../../../utils/EmojiUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import toastUtils from "../../../../design/mana/components/Toast/toastUtils.native.tsx";
import CopyIcon from "../../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import Toast from "../../../../design/mana/components/Toast/Toast.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function DemoGroup(demos) {
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
}
function LiveStores() {
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
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = "This is a toast message";
let c7 = "https://cdn.discordapp.com/embed/avatars/0.png";
let sum2 = 0;
const createStyles = fn(5009);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, previews: { alignItems: "center" } };
let closure_9 = createStyles.createStyles(obj2);
let items = [
  {
    label: "Success",
    onPress() {
      const sum = sum2 + 1;
      sum2 = sum;
      return ToastActionCreatorsDefault.open("" + "SUCCESS" + "-" + sum, { text: "Saved", variant: "success" });
    },
  },
  {
    label: "Critical",
    onPress() {
      const sum = sum2 + 1;
      sum2 = sum;
      return ToastActionCreatorsDefault.open("" + "CRITICAL" + "-" + sum, {
        text: "Something went wrong",
        variant: "critical",
      });
    },
  },
  {
    label: "Default \u2014 information icon",
    onPress() {
      const sum = sum2 + 1;
      sum2 = sum;
      const obj2 = { text, icon: null };
      const combined = "" + "INFO_ICON" + "-" + sum;
      obj2.icon = CircleInformationIcon.CircleInformationIcon;
      return ToastActionCreatorsDefault.open(combined, obj2);
    },
  },
  {
    label: "Default \u2014 copy icon",
    onPress() {
      const sum = sum2 + 1;
      sum2 = sum;
      const obj2 = { text: "Copied", icon: null };
      const combined = "" + "COPY_ICON" + "-" + sum;
      obj2.icon = CopyIcon.CopyIcon;
      return ToastActionCreatorsDefault.open(combined, obj2);
    },
  },
  {
    label: "Default \u2014 no icon",
    onPress() {
      const sum = sum2 + 1;
      sum2 = sum;
      return ToastActionCreatorsDefault.open("" + "NO_ICON" + "-" + sum, { text });
    },
  },
  {
    label: "Long text",
    onPress() {
      const sum = sum2 + 1;
      sum2 = sum;
      return ToastActionCreatorsDefault.open("" + "LONG" + "-" + sum, {
        text: "This is a much longer toast message that should wrap onto several lines and then clamp, so the container has to make room for it.",
      });
    },
  },
];
let items1 = [
  {
    label: "Queue three",
    onPress() {
      const sum = sum2 + 1;
      sum2 = sum;
      ToastActionCreatorsDefault.open("" + "QUEUE" + "-" + sum, { text: "First of three" });
      const sum1 = sum2 + 1;
      sum2 = sum1;
      ToastActionCreatorsDefault.open("" + "QUEUE" + "-" + sum1, { text: "Second of three" });
      sum2 = sum2 + 1;
      ToastActionCreatorsDefault.open("" + "QUEUE" + "-" + sum2, { text: "Third of three" });
    },
  },
  {
    label: "Same key three times",
    onPress() {
      let num = 0;
      do {
        let obj = ToastActionCreatorsDefault;
        let openResult = obj.open("DEDUPE_DEMO", { text: "Should only appear once" });
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
      const sum = sum2 + 1;
      sum2 = sum;
      return ToastActionCreatorsDefault.open("" + "BOTTOM" + "-" + sum, { text, position: "bottom" });
    },
  },
  {
    label: "Ten second duration",
    onPress() {
      const sum = sum2 + 1;
      sum2 = sum;
      return ToastActionCreatorsDefault.open("" + "DURATION" + "-" + sum, { text, duration: 10000 });
    },
  },
];
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemToast.tsx",
);

export default function UserSettingsDesignSystemToast() {
  const emojiUrl = EmojiUtils.getEmojiUrl({ name: "\u{1F525}" });
  const tmp4 = closure_9();
  const obj2 = { contentContainerStyle: tmp4.container, children: null };
  const obj3 = { spacing: nativeDefault.space.PX_16, children: null };
  items = [React4(LiveStores, {}), , , ,];
  items[1] = React4(DemoGroup, {
    title: "Variants and icons",
    hint: "Status toasts use the success and critical variants. Other toasts can show an icon.",
    demos: items,
  });
  items[2] = React4(DemoGroup, {
    title: "Queueing",
    hint: "Toasts queue, but repeats of the key on screen are dropped.",
    demos: items1,
  });
  items[3] = React4(DemoGroup, {
    title: "Placement",
    hint: "Both are deprecated on the Mana API but still forwarded, so existing call sites keep working.",
    demos: items2,
  });
  const obj7 = { spacing: nativeDefault.space.PX_12, style: tmp4.previews, children: null };
  items1 = [
    React4(Text_Text.Text, { variant: "text-lg/bold", children: "Components" }),
    React4(Toast.Toast, { text, variant: "default" }),
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
    title: "Variants and icons",
    hint: "Status toasts use the success and critical variants. Other toasts can show an icon.",
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
  const obj8 = { text, variant: "default" };
  items1[2] = React4(Toast.Toast, { text, variant: "default", icon: CircleInformationIcon.CircleInformationIcon });
  const obj9 = { text, variant: "default", icon: CircleInformationIcon.CircleInformationIcon };
  items1[3] = React4(Toast.Toast, {
    text,
    variant: "default",
    icon: CircleInformationIcon.CircleInformationIcon,
    iconColor: nativeDefault.colors.ICON_BRAND,
    secondaryIconColor: nativeDefault.colors.ICON_DEFAULT,
  });
  items1[4] = React4(Toast.Toast, { text, variant: "success" });
  items1[5] = React4(Toast.Toast, { text, variant: "critical" });
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
}
