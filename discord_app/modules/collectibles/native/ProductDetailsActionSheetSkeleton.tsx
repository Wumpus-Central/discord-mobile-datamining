// === Module 13167: ProductDetailsActionSheetSkeleton ===

// Module 13167 (ProductDetailsActionSheetSkeleton)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1 }, scrollArea: { flex: 1 }, block: null, preview: null, info: null, title: null, description: null, price: null, purchaseSection: null, purchaseButton: null };
createStyles = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.block = createStyles;
createStyles.preview = { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, height: 280, borderRadius: nativeDefault.radii.md };
let obj1 = { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, height: 280, borderRadius: nativeDefault.radii.md };
createStyles.info = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let size = { height: 24, width: "60%", borderRadius: nativeDefault.radii.xs };
createStyles.title = size;
const size1 = { height: 16, width: "90%", borderRadius: nativeDefault.radii.xs };
createStyles.description = size1;
const size2 = { marginTop: nativeDefault.space.PX_12, height: 20, width: "30%", borderRadius: nativeDefault.radii.xs };
createStyles.price = size2;
let obj2 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
createStyles.purchaseSection = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
createStyles.purchaseButton = { height: fn(4980).LARGE_BUTTON_HEIGHT, borderRadius: nativeDefault.radii.round };
let closure_7 = createStyles.createStyles(createStyles);
const __initData = { code: "function ProductDetailsActionSheetSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetSkeleton.tsx");

export default function ProductDetailsActionSheetSkeleton() {
  const tmp = closure_7();
  let sharedValue;
  let obj = sharedValue(4296);
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj1 = sharedValue(4296);
  const fn = function o() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 4141895524740;
  fn.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.scrollArea, children: null };
  obj1 = { style: null };
  const items1 = [, , ];
  ({ block: arr2[0], preview: arr2[1] } = tmp);
  items1[2] = animatedStyle;
  obj1.style = items1;
  const items2 = [closure_5(ReanimatedRexportDefault.View, obj1), ];
  const obj2 = { style: tmp.info, children: null };
  const obj3 = { style: null };
  const items3 = [, , ];
  ({ block: arr4[0], title: arr4[1] } = tmp);
  items3[2] = animatedStyle;
  obj3.style = items3;
  const items4 = [closure_5(ReanimatedRexportDefault.View, obj3), , ];
  const obj4 = { style: null };
  const items5 = [, , ];
  ({ block: arr6[0], description: arr6[1] } = tmp);
  items5[2] = animatedStyle;
  obj4.style = items5;
  items4[1] = closure_5(ReanimatedRexportDefault.View, obj4);
  const obj5 = { style: null };
  const items6 = [, , ];
  ({ block: arr7[0], price: arr7[1] } = tmp);
  items6[2] = animatedStyle;
  obj5.style = items6;
  items4[2] = closure_5(ReanimatedRexportDefault.View, obj5);
  obj2.children = items4;
  items2[1] = closure_6(View, obj2);
  obj.children = items2;
  const items7 = [closure_6(View, obj), ];
  const obj6 = { style: tmp.purchaseSection, children: null };
  const obj7 = { style: null };
  const items8 = [, , ];
  ({ block: arr9[0], purchaseButton: arr9[1] } = tmp);
  items8[2] = animatedStyle;
  obj7.style = items8;
  obj6.children = closure_5(ReanimatedRexportDefault.View, obj7);
  items7[1] = closure_5(View, obj6);
  obj.children = items7;
  return closure_6(View, obj);
};