// === Module 17767: SettingsAppearanceThemePickerScreen ===

// Module 17767 (SettingsAppearanceThemePickerScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import _modDef1652 from "module_1652" /* 1652 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5271 */;
import QuestTypes from "QuestTypes" /* 5278 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5481 */;
import Text_Text from "Text/Text" /* 5866 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7354 */;
import Pressables from "Pressables" /* 7364 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7852 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7871 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7929 */;
import StatusBarDefault from "StatusBar" /* 11761 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 11879 */;
import HexagonActionCreators from "HexagonActionCreators" /* 16961 */;
import HexagonCampaignAnalytics from "HexagonCampaignAnalytics" /* 16962 */;
import HexagonCampaignPreviousPerkValues from "HexagonCampaignPreviousPerkValues" /* 17512 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 17513 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 17514 */;
import ThemeLightIcon from "ThemeLightIcon" /* 17768 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 17770 */;
import SettingsAppearanceChannelListDefault from "SettingsAppearanceChannelList" /* 17790 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5267 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import UserStore from "UserStore" /* 1385 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;

const require = globalThis.__r;

require = fn;
function needsHexagonCampaignEnrollment(c0) {
  let result = MobileThemesUtils.isHexagonCampaignMobileTheme(c0);
  if (result) {
    result = !HexagonCampaignUtils.isEnrolledInHexagonCampaign(UserStore.getCurrentUser(), HexagonCampaignPerk.CLIENT_THEME);
    const tmpResult = HexagonCampaignUtils;
  }
  return result;
}
const View = fn(17).View;
const ThemeConstants = fn(1195);
({ SystemTheme: map1, SystemThemeState: closure_14 } = ThemeConstants);
const HexagonCampaignPerk = fn(5268).HexagonCampaignPerk;
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
let createStyles = fn(5243);
let obj2 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_24, marginBottom: null };
const PlatformUtils = fn(1377);
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
let closure_23 = items.map((item, index) => index);
createStyles = fn(5243);
let obj6 = { width: "100%", gap: nativeDefault.space.PX_16, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_24 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, items);
createStyles = fn(5243);
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_25 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, items);
createStyles = fn(5243);
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_26 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG }, items);
createStyles = fn(5243);
let obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_27 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST }, items);
createStyles = fn(5243);
let obj14 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_28 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, items);
createStyles = fn(5243);
let obj16 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_29 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_DEFAULT }, items);
createStyles = fn(5243);
const obj18 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_30 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, items);
createStyles = fn(5243);
const obj20 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_31 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_SUBTLE }, items);
createStyles = fn(5243);
const obj22 = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_32 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_MUTED }, items);
createStyles = fn(5243);
const obj24 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_33 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_MUTED }, items);
createStyles = fn(5243);
const obj26 = { borderColor: nativeDefault.colors.BORDER_MUTED };
let closure_34 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_STRONG }, items);
createStyles = fn(5243);
const obj28 = { borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_35 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_NORMAL }, items);
createStyles = fn(5243);
const obj30 = { borderColor: nativeDefault.colors.BORDER_NORMAL };
let closure_36 = createStyles.createAnimatedThemedStyles({ tintColor: nativeDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON }, items);
createStyles = fn(5243);
const obj32 = { tintColor: nativeDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON };
let closure_37 = createStyles.createAnimatedThemedStyles({ tintColor: nativeDefault.colors.TEXT_SUBTLE }, items);
createStyles = fn(5243);
const obj34 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_38 = createStyles.createAnimatedThemedStyles({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, items);
createStyles = fn(5243);
const obj36 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_39 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_BRAND }, items);
function getSegmentedControlItems() {
  const obj = { label: null, id: null, icon: null, page: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.K2sFfo);
  obj.id = ThemeTypes.LIGHT;
  obj.icon = closure_1_17(ThemeLightIcon.ThemeLightIcon, {});
  items = [obj, , ];
  const obj2 = { label: null, id: null, icon: null, page: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.b8Cei3);
  obj2.id = ThemeTypes.DARK;
  obj2.icon = closure_1_17(ThemeDarkIcon.ThemeDarkIcon, {});
  items[1] = obj2;
  const obj3 = { label: null, id: null, icon: null, page: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.Do4ZJx);
  obj3.id = ThemeTypes.ONYX;
  obj3.icon = closure_1_17(ThemeMidnightIcon.ThemeMidnightIcon, {});
  items[2] = obj3;
  return items;
}
let closure_42 = { code: "(function SettingsAppearanceThemePickerScreenTsx1(){let[activeIndex]=this.__closure;return activeIndex.get();})" };
let closure_43 = { code: "(function SettingsAppearanceThemePickerScreenTsx2(activeIndex){let[scheduleOnRN,setPendingThemeIndex]=this.__closure;scheduleOnRN(setPendingThemeIndex,Math.round(activeIndex));})" };
let closure_44 = { code: "(function SettingsAppearanceThemePickerScreenTsx3(){let[mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStops,cardSecondaryStyles,timingStandard,bgRaised]=this.__closure;const theme=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),cardSecondaryStops,cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(bgRaised,timingStandard)};}})" };
function ThemePicker(defaultIndex) {
  defaultIndex = defaultIndex.defaultIndex;
  _require = defaultIndex;
  const mobileThemes = defaultIndex.mobileThemes;
  importDefault = mobileThemes;
  const isPreview = defaultIndex.isPreview;
  dependencyMap = isPreview;
  const isSynced = defaultIndex.isSynced;
  asyncGeneratorStep = isSynced;
  ({ deviceWidth, canGoBack } = defaultIndex);
  let _slicedToArray = canGoBack;
  const hasSaveButton = defaultIndex.hasSaveButton;
  noop = hasSaveButton;
  const headerTitle = defaultIndex.headerTitle;
  c6 = headerTitle;
  const onSaveTheme = defaultIndex.onSaveTheme;
  c7 = onSaveTheme;
  const mode = defaultIndex.mode;
  c8 = mode;
  themeIndex = undefined;
  closure_12 = undefined;
  c13 = undefined;
  closure_14 = undefined;
  let stateFromStores;
  let activeIndex;
  let obj4;
  first1 = undefined;
  closure_19 = undefined;
  closure_20 = undefined;
  closure_21 = undefined;
  let callback;
  let callback1;
  let callback2;
  let stateFromStores1;
  let callback3;
  ({ deviceHeight, themeSelector, hasOnyxNux } = defaultIndex);
  const tmp = closure_20();
  const navigation = require("Link").useNavigation();
  c9 = navigation;
  let obj = require("Link");
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.CLIENT_THEMES_THEME_SELECTOR).analyticsLocations;
  c10 = analyticsLocations;
  [themeIndex, closure_12] = noop.useState(defaultIndex);
  let str = "dark-content";
  if (obj3.isThemeDark(mobileThemes[defaultIndex].theme)) {
    str = "light-content";
  }
  obj3 = require("themes");
  [tmp12, c13] = noop.useState(str);
  const tmp8Result = _slicedToArray(noop.useState(str), 2);
  closure_14 = tmp14;
  const headerHeight = require("module_7434").useHeaderHeight();
  const tmp15 = useMeasuredLayoutDefault();
  const width = tmp15.width;
  let num = 0;
  ({ ref, onLayout } = tmp15);
  if (undefined !== width) {
    num = width;
  }
  const memo = obj2.useMemo(getSegmentedControlItems, []);
  const memo1 = obj2.useMemo(() => closure_21.findIndex((item) => item === theme.theme), []);
  const tmp3Result = require("module_7434");
  items = [themeIndex];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => closure_0(_undefined2[26]).isThemeLight(first.systemTheme) ? activeIndex.LIGHT : activeIndex.DARK);
  const tmp3Result9 = require("useStateFromStores");
  [tmp20, tmp21] = noop.useState(memo1);
  const tmp8Result3 = _slicedToArray(noop.useState(memo1), 2);
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState({ items: memo, pageWidth: num, defaultIndex: memo1 });
  const tmp3Result10 = require("SegmentedControlState");
  const items1 = [closure_42, segmentedControlState.activeIndex];
  _require = undefined;
  [tmp23, tmp24] = items1;
  class SettingsAppearanceThemePickerScreenTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items2 = [tmp24];
  SettingsAppearanceThemePickerScreenTsx1.__closure = items2;
  SettingsAppearanceThemePickerScreenTsx1.__workletHash = 4189626295489;
  SettingsAppearanceThemePickerScreenTsx1.__initData = tmp23;
  const items3 = [closure_43, require("module_1705").scheduleOnRN, tmp21];
  _require = undefined;
  importDefault = undefined;
  [tmp25, tmp26, tmp27] = items3;
  class SettingsAppearanceThemePickerScreenTsx2 {
    constructor(arg0) {
      tmp = closure_0(closure_1, Math.round(defaultIndex));
      return;
    }
  }
  const items4 = [tmp26, tmp27];
  SettingsAppearanceThemePickerScreenTsx2.__closure = items4;
  SettingsAppearanceThemePickerScreenTsx2.__workletHash = 2807189811629;
  SettingsAppearanceThemePickerScreenTsx2.__initData = tmp25;
  const animatedReaction = require("module_1652").useAnimatedReaction(SettingsAppearanceThemePickerScreenTsx1, SettingsAppearanceThemePickerScreenTsx2);
  const tmp3Result11 = require("module_1652");
  let num2 = 1;
  if ("light" === mobileThemes[defaultIndex].theme) {
    num2 = 0;
  }
  activeIndex = segmentedControlState.activeIndex;
  if ("nitro" === themeSelector) {
    activeIndex = tmp3Result12.useSharedValue(num2);
  }
  const memo2 = obj2.useMemo(() => closure_0(_undefined2[38]).hexWithOpacity(closure_0(_undefined2[39]).OverlayColors.LIGHT, closure_0(_undefined2[39]).OverlayOpacity.LEVEL_1), []);
  tmp3Result12 = require("module_1652");
  const items5 = [closure_44, mobileThemes, "nitro" === themeSelector, themeIndex, activeIndex, require("ClientThemesTypes").ClientThemeType, require("timing/timing").withTiming, require("module_1652").interpolateColor, callback1, callback, require("timingPresets").timingStandard, memo2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41] = items5;
  class SettingsAppearanceThemePickerScreenTsx3 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      if (closure_1) {
        value = closure_2;
      } else {
        tmp3 = closure_3;
        value = closure_3.get();
      }
      if (tmp2) {
        tmp5 = closure_4;
        if (tmp[value].type !== closure_4.STANDARD_BACKGROUND_THEME) {
          obj1 = { backgroundColor: null };
          tmp6 = closure_5;
          tmp7 = closure_10;
          tmp8 = closure_9;
          obj1.backgroundColor = closure_5(closure_10, closure_9);
          obj = obj1;
        }
        return obj;
      }
      obj = { backgroundColor: closure_5(closure_6(closure_3.get(), closure_7, closure_8), closure_9) };
      return;
    }
  }
  const items6 = [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41];
  SettingsAppearanceThemePickerScreenTsx3.__closure = items6;
  SettingsAppearanceThemePickerScreenTsx3.__workletHash = 5300958173313;
  SettingsAppearanceThemePickerScreenTsx3.__initData = tmp30;
  obj4 = { textNormal: null, textMuted: null, textBrand: null, borderFaint: null, borderStrong: null, borderNormal: null, headerPrimary: null, headerSecondary: null, activityIcon: null, bgModSubtle: null, bgModStrong: null, iconHeaderSecondary: null, iconInteractive: null, bgBasePrimary: null, bgSurfaceOverlay: null, bgSurfaceHigh: null, bgRaised: null };
  const animatedStyle = require("module_1652").useAnimatedStyle(SettingsAppearanceThemePickerScreenTsx3);
  obj4.textNormal = closure_29(activeIndex);
  obj4.textMuted = closure_32(activeIndex);
  obj4.textBrand = closure_39(activeIndex);
  obj4.borderFaint = closure_33(activeIndex);
  obj4.borderStrong = closure_34(activeIndex);
  obj4.borderNormal = closure_35(activeIndex);
  obj4.headerPrimary = closure_30(activeIndex);
  obj4.headerSecondary = closure_31(activeIndex);
  obj4.activityIcon = closure_36(activeIndex);
  obj4.bgModSubtle = stateFromStores1(activeIndex);
  obj4.bgModStrong = callback3(activeIndex);
  obj4.iconHeaderSecondary = closure_37(activeIndex);
  obj4.iconInteractive = closure_38(activeIndex);
  obj4.bgBasePrimary = callback2(activeIndex);
  obj4.bgSurfaceOverlay = closure_27(activeIndex);
  obj4.bgSurfaceHigh = closure_28(activeIndex);
  obj4.bgRaised = animatedStyle;
  [first1, closure_19] = noop.useState(false);
  closure_20 = obj2.useRef(false);
  closure_21 = obj2.useRef(false);
  const items7 = [mode, analyticsLocations, isSynced];
  callback = obj2.useCallback((c0) => {
    const result = MobileThemesUtils.isHexagonCampaignMobileTheme(c0);
    if (!result) {
      if (result) {
        const result1 = HexagonCampaignPreviousPerkValues.saveHexagonCampaignPreviousClientTheme();
        const tmpResult = HexagonCampaignPreviousPerkValues;
      }
      if (null != c8) {
        const result2 = UserSettingsAppearanceThemeUtils.handleSaveSyncedModeTheme(c0, tmp12, c10);
        const tmpResult6 = UserSettingsAppearanceThemeUtils;
      } else {
        UserSettingsAppearanceThemeUtils.handleSaveTheme(c0, c10, c3);
        const tmpResult7 = UserSettingsAppearanceThemeUtils;
      }
      if (result) {
        const result3 = HexagonActionCreators.markHexagonCampaignPerkApplied(HexagonCampaignPerk.CLIENT_THEME);
        const tmpResult8 = HexagonActionCreators;
      }
      if (result) {
        const obj2 = { perks: null, content: null, contentSurface: null };
        items = [HexagonCampaignPerk.CLIENT_THEME];
        obj2.perks = items;
        obj2.content = QuestTypes.QuestContent.CLIENT_THEME_SETTINGS;
        obj2.contentSurface = HexagonCampaignAnalytics.HexagonCampaignContentSurface.THEME_PICKER;
        const result4 = HexagonCampaignAnalytics.trackHexagonCampaignPerkAction(obj2);
        const tmpResult9 = HexagonCampaignAnalytics;
      }
    } else {
      let tmp5 = null;
      if (null != c8) {
        const syncedClientTheme = ThemeStore.getSyncedClientTheme(tmp4);
        tmp5 = syncedClientTheme == tmp5;
        let prop;
        if (!tmp5) {
          prop = syncedClientTheme.backgroundGradientPresetId;
        }
        let id = prop;
      } else {
        const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
        if (gradientPreset != tmp5) {
          id = gradientPreset.id;
        }
      }
      !HexagonCampaignUtils.isHexagonCampaignClientThemePreset(id);
      const tmpResult10 = HexagonCampaignUtils;
    }
  }, items7);
  _require = asyncGeneratorStep(async (arg0) => {
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
        return { value: "HermesInternal", done: null };
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
            obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp4;
            closure_1 = tmp8;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            closure_1_20.current = true;
            closure_1_19(true);
            closure_129_1 = false;
            c4 = 2;
            c5 = 3;
            c6 = 1;
            const obj6 = { value: closure_0(tmp4[43]).ensureHexagonCampaignEnrollment(stateFromStores.CLIENT_THEME), done: false };
            return obj6;
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_1_20.current = false;
          closure_1_19(false);
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
            closure_1_20.current = false;
            closure_1_19(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              callback(closure_129_0);
              closure_129_1 = true;
            }
            c4 = 1;
          }
          c4 = 0;
          closure_1_20.current = false;
          closure_1_19(false);
          if (!closure_129_1) {
            const obj7 = { text: null };
            const intl = closure_0(tmp4[17]).intl;
            obj7.text = intl.string(closure_0(tmp4[17]).t.F8FvUy);
            _undefined(tmp4[46]).open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj7);
            const obj2 = _undefined(tmp4[46]);
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
  const items8 = [callback];
  callback1 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items8);
  const items9 = [themeIndex, "nitro" === themeSelector, activeIndex, onSaveTheme, mobileThemes, navigation, callback, callback1];
  callback2 = obj2.useCallback(asyncGeneratorStep(async () => {
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
        return { value: "HermesInternal", done: null };
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
                let tmp12 = tmp10[first];
              } else {
                tmp12 = tmp10[activeIndex.get(activeIndex)];
              }
              if (needsHexagonCampaignEnrollment(tmp12)) {
                c1 = 1;
                c2 = 1;
                obj4 = { value: callback1(tmp12), done: false };
                return obj4;
              } else {
                callback(tmp12);
                close();
                c2 = 3;
                return { value: "HermesInternal", done: null };
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
  }), items9);
  const tmp3Result13 = require("module_1652");
  const items10 = [c7];
  stateFromStores1 = require("useStateFromStores").useStateFromStores(items10, () => _undefined7.hasHiddenHexagonCampaignPreset);
  const items11 = [hasSaveButton, mobileThemes, themeIndex, defaultIndex, isPreview, mode, stateFromStores1];
  callback3 = obj2.useCallback(() => {
    if (c5) {
      return null;
    } else {
      if (!c2) {
        if (null == c8) {
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
  }, items11);
  const items12 = [navigation, callback3, callback, callback1];
  const effect = obj2.useEffect(() => {
    closure_0 = _undefined3(function*(arg0) {
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
          return { value: "HermesInternal", done: null };
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
                const tmp14 = callback3();
                if (null != tmp14) {
                  if (needsHexagonCampaignEnrollment(tmp14)) {
                    closure_0.preventDefault();
                    if (!ref.current) {
                      c3 = 1;
                      c4 = 1;
                      obj4 = { value: callback1(tmp14), done: false };
                      return obj4;
                    }
                  } else {
                    callback(tmp14);
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
            _undefined8.dispatch(closure_129_0.data.action);
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
    return _undefined8.addListener("beforeRemove", function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  }, items12);
  const items13 = [themeIndex, callback2, analyticsLocations, mobileThemes, isSynced, isPreview, headerTitle, "nitro" === themeSelector, navigation, , , , , , , , ];
  ({ textNormal: arr14[9], textBrand: arr14[10] } = obj4);
  items13[11] = canGoBack;
  items13[12] = onSaveTheme;
  items13[13] = hasSaveButton;
  items13[14] = tmp20;
  items13[15] = stateFromStores;
  items13[16] = first1;
  const effect1 = obj2.useEffect(() => {
    let tmp3 = first1;
    if (!first1) {
      let result = closure_14;
      if (closure_14) {
        result = _undefined2;
      }
      if (result) {
        result = closure_0(_undefined2[23]).isNitroGatedMobileTheme(tmp);
        let obj = closure_0(_undefined2[23]);
      }
      tmp3 = result;
    }
    closure_0 = tmp3;
    let fn;
    if (!obj2.isIOS()) {
      fn = () => obj4(_undefined6, {});
    }
    let obj3 = {
      headerBackground: fn,
      headerTransparent: true,
      headerBackVisible: false,
      headerLeft() {
        if (_undefined4) {
          let theme = stateFromStores;
          let tmp4;
          if (null != dependencyMap[first]) {
            if ("system" !== tmp3.theme) {
              theme = tmp3.theme;
            }
            tmp4 = theme;
          }
          const obj = { theme: tmp4, children: null };
          const obj2 = { navigation };
          obj.children = obj4(dependencyMap(8991), obj2);
          return obj4(closure_0(5314).ThemeContextProvider, obj);
        } else {
          return null;
        }
      },
      headerTitle() {
        const obj = { animated: true, variant: "heading-md/semibold", style: textNormal.textNormal, children: null };
        let stringResult = _undefined6;
        if (_undefined6 == null) {
          const intl = closure_0(1113).intl;
          stringResult = intl.string(closure_0(1113).t.XAS5Pi);
        }
        obj.children = stringResult;
        return obj4(closure_0(5866).Text, obj);
      },
      headerTitleAlign: "center",
      headerRight: null
    };
    if (c5) {
      const fn2 = () => {
        if (first1) {
          let tmpResult = closure_3_17(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "small" });
        } else {
          const obj = { hitSlop: 8, disabled: null, onPress: null, children: null };
          let obj2 = result;
          obj.disabled = result;
          obj.onPress = callback2;
          items = [obj4.textBrand, ];
          if (result) {
            obj2 = { opacity: 0.4 };
          }
          const obj3 = { animated: true, variant: "body-md/semibold", style: null, children: null };
          items[1] = obj2;
          obj3.style = items;
          const intl = util.intl;
          obj3.children = intl.string(util.t.i4jeWR);
          obj.children = closure_3_17(Text_Text.Text, obj3);
          tmpResult = closure_3_17(Pressables.PressableOpacity, obj);
        }
        return tmpResult;
      };
    }
    obj3.headerRight = fn2;
    _undefined8.setOptions(obj3);
    obj2 = closure_0(_undefined2[16]);
  }, items13);
  const tmp3Result14 = require("useStateFromStores");
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => !c4);
  const items14 = [themeIndex];
  let rounded = deviceWidth;
  const callback4 = obj2.useCallback((mobileThemesIndex) => {
    if (mobileThemesIndex !== first) {
      closure_12(mobileThemesIndex);
      const result = ClientThemesBackgroundActionCreators.updateMobilePendingThemeIndex(mobileThemesIndex);
    }
  }, items14);
  if (deviceWidth > deviceHeight) {
    const _Math = Math;
    rounded = Math.floor(deviceWidth / 2);
  }
  if ("nitro" === themeSelector) {
    const obj5 = { themes: mobileThemes, currentThemeIndex: themeIndex, isPreview, isSynced, defaultIndex, deviceWidth: rounded, animatedStyles: obj4, hasOnyxNux, onThemeSelected: callback4 };
    let tmp62 = obj4(tmp6(17772), obj5);
    let tmp63 = obj4;
  } else {
    let tmp58;
    if (null != mobileThemes[tmp20]) {
      let theme = stateFromStores;
      if ("system" !== tmp56.theme) {
        theme = tmp56.theme;
      }
      tmp58 = theme;
    }
    let obj6 = { style: tmp.segmentedControlContainer, ref, onLayout, children: null };
    let obj7 = { theme: tmp58, children: null };
    let obj8 = { variant: "experimental_Large", state: segmentedControlState };
    obj7.children = obj4(tmp3(11184).SegmentedControl, obj8);
    const items15 = [obj4(tmp3(5314).ThemeContextProvider, obj7), ];
    const obj9 = { animated: true, variant: "body-xs/medium", style: null, children: null };
    const items16 = [obj4.headerSecondary, tmp.textCentered];
    obj9.style = items16;
    let intl = tmp3(1113).intl;
    obj9.children = intl.string(tmp3(1113).t.d5Gu9A);
    items15[1] = obj4(tmp3(5866).Text, obj9);
    obj6.children = items15;
    tmp62 = first1(c6, obj6);
    tmp63 = obj4;
  }
  const items17 = [themeIndex, mobileThemes, activeIndex, stateFromStores];
  const effect2 = obj2.useEffect(() => {
    if ("system" === _undefined[first].theme) {
      let DARK = stateFromStores;
      if (stateFromStores == null) {
        DARK = ThemeTypes.DARK;
      }
      let theme = DARK;
    } else {
      theme = tmp.theme;
    }
    const result = activeIndex.set(items.indexOf(theme));
    let str = "light-content";
    if (theme === ThemeTypes.LIGHT) {
      str = "dark-content";
    }
    _undefined(str);
  }, items17);
  const memo3 = obj2.useMemo(tmp6(17778), []);
  const obj10 = { themes: mobileThemes, themeIndex, animatedStyles: obj4, data: memo3, useGradientBackground: "nitro" === themeSelector, isNitroLocked: null };
  let result = tmp14;
  const tmp3Result15 = require("useNavigatorBackPressHandler");
  if ("nitro" === themeSelector) {
    result = isPreview;
  }
  if (result) {
    result = tmp3(5481).isNitroGatedMobileTheme(mobileThemes[themeIndex]);
    const tmp3Result16 = tmp3(5481);
  }
  obj10.isNitroLocked = result;
  const tmp63Result = tmp63(SettingsAppearanceChannelListDefault, obj10);
  const items18 = [{ width: "100%", height: "100%" }, ];
  let bgBasePrimary = !tmp14;
  if ("nitro" !== themeSelector) {
    bgBasePrimary = obj4.bgBasePrimary;
  }
  const obj11 = { style: items18, children: null };
  items18[1] = bgBasePrimary;
  let tmp63Result2 = null;
  if ("nitro" === themeSelector) {
    const obj12 = { themes: mobileThemes, themeIndex, isDimmed: true };
    tmp63Result2 = tmp63(tmp6(17799), obj12);
  }
  const items19 = [tmp63Result2, ];
  const items20 = [tmp.container, , ];
  let landscapeContainer = tmp2;
  if (deviceWidth > deviceHeight) {
    landscapeContainer = tmp.landscapeContainer;
  }
  const obj13 = { bottom: true, style: items20, children: null };
  items20[1] = landscapeContainer;
  items20[2] = { marginTop: headerHeight };
  const items21 = [tmp63(StatusBarDefault, { animated: true, barStyle: tmp12 }), ];
  const obj14 = { children: null };
  if (deviceWidth > deviceHeight) {
    const obj15 = { style: tmp.landscapePreview, children: tmp63Result };
    const items22 = [tmp63(c6, obj15), ];
    const obj16 = { style: tmp.landscapeSelector, children: tmp62 };
    items22[1] = tmp63(c6, obj16);
    obj14.children = items22;
    let tmp73 = obj14;
  } else {
    const items23 = [tmp63Result, tmp62];
    obj14.children = items23;
    tmp73 = obj14;
  }
  items21[1] = first1(closure_19, tmp73);
  obj13.children = items21;
  items19[1] = first1(require("common/SafeAreaView").SafeAreaPaddingView, obj13);
  obj11.children = items19;
  return first1(_modDef1652.View, obj11);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx");

export default function ConnectedThemePicker(canGoBack) {
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
  const stateFromStoresObject = mode(userPreset[22]).useStateFromStoresObject(items, () => ({ userPreset: memo1.gradientPreset, isPreview: memo1.isPreview, usingSystemTheme: useSystemTheme.useSystemTheme === constants2.ON, isSynced: SelectivelySyncedUserSettingsStore.shouldSync("appearance"), userTheme: theme.theme, hasCustomTheme: memo2.hasCustomTheme() }));
  ({ usingSystemTheme: c1, userPreset } = stateFromStoresObject);
  ({ userTheme: c3, hasCustomTheme: c4, isSynced, isPreview } = stateFromStoresObject);
  let obj = mode(userPreset[22]);
  const allMobileThemes = mode(userPreset[23]).useAllMobileThemes(mode);
  const items1 = [userPreset, allMobileThemes];
  const memo = allMobileThemes.useMemo(() => {
    let id;
    if (userPreset != null) {
      id = userPreset.id;
    }
    closure_0 = id === preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG;
    return allMobileThemes.filter((type) => {
      let tmp3 = type.type !== mode(userPreset[25]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (!tmp3) {
        tmp3 = type.id !== mode(userPreset[24]).BackgroundGradientPresetId.EASTER_EGG;
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
          let isThemeDarkResult = mode(userPreset[26]).isThemeDark(theme);
          const obj2 = mode(userPreset[26]);
        } else {
          isThemeDarkResult = mode(userPreset[26]).isThemeLight(theme.theme);
          const obj = mode(userPreset[26]);
        }
      });
    }
    return found;
  }, items3);
  let obj2 = mode(userPreset[23]);
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
};