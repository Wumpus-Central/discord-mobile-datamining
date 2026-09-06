// discord_app/modules/premium_marketing/native/BuyNitroMarketingHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import reanimated_AccessibilityPreferencesSharedValue from "../../../design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Gradients = fn(7432).Gradients;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num = 0;
  if (arg1) {
    num = 0;
    if (arg2) {
      num = tmp(576).space.PX_8;
    }
  }
  let obj = { marginHorizontal: -nativeDefault.space.PX_16 + num, marginTop: null, marginBottom: null, overflow: null };
  PX_8 = undefined;
  if (arg1) {
    if (arg2) {
      PX_8 = tmp(576).space.PX_8;
    }
  }
  obj.marginTop = PX_8;
  obj.marginBottom = nativeDefault.space.PX_16;
  let str;
  if (arg1) {
    if (arg2) {
      str = "hidden";
    }
  }
  obj = {
    banner: obj,
    background: null,
    clouds: null,
    wumpus: null,
    wumpusImage: null,
    backButton: null,
    content: null,
    fade: null,
    overflow: str,
  };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  if (!arg1) {
    let num2 = 5 * -tmp(576).space.PX_192;
  } else {
    num2 = 0;
  }
  obj.top = num2;
  obj.color = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  let sm;
  if (arg1) {
    if (arg2) {
      sm = tmp(576).radii.sm;
    }
  }
  obj.borderRadius = sm;
  obj.background = obj;
  const rect = {
    position: "absolute",
    top: -tmp(576).space.PX_16,
    right: "call",
    left: "st",
    alignSelf: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009372008290128806,
  };
  obj.clouds = rect;
  const rect1 = { position: "absolute", top: arg0 + tmp(576).space.PX_20, right: tmp(576).space.PX_4 };
  obj.wumpus = rect1;
  const tmp3 = -nativeDefault.space.PX_16;
  const tmp5 = absoluteFillObject;
  obj.wumpusImage = { height: nativeDefault.space.PX_80 + nativeDefault.space.PX_4 };
  let num4 = 0;
  if (arg1) {
    num4 = tmp(576).space.PX_8;
  }
  const rect2 = { position: "absolute", top: arg0 - num4, left: null, transform: null };
  let num5 = 0;
  if (!arg1) {
    num5 = tmp(576).space.PX_8;
  }
  rect2.left = nativeDefault.space.PX_8 + num5;
  const items = [{ scaleX: -1 }];
  rect2.transform = items;
  obj.backButton = rect2;
  const obj2 = {
    alignItems: "center",
    gap: nativeDefault.space.PX_8,
    paddingTop: null,
    paddingHorizontal: null,
    paddingBottom: null,
  };
  const sum = arg0 + tmp(576).space.PX_80;
  obj2.paddingTop = sum + nativeDefault.space.PX_4;
  obj2.paddingHorizontal = nativeDefault.space.PX_16;
  const space = tmp(576).space;
  obj2.paddingBottom = arg1 ? space.PX_24 : space.PX_32;
  obj.content = obj2;
  const obj3 = {};
  const merged1 = Object.assign(tmp5.absoluteFillObject);
  obj3.height = nativeDefault.space.PX_96;
  obj3.position = "absolute";
  obj3.top = undefined;
  obj.fade = obj3;
  return obj;
});
const __initData = {
  code: "function BuyNitroMarketingHeaderTsx1(){const{floatX,floatY}=this.__closure;return{transform:[{translateX:floatX.get()},{translateY:floatY.get()}]};}",
};
const __initData2 = {
  code: "function BuyNitroMarketingHeaderTsx2(){const{cloudsOpacity}=this.__closure;return{opacity:cloudsOpacity.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingHeader.tsx");

