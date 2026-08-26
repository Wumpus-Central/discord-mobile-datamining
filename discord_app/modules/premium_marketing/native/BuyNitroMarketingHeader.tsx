// discord_app/modules/premium_marketing/native/BuyNitroMarketingHeader.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { Gradients } from "../../colors/native/ColorConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ Platform, StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let PX_8 = ThemesDefault.space.PX_8;
const PX_12 = ThemesDefault.space.PX_12;
let closure_11 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  let num = 0;
  if (arg1) {
    num = 0;
    if (arg2) {
      num = tmp(712).space.PX_8;
    }
  }
  let obj = { marginHorizontal: -ThemesDefault.space.PX_16 + num, marginTop: null, marginBottom: null, overflow: null };
  PX_8 = undefined;
  if (arg1) {
    if (arg2) {
      PX_8 = tmp(712).space.PX_8;
    }
  }
  obj[1] = PX_8;
  obj[2] = ThemesDefault.space.PX_16;
  let str;
  if (arg1) {
    if (arg2) {
      str = "hidden";
    }
  }
  obj = { banner: obj, background: null, clouds: null, wumpus: str, wumpusImage: null, backButton: null, content: null, fade: null };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  if (!arg1) {
    let num2 = 5 * -tmp(712).space.PX_192;
  } else {
    num2 = 0;
  }
  obj.top = num2;
  obj.color = ThemesDefault.colors.BACKGROUND_BASE_LOWER;
  let sm;
  if (arg1) {
    if (arg2) {
      sm = tmp(712).radii.sm;
    }
  }
  obj.borderRadius = sm;
  obj[1] = obj;
  const tmp3 = -ThemesDefault.space.PX_16;
  const tmp5 = absoluteFillObject;
  obj[2] = { position: "absolute", top: -ThemesDefault.space.PX_16, right: "call", left: "options", alignSelf: 139264.21504641374 };
  obj1 = { position: "absolute", top: -ThemesDefault.space.PX_16, right: "call", left: "options", alignSelf: 139264.21504641374 };
  obj[3] = { position: "absolute", top: arg0 + ThemesDefault.space.PX_20, right: ThemesDefault.space.PX_4 };
  const obj2 = { position: "absolute", top: arg0 + ThemesDefault.space.PX_20, right: ThemesDefault.space.PX_4 };
  obj[4] = { height: ThemesDefault.space.PX_80 + ThemesDefault.space.PX_4 };
  let num4 = 0;
  if (arg1) {
    num4 = tmp(712).space.PX_8;
  }
  const obj4 = { position: "absolute", top: arg0 - num4, left: null, transform: null };
  let num5 = 0;
  if (!arg1) {
    num5 = tmp(712).space.PX_8;
  }
  obj4[2] = ThemesDefault.space.PX_8 + num5;
  const items = [{ scaleX: -1 }];
  obj4[3] = items;
  obj[5] = obj4;
  const obj5 = { alignItems: "center", gap: ThemesDefault.space.PX_8, paddingTop: null, paddingHorizontal: null, paddingBottom: null };
  const sum = arg0 + tmp(712).space.PX_80;
  obj5[2] = sum + ThemesDefault.space.PX_4;
  obj5[3] = ThemesDefault.space.PX_16;
  const space = tmp(712).space;
  obj5[4] = arg1 ? space.PX_24 : space.PX_32;
  obj[6] = obj5;
  const obj6 = {};
  const merged1 = Object.assign(tmp5.absoluteFillObject);
  obj6.height = ThemesDefault.space.PX_96;
  obj6.position = "absolute";
  obj6.top = undefined;
  obj[7] = obj6;
  return obj;
});
let closure_12 = { code: "function BuyNitroMarketingHeaderTsx1(){const{floatX,floatY}=this.__closure;return{transform:[{translateX:floatX.get()},{translateY:floatY.get()}]};}" };
let closure_13 = { code: "function BuyNitroMarketingHeaderTsx2(){const{cloudsOpacity}=this.__closure;return{opacity:cloudsOpacity.get()};}" };
let result = require("set").fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingHeader.tsx");

