// === Module 15091: SettingsAppearanceThemeCarousel ===

// Module 15091 (SettingsAppearanceThemeCarousel)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1241 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import noop from "module_19" /* 19 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 15092 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let closure_11 = ReanimatedRexport.createAnimatedComponent(fn(1188).Icon);
const createStyles = fn(4890);
let obj = { container: { gap: nativeDefault.space.PX_24, alignItems: "center" }, textCentered: { textAlign: "center" }, labelGroup: null, titleContainer: null, floatingNuxContainer: null, floatingNux: null, arrowLeft: null, uppercase: null, selectionBorder: null, a11yThemeList: null, a11yThemeListScroll: null };
let obj3 = { gap: nativeDefault.space.PX_24, alignItems: "center" };
obj.labelGroup = { gap: nativeDefault.space.PX_4, alignItems: "center" };
let obj4 = { gap: nativeDefault.space.PX_4, alignItems: "center" };
obj.titleContainer = { minHeight: 20, marginTop: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
let obj5 = { minHeight: 20, marginTop: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj.floatingNuxContainer = { position: "absolute", left: nativeDefault.space.PX_24 };
let obj7 = { borderRadius: nativeDefault.radii.lg, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_4, paddingRight: nativeDefault.space.PX_8 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj7.shadowColor = "#000000";
obj.floatingNux = obj7;
let obj8 = { transform: null };
let items = [{ rotate: "90deg" }];
obj8.transform = items;
obj.arrowLeft = obj8;
obj.uppercase = { textTransform: "uppercase" };
let size = { position: "absolute", alignSelf: "center", width: SettingsAppearanceConstants.THEME_ITEM_WIDTH, height: SettingsAppearanceConstants.THEME_ITEM_HEIGHT, borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, borderWidth: 2 };
obj.selectionBorder = size;
obj.a11yThemeList = { flexDirection: "row" };
obj.a11yThemeListScroll = { flexGrow: 0 };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = { code: "function SettingsAppearanceThemeCarouselTsx1(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?\"auto\":\"none\"};}" };
const __initData = { code: "function SettingsAppearanceThemeCarouselTsx2(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?'auto':'none'};}" };
const ReactCompilerGating = fn(558);
let obj6 = { position: "absolute", left: nativeDefault.space.PX_24 };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((themes) => {
  const cResult = themes(isPreview[10]).c(92);
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  isPreview = themes.isPreview;
  ({ defaultIndex, deviceWidth } = themes);
  const isSynced = themes.isSynced;
  ({ animatedStyles, hasOnyxNux } = themes);
  const onThemeSelected = themes.onThemeSelected;
  debounceResult();
  let obj = themes(isPreview[10]);
  const isScreenReaderEnabled = themes(isPreview[11]).useIsScreenReaderEnabled();
  deviceWidth.useRef(null);
  deviceWidth.useRef(defaultIndex);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0) {
        return themes.theme === closure_7.ONYX;
      }
    }
    cResult[0] = S;
  } else {
    class S {
      constructor(arg0) {
        return themes.theme === closure_7.ONYX;
      }
    }
  }
  let obj2 = themes(isPreview[11]);
  if (findIndexResult >= 0) {
    class S {
      constructor(arg0) {
        return themes.theme === closure_7.ONYX;
      }
    }
  }
  findIndexResult = themes.findIndex(S);
  const sharedValue = themes(isPreview[5]).useSharedValue(false);
  const tmpResult = themes(isPreview[5]);
  const sharedValue1 = themes(isPreview[5]).useSharedValue(false);
  if (cResult[1] === sharedValue1) {
    class S {
      constructor(arg0) {
        return themes.theme === closure_7.ONYX;
      }
    }
    const effect = deviceWidth.useEffect(P, items);
    if (cResult[5] !== onThemeSelected) {
      class S {
        constructor(arg0) {
          return themes.theme === closure_7.ONYX;
        }
      }
      debounceResult = currentThemeIndex(tmp2[12]).debounce(onThemeSelected, 180);
      class W {
        constructor(arg0, arg1) {
          rounded = Math.round(arg1);
          if (rounded !== closure_8.current) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[13]);
            result = obj.triggerHapticFeedback(closure_0(closure_2[13]).HapticFeedbackTypes.IMPACT_LIGHT);
            tmp2.current = rounded;
            tmp6 = closure_12;
            tmp7 = closure_12(rounded);
          }
          if (hasOnyxNux) {
            tmp8 = closure_6;
            _Math = Math;
            tmp9 = deviceWidth;
            tmp10 = closure_9;
            num = 2;
            tmp11 = arg1 < closure_9 + Math.ceil(deviceWidth / (closure_6.THEME_ITEM_WIDTH + closure_6.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
            if (tmp11) {
              tmp12 = closure_11;
              flag = true;
              result1 = closure_11.set(true);
            }
            tmp15 = closure_11;
            tmp14 = closure_10;
            value = closure_11.get();
            tmp17 = !value;
            if (!value) {
              tmp17 = !tmp11;
            }
            result2 = closure_10.set(tmp17);
          }
          return;
        }
      }
      cResult[6] = debounceResult;
      const obj6 = currentThemeIndex(tmp2[12]);
    } else {
      class S {
        constructor(arg0) {
          return themes.theme === closure_7.ONYX;
        }
      }
    }
    debounceResult = tmp12;
    if (cResult[7] === deviceWidth) {
      class S {
        constructor(arg0) {
          return themes.theme === closure_7.ONYX;
        }
      }
    }
    class W {
      constructor(arg0, arg1) {
        rounded = Math.round(arg1);
        if (rounded !== closure_8.current) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[13]);
          result = obj.triggerHapticFeedback(closure_0(closure_2[13]).HapticFeedbackTypes.IMPACT_LIGHT);
          tmp2.current = rounded;
          tmp6 = closure_12;
          tmp7 = closure_12(rounded);
        }
        if (hasOnyxNux) {
          tmp8 = closure_6;
          _Math = Math;
          tmp9 = deviceWidth;
          tmp10 = closure_9;
          num = 2;
          tmp11 = arg1 < closure_9 + Math.ceil(deviceWidth / (closure_6.THEME_ITEM_WIDTH + closure_6.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
          if (tmp11) {
            tmp12 = closure_11;
            flag = true;
            result1 = closure_11.set(true);
          }
          tmp15 = closure_11;
          tmp14 = closure_10;
          value = closure_11.get();
          tmp17 = !value;
          if (!value) {
            tmp17 = !tmp11;
          }
          result2 = closure_10.set(tmp17);
        }
        return;
      }
    }
    cResult[7] = deviceWidth;
    cResult[8] = sharedValue1;
    cResult[9] = hasOnyxNux;
    cResult[10] = sharedValue;
    cResult[11] = tmp12;
    cResult[12] = num2;
    cResult[13] = W;
  }
  class P {
    constructor() {
      closure_0 = setTimeout(() => { ... }, 5500);
      return () => { ... };
    }
  }
  items = [sharedValue, sharedValue1];
  cResult[1] = sharedValue1;
  cResult[2] = sharedValue;
  cResult[3] = P;
  cResult[4] = items;
  const tmpResult2 = themes(isPreview[5]);
}) : ((themes) => {
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  const isPreview = themes.isPreview;
  ({ defaultIndex, deviceWidth } = themes);
  ({ animatedStyles, hasOnyxNux: closure_4, onThemeSelected } = themes);
  const tmp = closure_12();
  const isScreenReaderEnabled = themes(isPreview[11]).useIsScreenReaderEnabled();
  deviceWidth.useRef(null);
  deviceWidth.useRef(defaultIndex);
  const items = [themes];
  ref = deviceWidth.useMemo(() => {
    const findIndexResult = themes.findIndex((theme) => theme.theme === constants.ONYX);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  let obj = themes(isPreview[11]);
  const sharedValue = themes(isPreview[5]).useSharedValue(false);
  let obj2 = themes(isPreview[5]);
  const sharedValue1 = themes(isPreview[5]).useSharedValue(false);
  const items1 = [sharedValue, sharedValue1];
  const effect = deviceWidth.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(false);
      const result1 = sharedValue1.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items1);
  const items2 = [onThemeSelected];
  closure_11 = deviceWidth.useMemo(() => _modDef12.debounce(onThemeSelected, 180), items2);
  const items3 = [isPreview, onThemeSelected, currentThemeIndex];
  const callback = deviceWidth.useCallback((themePreset) => {
    const index = themePreset.index;
    return closure_8(currentThemeIndex(isPreview[16]), {
      themePreset: themePreset.item,
      isPreview,
      isSelected: index === currentThemeIndex,
      onPress() {
        if (null != ref.current) {
          const current = ref.current;
          const currentIndex = current.getCurrentIndex();
          if (currentIndex === index) {
            return onThemeSelected(index);
          } else {
            if (currentIndex !== index) {
              if (0 === currentIndex) {
                const obj2 = { count: index };
                return ref.current.next(obj2);
              } else {
                const current2 = ref.current;
                const obj = { index, animated: true };
                current2.scrollTo(obj);
              }
            }
            const current3 = ref.current;
            if (current3 != null) {
              const obj3 = { index, animated: true };
              current3.scrollTo(obj3);
            }
          }
        }
      },
      isNew: false
    });
  }, items3);
  let obj3 = themes(isPreview[5]);
  class D {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[17]);
      obj2 = closure_9;
      num = 0;
      if (closure_9.get()) {
        num = 1;
      }
      obj1 = { opacity: obj.withTiming(num, tmp(tmp2[18]).timingStandard), pointerEvents: null };
      str = "none";
      if (obj2.get()) {
        str = "auto";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const obj4 = themes(isPreview[5]);
  D.__closure = { withTiming: themes(isPreview[17]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: themes(isPreview[18]).timingStandard };
  D.__workletHash = 16840053984177;
  D.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(D);
  let tmp13 = null;
  if (themes[currentThemeIndex].type !== themes(isPreview[14]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
    const obj7 = { source: currentThemeIndex(tmp3[19]), style: animatedStyles.iconHeaderSecondary, size: tmp2(tmp3[6]).IconSizes.SMALL_20 };
    tmp13 = ref(closure_11, obj7);
  }
  const items4 = [tmp13, ];
  const obj8 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-sm/semibold", children: themes[currentThemeIndex].getName() };
  items4[1] = ref(themes(isPreview[20]).Text, obj8);
  { style: tmp.titleContainer, children: null }.children = items4;
  if (!isScreenReaderEnabled) {
    if (!tmp2(tmp3[21]).isThumbstickScrollDevice) {
      const obj10 = { children: null };
      const obj11 = { pointerEvents: "none", style: tmp.selectionBorder };
      const items5 = [tmp17(closure_4, obj11), ];
      const size = { ref, data: themes, renderItem: callback, style: null, width: null, height: null, loop: false, pagingEnabled: true, defaultIndex: null, onSnapToItem: null, scrollAnimationDuration: 200, onProgressChange: null };
      const obj12 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: ref.THEME_ITEM_HORIZONTAL_MARGIN };
      size.style = obj12;
      size.width = ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN;
      size.height = ref.THEME_ITEM_HEIGHT;
      size.defaultIndex = defaultIndex;
      size.onSnapToItem = onThemeSelected;
      size.onProgressChange = function onProgressChange(arg0, arg1) {
        const rounded = Math.round(arg1);
        if (rounded !== ref.current) {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          tmp2.current = rounded;
          closure_11(rounded);
        }
        if (closure_1_4) {
          const _Math = Math;
          const tmp11 = arg1 < closure_8 + Math.ceil(deviceWidth / (SettingsAppearanceConstants.THEME_ITEM_WIDTH + SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
          if (tmp11) {
            const result1 = sharedValue1.set(true);
          }
          value = sharedValue1.get();
          let tmp17 = !value;
          if (!value) {
            tmp17 = !tmp11;
          }
          const result2 = sharedValue.set(tmp17);
        }
      };
      items5[1] = tmp17(currentThemeIndex(tmp3[22]), size);
      obj10.children = items5;
      let tmp17Result1 = tmp11(sharedValue1, obj10);
    }
    const obj13 = { children: tmp17Result1 };
    const obj14 = { animated: true, style: null, variant: "text-sm/medium", children: null };
    const items6 = [animatedStyles.headerSecondary, tmp.textCentered];
    obj14.style = items6;
    if (isPreview) {
      if (themes[currentThemeIndex].type !== tmp2(tmp3[14]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
        const intl2 = tmp2(tmp3[15]).intl;
        let stringResult = intl2.string(tmp2(tmp3[15]).t.VqGKm0);
      }
      obj14.children = stringResult;
      const obj15 = { children: null };
      const items7 = [tmp17Result, ];
      const obj16 = { style: tmp.labelGroup, children: null };
      const items8 = [tmp18, tmp17(tmp24, obj14)];
      obj16.children = items8;
      items7[1] = tmp11(closure_4, obj16);
      obj15.children = items7;
      const obj17 = { style: tmp.container, children: null };
      const obj18 = { style: tmp.floatingNuxContainer, children: null };
      const obj19 = { style: null, children: null };
      const items9 = [tmp.floatingNux, animatedStyle, , ];
      ({ bgSurfaceOverlay: arr11[2], borderFaint: arr11[3] } = animatedStyles);
      obj19.style = items9;
      const obj20 = { style: null, source: null, size: null };
      const items10 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      obj20.style = items10;
      obj20.source = currentThemeIndex(tmp3[23]);
      obj20.size = tmp2(tmp3[6]).IconSizes.REFRESH_SMALL_16;
      const items11 = [tmp17(closure_11, obj20), ];
      const obj21 = { animated: true, style: null, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: null };
      const items12 = [animatedStyles.textNormal, tmp.uppercase];
      obj21.style = items12;
      const intl3 = tmp2(tmp3[15]).intl;
      obj21.children = intl3.string(tmp2(tmp3[15]).t.y2b7CA);
      items11[1] = tmp17(tmp2(tmp3[20]).Text, obj21);
      obj19.children = items11;
      obj18.children = tmp11(currentThemeIndex(tmp3[5]).View, obj19);
      const items13 = [tmp17(closure_4, obj18), tmp11(sharedValue1, obj15)];
      obj17.children = items13;
      return tmp11(closure_4, obj17);
    }
    const intl = tmp2(tmp3[15]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[15]).t;
    if (themes.isSynced) {
      stringResult = string(t.lhV0Y2);
    } else {
      stringResult = string(t.d5Gu9A);
    }
    tmp17Result = tmp17(closure_4, obj13);
  }
  const obj5 = { withTiming: themes(isPreview[17]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: themes(isPreview[18]).timingStandard };
  const obj6 = { style: tmp.titleContainer, children: null };
  tmp17Result1 = tmp17(onThemeSelected, {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      const obj = {
        children: closure_8(currentThemeIndex(isPreview[16]), {
          themePreset,
          isPreview,
          isSelected: index === currentThemeIndex,
          onPress() {
            return onThemeSelected(closure_0);
          }
        })
      };
      closure_0 = index;
      return closure_8(closure_1_4, obj, "theme-" + index);
    })
  });
  const obj22 = {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      const obj = {
        children: closure_8(currentThemeIndex(isPreview[16]), {
          themePreset,
          isPreview,
          isSelected: index === currentThemeIndex,
          onPress() {
            return onThemeSelected(closure_0);
          }
        })
      };
      closure_0 = index;
      return closure_8(closure_1_4, obj, "theme-" + index);
    })
  };
});