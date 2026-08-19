// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemButtonGroup.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import ButtonGroup from "../../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import registerAssetDefault from "../../../../../_runtime/07356_registerAsset.js";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { padding: 16, paddingBottom: 64 } });
const result = require("obj132").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonGroup.tsx");

export default function UserSettingsDesignSystemButtonGroup() {
  { style: callback3().container, children: null };
  const obj = { spacing: 24, children: null };
  obj1 = { children: null };
  const obj2 = { children: null };
  const items = [callback(Text.Text, { variant: "text-lg/bold", children: "Text Button Example" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks buttons vertically. This is best for buttons with text." }), ];
  const obj3 = { children: null };
  const items1 = [
    callback(Button.Button, {
      text: "Agree",
      variant: "primary",
      onPress() {

      }
    }),
    callback(Button.Button, {
      text: "Cancel",
      variant: "secondary",
      onPress() {

      }
    })
  ];
  obj3[0] = items1;
  items[2] = callback2(ButtonGroup.ButtonGroup, obj3);
  obj2[0] = items;
  obj1[0] = callback2(Stack.Stack, obj2);
  const items2 = [callback(closure_3, obj1), , ];
  const obj6 = { children: null };
  const obj7 = { children: null };
  const items3 = [callback(Text.Text, { variant: "text-lg/bold", children: "IconButton Example" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "For IconButtons, a horizontal layout is recommended" }), ];
  const obj8 = { direction: "horizontal", children: null };
  const items4 = [
    callback(IconButton.IconButton, {
      accessibilityLabel: "Settings",
      variant: "secondary",
      icon: registerAssetDefault,
      onPress() {

      }
    }),

  ];
  items4[1] = callback(IconButton.IconButton, {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: registerAssetDefault,
    onPress() {

    }
  });
  obj8[1] = items4;
  items3[2] = callback2(ButtonGroup.ButtonGroup, obj8);
  obj7[0] = items3;
  obj6[0] = callback2(Stack.Stack, obj7);
  items2[1] = callback(closure_3, obj6);
  const obj11 = { children: null };
  const obj12 = { children: null };
  const items5 = [callback(Text.Text, { variant: "text-lg/bold", children: "Mixed Buttons Example" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "A single text button can be used in a ButtonGroup with smaller IconButtons, using the horizontal layout." }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The Button with text must have the grow prop." }), , , ];
  const obj13 = { direction: "horizontal", children: null };
  const items6 = [
    callback(Button.Button, {
      text: "Search",
      variant: "secondary",
      grow: true,
      onPress() {

      }
    }),

  ];
  items6[1] = callback(IconButton.IconButton, {
    accessibilityLabel: "Cancel",
    variant: "secondary",
    icon: registerAssetDefault,
    onPress() {

    }
  });
  obj13[1] = items6;
  items5[3] = callback2(ButtonGroup.ButtonGroup, obj13);
  items5[4] = callback(Text.Text, { variant: "text-sm/medium", color: "text-feedback-critical", children: "More than one text button should not be put in a horizontal group." });
  items5[5] = callback(Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: "This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons." });
  obj12[0] = items5;
  obj11[0] = callback2(Stack.Stack, obj12);
  items2[2] = callback(closure_3, obj11);
  obj[1] = items2;
  obj[1] = callback2(Stack.Stack, obj);
  obj[0] = callback(closure_3, obj);
  return callback(closure_4, obj);
};