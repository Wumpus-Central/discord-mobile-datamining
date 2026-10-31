// === Module 17251: SettingsAppearanceThemeCarousel ===

// Module 17251 (SettingsAppearanceThemeCarousel)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5250 */;
import timing from "timing" /* 5254 */;
import timingPresets from "timingPresets" /* 5257 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 17252 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const ThemeTypes = fn(1072).ThemeTypes;
const HexagonCampaignConstants = fn(5039);
({ HexagonCampaignPerk: closure_9, HexagonCampaignPerkAvailability: c10 } = HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let closure_14 = ReanimatedRexport.createAnimatedComponent(fn(1187).Icon);
const createStyles = fn(5014);
let obj = { container: { gap: nativeDefault.space.PX_24, alignItems: "center" }, textCentered: { textAlign: "center" }, hintContainer: { alignSelf: "stretch" }, hintOverlay: { position: "absolute", top: 0, left: 0, right: 0 }, hidden: { opacity: 0 }, labelGroup: null, swatchesGroup: null, badgeSlot: null, titleContainer: null, floatingNuxContainer: null, floatingNux: null, arrowLeft: null, uppercase: null, selectionBorder: null, a11yThemeList: null, a11yThemeListScroll: null };
let obj3 = { gap: nativeDefault.space.PX_24, alignItems: "center" };
obj.labelGroup = { gap: nativeDefault.space.PX_4, alignItems: "center" };
let obj4 = { gap: nativeDefault.space.PX_4, alignItems: "center" };
obj.swatchesGroup = { gap: nativeDefault.space.PX_12, alignItems: "center" };
let obj5 = { gap: nativeDefault.space.PX_12, alignItems: "center" };
obj.badgeSlot = { height: nativeDefault.space.PX_16, justifyContent: "center" };
let obj6 = { height: nativeDefault.space.PX_16, justifyContent: "center" };
obj.titleContainer = { minHeight: 20, marginTop: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
let obj7 = { minHeight: 20, marginTop: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj.floatingNuxContainer = { position: "absolute", left: nativeDefault.space.PX_24 };
let obj9 = { borderRadius: nativeDefault.radii.lg, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_4, paddingRight: nativeDefault.space.PX_8 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj9.shadowColor = "#000000";
obj.floatingNux = obj9;
let obj10 = { transform: null };
let items = [{ rotate: "90deg" }];
obj10.transform = items;
obj.arrowLeft = obj10;
obj.uppercase = { textTransform: "uppercase" };
let size = { position: "absolute", alignSelf: "center", width: SettingsAppearanceConstants.THEME_ITEM_WIDTH, height: SettingsAppearanceConstants.THEME_ITEM_HEIGHT, borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, borderWidth: 2 };
obj.selectionBorder = size;
obj.a11yThemeList = { flexDirection: "row" };
obj.a11yThemeListScroll = { flexGrow: 0 };
let closure_15 = createStyles.createStyles(obj);
let __initData = { code: "function SettingsAppearanceThemeCarouselTsx1(){const{badgeOpacity}=this.__closure;return{opacity:badgeOpacity.get()};}" };
let closure_17 = { code: "function SettingsAppearanceThemeCarouselTsx2(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?'auto':'none'};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default function SettingsAppearanceThemeCarousel(themes) {
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  const isPreview = themes.isPreview;
  const defaultIndex = themes.defaultIndex;
  const deviceWidth = themes.deviceWidth;
  ({ animatedStyles, hasOnyxNux: closure_5, onThemeSelected } = themes);
  let isThumbstickScrollDevice;
  let sharedValue2;
  closure_18 = undefined;
  let tmp = isThumbstickScrollDevice();
  const isScreenReaderEnabled = themes(isPreview[11]).useIsScreenReaderEnabled();
  deviceWidth.useRef(null);
  const ref = deviceWidth.useRef(defaultIndex);
  const items = [themes];
  constants = deviceWidth.useMemo(() => {
    const findIndexResult = themes.findIndex((theme) => theme.theme === constants.ONYX);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  let obj = themes(isPreview[11]);
  const sharedValue = themes(isPreview[7]).useSharedValue(false);
  let obj3 = themes(isPreview[7]);
  const sharedValue1 = themes(isPreview[7]).useSharedValue(false);
  const obj4 = themes(isPreview[7]);
  let result = themes(isPreview[12]).isHexagonCampaignMobileTheme(themes[currentThemeIndex]);
  c12 = result;
  const items1 = [themes];
  const memo = deviceWidth.useMemo(() => themes.some(MobileThemesUtils.isHexagonCampaignMobileTheme), items1);
  const items2 = [themes];
  const memo1 = deviceWidth.useMemo(() => themes.findIndex(MobileThemesUtils.isHexagonCampaignMobileTheme), items2);
  let rounded = Math.ceil(deviceWidth / (ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN));
  const tmp13 = defaultIndex(deviceWidth.useState(() => {
    let tmp3 = memo1 >= 0;
    if (tmp3) {
      const _Math = Math;
      tmp3 = Math.abs(tmp - tmp2) < rounded / 2;
    }
    return tmp3;
  }), 2);
  isThumbstickScrollDevice = tmp13[0];
  __initData = tmp14;
  let tmp15 = !isThumbstickScrollDevice;
  if (!isThumbstickScrollDevice) {
    let tmp16 = memo1 >= 0;
    if (tmp16) {
      let _Math = Math;
      tmp16 = Math.abs(currentThemeIndex - memo1) < rounded / 2;
    }
    tmp15 = tmp16;
  }
  if (tmp15) {
    tmp14(true);
  }
  const obj5 = themes(isPreview[12]);
  let tmp18 = memo;
  if (memo) {
    if (!isThumbstickScrollDevice) {
      isThumbstickScrollDevice = isScreenReaderEnabled;
    }
    if (!isThumbstickScrollDevice) {
      isThumbstickScrollDevice = tmp2(tmp3[15]).isThumbstickScrollDevice;
    }
    tmp18 = isThumbstickScrollDevice;
  }
  const trackHexagonCampaignContentViewed = themes(isPreview[13]).useTrackHexagonCampaignContentViewed(tmp2(tmp3[14]).QuestContent.CLIENT_THEME_SETTINGS, tmp2(tmp3[13]).HexagonCampaignContentSurface.THEME_PICKER, tmp18);
  const tmp2Result = themes(isPreview[13]);
  const hexagonCampaignPerkAvailability = themes(isPreview[16]).useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, "SettingsAppearanceThemeCarousel");
  const tmp20 = constants;
  const tmp2Result7 = themes(isPreview[16]);
  let num2 = 0;
  if (result) {
    num2 = 1;
  }
  sharedValue2 = themes(isPreview[7]).useSharedValue(num2);
  const items3 = [result, sharedValue2];
  const effect = obj2.useEffect(() => {
    let num = 0;
    if (c12) {
      num = 1;
    }
    const result = sharedValue2.set(timing.withTiming(num, timingPresets.timingStandard));
  }, items3);
  const tmp2Result8 = themes(isPreview[7]);
  class K {
    constructor() {
      obj = { opacity: closure_17.get() };
      return obj;
    }
  }
  K.__closure = { badgeOpacity: sharedValue2 };
  K.__workletHash = 11624303332519;
  K.__initData = __initData;
  const items4 = [sharedValue, sharedValue1];
  const animatedStyle = themes(isPreview[7]).useAnimatedStyle(K);
  const effect1 = obj2.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(false);
      const result1 = sharedValue1.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items4);
  const items5 = [onThemeSelected];
  closure_18 = obj2.useMemo(() => _modDef12.debounce(onThemeSelected, 180), items5);
  const items6 = [isPreview, onThemeSelected, currentThemeIndex];
  const callback = obj2.useCallback((themePreset) => {
    const index = themePreset.index;
    return sharedValue1(currentThemeIndex(isPreview[20]), {
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
  }, items6);
  const tmp2Result9 = themes(isPreview[7]);
  class Q {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[17]);
      obj2 = closure_10;
      num = 0;
      if (closure_10.get()) {
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
  const tmp2Result10 = themes(isPreview[7]);
  Q.__closure = { withTiming: themes(isPreview[17]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: themes(isPreview[18]).timingStandard };
  Q.__workletHash = 16840053984177;
  Q.__initData = sharedValue2;
  const animatedStyle1 = tmp2Result10.useAnimatedStyle(Q);
  const obj6 = { withTiming: themes(isPreview[17]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: themes(isPreview[18]).timingStandard };
  const obj7 = { style: tmp.titleContainer, children: null };
  let tmp30 = null;
  if (tmp2Result11.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
    const obj8 = { source: currentThemeIndex(tmp3[21]), style: animatedStyles.iconHeaderSecondary, size: tmp2(tmp3[8]).IconSizes.SMALL_20 };
    tmp30 = sharedValue1(rounded, obj8);
  }
  const items7 = [tmp30, ];
  const obj9 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-sm/semibold", children: themes[currentThemeIndex].getName() };
  items7[1] = sharedValue1(themes(isPreview[22]).Text, obj9);
  obj7.children = items7;
  if (!isScreenReaderEnabled) {
    if (!tmp2(tmp3[15]).isThumbstickScrollDevice) {
      const obj10 = { children: null };
      const obj11 = { pointerEvents: "none", style: tmp.selectionBorder };
      const items8 = [tmp34(closure_5, obj11), ];
      const size = { ref, data: themes, renderItem: callback, style: null, width: null, height: null, loop: false, pagingEnabled: true, defaultIndex: null, onSnapToItem: null, scrollAnimationDuration: 200, onProgressChange: null };
      const obj12 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: tmp11.THEME_ITEM_HORIZONTAL_MARGIN };
      size.style = obj12;
      size.width = tmp11.THEME_ITEM_WIDTH + tmp11.THEME_ITEM_HORIZONTAL_MARGIN;
      size.height = tmp11.THEME_ITEM_HEIGHT;
      size.defaultIndex = defaultIndex;
      size.onSnapToItem = onThemeSelected;
      size.onProgressChange = function onProgressChange(arg0, arg1) {
        let tmp = !isThumbstickScrollDevice;
        if (!isThumbstickScrollDevice) {
          let tmp3 = memo1 >= 0;
          if (tmp3) {
            const _Math = Math;
            tmp3 = Math.abs(arg1 - tmp2) < rounded / 2;
          }
          tmp = tmp3;
        }
        if (tmp) {
          closure_16(true);
        }
        rounded = Math.round(arg1);
        if (Math.abs(arg1 - rounded) > 0.01) {
          const result = sharedValue2.set(0);
        } else {
          let num3 = 0;
          if (null != themes[rounded]) {
            num3 = 0;
            if (obj.isHexagonCampaignMobileTheme(tmp36)) {
              num3 = 1;
            }
            obj = MobileThemesUtils;
          }
          const result1 = sharedValue2.set(timing.withTiming(num3, timingPresets.timingStandard));
        }
        if (rounded !== ref.current) {
          const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          tmp16.current = rounded;
          closure_18(rounded);
        }
        if (closure_1_5) {
          const _Math2 = Math;
          const tmp27 = arg1 < closure_9 + Math.ceil(deviceWidth / (SettingsAppearanceConstants.THEME_ITEM_WIDTH + SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
          if (tmp27) {
            const result3 = sharedValue1.set(true);
          }
          value = sharedValue1.get();
          let tmp33 = !value;
          if (!value) {
            tmp33 = !tmp27;
          }
          const result4 = sharedValue.set(tmp33);
        }
      };
      items8[1] = tmp34(currentThemeIndex(tmp3[23]), size);
      obj10.children = items8;
      let tmp34Result7 = tmp28(memo1, obj10);
    }
    const obj13 = { children: tmp34Result7 };
    const obj14 = { animated: true, style: null, variant: "text-sm/medium", children: null };
    const items9 = [animatedStyles.headerSecondary, tmp.textCentered];
    obj14.style = items9;
    if (isPreview) {
      if (tmp2Result12.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
        const intl2 = tmp2(tmp3[25]).intl;
        let stringResult = intl2.string(tmp2(tmp3[25]).t.VqGKm0);
      }
      obj14.children = stringResult;
      const tmp34Result4 = tmp34(tmp40, obj14);
      let tmp28Result3 = tmp34Result4;
      if (memo) {
        const obj15 = { style: tmp.hintContainer, children: null };
        let hidden = !result;
        if (!result) {
          hidden = tmp.hidden;
        }
        const obj17 = { style: hidden, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
        let str = "none";
        if (result) {
          str = "auto";
        }
        obj17.pointerEvents = str;
        obj17.accessibilityElementsHidden = !result;
        let str2 = "no-hide-descendants";
        if (result) {
          str2 = "auto";
        }
        obj17.importantForAccessibility = str2;
        const obj18 = { animatedStyles };
        obj17.children = tmp34(currentThemeIndex(tmp3[26]), obj18);
        const items10 = [tmp34(closure_5, obj17), ];
        let tmp34Result5 = !result;
        if (!result) {
          const obj19 = { style: tmp.hintOverlay, children: tmp34Result4 };
          tmp34Result5 = tmp34(closure_5, obj19);
        }
        items10[1] = tmp34Result5;
        obj15.children = items10;
        tmp28Result3 = tmp28(closure_5, obj15);
      }
      const obj20 = { style: tmp.swatchesGroup, children: null };
      const obj21 = { style: null, children: null };
      const items11 = [tmp.badgeSlot, animatedStyle];
      obj21.style = items11;
      let tmp34Result6 = result;
      if (result) {
        tmp34Result6 = hexagonCampaignPerkAvailability !== sharedValue.LOCKED;
      }
      if (tmp34Result6) {
        const obj22 = { variant: "overlay", perk: tmp20.CLIENT_THEME };
        tmp34Result6 = tmp34(tmp47(tmp3[27]), obj22);
      }
      const obj23 = { children: null };
      obj21.children = tmp34Result6;
      const items12 = [tmp34(currentThemeIndex(tmp3[7]).View, obj21), tmp34Result];
      obj20.children = items12;
      const items13 = [tmp28(closure_5, obj20), ];
      const obj24 = { style: tmp.labelGroup, children: null };
      const items14 = [tmp35, tmp28Result3];
      obj24.children = items14;
      items13[1] = tmp28(closure_5, obj24);
      obj23.children = items13;
      const obj25 = { style: tmp.container, children: null };
      const obj26 = { style: tmp.floatingNuxContainer, children: null };
      tmp2Result12 = tmp2(tmp3[12]);
      const obj27 = { style: null, children: null };
      const items15 = [tmp.floatingNux, animatedStyle1, , ];
      ({ bgSurfaceOverlay: arr17[2], borderFaint: arr17[3] } = animatedStyles);
      obj27.style = items15;
      const obj28 = { style: null, source: null, size: null };
      const items16 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      obj28.style = items16;
      obj28.source = currentThemeIndex(tmp3[28]);
      obj28.size = tmp2(tmp3[8]).IconSizes.REFRESH_SMALL_16;
      const items17 = [tmp34(rounded, obj28), ];
      const obj29 = { animated: true, style: null, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: null };
      const items18 = [animatedStyles.textNormal, tmp.uppercase];
      obj29.style = items18;
      const intl3 = tmp2(tmp3[25]).intl;
      obj29.children = intl3.string(tmp2(tmp3[25]).t.y2b7CA);
      items17[1] = tmp34(tmp2(tmp3[22]).Text, obj29);
      obj27.children = items17;
      obj26.children = tmp28(currentThemeIndex(tmp3[7]).View, obj27);
      const items19 = [tmp34(closure_5, obj26), tmp28(memo1, obj23)];
      obj25.children = items19;
      return tmp28(closure_5, obj25);
    }
    const intl = tmp2(tmp3[25]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[25]).t;
    if (themes.isSynced) {
      stringResult = string(t.lhV0Y2);
    } else {
      stringResult = string(t.d5Gu9A);
    }
    tmp34Result = tmp34(closure_5, obj13);
  }
  tmp2Result11 = themes(isPreview[12]);
  tmp34Result7 = tmp34(onThemeSelected, {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      const obj = {
        children: sharedValue1(currentThemeIndex(isPreview[20]), {
          themePreset,
          isPreview,
          isSelected: index === currentThemeIndex,
          onPress() {
            return onThemeSelected(closure_0);
          }
        })
      };
      closure_0 = index;
      return sharedValue1(closure_1_5, obj, "theme-" + index);
    })
  });
  const obj30 = {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      const obj = {
        children: sharedValue1(currentThemeIndex(isPreview[20]), {
          themePreset,
          isPreview,
          isSelected: index === currentThemeIndex,
          onPress() {
            return onThemeSelected(closure_0);
          }
        })
      };
      closure_0 = index;
      return sharedValue1(closure_1_5, obj, "theme-" + index);
    })
  };
};