// === Module 17627: RoleGradientPickerActionSheet ===

// Module 17627 (RoleGradientPickerActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14595 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const EnhancedRoleColorConstants = fn(17612);
({ DEFAULT_GRADIENT_ROLE_COLORS: closure_7, GRADIENT_PRESETS: closure_8 } = EnhancedRoleColorConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { body: null, gradientContainer: null, dropperContainer: null, dropper: null, gradient: null, optionContainer: null, pressable: null, selected: null, option: null };
createStyles = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16 };
createStyles.body = createStyles;
createStyles.gradientContainer = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
const rect = { left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, position: "absolute", display: "flex", flexDirection: "row", justifyContent: "space-between" };
createStyles.dropperContainer = rect;
let obj1 = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
createStyles.dropper = { borderColor: "white", tintColor: "white", padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
let size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
createStyles.gradient = size;
let obj2 = { borderColor: "white", tintColor: "white", padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
createStyles.optionContainer = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, flexWrap: "wrap", alignItems: "center", justifyContent: "center" };
const size1 = { width: 80, height: 50, borderRadius: nativeDefault.radii.sm, overflow: "hidden", padding: 2 };
createStyles.pressable = size1;
let obj3 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, flexWrap: "wrap", alignItems: "center", justifyContent: "center" };
createStyles.selected = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const obj4 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.option = { flex: 1, borderRadius: nativeDefault.radii.sm };
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/RoleGradientPickerActionSheet.tsx");

export default function RoleGradientPickerActionSheet(arg0) {
  ({ colors, onSelect } = arg0);
  let first;
  _slicedToArray = undefined;
  let callback1;
  let tmp = closure_11();
  importDefault = tmp;
  let obj = callback1;
  if (null == colors) {
    colors = closure_7;
  }
  const tmp2 = _slicedToArray(callback1.useState(colors), 2);
  first = tmp2[0];
  _slicedToArray = tmp2[1];
  let obj1 = onSelect(first[7]);
  const values = Object.values(obj1.extractColorStringsFromServerColors(first));
  let items = [first, onSelect];
  const found = values.filter(onSelect(first[8]).isNotNullish);
  const callback = obj.useCallback(() => {
    onSelect(first);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  callback1 = obj.useCallback((arg0) => {
    closure_3(arg0);
  }, []);
  let items1 = [first, callback1];
  const items2 = [first, callback1];
  const callback2 = obj.useCallback(() => {
    let num;
    if (first != null) {
      num = first.primary_color;
    }
    if (num == null) {
      num = 0;
    }
    showCustomColorPickerActionSheetDefault({
      color: num,
      onSelect(primary_color) {
        const obj = {};
        const merged = Object.assign(first);
        obj.primary_color = primary_color;
        return callback1(obj);
      }
    }, "stack");
  }, items1);
  const callback3 = obj.useCallback(() => {
    let num;
    if (first != null) {
      num = first.secondary_color;
    }
    if (num == null) {
      num = 0;
    }
    showCustomColorPickerActionSheetDefault({
      color: num,
      onSelect(secondary_color) {
        const obj = {};
        const merged = Object.assign(first);
        obj.secondary_color = secondary_color;
        return callback1(obj);
      }
    }, "stack");
  }, items2);
  obj = { header: null, children: null };
  obj = { title: null, trailing: null };
  const intl = onSelect(first[13]).intl;
  obj.title = intl.string(onSelect(first[13]).t.XpWmJz);
  obj1 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl2 = onSelect(first[13]).intl;
  obj1.text = intl2.string(onSelect(first[13]).t["R3BPH+"]);
  obj1.onPress = callback;
  obj.trailing = closure_9(onSelect(first[14]).Button, obj1);
  obj.header = closure_9(onSelect(first[12]).BottomSheetTitleHeader, obj);
  const obj2 = { style: tmp.body, children: null };
  const obj3 = { style: tmp.gradientContainer, children: null };
  const items3 = [closure_9(require("LinearGradient"), { style: tmp.gradient, colors: found, start: { x: 0, y: 0 }, end: { x: 1, y: 0 } }), ];
  const obj5 = { style: tmp.dropperContainer, children: null };
  const obj6 = { style: tmp.dropper, onPress: callback2, accessibilityLabel: null, accessibilityRole: "button", children: null };
  const intl3 = onSelect(first[13]).intl;
  obj6.accessibilityLabel = intl3.string(onSelect(first[13]).t.QPqIEx);
  obj6.children = closure_9(onSelect(first[16]).EyeDropperIcon, { color: "white", size: "sm" });
  const items4 = [closure_9(closure_6, obj6), ];
  const obj7 = { style: tmp.dropper, onPress: callback3, accessibilityLabel: null, accessibilityRole: "button", children: null };
  const intl4 = onSelect(first[13]).intl;
  obj7.accessibilityLabel = intl4.string(onSelect(first[13]).t.fLMusI);
  obj7.children = closure_9(onSelect(first[16]).EyeDropperIcon, { color: "white", size: "sm" });
  items4[1] = closure_9(closure_6, obj7);
  obj5.children = items4;
  items3[1] = closure_10(closure_5, obj5);
  obj3.children = items3;
  const items5 = [
    closure_10(closure_5, obj3),
    closure_9(closure_5, {
      style: tmp.optionContainer,
      children: closure_8.map((colors) => {
        const tmp = closure_3(colors.colors, 2);
        const primary_color = tmp[0];
        const secondary_color = tmp3;
        const items = [secondary_color.pressable, ];
        let selected = primary_color === primary_color.primary_color;
        if (selected) {
          selected = tmp3 === primary_color.secondary_color;
        }
        if (selected) {
          selected = tmp7.selected;
        }
        let obj = {
          style: items,
          onPress() {
            const obj = {};
            const merged = Object.assign(primary_color);
            obj.primary_color = primary_color;
            obj.secondary_color = secondary_color;
            return callback1(obj);
          },
          children: null
        };
        items[1] = selected;
        obj = { style: tmp7.option, colors: null, start: null, end: null };
        let tmp5Result = onSelect(tmp6[18]);
        const items1 = [tmp5Result.int2hex(primary_color), ];
        tmp5Result = onSelect(tmp6[18]);
        items1[1] = tmp5Result.int2hex(tmp[1]);
        obj.colors = items1;
        obj.start = { x: 0, y: 0 };
        obj.end = { x: 1, y: 0 };
        obj.children = closure_1_9(secondary_color(primary_color[15]), obj);
        return closure_1_9(onSelect(primary_color[17]).PressableOpacity, obj, colors.name);
      })
    }),

  ];
  const obj9 = { text: null, onPress: null };
  const intl5 = onSelect(first[13]).intl;
  obj9.text = intl5.string(onSelect(first[13]).t.yBZMsQ);
  obj9.onPress = function onPress() {
    closure_3(React5);
  };
  items5[2] = closure_9(onSelect(first[14]).Button, obj9);
  obj2.children = items5;
  obj.children = closure_10(closure_5, obj2);
  return closure_9(onSelect(first[11]).BottomSheet, obj);
};