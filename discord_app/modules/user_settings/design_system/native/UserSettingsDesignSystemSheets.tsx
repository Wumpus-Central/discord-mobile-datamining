// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import metadataDefault from "../../../../../discord_assets/assets/mana/asset-library/generated/BugSpotIllustration-2x.png.js";
import PressableCard from "../../../../design/components/Card/native/Card.native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRowIcon from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import PromoSheet from "../../../../design/components/Sheet/native/PromoSheet.native.tsx";
import TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import NUFChannelIllustrationDefault from "../../../nuf_channels/native/components/NUFChannelIllustration.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { NOOP } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
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
    tmp14Result = callback(tmp15(8829).ActionSheetHeaderPressableText, obj);
  }
  obj[2] = tmp14Result;
  tmp14Result = tmp2;
  if (tmp2) {
    obj = { onPress: null };
    obj[0] = NOOP;
    tmp14Result = callback(tmp15(7176).ActionSheetCloseButton, obj);
  }
  obj1 = { header: callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), children: null };
  obj[3] = tmp14Result;
  const obj2 = { spacing: 24, children: null };
  const obj3 = { children: null };
  const items = [
    callback(TextInput.TextInput, { value: first1, onChange: tmp6[1], label: "Title" }),
    callback(TextInput.TextInput, {
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
  const items2 = [callback(ActionSheetRowIcon.ActionSheetSwitchRow, { value: first, onValueChange: tmp4[1], label: "Show Leading" }), callback(ActionSheetRowIcon.ActionSheetSwitchRow, { value: tmp2, onValueChange: tmp3, label: "Show Trailing" })];
  obj5[1] = items2;
  items1[1] = callback3(ActionSheetRowIcon.ActionSheetRow.Group, obj5);
  items1[2] = callback(TextInput.TextInput, {
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
  return callback(ActionSheet.ActionSheet, obj1);
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
    obj = { type: "image", src: null, aspectRatio: "16/9" };
    obj1 = { uri: null };
    obj1[0] = metadataDefault;
    obj[1] = obj1;
    obj[0] = obj;
    obj[4] = tmp5;
    let obj2 = obj;
  } else {
    obj2 = { illustration: null, title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!", actions: null };
    obj2[0] = callback2(NUFChannelIllustrationDefault, {});
    obj2[3] = tmp5;
  }
  return callback2(PromoSheet.PromoSheet, obj2);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { padding: 16, alignItems: "center" } });
const result = require("obj132").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx");

export default function UserSettingsDesignSystemSheets() {
  { contentContainerStyle: callback4().container, children: null };
  const obj = { children: null };
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