export default function BuyNitroMarketingHeader(arg0) {
  ({ topInset, onBackPress, selectedTier } = arg0);
  const tmp5 = sharedValue1(sharedValue2[9])() === sharedValue(sharedValue2[10]).ThemeTypes.LIGHT;
  let tmp6 = tmp5;
  if (tmp5) {
    let tmp4Result = tmp4(tmp2[11]);
    tmp6 = !tmp4Result.isAndroid();
  }
  const tmp7 = closure_11(topInset, tmp5, tmp6);
  const color = tmp7.background.color;
  sharedValue1 = undefined;
  sharedValue2 = undefined;
  tmp4Result = tmp4(tmp2[6]);
  sharedValue = tmp4Result.useSharedValue(0);
  const tmp3 = sharedValue1(sharedValue2[9])();
  sharedValue1 = sharedValue(sharedValue2[6]).useSharedValue(0);
  const tmp4Result1 = sharedValue(sharedValue2[6]);
  sharedValue2 = sharedValue(sharedValue2[6]).useSharedValue(1);
  let items = [sharedValue, sharedValue1, sharedValue2];
  const effect = noop.useEffect(() => {
    const accessibilityPreferencesSharedValue =
      reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
    if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
      tmp(4296);
      const tmpResult = tmp(4561);
      const result = sharedValue.set(tmpResult.withRepeat(tmpResult.withTiming(PX_8, { duration: 3400 }), -1, true));
      const tmpResult1 = tmp(4296);
      const result1 = sharedValue1.set(
        tmpResult1.withRepeat(tmp(4561).withTiming(-PX_12, { duration: 2600 }), -1, true),
      );
      const tmpResult2 = tmp(4561);
      const tmpResult3 = tmp(4296);
      const result2 = sharedValue2.set(tmpResult3.withRepeat(tmp(4561).withTiming(0.6, { duration: 2800 }), -1, true));
      const tmpResult4 = tmp(4561);
    }
  }, items);
  const tmp4Result2 = sharedValue(sharedValue2[6]);
  const fn = function s() {
    let obj = { transform: null };
    obj = { translateX: sharedValue.get() };
    const items = [obj];
    obj = { translateY: sharedValue1.get() };
    items[1] = obj;
    obj.transform = items;
    return obj;
  };
  fn.__closure = { floatX: sharedValue, floatY: sharedValue1 };
  fn.__workletHash = 17204816956621;
  fn.__initData = __initData;
  const animatedStyle = sharedValue(sharedValue2[6]).useAnimatedStyle(fn);
  const tmp4Result3 = sharedValue(sharedValue2[6]);
  const fn2 = function o() {
    return { opacity: sharedValue2.get() };
  };
  fn2.__closure = { cloudsOpacity: sharedValue2 };
  fn2.__workletHash = 10630022886341;
  fn2.__initData = __initData2;
  let obj = { style: tmp7.banner, children: null };
  const animatedStyle1 = sharedValue(sharedValue2[6]).useAnimatedStyle(fn2);
  const tmp4Result4 = sharedValue(sharedValue2[6]);
  let isAndroidResult = sharedValue(sharedValue2[11]).isAndroid();
  if (isAndroidResult) {
    isAndroidResult = closure_7(tmp(tmp2[12]), { barStyle: "light-content" });
  }
  const items1 = [isAndroidResult, , , , , ,];
  obj = {
    selectedTier,
    nitroColors: Gradients.PREMIUM_TIER_2,
    basicColors: Gradients.PREMIUM_TIER_0,
    start: null,
    end: null,
    style: null,
  };
  let tmpResult = tmp(tmp2[13]);
  obj.start = sharedValue(sharedValue2[14]).HorizontalGradient.START;
  obj.end = sharedValue(sharedValue2[14]).HorizontalGradient.END;
  obj.style = tmp7.background;
  items1[1] = closure_7(tmpResult, obj);
  const obj1 = { style: null, children: null };
  const items2 = [tmp7.clouds, animatedStyle1];
  obj1.style = items2;
  const obj2 = { source: null, resizeMode: "contain" };
  tmpResult = tmp(tmp2[15]);
  obj2.source = sharedValue1(sharedValue2[16]);
  obj1.children = closure_7(tmpResult, obj2);
  items1[2] = closure_7(sharedValue1(sharedValue2[6]).View, obj1);
  const obj3 = { style: null, children: null };
  const items3 = [tmp7.wumpus, animatedStyle];
  obj3.style = items3;
  const obj4 = { style: tmp7.wumpusImage, source: null, resizeMode: "contain" };
  const tmp4Result5 = sharedValue(sharedValue2[11]);
  obj4.source = sharedValue1(sharedValue2[17]);
  obj3.children = closure_7(sharedValue1(sharedValue2[15]), obj4);
  items1[3] = closure_7(sharedValue1(sharedValue2[6]).View, obj3);
  let tmp18Result = !tmp5;
  if (!tmp5) {
    const obj5 = { style: tmp7.fade, colors: null, start: null, end: null };
    const _HermesInternal = HermesInternal;
    const items4 = ["" + color + "00", color];
    obj5.colors = items4;
    obj5.start = tmp4(tmp2[14]).VerticalGradient.START;
    obj5.end = tmp4(tmp2[14]).VerticalGradient.END;
    tmp18Result = tmp18(tmp(tmp2[18]), obj5);
    let tmpResult2 = tmp(tmp2[18]);
  }
  items1[4] = tmp18Result;
  const obj6 = { style: tmp7.content, children: null };
  const obj7 = {
    accessible: true,
    accessibilityRole: "header",
    accessibilityLabel: null,
    source: null,
    resizeMode: "contain",
  };
  let tmpResult1 = sharedValue1(sharedValue2[15]);
  const intl = tmp4(tmp2[19]).intl;
  obj7.accessibilityLabel = intl.string(sharedValue(sharedValue2[19]).t.lpNrPu);
  obj7.source = sharedValue1(sharedValue2[20]);
  const items5 = [closure_7(sharedValue1(sharedValue2[15]), obj7)];
  const obj8 = { variant: "text-md/medium", color: "text-overlay-light", children: null };
  const intl2 = tmp4(tmp2[19]).intl;
  obj8.children = intl2.string(sharedValue(sharedValue2[19]).t.SD5MJW);
  items5[1] = closure_7(sharedValue(sharedValue2[21]).Text, obj8);
  obj6.children = items5;
  items1[5] = closure_8(closure_5, obj6);
  const obj9 = { style: tmp7.backButton, children: null };
  const obj10 = { variant: "secondary-overlay", accessibilityLabel: null, icon: null, size: "md", onPress: null };
  const intl3 = tmp4(tmp2[19]).intl;
  obj10.accessibilityLabel = intl3.string(sharedValue(sharedValue2[19]).t["13/7kX"]);
  obj10.icon = sharedValue1(sharedValue2[23]);
  obj10.onPress = onBackPress;
  obj9.children = closure_7(sharedValue(sharedValue2[22]).IconButton, obj10);
  items1[6] = closure_7(closure_5, obj9);
  obj.children = items1;
  return closure_8(closure_5, obj);
}
