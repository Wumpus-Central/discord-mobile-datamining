import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let ROLE_COLORS;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ DEFAULT_ROLE_COLOR: error, ROLE_COLORS } = ME);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let items = [...require("_slicedToArray"), ...require("showCustomColorPickerActionSheet"), ...require("createCacheKey"), ...require("EyeDropperIcon")];
createCacheKey = { body: null, colorWrap: null };
createCacheKey = { paddingVertical: require("Themes").space.PX_16, flexGrow: 1, justifyContent: "center", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", maxWidth: 340, marginBottom: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexGrow: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", maxWidth: 340, marginBottom: require("Themes").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/common/color_picker/RoleColorPickerActionSheet.tsx");

export default function RoleColorPickerActionSheet(color) {
  let confirmLabel;
  let defaultColor;
  color = color.color;
  const onSelect = color.onSelect;
  ({ confirmLabel, defaultColor } = color);
  if (defaultColor === undefined) {
    defaultColor = memo;
  }
  let styles;
  let first;
  let closure_5;
  let isWindowSmall;
  memo = undefined;
  let closure_8;
  let tmp = createCacheKey();
  let obj = color(defaultColor[7]);
  styles = obj.useStyles();
  const tmp5 = styles(first.useState(color), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  let obj1 = color(defaultColor[8]);
  isWindowSmall = obj1.useIsWindowSmall();
  const items = [isWindowSmall, styles.colorBlock];
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
    onSelect(defaultColor[9]).hideActionSheet();
  }, items1);
  closure_8 = first.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items2 = [color, onSelect];
  const callback1 = first.useCallback(() => {
    onSelect(defaultColor[10])({ color, onSelect });
  }, items2);
  obj = { title: null, trailing: null };
  const intl = color(defaultColor[13]).intl;
  obj[0] = intl.string(color(defaultColor[13]).t.WTqQ5e);
  if (null != confirmLabel) {
    obj = { size: "sm", variant: "secondary", text: null, onPress: null };
    obj[2] = confirmLabel;
    obj[3] = callback;
    obj1 = obj;
  } else {
    obj1 = { size: "sm", text: null, onPress: null };
    const intl2 = tmp2(tmp3[13]).intl;
    obj1[1] = intl2.string(tmp2(tmp3[13]).t["R3BPH+"]);
    obj1[2] = callback;
  }
  const obj2 = { header: null, children: null };
  obj[1] = closure_8(color(defaultColor[14]).Button, obj1);
  obj2[0] = closure_8(color(defaultColor[12]).BottomSheetTitleHeader, obj);
  const obj3 = { style: tmp.body, children: null };
  const obj4 = { style: tmp.colorWrap, children: null };
  const items3 = [items.map((color) => callback2(onSelect(defaultColor[7]), { color, style: memo, selected: color === first, onSelect: callback2 }, color)), ];
  const obj5 = { style: memo, onPress: callback1, accessibilityLabel: null, accessibilityRole: "button", children: null };
  const intl3 = tmp2(tmp3[13]).intl;
  obj5[2] = intl3.string(color(defaultColor[13]).t["/fkc8a"]);
  obj5[4] = closure_8(color(defaultColor[15]).EyeDropperIcon, { size: "lg" });
  items3[1] = closure_8(isWindowSmall, obj5);
  obj4[1] = items3;
  const items4 = [callback(closure_5, obj4), ];
  const obj6 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(tmp3[13]).intl;
  obj6[1] = intl4.string(color(defaultColor[13]).t.yBZMsQ);
  obj6[2] = function onPress() {
    callback(defaultColor);
  };
  items4[1] = closure_8(color(defaultColor[14]).Button, obj6);
  obj3[1] = items4;
  obj2[1] = callback(closure_5, obj3);
  return closure_8(color(defaultColor[11]).BottomSheet, obj2);
};