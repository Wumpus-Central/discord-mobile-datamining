// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx
import applyDefault from "../../../../../../_runtime/00012_apply.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import MobileThemesUtils from "../../../../client_themes/native/MobileThemesUtils.tsx";
import timing_timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import _modDef11153 from "../../../../../../_runtime/metro/11153__.js";
import PaginationDefault from "../../../../../../_runtime/11629_Pagination.js";
import HexagonCampaignThemeLegalDefault from "../../../../hexagon_campaign/native/HexagonCampaignThemeLegal.tsx";
import _modDef17782 from "../../../../../../_runtime/metro/17782__.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SettingsAppearanceConstants from "../SettingsAppearanceConstants.tsx";
import 01652__ from "../../../../../../_runtime/metro/01652__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6 } = get_ActivityIndicator);
let ThemeTypes = fn(1072).ThemeTypes;
const HexagonCampaignConstants = fn(5268);
({ HexagonCampaignPerk: closure_9, HexagonCampaignPerkAvailability: closure_10 } = HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let closure_14 = module_1652.createAnimatedComponent(fn(1187).Icon);
const createStyles = fn(5243);
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
let closure_16 = { code: "(function SettingsAppearanceThemeCarouselTsx1(){let[badgeOpacity]=this.__closure;return{opacity:badgeOpacity.get()};})" };
let closure_17 = { code: "(function SettingsAppearanceThemeCarouselTsx2(){let[withTiming,isOnyxNuxVisible,timingStandard]=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?'auto':'none'};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default function SettingsAppearanceThemeCarousel(themes) {
  themes = themes.themes;
  _require = themes;
  const currentThemeIndex = themes.currentThemeIndex;
  importDefault = currentThemeIndex;
  const isPreview = themes.isPreview;
  dependencyMap = isPreview;
  const defaultIndex = themes.defaultIndex;
  const deviceWidth = themes.deviceWidth;
  ({ animatedStyles, hasOnyxNux: closure_5, onThemeSelected } = themes);
  let isThumbstickScrollDevice;
  let sharedValue2;
  closure_18 = undefined;
  let tmp = isThumbstickScrollDevice();
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const ref = deviceWidth.useRef(null);
  ThemeTypes = deviceWidth.useRef(defaultIndex);
  items = [themes];
  constants = deviceWidth.useMemo(() => {
    const findIndexResult = _undefined.findIndex((theme) => theme.theme === constants.ONYX);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  let obj = require("useIsScreenReaderEnabled");
  const sharedValue = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(false);
  let obj3 = require("../../../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const obj4 = require("../../../../../../_runtime/metro/01652__.js");
  let result = require("MobileThemesUtils").isHexagonCampaignMobileTheme(themes[currentThemeIndex]);
  c12 = result;
  const items1 = [themes];
  const memo = deviceWidth.useMemo(() => _undefined.some(MobileThemesUtils.isHexagonCampaignMobileTheme), items1);
  const items2 = [themes];
  const memo1 = deviceWidth.useMemo(() => _undefined.findIndex(MobileThemesUtils.isHexagonCampaignMobileTheme), items2);
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
  closure_16 = tmp14;
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
  const obj5 = require("MobileThemesUtils");
  let tmp18 = memo;
  if (memo) {
    if (!isThumbstickScrollDevice) {
      isThumbstickScrollDevice = isScreenReaderEnabled;
    }
    if (!isThumbstickScrollDevice) {
      isThumbstickScrollDevice = tmp2(1624).isThumbstickScrollDevice;
    }
    tmp18 = isThumbstickScrollDevice;
  }
  const trackHexagonCampaignContentViewed = require("HexagonCampaignAnalytics").useTrackHexagonCampaignContentViewed(tmp2(5278).QuestContent.CLIENT_THEME_SETTINGS, tmp2(16967).HexagonCampaignContentSurface.THEME_PICKER, tmp18);
  const tmp2Result = require("HexagonCampaignAnalytics");
  const hexagonCampaignPerkAvailability = require("HexagonCampaignPerkAvailability").useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, "SettingsAppearanceThemeCarousel");
  const tmp20 = constants;
  const tmp2Result7 = require("HexagonCampaignPerkAvailability");
  let num2 = 0;
  if (result) {
    num2 = 1;
  }
  sharedValue2 = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(num2);
  const items3 = [result, sharedValue2];
  const effect = obj2.useEffect(() => {
    let num = 0;
    if (c12) {
      num = 1;
    }
    const result = sharedValue2.set(timing_timing.withTiming(num, timingPresets.timingStandard));
  }, items3);
  const tmp2Result8 = require("../../../../../../_runtime/metro/01652__.js");
  const items4 = [closure_16, sharedValue2];
  _require = undefined;
  [tmp24, tmp25] = items4;
  class SettingsAppearanceThemeCarouselTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items5 = [tmp25];
  SettingsAppearanceThemeCarouselTsx1.__closure = items5;
  SettingsAppearanceThemeCarouselTsx1.__workletHash = 10804085890430;
  SettingsAppearanceThemeCarouselTsx1.__initData = tmp24;
  const items6 = [sharedValue, sharedValue1];
  const animatedStyle = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(SettingsAppearanceThemeCarouselTsx1);
  const effect1 = obj2.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(false);
      const result1 = sharedValue1.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items6);
  const items7 = [onThemeSelected];
  closure_18 = obj2.useMemo(() => applyDefault.debounce(onThemeSelected, 180), items7);
  const items8 = [isPreview, onThemeSelected, currentThemeIndex];
  const callback = obj2.useCallback((themePreset) => {
    const index = themePreset.index;
    return sharedValue1(_undefined2(isPreview[20]), {
      themePreset: themePreset.item,
      isPreview,
      isSelected: index === _undefined2,
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
  }, items8);
  const tmp2Result9 = require("../../../../../../_runtime/metro/01652__.js");
  const items9 = [sharedValue2, require("timing/timing").withTiming, sharedValue, require("timingPresets").timingStandard];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp29, tmp30, tmp31, tmp32] = items9;
  class SettingsAppearanceThemeCarouselTsx2 {
    constructor() {
      obj = closure_1;
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 1;
      }
      obj1 = { opacity: tmp(num, closure_2), pointerEvents: null };
      str = "none";
      if (obj.get()) {
        str = "auto";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const items10 = [tmp30, tmp31, tmp32];
  SettingsAppearanceThemeCarouselTsx2.__closure = items10;
  SettingsAppearanceThemeCarouselTsx2.__workletHash = 8724897694824;
  SettingsAppearanceThemeCarouselTsx2.__initData = tmp29;
  const animatedStyle1 = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(SettingsAppearanceThemeCarouselTsx2);
  const obj6 = { style: tmp.titleContainer, children: null };
  const tmp2Result10 = require("../../../../../../_runtime/metro/01652__.js");
  let tmp36 = null;
  if (tmp2Result11.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
    const obj7 = { source: _modDef11153, style: animatedStyles.iconHeaderSecondary, size: tmp2(1187).IconSizes.SMALL_20 };
    tmp36 = sharedValue1(rounded, obj7);
  }
  const items11 = [tmp36, ];
  const obj8 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-xs/semibold", children: themes[currentThemeIndex].getName() };
  items11[1] = sharedValue1(require("Text/Text").Text, obj8);
  obj6.children = items11;
  if (!isScreenReaderEnabled) {
    if (!tmp2(1624).isThumbstickScrollDevice) {
      const obj9 = { children: null };
      const obj10 = { pointerEvents: "none", style: tmp.selectionBorder };
      const items12 = [tmp40(closure_5, obj10), ];
      const size = { ref, data: themes, renderItem: callback, style: null, width: null, height: null, loop: false, pagingEnabled: true, defaultIndex: null, onSnapToItem: null, scrollAnimationDuration: 200, onProgressChange: null };
      const obj11 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: tmp11.THEME_ITEM_HORIZONTAL_MARGIN };
      size.style = obj11;
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
          if (null != _undefined[rounded]) {
            num3 = 0;
            if (obj.isHexagonCampaignMobileTheme(tmp36)) {
              num3 = 1;
            }
            obj = MobileThemesUtils;
          }
          const result1 = sharedValue2.set(timing_timing.withTiming(num3, timingPresets.timingStandard));
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
      items12[1] = tmp40(PaginationDefault, size);
      obj9.children = items12;
      let tmp40Result7 = tmp34(memo1, obj9);
    }
    const obj12 = { children: tmp40Result7 };
    const obj13 = { animated: true, style: null, variant: "body-sm/medium", children: null };
    const items13 = [animatedStyles.headerSecondary, tmp.textCentered];
    obj13.style = items13;
    if (isPreview) {
      if (tmp2Result12.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
        const intl2 = tmp2(1113).intl;
        let stringResult = intl2.string(tmp2(1113).t.VqGKm0);
      }
      obj13.children = stringResult;
      const tmp40Result4 = tmp40(tmp46, obj13);
      let tmp34Result3 = tmp40Result4;
      if (memo) {
        const obj14 = { style: tmp.hintContainer, children: null };
        let hidden = !result;
        if (!result) {
          hidden = tmp.hidden;
        }
        const obj16 = { style: hidden, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
        let str = "none";
        if (result) {
          str = "auto";
        }
        obj16.pointerEvents = str;
        obj16.accessibilityElementsHidden = !result;
        let str2 = "no-hide-descendants";
        if (result) {
          str2 = "auto";
        }
        obj16.importantForAccessibility = str2;
        const obj17 = { animatedStyles };
        obj16.children = tmp40(HexagonCampaignThemeLegalDefault, obj17);
        const items14 = [tmp40(closure_5, obj16), ];
        let tmp40Result5 = !result;
        if (!result) {
          const obj18 = { style: tmp.hintOverlay, children: tmp40Result4 };
          tmp40Result5 = tmp40(closure_5, obj18);
        }
        items14[1] = tmp40Result5;
        obj14.children = items14;
        tmp34Result3 = tmp34(closure_5, obj14);
      }
      const obj19 = { style: tmp.swatchesGroup, children: null };
      const obj20 = { style: null, children: null };
      const items15 = [tmp.badgeSlot, animatedStyle];
      obj20.style = items15;
      let tmp40Result6 = result;
      if (result) {
        tmp40Result6 = hexagonCampaignPerkAvailability !== sharedValue.LOCKED;
      }
      if (tmp40Result6) {
        const obj21 = { theme: ThemeTypes.DARK, children: null };
        const obj22 = { perk: tmp20.CLIENT_THEME, variant: "expressive" };
        obj21.children = tmp40(tmp53(16990), obj22);
        tmp40Result6 = tmp40(tmp2(5314).ThemeContextProvider, obj21);
      }
      const obj23 = { children: null };
      obj20.children = tmp40Result6;
      const items16 = [tmp40(module_1652.View, obj20), tmp40Result];
      obj19.children = items16;
      const items17 = [tmp34(closure_5, obj19), ];
      const obj24 = { style: tmp.labelGroup, children: null };
      const items18 = [tmp41, tmp34Result3];
      obj24.children = items18;
      items17[1] = tmp34(closure_5, obj24);
      obj23.children = items17;
      const obj25 = { style: tmp.container, children: null };
      const obj26 = { style: tmp.floatingNuxContainer, children: null };
      tmp2Result12 = tmp2(5481);
      const obj27 = { style: null, children: null };
      const items19 = [tmp.floatingNux, animatedStyle1, , ];
      ({ bgSurfaceOverlay: arr21[2], borderFaint: arr21[3] } = animatedStyles);
      obj27.style = items19;
      const obj28 = { style: null, source: null, size: null };
      const items20 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      obj28.style = items20;
      obj28.source = _modDef17782;
      obj28.size = tmp2(1187).IconSizes.REFRESH_SMALL_16;
      const items21 = [tmp40(rounded, obj28), ];
      const obj29 = { animated: true, style: null, variant: "body-sm/medium", maxFontSizeMultiplier: 1.5, children: null };
      const items22 = [animatedStyles.textNormal, tmp.uppercase];
      obj29.style = items22;
      const intl3 = tmp2(1113).intl;
      obj29.children = intl3.string(tmp2(1113).t.y2b7CA);
      items21[1] = tmp40(tmp2(5866).Text, obj29);
      obj27.children = items21;
      obj26.children = tmp34(module_1652.View, obj27);
      const items23 = [tmp40(closure_5, obj26), tmp34(memo1, obj23)];
      obj25.children = items23;
      return tmp34(closure_5, obj25);
    }
    const intl = tmp2(1113).intl;
    const string = intl.string;
    const t = tmp2(1113).t;
    if (themes.isSynced) {
      stringResult = string(t.lhV0Y2);
    } else {
      stringResult = string(t.d5Gu9A);
    }
    tmp40Result = tmp40(closure_5, obj12);
  }
  tmp2Result11 = require("MobileThemesUtils");
  tmp40Result7 = tmp40(onThemeSelected, {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      const obj = {
        children: sharedValue1(_undefined2(isPreview[20]), {
          themePreset,
          isPreview,
          isSelected: index === _undefined2,
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
        children: sharedValue1(_undefined2(isPreview[20]), {
          themePreset,
          isPreview,
          isSelected: index === _undefined2,
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