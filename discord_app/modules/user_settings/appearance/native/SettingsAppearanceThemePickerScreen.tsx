// === Module 14612: ThemeTypes ===

// Module 14612 (ThemeTypes)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 10523 */;
import ThemeLightIcon from "ThemeLightIcon" /* 14613 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 14615 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled" /* 4195 */;
import reset from "reset" /* 1346 */;
import initialize from "initialize" /* 1303 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH" /* 1304 */;
import SystemThemeState from "SystemThemeState" /* 1305 */;
import { ThemeTypes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import obj132 from "obj132" /* 500 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
({ SystemTheme: unpackModuleId, SystemThemeState: closure_12 } = SystemThemeState);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let createCacheKey = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_16, alignItems: "center", gap: ThemesDefault.space.PX_24, marginBottom: null };
let num = 0;
if (!obj132.isIOS()) {
  num = ThemesDefault.space.PX_16;
}
createCacheKey = { container: createCacheKey, landscapeContainer: { flexDirection: "row", gap: ThemesDefault.space.PX_16 }, landscapePreview: { flex: 1 }, landscapeSelector: { flex: 1, justifyContent: "center", overflow: "hidden" }, segmentedControlContainer: num, textCentered: null };
obj132 = { width: "100%", gap: ThemesDefault.space.PX_16, alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[4] = obj132;
createCacheKey[5] = { textAlign: "center" };
let closure_17 = createCacheKey.createStyles(createCacheKey);
let items = [, , , ];
({ LIGHT: arr[0], DARKER: arr[1], MIDNIGHT: arr[2], DARK: arr[3] } = ThemeTypes);
let closure_19 = items.map((item, index) => {
  const internal = ThemesDefault.internal;
  return internal.resolveSemanticColor(item, ThemesDefault.colors.CARD_SECONDARY_BG);
});
let closure_20 = items.map((item, index) => index);
let closure_21 = createCacheKey.createAnimatedThemedStyles({ backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW }, items);
let closure_22 = createCacheKey.createAnimatedThemedStyles({ backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE }, items);
let closure_23 = createCacheKey.createAnimatedThemedStyles({ backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG }, items);
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_24 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
let closure_25 = createCacheKey.createAnimatedThemedStyles({ backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH }, items);
createCacheKey = { color: ThemesDefault.colors.TEXT_DEFAULT };
let closure_26 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
let closure_27 = createCacheKey.createAnimatedThemedStyles({ color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, items);
createCacheKey = { color: ThemesDefault.colors.TEXT_SUBTLE };
let closure_28 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
let closure_29 = createCacheKey.createAnimatedThemedStyles({ color: ThemesDefault.colors.TEXT_MUTED }, items);
createCacheKey = { borderColor: ThemesDefault.colors.BORDER_MUTED };
let closure_30 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
let closure_31 = createCacheKey.createAnimatedThemedStyles({ borderColor: ThemesDefault.colors.BORDER_STRONG }, items);
createCacheKey = { borderColor: ThemesDefault.colors.BORDER_NORMAL };
let closure_32 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
let closure_33 = createCacheKey.createAnimatedThemedStyles({ tintColor: ThemesDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON }, items);
createCacheKey = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
let closure_34 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
let closure_35 = createCacheKey.createAnimatedThemedStyles({ tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT }, items);
createCacheKey = { color: ThemesDefault.colors.TEXT_BRAND };
let closure_36 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
function getSegmentedControlItems() {
  let obj = { label: null, id: null, icon: null, page: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.K2sFfo);
  obj[1] = ThemeTypes.LIGHT;
  obj[2] = callback(ThemeLightIcon.ThemeLightIcon, {});
  items = [obj, , ];
  obj = { label: null, id: null, icon: null, page: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.b8Cei3);
  obj[1] = ThemeTypes.DARKER;
  obj[2] = callback(ThemeDarkIcon.ThemeDarkIcon, {});
  items[1] = obj;
  obj = { label: null, id: null, icon: null, page: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.pQwSpQ);
  obj[1] = ThemeTypes.MIDNIGHT;
  obj[2] = callback(ThemeMidnightIcon.ThemeMidnightIcon, {});
  items[2] = obj;
  return items;
}
let closure_38 = { code: "function SettingsAppearanceThemePickerScreenTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
let closure_39 = { code: "function SettingsAppearanceThemePickerScreenTsx2(activeIndex){const{runOnJS,setPendingThemeIndex}=this.__closure;runOnJS(setPendingThemeIndex)(Math.round(activeIndex));}" };
let closure_40 = { code: "function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStops,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),cardSecondaryStops,cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(bgRaised,timingStandard)};}}" };
function ThemePicker(defaultIndex) {
  defaultIndex = defaultIndex.defaultIndex;
  const mobileThemes = defaultIndex.mobileThemes;
  const isPreview = defaultIndex.isPreview;
  const isSynced = defaultIndex.isSynced;
  ({ deviceWidth, canGoBack } = defaultIndex);
  const hasSaveButton = defaultIndex.hasSaveButton;
  const headerTitle = defaultIndex.headerTitle;
  const onSaveTheme = defaultIndex.onSaveTheme;
  const isRefreshEnabled = defaultIndex.isRefreshEnabled;
  const mode = defaultIndex.mode;
  let callback;
  c16 = undefined;
  let stateFromStores;
  c18 = undefined;
  let activeIndex;
  let activeIndex2;
  let memo2;
  let callback1;
  let callback2;
  ({ deviceHeight, themeSelector, hasMidnightNux } = defaultIndex);
  let tmp = stateFromStores();
  let obj = defaultIndex(isPreview[28]);
  const navigation = obj.useNavigation();
  const analyticsLocations = mobileThemes(isPreview[29])(mobileThemes(isPreview[30]).CLIENT_THEMES_THEME_SELECTOR).analyticsLocations;
  obj1 = canGoBack;
  const tmp9 = isSynced(canGoBack.useState(defaultIndex), 2);
  const first = tmp9[0];
  closure_13 = tmp9[1];
  let obj2 = defaultIndex(isPreview[25]);
  let str = "dark-content";
  if (obj2.isThemeDark(mobileThemes[defaultIndex].theme)) {
    str = "light-content";
  }
  let tmp8Result = tmp8(canGoBack.useState(str), 2);
  [tmp12, c14] = tmp8Result;
  let tmp3Result = tmp3(tmp4[31]);
  callback2 = tmp14;
  const headerHeight = tmp3Result.useHeaderHeight();
  tmp8Result = tmp8(obj1.useState(0), 2);
  [tmp16, c16] = tmp8Result;
  callback = obj1.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  items = [isRefreshEnabled];
  const memo = obj1.useMemo(getSegmentedControlItems, []);
  const memo1 = obj1.useMemo(() => {
    if (mode.theme === lib.DARK) {
      if (!isRefreshEnabled) {
        let index = _undefined2.indexOf(tmp.DARKER);
      }
      return index;
    }
    index = _undefined2.findIndex((item, index) => item === theme.theme);
  }, items);
  tmp3Result = tmp3(tmp4[20]);
  const items1 = [mode];
  stateFromStores = tmp3Result.useStateFromStores(items1, () => defaultIndex(isPreview[25]).isThemeLight(mode.systemTheme) ? constants.LIGHT : constants.DARKER);
  const tmp7 = mobileThemes(isPreview[29]);
  [tmp22, tmp23] = isSynced(obj1.useState(memo1), 2);
  c18 = tmp23;
  const tmp8Result1 = isSynced(obj1.useState(memo1), 2);
  const segmentedControlState = defaultIndex(isPreview[32]).useSegmentedControlState({ items: memo, pageWidth: tmp16, defaultIndex: memo1 });
  activeIndex = segmentedControlState.activeIndex;
  const tmp3Result1 = defaultIndex(isPreview[32]);
  class Z {
    constructor() {
      return activeIndex.get();
    }
  }
  Z.__closure = { activeIndex };
  Z.__workletHash = 12670867470872;
  Z.__initData = closure_38;
  let fn = function q(arg0) {
    const obj = defaultIndex(isPreview[33]);
    defaultIndex(isPreview[33]).runOnJS(c18)(Math.round(arg0));
  };
  obj = { runOnJS: tmp3(tmp4[33]).runOnJS, setPendingThemeIndex: tmp23 };
  fn.__closure = obj;
  fn.__workletHash = 7003433484889;
  fn.__initData = closure_39;
  const animatedReaction = defaultIndex(isPreview[33]).useAnimatedReaction(Z, fn);
  const tmp3Result2 = defaultIndex(isPreview[33]);
  let num = 1;
  if ("light" === mobileThemes[defaultIndex].theme) {
    num = 0;
  }
  activeIndex2 = segmentedControlState.activeIndex;
  if ("nitro" === themeSelector) {
    activeIndex2 = tmp3Result3.useSharedValue(num);
  }
  memo2 = obj1.useMemo(() => defaultIndex(isPreview[34]).hexWithOpacity(defaultIndex(isPreview[35]).OverlayColors.LIGHT, defaultIndex(isPreview[35]).OverlayOpacity.LEVEL_1), []);
  tmp3Result3 = defaultIndex(isPreview[33]);
  class De {
    constructor() {
      tmp = mobileThemes;
      tmp2 = closure_15;
      if (closure_15) {
        value = closure_12;
      } else {
        tmp3 = closure_20;
        value = closure_20.get();
      }
      if (tmp2) {
        tmp5 = defaultIndex;
        tmp6 = isPreview;
        if (tmp[value].type !== defaultIndex(isPreview[24]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
          obj = { backgroundColor: null };
          tmp8 = defaultIndex;
          tmp9 = isPreview;
          obj5 = defaultIndex(isPreview[36]);
          tmp10 = closure_21;
          tmp11 = defaultIndex;
          tmp12 = isPreview;
          obj[0] = obj5.withTiming(closure_21, defaultIndex(isPreview[37]).timingStandard);
        }
        return obj;
      }
      obj = { backgroundColor: null };
      obj2 = defaultIndex(isPreview[36]);
      obj3 = defaultIndex(isPreview[33]);
      interpolateColorResult = obj3.interpolateColor(closure_20.get(), closure_20, activeIndex);
      obj[0] = obj2.withTiming(interpolateColorResult, defaultIndex(isPreview[37]).timingStandard);
      return;
    }
  }
  obj = { mobileThemes, isClientThemesSelector: tmp14, currentThemeIndex: first, themeTypeIndex: activeIndex2, ClientThemeType: tmp3(tmp4[24]).ClientThemeType, withTiming: tmp3(tmp4[36]).withTiming, interpolateColor: tmp3(tmp4[33]).interpolateColor, cardSecondaryStops: activeIndex2, cardSecondaryStyles: activeIndex, timingStandard: tmp3(tmp4[37]).timingStandard, bgRaised: memo2 };
  De.__closure = obj;
  De.__workletHash = 10807943820408;
  De.__initData = closure_40;
  obj1 = { textNormal: null, textMuted: null, textBrand: null, borderFaint: null, borderStrong: null, borderNormal: null, headerPrimary: null, headerSecondary: null, activityIcon: null, bgModSubtle: null, bgModStrong: null, iconHeaderSecondary: null, iconInteractive: null, bgBasePrimary: null, bgSurfaceOverlay: null, bgSurfaceHigh: null, bgRaised: null };
  const animatedStyle = defaultIndex(isPreview[33]).useAnimatedStyle(De);
  obj1[0] = callback4(activeIndex2);
  obj1[1] = callback7(activeIndex2);
  obj1[2] = callback14(activeIndex2);
  obj1[3] = callback8(activeIndex2);
  obj1[4] = callback9(activeIndex2);
  obj1[5] = callback10(activeIndex2);
  obj1[6] = callback5(activeIndex2);
  obj1[7] = callback6(activeIndex2);
  obj1[8] = callback11(activeIndex2);
  obj1[9] = obj1(activeIndex2);
  obj1[10] = callback1(activeIndex2);
  obj1[11] = callback12(activeIndex2);
  obj1[12] = callback13(activeIndex2);
  obj1[13] = memo2(activeIndex2);
  obj1[14] = callback2(activeIndex2);
  obj1[15] = callback3(activeIndex2);
  obj1[16] = animatedStyle;
  const items2 = [first, "nitro" === themeSelector, activeIndex2, onSaveTheme, mobileThemes, isSynced, analyticsLocations, navigation, mode];
  callback1 = obj1.useCallback(() => {
    if (closure_15) {
      let tmp3 = mobileThemes[first];
    } else {
      tmp3 = mobileThemes[activeIndex2.get(activeIndex2)];
    }
    if (null != mode) {
      const result = defaultIndex(isPreview[27]).handleSaveSyncedModeTheme(tmp3, tmp5, analyticsLocations);
      const obj2 = defaultIndex(isPreview[27]);
    } else {
      defaultIndex(isPreview[27]).handleSaveTheme(tmp3, analyticsLocations, isSynced);
      const obj = defaultIndex(isPreview[27]);
    }
    if (null == onSaveTheme) {
      navigation.goBack();
    } else {
      tmp15();
    }
  }, items2);
  const items3 = [hasSaveButton, mobileThemes, first, defaultIndex, isPreview, analyticsLocations, isSynced, mode];
  callback2 = obj1.useCallback(() => {
    if (!hasSaveButton) {
      if (null != mode) {
        if (tmp !== defaultIndex) {
          const result = defaultIndex(isPreview[27]).handleSaveSyncedModeTheme(tmp2, tmp6, analyticsLocations);
          const obj2 = defaultIndex(isPreview[27]);
        }
      } else {
        defaultIndex(isPreview[27]).handleSaveTheme(tmp2, analyticsLocations, isSynced);
        const obj = defaultIndex(isPreview[27]);
      }
    }
  }, items3);
  const items4 = [navigation, callback2];
  const effect = obj1.useEffect(() => navigation.addListener("beforeRemove", () => {
    callback();
  }), items4);
  const items5 = [first, callback1, analyticsLocations, mobileThemes, isSynced, isPreview, headerTitle, "nitro" === themeSelector, navigation, , , , , , , ];
  ({ textNormal: arr6[9], textBrand: arr6[10] } = obj1);
  items5[11] = canGoBack;
  items5[12] = onSaveTheme;
  items5[13] = hasSaveButton;
  items5[14] = tmp22;
  items5[15] = stateFromStores;
  const effect1 = obj1.useEffect(() => {
    let tmp = closure_15;
    if (closure_15) {
      tmp = isPreview;
    }
    if (tmp) {
      tmp = mobileThemes[first].type !== defaultIndex(isPreview[24]).ClientThemeType.STANDARD_BACKGROUND_THEME;
    }
    closure_0 = tmp;
    let obj = defaultIndex(isPreview[13]);
    let fn;
    if (!obj.isIOS()) {
      fn = () => callback2(closure_5, {});
    }
    obj = {
      headerBackground: fn,
      headerTransparent: true,
      headerBackVisible: false,
      headerLeft() {
        if (closure_4) {
          let theme = closure_17;
          let tmp4;
          if (null != table[closure_12]) {
            if ("system" !== tmp3.theme) {
              theme = tmp3.theme;
            }
            tmp4 = theme;
          }
          let obj = { theme: null, children: null };
          obj[0] = tmp4;
          obj = { navigation: null };
          obj[0] = closure_10;
          obj[1] = closure_1_14(mobileThemes(isPreview[39]), obj);
          return closure_1_14(callback(isPreview[38]).ThemeContextProvider, obj);
        } else {
          return null;
        }
      },
      headerTitle() {
        const obj = { animated: true, variant: "redesign/heading-18/bold", style: textNormal.textNormal, children: null };
        let stringResult = closure_6;
        if (closure_6 == null) {
          const intl = callback(isPreview[15]).intl;
          stringResult = intl.string(callback(isPreview[15]).t.XAS5Pi);
        }
        obj[3] = stringResult;
        return closure_1_14(callback(isPreview[40]).Text, obj);
      },
      headerTitleAlign: "center",
      headerRight: null
    };
    let fn2;
    if (hasSaveButton) {
      fn2 = () => {
        let obj = closure_0;
        items = [obj1.textBrand, ];
        if (closure_0) {
          obj = { opacity: 0.4 };
        }
        obj = { animated: true, variant: "text-md/semibold", style: items, children: null };
        items[1] = obj;
        const intl = defaultIndex(isPreview[15]).intl;
        obj[3] = intl.string(defaultIndex(isPreview[15]).t.i4jeWR);
        obj[3] = callback(defaultIndex(isPreview[40]).Text, obj);
        return callback(defaultIndex(isPreview[41]).PressableOpacity, obj);
      };
    }
    obj[6] = fn2;
    navigation.setOptions(obj);
  }, items5);
  const tmp3Result4 = defaultIndex(isPreview[33]);
  defaultIndex(isPreview[42]).useNavigatorBackPressHandler(() => !canGoBack);
  const items6 = [first];
  let rounded = deviceWidth;
  callback3 = obj1.useCallback((mobileThemesIndex) => {
    if (mobileThemesIndex !== first) {
      lib(mobileThemesIndex);
      const result = defaultIndex(isPreview[43]).updateMobilePendingThemeIndex(mobileThemesIndex);
      const obj = defaultIndex(isPreview[43]);
    }
  }, items6);
  if (deviceWidth > deviceHeight) {
    const _Math = Math;
    rounded = Math.floor(deviceWidth / 2);
  }
  if ("nitro" === themeSelector) {
    obj2 = { themes: null, currentThemeIndex: null, isPreview: null, isSynced: null, defaultIndex: null, deviceWidth: null, animatedStyles: null, hasMidnightNux: null, isRefreshEnabled: null, onThemeSelected: null };
    obj2[0] = mobileThemes;
    obj2[1] = first;
    obj2[2] = isPreview;
    obj2[3] = isSynced;
    obj2[4] = defaultIndex;
    obj2[5] = rounded;
    obj2[6] = obj1;
    obj2[7] = hasMidnightNux;
    obj2[8] = isRefreshEnabled;
    obj2[9] = callback3;
    let tmp42 = callback(tmp6(tmp4[44]), obj2);
    let tmp43 = callback;
  } else {
    let tmp38;
    if (null != mobileThemes[tmp22]) {
      let theme = stateFromStores;
      if ("system" !== tmp36.theme) {
        theme = tmp36.theme;
      }
      tmp38 = theme;
    }
    let obj3 = { style: null, onLayout: null, children: null };
    obj3[0] = tmp.segmentedControlContainer;
    obj3[1] = callback;
    const obj4 = { theme: null, children: null };
    obj4[0] = tmp38;
    let obj5 = { variant: "experimental_Large", state: null };
    obj5[1] = segmentedControlState;
    obj4[1] = callback(tmp3(tmp4[45]).SegmentedControl, obj5);
    const items7 = [callback(tmp3(tmp4[38]).ThemeContextProvider, obj4), ];
    const obj6 = { animated: true, variant: "text-xs/medium", style: null, children: null };
    const items8 = [obj1.headerSecondary, tmp.textCentered];
    obj6[2] = items8;
    let intl = tmp3(tmp4[15]).intl;
    obj6[3] = intl.string(tmp3(tmp4[15]).t.d5Gu9A);
    items7[1] = callback(tmp3(tmp4[40]).Text, obj6);
    obj3[2] = items7;
    tmp42 = callback2(hasSaveButton, obj3);
    tmp43 = callback;
  }
  const items9 = [first, mobileThemes, activeIndex2, stateFromStores, isRefreshEnabled];
  const effect2 = obj1.useEffect(() => {
    if ("system" === mobileThemes[first].theme) {
      let DARKER2 = stateFromStores;
      if (stateFromStores == null) {
        DARKER2 = lib.DARKER;
      }
      let DARKER = DARKER2;
    } else {
      DARKER = tmp.theme;
    }
    if (!tmp4) {
      DARKER = lib.DARKER;
    }
    const result = activeIndex2.set(_undefined2.indexOf(DARKER));
    let str = "light-content";
    if (DARKER === lib.LIGHT) {
      str = "dark-content";
    }
    _undefined(str);
    tmp4 = DARKER !== lib.DARK || isRefreshEnabled;
  }, items9);
  const memo3 = obj1.useMemo(tmp6(tmp4[46]), []);
  const obj7 = { themes: mobileThemes, themeIndex: first, animatedStyles: obj1, data: memo3, useGradientBackground: "nitro" === themeSelector, isNitroLocked: null };
  let tmp48 = tmp14;
  const tmp3Result5 = defaultIndex(isPreview[42]);
  if ("nitro" === themeSelector) {
    tmp48 = isPreview;
  }
  if (tmp48) {
    tmp48 = mobileThemes[first].type !== tmp3(tmp4[24]).ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  obj7[5] = tmp48;
  let tmp43Result = tmp43(mobileThemes(isPreview[47]), obj7);
  const items10 = [{ width: "100%", height: "100%" }, ];
  let bgBasePrimary = !tmp14;
  if ("nitro" !== themeSelector) {
    bgBasePrimary = obj1.bgBasePrimary;
  }
  const obj8 = { style: items10, children: null };
  items10[1] = bgBasePrimary;
  tmp43Result = null;
  if ("nitro" === themeSelector) {
    const obj9 = { themes: null, themeIndex: null, isDimmed: true };
    obj9[0] = mobileThemes;
    obj9[1] = first;
    tmp43Result = tmp43(tmp6(tmp4[48]), obj9);
  }
  const items11 = [tmp43Result, ];
  const items12 = [tmp.container, , ];
  let landscapeContainer = tmp2;
  if (deviceWidth > deviceHeight) {
    landscapeContainer = tmp.landscapeContainer;
  }
  const obj10 = { bottom: true, style: items12, children: null };
  items12[1] = landscapeContainer;
  items12[2] = { marginTop: headerHeight };
  const items13 = [tmp43(mobileThemes(isPreview[50]), { animated: true, barStyle: tmp12 }), ];
  const obj11 = { children: null };
  if (deviceWidth > deviceHeight) {
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.landscapePreview;
    obj12[1] = tmp43Result;
    const items14 = [tmp43(hasSaveButton, obj12), ];
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.landscapeSelector;
    obj13[1] = tmp42;
    items14[1] = tmp43(hasSaveButton, obj13);
    obj11[0] = items14;
    let tmp53 = obj11;
  } else {
    const items15 = [tmp43Result, tmp42];
    obj11[0] = items15;
    tmp53 = obj11;
  }
  items13[1] = callback2(c16, tmp53);
  obj10[2] = items13;
  items11[1] = callback2(defaultIndex(isPreview[49]).SafeAreaPaddingView, obj10);
  obj8[1] = items11;
  return callback2(mobileThemes(isPreview[33]).View, obj8);
}
let result = obj132.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx");

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
  let React;
  closure_6 = undefined;
  let memo;
  let memo1;
  let memo2;
  ({ width, height } = importDefault(userPreset[19])());
  let obj = mode(userPreset[20]);
  items = [closure_6, memo2, closure_10, memo1, memo];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ userPreset: closure_6.gradientPreset, isPreview: closure_6.isPreview, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, isSynced: memo1.shouldSync("appearance"), userTheme: memo2.theme, hasCustomTheme: memo.hasCustomTheme() }));
  ({ usingSystemTheme: c1, userPreset } = stateFromStoresObject);
  ({ userTheme: c3, hasCustomTheme: c4, isSynced, isPreview } = stateFromStoresObject);
  const tmp = importDefault(userPreset[19])();
  const allMobileThemes = mode(userPreset[21]).useAllMobileThemes(mode);
  const tmp4 = importDefault(userPreset[22])("SettingsAppearanceThemePickerScreen");
  closure_6 = tmp4;
  const items1 = [userPreset, allMobileThemes];
  memo = React.useMemo(() => {
    let id;
    if (userPreset != null) {
      id = userPreset.id;
    }
    closure_0 = id === mode(userPreset[23]).BackgroundGradientPresetId.EASTER_EGG;
    return allMobileThemes.filter((item, index) => {
      let tmp3 = item.type !== callback(userPreset[24]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (!tmp3) {
        tmp3 = item.id !== callback(userPreset[23]).BackgroundGradientPresetId.EASTER_EGG;
      }
      if (!tmp3) {
        tmp3 = callback;
      }
      return tmp3;
    });
  }, items1);
  const items2 = [memo, tmp4];
  memo1 = React.useMemo(() => {
    if (closure_6) {
      items = memo;
    } else {
      items = [, ];
      [arr2[1], arr2[0]] = memo;
      HermesBuiltin.arraySpread(memo.slice(2), 2);
    }
    return items;
  }, items2);
  const items3 = [memo1, mode];
  memo2 = React.useMemo(() => {
    if (null == mode) {
      let found = memo1;
    } else {
      found = memo1.filter((item, index) => {
        let theme = item;
        if ("system" === item.theme) {
          return tmp;
        } else if (closure_0 === closure_1_11.DARK) {
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
  obj = {
    defaultIndex: importDefault(userPreset[26])(() => {
      if (null != mode) {
        let syncedModeThemeIndex = mode(userPreset[27]).getSyncedModeThemeIndex(memo2, tmp);
        const obj2 = mode(userPreset[27]);
      } else {
        const obj = mode(userPreset[27]);
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
    isRefreshEnabled: tmp4,
    mode
  };
  return callback(ThemePicker, obj);
};