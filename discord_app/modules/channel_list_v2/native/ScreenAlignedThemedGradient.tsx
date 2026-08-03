import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = { code: "function ScreenAlignedThemedGradientTsx1(){const{roundToNearestPixel,offsetX,parentSpringTranslateX,offsetY}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-parentSpringTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};}" };
const styles = StyleSheet.create({ container: StyleSheet.absoluteFillObject });
const result = require("jsxProd").fileFinishedImporting("modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx");

export default function ScreenAlignedThemedGradient(offsetX) {
  offsetX = offsetX.offsetX;
  const offsetY = offsetX.offsetY;
  const parentSpringTranslateX = offsetX.parentSpringTranslateX;
  let obj = offsetX(parentSpringTranslateX[3]);
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  const fn = function c() {
    let obj = { transform: null };
    obj = { translateX: null };
    obj[0] = offsetY(parentSpringTranslateX[5])(-offsetX - parentSpringTranslateX.get());
    const items = [obj, ];
    obj = { translateY: offsetY(parentSpringTranslateX[5])(-offsetY) };
    items[1] = obj;
    obj[0] = items;
    return obj;
  };
  obj = { roundToNearestPixel: offsetY(parentSpringTranslateX[5]), offsetX, parentSpringTranslateX, offsetY };
  fn.__closure = obj;
  fn.__workletHash = 13846065523130;
  fn.__initData = closure_4;
  const animatedStyle = offsetX(parentSpringTranslateX[4]).useAnimatedStyle(fn);
  obj = { pointerEvents: "none", style: items, children: null };
  items = [container.container, animatedStyle];
  obj[2] = jsx(offsetY(parentSpringTranslateX[6]), { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive });
  return jsx(offsetY(parentSpringTranslateX[4]).View, { pointerEvents: "none", style: items, children: null });
};