// discord_app/modules/collectibles/native/ProductDetailsActionSheetSkeleton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5141);
const obj2 = {
  container: { flex: 1 },
  scrollArea: { flex: 1 },
  block: { backgroundColor: nativeDefault.colors.BORDER_SUBTLE },
  preview: null,
  info: null,
  title: null,
  description: null,
  price: null,
  purchaseSection: null,
  purchaseButton: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.preview = {
  marginTop: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_16,
  height: 280,
  borderRadius: nativeDefault.radii.md,
};
let obj4 = {
  marginTop: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_16,
  height: 280,
  borderRadius: nativeDefault.radii.md,
};
obj2.info = {
  marginTop: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
let size = { height: 24, width: "60%", borderRadius: nativeDefault.radii.xs };
obj2.title = size;
const size1 = { height: 16, width: "90%", borderRadius: nativeDefault.radii.xs };
obj2.description = size1;
const size2 = { marginTop: nativeDefault.space.PX_12, height: 20, width: "30%", borderRadius: nativeDefault.radii.xs };
obj2.price = size2;
let obj5 = {
  marginTop: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
obj2.purchaseSection = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
};
let obj6 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
};
obj2.purchaseButton = { height: fn(5760).LARGE_BUTTON_HEIGHT, borderRadius: nativeDefault.radii.round };
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = {
  code: "(function ProductDetailsActionSheetSkeletonTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetSkeleton.tsx");

export default function ProductDetailsActionSheetSkeleton() {
  const tmp = closure_7();
  _require = undefined;
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0.3);
  _require = sharedValue;
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = _mod1652;
    const result = _undefined.set(obj.withRepeat(timing_timing.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = require("../../../../_runtime/metro/01652__.js");
  const items1 = [closure_8, sharedValue];
  _require = undefined;
  [tmp5, tmp6] = items1;
  class ProductDetailsActionSheetSkeletonTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp6];
  ProductDetailsActionSheetSkeletonTsx1.__closure = items2;
  ProductDetailsActionSheetSkeletonTsx1.__workletHash = 8439265984765;
  ProductDetailsActionSheetSkeletonTsx1.__initData = tmp5;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    ProductDetailsActionSheetSkeletonTsx1,
  );
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.scrollArea, children: null };
  const obj5 = { style: null };
  const items3 = [, ,];
  ({ block: arr4[0], preview: arr4[1] } = tmp);
  items3[2] = animatedStyle;
  obj5.style = items3;
  const items4 = [closure_5(_modDef1652.View, obj5)];
  const obj6 = { style: tmp.info, children: null };
  const obj7 = { style: null };
  const items5 = [, ,];
  ({ block: arr6[0], title: arr6[1] } = tmp);
  items5[2] = animatedStyle;
  obj7.style = items5;
  const items6 = [closure_5(_modDef1652.View, obj7), ,];
  const obj8 = { style: null };
  const items7 = [, ,];
  ({ block: arr8[0], description: arr8[1] } = tmp);
  items7[2] = animatedStyle;
  obj8.style = items7;
  items6[1] = closure_5(_modDef1652.View, obj8);
  const obj9 = { style: null };
  const items8 = [, ,];
  ({ block: arr9[0], price: arr9[1] } = tmp);
  items8[2] = animatedStyle;
  obj9.style = items8;
  items6[2] = closure_5(_modDef1652.View, obj9);
  obj6.children = items6;
  items4[1] = closure_6(View, obj6);
  obj4.children = items4;
  const items9 = [closure_6(View, obj4)];
  const obj10 = { style: tmp.purchaseSection, children: null };
  const obj11 = { style: null };
  const items10 = [, ,];
  ({ block: arr11[0], purchaseButton: arr11[1] } = tmp);
  items10[2] = animatedStyle;
  obj11.style = items10;
  obj10.children = closure_5(_modDef1652.View, obj11);
  items9[1] = closure_5(View, obj10);
  obj3.children = items9;
  return closure_6(View, obj3);
}
