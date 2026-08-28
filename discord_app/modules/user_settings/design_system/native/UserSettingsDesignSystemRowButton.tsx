// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemRowButton.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import registerAssetDefault from "../../../../../_runtime/06206_registerAsset.js";
import Form from "../../../../design/void/Form/native/index.tsx";
import RowButtonWrapper from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemRowButton.tsx");

export default function UserSettingsDesignSystemRowButton() {
  let obj = { children: null };
  obj = { title: "Row Buttons", description: null, children: null };
  obj = { style: { padding: ThemesDefault.space.PX_16 }, children: null };
  const items = [callback(Text.Text, { variant: "text-sm/normal", children: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page." }), callback(Text.Text, { variant: "text-sm/normal", children: "Only stack up to 2 Row Buttons in a row to to prevent decision fatigue." })];
  obj[1] = items;
  obj[1] = callback2(Stack.Stack, obj);
  obj[2] = callback(closure_3, {});
  const items1 = [callback(Form.FormSection, obj), ];
  const obj2 = { style: { padding: 16 }, children: null };
  const obj3 = { children: null };
  obj1 = { padding: ThemesDefault.space.PX_16 };
  const items2 = [
    callback(RowButtonWrapper.RowButton, {
      variant: "primary",
      icon: registerAssetDefault,
      label: "Primary Row Button",
      onPress() {

      }
    }),
  ,
  ,
  ,
  ,
  ,

  ];
  const obj4 = {
    variant: "primary",
    icon: registerAssetDefault,
    label: "Primary Row Button",
    onPress() {

    }
  };
  items2[1] = callback(RowButtonWrapper.RowButton, {
    variant: "primary",
    icon: registerAssetDefault,
    label: "Primary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  });
  const obj5 = {
    variant: "primary",
    icon: registerAssetDefault,
    label: "Primary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  };
  items2[2] = callback(RowButtonWrapper.RowButton, {
    variant: "secondary",
    icon: registerAssetDefault,
    label: "Secondary Row Button",
    onPress() {

    }
  });
  const obj6 = {
    variant: "secondary",
    icon: registerAssetDefault,
    label: "Secondary Row Button",
    onPress() {

    }
  };
  items2[3] = callback(RowButtonWrapper.RowButton, {
    icon: registerAssetDefault,
    label: "Secondary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  });
  const obj7 = {
    icon: registerAssetDefault,
    label: "Secondary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  };
  items2[4] = callback(RowButtonWrapper.RowButton, {
    icon: registerAssetDefault,
    label: "Secondary Row Button",
    subLabel: "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap",
    onPress() {

    }
  });
  const obj9 = { icon: null, label: "Row Button", subLabel: "With a custom RowButton.Icon", onPress: null };
  const obj8 = {
    icon: registerAssetDefault,
    label: "Secondary Row Button",
    subLabel: "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap",
    onPress() {

    }
  };
  obj9[0] = callback(RowButtonWrapper.RowButton.Icon, { source: registerAssetDefault });
  obj9[3] = function onPress() {

  };
  items2[5] = callback(RowButtonWrapper.RowButton, obj9);
  const obj10 = { source: registerAssetDefault };
  items2[6] = callback(RowButtonWrapper.RowButton, {
    icon: registerAssetDefault,
    label: "Row Button",
    subLabel: "I am disabled",
    onPress() {

    },
    disabled: true
  });
  obj3[0] = items2;
  obj2[1] = callback2(Stack.Stack, obj3);
  items1[1] = callback(closure_3, obj2);
  obj[0] = items1;
  return callback2(closure_4, obj);
};