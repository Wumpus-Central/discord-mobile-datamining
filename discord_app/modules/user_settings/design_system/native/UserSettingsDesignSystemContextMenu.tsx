// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemContextMenu.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4524 from "../../../../../_runtime/metro/04524__.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import _modDef7094 from "../../../../../_runtime/metro/07094__.js";
import _modDef7966 from "../../../../../_runtime/metro/07966__.js";
import _modDef11253 from "../../../../../_runtime/metro/11253__.js";
import _modDef11564 from "../../../../../_runtime/metro/11564__.js";
import _modDef12773 from "../../../../../_runtime/metro/12773__.js";
import _modDef15778 from "../../../../../_runtime/metro/15778__.js";
import _modDef15779 from "../../../../../_runtime/metro/15779__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function DemoContextMenu(align) {
  ({ label: require, triggerOnLongPress } = align);
  if (triggerOnLongPress === undefined) {
    triggerOnLongPress = false;
  }
  let num = align.count;
  if (num === undefined) {
    num = 3;
  }
  let num2 = align.sections;
  if (num2 === undefined) {
    num2 = 1;
  }
  let str = align.alignButton;
  if (str === undefined) {
    str = "flex-start";
  }
  items = [num, num2];
  let obj = { style: { alignSelf: str }, children: null };
  const memo = num2.useMemo(() => {
    if (num2 > 1) {
      const _Array = Array;
      let obj = { length: tmp };
      let arr = Array.from(obj);
      let mapped = arr.map(() => {
        closure_0 = length;
        let obj = text(num[13]);
        length = obj.shuffle(closure_2_8);
        text(num[13]).shuffle(items);
        obj = { length };
        const obj2 = text(num[13]);
        return Array.from(obj).map((item, index) => {
          const obj = {
            label: length[index % length.length],
            IconComponent: "a",
            iconSource: length2[index % length2.length],
            variant: "<string:1365331342>",
            action: "<string:659423233>",
          };
          let str = "default";
          if (index === closure_0 - 1) {
            str = "destructive";
          }
          obj.variant = str;
          obj.action = function action() {};
          return obj;
        });
      });
    } else {
      closure_0 = num;
      closure_1 = _mod12.shuffle(closure_8);
      closure_2 = _mod12.shuffle(items);
      const _Array2 = Array;
      obj = { length: num };
      arr = Array.from(obj);
      mapped = arr.map((item, index) => {
        const obj = {
          label: length[index % length.length],
          IconComponent: "a",
          iconSource: length2[index % length2.length],
          variant: "<string:1365331342>",
          action: "<string:659423233>",
        };
        let str = "default";
        if (index === closure_0 - 1) {
          str = "destructive";
        }
        obj.variant = str;
        obj.action = function action() {};
        return obj;
      });
    }
    return mapped;
  }, items);
  obj = {
    triggerOnLongPress,
    items: memo,
    align: align.align,
    title: "Sample title",
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.text = text;
      obj.variant = "primary";
      return hasOwnProperty(components_Button_Button.Button, obj);
    },
  };
  obj.children = closure_5(require("ContextMenu").ContextMenu, obj);
  return closure_5(closure_3, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let items = [
  _modDef12773,
  _modDef7094,
  _modDef7966,
  _modDef11253,
  _modDef4524,
  _modDef15778,
  _modDef15779,
  _modDef11564,
];
let closure_8 = [
  "Launch Probe!",
  "Activate Laser",
  "Teleport Widget",
  "Engage Hyperdrive",
  "Deploy Robots",
  "Initiate Time Warp",
  "Beam Up Snacks",
  "Hack Database",
  "Trigger Cosmic Boom",
  "Unleash Space Vortex",
  "Activate Cloaking Device",
];
fn(4560);
let createStyles = { container: { flexDirection: "column", gap: 12, padding: 16 }, card: { gap: 12 }, divider: null };
createStyles = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 12 };
createStyles.divider = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemContextMenu.tsx",
);

export default function UserSettingsDesignSystemAlertModal() {
  const tmp = closure_9();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.card, children: null };
  items = [
    hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children:
        "You press the button to open the menu and then select an action, or tap and pan down in a single gesture.",
    }),
    hasOwnProperty(DemoContextMenu, { label: "Open Menu" }),
  ];
  obj.children = items;
  const items1 = [timestampProducer(Card.Card, obj), , , , ,];
  const obj1 = { style: tmp.card, children: null };
  const items2 = [
    hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Long Press" }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: "You can also have the menu open on long press instead.",
    }),
    hasOwnProperty(DemoContextMenu, { triggerOnLongPress: true, label: "Long Press to Open" }),
  ];
  obj1.children = items2;
  items1[1] = timestampProducer(Card.Card, obj1);
  const obj2 = { style: tmp.card, children: null };
  const items3 = [
    hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Sections" }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: "You can pass an array of arrays of items to create sections in the menu.",
    }),
    hasOwnProperty(DemoContextMenu, { label: "Open Sectioned Menu", sections: 3, count: 2 }),
  ];
  obj2.children = items3;
  items1[2] = timestampProducer(Card.Card, obj2);
  const obj3 = { style: tmp.card, children: null };
  const items4 = [
    hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Automatic Alignment" }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: "The menu will automatically align itself so that it doesn't overflow offscreen horizontally.",
    }),
    hasOwnProperty(DemoContextMenu, { alignButton: "flex-end", label: "Open Right-Aligned Menu" }),
    hasOwnProperty(React3, { style: tmp.divider }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: "It will also position itself vertically, so that it doesn't overflow offscreen vertically.",
    }),
    hasOwnProperty(DemoContextMenu, { count: 8, label: "Open Tall Menu" }),
  ];
  obj3.children = items4;
  items1[3] = timestampProducer(Card.Card, obj3);
  const obj5 = { style: tmp.card, children: null };
  const items5 = [
    hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Intentional Alignment" }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children:
        "Menus can take an align prop to intentionally align the menu, instead of using the automatic menu positioning.",
    }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children:
        "The align prop can be set to above, below, left, or right of the menu trigger. How the menu positions relative to the start or end of the trigger is then automatically determined based on the available space.",
    }),
    hasOwnProperty(React3, { style: tmp.divider }),
    hasOwnProperty(DemoContextMenu, { count: 3, align: "right", label: "Open Right" }),
    hasOwnProperty(React3, { style: tmp.divider }),
    hasOwnProperty(DemoContextMenu, { count: 3, alignButton: "flex-end", align: "left", label: "Open Left" }),
    hasOwnProperty(React3, { style: tmp.divider }),
    hasOwnProperty(DemoContextMenu, { count: 3, align: "below", label: "Always Open Below" }),
    hasOwnProperty(React3, { style: tmp.divider }),
    hasOwnProperty(DemoContextMenu, { count: 3, alignButton: "flex-end", align: "above", label: "Always Open Above" }),
  ];
  obj5.children = items5;
  items1[4] = timestampProducer(Card.Card, obj5);
  const obj10 = { style: tmp.card, children: null };
  const items6 = [
    hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Overflow Scrolling" }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children:
        "Menus should not typically have enough items to require scrolling, but with font scaling and smaller devices its possible. In this case, the menu will allow the user to scroll.",
    }),
    hasOwnProperty(DemoContextMenu, { count: 30, label: "Open Really Tall Menu" }),
  ];
  obj10.children = items6;
  items1[5] = timestampProducer(Card.Card, obj10);
  obj.children = items1;
  obj.children = timestampProducer(React3, obj);
  return hasOwnProperty(React4, obj);
}
