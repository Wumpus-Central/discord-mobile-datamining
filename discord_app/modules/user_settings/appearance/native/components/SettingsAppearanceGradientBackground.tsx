// === Module 15118: SettingsAppearanceGradientBackground ===

// Module 15118 (SettingsAppearanceGradientBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import LinearGradient from "LinearGradient" /* 5605 */;
import SettingsAppearancePickerUtils from "SettingsAppearancePickerUtils" /* 15119 */;
import react from "react" /* 19 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 15092 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4612 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let set;

let items;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let ReanimatedRexport = ReanimatedRexport_mod;
let num = ReanimatedRexport.processColor("rgba(0, 0, 0, 0)");
if (num == null) {
  num = 0;
}
ReanimatedRexport = ReanimatedRexport_mod;
let closure_7 = ReanimatedRexport.createAnimatedComponent(LinearGradient.LinearGradientNativeComponent);
let animatedLinearGradientLoadingProps = { colors: items, locations: [], startPoint: { x: 0, y: 0 }, endPoint: { x: 0, y: 0 } };
items = [num, num];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((theme) => {
  let launchWelcomeSystemTheme;
  let sharedValue1;
  let tmp = theme;
  let obj = launchWelcomeSystemTheme(sharedValue1[7]);
  const cResult = obj.c(12);
  let obj2 = launchWelcomeSystemTheme(sharedValue1[8]);
  launchWelcomeSystemTheme = obj2.useLaunchWelcomeSystemTheme();
  if ("system" === theme.theme) {
    tmp = launchWelcomeSystemTheme;
  }
  launchWelcomeSystemTheme = tmp;
  const tmp2Result = launchWelcomeSystemTheme(sharedValue1[4]);
  const sharedValue = tmp2Result.useSharedValue({ themePrev: tmp, themeCurrent: tmp });
  const tmp2Result2 = launchWelcomeSystemTheme(sharedValue1[4]);
  sharedValue1 = tmp2Result2.useSharedValue(0);
  if (cResult[0] === tmp) {
    if (cResult[1] === sharedValue) {
      let tmp8;
      if (cResult[2] === sharedValue1) {
        tmp8 = cResult[3];
      }
      if (cResult[4] === tmp) {
        if (cResult[5] === sharedValue) {
          if (cResult[6] === launchWelcomeSystemTheme) {
            let tmp9;
            if (cResult[7] === sharedValue1) {
              tmp9 = cResult[8];
            }
            const effect = react.useEffect(tmp8, tmp9);
            if (cResult[9] === sharedValue) {
              let tmp12;
              if (cResult[10] === sharedValue1) {
                tmp12 = cResult[11];
              }
              return tmp12;
            }
            const obj3 = { themeState: sharedValue, tweener: sharedValue1 };
            cResult[9] = sharedValue;
            cResult[10] = sharedValue1;
            cResult[11] = obj3;
            tmp12 = obj3;
          }
        }
      }
      const items = [tmp, sharedValue, sharedValue1, launchWelcomeSystemTheme];
      cResult[4] = tmp;
      cResult[5] = sharedValue;
      cResult[6] = launchWelcomeSystemTheme;
      cResult[7] = sharedValue1;
      cResult[8] = items;
      tmp9 = items;
    }
  }
  const fn = function n() {
    const obj = { themePrev: sharedValue.get().themeCurrent, themeCurrent: launchWelcomeSystemTheme };
    const result = sharedValue.set(obj);
    const result1 = sharedValue1.set(0);
    set = sharedValue1.set;
    const obj2 = timing;
    const result2 = set(obj2.withTiming(1, timingPresets.timingStandard));
  };
  cResult[0] = tmp;
  cResult[1] = sharedValue;
  cResult[2] = sharedValue1;
  cResult[3] = fn;
  tmp8 = fn;
}) : ((theme) => {
  let launchWelcomeSystemTheme;
  let tweener;
  let tmp = theme;
  let obj = launchWelcomeSystemTheme(tweener[8]);
  launchWelcomeSystemTheme = obj.useLaunchWelcomeSystemTheme();
  if ("system" === theme.theme) {
    tmp = launchWelcomeSystemTheme;
  }
  launchWelcomeSystemTheme = tmp;
  const tmp2Result = launchWelcomeSystemTheme(tweener[4]);
  const themeState = tmp2Result.useSharedValue({ themePrev: tmp, themeCurrent: tmp });
  const tmp2Result2 = launchWelcomeSystemTheme(tweener[4]);
  tweener = tmp2Result2.useSharedValue(0);
  const items = [tmp, themeState, tweener, launchWelcomeSystemTheme];
  const effect = react.useEffect(() => {
    const obj = { themePrev: themeState.get().themeCurrent, themeCurrent: launchWelcomeSystemTheme };
    const result = themeState.set(obj);
    const result1 = tweener.set(0);
    set = tweener.set;
    const obj2 = timing;
    const result2 = set(obj2.withTiming(1, timingPresets.timingStandard));
  }, items);
  return { themeState, tweener };
});
const __initData = { code: "function SettingsAppearanceGradientBackgroundTsx1(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:t7,themeCurrent:t8}=themeState.get();const{colors:colorsPrev,angle:anglePrev}=t7;const{colors:colorsCurrent,angle:angleCurrent}=t8;const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(__0,i_0){return interpolate(tweener.get(),[0,1],[colorsPrev[i_0].stop/100,colorsCurrent[i_0].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}" };
const __initData2 = { code: "function SettingsAppearanceGradientBackgroundTsx2(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(__0,i_0){return interpolate(tweener.get(),[0,1],[colorsPrev[i_0].stop/100,colorsCurrent[i_0].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let backgroundToken;
  let first;
  let isDimmed;
  let sharedValue;
  let themeIndex;
  let themeState;
  let themes;
  let tweener;
  const tmp = themeState;
  animatedLinearGradientLoadingProps = themeState(sharedValue[7]);
  const cResult = animatedLinearGradientLoadingProps.c(11);
  ({ isDimmed, themes, backgroundToken, themeIndex } = arg0);
  if (undefined === backgroundToken) {
    backgroundToken = tweener(tmp2[11]).colors.BACKGROUND_SURFACE_HIGH;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = ["mobile-visual-refresh"];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let prop;
  if (isDimmed) {
    prop = SettingsAppearanceConstants.BACKGROUND_GRADIENT_DARK_OPACITY;
  }
  let prop1;
  if (isDimmed) {
    prop1 = SettingsAppearanceConstants.BACKGROUND_GRADIENT_LIGHT_OPACITY;
  }
  if (cResult[1] === backgroundToken) {
    if (cResult[2] === prop) {
      if (cResult[3] === prop1) {
        let tmp10;
        let tmp15;
        if (cResult[4] === themes) {
          tmp10 = cResult[5];
        }
        const tmp13 = closure_9(tmp10[themeIndex]);
        themeState = tmp13.themeState;
        tweener = tmp13.tweener;
        const tmpResult = tmp(sharedValue[4]);
        sharedValue = tmpResult.useSharedValue({ width: 0, height: 0 });
        if (cResult[6] !== sharedValue) {
          const fn = function x(nativeEvent) {
            nativeEvent = nativeEvent.nativeEvent;
            size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
            const result = sharedValue.set(size);
          };
          cResult[6] = sharedValue;
          cResult[7] = fn;
          tmp15 = fn;
        } else {
          tmp15 = cResult[7];
        }
        const fn2 = function b() {
          let colors;
          let height;
          let point;
          let point1;
          let themeCurrent;
          let themePrev;
          let width;
          const value = sharedValue.get();
          ({ width, height } = value);
          if (0 !== width) {
            if (0 !== height) {
              const value2 = colors.get();
              ({ themePrev, themeCurrent } = value2);
              colors = themePrev.colors;
              const colors2 = themeCurrent.colors;
              const angle = themePrev.angle;
              const angle2 = themeCurrent.angle;
              let obj = themeState(sharedValue[4]);
              let items = [angle, angle2];
              let num = 90;
              const diff = 90 - obj.interpolate(colors2.get(), [0, 1], items);
              const tmp9 = tweener(sharedValue[12])(diff, width, height);
              const obj2 = {
                colors: colors.map((item, index) => {
                      const processColor = ReanimatedRexport.processColor;
                      ReanimatedRexport;
                      const items = [colors[index].hex, colors2[index].hex];
                      const obj = ReanimatedRexport;
                      let num = processColor(obj.interpolateColor(tweener.get(), [0, 1], items));
                      if (num == null) {
                        num = 0;
                      }
                      return num;
                    }),
                locations: colors.map((item, index) => {
                      const items = [colors[index].stop / 100, colors2[index].stop / 100];
                      const obj = ReanimatedRexport;
                      return obj.interpolate(tweener.get(), [0, 1], items);
                    }),
                startPoint: point,
                endPoint: point1
              };
              point = { x: (width / 2 + tmp9[0]) / width, y: (height / 2 - tmp9[1]) / height };
              point1 = { x: (width / 2 - tmp9[0]) / width, y: (height / 2 + tmp9[1]) / height };
              return obj2;
            }
          }
          return animatedLinearGradientLoadingProps;
        };
        let obj2 = { gradientSize: sharedValue, animatedLinearGradientLoadingProps, themeState, interpolate: tmp(tmp2[4]).interpolate, tweener, getGradientStartPoint: tweener(tmp2[12]), processColor: tmp(tmp2[4]).processColor, interpolateColor: tmp(tmp2[4]).interpolateColor };
        const useAnimatedProps = tmp(tmp2[4]).useAnimatedProps;
        tmp(sharedValue[4]);
        fn2.__closure = obj2;
        fn2.__workletHash = 12558395784936;
        fn2.__initData = __initData;
        const animatedProps = useAnimatedProps(fn2);
        if (cResult[8] === animatedProps) {
          let tmp21;
          if (cResult[9] === tmp15) {
            tmp21 = cResult[10];
          }
          return tmp21;
        }
        const merged = Object.assign(tmp17);
        const tmp28 = <closure_7 style={StyleSheet.absoluteFill} onLayout={tmp15} animatedProps={animatedProps} />;
        cResult[8] = animatedProps;
        cResult[9] = tmp15;
        cResult[10] = tmp28;
        tmp21 = tmp28;
      }
    }
  }
  const tmpResult4 = tmp(sharedValue[8]);
  let result = tmpResult4.convertThemesToAnimatedThemes(themes, prop, prop1, first, backgroundToken);
  cResult[1] = backgroundToken;
  cResult[2] = prop;
  cResult[3] = prop1;
  cResult[4] = themes;
  cResult[5] = result;
  tmp10 = result;
}) : ((isDimmed) => {
  let animatedProps;
  isDimmed = isDimmed.isDimmed;
  const themes = isDimmed.themes;
  const themeIndex = isDimmed.themeIndex;
  let BACKGROUND_SURFACE_HIGH = isDimmed.backgroundToken;
  if (BACKGROUND_SURFACE_HIGH === undefined) {
    BACKGROUND_SURFACE_HIGH = themes(themeIndex[11]).colors.BACKGROUND_SURFACE_HIGH;
  }
  const memo = BACKGROUND_SURFACE_HIGH.useMemo(() => ["mobile-visual-refresh"], []);
  let items = [themes, themeIndex, isDimmed, memo, BACKGROUND_SURFACE_HIGH];
  const tmp4 = closure_9(BACKGROUND_SURFACE_HIGH.useMemo(() => {
    let prop;
    const convertThemesToAnimatedThemes = SettingsAppearancePickerUtils.convertThemesToAnimatedThemes;
    SettingsAppearancePickerUtils;
    if (isDimmed) {
      prop = SettingsAppearanceConstants.BACKGROUND_GRADIENT_DARK_OPACITY;
    }
    let prop1;
    if (isDimmed) {
      prop1 = SettingsAppearanceConstants.BACKGROUND_GRADIENT_LIGHT_OPACITY;
    }
    return convertThemesToAnimatedThemes(themes, prop, prop1, memo, BACKGROUND_SURFACE_HIGH)[themeIndex];
  }, items));
  const themeState = tmp4.themeState;
  const tweener = tmp4.tweener;
  animatedLinearGradientLoadingProps = isDimmed(themeIndex[4]);
  const sharedValue = animatedLinearGradientLoadingProps.useSharedValue({ width: 0, height: 0 });
  const items1 = [sharedValue];
  const callback = BACKGROUND_SURFACE_HIGH.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
    const result = sharedValue.set(size);
  }, items1);
  let obj2 = isDimmed(themeIndex[4]);
  const fn = function _() {
    let height;
    let point;
    let point1;
    let width;
    const value = sharedValue.get();
    ({ width, height } = value);
    if (0 !== width) {
      if (0 !== height) {
        const value2 = themeState.get();
        const themePrev = value2.themePrev;
        const colors = themePrev.colors;
        const themeCurrent = value2.themeCurrent;
        const colors2 = themeCurrent.colors;
        const angle = themePrev.angle;
        const angle2 = themeCurrent.angle;
        let obj = isDimmed(themeIndex[4]);
        let items = [angle, angle2];
        let num = 90;
        const diff = 90 - obj.interpolate(tweener.get(), [0, 1], items);
        const tmp9 = themes(themeIndex[12])(diff, width, height);
        const obj2 = {
          colors: colors.map((item, index) => {
                const processColor = ReanimatedRexport.processColor;
                ReanimatedRexport;
                const items = [colors[index].hex, colors2[index].hex];
                const obj = ReanimatedRexport;
                let num = processColor(obj.interpolateColor(tweener.get(), [0, 1], items));
                if (num == null) {
                  num = 0;
                }
                return num;
              }),
          locations: colors.map((item, index) => {
                const items = [colors[index].stop / 100, colors2[index].stop / 100];
                const obj = ReanimatedRexport;
                return obj.interpolate(tweener.get(), [0, 1], items);
              }),
          startPoint: point,
          endPoint: point1
        };
        point = { x: (width / 2 + tmp9[0]) / width, y: (height / 2 - tmp9[1]) / height };
        point1 = { x: (width / 2 - tmp9[0]) / width, y: (height / 2 + tmp9[1]) / height };
        return obj2;
      }
    }
    return animatedLinearGradientLoadingProps;
  };
  fn.__closure = { gradientSize: sharedValue, animatedLinearGradientLoadingProps, themeState, interpolate: isDimmed(themeIndex[4]).interpolate, tweener, getGradientStartPoint: themes(themeIndex[12]), processColor: isDimmed(themeIndex[4]).processColor, interpolateColor: isDimmed(themeIndex[4]).interpolateColor };
  fn.__workletHash = 8305692696619;
  fn.__initData = __initData2;
  const obj4 = { style: memo.absoluteFill, onLayout: callback, animatedProps };
  ({ gradientSize: sharedValue, animatedLinearGradientLoadingProps, themeState, interpolate: isDimmed(themeIndex[4]).interpolate, tweener, getGradientStartPoint: themes(themeIndex[12]), processColor: isDimmed(themeIndex[4]).processColor, interpolateColor: isDimmed(themeIndex[4]).interpolateColor });
  animatedProps = obj2.useAnimatedProps(fn);
  const merged = Object.assign(animatedLinearGradientLoadingProps);
  return tweener(sharedValue, obj4);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceGradientBackground.tsx");

export default memoResult;