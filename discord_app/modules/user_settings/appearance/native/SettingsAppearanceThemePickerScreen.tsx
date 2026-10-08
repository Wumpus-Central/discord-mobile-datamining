// discord_app/modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import ClientThemesTypes from "../../../client_themes/ClientThemesTypes.tsx";
import themes from "../../../../design/utils/shared/themes.tsx";
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

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ThemeConstants = fn(1208);
({ SystemTheme: closure_11, SystemThemeState: closure_12 } = ThemeConstants);
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let createStyles = fn(5090);
let obj2 = {
  flex: 1,
  paddingHorizontal: nativeDefault.space.PX_16,
  alignItems: "center",
  gap: nativeDefault.space.PX_24,
  marginBottom: null,
};
const PlatformUtils = fn(1381);
let num = 0;
if (!PlatformUtils.isIOS()) {
  num = nativeDefault.space.PX_16;
}
let obj4 = {
  container: obj2,
  landscapeContainer: { flexDirection: "row", gap: nativeDefault.space.PX_16 },
  landscapePreview: { flex: 1 },
  landscapeSelector: { flex: 1, justifyContent: "center", overflow: "hidden" },
  segmentedControlContainer: null,
  textCentered: null,
};
obj2.marginBottom = num;
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj4.segmentedControlContainer = {
  width: "100%",
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
};
obj4.textCentered = { textAlign: "center" };
let closure_17 = createStyles.createStyles(obj4);
let items = [, , ,];
({ LIGHT: arr[0], DARK: arr[1], ONYX: arr[2], ASH: arr[3] } = ThemeTypes);
let closure_19 = items.map((item) => {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(item, nativeDefault.colors.CARD_SECONDARY_BG);
});
let closure_20 = items.map((item, index) => index);
createStyles = fn(5090);
let obj6 = {
  width: "100%",
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
};
let closure_21 = createStyles.createAnimatedThemedStyles(
  { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  items,
);
createStyles = fn(5090);
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_22 = createStyles.createAnimatedThemedStyles(
  { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE },
  items,
);
createStyles = fn(5090);
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_23 = createStyles.createAnimatedThemedStyles(
  { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG },
  items,
);
createStyles = fn(5090);
let obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_24 = createStyles.createAnimatedThemedStyles(
  { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST },
  items,
);
createStyles = fn(5090);
let obj14 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_25 = createStyles.createAnimatedThemedStyles(
  { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH },
  items,
);
createStyles = fn(5090);
let obj16 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_26 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_DEFAULT }, items);
createStyles = fn(5090);
let obj18 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_27 = createStyles.createAnimatedThemedStyles(
  { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY },
  items,
);
createStyles = fn(5090);
const obj20 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_28 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_SUBTLE }, items);
createStyles = fn(5090);
const obj22 = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_29 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_MUTED }, items);
createStyles = fn(5090);
const obj24 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_30 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_MUTED }, items);
createStyles = fn(5090);
const obj26 = { borderColor: nativeDefault.colors.BORDER_MUTED };
let closure_31 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_STRONG }, items);
createStyles = fn(5090);
const obj28 = { borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_32 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_NORMAL }, items);
createStyles = fn(5090);
const obj30 = { borderColor: nativeDefault.colors.BORDER_NORMAL };
let closure_33 = createStyles.createAnimatedThemedStyles(
  { tintColor: nativeDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON },
  items,
);
createStyles = fn(5090);
const obj32 = { tintColor: nativeDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON };
let closure_34 = createStyles.createAnimatedThemedStyles({ tintColor: nativeDefault.colors.TEXT_SUBTLE }, items);
createStyles = fn(5090);
const obj34 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_35 = createStyles.createAnimatedThemedStyles(
  { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT },
  items,
);
createStyles = fn(5090);
const obj36 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_36 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_BRAND }, items);
function getSegmentedControlItems() {
  const obj = { label: null, id: null, icon: null, page: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.K2sFfo);
  obj.id = ThemeTypes.LIGHT;
  obj.icon = state(ThemeLightIcon.ThemeLightIcon, {});
  items = [obj, ,];
  const obj2 = { label: null, id: null, icon: null, page: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.b8Cei3);
  obj2.id = ThemeTypes.DARK;
  obj2.icon = state(ThemeDarkIcon.ThemeDarkIcon, {});
  items[1] = obj2;
  const obj3 = { label: null, id: null, icon: null, page: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.Do4ZJx);
  obj3.id = ThemeTypes.ONYX;
  obj3.icon = state(ThemeMidnightIcon.ThemeMidnightIcon, {});
  items[2] = obj3;
  return items;
}
const ReactCompilerGating = fn(558);
const __initData = {
  code: "function SettingsAppearanceThemePickerScreenTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}",
};
const __initData2 = {
  code: "function SettingsAppearanceThemePickerScreenTsx2(activeIndex_0){const{runOnJS,setPendingThemeIndex}=this.__closure;runOnJS(setPendingThemeIndex)(Math.round(activeIndex_0));}",
};
const __initData3 = {
  code: "function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStops,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme_0=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme_0.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),cardSecondaryStops,cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(bgRaised,timingStandard)};}}",
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
  let obj6;
  let callback1;
  let callback2;
  ({ deviceHeight, themeSelector, hasOnyxNux } = defaultIndex);
  let tmp = c17();
  const navigation = defaultIndex(isPreview[28]).useNavigation();
  let obj = defaultIndex(isPreview[28]);
  const analyticsLocations = mobileThemes(isPreview[29])(
    mobileThemes(isPreview[30]).CLIENT_THEMES_THEME_SELECTOR,
  ).analyticsLocations;
  const tmp9 = isSynced(canGoBack.useState(defaultIndex), 2);
  const themeIndex = tmp9[0];
  closure_12 = tmp9[1];
  const tmp7 = mobileThemes(isPreview[29]);
  let str = "dark-content";
  if (obj3.isThemeDark(mobileThemes[defaultIndex].theme)) {
    str = "light-content";
  }
  obj3 = defaultIndex(isPreview[25]);
  [tmp12, c13] = isSynced(canGoBack.useState(str), 2);
  const tmp8Result = isSynced(canGoBack.useState(str), 2);
  closure_14 = tmp14;
  const headerHeight = defaultIndex(isPreview[31]).useHeaderHeight();
  const tmp3Result = defaultIndex(isPreview[31]);
  [tmp16, c15] = isSynced(canGoBack.useState(0), 2);
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = obj2.useMemo(getSegmentedControlItems, []);
  const memo1 = obj2.useMemo(() => activeIndex.findIndex((item) => item === theme.theme), []);
  const tmp8Result3 = isSynced(canGoBack.useState(0), 2);
  items = [navigation];
  stateFromStores = defaultIndex(isPreview[21]).useStateFromStores(items, () =>
    defaultIndex(isPreview[25]).isThemeLight(navigation.systemTheme) ? _undefined.LIGHT : _undefined.DARK,
  );
  const tmp3Result7 = defaultIndex(isPreview[21]);
  [tmp22, tmp23] = isSynced(canGoBack.useState(memo1), 2);
  c17 = tmp23;
  const tmp8Result4 = isSynced(canGoBack.useState(memo1), 2);
  const segmentedControlState = defaultIndex(isPreview[32]).useSegmentedControlState({
    items: memo,
    pageWidth: tmp16,
    defaultIndex: memo1,
  });
  activeIndex = segmentedControlState.activeIndex;
  const tmp3Result8 = defaultIndex(isPreview[32]);
  let fn = function q() {
    return activeIndex.get();
  };
  fn.__closure = { activeIndex };
  fn.__workletHash = 12670867470872;
  fn.__initData = __initData;
  class Z {
    constructor(arg0) {
      obj = closure_0(closure_2[33]);
      runOnJSResult = obj.runOnJS(closure_17);
      tmpResult = runOnJSResult(Math.round(defaultIndex));
      return;
    }
  }
  const tmp3Result9 = defaultIndex(isPreview[33]);
  Z.__closure = { runOnJS: defaultIndex(isPreview[33]).runOnJS, setPendingThemeIndex: tmp23 };
  Z.__workletHash = 2409373048953;
  Z.__initData = __initData2;
  const animatedReaction = tmp3Result9.useAnimatedReaction(fn, Z);
  let obj4 = { runOnJS: defaultIndex(isPreview[33]).runOnJS, setPendingThemeIndex: tmp23 };
  let num = 1;
  if ("light" === mobileThemes[defaultIndex].theme) {
    num = 0;
  }
  activeIndex2 = segmentedControlState.activeIndex;
  if ("nitro" === themeSelector) {
    activeIndex2 = tmp3Result10.useSharedValue(num);
  }
  memo2 = obj2.useMemo(
    () =>
      defaultIndex(isPreview[34]).hexWithOpacity(
        defaultIndex(isPreview[35]).OverlayColors.LIGHT,
        defaultIndex(isPreview[35]).OverlayOpacity.LEVEL_1,
      ),
    [],
  );
  tmp3Result10 = defaultIndex(isPreview[33]);
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
        if (tmp[value].type !== closure_0(closure_2[24]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
          obj1 = { backgroundColor: null };
          tmp8 = closure_0;
          tmp9 = closure_2;
          obj5 = closure_0(closure_2[36]);
          tmp10 = closure_20;
          tmp11 = closure_0;
          tmp12 = closure_2;
          obj1.backgroundColor = obj5.withTiming(closure_20, closure_0(closure_2[37]).timingStandard);
          obj = obj1;
        }
        return obj;
      }
      obj = { backgroundColor: null };
      obj2 = closure_0(closure_2[36]);
      obj3 = closure_0(closure_2[33]);
      interpolateColorResult = obj3.interpolateColor(closure_19.get(), closure_20, closure_19);
      obj.backgroundColor = obj2.withTiming(interpolateColorResult, closure_0(closure_2[37]).timingStandard);
      return;
    }
  }
  const tmp3Result11 = defaultIndex(isPreview[33]);
  Re.__closure = {
    mobileThemes,
    isClientThemesSelector: "nitro" === themeSelector,
    currentThemeIndex: themeIndex,
    themeTypeIndex: activeIndex2,
    ClientThemeType: defaultIndex(isPreview[24]).ClientThemeType,
    withTiming: defaultIndex(isPreview[36]).withTiming,
    interpolateColor: defaultIndex(isPreview[33]).interpolateColor,
    cardSecondaryStops: memo2,
    cardSecondaryStyles: activeIndex2,
    timingStandard: defaultIndex(isPreview[37]).timingStandard,
    bgRaised: memo2,
  };
  Re.__workletHash = 16778869283384;
  Re.__initData = __initData3;
  obj6 = {
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
  const animatedStyle = tmp3Result11.useAnimatedStyle(Re);
  obj6.textNormal = closure_26(activeIndex2);
  obj6.textMuted = closure_29(activeIndex2);
  obj6.textBrand = closure_36(activeIndex2);
  obj6.borderFaint = closure_30(activeIndex2);
  obj6.borderStrong = closure_31(activeIndex2);
  obj6.borderNormal = closure_32(activeIndex2);
  obj6.headerPrimary = closure_27(activeIndex2);
  obj6.headerSecondary = closure_28(activeIndex2);
  obj6.activityIcon = closure_33(activeIndex2);
  obj6.bgModSubtle = callback1(activeIndex2);
  obj6.bgModStrong = callback2(activeIndex2);
  obj6.iconHeaderSecondary = closure_34(activeIndex2);
  obj6.iconInteractive = closure_35(activeIndex2);
  obj6.bgBasePrimary = obj6(activeIndex2);
  obj6.bgSurfaceOverlay = closure_24(activeIndex2);
  obj6.bgSurfaceHigh = closure_25(activeIndex2);
  obj6.bgRaised = animatedStyle;
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
  callback1 = obj2.useCallback(() => {
    if (closure_14) {
      let tmp3 = mobileThemes[first];
    } else {
      tmp3 = mobileThemes[activeIndex2.get(activeIndex2)];
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
  callback2 = obj2.useCallback(() => {
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
  const effect = obj2.useEffect(
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
  ({ textNormal: arr5[9], textBrand: arr5[10] } = obj6);
  items4[11] = canGoBack;
  items4[12] = onSaveTheme;
  items4[13] = hasSaveButton;
  items4[14] = tmp22;
  items4[15] = stateFromStores;
  const effect1 = obj2.useEffect(() => {
    let tmp = closure_14;
    if (closure_14) {
      tmp = isPreview;
    }
    if (tmp) {
      tmp = mobileThemes[first].type !== defaultIndex(isPreview[24]).ClientThemeType.STANDARD_BACKGROUND_THEME;
    }
    const disabled = tmp;
    let fn;
    if (!obj.isIOS()) {
      fn = () => closure_1_14(hasSaveButton, {});
    }
    let obj2 = {
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
          obj.children = closure_14(mobileThemes(isPreview[39]), obj2);
          return closure_14(defaultIndex(isPreview[38]).ThemeContextProvider, obj);
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
          const intl = defaultIndex(isPreview[14]).intl;
          stringResult = intl.string(defaultIndex(isPreview[14]).t.XAS5Pi);
        }
        obj.children = stringResult;
        return closure_14(defaultIndex(isPreview[40]).Text, obj);
      },
      headerTitleAlign: "center",
      headerRight: null,
    };
    let fn2;
    if (hasSaveButton) {
      fn2 = () => {
        const obj = { hitSlop: 8, disabled, onPress: callback1, children: null };
        let obj2 = disabled;
        items = [obj6.textBrand];
        if (disabled) {
          obj2 = { opacity: 0.4 };
        }
        const obj3 = { animated: true, variant: "text-md/semibold", style: items, children: null };
        items[1] = obj2;
        const intl = util.intl;
        obj3.children = intl.string(util.t.i4jeWR);
        obj.children = state(Text_Text.Text, obj3);
        return state(Pressables.PressableOpacity, obj);
      };
    }
    obj2.headerRight = fn2;
    navigation.setOptions(obj2);
    obj = defaultIndex(isPreview[13]);
  }, items4);
  let obj5 = {
    mobileThemes,
    isClientThemesSelector: "nitro" === themeSelector,
    currentThemeIndex: themeIndex,
    themeTypeIndex: activeIndex2,
    ClientThemeType: defaultIndex(isPreview[24]).ClientThemeType,
    withTiming: defaultIndex(isPreview[36]).withTiming,
    interpolateColor: defaultIndex(isPreview[33]).interpolateColor,
    cardSecondaryStops: memo2,
    cardSecondaryStyles: activeIndex2,
    timingStandard: defaultIndex(isPreview[37]).timingStandard,
    bgRaised: memo2,
  };
  defaultIndex(isPreview[42]).useNavigatorBackPressHandler(() => !canGoBack);
  const items5 = [themeIndex];
  let rounded = deviceWidth;
  const callback3 = obj2.useCallback((mobileThemesIndex) => {
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
    const obj7 = {
      themes: mobileThemes,
      currentThemeIndex: themeIndex,
      isPreview,
      isSynced,
      defaultIndex,
      deviceWidth: rounded,
      animatedStyles: obj6,
      hasOnyxNux,
      onThemeSelected: callback3,
    };
    let tmp42 = closure_14(tmp6(tmp4[44]), obj7);
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
    const obj8 = { style: tmp.segmentedControlContainer, onLayout: callback, children: null };
    const obj9 = { theme: tmp38, children: null };
    const obj10 = { variant: "experimental_Large", state: segmentedControlState };
    obj9.children = closure_14(tmp3(tmp4[45]).SegmentedControl, obj10);
    const items6 = [closure_14(tmp3(tmp4[38]).ThemeContextProvider, obj9)];
    const obj11 = { animated: true, variant: "text-xs/medium", style: null, children: null };
    const items7 = [obj6.headerSecondary, tmp.textCentered];
    obj11.style = items7;
    let intl = tmp3(tmp4[14]).intl;
    obj11.children = intl.string(tmp3(tmp4[14]).t.d5Gu9A);
    items6[1] = closure_14(tmp3(tmp4[40]).Text, obj11);
    obj8.children = items6;
    tmp42 = c15(hasSaveButton, obj8);
    tmp43 = closure_14;
  }
  const items8 = [themeIndex, mobileThemes, activeIndex2, stateFromStores];
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
  }, items8);
  const memo3 = obj2.useMemo(tmp6(tmp4[46]), []);
  const obj12 = {
    themes: mobileThemes,
    themeIndex,
    animatedStyles: obj6,
    data: memo3,
    useGradientBackground: "nitro" === themeSelector,
    isNitroLocked: null,
  };
  let tmp48 = tmp14;
  const tmp3Result12 = defaultIndex(isPreview[42]);
  if ("nitro" === themeSelector) {
    tmp48 = isPreview;
  }
  if (tmp48) {
    tmp48 = mobileThemes[themeIndex].type !== tmp3(tmp4[24]).ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  obj12.isNitroLocked = tmp48;
  const tmp43Result = tmp43(mobileThemes(isPreview[47]), obj12);
  const items9 = [{ width: "100%", height: "100%" }];
  let bgBasePrimary = !tmp14;
  if ("nitro" !== themeSelector) {
    bgBasePrimary = obj6.bgBasePrimary;
  }
  const obj13 = { style: items9, children: null };
  items9[1] = bgBasePrimary;
  let tmp43Result2 = null;
  if ("nitro" === themeSelector) {
    const obj14 = { themes: mobileThemes, themeIndex, isDimmed: true };
    tmp43Result2 = tmp43(tmp6(tmp4[48]), obj14);
  }
  const items10 = [tmp43Result2];
  const items11 = [tmp.container, ,];
  let landscapeContainer = tmp2;
  if (deviceWidth > deviceHeight) {
    landscapeContainer = tmp.landscapeContainer;
  }
  const obj15 = { bottom: true, style: items11, children: null };
  items11[1] = landscapeContainer;
  items11[2] = { marginTop: headerHeight };
  const items12 = [tmp43(mobileThemes(isPreview[50]), { animated: true, barStyle: tmp12 })];
  const obj16 = { children: null };
  if (deviceWidth > deviceHeight) {
    const obj17 = { style: tmp.landscapePreview, children: tmp43Result };
    const items13 = [tmp43(hasSaveButton, obj17)];
    const obj18 = { style: tmp.landscapeSelector, children: tmp42 };
    items13[1] = tmp43(hasSaveButton, obj18);
    obj16.children = items13;
    let tmp53 = obj16;
  } else {
    const items14 = [tmp43Result, tmp42];
    obj16.children = items14;
    tmp53 = obj16;
  }
  items12[1] = c15(stateFromStores, tmp53);
  obj15.children = items12;
  items10[1] = c15(defaultIndex(isPreview[49]).SafeAreaPaddingView, obj15);
  obj13.children = items10;
  return c15(mobileThemes(isPreview[33]).View, obj13);
}
const obj38 = { color: nativeDefault.colors.TEXT_BRAND };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectedThemePicker(arg0) {
      const cResult = mode(userPreset[19]).c(34);
      ({ onSaveTheme, headerTitle, canGoBack, themeSelector, hasSaveButton, hasOnyxNux, mode } = arg0);
      let str = "nitro";
      if (undefined !== themeSelector) {
        str = themeSelector;
      }
      let obj = mode(userPreset[19]);
      ({ width, height } = usingSystemTheme(userPreset[20])());
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [closure_6, ThemeStore, UnsyncedUserSettingsStore, SelectivelySyncedUserSettingsStore, closure_7];
        const fn = function i() {
          return {
            userPreset: closure_6.gradientPreset,
            isPreview: closure_6.isPreview,
            usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON,
            isSynced: SelectivelySyncedUserSettingsStore.shouldSync("appearance"),
            userTheme: theme.theme,
            hasCustomTheme: closure_7.hasCustomTheme(),
          };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp10 = fn;
        tmp9 = items;
      } else {
        [tmp9, tmp10] = cResult;
      }
      const tmp8 = usingSystemTheme(userPreset[20])();
      const stateFromStoresObject = mode(userPreset[21]).useStateFromStoresObject(tmp9, tmp10);
      ({ isSynced, usingSystemTheme } = stateFromStoresObject);
      userPreset = stateFromStoresObject.userPreset;
      ({ isPreview, userTheme } = stateFromStoresObject);
      const hasCustomTheme = stateFromStoresObject.hasCustomTheme;
      const tmpResult = mode(userPreset[21]);
      const allMobileThemes = mode(userPreset[22]).useAllMobileThemes(mode);
      let id;
      if (userPreset != null) {
        id = userPreset.id;
      }
      const tmp18 = id === mode(userPreset[23]).BackgroundGradientPresetId.EASTER_EGG;
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
                        const tmp28 = usingSystemTheme(tmp2[27])(tmp27);
                        class J {
                          constructor() {
                            if (null != mode) {
                              tmp11 = closure_0;
                              tmp12 = closure_2;
                              obj2 = closure_0(closure_2[26]);
                              tmp13 = closure_7;
                              syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
                            } else {
                              tmp2 = closure_0;
                              tmp3 = closure_2;
                              obj = closure_0(closure_2[26]);
                              tmp4 = userPreset;
                              tmp5 = usingSystemTheme;
                              tmp6 = closure_6;
                              tmp7 = userTheme;
                              tmp8 = hasCustomTheme;
                              tmp9 = obj;
                              syncedModeThemeIndex = obj.getUserThemeIndex(
                                userPreset,
                                usingSystemTheme,
                                closure_6,
                                userTheme,
                                hasCustomTheme,
                              );
                            }
                            return syncedModeThemeIndex;
                          }
                        }
                        let obj2 = {
                          defaultIndex: tmp28,
                          isPreview,
                          isSynced,
                          mobileThemes: tmp19,
                          deviceWidth: width,
                          deviceHeight: height,
                          canGoBack: tmp4,
                          themeSelector: str,
                          onSaveTheme,
                          hasSaveButton: tmp5,
                          hasOnyxNux: tmp6,
                          headerTitle,
                          mode,
                        };
                        const tmp32 = closure_14(ThemePicker, obj2);
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
                  obj2 = closure_0(closure_2[26]);
                  tmp13 = closure_7;
                  syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
                } else {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[26]);
                  tmp4 = userPreset;
                  tmp5 = usingSystemTheme;
                  tmp6 = closure_6;
                  tmp7 = userTheme;
                  tmp8 = hasCustomTheme;
                  tmp9 = obj;
                  syncedModeThemeIndex = obj.getUserThemeIndex(
                    userPreset,
                    usingSystemTheme,
                    closure_6,
                    userTheme,
                    hasCustomTheme,
                  );
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
                  let isThemeDarkResult = themes.isThemeDark(theme);
                } else {
                  isThemeDarkResult = themes.isThemeLight(theme.theme);
                }
              };
              class J {
                constructor() {
                  if (null != mode) {
                    tmp11 = closure_0;
                    tmp12 = closure_2;
                    obj2 = closure_0(closure_2[26]);
                    tmp13 = closure_7;
                    syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
                  } else {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[26]);
                    tmp4 = userPreset;
                    tmp5 = usingSystemTheme;
                    tmp6 = closure_6;
                    tmp7 = userTheme;
                    tmp8 = hasCustomTheme;
                    tmp9 = obj;
                    syncedModeThemeIndex = obj.getUserThemeIndex(
                      userPreset,
                      usingSystemTheme,
                      closure_6,
                      userTheme,
                      hasCustomTheme,
                    );
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
                  obj2 = closure_0(closure_2[26]);
                  tmp13 = closure_7;
                  syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
                } else {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[26]);
                  tmp4 = userPreset;
                  tmp5 = usingSystemTheme;
                  tmp6 = closure_6;
                  tmp7 = userTheme;
                  tmp8 = hasCustomTheme;
                  tmp9 = obj;
                  syncedModeThemeIndex = obj.getUserThemeIndex(
                    userPreset,
                    usingSystemTheme,
                    closure_6,
                    userTheme,
                    hasCustomTheme,
                  );
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
        class G {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            tmp3 = arg0.type !== closure_0(closure_2[24]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
            if (!tmp3) {
              tmp3 = arg0.id !== tmp(tmp2[23]).BackgroundGradientPresetId.EASTER_EGG;
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
              obj2 = closure_0(closure_2[26]);
              tmp13 = closure_7;
              syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
            } else {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[26]);
              tmp4 = userPreset;
              tmp5 = usingSystemTheme;
              tmp6 = closure_6;
              tmp7 = userTheme;
              tmp8 = hasCustomTheme;
              tmp9 = obj;
              syncedModeThemeIndex = obj.getUserThemeIndex(
                userPreset,
                usingSystemTheme,
                closure_6,
                userTheme,
                hasCustomTheme,
              );
            }
            return syncedModeThemeIndex;
          }
        }
        cResult[6] = G;
      } else {
        class G {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            tmp3 = arg0.type !== closure_0(closure_2[24]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
            if (!tmp3) {
              tmp3 = arg0.id !== tmp(tmp2[23]).BackgroundGradientPresetId.EASTER_EGG;
            }
            if (!tmp3) {
              tmp3 = closure_5;
            }
            return tmp3;
          }
        }
      }
      const found = allMobileThemes.filter(G);
      cResult[2] = allMobileThemes;
      cResult[3] = tmp18;
      cResult[4] = found;
      const tmpResult2 = mode(userPreset[22]);
    }
  : function ConnectedThemePicker(canGoBack) {
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
      noop = undefined;
      let memo;
      let memo1;
      let memo2;
      ({ width, height } = require("useWindowDimensions")());
      const tmp = require("useWindowDimensions")();
      items = [memo, ThemeStore, UnsyncedUserSettingsStore, memo2, memo1];
      const stateFromStoresObject = mode(userPreset[21]).useStateFromStoresObject(items, () => ({
        userPreset: memo.gradientPreset,
        isPreview: memo.isPreview,
        usingSystemTheme: useSystemTheme.useSystemTheme === constants2.ON,
        isSynced: memo2.shouldSync("appearance"),
        userTheme: theme.theme,
        hasCustomTheme: memo1.hasCustomTheme(),
      }));
      ({ usingSystemTheme: c1, userPreset } = stateFromStoresObject);
      ({ userTheme: c3, hasCustomTheme: c4, isSynced, isPreview } = stateFromStoresObject);
      let obj = mode(userPreset[21]);
      const allMobileThemes = mode(userPreset[22]).useAllMobileThemes(mode);
      const items1 = [userPreset, allMobileThemes];
      memo = noop.useMemo(() => {
        let id;
        if (userPreset != null) {
          id = userPreset.id;
        }
        closure_0 = id === preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG;
        return allMobileThemes.filter((type) => {
          let tmp3 = type.type !== mode(userPreset[24]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
          if (!tmp3) {
            tmp3 = type.id !== mode(userPreset[23]).BackgroundGradientPresetId.EASTER_EGG;
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
              let isThemeDarkResult = mode(userPreset[25]).isThemeDark(theme);
              const obj2 = mode(userPreset[25]);
            } else {
              isThemeDarkResult = mode(userPreset[25]).isThemeLight(theme.theme);
              const obj = mode(userPreset[25]);
            }
          });
        }
        return found;
      }, items3);
      let obj2 = mode(userPreset[22]);
      return closure_14(ThemePicker, {
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
        mode,
      });
    };
