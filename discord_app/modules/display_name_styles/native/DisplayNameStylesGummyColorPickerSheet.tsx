// discord_app/modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { DISPLAY_NAME_STYLES_GUMMY_PRESETS as closure_7 } from "../DisplayNameStylesConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import set from "../DisplayNameStylesUtils.tsx";
import closure_11 from "../../../index.native.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c5, Pressable: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
set = {
  body: null,
  colorRowInset: null,
  optionContainer: null,
  swatchWrapper: null,
  swatch: null,
  swatchSelected: null,
  customSwatchEmpty: null,
  customIconOverlay: null,
  customIconScrim: null,
};
set = {
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingTop: ThemesDefault.space.PX_12,
  paddingBottom: ThemesDefault.space.PX_16,
  gap: ThemesDefault.space.PX_16,
  alignItems: "center",
};
set[0] = set;
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_4, alignSelf: "stretch" };
set[1] = createCacheKey;
set[2] = { flexDirection: "row", flexWrap: "wrap" };
set[3] = { width: "25%", padding: 2 };
set[4] = {
  height: 40,
  flexDirection: "row",
  borderRadius: ThemesDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 2,
  borderColor: "transparent",
};
let obj2 = {
  height: 40,
  flexDirection: "row",
  borderRadius: ThemesDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 2,
  borderColor: "transparent",
};
set[5] = { borderColor: ThemesDefault.colors.BACKGROUND_BRAND };
let obj3 = { borderColor: ThemesDefault.colors.BACKGROUND_BRAND };
set[6] = {
  flex: 1,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_NORMAL,
};
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.alignItems = "center";
obj5.justifyContent = "center";
set[7] = obj5;
let obj4 = {
  flex: 1,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_NORMAL,
};
set[8] = {
  width: 28,
  height: 28,
  borderRadius: ThemesDefault.radii.round,
  backgroundColor: "transparent",
  alignItems: "center",
  justifyContent: "center",
};
let closure_12 = createCacheKey.createStyles(set);
let result = set.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx");

