// discord_app/modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ThemedGradientDefault from "../../client_themes/native/ThemedGradient.tsx";
import useActiveTheme from "../../client_themes/native/useActiveTheme.tsx";
import roundToNearestPixelDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  let obj = { container: null };
  obj = {};
  const merged = Object.assign(React3.absoluteFillObject);
  obj = { translateX: roundToNearestPixelDefault(-arg0) };
  const items = [obj, { translateY: roundToNearestPixelDefault(-arg1) }];
  obj.transform = items;
  obj.container = obj;
  return obj;
});
const __initData = {
  code: "function ScreenAlignedThemedGradientTsx1(){const{roundToNearestPixel,offsetX,panelTranslateX,offsetY}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-panelTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};}",
};
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx");

export default function ScreenAlignedThemedGradient(arg0) {
  ({ offsetX, offsetY } = arg0);
  let obj = useActiveTheme;
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  obj = {
    pointerEvents: "none",
    style: closure_6(offsetX, offsetY).container,
    children: jsx(ThemedGradientDefault, {
      absolute: true,
      tall: true,
      wide: true,
      mix: isClientThemeOrCustomThemeActive,
    }),
  };
  return (
    <React4 pointerEvents="none" style={closure_6(offsetX, offsetY).container}>
      {jsx(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive })}
    </React4>
  );
}
export const ScreenAlignedThemedGradientSliding = function ScreenAlignedThemedGradientSliding(offsetX) {
  offsetX = offsetX.offsetX;
  const offsetY = offsetX.offsetY;
  let panelTranslateX;
  let obj = offsetX(panelTranslateX[4]);
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  panelTranslateX = offsetX(panelTranslateX[6]).useHomeDrawerState().panelTranslateX;
  const obj2 = offsetX(panelTranslateX[6]);
  const fn = function o() {
    let obj = { transform: null };
    obj = { translateX: roundToNearestPixelDefault(-offsetX - panelTranslateX.get()) };
    const items = [obj];
    obj = { translateY: roundToNearestPixelDefault(-offsetY) };
    items[1] = obj;
    obj.transform = items;
    return obj;
  };
  obj = { roundToNearestPixel: offsetY(panelTranslateX[3]), offsetX, panelTranslateX, offsetY };
  fn.__closure = obj;
  fn.__workletHash = 14168713340122;
  fn.__initData = __initData;
  const animatedStyle = offsetX(panelTranslateX[7]).useAnimatedStyle(fn);
  obj = {
    pointerEvents: "none",
    style: null,
    children: jsx(offsetY(panelTranslateX[5]), {
      absolute: true,
      tall: true,
      wide: true,
      mix: isClientThemeOrCustomThemeActive,
    }),
  };
  let items = [absoluteFill.absoluteFill, animatedStyle];
  obj.style = items;
  return jsx(offsetY(panelTranslateX[7]).View, {
    pointerEvents: "none",
    style: null,
    children: jsx(offsetY(panelTranslateX[5]), {
      absolute: true,
      tall: true,
      wide: true,
      mix: isClientThemeOrCustomThemeActive,
    }),
  });
};
