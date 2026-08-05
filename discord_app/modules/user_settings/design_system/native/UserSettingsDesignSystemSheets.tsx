// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx
import _slicedToArray from "_slicedToArray";
import NUFChannelIllustration from "NUFChannelIllustration";
import { ScrollView } from "PromoSheet";
import { NOOP } from "ME";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { PressableCard } from "../../../../design/components/Card/native/Card.native.tsx";
import { ActionSheet } from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { ActionSheetRowIcon } from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { PromoSheet } from "../../../../design/components/Sheet/native/PromoSheet.native.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { TextInput } from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";

let error;
let metroImportAll;
let require = arg1;
function DemoActionSheet() {
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp2;
  let tmp3;
  let tmp9;
  [tmp2, tmp3] = callback(React.useState(false), 2);
  const tmp4 = callback(React.useState(false), 2);
  const first = tmp4[0];
  const tmp6 = callback(React.useState("Header title"), 2);
  const first1 = tmp6[0];
  const tmp = callback(React.useState(false), 2);
  [tmp9, tmp10] = callback(React.useState("Header subtitle"), 2);
  const require = tmp10;
  const tmp8 = callback(React.useState("Header subtitle"), 2);
  [tmp12, tmp13] = callback(React.useState("Reset"), 2);
  const importDefault = tmp13;
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
    tmp14Result = tmp14(tmp15(8898).ActionSheetHeaderPressableText, obj);
  }
  obj[2] = tmp14Result;
  tmp14Result = tmp2;
  if (tmp2) {
    obj = { onPress: null };
    obj[0] = NOOP;
    tmp14Result = tmp14(tmp15(5647).ActionSheetCloseButton, obj);
  }
  const obj1 = { header: closure_7(RedesignBottomSheetTitleHeaderBase /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), children: null };
  obj[3] = tmp14Result;
  const obj2 = { spacing: 24, children: null };
  const obj3 = { children: null };
  const items = [
    closure_7(TextInput /* TextInput */.TextInput, { value: first1, onChange: tmp6[1], label: "Title" }),
    closure_7(TextInput /* TextInput */.TextInput, {
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
  const items1 = [callback3(Stack /* Stack */.Stack, obj3), , ];
  const obj5 = { hasIcons: false, children: null };
  const items2 = [closure_7(ActionSheetRowIcon /* ActionSheetRowIcon */.ActionSheetSwitchRow, { value: first, onValueChange: tmp4[1], label: "Show Leading" }), closure_7(ActionSheetRowIcon /* ActionSheetRowIcon */.ActionSheetSwitchRow, { value: tmp2, onValueChange: tmp3, label: "Show Trailing" })];
  obj5[1] = items2;
  items1[1] = callback3(ActionSheetRowIcon /* ActionSheetRowIcon */.ActionSheetRow.Group, obj5);
  items1[2] = closure_7(TextInput /* TextInput */.TextInput, {
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
  obj1[1] = callback3(Stack /* Stack */.Stack, obj2);
  return closure_7(ActionSheet /* ActionSheet */.ActionSheet, obj1);
}
function showDemoPromoSheet() {
  ACTION_SHEET_HEIGHT_HALF.openLazy(() => Promise.resolve(closure_12), "promo-sheet-demo");
}
function DemoPromoSheet() {
  let obj = {
    size: "lg",
    onPress() {
      return callback(table[13]).hideActionSheet("promo-sheet-demo");
    },
    text: null
  };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl.string(getSystemLocale /* getSystemLocale */.t.BddRzS);
  const tmp5 = callback2(Button /* Button */.Button, obj);
  if (tmp3) {
    obj = { graphic: null, gradientColor: "purple", title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!", actions: null };
    obj = { type: "image", src: null, aspectRatio: "16/9" };
    const obj1 = { uri: null };
    obj1[0] = tmp(6048);
    obj[1] = obj1;
    obj[0] = obj;
    obj[4] = tmp5;
    let obj2 = obj;
  } else {
    obj2 = { illustration: null, title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!", actions: null };
    obj2[0] = tmp4(tmp(12942), {});
    obj2[3] = tmp5;
  }
  return callback2(PromoSheet /* PromoSheet */.PromoSheet, obj2);
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { padding: 16, alignItems: "center" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx");

export default function UserSettingsDesignSystemSheets() {
  let obj = { contentContainerStyle: callback4().container, children: null };
  obj = { children: null };
  obj = { children: null };
  const obj1 = { children: null };
  const items = [
    callback2(Text /* Text */.Text, { variant: "text-lg/bold", children: "Action Sheet with Title Header" }),
    callback2(Text /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "An action sheet with a centered title and subtitle, with optional leading and Trailing elements." }),
    callback2(Button /* Button */.Button, {
      onPress() {
        callback(table[13]).openLazy(() => Promise.resolve(closure_10), "demo-sheet");
      },
      text: "Show Action Sheet"
    })
  ];
  obj1[0] = items;
  obj[0] = callback3(Stack /* Stack */.Stack, obj1);
  const items1 = [callback2(PressableCard /* PressableCard */.Card, obj), ];
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items2 = [callback2(Text /* Text */.Text, { variant: "text-lg/bold", children: "Promo Sheet" }), callback2(Text /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "A sheet with an illustration, title, description, and actions." }), callback2(Button /* Button */.Button, { onPress: showDemoPromoSheet, text: "Show Promo Sheet" })];
  obj4[0] = items2;
  obj3[0] = callback3(Stack /* Stack */.Stack, obj4);
  items1[1] = callback2(PressableCard /* PressableCard */.Card, obj3);
  obj[0] = items1;
  obj[1] = callback3(Stack /* Stack */.Stack, obj);
  return callback2(ScrollView, obj);
};