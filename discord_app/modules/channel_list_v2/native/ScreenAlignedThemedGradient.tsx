// discord_app/modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx
import set from "../../../../_runtime/00002_set.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import getMixedGradientColorDefault from "../../client_themes/native/ThemedGradient.tsx";
import useActiveThemeType from "../../client_themes/native/useActiveTheme.tsx";
import tDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
let closure_7 = {
  code: "function ScreenAlignedThemedGradientTsx1(){const{roundToNearestPixel,offsetX,panelTranslateX,offsetY}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-panelTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};}",
};
const result = set.fileFinishedImporting("modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx");

export default function ScreenAlignedThemedGradient(arg0) {
  ({ offsetX, offsetY } = arg0);
  let obj = useActiveThemeType;
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  obj = {
    pointerEvents: "none",
    style: callback(offsetX, offsetY).container,
    children: jsx(getMixedGradientColorDefault, {
      absolute: true,
      tall: true,
      wide: true,
      mix: isClientThemeOrCustomThemeActive,
    }),
  };
  return (
    <closure_4 pointerEvents="none" style={callback(offsetX, offsetY).container}>
      {jsx(getMixedGradientColorDefault, {
        absolute: true,
        tall: true,
        wide: true,
        mix: isClientThemeOrCustomThemeActive,
      })}
    </closure_4>
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
    obj = { translateX: offsetY(panelTranslateX[3])(-offsetX - panelTranslateX.get()) };
    const items = [obj];
    obj = { translateY: offsetY(panelTranslateX[3])(-offsetY) };
    items[1] = obj;
    obj[0] = items;
    return obj;
  };
  obj = { roundToNearestPixel: offsetY(panelTranslateX[3]), offsetX, panelTranslateX, offsetY };
  fn.__closure = obj;
  fn.__workletHash = 14168713340122;
  fn.__initData = closure_7;
  const animatedStyle = offsetX(panelTranslateX[7]).useAnimatedStyle(fn);
  obj = {
    pointerEvents: "none",
    style: items,
    children: jsx(offsetY(panelTranslateX[5]), {
      absolute: true,
      tall: true,
      wide: true,
      mix: isClientThemeOrCustomThemeActive,
    }),
  };
  items = [closure_3.absoluteFill, animatedStyle];
  return jsx(offsetY(panelTranslateX[7]).View, {
    pointerEvents: "none",
    style: items,
    children: jsx(offsetY(panelTranslateX[5]), {
      absolute: true,
      tall: true,
      wide: true,
      mix: isClientThemeOrCustomThemeActive,
    }),
  });
};
