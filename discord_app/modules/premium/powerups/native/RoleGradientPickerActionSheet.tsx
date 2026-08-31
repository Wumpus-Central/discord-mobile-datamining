// === Module 17175: RoleGradientPickerActionSheet ===

// Module 17175 (RoleGradientPickerActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import HOLOGRAPHIC_ROLE_COLORS from "HOLOGRAPHIC_ROLE_COLORS" /* 17160 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ DEFAULT_GRADIENT_ROLE_COLORS: error, GRADIENT_PRESETS: closure_8 } = HOLOGRAPHIC_ROLE_COLORS);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { body: null, gradientContainer: null, dropperContainer: null, dropper: null, gradient: null, optionContainer: null, pressable: null, selected: null, option: null };
createCacheKey = { paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_8 };
let obj1 = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[2] = { left: ThemesDefault.space.PX_24, right: ThemesDefault.space.PX_24, position: "absolute", display: "flex", flexDirection: "row", justifyContent: "space-between" };
let obj2 = { left: ThemesDefault.space.PX_24, right: ThemesDefault.space.PX_24, position: "absolute", display: "flex", flexDirection: "row", justifyContent: "space-between" };
createCacheKey[3] = { borderColor: "white", tintColor: "white", padding: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.round, borderWidth: 1 };
let obj3 = { borderColor: "white", tintColor: "white", padding: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.round, borderWidth: 1 };
createCacheKey[4] = { height: 50, width: "100%", borderRadius: ThemesDefault.radii.sm };
const obj4 = { height: 50, width: "100%", borderRadius: ThemesDefault.radii.sm };
createCacheKey[5] = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_8, flexWrap: "wrap", alignItems: "center", justifyContent: "center" };
let obj5 = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_8, flexWrap: "wrap", alignItems: "center", justifyContent: "center" };
createCacheKey[6] = { width: 80, height: 50, borderRadius: ThemesDefault.radii.sm, overflow: "hidden", padding: 2 };
let obj6 = { width: 80, height: 50, borderRadius: ThemesDefault.radii.sm, overflow: "hidden", padding: 2 };
createCacheKey[7] = { borderWidth: 2, borderColor: ThemesDefault.colors.BACKGROUND_BRAND };
let obj7 = { borderWidth: 2, borderColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[8] = { flex: 1, borderRadius: ThemesDefault.radii.sm };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const obj8 = { flex: 1, borderRadius: ThemesDefault.radii.sm };
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/RoleGradientPickerActionSheet.tsx");

export default function RoleGradientPickerActionSheet(arg0) {
  ({ colors, onSelect } = arg0);
  importDefault = undefined;
  let first;
  let callback;
  let callback1;
  let tmp = callback4();
  importDefault = tmp;
  let obj = callback1;
  if (null == colors) {
    colors = closure_7;
  }
  const tmp2 = callback(callback1.useState(colors), 2);
  first = tmp2[0];
  callback = tmp2[1];
  obj1 = onSelect(first[7]);
  const values = Object.values(obj1.extractColorStringsFromServerColors(first));
  let items = [first, onSelect];
  const found = values.filter(onSelect(first[8]).isNotNullish);
  callback = obj.useCallback(() => {
    onSelect(first);
    lib(first[9]).hideActionSheet();
  }, items);
  callback1 = obj.useCallback((arg0) => {
    callback(arg0);
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
    lib(first[10])({
      color: num,
      onSelect(primary_color) {
        const obj = {};
        const merged = Object.assign(closure_2);
        obj.primary_color = primary_color;
        return callback(obj);
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
    lib(first[10])({
      color: num,
      onSelect(secondary_color) {
        const obj = {};
        const merged = Object.assign(closure_2);
        obj.secondary_color = secondary_color;
        return callback(obj);
      }
    }, "stack");
  }, items2);
  obj = { header: null, children: null };
  obj = { title: null, trailing: null };
  const intl = onSelect(first[13]).intl;
  obj[0] = intl.string(onSelect(first[13]).t.XpWmJz);
  obj1 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl2 = onSelect(first[13]).intl;
  obj1[2] = intl2.string(onSelect(first[13]).t["R3BPH+"]);
  obj1[3] = callback;
  obj[1] = callback2(onSelect(first[14]).Button, obj1);
  obj[0] = callback2(onSelect(first[12]).BottomSheetTitleHeader, obj);
  const obj2 = { style: tmp.body, children: null };
  const obj3 = { style: tmp.gradientContainer, children: null };
  const items3 = [callback2(importDefault(first[15]), { style: tmp.gradient, colors: found, start: { x: 0, y: 0 }, end: { x: 1, y: 0 } }), ];
  const obj5 = { style: tmp.dropperContainer, children: null };
  const obj6 = { style: tmp.dropper, onPress: callback2, accessibilityLabel: null, accessibilityRole: "button", children: null };
  const intl3 = onSelect(first[13]).intl;
  obj6[2] = intl3.string(onSelect(first[13]).t.QPqIEx);
  obj6[4] = callback2(onSelect(first[16]).EyeDropperIcon, { color: "white", size: "sm" });
  const items4 = [callback2(closure_6, obj6), ];
  const obj7 = { style: tmp.dropper, onPress: callback3, accessibilityLabel: null, accessibilityRole: "button", children: null };
  const intl4 = onSelect(first[13]).intl;
  obj7[2] = intl4.string(onSelect(first[13]).t.fLMusI);
  obj7[4] = callback2(onSelect(first[16]).EyeDropperIcon, { color: "white", size: "sm" });
  items4[1] = callback2(closure_6, obj7);
  obj5[1] = items4;
  items3[1] = callback3(closure_5, obj5);
  obj3[1] = items3;
  const items5 = [
    callback3(closure_5, obj3),
    callback2(closure_5, {
      style: tmp.optionContainer,
      children: closure_8.map((colors) => {
        const tmp = callback(colors.colors, 2);
        first = tmp[0];
        const lib = tmp3;
        const items = [lib.pressable, ];
        let selected = first === first.primary_color;
        if (selected) {
          selected = tmp3 === first.secondary_color;
        }
        if (selected) {
          selected = tmp7.selected;
        }
        let obj = {
          style: items,
          onPress() {
            const obj = {};
            const merged = Object.assign(closure_1_2);
            obj.primary_color = first;
            obj.secondary_color = closure_1;
            return closure_1_4(obj);
          },
          children: null
        };
        items[1] = selected;
        obj = { style: tmp7.option, colors: null, start: null, end: null };
        let tmp5Result = tmp5(tmp6[18]);
        const items1 = [tmp5Result.int2hex(first), ];
        tmp5Result = tmp5(tmp6[18]);
        items1[1] = tmp5Result.int2hex(tmp[1]);
        obj[1] = items1;
        obj[2] = { x: 0, y: 0 };
        obj[3] = { x: 1, y: 0 };
        obj[2] = closure_1_9(lib(first[15]), obj);
        return closure_1_9(onSelect(first[17]).PressableOpacity, obj, colors.name);
      })
    }),

  ];
  const obj9 = { text: null, onPress: null };
  const intl5 = onSelect(first[13]).intl;
  obj9[0] = intl5.string(onSelect(first[13]).t.yBZMsQ);
  obj9[1] = function onPress() {
    callback(closure_1_7);
  };
  items5[2] = callback2(onSelect(first[14]).Button, obj9);
  obj2[1] = items5;
  obj[1] = callback3(closure_5, obj2);
  return callback2(onSelect(first[11]).BottomSheet, obj);
};