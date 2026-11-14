// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceGradientBackground.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import timing_timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import SettingsAppearancePickerUtils from "../SettingsAppearancePickerUtils.tsx";
import getGradientStartPontDefault from "../hooks/getGradientStartPont.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SettingsAppearanceConstants from "../SettingsAppearanceConstants.tsx";
import module_1655_mod from "../../../../../../_runtime/metro/01655__.js";

const require = globalThis.__r;

require = fn;
let StyleSheet = fn(17).StyleSheet;
let jsx = fn(21).jsx;
let module_1655 = fn(1655);
let num = module_1655.processColor("rgba(0, 0, 0, 0)");
if (num == null) {
  num = 0;
}
let module_1655 = module_1655_mod;
let closure_7 = module_1655.createAnimatedComponent(fn(5893).LinearGradientNativeComponent);
let obj = { colors: null, locations: [], startPoint: { x: 0, y: 0 }, endPoint: { x: 0, y: 0 } };
let items = [num, num];
obj.colors = items;
let closure_9 = {
  code: "(function SettingsAppearanceGradientBackgroundTsx1(){let[gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor]=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(_,i){return interpolate(tweener.get(),[0,1],[colorsPrev[i].stop/100,colorsCurrent[i].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};})",
};
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceGradientBackground.tsx",
);

export default noop.memo(function SettingsAppearanceGradientBackground(isDimmed) {
  isDimmed = isDimmed.isDimmed;
  _require = isDimmed;
  const themes = isDimmed.themes;
  importDefault = themes;
  const themeIndex = isDimmed.themeIndex;
  dependencyMap = themeIndex;
  let BACKGROUND_SURFACE_HIGH = isDimmed.backgroundToken;
  if (BACKGROUND_SURFACE_HIGH === undefined) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  noop = BACKGROUND_SURFACE_HIGH;
  c5 = undefined;
  const memo = noop.useMemo(() => ["mobile-visual-refresh"], []);
  StyleSheet = memo;
  items = [themes, themeIndex, isDimmed, memo, BACKGROUND_SURFACE_HIGH];
  const memo1 = noop.useMemo(() => {
    let prop;
    if (c0) {
      prop = SettingsAppearanceConstants.BACKGROUND_GRADIENT_DARK_OPACITY;
    }
    let prop1;
    if (c0) {
      prop1 = SettingsAppearanceConstants.BACKGROUND_GRADIENT_LIGHT_OPACITY;
    }
    return SettingsAppearancePickerUtils.convertThemesToAnimatedThemes(c1, prop, prop1, c4, c3)[c2];
  }, items);
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  const launchWelcomeSystemTheme = require("SettingsAppearancePickerUtils").useLaunchWelcomeSystemTheme();
  let tmp8 = memo1;
  if ("system" === memo1.theme) {
    tmp8 = launchWelcomeSystemTheme;
  }
  closure_129_0 = tmp8;
  const obj2 = require("SettingsAppearancePickerUtils");
  const sharedValue = require("../../../../../../_runtime/metro/01655__.js").useSharedValue({
    themePrev: tmp8,
    themeCurrent: tmp8,
  });
  closure_129_1 = sharedValue;
  const tmp5Result = require("../../../../../../_runtime/metro/01655__.js");
  const sharedValue1 = require("../../../../../../_runtime/metro/01655__.js").useSharedValue(0);
  closure_129_2 = sharedValue1;
  const items1 = [tmp8, sharedValue, sharedValue1, launchWelcomeSystemTheme];
  const effect = obj.useEffect(() => {
    const result = _undefined.set({ themePrev: _undefined.get().themeCurrent, themeCurrent });
    const result1 = _undefined2.set(0);
    obj = { themePrev: _undefined.get().themeCurrent, themeCurrent };
    const result2 = _undefined2.set(timing_timing.withTiming(1, timingPresets.timingStandard));
  }, items1);
  const tmp5Result4 = require("../../../../../../_runtime/metro/01655__.js");
  const sharedValue2 = require("../../../../../../_runtime/metro/01655__.js").useSharedValue({ width: 0, height: 0 });
  const items2 = [sharedValue2];
  const callback = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
    const result = _undefined5.set(size);
  }, items2);
  const tmp5Result5 = require("../../../../../../_runtime/metro/01655__.js");
  const items3 = [
    closure_9,
    sharedValue2,
    noop,
    sharedValue,
    require("../../../../../../_runtime/metro/01655__.js").interpolate,
    sharedValue1,
    getGradientStartPontDefault,
    require("../../../../../../_runtime/metro/01655__.js").processColor,
    require("../../../../../../_runtime/metro/01655__.js").interpolateColor,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c5 = undefined;
  jsx = undefined;
  c7 = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items3;
  class SettingsAppearanceGradientBackgroundTsx1 {
    constructor() {
      value = colors.get();
      ({ width, height } = value);
      if (0 !== width) {
        if (0 !== height) {
          tmp2 = closure_2;
          value1 = closure_2.get();
          themePrev = value1.themePrev;
          colors = themePrev.colors;
          themeCurrent = value1.themeCurrent;
          colors = themeCurrent.colors;
          tmp4 = closure_3;
          tmp5 = closure_4;
          items = [,];
          items[0] = themePrev.angle;
          items[1] = themeCurrent.angle;
          num = 90;
          tmp6 = closure_5;
          tmp7 = closure_5(90 - closure_3(closure_4.get(), [0, 1], items), width, height);
          obj = { colors: null, locations: null, startPoint: null, endPoint: null };
          obj.colors = colors.map((item, index) => {
            items = [colors[index].hex, colors[index].hex];
            let num = c6(c7(c4.get(), [0, 1], items));
            if (num == null) {
              num = 0;
            }
            return num;
          });
          obj.locations = colors.map((item, index) => {
            items = [colors[index].stop / 100, colors[index].stop / 100];
            return c3(c4.get(), [0, 1], items);
          });
          point = { x: null, y: null };
          num2 = 2;
          point.x = (width / 2 + tmp7[0]) / width;
          point.y = (height / 2 - tmp7[1]) / height;
          obj.startPoint = point;
          point1 = { x: null, y: null };
          point1.x = (width / 2 - tmp7[0]) / width;
          point1.y = (height / 2 + tmp7[1]) / height;
          obj.endPoint = point1;
          return obj;
        }
      }
      return colors;
    }
  }
  const items4 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
  SettingsAppearanceGradientBackgroundTsx1.__closure = items4;
  SettingsAppearanceGradientBackgroundTsx1.__workletHash = 1728256022641;
  SettingsAppearanceGradientBackgroundTsx1.__initData = tmp15;
  const obj3 = { style: StyleSheet.absoluteFill, onLayout: callback };
  const animatedProps = require("../../../../../../_runtime/metro/01655__.js").useAnimatedProps(
    SettingsAppearanceGradientBackgroundTsx1,
  );
  const merged = Object.assign(noop);
  obj3.animatedProps = animatedProps;
  return <c7 style={StyleSheet.absoluteFill} onLayout={callback} />;
});
