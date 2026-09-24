// discord_app/modules/collectibles/native/ProductDetailsActionSheetSkeleton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
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
obj2.purchaseButton = { height: fn(5278).LARGE_BUTTON_HEIGHT, borderRadius: nativeDefault.radii.round };
let closure_7 = createStyles.createStyles(obj2);
const __initData = {
  code: "function ProductDetailsActionSheetSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetSkeleton.tsx");

export default function ProductDetailsActionSheetSkeleton() {
  const tmp = closure_7();
  let sharedValue;
  sharedValue = sharedValue(4561).useSharedValue(0.3);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = sharedValue(4561);
  const fn = function o() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 4141895524740;
  fn.__initData = __initData;
  const animatedStyle = sharedValue(4561).useAnimatedStyle(fn);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.scrollArea, children: null };
  const obj5 = { style: null };
  const items1 = [, ,];
  ({ block: arr2[0], preview: arr2[1] } = tmp);
  items1[2] = animatedStyle;
  obj5.style = items1;
  const items2 = [closure_5(ReanimatedRexportDefault.View, obj5)];
  const obj6 = { style: tmp.info, children: null };
  const obj7 = { style: null };
  const items3 = [, ,];
  ({ block: arr4[0], title: arr4[1] } = tmp);
  items3[2] = animatedStyle;
  obj7.style = items3;
  const items4 = [closure_5(ReanimatedRexportDefault.View, obj7), ,];
  const obj8 = { style: null };
  const items5 = [, ,];
  ({ block: arr6[0], description: arr6[1] } = tmp);
  items5[2] = animatedStyle;
  obj8.style = items5;
  items4[1] = closure_5(ReanimatedRexportDefault.View, obj8);
  const obj9 = { style: null };
  const items6 = [, ,];
  ({ block: arr7[0], price: arr7[1] } = tmp);
  items6[2] = animatedStyle;
  obj9.style = items6;
  items4[2] = closure_5(ReanimatedRexportDefault.View, obj9);
  obj6.children = items4;
  items2[1] = closure_6(View, obj6);
  obj4.children = items2;
  const items7 = [closure_6(View, obj4)];
  const obj10 = { style: tmp.purchaseSection, children: null };
  const obj11 = { style: null };
  const items8 = [, ,];
  ({ block: arr9[0], purchaseButton: arr9[1] } = tmp);
  items8[2] = animatedStyle;
  obj11.style = items8;
  obj10.children = closure_5(ReanimatedRexportDefault.View, obj11);
  items7[1] = closure_5(View, obj10);
  obj3.children = items7;
  return closure_6(View, obj3);
}
