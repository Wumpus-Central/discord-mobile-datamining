// === Module 16588: SettingsAppearanceThemePickerScreen ===

// Module 16588 (SettingsAppearanceThemePickerScreen)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1211 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1256 */;
import themes2 from "themes" /* 4991 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4996 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5050 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5200 */;
import timing from "timing" /* 5204 */;
import timingPresets from "timingPresets" /* 5207 */;
import Text_Text from "Text/Text" /* 5232 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6878 */;
import Pressables from "Pressables" /* 6906 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 13815 */;
import HexagonActionCreators from "HexagonActionCreators" /* 15828 */;
import HexagonCampaignPreviousPerkValues from "HexagonCampaignPreviousPerkValues" /* 16357 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 16358 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 16359 */;
import ThemeLightIcon from "ThemeLightIcon" /* 16589 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 16591 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4993 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1253 */;
import UserStore from "UserStore" /* 1392 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1208 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;

const require = globalThis.__r;

require = fn;
function needsHexagonCampaignEnrollment(themes) {
  let result = MobileThemesUtils.isHexagonCampaignMobileTheme(themes);
  if (result) {
    result = !HexagonCampaignUtils.isEnrolledInHexagonCampaign(UserStore.getCurrentUser(), HexagonCampaignPerk.CLIENT_THEME);
    const tmpResult = HexagonCampaignUtils;
  }
  return result;
}
const View = fn(17).View;
const ThemeConstants = fn(1210);
({ SystemTheme: map1, SystemThemeState: closure_14 } = ThemeConstants);
const HexagonCampaignPerk = fn(4994).HexagonCampaignPerk;
const ThemeTypes = fn(1098).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
let createStyles = fn(4969);
let obj2 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_24, marginBottom: null };
const PlatformUtils = fn(1384);
let num = 0;
if (!PlatformUtils.isIOS()) {
  num = nativeDefault.space.PX_16;
}
let obj4 = { container: obj2, landscapeContainer: { flexDirection: "row", gap: nativeDefault.space.PX_16 }, landscapePreview: { flex: 1 }, landscapeSelector: { flex: 1, justifyContent: "center", overflow: "hidden" }, segmentedControlContainer: null, textCentered: null };
obj2.marginBottom = num;
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj4.segmentedControlContainer = { width: "100%", gap: nativeDefault.space.PX_16, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj4.textCentered = { textAlign: "center" };
let closure_20 = createStyles.createStyles(obj4);
let items = [, , , ];
({ LIGHT: arr[0], DARK: arr[1], ONYX: arr[2], ASH: arr[3] } = ThemeTypes);
let closure_22 = items.map((item) => {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(item, nativeDefault.colors.CARD_SECONDARY_BG);
});
let cardSecondaryStops = items.map((item, index) => index);
createStyles = fn(4969);
let obj6 = { width: "100%", gap: nativeDefault.space.PX_16, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_24 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, items);
createStyles = fn(4969);
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_25 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, items);
createStyles = fn(4969);
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_26 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG }, items);
createStyles = fn(4969);
let obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_27 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST }, items);
createStyles = fn(4969);
let obj14 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_28 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, items);
createStyles = fn(4969);
let obj16 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_29 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_DEFAULT }, items);
createStyles = fn(4969);
let obj18 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_30 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, items);
createStyles = fn(4969);
const obj20 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_31 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_SUBTLE }, items);
createStyles = fn(4969);
const obj22 = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_32 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_MUTED }, items);
createStyles = fn(4969);
const obj24 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_33 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_MUTED }, items);
createStyles = fn(4969);
const obj26 = { borderColor: nativeDefault.colors.BORDER_MUTED };
let closure_34 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_STRONG }, items);
createStyles = fn(4969);
const obj28 = { borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_35 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_NORMAL }, items);
createStyles = fn(4969);
const obj30 = { borderColor: nativeDefault.colors.BORDER_NORMAL };
let closure_36 = createStyles.createAnimatedThemedStyles({ tintColor: nativeDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON }, items);
createStyles = fn(4969);
const obj32 = { tintColor: nativeDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON };
let closure_37 = createStyles.createAnimatedThemedStyles({ tintColor: nativeDefault.colors.TEXT_SUBTLE }, items);
createStyles = fn(4969);
const obj34 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_38 = createStyles.createAnimatedThemedStyles({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, items);
createStyles = fn(4969);
const obj36 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_39 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_BRAND }, items);
function getSegmentedControlItems() {
  const obj = { label: null, id: null, icon: null, page: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.K2sFfo);
  obj.id = ThemeTypes.LIGHT;
  obj.icon = constants(ThemeLightIcon.ThemeLightIcon, {});
  items = [obj, , ];
  const obj2 = { label: null, id: null, icon: null, page: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.b8Cei3);
  obj2.id = ThemeTypes.DARK;
  obj2.icon = constants(ThemeDarkIcon.ThemeDarkIcon, {});
  items[1] = obj2;
  const obj3 = { label: null, id: null, icon: null, page: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.Do4ZJx);
  obj3.id = ThemeTypes.ONYX;
  obj3.icon = constants(ThemeMidnightIcon.ThemeMidnightIcon, {});
  items[2] = obj3;
  return items;
}
const ReactCompilerGating = fn(558);
const __initData = { code: "function SettingsAppearanceThemePickerScreenTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
const __initData2 = { code: "function SettingsAppearanceThemePickerScreenTsx2(activeIndex_0){const{runOnJS,setPendingThemeIndex}=this.__closure;runOnJS(setPendingThemeIndex)(Math.round(activeIndex_0));}" };
const __initData3 = { code: "function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStops,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme_0=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme_0.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),cardSecondaryStops,cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(bgRaised,timingStandard)};}}" };
function ThemePicker(defaultIndex) {
  defaultIndex = defaultIndex.defaultIndex;
  _require = defaultIndex;
  const mobileThemes = defaultIndex.mobileThemes;
  const isPreview = defaultIndex.isPreview;
  const isSynced = defaultIndex.isSynced;
  ({ deviceWidth, canGoBack } = defaultIndex);
  const hasSaveButton = defaultIndex.hasSaveButton;
  const headerTitle = defaultIndex.headerTitle;
  const onSaveTheme = defaultIndex.onSaveTheme;
  const mode = defaultIndex.mode;
  c13 = undefined;
  closure_14 = undefined;
  c15 = undefined;
  let stateFromStores;
  c17 = undefined;
  let activeIndex;
  let activeIndex2;
  let memo2;
  let obj6;
  let first1;
  cardSecondaryStops = undefined;
  closure_24 = undefined;
  closure_25 = undefined;
  let callback1;
  let callback2;
  let callback3;
  let stateFromStores1;
  let callback4;
  ({ deviceHeight, themeSelector, hasOnyxNux } = defaultIndex);
  const tmp = memo2();
  const navigation = require("Link").useNavigation();
  let obj = require("Link");
  const analyticsLocations = mobileThemes(isPreview[33])(mobileThemes(isPreview[34]).CLIENT_THEMES_THEME_SELECTOR).analyticsLocations;
  const tmp9 = canGoBack(hasSaveButton.useState(defaultIndex), 2);
  const themeIndex = tmp9[0];
  closure_12 = tmp9[1];
  let tmp7 = mobileThemes(isPreview[33]);
  let str = "dark-content";
  if (obj3.isThemeDark(mobileThemes[defaultIndex].theme)) {
    str = "light-content";
  }
  obj3 = require("themes");
  [tmp12, c13] = canGoBack(hasSaveButton.useState(str), 2);
  const tmp8Result = canGoBack(hasSaveButton.useState(str), 2);
  closure_14 = tmp14;
  const headerHeight = require("module_6931").useHeaderHeight();
  const tmp3Result = require("module_6931");
  [tmp16, c15] = canGoBack(hasSaveButton.useState(0), 2);
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = obj2.useMemo(getSegmentedControlItems, []);
  const memo1 = obj2.useMemo(() => obj6.findIndex((item) => item === theme.theme), []);
  const tmp8Result4 = canGoBack(hasSaveButton.useState(0), 2);
  items = [themeIndex];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => closure_0(isPreview[28]).isThemeLight(first.systemTheme) ? stateFromStores.LIGHT : stateFromStores.DARK);
  const tmp3Result9 = require("useStateFromStores");
  [tmp22, tmp23] = canGoBack(hasSaveButton.useState(memo1), 2);
  c17 = tmp23;
  const tmp8Result5 = canGoBack(hasSaveButton.useState(memo1), 2);
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState({ items: memo, pageWidth: tmp16, defaultIndex: memo1 });
  activeIndex = segmentedControlState.activeIndex;
  const tmp3Result10 = require("SegmentedControlState");
  function ee() {
    return activeIndex.get();
  }
  ee.__closure = { activeIndex };
  ee.__workletHash = 12670867470872;
  ee.__initData = __initData;
  let fn = function $(arg0) {
    ReanimatedRexport.runOnJS(c17)(Math.round(arg0));
  };
  const tmp3Result11 = require("ReanimatedRexport");
  fn.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, setPendingThemeIndex: tmp23 };
  fn.__workletHash = 2409373048953;
  fn.__initData = __initData2;
  const animatedReaction = tmp3Result11.useAnimatedReaction(ee, fn);
  let obj4 = { runOnJS: require("ReanimatedRexport").runOnJS, setPendingThemeIndex: tmp23 };
  let num = 1;
  if ("light" === mobileThemes[defaultIndex].theme) {
    num = 0;
  }
  activeIndex2 = segmentedControlState.activeIndex;
  if ("nitro" === themeSelector) {
    activeIndex2 = tmp3Result12.useSharedValue(num);
  }
  memo2 = obj2.useMemo(() => closure_0(isPreview[38]).hexWithOpacity(closure_0(isPreview[39]).OverlayColors.LIGHT, closure_0(isPreview[39]).OverlayOpacity.LEVEL_1), []);
  tmp3Result12 = require("ReanimatedRexport");
  class Pe {
    constructor() {
      tmp = mobileThemes;
      tmp2 = closure_14;
      if (closure_14) {
        value = closure_11;
      } else {
        tmp3 = closure_19;
        value = closure_19.get();
      }
      if (tmp2) {
        tmp5 = closure_0;
        tmp6 = closure_2;
        if (tmp[value].type !== closure_0(closure_2[27]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
          obj1 = { backgroundColor: null };
          tmp8 = closure_0;
          tmp9 = closure_2;
          obj5 = closure_0(closure_2[40]);
          tmp10 = closure_20;
          tmp11 = closure_0;
          tmp12 = closure_2;
          obj1.backgroundColor = obj5.withTiming(closure_20, closure_0(closure_2[41]).timingStandard);
          obj = obj1;
        }
        return obj;
      }
      obj = { backgroundColor: null };
      obj2 = closure_0(closure_2[40]);
      obj3 = closure_0(closure_2[37]);
      interpolateColorResult = obj3.interpolateColor(closure_19.get(), closure_23, closure_22);
      obj.backgroundColor = obj2.withTiming(interpolateColorResult, closure_0(closure_2[41]).timingStandard);
      return;
    }
  }
  const tmp3Result13 = require("ReanimatedRexport");
  Pe.__closure = { mobileThemes, isClientThemesSelector: "nitro" === themeSelector, currentThemeIndex: themeIndex, themeTypeIndex: activeIndex2, ClientThemeType: require("ClientThemesTypes").ClientThemeType, withTiming: require("timing").withTiming, interpolateColor: require("ReanimatedRexport").interpolateColor, cardSecondaryStops, cardSecondaryStyles: first1, timingStandard: require("timingPresets").timingStandard, bgRaised: memo2 };
  Pe.__workletHash = 16778869283384;
  Pe.__initData = __initData3;
  obj6 = { textNormal: null, textMuted: null, textBrand: null, borderFaint: null, borderStrong: null, borderNormal: null, headerPrimary: null, headerSecondary: null, activityIcon: null, bgModSubtle: null, bgModStrong: null, iconHeaderSecondary: null, iconInteractive: null, bgBasePrimary: null, bgSurfaceOverlay: null, bgSurfaceHigh: null, bgRaised: null };
  const animatedStyle = tmp3Result13.useAnimatedStyle(Pe);
  obj6.textNormal = stateFromStores1(activeIndex2);
  obj6.textMuted = closure_32(activeIndex2);
  obj6.textBrand = closure_39(activeIndex2);
  obj6.borderFaint = closure_33(activeIndex2);
  obj6.borderStrong = closure_34(activeIndex2);
  obj6.borderNormal = closure_35(activeIndex2);
  obj6.headerPrimary = callback4(activeIndex2);
  obj6.headerSecondary = closure_31(activeIndex2);
  obj6.activityIcon = closure_36(activeIndex2);
  obj6.bgModSubtle = closure_25(activeIndex2);
  obj6.bgModStrong = callback1(activeIndex2);
  obj6.iconHeaderSecondary = closure_37(activeIndex2);
  obj6.iconInteractive = closure_38(activeIndex2);
  obj6.bgBasePrimary = closure_24(activeIndex2);
  obj6.bgSurfaceOverlay = callback2(activeIndex2);
  obj6.bgSurfaceHigh = callback3(activeIndex2);
  obj6.bgRaised = animatedStyle;
  const tmp8Result6 = canGoBack(hasSaveButton.useState(false), 2);
  first1 = tmp8Result6[0];
  cardSecondaryStops = tmp8Result6[1];
  closure_24 = obj2.useRef(false);
  closure_25 = obj2.useRef(false);
  const items1 = [mode, analyticsLocations, isSynced];
  callback1 = obj2.useCallback((themes) => {
    const result = MobileThemesUtils.isHexagonCampaignMobileTheme(themes);
    if (result) {
      const result1 = HexagonCampaignPreviousPerkValues.saveHexagonCampaignPreviousClientTheme();
      const tmpResult = HexagonCampaignPreviousPerkValues;
    }
    if (null != mode) {
      const result2 = UserSettingsAppearanceThemeUtils.handleSaveSyncedModeTheme(themes, tmp5, analyticsLocations);
      const tmpResult4 = UserSettingsAppearanceThemeUtils;
    } else {
      UserSettingsAppearanceThemeUtils.handleSaveTheme(themes, analyticsLocations, isSynced);
      const tmpResult5 = UserSettingsAppearanceThemeUtils;
    }
    if (result) {
      const result3 = HexagonActionCreators.markHexagonCampaignPerkApplied(HexagonCampaignPerk.CLIENT_THEME);
      const tmpResult6 = HexagonActionCreators;
    }
  }, items1);
  _require = isSynced(function*(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp4;
            closure_1 = tmp8;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            closure_1_24.current = true;
            closure_1_23(true);
            closure_129_1 = false;
            c4 = 2;
            c5 = 3;
            c6 = 1;
            obj6 = { value: closure_0(isPreview[43]).ensureHexagonCampaignEnrollment(constants.CLIENT_THEME), done: false };
            return obj6;
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_1_24.current = false;
          closure_1_23(false);
          throw closure_3;
        } else {
          if (2 === tmp8) {
            c4 = 1;
            closure_129_1 = false;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_1_24.current = false;
            closure_1_23(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              callback1(closure_129_0);
              closure_129_1 = true;
            }
            c4 = 1;
          }
          c4 = 0;
          closure_1_24.current = false;
          closure_1_23(false);
          if (!closure_129_1) {
            const obj7 = { text: null };
            const intl = closure_0(isPreview[17]).intl;
            obj7.text = intl.string(closure_0(isPreview[17]).t.F8FvUy);
            mobileThemes(isPreview[44]).open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj7);
            const obj2 = mobileThemes(isPreview[44]);
          }
          c6 = 3;
          const obj8 = { value: closure_129_1, done: true };
          return obj8;
        }
      } catch (tmp47) {
        closure_3 = tmp47;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp47;
        } else if (tmp2 === tmp49) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const items2 = [callback1];
  callback2 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const items3 = [themeIndex, "nitro" === themeSelector, activeIndex2, onSaveTheme, mobileThemes, navigation, callback1, callback2];
  callback3 = obj2.useCallback(isSynced(function*() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            function close() {
              if (null == closure_1_7) {
                navigation.goBack();
              } else {
                tmp();
              }
            }
            closure_128_0 = close;
            if (ref.current) {
              c2 = 3;
            } else {
              if (closure_14) {
                let tmp12 = mobileThemes[first];
              } else {
                tmp12 = mobileThemes[activeIndex2.get(activeIndex2)];
              }
              if (needsHexagonCampaignEnrollment(tmp12)) {
                c1 = 1;
                c2 = 1;
                const obj4 = { value: callback2(tmp12), done: false };
                return obj4;
              } else {
                callback1(tmp12);
                close();
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value) {
            closure_128_0();
          }
        }
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp19) {
        c2 = tmp;
        throw tmp19;
      }
    }
  }), items3);
  let obj5 = { mobileThemes, isClientThemesSelector: "nitro" === themeSelector, currentThemeIndex: themeIndex, themeTypeIndex: activeIndex2, ClientThemeType: require("ClientThemesTypes").ClientThemeType, withTiming: require("timing").withTiming, interpolateColor: require("ReanimatedRexport").interpolateColor, cardSecondaryStops, cardSecondaryStyles: first1, timingStandard: require("timingPresets").timingStandard, bgRaised: memo2 };
  const items4 = [onSaveTheme];
  stateFromStores1 = require("useStateFromStores").useStateFromStores(items4, () => onSaveTheme.hasHiddenHexagonCampaignPreset);
  const items5 = [hasSaveButton, mobileThemes, themeIndex, defaultIndex, isPreview, mode, stateFromStores1];
  callback4 = obj2.useCallback(() => {
    if (hasSaveButton) {
      return null;
    } else {
      if (!isPreview) {
        if (null == mode) {
          if (!stateFromStores1) {
            let tmp7 = tmp3;
          } else {
            tmp7 = null;
          }
        } else {
          tmp7 = null;
        }
      } else {
        MobileThemesUtils;
        tmp7 = null;
      }
      return tmp7;
    }
  }, items5);
  const items6 = [navigation, callback4, callback1, callback2];
  const effect = obj2.useEffect(() => {
    closure_0 = isSynced(function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp2;
              closure_129_0 = closure_0;
              if (!ref2.current) {
                const tmp14 = callback4();
                if (null != tmp14) {
                  if (needsHexagonCampaignEnrollment(tmp14)) {
                    closure_0.preventDefault();
                    if (!ref.current) {
                      c3 = 1;
                      c4 = 1;
                      const obj4 = { value: callback2(tmp14), done: false };
                      return obj4;
                    }
                  } else {
                    callback1(tmp14);
                  }
                }
              }
              c4 = 3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            ref2.current = true;
            navigation.dispatch(closure_129_0.data.action);
          }
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp22) {
          c4 = tmp;
          throw tmp22;
        }
      }
    });
    return navigation.addListener("beforeRemove", function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  }, items6);
  const items7 = [themeIndex, callback3, analyticsLocations, mobileThemes, isSynced, isPreview, headerTitle, "nitro" === themeSelector, navigation, , , , , , , , ];
  ({ textNormal: arr8[9], textBrand: arr8[10] } = obj6);
  items7[11] = canGoBack;
  items7[12] = onSaveTheme;
  items7[13] = hasSaveButton;
  items7[14] = tmp22;
  items7[15] = stateFromStores;
  items7[16] = first1;
  const effect1 = obj2.useEffect(() => {
    let tmp3 = first1;
    if (!first1) {
      let result = closure_14;
      if (closure_14) {
        result = isPreview;
      }
      if (result) {
        result = closure_0(isPreview[25]).isNitroGatedMobileTheme(tmp);
        let obj = closure_0(isPreview[25]);
      }
      tmp3 = result;
    }
    closure_0 = tmp3;
    let fn;
    if (!obj2.isIOS()) {
      fn = () => closure_1_17(headerTitle, {});
    }
    let obj3 = {
      headerBackground: fn,
      headerTransparent: true,
      headerBackVisible: false,
      headerLeft() {
        if (canGoBack) {
          let theme = stateFromStores;
          let tmp4;
          if (null != closure_1_1[first]) {
            if ("system" !== tmp3.theme) {
              theme = tmp3.theme;
            }
            tmp4 = theme;
          }
          const obj = { theme: tmp4, children: null };
          const obj2 = { navigation };
          obj.children = c17(mobileThemes(isPreview[46]), obj2);
          return c17(closure_0(isPreview[45]).ThemeContextProvider, obj);
        } else {
          return null;
        }
      },
      headerTitle() {
        const obj = { animated: true, variant: "redesign/heading-18/bold", style: textNormal.textNormal, children: null };
        let stringResult = headerTitle;
        if (headerTitle == null) {
          const intl = closure_0(isPreview[17]).intl;
          stringResult = intl.string(closure_0(isPreview[17]).t.XAS5Pi);
        }
        obj.children = stringResult;
        return c17(closure_0(isPreview[47]).Text, obj);
      },
      headerTitleAlign: "center",
      headerRight: null
    };
    if (hasSaveButton) {
      const fn2 = () => {
        if (first1) {
          let tmpResult = constants(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "small" });
        } else {
          const obj = { hitSlop: 8, disabled: null, onPress: null, children: null };
          let obj2 = result;
          obj.disabled = result;
          obj.onPress = callback3;
          items = [obj6.textBrand, ];
          if (result) {
            obj2 = { opacity: 0.4 };
          }
          const obj3 = { animated: true, variant: "text-md/semibold", style: null, children: null };
          items[1] = obj2;
          obj3.style = items;
          const intl = util.intl;
          obj3.children = intl.string(util.t.i4jeWR);
          obj.children = constants(Text_Text.Text, obj3);
          tmpResult = constants(Pressables.PressableOpacity, obj);
        }
        return tmpResult;
      };
    }
    obj3.headerRight = fn2;
    navigation.setOptions(obj3);
    obj2 = closure_0(isPreview[16]);
  }, items7);
  const tmp3Result14 = require("useStateFromStores");
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => !canGoBack);
  const items8 = [themeIndex];
  let rounded = deviceWidth;
  const callback5 = obj2.useCallback((mobileThemesIndex) => {
    if (mobileThemesIndex !== first) {
      closure_12(mobileThemesIndex);
      const result = ClientThemesBackgroundActionCreators.updateMobilePendingThemeIndex(mobileThemesIndex);
    }
  }, items8);
  if (deviceWidth > deviceHeight) {
    const _Math = Math;
    rounded = Math.floor(deviceWidth / 2);
  }
  if ("nitro" === themeSelector) {
    let obj7 = { themes: mobileThemes, currentThemeIndex: themeIndex, isPreview, isSynced, defaultIndex, deviceWidth: rounded, animatedStyles: obj6, hasOnyxNux, onThemeSelected: callback5 };
    let tmp47 = c17(tmp6(tmp4[52]), obj7);
    let tmp48 = c17;
  } else {
    let tmp43;
    if (null != mobileThemes[tmp22]) {
      let theme = stateFromStores;
      if ("system" !== tmp41.theme) {
        theme = tmp41.theme;
      }
      tmp43 = theme;
    }
    let obj8 = { style: tmp.segmentedControlContainer, onLayout: callback, children: null };
    const obj9 = { theme: tmp43, children: null };
    const obj10 = { variant: "experimental_Large", state: segmentedControlState };
    obj9.children = c17(tmp3(tmp4[53]).SegmentedControl, obj10);
    const items9 = [c17(tmp3(tmp4[45]).ThemeContextProvider, obj9), ];
    const obj11 = { animated: true, variant: "text-xs/medium", style: null, children: null };
    const items10 = [obj6.headerSecondary, tmp.textCentered];
    obj11.style = items10;
    let intl = tmp3(tmp4[17]).intl;
    obj11.children = intl.string(tmp3(tmp4[17]).t.d5Gu9A);
    items9[1] = c17(tmp3(tmp4[47]).Text, obj11);
    obj8.children = items9;
    tmp47 = activeIndex(headerTitle, obj8);
    tmp48 = c17;
  }
  const items11 = [themeIndex, mobileThemes, activeIndex2, stateFromStores];
  const effect2 = obj2.useEffect(() => {
    if ("system" === mobileThemes[first].theme) {
      let DARK = stateFromStores;
      if (stateFromStores == null) {
        DARK = ThemeTypes.DARK;
      }
      let theme = DARK;
    } else {
      theme = tmp.theme;
    }
    const result = activeIndex2.set(items.indexOf(theme));
    let str = "light-content";
    if (theme === ThemeTypes.LIGHT) {
      str = "dark-content";
    }
    _undefined(str);
  }, items11);
  const memo3 = obj2.useMemo(tmp6(tmp4[54]), []);
  const obj12 = { themes: mobileThemes, themeIndex, animatedStyles: obj6, data: memo3, useGradientBackground: "nitro" === themeSelector, isNitroLocked: null };
  let result = tmp14;
  const tmp3Result15 = require("useNavigatorBackPressHandler");
  if ("nitro" === themeSelector) {
    result = isPreview;
  }
  if (result) {
    result = tmp3(tmp4[25]).isNitroGatedMobileTheme(mobileThemes[themeIndex]);
    const tmp3Result16 = tmp3(tmp4[25]);
  }
  obj12.isNitroLocked = result;
  const tmp48Result = tmp48(mobileThemes(isPreview[55]), obj12);
  const items12 = [{ width: "100%", height: "100%" }, ];
  let bgBasePrimary = !tmp14;
  if ("nitro" !== themeSelector) {
    bgBasePrimary = obj6.bgBasePrimary;
  }
  const obj13 = { style: items12, children: null };
  items12[1] = bgBasePrimary;
  let tmp48Result2 = null;
  if ("nitro" === themeSelector) {
    const obj14 = { themes: mobileThemes, themeIndex, isDimmed: true };
    tmp48Result2 = tmp48(tmp6(tmp4[56]), obj14);
  }
  const items13 = [tmp48Result2, ];
  const items14 = [tmp.container, , ];
  let landscapeContainer = tmp2;
  if (deviceWidth > deviceHeight) {
    landscapeContainer = tmp.landscapeContainer;
  }
  const obj15 = { bottom: true, style: items14, children: null };
  items14[1] = landscapeContainer;
  items14[2] = { marginTop: headerHeight };
  const items15 = [tmp48(mobileThemes(isPreview[58]), { animated: true, barStyle: tmp12 }), ];
  const obj16 = { children: null };
  if (deviceWidth > deviceHeight) {
    const obj17 = { style: tmp.landscapePreview, children: tmp48Result };
    const items16 = [tmp48(headerTitle, obj17), ];
    const obj18 = { style: tmp.landscapeSelector, children: tmp47 };
    items16[1] = tmp48(headerTitle, obj18);
    obj16.children = items16;
    let tmp58 = obj16;
  } else {
    const items17 = [tmp48Result, tmp47];
    obj16.children = items17;
    tmp58 = obj16;
  }
  items15[1] = activeIndex(activeIndex2, tmp58);
  obj15.children = items15;
  items13[1] = activeIndex(require("common/SafeAreaView").SafeAreaPaddingView, obj15);
  obj13.children = items13;
  return activeIndex(mobileThemes(isPreview[37]).View, obj13);
}
const obj38 = { color: nativeDefault.colors.TEXT_BRAND };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedThemePicker(arg0) {
  const cResult = mode(userPreset[22]).c(34);
  ({ onSaveTheme, headerTitle, canGoBack, themeSelector, hasSaveButton, hasOnyxNux, mode } = arg0);
  let str = "nitro";
  if (undefined !== themeSelector) {
    str = themeSelector;
  }
  let obj = mode(userPreset[22]);
  ({ width, height } = usingSystemTheme(userPreset[23])());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [closure_7, ThemeStore, UnsyncedUserSettingsStore, SelectivelySyncedUserSettingsStore, CustomThemeMobileStore];
    const fn = function i() {
      return { userPreset: closure_7.gradientPreset, isPreview: closure_7.isPreview, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, isSynced: SelectivelySyncedUserSettingsStore.shouldSync("appearance"), userTheme: theme.theme, hasCustomTheme: CustomThemeMobileStore.hasCustomTheme() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmp8 = usingSystemTheme(userPreset[23])();
  const stateFromStoresObject = mode(userPreset[24]).useStateFromStoresObject(tmp9, tmp10);
  ({ isSynced, usingSystemTheme } = stateFromStoresObject);
  userPreset = stateFromStoresObject.userPreset;
  ({ isPreview, userTheme } = stateFromStoresObject);
  const hasCustomTheme = stateFromStoresObject.hasCustomTheme;
  const tmpResult = mode(userPreset[24]);
  const allMobileThemes = mode(userPreset[25]).useAllMobileThemes(mode);
  let id;
  if (userPreset != null) {
    id = userPreset.id;
  }
  const tmp18 = id === mode(userPreset[26]).BackgroundGradientPresetId.EASTER_EGG;
  closure_5 = tmp18;
  if (cResult[2] === allMobileThemes) {
    if (cResult[3] === tmp18) {
      closure_6 = tmp19;
      if (null == mode) {
        closure_7 = tmp19;
        if (cResult[12] === hasCustomTheme) {
          if (cResult[13] === tmp19) {
            if (cResult[14] === mode) {
              if (cResult[15] === tmp19) {
                if (cResult[16] === userPreset) {
                  if (cResult[17] === userTheme) {
                    if (cResult[18] === usingSystemTheme) {
                      let tmp27 = cResult[19];
                    }
                    const tmp28 = usingSystemTheme(tmp2[30])(tmp27);
                    class J {
                      constructor() {
                        if (null != mode) {
                          tmp11 = closure_0;
                          tmp12 = closure_2;
                          obj2 = closure_0(closure_2[29]);
                          tmp13 = closure_7;
                          syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
                        } else {
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          obj = closure_0(closure_2[29]);
                          tmp4 = userPreset;
                          tmp5 = usingSystemTheme;
                          tmp6 = closure_6;
                          tmp7 = userTheme;
                          tmp8 = hasCustomTheme;
                          tmp9 = obj;
                          syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, usingSystemTheme, closure_6, userTheme, hasCustomTheme);
                        }
                        return syncedModeThemeIndex;
                      }
                    }
                    let obj2 = { defaultIndex: tmp28, isPreview, isSynced, mobileThemes: tmp19, deviceWidth: width, deviceHeight: height, canGoBack: tmp4, themeSelector: str, onSaveTheme, hasSaveButton: tmp5, hasOnyxNux: tmp6, headerTitle, mode };
                    const tmp32 = closure_17(ThemePicker, obj2);
                    cResult[20] = tmp4;
                    cResult[21] = tmp28;
                    cResult[22] = tmp6;
                    cResult[23] = tmp5;
                    cResult[24] = headerTitle;
                    cResult[25] = height;
                    cResult[26] = isPreview;
                    cResult[27] = isSynced;
                    cResult[28] = mode;
                    cResult[29] = tmp19;
                    cResult[30] = onSaveTheme;
                    cResult[31] = str;
                    cResult[32] = width;
                    cResult[33] = tmp32;
                  }
                }
              }
            }
          }
        }
        class J {
          constructor() {
            if (null != mode) {
              tmp11 = closure_0;
              tmp12 = closure_2;
              obj2 = closure_0(closure_2[29]);
              tmp13 = closure_7;
              syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
            } else {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[29]);
              tmp4 = userPreset;
              tmp5 = usingSystemTheme;
              tmp6 = closure_6;
              tmp7 = userTheme;
              tmp8 = hasCustomTheme;
              tmp9 = obj;
              syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, usingSystemTheme, closure_6, userTheme, hasCustomTheme);
            }
            return syncedModeThemeIndex;
          }
        }
        cResult[12] = hasCustomTheme;
        cResult[13] = tmp19;
        cResult[14] = mode;
        cResult[15] = tmp19;
        cResult[16] = userPreset;
        cResult[17] = userTheme;
        cResult[18] = usingSystemTheme;
        cResult[19] = J;
        tmp27 = J;
      } else {
        if (cResult[10] !== mode) {
          const fn2 = function j(theme) {
            if ("system" === theme.theme) {
              return tmp;
            } else if (mode === constants.DARK) {
              theme = theme.theme;
              let isThemeDarkResult = themes2.isThemeDark(theme);
            } else {
              isThemeDarkResult = themes2.isThemeLight(theme.theme);
            }
          };
          class J {
            constructor() {
              if (null != mode) {
                tmp11 = closure_0;
                tmp12 = closure_2;
                obj2 = closure_0(closure_2[29]);
                tmp13 = closure_7;
                syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
              } else {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[29]);
                tmp4 = userPreset;
                tmp5 = usingSystemTheme;
                tmp6 = closure_6;
                tmp7 = userTheme;
                tmp8 = hasCustomTheme;
                tmp9 = obj;
                syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, usingSystemTheme, closure_6, userTheme, hasCustomTheme);
              }
              return syncedModeThemeIndex;
            }
          }
          cResult[11] = fn2;
        }
        class J {
          constructor() {
            if (null != mode) {
              tmp11 = closure_0;
              tmp12 = closure_2;
              obj2 = closure_0(closure_2[29]);
              tmp13 = closure_7;
              syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
            } else {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[29]);
              tmp4 = userPreset;
              tmp5 = usingSystemTheme;
              tmp6 = closure_6;
              tmp7 = userTheme;
              tmp8 = hasCustomTheme;
              tmp9 = obj;
              syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, usingSystemTheme, closure_6, userTheme, hasCustomTheme);
            }
            return syncedModeThemeIndex;
          }
        }
        cResult[7] = tmp19;
        cResult[8] = mode;
        cResult[9] = tmp24;
      }
    }
  }
  if (cResult[5] !== tmp18) {
    class D {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        tmp3 = arg0.type !== closure_0(closure_2[27]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
        if (!tmp3) {
          tmp3 = arg0.id !== tmp(tmp2[26]).BackgroundGradientPresetId.EASTER_EGG;
        }
        if (!tmp3) {
          tmp3 = closure_5;
        }
        return tmp3;
      }
    }
    class J {
      constructor() {
        if (null != mode) {
          tmp11 = closure_0;
          tmp12 = closure_2;
          obj2 = closure_0(closure_2[29]);
          tmp13 = closure_7;
          syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
        } else {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[29]);
          tmp4 = userPreset;
          tmp5 = usingSystemTheme;
          tmp6 = closure_6;
          tmp7 = userTheme;
          tmp8 = hasCustomTheme;
          tmp9 = obj;
          syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, usingSystemTheme, closure_6, userTheme, hasCustomTheme);
        }
        return syncedModeThemeIndex;
      }
    }
    cResult[6] = D;
  } else {
    class D {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        tmp3 = arg0.type !== closure_0(closure_2[27]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
        if (!tmp3) {
          tmp3 = arg0.id !== tmp(tmp2[26]).BackgroundGradientPresetId.EASTER_EGG;
        }
        if (!tmp3) {
          tmp3 = closure_5;
        }
        return tmp3;
      }
    }
  }
  const found = allMobileThemes.filter(D);
  cResult[2] = allMobileThemes;
  cResult[3] = tmp18;
  cResult[4] = found;
  const tmpResult2 = mode(userPreset[25]);
}) : (function ConnectedThemePicker(canGoBack) {
  let flag = canGoBack.canGoBack;
  ({ onSaveTheme, headerTitle } = canGoBack);
  if (flag === undefined) {
    flag = true;
  }
  let str = canGoBack.themeSelector;
  if (str === undefined) {
    str = "nitro";
  }
  let flag2 = canGoBack.hasSaveButton;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = canGoBack.hasOnyxNux;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const mode = canGoBack.mode;
  importDefault = undefined;
  userPreset = undefined;
  c3 = undefined;
  c4 = undefined;
  let memo1;
  let memo2;
  ({ width, height } = require("useWindowDimensions")());
  const tmp = require("useWindowDimensions")();
  items = [memo1, ThemeStore, UnsyncedUserSettingsStore, SelectivelySyncedUserSettingsStore, memo2];
  const stateFromStoresObject = mode(userPreset[24]).useStateFromStoresObject(items, () => ({ userPreset: memo1.gradientPreset, isPreview: memo1.isPreview, usingSystemTheme: useSystemTheme.useSystemTheme === constants2.ON, isSynced: SelectivelySyncedUserSettingsStore.shouldSync("appearance"), userTheme: theme.theme, hasCustomTheme: memo2.hasCustomTheme() }));
  ({ usingSystemTheme: c1, userPreset } = stateFromStoresObject);
  ({ userTheme: c3, hasCustomTheme: c4, isSynced, isPreview } = stateFromStoresObject);
  let obj = mode(userPreset[24]);
  const allMobileThemes = mode(userPreset[25]).useAllMobileThemes(mode);
  const items1 = [userPreset, allMobileThemes];
  const memo = allMobileThemes.useMemo(() => {
    let id;
    if (userPreset != null) {
      id = userPreset.id;
    }
    closure_0 = id === preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG;
    return allMobileThemes.filter((type) => {
      let tmp3 = type.type !== mode(userPreset[27]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (!tmp3) {
        tmp3 = type.id !== mode(userPreset[26]).BackgroundGradientPresetId.EASTER_EGG;
      }
      if (!tmp3) {
        tmp3 = closure_0;
      }
      return tmp3;
    });
  }, items1);
  const items2 = [memo];
  memo1 = allMobileThemes.useMemo(() => memo, items2);
  const items3 = [memo1, mode];
  memo2 = allMobileThemes.useMemo(() => {
    if (null == mode) {
      let found = memo1;
    } else {
      found = memo1.filter((theme) => {
        if ("system" === theme.theme) {
          return tmp;
        } else if (closure_1_0 === constants.DARK) {
          theme = theme.theme;
          let isThemeDarkResult = mode(userPreset[28]).isThemeDark(theme);
          const obj2 = mode(userPreset[28]);
        } else {
          isThemeDarkResult = mode(userPreset[28]).isThemeLight(theme.theme);
          const obj = mode(userPreset[28]);
        }
      });
    }
    return found;
  }, items3);
  let obj2 = mode(userPreset[25]);
  return closure_17(ThemePicker, {
    defaultIndex: require("useInitialValue")(() => {
      if (null != mode) {
        let syncedModeThemeIndex = UserSettingsAppearanceThemeUtils.getSyncedModeThemeIndex(memo2, tmp);
      } else {
        const obj = UserSettingsAppearanceThemeUtils;
        syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, c1, memo1, c3, c4);
      }
      return syncedModeThemeIndex;
    }),
    isPreview,
    isSynced,
    mobileThemes: memo2,
    deviceWidth: width,
    deviceHeight: height,
    canGoBack: flag,
    themeSelector: str,
    onSaveTheme,
    hasSaveButton: flag2,
    hasOnyxNux: flag3,
    headerTitle,
    mode
  });
});