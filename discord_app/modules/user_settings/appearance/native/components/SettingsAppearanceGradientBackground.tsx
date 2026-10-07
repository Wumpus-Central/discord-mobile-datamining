// === Module 15133: SettingsAppearanceGradientBackground ===

// Module 15133 (SettingsAppearanceGradientBackground)
import ReanimatedRexport2 from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import SettingsAppearancePickerUtils from "SettingsAppearancePickerUtils" /* 15134 */;
import noop from "module_19" /* 19 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 15107 */;

const ReanimatedRexport_mod = ReanimatedRexport2;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let ReanimatedRexport = fn(4618);
let num = ReanimatedRexport.processColor("rgba(0, 0, 0, 0)");
if (num == null) {
  num = 0;
}
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_7 = ReanimatedRexport.createAnimatedComponent(fn(5612).LinearGradientNativeComponent);
let animatedLinearGradientLoadingProps = { colors: null, locations: [], startPoint: { x: 0, y: 0 }, endPoint: { x: 0, y: 0 } };
let items = [num, num];
animatedLinearGradientLoadingProps.colors = items;
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((theme) => {
  let tmp = theme;
  const cResult = launchWelcomeSystemTheme(sharedValue1[7]).c(12);
  let obj = launchWelcomeSystemTheme(sharedValue1[7]);
  launchWelcomeSystemTheme = launchWelcomeSystemTheme(sharedValue1[8]).useLaunchWelcomeSystemTheme();
  if ("system" === theme.theme) {
    tmp = launchWelcomeSystemTheme;
  }
  launchWelcomeSystemTheme = tmp;
  const obj2 = launchWelcomeSystemTheme(sharedValue1[8]);
  const sharedValue = launchWelcomeSystemTheme(sharedValue1[4]).useSharedValue({ themePrev: tmp, themeCurrent: tmp });
  const tmp2Result = launchWelcomeSystemTheme(sharedValue1[4]);
  sharedValue1 = launchWelcomeSystemTheme(sharedValue1[4]).useSharedValue(0);
  if (cResult[0] === tmp) {
    if (cResult[1] === sharedValue) {
      if (cResult[2] === sharedValue1) {
        let tmp8 = cResult[3];
      }
      if (cResult[4] === tmp) {
        if (cResult[5] === sharedValue) {
          if (cResult[6] === launchWelcomeSystemTheme) {
            if (cResult[7] === sharedValue1) {
              let tmp9 = cResult[8];
            }
            const effect = noop.useEffect(tmp8, tmp9);
            if (cResult[9] === sharedValue) {
              if (cResult[10] === sharedValue1) {
                let tmp12 = cResult[11];
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
    const result = sharedValue.set({ themePrev: sharedValue.get().themeCurrent, themeCurrent: launchWelcomeSystemTheme });
    const result1 = sharedValue1.set(0);
    const obj = { themePrev: sharedValue.get().themeCurrent, themeCurrent: launchWelcomeSystemTheme };
    const result2 = sharedValue1.set(timing.withTiming(1, timingPresets.timingStandard));
  };
  cResult[0] = tmp;
  cResult[1] = sharedValue;
  cResult[2] = sharedValue1;
  cResult[3] = fn;
  tmp8 = fn;
  const tmp2Result2 = launchWelcomeSystemTheme(sharedValue1[4]);
}) : ((theme) => {
  let tmp = theme;
  launchWelcomeSystemTheme = launchWelcomeSystemTheme(tweener[8]).useLaunchWelcomeSystemTheme();
  if ("system" === theme.theme) {
    tmp = launchWelcomeSystemTheme;
  }
  launchWelcomeSystemTheme = tmp;
  let obj = launchWelcomeSystemTheme(tweener[8]);
  const themeState = launchWelcomeSystemTheme(tweener[4]).useSharedValue({ themePrev: tmp, themeCurrent: tmp });
  const tmp2Result = launchWelcomeSystemTheme(tweener[4]);
  tweener = launchWelcomeSystemTheme(tweener[4]).useSharedValue(0);
  const items = [tmp, themeState, tweener, launchWelcomeSystemTheme];
  const effect = noop.useEffect(() => {
    const result = themeState.set({ themePrev: themeState.get().themeCurrent, themeCurrent: launchWelcomeSystemTheme });
    const result1 = tweener.set(0);
    const obj = { themePrev: themeState.get().themeCurrent, themeCurrent: launchWelcomeSystemTheme };
    const result2 = tweener.set(timing.withTiming(1, timingPresets.timingStandard));
  }, items);
  return { themeState, tweener };
});
const __initData = { code: "function SettingsAppearanceGradientBackgroundTsx1(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:t7,themeCurrent:t8}=themeState.get();const{colors:colorsPrev,angle:anglePrev}=t7;const{colors:colorsCurrent,angle:angleCurrent}=t8;const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(__0,i_0){return interpolate(tweener.get(),[0,1],[colorsPrev[i_0].stop/100,colorsCurrent[i_0].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}" };
const __initData2 = { code: "function SettingsAppearanceGradientBackgroundTsx2(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(__0,i_0){return interpolate(tweener.get(),[0,1],[colorsPrev[i_0].stop/100,colorsCurrent[i_0].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}" };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceGradientBackground.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  animatedLinearGradientLoadingProps = themeState(sharedValue[7]);
  const cResult = animatedLinearGradientLoadingProps.c(11);
  ({ isDimmed, themes, backgroundToken, themeIndex } = arg0);
  if (undefined === backgroundToken) {
    backgroundToken = tweener(tmp2[11]).colors.BACKGROUND_SURFACE_HIGH;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = ["mobile-visual-refresh"];
    cResult[0] = items;
    let first = items;
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
        if (cResult[4] === themes) {
          let tmp10 = cResult[5];
        }
        const tmp13 = closure_9(tmp10[themeIndex]);
        themeState = tmp13.themeState;
        tweener = tmp13.tweener;
        sharedValue = tmp(tmp2[4]).useSharedValue({ width: 0, height: 0 });
        if (cResult[6] !== sharedValue) {
          const fn = function x(nativeEvent) {
            nativeEvent = nativeEvent.nativeEvent;
            const size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
            const result = sharedValue.set(size);
          };
          cResult[6] = sharedValue;
          cResult[7] = fn;
          let tmp15 = fn;
        } else {
          tmp15 = cResult[7];
        }
        const tmpResult = tmp(tmp2[4]);
        const fn2 = function b() {
          value = sharedValue.get();
          ({ width, height } = value);
          if (0 !== width) {
            if (0 !== height) {
              value2 = colors.get();
              ({ themePrev, themeCurrent } = value2);
              colors = themeCurrent.colors;
              let items = [themePrev.angle, themeCurrent.angle];
              const diff = 90 - themeState(sharedValue[4]).interpolate(colors.get(), [0, 1], items);
              const tmp9 = tweener(sharedValue[12])(diff, width, height);
              const obj2 = {
                colors: colors.map((item, index) => {
                      const obj = ReanimatedRexport2;
                      const items = [colors[index].hex, colors[index].hex];
                      let num = obj.processColor(ReanimatedRexport2.interpolateColor(tweener.get(), [0, 1], items));
                      if (num == null) {
                        num = 0;
                      }
                      return num;
                    }),
                locations: colors.map((item, index) => {
                      const items = [colors[index].stop / 100, colors[index].stop / 100];
                      return ReanimatedRexport2.interpolate(tweener.get(), [0, 1], items);
                    }),
                startPoint: null,
                endPoint: null
              };
              const point = { x: (width / 2 + tmp9[0]) / width, y: (height / 2 - tmp9[1]) / height };
              obj2.startPoint = point;
              const point1 = { x: (width / 2 - tmp9[0]) / width, y: (height / 2 + tmp9[1]) / height };
              obj2.endPoint = point1;
              return obj2;
            }
          }
          return animatedLinearGradientLoadingProps;
        };
        let obj2 = { gradientSize: sharedValue, animatedLinearGradientLoadingProps, themeState, interpolate: tmp(tmp2[4]).interpolate, tweener, getGradientStartPoint: tweener(tmp2[12]), processColor: tmp(tmp2[4]).processColor, interpolateColor: tmp(tmp2[4]).interpolateColor };
        fn2.__closure = obj2;
        fn2.__workletHash = 12558395784936;
        fn2.__initData = __initData;
        const animatedProps = tmp(tmp2[4]).useAnimatedProps(fn2);
        if (cResult[8] === animatedProps) {
          if (cResult[9] === tmp15) {
            let tmp20 = cResult[10];
          }
          return tmp20;
        }
        const obj3 = { style: StyleSheet.absoluteFill, onLayout: tmp15 };
        const merged = Object.assign(tmp16);
        obj3.animatedProps = animatedProps;
        const tmp27 = <closure_7 style={StyleSheet.absoluteFill} onLayout={tmp15} />;
        cResult[8] = animatedProps;
        cResult[9] = tmp15;
        cResult[10] = tmp27;
        tmp20 = tmp27;
        const tmpResult3 = tmp(tmp2[4]);
      }
    }
  }
  let result = themeState(sharedValue[8]).convertThemesToAnimatedThemes(themes, prop, prop1, first, backgroundToken);
  cResult[1] = backgroundToken;
  cResult[2] = prop;
  cResult[3] = prop1;
  cResult[4] = themes;
  cResult[5] = result;
  tmp10 = result;
  const tmpResult4 = themeState(sharedValue[8]);
}) : ((isDimmed) => {
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
    if (isDimmed) {
      prop = SettingsAppearanceConstants.BACKGROUND_GRADIENT_DARK_OPACITY;
    }
    let prop1;
    if (isDimmed) {
      prop1 = SettingsAppearanceConstants.BACKGROUND_GRADIENT_LIGHT_OPACITY;
    }
    return SettingsAppearancePickerUtils.convertThemesToAnimatedThemes(themes, prop, prop1, memo, BACKGROUND_SURFACE_HIGH)[themeIndex];
  }, items));
  const themeState = tmp4.themeState;
  const tweener = tmp4.tweener;
  animatedLinearGradientLoadingProps = isDimmed(themeIndex[4]);
  const sharedValue = animatedLinearGradientLoadingProps.useSharedValue({ width: 0, height: 0 });
  const items1 = [sharedValue];
  const callback = BACKGROUND_SURFACE_HIGH.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
    const result = sharedValue.set(size);
  }, items1);
  const fn = function _() {
    value = sharedValue.get();
    ({ width, height } = value);
    if (0 !== width) {
      if (0 !== height) {
        value2 = themeState.get();
        const themePrev = value2.themePrev;
        const themeCurrent = value2.themeCurrent;
        const colors = themeCurrent.colors;
        let items = [themePrev.angle, themeCurrent.angle];
        const diff = 90 - isDimmed(themeIndex[4]).interpolate(tweener.get(), [0, 1], items);
        const tmp9 = themes(themeIndex[12])(diff, width, height);
        const obj2 = {
          colors: colors.map((item, index) => {
                const obj = ReanimatedRexport2;
                const items = [colors[index].hex, colors[index].hex];
                let num = obj.processColor(ReanimatedRexport2.interpolateColor(tweener.get(), [0, 1], items));
                if (num == null) {
                  num = 0;
                }
                return num;
              }),
          locations: colors.map((item, index) => {
                const items = [colors[index].stop / 100, colors[index].stop / 100];
                return ReanimatedRexport2.interpolate(tweener.get(), [0, 1], items);
              }),
          startPoint: null,
          endPoint: null
        };
        const point = { x: (width / 2 + tmp9[0]) / width, y: (height / 2 - tmp9[1]) / height };
        obj2.startPoint = point;
        const point1 = { x: (width / 2 - tmp9[0]) / width, y: (height / 2 + tmp9[1]) / height };
        obj2.endPoint = point1;
        return obj2;
      }
    }
    return animatedLinearGradientLoadingProps;
  };
  let obj2 = isDimmed(themeIndex[4]);
  fn.__closure = { gradientSize: sharedValue, animatedLinearGradientLoadingProps, themeState, interpolate: isDimmed(themeIndex[4]).interpolate, tweener, getGradientStartPoint: themes(themeIndex[12]), processColor: isDimmed(themeIndex[4]).processColor, interpolateColor: isDimmed(themeIndex[4]).interpolateColor };
  fn.__workletHash = 8305692696619;
  fn.__initData = __initData2;
  const obj4 = { style: memo.absoluteFill, onLayout: callback };
  const animatedProps = obj2.useAnimatedProps(fn);
  const merged = Object.assign(animatedLinearGradientLoadingProps);
  obj4.animatedProps = animatedProps;
  return tweener(sharedValue, obj4);
}));