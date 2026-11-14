// discord_app/modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import _mod1655 from "../../../../_runtime/metro/01655__.js";
import useActiveTheme from "../../client_themes/native/useActiveTheme.tsx";
import ThemedGradientDefault from "../../client_themes/native/ThemedGradient.tsx";
import roundToNearestPixelDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import useHomeDrawerGesture from "../../home_drawer/native/useHomeDrawerGesture.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const _modDef1655 = _mod1655;

({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  const obj = { container: null };
  const obj2 = {};
  const merged = Object.assign(React3.absoluteFillObject);
  items = [{ translateX: roundToNearestPixelDefault(-arg0) }];
  const obj3 = { translateX: roundToNearestPixelDefault(-arg0) };
  items[1] = { translateY: roundToNearestPixelDefault(-arg1) };
  obj2.transform = items;
  obj.container = obj2;
  return obj;
});
let closure_7 = {
  code: "(function ScreenAlignedThemedGradientTsx1(){let[roundToNearestPixel,offsetX,panelTranslateX,offsetY]=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-panelTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};})",
};
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx");

export default function ScreenAlignedThemedGradient(arg0) {
  ({ offsetX, offsetY } = arg0);
  const isClientThemeOrCustomThemeActive = useActiveTheme.useIsClientThemeOrCustomThemeActive();
  return (
    <React4 pointerEvents="none" style={closure_6(offsetX, offsetY).container}>
      {jsx(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive })}
    </React4>
  );
}
export function ScreenAlignedThemedGradientSliding(arg0) {
  ({ offsetX, offsetY } = arg0);
  const isClientThemeOrCustomThemeActive = useActiveTheme.useIsClientThemeOrCustomThemeActive();
  let obj2 = useHomeDrawerGesture;
  items = [closure_7, roundToNearestPixelDefault, offsetX, obj2.useHomeDrawerState().panelTranslateX, offsetY];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class ScreenAlignedThemedGradientTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: null };
      tmp = -closure_1;
      obj1.translateX = closure_0(tmp - closure_2.get());
      items = [,];
      items[0] = obj1;
      obj4 = { translateY: closure_0(-closure_3) };
      items[1] = obj4;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8];
  ScreenAlignedThemedGradientTsx1.__closure = items1;
  ScreenAlignedThemedGradientTsx1.__workletHash = 8637379102627;
  ScreenAlignedThemedGradientTsx1.__initData = tmp4;
  const animatedStyle = _mod1655.useAnimatedStyle(ScreenAlignedThemedGradientTsx1);
  const obj4 = { pointerEvents: "none", style: null, children: null };
  const items2 = [React3.absoluteFill, animatedStyle];
  obj4.style = items2;
  obj4.children = jsx(ThemedGradientDefault, {
    absolute: true,
    tall: true,
    wide: true,
    mix: isClientThemeOrCustomThemeActive,
    componentStyles: { height: useWindowDimensionsDefault({ ignoreKeyboard: true }).height },
  });
  return jsx(_modDef1655.View, { pointerEvents: "none", style: null, children: null });
}
