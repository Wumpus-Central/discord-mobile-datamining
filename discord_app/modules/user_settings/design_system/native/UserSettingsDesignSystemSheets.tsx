// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import _modDef5814 from "../../../../../discord_assets/assets/mana/asset-library/generated/BugSpotIllustration-2x.png.js";
import TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import PromoSheet from "../../../../design/components/Sheet/native/PromoSheet.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function DemoActionSheet() {
  [tmp2, tmp3] = _slicedToArray(noop.useState(false), 2);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  const first = tmp4[0];
  const tmp6 = _slicedToArray(noop.useState("Header title"), 2);
  const first1 = tmp6[0];
  const tmp = _slicedToArray(noop.useState(false), 2);
  [tmp9, tmp10] = _slicedToArray(noop.useState("Header subtitle"), 2);
  require = tmp10;
  const tmp8 = _slicedToArray(noop.useState("Header subtitle"), 2);
  [tmp12, tmp13] = _slicedToArray(noop.useState("Reset"), 2);
  importDefault = tmp13;
  let obj = { title: first1, subtitle: null, leading: null, trailing: null };
  let tmp17;
  if ("" !== tmp9) {
    tmp17 = tmp9;
  }
  obj.subtitle = tmp17;
  let tmp14Result = first;
  if (first) {
    obj = { onPress: NOOP, label: tmp12 };
    tmp14Result = React5(tmp15(9718).ActionSheetHeaderPressableText, obj);
  }
  obj.leading = tmp14Result;
  tmp14Result = tmp2;
  if (tmp2) {
    obj = { onPress: NOOP };
    tmp14Result = React5(tmp15(7199).ActionSheetCloseButton, obj);
  }
  const obj1 = { header: React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), children: null };
  obj.trailing = tmp14Result;
  const obj2 = { spacing: 24, children: null };
  const obj3 = { children: null };
  const items = [
    React5(TextInput.TextInput, { value: first1, onChange: tmp6[1], label: "Title" }),
    React5(TextInput.TextInput, {
      value: tmp9,
      onChange: tmp10,
      label: "Subtitle",
      maxLength: 100,
      isClearable: true,
      onClear() {
        return tmp10("");
      },
    }),
  ];
  obj3.children = items;
  const items1 = [React6(Stack_Stack.Stack, obj3), ,];
  const obj5 = { hasIcons: false, children: null };
  const items2 = [
    React5(ActionSheetRow.ActionSheetSwitchRow, { value: first, onValueChange: tmp4[1], label: "Show Leading" }),
    React5(ActionSheetRow.ActionSheetSwitchRow, { value: tmp2, onValueChange: tmp3, label: "Show Trailing" }),
  ];
  obj5.children = items2;
  items1[1] = React6(ActionSheetRow.ActionSheetRow.Group, obj5);
  items1[2] = React5(TextInput.TextInput, {
    value: tmp12,
    onChange: tmp13,
    label: "Leading",
    isDisabled: !first,
    isClearable: true,
    onClear() {
      return tmp13("");
    },
  });
  obj2.children = items1;
  obj1.children = React6(Stack_Stack.Stack, obj2);
  return React5(ActionSheet.ActionSheet, obj1);
}
function showDemoPromoSheet() {
  ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(DemoPromoSheet), "promo-sheet-demo");
}
function DemoPromoSheet() {
  let obj = {
    size: "lg",
    onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet("promo-sheet-demo");
    },
    text: null,
  };
  const intl = util.intl;
  obj.text = intl.string(util.t.BddRzS);
  obj = {
    graphic: null,
    gradientColor: "purple",
    title: "Here's a Promo Sheet",
    description: "You can use this to promote new features, products, or anything else you'd like!",
    actions: null,
  };
  obj = { type: "image", src: null, aspectRatio: "16/9" };
  const tmp = React5(components_Button_Button.Button, obj);
  obj.src = { uri: _modDef5814 };
  obj.graphic = obj;
  obj.actions = tmp;
  return React5(PromoSheet.PromoSheet, obj);
}
const ScrollView = fn(17).ScrollView;
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx",
);

export default function UserSettingsDesignSystemSheets() {
  let obj = { contentContainerStyle: closure_9().container, children: null };
  obj = { children: null };
  obj = { children: null };
  const obj1 = { children: null };
  const items = [
    React5(Text_Text.Text, { variant: "text-lg/bold", children: "Action Sheet with Title Header" }),
    React5(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: "An action sheet with a centered title and subtitle, with optional leading and Trailing elements.",
    }),
    React5(components_Button_Button.Button, {
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_10), "demo-sheet");
      },
      text: "Show Action Sheet",
    }),
  ];
  obj1.children = items;
  obj.children = React6(Stack_Stack.Stack, obj1);
  const items1 = [React5(Card.Card, obj)];
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items2 = [
    React5(Text_Text.Text, { variant: "text-lg/bold", children: "Promo Sheet" }),
    React5(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: "A sheet with an illustration, title, description, and actions.",
    }),
    React5(components_Button_Button.Button, { onPress: showDemoPromoSheet, text: "Show Promo Sheet" }),
  ];
  obj4.children = items2;
  obj3.children = React6(Stack_Stack.Stack, obj4);
  items1[1] = React5(Card.Card, obj3);
  obj.children = items1;
  obj.children = React6(Stack_Stack.Stack, obj);
  return React5(ScrollView, obj);
}
