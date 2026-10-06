// === Module 15101: SettingsAppearanceThemePickerScreen ===

// Module 15101 (SettingsAppearanceThemePickerScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl4 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1241 */;
import themes from "themes" /* 4593 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import Text_Text from "Text/Text" /* 4892 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import Pressables from "Pressables" /* 5916 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 12559 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 14994 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 14995 */;
import ThemeLightIcon from "ThemeLightIcon" /* 15102 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 15104 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4703 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_7, importDefault, navigation;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let num;
let obj3;
let obj4;
let unpackModuleId;
let react = react_mod;
let View = react_native.View;
({ SystemTheme: unpackModuleId, SystemThemeState: closure_12 } = ThemeConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_24, marginBottom: num };
createStyles = createStyles.createStyles;
num = 0;
if (!PlatformUtils.isIOS()) {
  num = nativeDefault.space.PX_16;
}
let obj2 = { container: obj, landscapeContainer: obj3, landscapePreview: { flex: 1 }, landscapeSelector: { flex: 1, justifyContent: "center", overflow: "hidden" }, segmentedControlContainer: obj4, textCentered: { textAlign: "center" } };
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj4 = { width: "100%", gap: nativeDefault.space.PX_16, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_17 = createStyles(obj2);
let items = [, , , ];
({ LIGHT: arr[0], DARK: arr[1], ONYX: arr[2], ASH: arr[3] } = ThemeTypes);
let closure_19 = items.map((item) => {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(item, nativeDefault.colors.CARD_SECONDARY_BG);
});
let closure_20 = items.map((item, index) => index);
createStyles = createStyles_mod;
const obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_21 = createStyles.createAnimatedThemedStyles(obj5, items);
createStyles = createStyles_mod;
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_22 = createStyles.createAnimatedThemedStyles(obj6, items);
createStyles = createStyles_mod;
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_23 = createStyles.createAnimatedThemedStyles(obj7, items);
createStyles = createStyles_mod;
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_24 = createStyles.createAnimatedThemedStyles(obj8, items);
createStyles = createStyles_mod;
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_25 = createStyles.createAnimatedThemedStyles(obj9, items);
createStyles = createStyles_mod;
let obj10 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_26 = createStyles.createAnimatedThemedStyles(obj10, items);
createStyles = createStyles_mod;
let obj11 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_27 = createStyles.createAnimatedThemedStyles(obj11, items);
createStyles = createStyles_mod;
let obj12 = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_28 = createStyles.createAnimatedThemedStyles(obj12, items);
createStyles = createStyles_mod;
let obj13 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_29 = createStyles.createAnimatedThemedStyles(obj13, items);
createStyles = createStyles_mod;
let obj14 = { borderColor: nativeDefault.colors.BORDER_MUTED };
let closure_30 = createStyles.createAnimatedThemedStyles(obj14, items);
createStyles = createStyles_mod;
let obj15 = { borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_31 = createStyles.createAnimatedThemedStyles(obj15, items);
createStyles = createStyles_mod;
let obj16 = { borderColor: nativeDefault.colors.BORDER_NORMAL };
let closure_32 = createStyles.createAnimatedThemedStyles(obj16, items);
createStyles = createStyles_mod;
let obj17 = { tintColor: nativeDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON };
let closure_33 = createStyles.createAnimatedThemedStyles(obj17, items);
createStyles = createStyles_mod;
let obj18 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_34 = createStyles.createAnimatedThemedStyles(obj18, items);
createStyles = createStyles_mod;
const obj19 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_35 = createStyles.createAnimatedThemedStyles(obj19, items);
createStyles = createStyles_mod;
const obj20 = { color: nativeDefault.colors.TEXT_BRAND };
let closure_36 = createStyles.createAnimatedThemedStyles(obj20, items);
function getSegmentedControlItems() {
  let intl;
  let intl2;
  let intl3;
  const obj = { label: intl.string(intl4.t.K2sFfo), id: ThemeTypes.LIGHT, icon: authStore2(ThemeLightIcon.ThemeLightIcon, {}), page: null };
  intl = intl4.intl;
  items = [obj, , ];
  const obj2 = { label: intl2.string(intl4.t.b8Cei3), id: ThemeTypes.DARK, icon: authStore2(ThemeDarkIcon.ThemeDarkIcon, {}), page: null };
  intl2 = intl4.intl;
  items[1] = obj2;
  const obj3 = { label: intl3.string(intl4.t.Do4ZJx), id: ThemeTypes.ONYX, icon: authStore2(ThemeMidnightIcon.ThemeMidnightIcon, {}), page: null };
  intl3 = intl4.intl;
  items[2] = obj3;
  return items;
}
const __initData = { code: "function SettingsAppearanceThemePickerScreenTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
const __initData2 = { code: "function SettingsAppearanceThemePickerScreenTsx2(activeIndex_0){const{runOnJS,setPendingThemeIndex}=this.__closure;runOnJS(setPendingThemeIndex)(Math.round(activeIndex_0));}" };
const __initData3 = { code: "function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStops,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme_0=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme_0.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),cardSecondaryStops,cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(bgRaised,timingStandard)};}}" };
function ThemePicker(defaultIndex) {
  let _undefined;
  let _undefined2;
  let animatedStyle;
  let c13;
  let c15;
  let canGoBack;
  let deviceHeight;
  let deviceWidth;
  let first;
  let hasOnyxNux;
  let intl;
  let items10;
  let items12;
  let items6;
  let items7;
  let obj10;
  let themeSelector;
  let tmp12;
  let tmp16;
  let tmp22;
  let tmp23;
  let tmp43;
  let tmp44;
  let tmp49;
  let tmp54;
  defaultIndex = defaultIndex.defaultIndex;
  const mobileThemes = defaultIndex.mobileThemes;
  const isPreview = defaultIndex.isPreview;
  const isSynced = defaultIndex.isSynced;
  ({ deviceWidth, canGoBack } = defaultIndex);
  const hasSaveButton = defaultIndex.hasSaveButton;
  const headerTitle = defaultIndex.headerTitle;
  const onSaveTheme = defaultIndex.onSaveTheme;
  const mode = defaultIndex.mode;
  c13 = undefined;
  let closure_14;
  c15 = undefined;
  let stateFromStores;
  let c17;
  let activeIndex;
  let activeIndex2;
  let memo2;
  let obj6;
  let callback1;
  let callback2;
  ({ deviceHeight, themeSelector, hasOnyxNux } = defaultIndex);
  let tmp = c17();
  let tmp2 = deviceWidth > deviceHeight;
  let tmp3 = defaultIndex;
  let tmp4 = isPreview;
  let obj = defaultIndex(isPreview[28]);
  navigation = obj.useNavigation();
  const tmp7 = mobileThemes(isPreview[29]);
  const analyticsLocations = tmp7(mobileThemes(isPreview[30]).CLIENT_THEMES_THEME_SELECTOR).analyticsLocations;
  let obj2 = canGoBack;
  const tmp9 = isSynced(canGoBack.useState(defaultIndex), 2);
  const themeIndex = tmp9[0];
  closure_12 = tmp9[1];
  const useState = canGoBack.useState;
  let obj3 = defaultIndex(isPreview[25]);
  let str = "dark-content";
  if (obj3.isThemeDark(mobileThemes[defaultIndex].theme)) {
    str = "light-content";
  }
  [tmp12, c13] = isSynced(useState(str), 2);
  isSynced(useState(str), 2);
  closure_14 = tmp14;
  const tmp3Result = tmp3(tmp4[31]);
  const headerHeight = tmp3Result.useHeaderHeight();
  [tmp16, c15] = isSynced(obj2.useState(0), 2);
  isSynced(obj2.useState(0), 2);
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = obj2.useMemo(getSegmentedControlItems, []);
  const memo1 = obj2.useMemo(() => {
    let theme;
    return activeIndex.findIndex((item) => item === theme.theme);
  }, []);
  items = [navigation];
  const tmp3Result7 = tmp3(tmp4[21]);
  stateFromStores = tmp3Result7.useStateFromStores(items, () => {
    const obj = defaultIndex(isPreview[25]);
    return obj.isThemeLight(navigation.systemTheme) ? _undefined.LIGHT : _undefined.DARK;
  });
  [tmp22, tmp23] = isSynced(obj2.useState(memo1), 2);
  c17 = tmp23;
  isSynced(obj2.useState(memo1), 2);
  const tmp3Result8 = tmp3(tmp4[32]);
  const segmentedControlState = tmp3Result8.useSegmentedControlState({ items: memo, pageWidth: tmp16, defaultIndex: memo1 });
  activeIndex = segmentedControlState.activeIndex;
  let fn = function q() {
    return activeIndex.get();
  };
  fn.__closure = { activeIndex };
  fn.__workletHash = 12670867470872;
  fn.__initData = __initData;
  const tmp3Result9 = tmp3(tmp4[33]);
  class Z {
    constructor(arg0) {
      const obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(c17);
      runOnJSResult(Math.round(arg0));
    }
  }
  let obj4 = { runOnJS: tmp3(tmp4[33]).runOnJS, setPendingThemeIndex: tmp23 };
  Z.__closure = obj4;
  Z.__workletHash = 2409373048953;
  Z.__initData = __initData2;
  const animatedReaction = tmp3Result9.useAnimatedReaction(fn, Z);
  let num = 1;
  const useSharedValue = tmp3(tmp4[33]).useSharedValue;
  tmp3(tmp4[33]);
  if ("light" === mobileThemes[defaultIndex].theme) {
    num = 0;
  }
  activeIndex2 = segmentedControlState.activeIndex;
  if ("nitro" === themeSelector) {
    activeIndex2 = useSharedValue(num);
  }
  memo2 = obj2.useMemo(() => {
    const hexWithOpacity = defaultIndex(isPreview[34]).hexWithOpacity;
    defaultIndex(isPreview[34]);
    return hexWithOpacity(defaultIndex(isPreview[35]).OverlayColors.LIGHT, defaultIndex(isPreview[35]).OverlayOpacity.LEVEL_1);
  }, []);
  const tmp3Result11 = tmp3(tmp4[33]);
  class Re {
    constructor() {
      let interpolateColorResult;
      let obj4;
      let value;
      let withTiming;
      if (closure_14) {
        value = first;
      } else {
        value = activeIndex2.get();
      }
      if (closure_14) {
        let obj;
        if (mobileThemes[value].type !== ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME) {
          const obj3 = { backgroundColor: obj4.withTiming(memo2, timingPresets.timingStandard) };
          obj = obj3;
          obj4 = timing;
        }
        return obj;
      }
      obj = { backgroundColor: withTiming(interpolateColorResult, timingPresets.timingStandard) };
      withTiming = timing.withTiming;
      timing;
      const obj2 = ReanimatedRexport;
      interpolateColorResult = obj2.interpolateColor(activeIndex2.get(), closure_20, closure_19);
    }
  }
  Re.__closure = { mobileThemes, isClientThemesSelector: "nitro" === themeSelector, currentThemeIndex: themeIndex, themeTypeIndex: activeIndex2, ClientThemeType: tmp3(tmp4[24]).ClientThemeType, withTiming: tmp3(tmp4[36]).withTiming, interpolateColor: tmp3(tmp4[33]).interpolateColor, cardSecondaryStops: memo2, cardSecondaryStyles: activeIndex2, timingStandard: tmp3(tmp4[37]).timingStandard, bgRaised: memo2 };
  Re.__workletHash = 16778869283384;
  Re.__initData = __initData3;
  obj6 = { textNormal: closure_26(activeIndex2), textMuted: closure_29(activeIndex2), textBrand: closure_36(activeIndex2), borderFaint: closure_30(activeIndex2), borderStrong: closure_31(activeIndex2), borderNormal: closure_32(activeIndex2), headerPrimary: closure_27(activeIndex2), headerSecondary: closure_28(activeIndex2), activityIcon: closure_33(activeIndex2), bgModSubtle: callback1(activeIndex2), bgModStrong: callback2(activeIndex2), iconHeaderSecondary: closure_34(activeIndex2), iconInteractive: closure_35(activeIndex2), bgBasePrimary: obj6(activeIndex2), bgSurfaceOverlay: closure_24(activeIndex2), bgSurfaceHigh: closure_25(activeIndex2), bgRaised: animatedStyle };
  ({ mobileThemes, isClientThemesSelector: "nitro" === themeSelector, currentThemeIndex: themeIndex, themeTypeIndex: activeIndex2, ClientThemeType: tmp3(tmp4[24]).ClientThemeType, withTiming: tmp3(tmp4[36]).withTiming, interpolateColor: tmp3(tmp4[33]).interpolateColor, cardSecondaryStops: memo2, cardSecondaryStyles: activeIndex2, timingStandard: tmp3(tmp4[37]).timingStandard, bgRaised: memo2 });
  animatedStyle = tmp3Result11.useAnimatedStyle(Re);
  const items1 = [themeIndex, "nitro" === themeSelector, activeIndex2, onSaveTheme, mobileThemes, isSynced, analyticsLocations, navigation, mode];
  callback1 = obj2.useCallback(() => {
    let tmp3;
    if (closure_14) {
      tmp3 = mobileThemes[first];
    } else {
      tmp3 = mobileThemes[activeIndex2.get(activeIndex2)];
    }
    if (null != mode) {
      const obj2 = UserSettingsAppearanceThemeUtils;
      const result = obj2.handleSaveSyncedModeTheme(tmp3, tmp5, analyticsLocations);
    } else {
      const obj = UserSettingsAppearanceThemeUtils;
      obj.handleSaveTheme(tmp3, analyticsLocations, isSynced);
    }
    if (null == onSaveTheme) {
      navigation.goBack();
    } else {
      tmp15();
    }
  }, items1);
  const items2 = [hasSaveButton, mobileThemes, themeIndex, defaultIndex, isPreview, analyticsLocations, isSynced, mode];
  callback2 = obj2.useCallback(() => {
    if (!hasSaveButton) {
      if (null != mode) {
        if (tmp !== defaultIndex) {
          const obj2 = UserSettingsAppearanceThemeUtils;
          const result = obj2.handleSaveSyncedModeTheme(tmp2, tmp7, analyticsLocations);
        }
      } else {
        const obj = UserSettingsAppearanceThemeUtils;
        obj.handleSaveTheme(mobileThemes[first], analyticsLocations, isSynced);
      }
    }
  }, items2);
  const items3 = [navigation, callback2];
  const effect = obj2.useEffect(() => navigation.addListener("beforeRemove", () => {
    callback2();
  }), items3);
  const items4 = [themeIndex, callback1, analyticsLocations, mobileThemes, isSynced, isPreview, headerTitle, "nitro" === themeSelector, navigation, , , , , , , ];
  ({ textNormal: arr5[9], textBrand: arr5[10] } = obj6);
  items4[11] = canGoBack;
  items4[12] = onSaveTheme;
  items4[13] = hasSaveButton;
  items4[14] = tmp22;
  items4[15] = stateFromStores;
  const effect1 = obj2.useEffect(() => {
    let fn2;
    let textNormal;
    let tmp2 = closure_14;
    const tmp = mobileThemes[first];
    if (closure_14) {
      tmp2 = isPreview;
    }
    if (tmp2) {
      tmp2 = tmp.type !== defaultIndex(isPreview[24]).ClientThemeType.STANDARD_BACKGROUND_THEME;
    }
    const disabled = tmp2;
    const setOptions = navigation.setOptions;
    let obj = defaultIndex(isPreview[13]);
    let fn;
    if (!obj.isIOS()) {
      fn = () => closure_1_14(hasSaveButton, {});
    }
    let obj2 = {
      headerBackground: fn,
      headerTransparent: true,
      headerBackVisible: false,
      headerLeft() {
        let obj2;
        if (canGoBack) {
          let theme = stateFromStores;
          let tmp4;
          if (null != closure_1_1[first]) {
            if ("system" !== closure_1_1[first].theme) {
              theme = tmp3.theme;
            }
            tmp4 = theme;
          }
          const obj = { theme: tmp4, children: closure_14(mobileThemes(isPreview[39]), obj2) };
          const ThemeContextProvider = defaultIndex(isPreview[38]).ThemeContextProvider;
          obj2 = { navigation };
          return closure_14(ThemeContextProvider, obj);
        } else {
          return null;
        }
      },
      headerTitle() {
        let stringResult;
        const obj = { animated: true, variant: "redesign/heading-18/bold", style: textNormal.textNormal, children: stringResult };
        stringResult = headerTitle;
        const Text = defaultIndex(isPreview[40]).Text;
        if (headerTitle == null) {
          const intl = defaultIndex(isPreview[14]).intl;
          stringResult = intl.string(defaultIndex(isPreview[14]).t.XAS5Pi);
        }
        return closure_14(Text, obj);
      },
      headerTitleAlign: "center",
      headerRight: fn2
    };
    fn2 = undefined;
    if (hasSaveButton) {
      fn2 = () => {
        let Text;
        let intl;
        let obj3;
        let obj2 = disabled;
        const obj = { hitSlop: 8, disabled, onPress: callback1, children: authStore2(Text, obj3) };
        const PressableOpacity = Pressables.PressableOpacity;
        items = [obj6.textBrand, ];
        Text = Text_Text.Text;
        if (disabled) {
          obj2 = { opacity: 0.4 };
        }
        items[1] = obj2;
        obj3 = { animated: true, variant: "text-md/semibold", style: items, children: intl.string(intl4.t.i4jeWR) };
        intl = intl4.intl;
        return authStore2(PressableOpacity, obj);
      };
    }
    setOptions(obj2);
  }, items4);
  const tmp3Result12 = tmp3(tmp4[42]);
  tmp3Result12.useNavigatorBackPressHandler(() => !canGoBack);
  const items5 = [themeIndex];
  let rounded = deviceWidth;
  const callback3 = obj2.useCallback((mobileThemesIndex) => {
    if (mobileThemesIndex !== first) {
      closure_12(mobileThemesIndex);
      const obj = ClientThemesBackgroundActionCreators;
      const result = obj.updateMobilePendingThemeIndex(mobileThemesIndex);
    }
  }, items5);
  if (tmp2) {
    const _Math = Math;
    rounded = Math.floor(deviceWidth / 2);
  }
  if ("nitro" === themeSelector) {
    const obj7 = { themes: mobileThemes, currentThemeIndex: themeIndex, isPreview, isSynced, defaultIndex, deviceWidth: rounded, animatedStyles: obj6, hasOnyxNux, onThemeSelected: callback3 };
    tmp43 = closure_14(tmp6(tmp4[44]), obj7);
    tmp44 = closure_14;
  } else {
    let tmp39;
    if (null != mobileThemes[tmp22]) {
      let theme = stateFromStores;
      if ("system" !== mobileThemes[tmp22].theme) {
        theme = tmp37.theme;
      }
      tmp39 = theme;
    }
    const obj8 = { style: tmp.segmentedControlContainer, onLayout: callback, children: items6 };
    const obj9 = { theme: tmp39, children: closure_14(tmp3(tmp4[45]).SegmentedControl, obj10) };
    let ThemeContextProvider = tmp3(tmp4[38]).ThemeContextProvider;
    obj10 = { variant: "experimental_Large", state: segmentedControlState };
    items6 = [closure_14(ThemeContextProvider, obj9), ];
    const obj11 = { animated: true, variant: "text-xs/medium", style: items7, children: intl.string(tmp3(tmp4[14]).t.d5Gu9A) };
    items7 = [obj6.headerSecondary, tmp.textCentered];
    let Text = tmp3(tmp4[40]).Text;
    intl = tmp3(tmp4[14]).intl;
    items6[1] = closure_14(Text, obj11);
    tmp43 = c15(hasSaveButton, obj8);
    tmp44 = closure_14;
  }
  const items8 = [themeIndex, mobileThemes, activeIndex2, stateFromStores];
  const effect2 = obj2.useEffect(() => {
    let theme;
    if ("system" === mobileThemes[first].theme) {
      let DARK = stateFromStores;
      if (stateFromStores == null) {
        DARK = ThemeTypes.DARK;
      }
      theme = DARK;
    } else {
      theme = tmp.theme;
    }
    const result = activeIndex2.set(items.indexOf(theme));
    let str = "light-content";
    if (theme === ThemeTypes.LIGHT) {
      str = "dark-content";
    }
    _undefined(str);
  }, items8);
  const memo3 = obj2.useMemo(tmp6(tmp4[46]), []);
  const obj12 = { themes: mobileThemes, themeIndex, animatedStyles: obj6, data: memo3, useGradientBackground: "nitro" === themeSelector, isNitroLocked: tmp49 };
  tmp49 = tmp14;
  const tmp6Result = mobileThemes(tmp4[47]);
  if ("nitro" === themeSelector) {
    tmp49 = isPreview;
  }
  if (tmp49) {
    tmp49 = mobileThemes[themeIndex].type !== tmp3(tmp4[24]).ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  const tmp44Result = tmp44(tmp6Result, obj12);
  const items9 = [{ width: "100%", height: "100%" }, ];
  let bgBasePrimary = !tmp14;
  View = tmp6(tmp4[33]).View;
  if ("nitro" !== themeSelector) {
    bgBasePrimary = obj6.bgBasePrimary;
  }
  const obj13 = { style: items9, children: items10 };
  items9[1] = bgBasePrimary;
  let tmp44Result2 = null;
  if ("nitro" === themeSelector) {
    const obj14 = { themes: mobileThemes, themeIndex, isDimmed: true };
    tmp44Result2 = tmp44(tmp6(tmp4[48]), obj14);
  }
  items10 = [tmp44Result2, ];
  const items11 = [tmp.container, , ];
  let landscapeContainer = tmp2;
  const SafeAreaPaddingView = tmp3(tmp4[49]).SafeAreaPaddingView;
  if (tmp2) {
    landscapeContainer = tmp.landscapeContainer;
  }
  const obj15 = { bottom: true, style: items11, children: items12 };
  items11[1] = landscapeContainer;
  items11[2] = { marginTop: headerHeight };
  items12 = [tmp44(mobileThemes(tmp4[50]), { animated: true, barStyle: tmp12 }), ];
  const obj16 = { children: null };
  const tmp53 = stateFromStores;
  if (tmp2) {
    const obj17 = { style: tmp.landscapePreview, children: tmp44Result };
    const items13 = [tmp44(hasSaveButton, obj17), ];
    const obj18 = { style: tmp.landscapeSelector, children: tmp43 };
    items13[1] = tmp44(hasSaveButton, obj18);
    obj16.children = items13;
    tmp54 = obj16;
  } else {
    const items14 = [tmp44Result, tmp43];
    obj16.children = items14;
    tmp54 = obj16;
  }
  items12[1] = c15(tmp53, tmp54);
  items10[1] = c15(SafeAreaPaddingView, obj15);
  return c15(View, obj13);
}
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr3;
  let canGoBack;
  let hasOnyxNux;
  let hasSaveButton;
  let headerTitle;
  let height;
  let isPreview;
  let isSynced;
  let mode;
  let onSaveTheme;
  let theme;
  let themeSelector;
  let tmp10;
  let tmp9;
  let useSystemTheme;
  let userPreset;
  let userTheme;
  let usingSystemTheme;
  let width;
  let obj = mode(userPreset[19]);
  const cResult = obj.c(34);
  ({ onSaveTheme, headerTitle, canGoBack, themeSelector, hasSaveButton, hasOnyxNux, mode } = arg0);
  let str = "nitro";
  if (undefined !== themeSelector) {
    str = themeSelector;
  }
  ({ width, height } = usingSystemTheme(userPreset[20])());
  usingSystemTheme(userPreset[20])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [arr3, ThemeStore, UnsyncedUserSettingsStore, SelectivelySyncedUserSettingsStore, closure_7];
    const fn = function i() {
      const obj = { userPreset: arr3.gradientPreset, isPreview: arr3.isPreview, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, isSynced: SelectivelySyncedUserSettingsStore.shouldSync("appearance"), userTheme: theme.theme, hasCustomTheme: closure_7.hasCustomTheme() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = mode(userPreset[21]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp9, tmp10);
  ({ isSynced, usingSystemTheme } = stateFromStoresObject);
  userPreset = stateFromStoresObject.userPreset;
  ({ isPreview, userTheme } = stateFromStoresObject);
  const hasCustomTheme = stateFromStoresObject.hasCustomTheme;
  const tmpResult2 = mode(userPreset[22]);
  const allMobileThemes = tmpResult2.useAllMobileThemes(mode);
  let id;
  if (userPreset != null) {
    id = userPreset.id;
  }
  const tmp18 = id === mode(userPreset[23]).BackgroundGradientPresetId.EASTER_EGG;
  let closure_5 = tmp18;
  if (cResult[2] === allMobileThemes) {
    if (cResult[3] === tmp18) {
      arr3 = cResult[4];
    }
    let tmp21 = arr3;
    if (null != mode) {
      let tmp23;
      if (cResult[7] === arr3) {
        let tmp22;
        if (cResult[8] === mode) {
          tmp22 = cResult[9];
        }
        tmp21 = tmp22;
      }
      if (cResult[10] !== mode) {
        const fn2 = function j(theme) {
          let tmp = "system" !== theme.theme;
          if (tmp) {
            let isThemeDarkResult;
            if (mode === unpackModuleId.DARK) {
              const obj2 = themes;
              isThemeDarkResult = obj2.isThemeDark(theme.theme);
            } else {
              const obj = themes;
              isThemeDarkResult = obj.isThemeLight(theme.theme);
            }
            tmp = isThemeDarkResult;
          }
          return tmp;
        };
        cResult[10] = mode;
        cResult[11] = fn2;
        tmp23 = fn2;
      } else {
        tmp23 = cResult[11];
      }
      const found = arr3.filter(tmp23);
      cResult[7] = arr3;
      class J {
        constructor() {
          let syncedModeThemeIndex;
          if (null != mode) {
            const obj2 = UserSettingsAppearanceThemeUtils;
            syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
          } else {
            const obj = UserSettingsAppearanceThemeUtils;
            syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, usingSystemTheme, arr3, userTheme, hasCustomTheme);
          }
          return syncedModeThemeIndex;
        }
      }
      cResult[9] = found;
      tmp22 = found;
    }
    closure_7 = tmp21;
    if (cResult[12] === hasCustomTheme) {
      if (cResult[13] === arr3) {
        if (cResult[14] === mode) {
          if (cResult[15] === tmp21) {
            if (cResult[16] === userPreset) {
              if (cResult[17] === userTheme) {
                let tmp25;
                if (cResult[18] === usingSystemTheme) {
                  tmp25 = cResult[19];
                }
                const tmp26 = usingSystemTheme(userPreset[27])(tmp25);
                if (cResult[20] === (undefined === canGoBack || canGoBack)) {
                  if (cResult[21] === tmp26) {
                    if (cResult[22] === (undefined !== hasOnyxNux && hasOnyxNux)) {
                      if (cResult[23] === (undefined !== hasSaveButton && hasSaveButton)) {
                        if (cResult[24] === headerTitle) {
                          if (cResult[25] === height) {
                            if (cResult[26] === isPreview) {
                              if (cResult[27] === isSynced) {
                                if (cResult[28] === mode) {
                                  if (cResult[29] === tmp21) {
                                    if (cResult[30] === onSaveTheme) {
                                      if (cResult[31] === str) {
                                        let tmp27;
                                        if (cResult[32] === width) {
                                          tmp27 = cResult[33];
                                        }
                                        return tmp27;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                let obj2 = { defaultIndex: null, isPreview, isSynced, mobileThemes: tmp21, deviceWidth: width, deviceHeight: height, canGoBack: undefined === canGoBack || canGoBack, themeSelector: str, onSaveTheme, hasSaveButton: undefined !== hasSaveButton && hasSaveButton, hasOnyxNux: undefined !== hasOnyxNux && hasOnyxNux, headerTitle, mode };
                class J {
                  constructor() {
                    let syncedModeThemeIndex;
                    if (null != mode) {
                      const obj2 = UserSettingsAppearanceThemeUtils;
                      syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
                    } else {
                      const obj = UserSettingsAppearanceThemeUtils;
                      syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, usingSystemTheme, arr3, userTheme, hasCustomTheme);
                    }
                    return syncedModeThemeIndex;
                  }
                }
                const tmp30 = closure_14(ThemePicker, obj2);
                cResult[20] = undefined === canGoBack || canGoBack;
                cResult[21] = tmp26;
                cResult[22] = undefined !== hasOnyxNux && hasOnyxNux;
                cResult[23] = undefined !== hasSaveButton && hasSaveButton;
                cResult[24] = headerTitle;
                cResult[25] = height;
                cResult[26] = isPreview;
                cResult[27] = isSynced;
                cResult[28] = mode;
                cResult[29] = tmp21;
                cResult[30] = onSaveTheme;
                cResult[31] = str;
                cResult[32] = width;
                cResult[33] = tmp30;
                tmp27 = tmp30;
              }
            }
          }
        }
      }
    }
    class J {
      constructor() {
        let syncedModeThemeIndex;
        if (null != mode) {
          const obj2 = UserSettingsAppearanceThemeUtils;
          syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
        } else {
          const obj = UserSettingsAppearanceThemeUtils;
          syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, usingSystemTheme, arr3, userTheme, hasCustomTheme);
        }
        return syncedModeThemeIndex;
      }
    }
    cResult[12] = hasCustomTheme;
    cResult[13] = arr3;
    cResult[14] = mode;
    cResult[15] = tmp21;
    cResult[16] = userPreset;
    cResult[17] = userTheme;
    cResult[18] = usingSystemTheme;
    cResult[19] = J;
    tmp25 = J;
  }
  if (cResult[5] !== tmp18) {
    class G {
      constructor(type) {
        const tmp3 = type.type !== ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET || type.id !== preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG || closure_5;
        return tmp3;
      }
    }
    cResult[5] = tmp18;
    cResult[6] = G;
  } else {
    class G {
      constructor(type) {
        const tmp3 = type.type !== ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET || type.id !== preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG || closure_5;
        return tmp3;
      }
    }
  }
  const found1 = allMobileThemes.filter(G);
  cResult[2] = allMobileThemes;
  cResult[3] = tmp18;
  cResult[4] = found1;
  arr3 = found1;
}) : ((canGoBack) => {
  let c1;
  let c3;
  let c4;
  let constants2;
  let headerTitle;
  let height;
  let isPreview;
  let isSynced;
  let onSaveTheme;
  let theme;
  let useSystemTheme;
  let userPreset;
  let width;
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
  react = undefined;
  let memo;
  let memo1;
  let memo2;
  let tmp = require("useWindowDimensions")();
  ({ width, height } = tmp);
  let obj = mode(userPreset[21]);
  items = [memo, ThemeStore, UnsyncedUserSettingsStore, memo2, memo1];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { userPreset: memo.gradientPreset, isPreview: memo.isPreview, usingSystemTheme: useSystemTheme.useSystemTheme === constants2.ON, isSynced: memo2.shouldSync("appearance"), userTheme: theme.theme, hasCustomTheme: memo1.hasCustomTheme() };
    return obj;
  });
  ({ usingSystemTheme: c1, userPreset } = stateFromStoresObject);
  ({ userTheme: c3, hasCustomTheme: c4, isSynced, isPreview } = stateFromStoresObject);
  let obj2 = mode(userPreset[22]);
  const allMobileThemes = obj2.useAllMobileThemes(mode);
  const items1 = [userPreset, allMobileThemes];
  memo = react.useMemo(() => {
    let id;
    if (userPreset != null) {
      id = userPreset.id;
    }
    let closure_0 = id === preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG;
    return allMobileThemes.filter((type) => {
      const tmp3 = type.type !== mode(userPreset[24]).ClientThemeType.BACKGROUND_GRADIENT_PRESET || type.id !== mode(userPreset[23]).BackgroundGradientPresetId.EASTER_EGG || closure_0;
      return tmp3;
    });
  }, items1);
  const items2 = [memo];
  memo1 = react.useMemo(() => memo, items2);
  const items3 = [memo1, mode];
  memo2 = react.useMemo(() => {
    let found;
    if (null == mode) {
      found = memo1;
    } else {
      found = memo1.filter((theme) => {
        let tmp = "system" !== theme.theme;
        if (tmp) {
          let isThemeDarkResult;
          if (closure_1_0 === constants.DARK) {
            const obj2 = mode(userPreset[25]);
            isThemeDarkResult = obj2.isThemeDark(theme.theme);
          } else {
            const obj = mode(userPreset[25]);
            isThemeDarkResult = obj.isThemeLight(theme.theme);
          }
          tmp = isThemeDarkResult;
        }
        return tmp;
      });
    }
    return found;
  }, items3);
  const obj3 = {
    defaultIndex: require("useInitialValue")(() => {
      let syncedModeThemeIndex;
      if (null != mode) {
        const obj2 = UserSettingsAppearanceThemeUtils;
        syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(memo2, tmp);
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
  };
  return closure_14(ThemePicker, obj3);
});
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx");

export default tmp5;