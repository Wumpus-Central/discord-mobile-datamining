// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceGradientBackground.tsx
import ReanimatedRexport2 from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import SettingsAppearancePickerUtils from "../SettingsAppearancePickerUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SettingsAppearanceConstants from "../SettingsAppearanceConstants.tsx";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let ReanimatedRexport = fn(4296);
let num = ReanimatedRexport.processColor("rgba(0, 0, 0, 0)");
if (num == null) {
  num = 0;
}
let closure_7 = ReanimatedRexport.createAnimatedComponent(fn(4987).LinearGradientNativeComponent);
let obj = { colors: null, locations: [], startPoint: { x: 0, y: 0 }, endPoint: { x: 0, y: 0 } };
let items = [num, num];
obj.colors = items;
const __initData = {
  code: "function SettingsAppearanceGradientBackgroundTsx1(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(_,i){return interpolate(tweener.get(),[0,1],[colorsPrev[i].stop/100,colorsCurrent[i].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}",
};
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceGradientBackground.tsx",
);

export default noop.memo(function SettingsAppearanceGradientBackground(isDimmed) {
  isDimmed = isDimmed.isDimmed;
  const themes = isDimmed.themes;
  const themeIndex = isDimmed.themeIndex;
  let BACKGROUND_SURFACE_HIGH = isDimmed.backgroundToken;
  if (BACKGROUND_SURFACE_HIGH === undefined) {
    BACKGROUND_SURFACE_HIGH = themes(themeIndex[9]).colors.BACKGROUND_SURFACE_HIGH;
  }
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let __closure = BACKGROUND_SURFACE_HIGH;
  const memo = BACKGROUND_SURFACE_HIGH.useMemo(() => ["mobile-visual-refresh"], []);
  let items = [themes, themeIndex, isDimmed, memo, BACKGROUND_SURFACE_HIGH];
  const memo1 = BACKGROUND_SURFACE_HIGH.useMemo(() => {
    let prop;
    if (isDimmed) {
      prop = SettingsAppearanceConstants.BACKGROUND_GRADIENT_DARK_OPACITY;
    }
    let prop1;
    if (isDimmed) {
      prop1 = SettingsAppearanceConstants.BACKGROUND_GRADIENT_LIGHT_OPACITY;
    }
    return SettingsAppearancePickerUtils.convertThemesToAnimatedThemes(
      themes,
      prop,
      prop1,
      memo,
      BACKGROUND_SURFACE_HIGH,
    )[themeIndex];
  }, items);
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  const launchWelcomeSystemTheme = isDimmed(themeIndex[6]).useLaunchWelcomeSystemTheme();
  let tmp8 = memo1;
  if ("system" === memo1.theme) {
    tmp8 = launchWelcomeSystemTheme;
  }
  closure_129_0 = tmp8;
  let tmp5Result = tmp5(tmp6[4]);
  sharedValue = tmp5Result.useSharedValue({ themePrev: tmp8, themeCurrent: tmp8 });
  closure_129_1 = sharedValue;
  tmp5Result = tmp5(tmp6[4]);
  sharedValue1 = tmp5Result.useSharedValue(0);
  closure_129_2 = sharedValue1;
  const items1 = [tmp8, sharedValue, sharedValue1, launchWelcomeSystemTheme];
  const effect = __closure.useEffect(() => {
    const result = themes.set({ themePrev: themes.get().themeCurrent, themeCurrent: isDimmed });
    const result1 = themeIndex.set(0);
    obj = { themePrev: themes.get().themeCurrent, themeCurrent: isDimmed };
    const result2 = themeIndex.set(timing.withTiming(1, timingPresets.timingStandard));
  }, items1);
  const obj2 = isDimmed(themeIndex[6]);
  sharedValue2 = isDimmed(themeIndex[4]).useSharedValue({ width: 0, height: 0 });
  const items2 = [sharedValue2];
  const callback = __closure.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
    const result = sharedValue2.set(size);
  }, items2);
  const tmp5Result1 = isDimmed(themeIndex[4]);
  class P {
    constructor() {
      value = closure_7.get();
      ({ width, height } = value);
      if (0 !== width) {
        if (0 !== height) {
          tmp2 = closure_5;
          value1 = closure_5.get();
          themePrev = value1.themePrev;
          colors = themePrev.colors;
          themeCurrent = value1.themeCurrent;
          colors = themeCurrent.colors;
          tmp4 = isDimmed;
          tmp5 = themeIndex;
          obj = isDimmed(themeIndex[4]);
          tmp6 = closure_6;
          items = [,];
          items[0] = themePrev.angle;
          items[1] = themeCurrent.angle;
          num = 90;
          tmp8 = themes;
          diff = 90 - obj.interpolate(closure_6.get(), [0, 1], items);
          tmp9 = themes(themeIndex[10])(diff, width, height);
          obj = { colors: null, locations: null, startPoint: null, endPoint: null };
          obj.colors = colors.map((item, index) => {
            obj = ReanimatedRexport2;
            const items = [colors[index].hex, colors[index].hex];
            let num = obj.processColor(ReanimatedRexport2.interpolateColor(sharedValue1.get(), [0, 1], items));
            if (num == null) {
              num = 0;
            }
            return num;
          });
          obj.locations = colors.map((item, index) => {
            const items = [colors[index].stop / 100, colors[index].stop / 100];
            return ReanimatedRexport2.interpolate(sharedValue1.get(), [0, 1], items);
          });
          point = { x: null, y: null };
          num2 = 2;
          point.x = (width / 2 + tmp9[0]) / width;
          point.y = (height / 2 - tmp9[1]) / height;
          obj.startPoint = point;
          point1 = { x: null, y: null };
          point1.x = (width / 2 - tmp9[0]) / width;
          point1.y = (height / 2 + tmp9[1]) / height;
          obj.endPoint = point1;
          return obj;
        }
      }
      return closure_1_8;
    }
  }
  __closure = {
    gradientSize: sharedValue2,
    animatedLinearGradientLoadingProps: __closure,
    themeState: sharedValue,
    interpolate: tmp5(tmp6[4]).interpolate,
    tweener: sharedValue1,
    getGradientStartPoint: themes(tmp6[10]),
    processColor: tmp5(tmp6[4]).processColor,
    interpolateColor: tmp5(tmp6[4]).interpolateColor,
  };
  P.__closure = __closure;
  P.__workletHash = 5151435414824;
  P.__initData = __initData;
  __closure = { style: memo.absoluteFill, onLayout: callback };
  const animatedProps = isDimmed(themeIndex[4]).useAnimatedProps(P);
  const merged = Object.assign(__closure);
  __closure.animatedProps = animatedProps;
  return sharedValue1(sharedValue2, __closure);
});