export default function DisplayNameStylesGummyColorPickerSheet(selectedColors) {
  selectedColors = selectedColors.selectedColors;
  const onSelectColors = selectedColors.onSelectColors;
  dependencyMap = undefined;
  let callback;
  let first;
  closure_5 = undefined;
  let first1;
  closure_7 = undefined;
  c8 = undefined;
  let callback2;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = selectedColors(10902);
  let tmp5 = selectedColors.length > 0;
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(
    selectedColors(1390).DisplayNameEffect.GUMMY,
  );
  if (tmp5) {
    tmp5 = !closure_7.some((items) => selectedColors(closure_2[11]).areArraysShallowEqual(items, selectedColors));
  }
  callback = tmp5;
  const tmp7 = callback(
    first.useState(() => {
      if (closure_3) {
        let result = selectedColors(closure_2[6]).rebuildGummySourceColor(selectedColors);
        const obj = selectedColors(closure_2[6]);
      } else {
        result = closure_1_11;
      }
      return result;
    }),
    2,
  );
  first = tmp7[0];
  closure_5 = tmp7[1];
  const tmp9 = callback(
    first.useState(() => {
      let gummyColors = selectedColors;
      if (selectedColors.length <= 0) {
        gummyColors = selectedColors(closure_2[6]).buildGummyColors(closure_1_11);
        const obj = selectedColors(closure_2[6]);
      }
      return gummyColors;
    }),
    2,
  );
  first1 = tmp9[0];
  closure_7 = tmp9[1];
  const tmp12Result = onSelectColors(15345)(selectedColors(1390).DisplayNameEffect.GUMMY);
  const findIndexResult = tmp12Result.findIndex((colors) =>
    selectedColors(closure_2[11]).areArraysShallowEqual(colors.colors, first1),
  );
  c8 = findIndexResult;
  let items = [first];
  callback = first.useCallback(() => {
    let obj = selectedColors(closure_2[13]);
    const result = obj.triggerHapticFeedback(selectedColors(closure_2[13]).HapticFeedbackTypes.IMPACT_LIGHT);
    obj = {
      initialColor: first,
      onSelect(closure_1_11) {
        callback(closure_1_11);
        callback2(closure_1_0(closure_1_2[6]).buildGummyColors(closure_1_11));
      },
    };
    onSelectColors(closure_2[14])(obj);
  }, items);
  callback2 = first.useCallback((arg0) => {
    const items = [...arg0];
    dependencyMap(items);
  }, []);
  const items1 = [first1, onSelectColors];
  const callback1 = first.useCallback(() => {
    const items = [...closure_7[0]];
    dependencyMap(items);
    callback(closure_1_11);
  }, []);
  callback2 = first.useCallback(() => {
    let obj = selectedColors(closure_2[13]);
    const result = obj.triggerHapticFeedback(selectedColors(closure_2[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first1);
    obj = { default: false, colors: first1 };
    onSelectColors(closure_2[15]).track(_undefined.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
    const obj2 = onSelectColors(closure_2[15]);
    onSelectColors(closure_2[16]).hideActionSheet();
  }, items1);
  obj = { header: null, children: null };
  obj = { title: displayNameStylesEffectConfig.name, trailing: null };
  obj1 = { variant: "primary", size: "sm", text: null, onPress: null };
  const intl = tmp2(1114).intl;
  obj1[2] = intl.string(selectedColors(1114).t.XqMe3N);
  obj1[3] = callback2;
  obj[1] = callback2(selectedColors(4975).Button, obj1);
  obj[0] = callback2(selectedColors(7149).BottomSheetTitleHeader, obj);
  let obj2 = { style: tmp.body, children: null };
  const obj3 = { style: items2, children: null };
  items2 = [,];
  ({ colorRowInset: arr5[0], optionContainer: arr5[1] } = tmp);
  const obj4 = { style: tmp.swatchWrapper, children: null };
  const items3 = [tmp.swatch];
  let swatchSelected = tmp22;
  if (findIndexResult < 0) {
    swatchSelected = tmp.swatchSelected;
  }
  const obj5 = {
    style: items3,
    onPress: callback,
    accessibilityRole: "button",
    accessibilityState: { selected: findIndexResult < 0 },
    accessibilityLabel: null,
    children: null,
  };
  items3[1] = swatchSelected;
  const intl2 = tmp2(1114).intl;
  obj5[4] = intl2.string(selectedColors(1114).t["FHBa/1"]);
  if (findIndexResult >= 0) {
    const obj6 = { style: null };
    obj6[0] = tmp.customSwatchEmpty;
    let tmp18Result = tmp18(tmp20, obj6);
  } else {
    const obj7 = { colors: null };
    obj7[0] = first1;
    tmp18Result = tmp18(tmp11(14617), obj7);
  }
  const items4 = [tmp18Result];
  const obj8 = { style: tmp.customIconOverlay, pointerEvents: "none", children: null };
  tmp11 = onSelectColors;
  const tmp12 = onSelectColors(15345);
  const tmp21 = first1;
  obj8[2] = callback2(closure_5, {
    style: tmp.customIconScrim,
    children: callback2(selectedColors(10250).PencilIcon, { color: "white", size: "sm" }),
  });
  items4[1] = callback2(closure_5, obj8);
  obj5[5] = items4;
  obj4[1] = closure_10(tmp21, obj5);
  const items5 = [
    callback2(closure_5, obj4),
    tmp12Result.map((accessibilityLabel) => {
      const colors = accessibilityLabel.colors;
      let obj = { style: closure_2.swatchWrapper, children: null };
      const items = [closure_2.swatch];
      let swatchSelected = tmp;
      if (c8 === arg1) {
        swatchSelected = closure_2.swatchSelected;
      }
      obj = {
        style: items,
        onPress() {
          return closure_1_9(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: tmp },
        accessibilityLabel: accessibilityLabel.a11yLabel,
        children: tmp2(onSelectColors(closure_2[21]), { colors }),
      };
      items[1] = swatchSelected;
      obj[1] = closure_9(first1, obj);
      return closure_9(closure_5, obj, arg1);
    }),
  ];
  obj3[1] = items5;
  const items6 = [closure_10(closure_5, obj3)];
  const obj10 = { text: null, onPress: null, variant: "secondary" };
  const intl3 = tmp2(1114).intl;
  obj10[0] = intl3.string(selectedColors(1114).t.yBZMsQ);
  obj10[1] = callback1;
  items6[1] = callback2(selectedColors(4975).Button, obj10);
  obj2[1] = items6;
  obj[1] = closure_10(closure_5, obj2);
  return callback2(selectedColors(7150).BottomSheet, obj);
}
