// === Module 13636: CheckpointGlobalStatNumber ===

// Module 13636 (CheckpointGlobalStatNumber)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13627 */;
import CheckpointGlobeAnimationDefault from "CheckpointGlobeAnimation" /* 13628 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 13637 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

function GlobalStatValue(value) {
  value = value.value;
  if (typeof value === "string") {
    const obj = { value, size: 96 };
    let tmp4 = React4(CheckpointStatNumberDefault, obj);
  } else {
    const obj2 = { end: value, size: 96 };
    tmp4 = React4(CheckpointCountUpStatNumberDefault, obj2);
  }
  return tmp4;
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: nativeDefault.space.PX_8 }, croppedContainer: null, uncroppedContainer: null, clip: null, value: null, globe: null };
let obj2 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
obj.croppedContainer = { marginTop: -nativeDefault.space.PX_30, marginBottom: -nativeDefault.space.PX_20 };
let obj3 = { marginTop: -nativeDefault.space.PX_30, marginBottom: -nativeDefault.space.PX_20 };
obj.uncroppedContainer = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj.clip = { height: 96 - 2 * nativeDefault.space.PX_24, marginVertical: nativeDefault.space.PX_24, paddingRight: nativeDefault.space.PX_8, marginRight: -nativeDefault.space.PX_8, overflow: "hidden" };
let obj5 = { height: 96 - 2 * nativeDefault.space.PX_24, marginVertical: nativeDefault.space.PX_24, paddingRight: nativeDefault.space.PX_8, marginRight: -nativeDefault.space.PX_8, overflow: "hidden" };
obj.value = { marginTop: -nativeDefault.space.PX_24 };
obj.globe = { width: 75, height: 56 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobalStatNumber.tsx");

export default function CheckpointGlobalStatNumber(arg0) {
  ({ value, accessibilityLabel } = arg0);
  const iter = closure_6();
  if (accessibilityLabel == null) {
    let toLocaleStringResult = value;
    if (typeof value === "number") {
      toLocaleStringResult = value.toLocaleString(util.intl.currentLocale);
    }
    accessibilityLabel = toLocaleStringResult;
  }
  const obj2 = { accessible: true, accessibilityLabel, style: null, children: null };
  const items = [iter.container, ];
  if (obj.isCheckpointStatNumberShrunk(value)) {
    items[1] = iter.croppedContainer;
    obj2.style = items;
    const obj3 = { style: iter.clip, children: null };
    const obj4 = { style: iter.value, children: null };
    const obj5 = { value };
    obj4.children = React4(GlobalStatValue, obj5);
    obj3.children = React4(View, obj4);
    const items1 = [React4(View, obj3), ];
    const obj6 = { style: iter.globe };
    items1[1] = React4(CheckpointGlobeAnimationDefault, obj6);
    obj2.children = items1;
    let tmp3Result = hasOwnProperty(View, obj2);
  } else {
    items[1] = iter.uncroppedContainer;
    obj2.style = items;
    const obj7 = { value };
    const items2 = [React4(GlobalStatValue, obj7), ];
    const obj8 = { style: iter.globe };
    items2[1] = React4(CheckpointGlobeAnimationDefault, obj8);
    obj2.children = items2;
    tmp3Result = hasOwnProperty(View, obj2);
  }
  return tmp3Result;
};