export default function BuyNitroMarketingHeader(arg0) {
  ({ topInset, onBackPress, selectedTier } = arg0);
  const tmp5 = sharedValue1(sharedValue2[9])() === sharedValue(sharedValue2[10]).ThemeTypes.LIGHT;
  let tmp6 = tmp5;
  if (tmp5) {
    let tmp4Result = tmp4(tmp2[11]);
    tmp6 = !tmp4Result.isAndroid();
  }
  const tmp7 = callback2(topInset, tmp5, tmp6);
  const color = tmp7.background.color;
  sharedValue = undefined;
  sharedValue1 = undefined;
  sharedValue2 = undefined;
  tmp4Result = tmp4(tmp2[6]);
  sharedValue = tmp4Result.useSharedValue(0);
  const tmp3 = sharedValue1(sharedValue2[9])();
  sharedValue1 = sharedValue(sharedValue2[6]).useSharedValue(0);
  const tmp4Result1 = sharedValue(sharedValue2[6]);
  sharedValue2 = sharedValue(sharedValue2[6]).useSharedValue(1);
  let items = [sharedValue, sharedValue1, sharedValue2];
  const effect = React.useEffect(() => {
    const accessibilityPreferencesSharedValue = sharedValue(sharedValue2[7]).accessibilityPreferencesSharedValue;
    if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
      let tmpResult = tmp(tmp2[6]);
      tmpResult = tmp(tmp2[8]);
      const result = sharedValue.set(tmpResult.withRepeat(tmpResult.withTiming(closure_1_9, { duration: 3400 }), -1, true));
      const tmpResult1 = tmp(tmp2[6]);
      const result1 = sharedValue1.set(tmpResult1.withRepeat(tmp(tmp2[8]).withTiming(-closure_1_10, { duration: 2600 }), -1, true));
      const tmpResult2 = tmp(tmp2[8]);
      const tmpResult3 = tmp(tmp2[6]);
      const result2 = sharedValue2.set(tmpResult3.withRepeat(tmp(tmp2[8]).withTiming(0.6, { duration: 2800 }), -1, true));
      const tmpResult4 = tmp(tmp2[8]);
    }
  }, items);
  const tmp4Result2 = sharedValue(sharedValue2[6]);
  const fn = function s() {
    let obj = { transform: null };
    obj = { translateX: sharedValue.get() };
    const items = [obj, ];
    obj = { translateY: sharedValue1.get() };
    items[1] = obj;
    obj[0] = items;
    return obj;
  };
  fn.__closure = { floatX: sharedValue, floatY: sharedValue1 };
  fn.__workletHash = 17204816956621;
  fn.__initData = closure_12;
  const animatedStyle = sharedValue(sharedValue2[6]).useAnimatedStyle(fn);
  const tmp4Result3 = sharedValue(sharedValue2[6]);
  const fn2 = function o() {
    return { opacity: sharedValue2.get() };
  };
  fn2.__closure = { cloudsOpacity: sharedValue2 };
  fn2.__workletHash = 10630022886341;
  fn2.__initData = closure_13;
  let obj = { style: tmp7.banner, children: null };
  const animatedStyle1 = sharedValue(sharedValue2[6]).useAnimatedStyle(fn2);
  const tmp4Result4 = sharedValue(sharedValue2[6]);
  let isAndroidResult = sharedValue(sharedValue2[11]).isAndroid();
  if (isAndroidResult) {
    isAndroidResult = callback(tmp(tmp2[12]), { barStyle: "light-content" });
  }
  const items1 = [isAndroidResult, , , , , , ];
  obj = { selectedTier, nitroColors: Gradients.PREMIUM_TIER_2, basicColors: Gradients.PREMIUM_TIER_0, start: null, end: null, style: null };
  let tmpResult = tmp(tmp2[13]);
  obj[3] = sharedValue(sharedValue2[14]).HorizontalGradient.START;
  obj[4] = sharedValue(sharedValue2[14]).HorizontalGradient.END;
  obj[5] = tmp7.background;
  items1[1] = callback(tmpResult, obj);
  obj1 = { style: items2, children: null };
  items2 = [tmp7.clouds, animatedStyle1];
  const obj2 = { source: null, resizeMode: "contain" };
  tmpResult = tmp(tmp2[15]);
  obj2[0] = sharedValue1(sharedValue2[16]);
  obj1[1] = callback(tmpResult, obj2);
  items1[2] = callback(sharedValue1(sharedValue2[6]).View, obj1);
  const obj3 = { style: items3, children: null };
  items3 = [tmp7.wumpus, animatedStyle];
  const obj4 = { style: tmp7.wumpusImage, source: null, resizeMode: "contain" };
  const tmp4Result5 = sharedValue(sharedValue2[11]);
  obj4[1] = sharedValue1(sharedValue2[17]);
  obj3[1] = callback(sharedValue1(sharedValue2[15]), obj4);
  items1[3] = callback(sharedValue1(sharedValue2[6]).View, obj3);
  let tmp18Result = !tmp5;
  if (!tmp5) {
    const obj5 = { style: null, colors: null, start: null, end: null };
    obj5[0] = tmp7.fade;
    const _HermesInternal = HermesInternal;
    const items4 = ["" + color + "00", color];
    obj5[1] = items4;
    obj5[2] = tmp4(tmp2[14]).VerticalGradient.START;
    obj5[3] = tmp4(tmp2[14]).VerticalGradient.END;
    tmp18Result = tmp18(tmp(tmp2[18]), obj5);
    let tmpResult2 = tmp(tmp2[18]);
  }
  items1[4] = tmp18Result;
  const obj6 = { style: tmp7.content, children: null };
  const obj7 = { accessible: true, accessibilityRole: "header", accessibilityLabel: null, source: null, resizeMode: "contain" };
  let tmpResult1 = sharedValue1(sharedValue2[15]);
  const intl = tmp4(tmp2[19]).intl;
  obj7[2] = intl.string(sharedValue(sharedValue2[19]).t.lpNrPu);
  obj7[3] = sharedValue1(sharedValue2[20]);
  const items5 = [callback(sharedValue1(sharedValue2[15]), obj7), ];
  const obj8 = { variant: "text-md/medium", color: "text-overlay-light", children: null };
  const intl2 = tmp4(tmp2[19]).intl;
  obj8[2] = intl2.string(sharedValue(sharedValue2[19]).t.SD5MJW);
  items5[1] = callback(sharedValue(sharedValue2[21]).Text, obj8);
  obj6[1] = items5;
  items1[5] = closure_8(closure_5, obj6);
  const obj9 = { style: tmp7.backButton, children: null };
  const obj10 = { variant: "secondary-overlay", accessibilityLabel: null, icon: null, size: "md", onPress: null };
  const intl3 = tmp4(tmp2[19]).intl;
  obj10[1] = intl3.string(sharedValue(sharedValue2[19]).t["13/7kX"]);
  obj10[2] = sharedValue1(sharedValue2[23]);
  obj10[4] = onBackPress;
  obj9[1] = callback(sharedValue(sharedValue2[22]).IconButton, obj10);
  items1[6] = callback(closure_5, obj9);
  obj[1] = items1;
  return closure_8(closure_5, obj);
};