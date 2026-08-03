import importAllResult from "noop";
import { StyleSheet } from "get ActivityIndicator";
import THEME_ITEM_WIDTH from "THEME_ITEM_WIDTH";
import { jsx } from "jsxProd";
import module_4054 from "module_4054";
import importDefaultResult from "module_4054";

const require = arg1;
let c3 = importAllResult;
let num = module_4054.processColor("rgba(0, 0, 0, 0)");
if (num == null) {
  num = 0;
}
let closure_7 = require("module_4054").createAnimatedComponent(require("LinearGradient").LinearGradientNativeComponent);
let items = [num, num];
let closure_8 = { colors: items, locations: [], startPoint: { x: 0, y: 0 }, endPoint: { x: 0, y: 0 } };
let closure_9 = { code: "function SettingsAppearanceGradientBackgroundTsx1(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(_,i){return interpolate(tweener.get(),[0,1],[colorsPrev[i].stop/100,colorsCurrent[i].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}" };
const memoResult = importAllResult.memo(function SettingsAppearanceGradientBackground(isDimmed) {
  isDimmed = isDimmed.isDimmed;
  let _require = isDimmed;
  const themes = isDimmed.themes;
  let sharedValue = themes;
  const themeIndex = isDimmed.themeIndex;
  let sharedValue1 = themeIndex;
  let BACKGROUND_SURFACE_HIGH = isDimmed.backgroundToken;
  if (BACKGROUND_SURFACE_HIGH === undefined) {
    BACKGROUND_SURFACE_HIGH = sharedValue(sharedValue1[9]).colors.BACKGROUND_SURFACE_HIGH;
  }
  let StyleSheet;
  let memo;
  sharedValue = undefined;
  sharedValue1 = undefined;
  let sharedValue2;
  const tmp5 = sharedValue(sharedValue1[10])("SettingsAppearanceGradientBackground");
  StyleSheet = tmp5;
  let obj = BACKGROUND_SURFACE_HIGH;
  let items = [tmp5];
  memo = BACKGROUND_SURFACE_HIGH.useMemo(() => c4 ? ["mobile-visual-refresh"] : [], items);
  const items1 = [themes, themeIndex, isDimmed, memo, BACKGROUND_SURFACE_HIGH];
  const memo1 = BACKGROUND_SURFACE_HIGH.useMemo(() => {
    let prop;
    if (_undefined) {
      prop = memo.BACKGROUND_GRADIENT_DARK_OPACITY;
    }
    let prop1;
    if (_undefined) {
      prop1 = memo.BACKGROUND_GRADIENT_LIGHT_OPACITY;
    }
    return _undefined(sharedValue1[6]).convertThemesToAnimatedThemes(sharedValue, prop, prop1, memo, BACKGROUND_SURFACE_HIGH)[sharedValue1];
  }, items1);
  _require = undefined;
  sharedValue = undefined;
  sharedValue1 = undefined;
  const launchWelcomeSystemTheme = _require(sharedValue1[6]).useLaunchWelcomeSystemTheme();
  let tmp10 = memo1;
  if ("system" === memo1.theme) {
    tmp10 = launchWelcomeSystemTheme;
  }
  _require = tmp10;
  let tmp8Result = tmp8(tmp4[4]);
  sharedValue = tmp8Result.useSharedValue({ themePrev: tmp10, themeCurrent: tmp10 });
  tmp8Result = tmp8(tmp4[4]);
  sharedValue1 = tmp8Result.useSharedValue(0);
  const items2 = [tmp10, sharedValue, sharedValue1, launchWelcomeSystemTheme];
  const effect = obj.useEffect(() => {
    const result = sharedValue.set({ themePrev: sharedValue.get().themeCurrent, themeCurrent: _undefined });
    const result1 = sharedValue1.set(0);
    const obj = { themePrev: sharedValue.get().themeCurrent, themeCurrent: _undefined };
    const result2 = sharedValue1.set(_undefined(sharedValue1[7]).withTiming(1, _undefined(sharedValue1[8]).timingStandard));
  }, items2);
  const obj2 = _require(sharedValue1[6]);
  const tmp3 = sharedValue;
  sharedValue2 = _require(sharedValue1[4]).useSharedValue({ width: 0, height: 0 });
  const items3 = [sharedValue2];
  const callback = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const result = sharedValue2.set({ width: nativeEvent.layout.width, height: nativeEvent.layout.height });
  }, items3);
  const tmp8Result1 = _require(sharedValue1[4]);
  class P {
    constructor() {
      value = useMemo.get();
      ({ width, height } = value);
      if (0 !== width) {
        if (0 !== height) {
          tmp2 = themes;
          value1 = themes.get();
          themePrev = value1.themePrev;
          colors = themePrev.colors;
          themeCurrent = value1.themeCurrent;
          colors = themeCurrent.colors;
          tmp4 = c0;
          tmp5 = themeIndex;
          obj = c0(themeIndex[4]);
          tmp6 = themeIndex;
          items = [, ];
          items[0] = themePrev.angle;
          items[1] = themeCurrent.angle;
          num = 90;
          tmp8 = themes;
          diff = 90 - obj.interpolate(themeIndex.get(), [0, 1], items);
          tmp9 = themes(themeIndex[11])(diff, width, height);
          obj = { colors: null, locations: null, startPoint: null, endPoint: null };
          obj[0] = colors.map((arg0, arg1) => {
            const obj = colors(sharedValue1[4]);
            const items = [colors[arg1].hex, colors[arg1].hex];
            let num = obj.processColor(colors(sharedValue1[4]).interpolateColor(outer1_7.get(), [0, 1], items));
            if (num == null) {
              num = 0;
            }
            return num;
          });
          obj[1] = colors.map((arg0, arg1) => {
            const items = [colors[arg1].stop / 100, colors[arg1].stop / 100];
            return colors(sharedValue1[4]).interpolate(outer1_7.get(), [0, 1], items);
          });
          obj1 = { x: null, y: null };
          num2 = 2;
          obj1[0] = (width / 2 + tmp9[0]) / width;
          obj1[1] = (height / 2 - tmp9[1]) / height;
          obj[2] = obj1;
          obj2 = { x: null, y: null };
          obj2[0] = (width / 2 - tmp9[0]) / width;
          obj2[1] = (height / 2 + tmp9[1]) / height;
          obj[3] = obj2;
          return obj;
        }
      }
      return useMemo;
    }
  }
  obj = { gradientSize: sharedValue2, animatedLinearGradientLoadingProps: sharedValue2, themeState: sharedValue, interpolate: tmp8(tmp4[4]).interpolate, tweener: sharedValue1, getGradientStartPoint: tmp3(tmp4[11]), processColor: tmp8(tmp4[4]).processColor, interpolateColor: tmp8(tmp4[4]).interpolateColor };
  P.__closure = obj;
  P.__workletHash = 5151435414824;
  P.__initData = closure_9;
  obj = { style: StyleSheet.absoluteFill, onLayout: callback };
  const animatedProps = _require(sharedValue1[4]).useAnimatedProps(P);
  const merged = Object.assign(sharedValue2);
  obj.animatedProps = animatedProps;
  return sharedValue(sharedValue1, obj);
});
let result = require("THEME_ITEM_WIDTH").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceGradientBackground.tsx");

export default memoResult;