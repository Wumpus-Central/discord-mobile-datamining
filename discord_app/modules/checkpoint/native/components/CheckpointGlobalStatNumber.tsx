// discord_app/modules/checkpoint/native/components/CheckpointGlobalStatNumber.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckpointStatNumber from "CheckpointStatNumber.tsx";
import CheckpointGlobeAnimationDefault from "CheckpointGlobeAnimation.tsx";
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const CheckpointStatNumberDefault = CheckpointStatNumber;

require = fn;
function GlobalStatValue(value) {
  value = value.value;
  if (typeof value === "string") {
    const obj = { value, size: 96 };
    let tmp4 = hasOwnProperty(CheckpointStatNumberDefault, obj);
  } else {
    const obj2 = { end: value, size: 96 };
    tmp4 = hasOwnProperty(CheckpointCountUpStatNumberDefault, obj2);
  }
  return tmp4;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let c7 = 1.3392857142857142;
const createStyles = fn(5306);
let obj2 = {
  container: { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 },
  croppedContainer: null,
  uncroppedContainer: null,
  clip: null,
  value: null,
  globe: null,
  globeImage: null,
};
let obj3 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
obj2.croppedContainer = { marginTop: -nativeDefault.space.PX_30, marginBottom: -nativeDefault.space.PX_20 };
let obj4 = { marginTop: -nativeDefault.space.PX_30, marginBottom: -nativeDefault.space.PX_20 };
obj2.uncroppedContainer = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj5 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj2.clip = {
  height: 96 - 2 * nativeDefault.space.PX_24,
  marginVertical: nativeDefault.space.PX_24,
  paddingRight: nativeDefault.space.PX_8,
  marginRight: -nativeDefault.space.PX_8,
  overflow: "hidden",
};
let obj6 = {
  height: 96 - 2 * nativeDefault.space.PX_24,
  marginVertical: nativeDefault.space.PX_24,
  paddingRight: nativeDefault.space.PX_8,
  marginRight: -nativeDefault.space.PX_8,
  overflow: "hidden",
};
obj2.value = { marginTop: -nativeDefault.space.PX_24 };
obj2.globe = { flexShrink: 1 };
obj2.globeImage = { width: "100%", aspectRatio: 1.3392857142857142 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobalStatNumber.tsx");

export default function CheckpointGlobalStatNumber(arg0) {
  ({ value, accessibilityLabel } = arg0);
  _require = undefined;
  const iter = closure_8();
  let result = value;
  if (typeof value === "number") {
    result = require("CheckpointNumberUtils").formatCheckpointStatNumber(value);
    const obj11 = require("CheckpointNumberUtils");
  }
  _require = result;
  if (accessibilityLabel == null) {
    accessibilityLabel = result;
  }
  items = [result];
  const memo = noop.useMemo(() => {
    const result = CheckpointStatNumber.getCheckpointStatNumberDigitHeight(c0, 96) / 0.7263157894736842;
    const obj3 = { width: result * c7, transform: null };
    items = [{ translateY: 3.936 * (1 - CheckpointStatNumber.getCheckpointStatNumberShrinkRatio(c0)) }];
    obj3.transform = items;
    return obj3;
  }, items);
  let obj2 = { accessible: true, accessibilityLabel, style: null, children: null };
  const items1 = [iter.container];
  if (obj.isCheckpointStatNumberShrunk(result)) {
    items1[1] = iter.croppedContainer;
    obj2.style = items1;
    let obj3 = { style: iter.clip, children: null };
    const obj4 = { style: iter.value, children: null };
    const obj5 = { value };
    obj4.children = closure_5(GlobalStatValue, obj5);
    obj3.children = closure_5(View, obj4);
    const items2 = [closure_5(View, obj3)];
    const obj6 = { style: null, children: null };
    const items3 = [iter.globe, memo];
    obj6.style = items3;
    const obj7 = { style: iter.globeImage };
    obj6.children = closure_5(CheckpointGlobeAnimationDefault, obj7);
    items2[1] = closure_5(View, obj6);
    obj2.children = items2;
    let tmp4Result = closure_6(View, obj2);
  } else {
    items1[1] = iter.uncroppedContainer;
    obj2.style = items1;
    const obj8 = { value };
    const items4 = [closure_5(GlobalStatValue, obj8)];
    const obj9 = { style: null, children: null };
    const items5 = [iter.globe, memo];
    obj9.style = items5;
    const obj10 = { style: iter.globeImage };
    obj9.children = closure_5(CheckpointGlobeAnimationDefault, obj10);
    items4[1] = closure_5(View, obj9);
    obj2.children = items4;
    tmp4Result = closure_6(View, obj2);
  }
  return tmp4Result;
}
