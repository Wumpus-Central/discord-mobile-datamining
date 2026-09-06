// discord_app/modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import ClientThemesTypes from "../../../client_themes/ClientThemesTypes.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ThemeDarkIcon from "../../../../design/components/Icon/native/redesign/generated/ThemeDarkIcon.tsx";
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils.tsx";
import ClientThemesBackgroundActionCreators from "../../../client_themes/ClientThemesBackgroundActionCreators.tsx";
import ThemeLightIcon from "../../../../design/components/Icon/native/redesign/generated/ThemeLightIcon.tsx";
import ThemeMidnightIcon from "../../../../design/components/Icon/native/redesign/generated/ThemeMidnightIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ClientThemesBackgroundStore from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import CustomThemeMobileStore from "../../../client_themes/native/CustomThemeMobileStore.tsx";
import SelectivelySyncedUserSettingsStore from "../../SelectivelySyncedUserSettingsStore.tsx";
import ThemeStore from "../../ThemeStore.tsx";
import UnsyncedUserSettingsStore from "../../UnsyncedUserSettingsStore.tsx";

require = fn;
const View = fn(17).View;
const ThemeConstants = fn(1186);
({ SystemTheme: closure_11, SystemThemeState: closure_12 } = ThemeConstants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
fn(4560);
let createStyles = {
  flex: 1,
  paddingHorizontal: nativeDefault.space.PX_16,
  alignItems: "center",
  gap: nativeDefault.space.PX_24,
  marginBottom: null,
};
let PlatformUtils = fn(1115);
let num = 0;
if (!PlatformUtils.isIOS()) {
  num = nativeDefault.space.PX_16;
}
createStyles = {
  container: createStyles,
  landscapeContainer: { flexDirection: "row", gap: nativeDefault.space.PX_16 },
  landscapePreview: { flex: 1 },
  landscapeSelector: { flex: 1, justifyContent: "center", overflow: "hidden" },
  segmentedControlContainer: null,
  textCentered: null,
  marginBottom: num,
};
PlatformUtils = {
  width: "100%",
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
};
createStyles.segmentedControlContainer = PlatformUtils;
createStyles.textCentered = { textAlign: "center" };
let closure_17 = createStyles.createStyles(createStyles);
let items = [, , ,];
({ LIGHT: arr[0], DARKER: arr[1], MIDNIGHT: arr[2], DARK: arr[3] } = ThemeTypes);
let closure_19 = items.map((item) => {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(item, nativeDefault.colors.CARD_SECONDARY_BG);
});
let closure_20 = items.map((item, index) => index);
createStyles = fn(4560);
let obj1 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let closure_21 = createStyles.createAnimatedThemedStyles(
  { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  items,
);
createStyles = fn(4560);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_22 = createStyles.createAnimatedThemedStyles(
  { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE },
  items,
);
createStyles = fn(4560);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_23 = createStyles.createAnimatedThemedStyles(
  { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG },
  items,
);
fn(4560);
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_24 = createStyles.createAnimatedThemedStyles(createStyles, items);
createStyles = fn(4560);
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_25 = createStyles.createAnimatedThemedStyles(
  { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH },
  items,
);
fn(4560);
createStyles = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_26 = createStyles.createAnimatedThemedStyles(createStyles, items);
createStyles = fn(4560);
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_27 = createStyles.createAnimatedThemedStyles(
  { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY },
  items,
);
fn(4560);
createStyles = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_28 = createStyles.createAnimatedThemedStyles(createStyles, items);
createStyles = fn(4560);
let obj9 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_29 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_MUTED }, items);
fn(4560);
createStyles = { borderColor: nativeDefault.colors.BORDER_MUTED };
let closure_30 = createStyles.createAnimatedThemedStyles(createStyles, items);
createStyles = fn(4560);
let obj11 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_31 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_STRONG }, items);
fn(4560);
createStyles = { borderColor: nativeDefault.colors.BORDER_NORMAL };
let closure_32 = createStyles.createAnimatedThemedStyles(createStyles, items);
createStyles = fn(4560);
let obj13 = { borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_33 = createStyles.createAnimatedThemedStyles(
  { tintColor: nativeDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON },
  items,
);
fn(4560);
createStyles = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_34 = createStyles.createAnimatedThemedStyles(createStyles, items);
createStyles = fn(4560);
const obj15 = { tintColor: nativeDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON };
let closure_35 = createStyles.createAnimatedThemedStyles(
  { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT },
  items,
);
fn(4560);
createStyles = { color: nativeDefault.colors.TEXT_BRAND };
let closure_36 = createStyles.createAnimatedThemedStyles(createStyles, items);
function getSegmentedControlItems() {
  let obj = { label: null, id: null, icon: null, page: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.K2sFfo);
  obj.id = ThemeTypes.LIGHT;
  obj.icon = closure_1_14(ThemeLightIcon.ThemeLightIcon, {});
  items = [obj, ,];
  obj = { label: null, id: null, icon: null, page: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.b8Cei3);
  obj.id = ThemeTypes.DARKER;
  obj.icon = closure_1_14(ThemeDarkIcon.ThemeDarkIcon, {});
  items[1] = obj;
  obj = { label: null, id: null, icon: null, page: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t.pQwSpQ);
  obj.id = ThemeTypes.MIDNIGHT;
  obj.icon = closure_1_14(ThemeMidnightIcon.ThemeMidnightIcon, {});
  items[2] = obj;
  return items;
}
const __initData = {
  code: "function SettingsAppearanceThemePickerScreenTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}",
};
const __initData2 = {
  code: "function SettingsAppearanceThemePickerScreenTsx2(activeIndex){const{runOnJS,setPendingThemeIndex}=this.__closure;runOnJS(setPendingThemeIndex)(Math.round(activeIndex));}",
};
const __initData3 = {
  code: "function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStops,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),cardSecondaryStops,cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(bgRaised,timingStandard)};}}",
};
function ThemePicker(defaultIndex) {
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
  closure_14 = undefined;
  c15 = undefined;
  let stateFromStores;
  c17 = undefined;
  let activeIndex;
  let activeIndex2;
  let memo2;
  let callback1;
  let callback2;
  ({ deviceHeight, themeSelector, hasMidnightNux } = defaultIndex);
  let tmp = c17();
  let obj = defaultIndex(isPreview[27]);
  const navigation = obj.useNavigation();
  const analyticsLocations = mobileThemes(isPreview[28])(
    mobileThemes(isPreview[29]).CLIENT_THEMES_THEME_SELECTOR,
  ).analyticsLocations;
  let obj1 = canGoBack;
  const tmp9 = isSynced(canGoBack.useState(defaultIndex), 2);
  const themeIndex = tmp9[0];
  closure_12 = tmp9[1];
  let obj2 = defaultIndex(isPreview[24]);
  let str = "dark-content";
  if (obj2.isThemeDark(mobileThemes[defaultIndex].theme)) {
    str = "light-content";
  }
  let tmp8Result = tmp8(canGoBack.useState(str), 2);
  [tmp12, c13] = tmp8Result;
  let tmp3Result = tmp3(tmp4[30]);
  closure_14 = tmp14;
  const headerHeight = tmp3Result.useHeaderHeight();
  tmp8Result = tmp8(obj1.useState(0), 2);
  [tmp16, c15] = tmp8Result;
  const callback = obj1.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = obj1.useMemo(getSegmentedControlItems, []);
  const memo1 = obj1.useMemo(() => activeIndex.findIndex((item) => item === theme.theme), []);
  tmp3Result = tmp3(tmp4[20]);
  items = [navigation];
  stateFromStores = tmp3Result.useStateFromStores(items, () =>
    defaultIndex(isPreview[24]).isThemeLight(navigation.systemTheme) ? _undefined.LIGHT : _undefined.DARKER,
  );
  const tmp7 = mobileThemes(isPreview[28]);
  [tmp22, tmp23] = isSynced(obj1.useState(memo1), 2);
  c17 = tmp23;
  const tmp8Result1 = isSynced(obj1.useState(memo1), 2);
  const segmentedControlState = defaultIndex(isPreview[31]).useSegmentedControlState({
    items: memo,
    pageWidth: tmp16,
    defaultIndex: memo1,
  });
  activeIndex = segmentedControlState.activeIndex;
  const tmp3Result1 = defaultIndex(isPreview[31]);
  let fn = function q() {
    return activeIndex.get();
  };
  fn.__closure = { activeIndex };
  fn.__workletHash = 12670867470872;
  fn.__initData = __initData;
  class Q {
    constructor(arg0) {
      obj = closure_0(closure_2[32]);
      runOnJSResult = obj.runOnJS(closure_17);
      tmpResult = runOnJSResult(Math.round(defaultIndex));
      return;
    }
  }
  obj = { runOnJS: tmp3(tmp4[32]).runOnJS, setPendingThemeIndex: tmp23 };
  Q.__closure = obj;
  Q.__workletHash = 7003433484889;
  Q.__initData = __initData2;
  const animatedReaction = defaultIndex(isPreview[32]).useAnimatedReaction(fn, Q);
  const tmp3Result2 = defaultIndex(isPreview[32]);
  let num = 1;
  if ("light" === mobileThemes[defaultIndex].theme) {
    num = 0;
  }
  activeIndex2 = segmentedControlState.activeIndex;
  if ("nitro" === themeSelector) {
    activeIndex2 = tmp3Result3.useSharedValue(num);
  }
  memo2 = obj1.useMemo(
    () =>
      defaultIndex(isPreview[33]).hexWithOpacity(
        defaultIndex(isPreview[34]).OverlayColors.LIGHT,
        defaultIndex(isPreview[34]).OverlayOpacity.LEVEL_1,
      ),
    [],
  );
  tmp3Result3 = defaultIndex(isPreview[32]);
  class Re {
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
        if (tmp[value].type !== closure_0(closure_2[23]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
          obj = { backgroundColor: null };
          tmp8 = closure_0;
          tmp9 = closure_2;
          obj5 = closure_0(closure_2[35]);
          tmp10 = closure_20;
          tmp11 = closure_0;
          tmp12 = closure_2;
          obj.backgroundColor = obj5.withTiming(closure_20, closure_0(closure_2[36]).timingStandard);
        }
        return obj;
      }
      obj = { backgroundColor: null };
      obj2 = closure_0(closure_2[35]);
      obj3 = closure_0(closure_2[32]);
      interpolateColorResult = obj3.interpolateColor(closure_19.get(), closure_20, closure_19);
      obj.backgroundColor = obj2.withTiming(interpolateColorResult, closure_0(closure_2[36]).timingStandard);
      return;
    }
  }
  obj = {
    mobileThemes,
    isClientThemesSelector: tmp14,
    currentThemeIndex: themeIndex,
    themeTypeIndex: activeIndex2,
    ClientThemeType: tmp3(tmp4[23]).ClientThemeType,
    withTiming: tmp3(tmp4[35]).withTiming,
    interpolateColor: tmp3(tmp4[32]).interpolateColor,
    cardSecondaryStops: memo2,
    cardSecondaryStyles: activeIndex2,
    timingStandard: tmp3(tmp4[36]).timingStandard,
    bgRaised: memo2,
  };
  Re.__closure = obj;
  Re.__workletHash = 10807943820408;
  Re.__initData = __initData3;
  obj1 = {
    textNormal: null,
    textMuted: null,
    textBrand: null,
    borderFaint: null,
    borderStrong: null,
    borderNormal: null,
    headerPrimary: null,
    headerSecondary: null,
    activityIcon: null,
    bgModSubtle: null,
    bgModStrong: null,
    iconHeaderSecondary: null,
    iconInteractive: null,
    bgBasePrimary: null,
    bgSurfaceOverlay: null,
    bgSurfaceHigh: null,
    bgRaised: null,
  };
  const animatedStyle = defaultIndex(isPreview[32]).useAnimatedStyle(Re);
  obj1.textNormal = closure_26(activeIndex2);
  obj1.textMuted = closure_29(activeIndex2);
  obj1.textBrand = closure_36(activeIndex2);
  obj1.borderFaint = closure_30(activeIndex2);
  obj1.borderStrong = closure_31(activeIndex2);
  obj1.borderNormal = closure_32(activeIndex2);
  obj1.headerPrimary = closure_27(activeIndex2);
  obj1.headerSecondary = closure_28(activeIndex2);
  obj1.activityIcon = closure_33(activeIndex2);
  obj1.bgModSubtle = callback1(activeIndex2);
  obj1.bgModStrong = callback2(activeIndex2);
  obj1.iconHeaderSecondary = closure_34(activeIndex2);
  obj1.iconInteractive = closure_35(activeIndex2);
  obj1.bgBasePrimary = obj1(activeIndex2);
  obj1.bgSurfaceOverlay = closure_24(activeIndex2);
  obj1.bgSurfaceHigh = closure_25(activeIndex2);
  obj1.bgRaised = animatedStyle;
  const items1 = [
    themeIndex,
    "nitro" === themeSelector,
    activeIndex2,
    onSaveTheme,
    mobileThemes,
    isSynced,
    analyticsLocations,
    navigation,
    mode,
  ];
  callback1 = obj1.useCallback(() => {
    if (closure_14) {
      let tmp3 = tmp[first];
    } else {
      tmp3 = tmp[activeIndex2.get(activeIndex2)];
    }
    if (null != mode) {
      const result = UserSettingsAppearanceThemeUtils.handleSaveSyncedModeTheme(tmp3, tmp5, analyticsLocations);
    } else {
      UserSettingsAppearanceThemeUtils.handleSaveTheme(tmp3, analyticsLocations, isSynced);
    }
    if (null == onSaveTheme) {
      navigation.goBack();
    } else {
      tmp15();
    }
  }, items1);
  const items2 = [hasSaveButton, mobileThemes, themeIndex, defaultIndex, isPreview, analyticsLocations, isSynced, mode];
  callback2 = obj1.useCallback(() => {
    if (!hasSaveButton) {
      if (null != mode) {
        if (tmp !== defaultIndex) {
          const result = UserSettingsAppearanceThemeUtils.handleSaveSyncedModeTheme(tmp2, tmp6, analyticsLocations);
        }
      } else {
        UserSettingsAppearanceThemeUtils.handleSaveTheme(tmp2, analyticsLocations, isSynced);
      }
    }
  }, items2);
  const items3 = [navigation, callback2];
  const effect = obj1.useEffect(
    () =>
      navigation.addListener("beforeRemove", () => {
        callback2();
      }),
    items3,
  );
  const items4 = [
    themeIndex,
    callback1,
    analyticsLocations,
    mobileThemes,
    isSynced,
    isPreview,
    headerTitle,
    "nitro" === themeSelector,
    navigation,
    ,
    ,
    ,
    ,
    ,
    ,
  ];
  ({ textNormal: arr5[9], textBrand: arr5[10] } = obj1);
  items4[11] = canGoBack;
  items4[12] = onSaveTheme;
  items4[13] = hasSaveButton;
  items4[14] = tmp22;
  items4[15] = stateFromStores;
  const effect1 = obj1.useEffect(() => {
    let tmp = closure_14;
    if (closure_14) {
      tmp = isPreview;
    }
    if (tmp) {
      tmp = mobileThemes[first].type !== defaultIndex(isPreview[23]).ClientThemeType.STANDARD_BACKGROUND_THEME;
    }
    const disabled = tmp;
    let obj = defaultIndex(isPreview[13]);
    let fn;
    if (!obj.isIOS()) {
      fn = () => closure_1_14(hasSaveButton, {});
    }
    obj = {
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
          let obj = { theme: tmp4, children: null };
          obj = { navigation };
          obj.children = closure_14(mobileThemes(isPreview[38]), obj);
          return closure_14(defaultIndex(isPreview[37]).ThemeContextProvider, obj);
        } else {
          return null;
        }
      },
      headerTitle() {
        const obj = {
          animated: true,
          variant: "redesign/heading-18/bold",
          style: textNormal.textNormal,
          children: null,
        };
        let stringResult = headerTitle;
        if (headerTitle == null) {
          const intl = tmp2(tmp3[15]).intl;
          stringResult = intl.string(tmp2(tmp3[15]).t.XAS5Pi);
        }
        obj.children = stringResult;
        return closure_14(defaultIndex(isPreview[39]).Text, obj);
      },
      headerTitleAlign: "center",
      headerRight: null,
    };
    let fn2;
    if (hasSaveButton) {
      fn2 = () => {
        let obj = { hitSlop: 8, disabled, onPress: callback1, children: null };
        obj = disabled;
        items = [obj1.textBrand];
        if (disabled) {
          obj = { opacity: 0.4 };
        }
        obj = { animated: true, variant: "text-md/semibold", style: items, children: null };
        items[1] = obj;
        const intl = tmp2(1114).intl;
        obj.children = intl.string(util.t.i4jeWR);
        obj.children = closure_3_14(Text_Text.Text, obj);
        return closure_3_14(Pressables.PressableOpacity, obj);
      };
    }
    obj.headerRight = fn2;
    navigation.setOptions(obj);
  }, items4);
  const tmp3Result4 = defaultIndex(isPreview[32]);
  defaultIndex(isPreview[41]).useNavigatorBackPressHandler(() => !canGoBack);
  const items5 = [themeIndex];
  let rounded = deviceWidth;
  const callback3 = obj1.useCallback((mobileThemesIndex) => {
    if (mobileThemesIndex !== first) {
      closure_12(mobileThemesIndex);
      const result = ClientThemesBackgroundActionCreators.updateMobilePendingThemeIndex(mobileThemesIndex);
    }
  }, items5);
  if (deviceWidth > deviceHeight) {
    const _Math = Math;
    rounded = Math.floor(deviceWidth / 2);
  }
  if ("nitro" === themeSelector) {
    obj2 = {
      themes: mobileThemes,
      currentThemeIndex: themeIndex,
      isPreview,
      isSynced,
      defaultIndex,
      deviceWidth: rounded,
      animatedStyles: obj1,
      hasMidnightNux,
      onThemeSelected: callback3,
    };
    let tmp42 = closure_14(tmp6(tmp4[43]), obj2);
    let tmp43 = closure_14;
  } else {
    let tmp38;
    if (null != mobileThemes[tmp22]) {
      let theme = stateFromStores;
      if ("system" !== tmp36.theme) {
        theme = tmp36.theme;
      }
      tmp38 = theme;
    }
    let obj3 = { style: tmp.segmentedControlContainer, onLayout: callback, children: null };
    const obj4 = { theme: tmp38, children: null };
    let obj5 = { variant: "experimental_Large", state: segmentedControlState };
    obj4.children = closure_14(tmp3(tmp4[44]).SegmentedControl, obj5);
    const items6 = [closure_14(tmp3(tmp4[37]).ThemeContextProvider, obj4)];
    const obj6 = { animated: true, variant: "text-xs/medium", style: null, children: null };
    const items7 = [obj1.headerSecondary, tmp.textCentered];
    obj6.style = items7;
    let intl = tmp3(tmp4[15]).intl;
    obj6.children = intl.string(tmp3(tmp4[15]).t.d5Gu9A);
    items6[1] = closure_14(tmp3(tmp4[39]).Text, obj6);
    obj3.children = items6;
    tmp42 = c15(hasSaveButton, obj3);
    tmp43 = closure_14;
  }
  const items8 = [themeIndex, mobileThemes, activeIndex2, stateFromStores];
  const effect2 = obj1.useEffect(() => {
    if ("system" === mobileThemes[first].theme) {
      let DARKER = stateFromStores;
      if (stateFromStores == null) {
        DARKER = ThemeTypes.DARKER;
      }
      let theme = DARKER;
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
  const memo3 = obj1.useMemo(tmp6(tmp4[45]), []);
  const obj7 = {
    themes: mobileThemes,
    themeIndex,
    animatedStyles: obj1,
    data: memo3,
    useGradientBackground: "nitro" === themeSelector,
    isNitroLocked: null,
  };
  let tmp48 = tmp14;
  const tmp3Result5 = defaultIndex(isPreview[41]);
  if ("nitro" === themeSelector) {
    tmp48 = isPreview;
  }
  if (tmp48) {
    tmp48 = mobileThemes[themeIndex].type !== tmp3(tmp4[23]).ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  obj7.isNitroLocked = tmp48;
  let tmp43Result = tmp43(mobileThemes(isPreview[46]), obj7);
  const items9 = [{ width: "100%", height: "100%" }];
  let bgBasePrimary = !tmp14;
  if ("nitro" !== themeSelector) {
    bgBasePrimary = obj1.bgBasePrimary;
  }
  const obj8 = { style: items9, children: null };
  items9[1] = bgBasePrimary;
  tmp43Result = null;
  if ("nitro" === themeSelector) {
    const obj9 = { themes: mobileThemes, themeIndex, isDimmed: true };
    tmp43Result = tmp43(tmp6(tmp4[47]), obj9);
  }
  const items10 = [tmp43Result];
  const items11 = [tmp.container, ,];
  let landscapeContainer = tmp2;
  if (deviceWidth > deviceHeight) {
    landscapeContainer = tmp.landscapeContainer;
  }
  const obj10 = { bottom: true, style: items11, children: null };
  items11[1] = landscapeContainer;
  items11[2] = { marginTop: headerHeight };
  const items12 = [tmp43(mobileThemes(isPreview[49]), { animated: true, barStyle: tmp12 })];
  const obj11 = { children: null };
  if (deviceWidth > deviceHeight) {
    const obj12 = { style: tmp.landscapePreview, children: tmp43Result };
    const items13 = [tmp43(hasSaveButton, obj12)];
    const obj13 = { style: tmp.landscapeSelector, children: tmp42 };
    items13[1] = tmp43(hasSaveButton, obj13);
    obj11.children = items13;
    let tmp53 = obj11;
  } else {
    const items14 = [tmp43Result, tmp42];
    obj11.children = items14;
    tmp53 = obj11;
  }
  items12[1] = c15(stateFromStores, tmp53);
  obj10.children = items12;
  items10[1] = c15(defaultIndex(isPreview[48]).SafeAreaPaddingView, obj10);
  obj8.children = items10;
  return c15(mobileThemes(isPreview[32]).View, obj8);
}
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx",
);

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
  let flag3 = canGoBack.hasMidnightNux;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const mode = canGoBack.mode;
  importDefault = undefined;
  userPreset = undefined;
  c3 = undefined;
  noop = undefined;
  let memo;
  let memo1;
  let memo2;
  ({ width, height } = require("useWindowDimensions")());
  let obj = mode(userPreset[20]);
  items = [memo, ThemeStore, UnsyncedUserSettingsStore, memo2, memo1];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    userPreset: memo.gradientPreset,
    isPreview: memo.isPreview,
    usingSystemTheme: useSystemTheme.useSystemTheme === constants2.ON,
    isSynced: memo2.shouldSync("appearance"),
    userTheme: theme.theme,
    hasCustomTheme: memo1.hasCustomTheme(),
  }));
  ({ usingSystemTheme: c1, userPreset } = stateFromStoresObject);
  ({ userTheme: c3, hasCustomTheme: c4, isSynced, isPreview } = stateFromStoresObject);
  const tmp = require("useWindowDimensions")();
  const allMobileThemes = mode(userPreset[21]).useAllMobileThemes(mode);
  const items1 = [userPreset, allMobileThemes];
  memo = noop.useMemo(() => {
    let id;
    if (userPreset != null) {
      id = userPreset.id;
    }
    closure_0 = id === preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG;
    return allMobileThemes.filter((type) => {
      let tmp3 = type.type !== mode(userPreset[23]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (!tmp3) {
        tmp3 = type.id !== mode(userPreset[22]).BackgroundGradientPresetId.EASTER_EGG;
      }
      if (!tmp3) {
        tmp3 = closure_0;
      }
      return tmp3;
    });
  }, items1);
  const items2 = [memo];
  memo1 = noop.useMemo(() => memo, items2);
  const items3 = [memo1, mode];
  memo2 = noop.useMemo(() => {
    if (null == mode) {
      let found = memo1;
    } else {
      found = memo1.filter((theme) => {
        if ("system" === theme.theme) {
          return tmp;
        } else if (closure_1_0 === constants.DARK) {
          theme = theme.theme;
          let isThemeDarkResult = mode(userPreset[24]).isThemeDark(theme);
          const obj2 = mode(userPreset[24]);
        } else {
          isThemeDarkResult = mode(userPreset[24]).isThemeLight(theme.theme);
          const obj = mode(userPreset[24]);
        }
      });
    }
    return found;
  }, items3);
  obj = {
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
    hasMidnightNux: flag3,
    headerTitle,
    mode,
  };
  return closure_14(ThemePicker, obj);
}
