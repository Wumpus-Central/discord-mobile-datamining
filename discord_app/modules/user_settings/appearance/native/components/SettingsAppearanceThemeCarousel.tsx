// === Module 14617: SettingsAppearanceThemeCarousel ===

// Module 14617 (SettingsAppearanceThemeCarousel)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import importDefaultResult from "THEME_ITEM_WIDTH" /* 14618 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importDefaultResult1 from "module_4115" /* 4115 */;

const require = arg1;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let closure_10 = importDefaultResult1.createAnimatedComponent(require("Button").Icon);
let obj = { container: null, textCentered: null, labelGroup: null, titleContainer: null, floatingNuxContainer: null, floatingNux: null, arrowLeft: null, uppercase: null, selectionBorder: null, a11yThemeList: null, a11yThemeListScroll: null };
obj = { gap: ThemesDefault.space.PX_24, alignItems: "center" };
obj[0] = obj;
obj[1] = { textAlign: "center" };
createCacheKey = { gap: ThemesDefault.space.PX_4, alignItems: "center" };
obj[2] = createCacheKey;
obj[3] = { minHeight: 20, marginTop: ThemesDefault.space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
let obj2 = { minHeight: 20, marginTop: ThemesDefault.space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj[4] = { position: "absolute", left: ThemesDefault.space.PX_24 };
let obj4 = { borderRadius: ThemesDefault.radii.lg, flexDirection: "row", alignItems: "center", padding: ThemesDefault.space.PX_4, paddingRight: ThemesDefault.space.PX_8 };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
obj4.shadowColor = "#000000";
obj[5] = obj4;
let items = [{ rotate: "90deg" }];
obj[6] = { transform: items };
obj[7] = { textTransform: "uppercase" };
let obj3 = { position: "absolute", left: ThemesDefault.space.PX_24 };
obj[8] = { position: "absolute", alignSelf: "center", width: importDefaultResult.THEME_ITEM_WIDTH, height: importDefaultResult.THEME_ITEM_HEIGHT, borderRadius: ThemesDefault.radii.md, borderColor: ThemesDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, borderWidth: 2 };
obj[9] = { flexDirection: "row" };
obj[10] = { flexGrow: 0 };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { code: "function SettingsAppearanceThemeCarouselTsx1(){const{withTiming,isMidnightNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isMidnightNuxVisible.get()?1:0,timingStandard),pointerEvents:isMidnightNuxVisible.get()?'auto':'none'};}" };
let obj5 = { position: "absolute", alignSelf: "center", width: importDefaultResult.THEME_ITEM_WIDTH, height: importDefaultResult.THEME_ITEM_HEIGHT, borderRadius: ThemesDefault.radii.md, borderColor: ThemesDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, borderWidth: 2 };
let result = require("set").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default function SettingsAppearanceThemeCarousel(themes) {
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  const isPreview = themes.isPreview;
  ({ defaultIndex, deviceWidth } = themes);
  ({ animatedStyles, hasMidnightNux: closure_4, isRefreshEnabled, onThemeSelected } = themes);
  let ref;
  let callback;
  closure_8 = undefined;
  let sharedValue;
  let sharedValue1;
  let callback2;
  const tmp = callback2();
  let obj = themes(isPreview[8]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  ref = deviceWidth.useRef(null);
  callback = deviceWidth.useRef(defaultIndex);
  const items = [themes];
  closure_8 = deviceWidth.useMemo(() => {
    const findIndexResult = themes.findIndex((theme) => "midnight" === theme.theme);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  obj1 = themes(isPreview[4]);
  sharedValue = obj1.useSharedValue(false);
  let obj2 = themes(isPreview[4]);
  sharedValue1 = obj2.useSharedValue(false);
  const items1 = [sharedValue, sharedValue1];
  const effect = deviceWidth.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = closure_9.set(false);
      const result1 = closure_10.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items1);
  const items2 = [onThemeSelected];
  callback2 = deviceWidth.useMemo(() => currentThemeIndex(isPreview[9]).debounce(onThemeSelected, 180), items2);
  const items3 = [isPreview, onThemeSelected, currentThemeIndex];
  callback = deviceWidth.useCallback((index) => {
    index = index.index;
    return ref(currentThemeIndex(isPreview[10]), {
      themePreset: index.item,
      isPreview,
      isSelected: index === currentThemeIndex,
      onPress() {
        if (null != closure_1_6.current) {
          const current = tmp.current;
          const currentIndex = current.getCurrentIndex();
          if (currentIndex === index) {
            return closure_1_5(tmp3);
          } else {
            if (currentIndex !== tmp3) {
              if (0 === currentIndex) {
                let obj = { count: null };
                obj[0] = tmp3;
                return tmp.current.next(obj);
              } else {
                const current2 = tmp.current;
                obj = { index: null, animated: true };
                obj[0] = tmp3;
                current2.scrollTo(obj);
              }
            }
            const current3 = tmp.current;
            if (current3 != null) {
              obj = { index: null, animated: true };
              obj[0] = tmp3;
              current3.scrollTo(obj);
            }
          }
        }
      },
      isNew: false
    });
  }, items3);
  let obj3 = themes(isPreview[4]);
  class P {
    constructor() {
      tmp = themes;
      tmp2 = isPreview;
      obj = themes(isPreview[11]);
      obj2 = closure_9;
      num = 0;
      if (closure_9.get()) {
        num = 1;
      }
      obj = { opacity: obj.withTiming(num, tmp(tmp2[12]).timingStandard), pointerEvents: null };
      str = "none";
      if (obj2.get()) {
        str = "auto";
      }
      obj[1] = str;
      return obj;
    }
  }
  obj = { withTiming: themes(isPreview[11]).withTiming, isMidnightNuxVisible: sharedValue, timingStandard: themes(isPreview[12]).timingStandard };
  P.__closure = obj;
  P.__workletHash = 3854555745742;
  P.__initData = closure_12;
  obj = { style: tmp.titleContainer, children: null };
  const animatedStyle = obj3.useAnimatedStyle(P);
  let tmp13 = null;
  if (themes[currentThemeIndex].type !== themes(isPreview[13]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
    obj1 = { source: null, style: null, size: null };
    obj1[0] = currentThemeIndex(tmp3[14]);
    obj1[1] = animatedStyles.iconHeaderSecondary;
    obj1[2] = tmp2(tmp3[5]).IconSizes.SMALL_20;
    tmp13 = callback(sharedValue1, obj1);
  }
  const items4 = [tmp13, ];
  obj2 = { animated: true, style: isRefreshEnabled ? animatedStyles.headerPrimary : animatedStyles.headerSecondary, variant: "heading-sm/semibold", children: obj8.getName() };
  obj8 = themes[currentThemeIndex];
  items4[1] = callback(themes(isPreview[15]).Text, obj2);
  obj[1] = items4;
  let tmp11Result = tmp11(tmp12, obj);
  if (!isScreenReaderEnabled) {
    if (!tmp2(tmp3[16]).isThumbstickScrollDevice) {
      obj3 = { children: null };
      const obj4 = { pointerEvents: "none", style: null };
      obj4[1] = tmp.selectionBorder;
      const items5 = [tmp17(tmp12, obj4), ];
      const obj5 = { ref: null, data: null, renderItem: null, style: null, width: null, height: null, loop: false, pagingEnabled: true, defaultIndex: null, onSnapToItem: null, scrollAnimationDuration: 200, onProgressChange: null };
      obj5[0] = ref;
      obj5[1] = themes;
      obj5[2] = callback;
      const obj6 = { width: null, justifyContent: "center", alignItems: "center", marginLeft: null };
      obj6[0] = deviceWidth;
      obj6[3] = ref.THEME_ITEM_HORIZONTAL_MARGIN;
      obj5[3] = obj6;
      obj5[4] = ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN;
      obj5[5] = ref.THEME_ITEM_HEIGHT;
      obj5[8] = defaultIndex;
      obj5[9] = onThemeSelected;
      obj5[11] = function onProgressChange(arg0, arg1) {
        const rounded = Math.round(arg1);
        if (rounded !== ref.current) {
          const result = themes(isPreview[18]).triggerHapticFeedback(themes(isPreview[18]).HapticFeedbackTypes.IMPACT_LIGHT);
          tmp2.current = rounded;
          callback(rounded);
          const obj = themes(isPreview[18]);
        }
        if (closure_4) {
          const _Math = Math;
          const tmp11 = arg1 < closure_8 + Math.ceil(deviceWidth / (ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
          if (tmp11) {
            const result1 = sharedValue1.set(true);
          }
          const value = sharedValue1.get();
          let tmp17 = !value;
          if (!value) {
            tmp17 = !tmp11;
          }
          const result2 = sharedValue.set(tmp17);
        }
      };
      items5[1] = tmp17(currentThemeIndex(tmp3[17]), obj5);
      obj3[0] = items5;
      tmp11Result = tmp11(sharedValue, obj3);
    }
    const obj7 = { children: null };
    obj7[0] = tmp11Result;
    let tmp17Result = tmp17(tmp12, obj7);
    obj8 = { animated: true, style: null, variant: "text-sm/medium", children: null };
    const items6 = [animatedStyles.headerSecondary, tmp.textCentered];
    obj8[1] = items6;
    if (isPreview) {
      if (themes[currentThemeIndex].type !== tmp2(tmp3[13]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
        const intl2 = tmp2(tmp3[19]).intl;
        let stringResult = intl2.string(tmp2(tmp3[19]).t.VqGKm0);
      }
      obj8[3] = stringResult;
      tmp17Result = tmp17(tmp24, obj8);
      const obj9 = { children: null };
      if (isRefreshEnabled) {
        const items7 = [tmp17Result, ];
        const obj10 = { style: null, children: null };
        obj10[0] = tmp.labelGroup;
        const items8 = [tmp11Result, tmp17Result];
        obj10[1] = items8;
        items7[1] = tmp11(tmp12, obj10);
        obj9[0] = items7;
        let tmp28 = obj9;
      } else {
        const items9 = [tmp11Result, tmp17Result, tmp17Result];
        obj9[0] = items9;
        tmp28 = obj9;
      }
      const obj11 = { style: null, children: null };
      obj11[0] = tmp.container;
      const obj12 = { style: null, children: null };
      obj12[0] = tmp.floatingNuxContainer;
      const obj13 = { style: null, children: null };
      const items10 = [tmp.floatingNux, animatedStyle, , ];
      ({ bgSurfaceOverlay: arr12[2], borderFaint: arr12[3] } = animatedStyles);
      obj13[0] = items10;
      const obj14 = { style: null, source: null, size: null };
      const items11 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      obj14[0] = items11;
      obj14[1] = currentThemeIndex(tmp3[20]);
      obj14[2] = tmp2(tmp3[5]).IconSizes.REFRESH_SMALL_16;
      const items12 = [tmp17(sharedValue1, obj14), ];
      const obj15 = { animated: true, style: null, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: null };
      const items13 = [animatedStyles.textNormal, tmp.uppercase];
      obj15[1] = items13;
      const intl3 = tmp2(tmp3[19]).intl;
      obj15[4] = intl3.string(tmp2(tmp3[19]).t.y2b7CA);
      items12[1] = tmp17(tmp2(tmp3[15]).Text, obj15);
      obj13[1] = items12;
      obj12[1] = tmp11(currentThemeIndex(tmp3[4]).View, obj13);
      const items14 = [tmp17(tmp12, obj12), tmp11(sharedValue, tmp28)];
      obj11[1] = items14;
      return tmp11(tmp12, obj11);
    }
    const intl = tmp2(tmp3[19]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[19]).t;
    if (themes.isSynced) {
      stringResult = string(t.lhV0Y2);
    } else {
      stringResult = string(t.d5Gu9A);
    }
  }
  tmp11Result = tmp17(onThemeSelected, {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset) => {
      obj = { children: ref(currentThemeIndex(isPreview[10]), obj) };
      closure_0 = arg1;
      obj = {
        themePreset,
        isPreview,
        isSelected: arg1 === currentThemeIndex,
        onPress() {
          return closure_1_5(closure_0);
        }
      };
      return ref(closure_1_4, obj, "theme-" + arg1);
    })
  });
};