// discord_app/components_native/common/color_picker/RoleColorPickerActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import showCustomColorPickerActionSheetDefault from "../../../modules/color_picker/native/showCustomColorPickerActionSheet.tsx";
import ColorBlockDefault from "ColorBlock.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR: closure_7, ROLE_COLORS } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [
  ...ROLE_COLORS.slice(0, 5),
  ...ROLE_COLORS.slice(10, 15),
  ...ROLE_COLORS.slice(5, 10),
  ...ROLE_COLORS.slice(15, 18),
];
const createStyles = fn(4636);
const obj2 = {
  body: { paddingVertical: nativeDefault.space.PX_16, flexGrow: 1, justifyContent: "center", alignItems: "center" },
  colorWrap: null,
};
let obj3 = { paddingVertical: nativeDefault.space.PX_16, flexGrow: 1, justifyContent: "center", alignItems: "center" };
obj2.colorWrap = {
  flexGrow: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: 340,
  marginBottom: nativeDefault.space.PX_16,
};
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/color_picker/RoleColorPickerActionSheet.tsx");

export default function RoleColorPickerActionSheet(color) {
  color = color.color;
  let onSelect = color.onSelect;
  ({ confirmLabel, defaultColor } = color);
  if (defaultColor === undefined) {
    defaultColor = memo;
  }
  let first;
  onSelect = undefined;
  let tmp = closure_11();
  const styles = color(defaultColor[7]).useStyles();
  const tmp5 = styles(first.useState(color), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  let obj = color(defaultColor[7]);
  const isWindowSmall = color(defaultColor[8]).useIsWindowSmall();
  items = [isWindowSmall, styles.colorBlock];
  memo = first.useMemo(() => {
    const colorBlock = styles.colorBlock;
    if (isWindowSmall) {
      const obj = {};
      const merged = Object.assign(colorBlock);
      obj.minWidth = 38;
      obj.height = 38;
      let tmp = obj;
    } else {
      tmp = colorBlock;
    }
    return tmp;
  }, items);
  const items1 = [first, onSelect];
  const callback = first.useCallback(() => {
    onSelect(first);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  onSelect = first.useCallback((arg0) => {
    closure_5(arg0);
  }, []);
  const items2 = [color, onSelect];
  const callback1 = first.useCallback(() => {
    showCustomColorPickerActionSheetDefault({ color, onSelect });
  }, items2);
  const obj3 = { title: null, trailing: null };
  const intl = color(defaultColor[13]).intl;
  obj3.title = intl.string(color(defaultColor[13]).t.WTqQ5e);
  if (null != confirmLabel) {
    const obj4 = { size: "sm", variant: "secondary", text: confirmLabel, onPress: callback };
    let obj5 = obj4;
  } else {
    obj5 = { size: "sm", text: null, onPress: null };
    const intl2 = tmp2(tmp3[13]).intl;
    obj5.text = intl2.string(tmp2(tmp3[13]).t["R3BPH+"]);
    obj5.onPress = callback;
  }
  const obj6 = { header: null, children: null };
  obj3.trailing = onSelect(color(defaultColor[14]).Button, obj5);
  obj6.header = onSelect(color(defaultColor[12]).BottomSheetTitleHeader, obj3);
  const obj7 = { style: tmp.body, children: null };
  const obj8 = { style: tmp.colorWrap, children: null };
  const items3 = [
    items.map((color) => React6(ColorBlockDefault, { color, style: memo, selected: color === first, onSelect }, color)),
  ];
  const obj9 = {
    style: memo,
    onPress: callback1,
    accessibilityLabel: null,
    accessibilityRole: "button",
    children: null,
  };
  const intl3 = tmp2(tmp3[13]).intl;
  obj9.accessibilityLabel = intl3.string(color(defaultColor[13]).t["/fkc8a"]);
  obj9.children = onSelect(color(defaultColor[15]).EyeDropperIcon, { size: "lg" });
  items3[1] = onSelect(isWindowSmall, obj9);
  obj8.children = items3;
  const items4 = [closure_9(closure_5, obj8)];
  const obj10 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(tmp3[13]).intl;
  obj10.text = intl4.string(color(defaultColor[13]).t.yBZMsQ);
  obj10.onPress = function onPress() {
    closure_5(defaultColor);
  };
  items4[1] = onSelect(color(defaultColor[14]).Button, obj10);
  obj7.children = items4;
  obj6.children = closure_9(closure_5, obj7);
  return onSelect(color(defaultColor[11]).BottomSheet, obj6);
}
