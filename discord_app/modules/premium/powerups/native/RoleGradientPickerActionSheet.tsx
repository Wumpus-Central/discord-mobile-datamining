// discord_app/modules/premium/powerups/native/RoleGradientPickerActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import showCustomColorPickerActionSheetDefault from "../../../color_picker/native/showCustomColorPickerActionSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const EnhancedRoleColorConstants = fn(18058);
({ DEFAULT_GRADIENT_ROLE_COLORS: closure_7, GRADIENT_PRESETS: closure_8 } = EnhancedRoleColorConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  body: {
    paddingVertical: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_12,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: nativeDefault.space.PX_16,
  },
  gradientContainer: null,
  dropperContainer: null,
  dropper: null,
  gradient: null,
  optionContainer: null,
  pressable: null,
  selected: null,
  option: null,
};
let obj3 = {
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
};
obj2.gradientContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
};
const rect = {
  left: nativeDefault.space.PX_24,
  right: nativeDefault.space.PX_24,
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
obj2.dropperContainer = rect;
let obj4 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
};
obj2.dropper = {
  borderColor: "white",
  tintColor: "white",
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
};
let size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
obj2.gradient = size;
let obj5 = {
  borderColor: "white",
  tintColor: "white",
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
};
obj2.optionContainer = {
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};
const size1 = { width: 80, height: 50, borderRadius: nativeDefault.radii.sm, overflow: "hidden", padding: 2 };
obj2.pressable = size1;
let obj6 = {
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};
obj2.selected = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj7 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.option = { flex: 1, borderRadius: nativeDefault.radii.sm };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/RoleGradientPickerActionSheet.tsx");

export default function RoleGradientPickerActionSheet(arg0) {
  ({ colors, onSelect } = arg0);
  first = undefined;
  _slicedToArray = undefined;
  let callback1;
  let tmp = closure_11();
  importDefault = tmp;
  if (null == colors) {
    colors = closure_7;
  }
  [first, _slicedToArray] = callback1.useState(colors);
  const values = Object.values(onSelect(first[7]).extractColorStringsFromServerColors(first));
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
    showCustomColorPickerActionSheetDefault(
      {
        color: num,
        onSelect(primary_color) {
          const obj = {};
          const merged = Object.assign(first);
          obj.primary_color = primary_color;
          return callback1(obj);
        },
      },
      "stack",
    );
  }, items1);
  const callback3 = obj.useCallback(() => {
    let num;
    if (first != null) {
      num = first.secondary_color;
    }
    if (num == null) {
      num = 0;
    }
    showCustomColorPickerActionSheetDefault(
      {
        color: num,
        onSelect(secondary_color) {
          const obj = {};
          const merged = Object.assign(first);
          obj.secondary_color = secondary_color;
          return callback1(obj);
        },
      },
      "stack",
    );
  }, items2);
  const obj3 = { header: null, children: null };
  const obj4 = { title: null, trailing: null };
  const intl = onSelect(first[13]).intl;
  obj4.title = intl.string(onSelect(first[13]).t.XpWmJz);
  const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl2 = onSelect(first[13]).intl;
  obj5.text = intl2.string(onSelect(first[13]).t["R3BPH+"]);
  obj5.onPress = callback;
  obj4.trailing = closure_9(onSelect(first[14]).Button, obj5);
  obj3.header = closure_9(onSelect(first[12]).BottomSheetTitleHeader, obj4);
  const obj6 = { style: tmp.body, children: null };
  const obj7 = { style: tmp.gradientContainer, children: null };
  const items3 = [
    closure_9(require("LinearGradient"), {
      style: tmp.gradient,
      colors: found,
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
    }),
  ];
  const obj9 = { style: tmp.dropperContainer, children: null };
  const obj10 = {
    style: tmp.dropper,
    onPress: callback2,
    accessibilityLabel: null,
    accessibilityRole: "button",
    children: null,
  };
  const intl3 = onSelect(first[13]).intl;
  obj10.accessibilityLabel = intl3.string(onSelect(first[13]).t.QPqIEx);
  obj10.children = closure_9(onSelect(first[16]).EyeDropperIcon, { color: "white", size: "sm" });
  const items4 = [closure_9(closure_6, obj10)];
  const obj11 = {
    style: tmp.dropper,
    onPress: callback3,
    accessibilityLabel: null,
    accessibilityRole: "button",
    children: null,
  };
  const intl4 = onSelect(first[13]).intl;
  obj11.accessibilityLabel = intl4.string(onSelect(first[13]).t.fLMusI);
  obj11.children = closure_9(onSelect(first[16]).EyeDropperIcon, { color: "white", size: "sm" });
  items4[1] = closure_9(closure_6, obj11);
  obj9.children = items4;
  items3[1] = closure_10(closure_5, obj9);
  obj7.children = items3;
  const items5 = [closure_10(closure_5, obj7), ,];
  let obj2 = onSelect(first[7]);
  const obj8 = { style: tmp.gradient, colors: found, start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
  items5[1] = closure_9(closure_5, {
    style: tmp.optionContainer,
    children: closure_8.map((colors) => {
      const tmp = closure_3(colors.colors, 2);
      const primary_color = tmp[0];
      const secondary_color = tmp3;
      const items = [secondary_color.pressable];
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
        children: null,
      };
      items[1] = selected;
      const obj2 = { style: secondary_color.option, colors: null, start: null, end: null };
      const tmp8 = secondary_color(primary_color[15]);
      const items1 = [onSelect(primary_color[18]).int2hex(primary_color)];
      const tmp5Result = onSelect(primary_color[18]);
      items1[1] = onSelect(primary_color[18]).int2hex(tmp[1]);
      obj2.colors = items1;
      obj2.start = { x: 0, y: 0 };
      obj2.end = { x: 1, y: 0 };
      obj.children = closure_1_9(tmp8, obj2);
      return closure_1_9(onSelect(primary_color[17]).PressableOpacity, obj, colors.name);
    }),
  });
  const obj13 = { text: null, onPress: null };
  const intl5 = onSelect(first[13]).intl;
  obj13.text = intl5.string(onSelect(first[13]).t.yBZMsQ);
  obj13.onPress = function onPress() {
    closure_3(React5);
  };
  items5[2] = closure_9(onSelect(first[14]).Button, obj13);
  obj6.children = items5;
  obj3.children = closure_10(closure_5, obj6);
  return closure_9(onSelect(first[11]).BottomSheet, obj3);
}
