// === Module 16291: RoleColorPickerActionSheet ===

// Module 16291 (RoleColorPickerActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14595 */;
import ColorBlockDefault from "ColorBlock" /* 14597 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR: closure_7, ROLE_COLORS } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [...ROLE_COLORS.slice(0, 5), ...ROLE_COLORS.slice(10, 15), ...ROLE_COLORS.slice(5, 10), ...ROLE_COLORS.slice(15, 18)];
fn(4560);
let createStyles = { body: null, colorWrap: null };
createStyles = { paddingVertical: nativeDefault.space.PX_16, flexGrow: 1, justifyContent: "center", alignItems: "center" };
createStyles.body = createStyles;
createStyles.colorWrap = { flexGrow: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", maxWidth: 340, marginBottom: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(createStyles);
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
  let obj = color(defaultColor[7]);
  const styles = obj.useStyles();
  const tmp5 = styles(first.useState(color), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  let obj1 = color(defaultColor[8]);
  const isWindowSmall = obj1.useIsWindowSmall();
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
  obj = { title: null, trailing: null };
  const intl = color(defaultColor[13]).intl;
  obj.title = intl.string(color(defaultColor[13]).t.WTqQ5e);
  if (null != confirmLabel) {
    obj = { size: "sm", variant: "secondary", text: confirmLabel, onPress: callback };
    obj1 = obj;
  } else {
    obj1 = { size: "sm", text: null, onPress: null };
    const intl2 = tmp2(tmp3[13]).intl;
    obj1.text = intl2.string(tmp2(tmp3[13]).t["R3BPH+"]);
    obj1.onPress = callback;
  }
  const obj2 = { header: null, children: null };
  obj.trailing = onSelect(color(defaultColor[14]).Button, obj1);
  obj2.header = onSelect(color(defaultColor[12]).BottomSheetTitleHeader, obj);
  const obj3 = { style: tmp.body, children: null };
  const obj4 = { style: tmp.colorWrap, children: null };
  const items3 = [items.map((color) => React6(ColorBlockDefault, { color, style: memo, selected: color === first, onSelect }, color)), ];
  const obj5 = { style: memo, onPress: callback1, accessibilityLabel: null, accessibilityRole: "button", children: null };
  const intl3 = tmp2(tmp3[13]).intl;
  obj5.accessibilityLabel = intl3.string(color(defaultColor[13]).t["/fkc8a"]);
  obj5.children = onSelect(color(defaultColor[15]).EyeDropperIcon, { size: "lg" });
  items3[1] = onSelect(isWindowSmall, obj5);
  obj4.children = items3;
  const items4 = [closure_9(closure_5, obj4), ];
  const obj6 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(tmp3[13]).intl;
  obj6.text = intl4.string(color(defaultColor[13]).t.yBZMsQ);
  obj6.onPress = function onPress() {
    closure_5(defaultColor);
  };
  items4[1] = onSelect(color(defaultColor[14]).Button, obj6);
  obj3.children = items4;
  obj2.children = closure_9(closure_5, obj3);
  return onSelect(color(defaultColor[11]).BottomSheet, obj2);
};