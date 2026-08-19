// discord_app/components_native/common/color_picker/RoleColorPickerActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ DEFAULT_ROLE_COLOR: error, ROLE_COLORS } = ME);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let items = [...require("../../../index.native.tsx"), ...require("../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx"), ...require("../../../../_runtime/00005_asyncGeneratorStep.js"), ...require("../../../modules/gateway/native/fast_connect.tsx")];
const createCacheKey = { paddingVertical: ThemesDefault.space.PX_16, flexGrow: 1, justifyContent: "center", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", maxWidth: 340, marginBottom: ThemesDefault.space.PX_16 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("components_native/common/color_picker/RoleColorPickerActionSheet.tsx");

export default function RoleColorPickerActionSheet(color) {
  color = color.color;
  const onSelect = color.onSelect;
  ({ confirmLabel, defaultColor } = color);
  if (defaultColor === undefined) {
    defaultColor = memo;
  }
  let first;
  let tmp = callback2();
  let obj = color(defaultColor[7]);
  const styles = obj.useStyles();
  const tmp5 = styles(first.useState(color), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  obj1 = color(defaultColor[8]);
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
  const items3 = [items.map((item, index) => callback2(onSelect(defaultColor[7]), { color: item, style: memo, selected: item === first, onSelect: callback2 }, item)), ];
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