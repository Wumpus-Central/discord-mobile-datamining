// === Module 15795: ScreenAlignedThemedGradient ===

// Module 15795 (ScreenAlignedThemedGradient)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getMixedGradientColorDefault from "getMixedGradientColor" /* 5038 */;
import useActiveThemeType from "useActiveThemeType" /* 7586 */;
import tDefault from "t" /* 10692 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import createCacheKey from "createCacheKey" /* 4448 */;

({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let closure_6 = createCacheKey.createStyles((arg0, arg1) => {
  let obj = { container: null };
  obj = {};
  const merged = Object.assign(closure_3.absoluteFillObject);
  obj = { translateX: tDefault(-arg0) };
  const items = [obj, { translateY: tDefault(-arg1) }];
  obj.transform = items;
  obj[0] = obj;
  return obj;
});
let closure_7 = { code: "function ScreenAlignedThemedGradientTsx1(){const{roundToNearestPixel,offsetX,panelSpringTranslateX,offsetY}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-panelSpringTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};}" };
const result = set.fileFinishedImporting("modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx");

export default function ScreenAlignedThemedGradient(arg0) {
  ({ offsetX, offsetY } = arg0);
  let obj = useActiveThemeType;
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  obj = { pointerEvents: "none", style: callback(offsetX, offsetY).container, children: jsx(getMixedGradientColorDefault, { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive }) };
  return <closure_4 pointerEvents="none" style={callback(offsetX, offsetY).container}>{jsx(getMixedGradientColorDefault, { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive })}</closure_4>;
};
export const ScreenAlignedThemedGradientSliding = function ScreenAlignedThemedGradientSliding(offsetX) {
  offsetX = offsetX.offsetX;
  const offsetY = offsetX.offsetY;
  let panelSpringTranslateX;
  let obj = offsetX(panelSpringTranslateX[4]);
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  panelSpringTranslateX = offsetX(panelSpringTranslateX[6]).useHomeDrawerState().panelSpringTranslateX;
  const obj2 = offsetX(panelSpringTranslateX[6]);
  const fn = function o() {
    let obj = { transform: null };
    obj = { translateX: offsetY(panelSpringTranslateX[3])(-offsetX - panelSpringTranslateX.get()) };
    const items = [obj, ];
    obj = { translateY: offsetY(panelSpringTranslateX[3])(-offsetY) };
    items[1] = obj;
    obj[0] = items;
    return obj;
  };
  obj = { roundToNearestPixel: offsetY(panelSpringTranslateX[3]), offsetX, panelSpringTranslateX, offsetY };
  fn.__closure = obj;
  fn.__workletHash = 9541788107322;
  fn.__initData = closure_7;
  const animatedStyle = offsetX(panelSpringTranslateX[7]).useAnimatedStyle(fn);
  obj = { pointerEvents: "none", style: items, children: jsx(offsetY(panelSpringTranslateX[5]), { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive }) };
  items = [closure_3.absoluteFill, animatedStyle];
  return jsx(offsetY(panelSpringTranslateX[7]).View, { pointerEvents: "none", style: items, children: jsx(offsetY(panelSpringTranslateX[5]), { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive }) });
};