// === Module 14941: DemoActionSheet ===

// Module 14941 (DemoActionSheet)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import PressableCard from "PressableCard" /* 6292 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import ActionSheet from "ActionSheet" /* 7175 */;
import ActionSheetRowIcon from "ActionSheetRowIcon" /* 7177 */;
import PromoSheet from "PromoSheet" /* 8017 */;
import TextInput from "TextInput" /* 8071 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import { NOOP } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function DemoActionSheet() {
  [tmp2, tmp3] = callback(React.useState(false), 2);
  const tmp4 = callback(React.useState(false), 2);
  const first = tmp4[0];
  const tmp6 = callback(React.useState("Header title"), 2);
  const first1 = tmp6[0];
  const tmp = callback(React.useState(false), 2);
  [tmp9, tmp10] = callback(React.useState("Header subtitle"), 2);
  require = tmp10;
  const tmp8 = callback(React.useState("Header subtitle"), 2);
  [tmp12, tmp13] = callback(React.useState("Reset"), 2);
  importDefault = tmp13;
  let obj = { title: first1, subtitle: null, leading: null, trailing: null };
  let tmp17;
  if ("" !== tmp9) {
    tmp17 = tmp9;
  }
  obj[1] = tmp17;
  let tmp14Result = first;
  if (first) {
    obj = { onPress: null, label: null };
    obj[0] = NOOP;
    obj[1] = tmp12;
    tmp14Result = tmp14(tmp15(8829).ActionSheetHeaderPressableText, obj);
  }
  obj[2] = tmp14Result;
  tmp14Result = tmp2;
  if (tmp2) {
    obj = { onPress: null };
    obj[0] = NOOP;
    tmp14Result = tmp14(tmp15(7176).ActionSheetCloseButton, obj);
  }
  obj1 = { header: closure_7(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), children: null };
  obj[3] = tmp14Result;
  const obj2 = { spacing: 24, children: null };
  const obj3 = { children: null };
  const items = [
    closure_7(TextInput.TextInput, { value: first1, onChange: tmp6[1], label: "Title" }),
    closure_7(TextInput.TextInput, {
      value: tmp9,
      onChange: tmp10,
      label: "Subtitle",
      maxLength: 100,
      isClearable: true,
      onClear() {
        return tmp10("");
      }
    })
  ];
  obj3[0] = items;
  const items1 = [callback3(Stack.Stack, obj3), , ];
  const obj5 = { hasIcons: false, children: null };
  const items2 = [closure_7(ActionSheetRowIcon.ActionSheetSwitchRow, { value: first, onValueChange: tmp4[1], label: "Show Leading" }), closure_7(ActionSheetRowIcon.ActionSheetSwitchRow, { value: tmp2, onValueChange: tmp3, label: "Show Trailing" })];
  obj5[1] = items2;
  items1[1] = callback3(ActionSheetRowIcon.ActionSheetRow.Group, obj5);
  items1[2] = closure_7(TextInput.TextInput, {
    value: tmp12,
    onChange: tmp13,
    label: "Leading",
    isDisabled: !first,
    isClearable: true,
    onClear() {
      return tmp13("");
    }
  });
  obj2[1] = items1;
  obj1[1] = callback3(Stack.Stack, obj2);
  return closure_7(ActionSheet.ActionSheet, obj1);
}
function showDemoPromoSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(() => Promise.resolve(closure_12), "promo-sheet-demo");
}
function DemoPromoSheet() {
  let obj = {
    size: "lg",
    onPress() {
      return callback(table[13]).hideActionSheet("promo-sheet-demo");
    },
    text: null
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.BddRzS);
  const tmp5 = callback2(Button.Button, obj);
  if (tmp3) {
    obj = { graphic: null, gradientColor: "purple", title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!", actions: null };
    obj = { type: "image", src: null, aspectRatio: "16/9" };
    obj1 = { uri: null };
    obj1[0] = tmp(5561);
    obj[1] = obj1;
    obj[0] = obj;
    obj[4] = tmp5;
    let obj2 = obj;
  } else {
    obj2 = { illustration: null, title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!", actions: null };
    obj2[0] = tmp4(tmp(12649), {});
    obj2[3] = tmp5;
  }
  return callback2(PromoSheet.PromoSheet, obj2);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { padding: 16, alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx");

export default function UserSettingsDesignSystemSheets() {
  let obj = { contentContainerStyle: callback4().container, children: null };
  obj = { children: null };
  obj = { children: null };
  obj1 = { children: null };
  const items = [
    callback2(Text.Text, { variant: "text-lg/bold", children: "Action Sheet with Title Header" }),
    callback2(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "An action sheet with a centered title and subtitle, with optional leading and Trailing elements." }),
    callback2(Button.Button, {
      onPress() {
        callback(table[13]).openLazy(() => Promise.resolve(closure_10), "demo-sheet");
      },
      text: "Show Action Sheet"
    })
  ];
  obj1[0] = items;
  obj[0] = callback3(Stack.Stack, obj1);
  const items1 = [callback2(PressableCard.Card, obj), ];
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items2 = [callback2(Text.Text, { variant: "text-lg/bold", children: "Promo Sheet" }), callback2(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "A sheet with an illustration, title, description, and actions." }), callback2(Button.Button, { onPress: showDemoPromoSheet, text: "Show Promo Sheet" })];
  obj4[0] = items2;
  obj3[0] = callback3(Stack.Stack, obj4);
  items1[1] = callback2(PressableCard.Card, obj3);
  obj[0] = items1;
  obj[1] = callback3(Stack.Stack, obj);
  return callback2(ScrollView, obj);
};