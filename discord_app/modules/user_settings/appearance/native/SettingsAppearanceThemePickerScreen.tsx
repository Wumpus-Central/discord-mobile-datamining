// === Module 15266: ThemeTypes ===

// Module 15266 (ThemeTypes)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 11320 */;
import ThemeLightIcon from "ThemeLightIcon" /* 15267 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 15269 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "reset" /* 4379 */;
import closure_7 from "reset" /* 1228 */;
import closure_8 from "initialize" /* 1184 */;
import closure_9 from "handleThemeChange" /* 1183 */;
import closure_10 from "CHANNEL_SIDEBAR_WIDTH" /* 1185 */;
import SystemThemeState from "SystemThemeState" /* 1186 */;
import { ThemeTypes } from "sum" /* 1085 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import set from "set" /* 1115 */;

require = arg1;
({ SystemTheme: unpackModuleId, SystemThemeState: closure_12 } = SystemThemeState);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
createCacheKey = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_16, alignItems: "center", gap: ThemesDefault.space.PX_24, marginBottom: null };
let num = 0;
if (!set.isIOS()) {
  num = ThemesDefault.space.PX_16;
}
createCacheKey = { container: createCacheKey, landscapeContainer: { flexDirection: "row", gap: ThemesDefault.space.PX_16 }, landscapePreview: { flex: 1 }, landscapeSelector: { flex: 1, justifyContent: "center", overflow: "hidden" }, segmentedControlContainer: num, textCentered: null };
set = { width: "100%", gap: ThemesDefault.space.PX_16, alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[4] = set;
createCacheKey[5] = { textAlign: "center" };
let closure_17 = createCacheKey.createStyles(createCacheKey);
let items = [, , , ];
({ LIGHT: arr[0], DARKER: arr[1], MIDNIGHT: arr[2], DARK: arr[3] } = ThemeTypes);
let closure_19 = items.map((theme) => {
  const internal = ThemesDefault.internal;
  return internal.resolveSemanticColor(theme, ThemesDefault.colors.CARD_SECONDARY_BG);
});
let closure_20 = items.map((arg0, arg1) => arg1);
let obj1 = { flexDirection: "row", gap: ThemesDefault.space.PX_16 };
let closure_21 = createCacheKey.createAnimatedThemedStyles({ backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW }, items);
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let closure_22 = createCacheKey.createAnimatedThemedStyles({ backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE }, items);
let obj4 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_23 = createCacheKey.createAnimatedThemedStyles({ backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG }, items);
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_24 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
let obj5 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
let closure_25 = createCacheKey.createAnimatedThemedStyles({ backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH }, items);
createCacheKey = { color: ThemesDefault.colors.TEXT_DEFAULT };
let closure_26 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
let obj7 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_27 = createCacheKey.createAnimatedThemedStyles({ color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, items);
createCacheKey = { color: ThemesDefault.colors.TEXT_SUBTLE };
let closure_28 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
let obj9 = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_29 = createCacheKey.createAnimatedThemedStyles({ color: ThemesDefault.colors.TEXT_MUTED }, items);
createCacheKey = { borderColor: ThemesDefault.colors.BORDER_MUTED };
let closure_30 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
let obj11 = { color: ThemesDefault.colors.TEXT_MUTED };
let closure_31 = createCacheKey.createAnimatedThemedStyles({ borderColor: ThemesDefault.colors.BORDER_STRONG }, items);
createCacheKey = { borderColor: ThemesDefault.colors.BORDER_NORMAL };
let closure_32 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
let obj13 = { borderColor: ThemesDefault.colors.BORDER_STRONG };
let closure_33 = createCacheKey.createAnimatedThemedStyles({ tintColor: ThemesDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON }, items);
createCacheKey = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
let closure_34 = createCacheKey.createAnimatedThemedStyles(createCacheKey, items);
const obj15 = { tintColor: ThemesDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON };
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
  const mode = defaultIndex.mode;
  let navigation;
  let analyticsLocations;
  let first;
  closure_12 = undefined;
  c13 = undefined;
  let callback;
  let callback2;
  let stateFromStores;
  let callback3;
  let activeIndex;
  let activeIndex2;
  let memo2;
  obj1 = undefined;
  let callback1;
  callback2 = undefined;
  ({ deviceHeight, themeSelector, hasMidnightNux } = defaultIndex);
  let tmp = callback3();
  let obj = defaultIndex(isPreview[27]);
  navigation = obj.useNavigation();
  analyticsLocations = mobileThemes(isPreview[28])(mobileThemes(isPreview[29]).CLIENT_THEMES_THEME_SELECTOR).analyticsLocations;
  obj1 = canGoBack;
  const tmp9 = isSynced(canGoBack.useState(defaultIndex), 2);
  first = tmp9[0];
  closure_12 = tmp9[1];
  let obj2 = defaultIndex(isPreview[24]);
  let str = "dark-content";
  if (obj2.isThemeDark(mobileThemes[defaultIndex].theme)) {
    str = "light-content";
  }
  let tmp8Result = tmp8(canGoBack.useState(str), 2);
  [tmp12, c13] = tmp8Result;
  let tmp3Result = tmp3(tmp4[30]);
  callback = tmp14;
  const headerHeight = tmp3Result.useHeaderHeight();
  tmp8Result = tmp8(obj1.useState(0), 2);
  [tmp16, c15] = tmp8Result;
  callback = obj1.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = obj1.useMemo(getSegmentedControlItems, []);
  const memo1 = obj1.useMemo(() => activeIndex.findIndex((arg0) => arg0 === theme.theme), []);
  tmp3Result = tmp3(tmp4[20]);
  items = [navigation];
  stateFromStores = tmp3Result.useStateFromStores(items, () => defaultIndex(isPreview[24]).isThemeLight(navigation.systemTheme) ? c13.LIGHT : c13.DARKER);
  const tmp7 = mobileThemes(isPreview[28]);
  [tmp22, tmp23] = isSynced(obj1.useState(memo1), 2);
  callback3 = tmp23;
  const tmp8Result1 = isSynced(obj1.useState(memo1), 2);
  const segmentedControlState = defaultIndex(isPreview[31]).useSegmentedControlState({ items: memo, pageWidth: tmp16, defaultIndex: memo1 });
  activeIndex = segmentedControlState.activeIndex;
  const tmp3Result1 = defaultIndex(isPreview[31]);
  let fn = function q() {
    return activeIndex.get();
  };
  fn.__closure = { activeIndex };
  fn.__workletHash = 12670867470872;
  fn.__initData = closure_38;
  class Q {
    constructor(arg0) {
      obj = defaultIndex(isPreview[32]);
      runOnJSResult = obj.runOnJS(closure_17);
      tmpResult = runOnJSResult(Math.round(defaultIndex));
      return;
    }
  }
  obj = { runOnJS: tmp3(tmp4[32]).runOnJS, setPendingThemeIndex: tmp23 };
  Q.__closure = obj;
  Q.__workletHash = 7003433484889;
  Q.__initData = closure_39;
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
  memo2 = obj1.useMemo(() => defaultIndex(isPreview[33]).hexWithOpacity(defaultIndex(isPreview[34]).OverlayColors.LIGHT, defaultIndex(isPreview[34]).OverlayOpacity.LEVEL_1), []);
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
        tmp5 = defaultIndex;
        tmp6 = isPreview;
        if (tmp[value].type !== defaultIndex(isPreview[23]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
          obj = { backgroundColor: null };
          tmp8 = defaultIndex;
          tmp9 = isPreview;
          obj5 = defaultIndex(isPreview[35]);
          tmp10 = closure_20;
          tmp11 = defaultIndex;
          tmp12 = isPreview;
          obj[0] = obj5.withTiming(closure_20, defaultIndex(isPreview[36]).timingStandard);
        }
        return obj;
      }
      obj = { backgroundColor: null };
      obj2 = defaultIndex(isPreview[35]);
      obj3 = defaultIndex(isPreview[32]);
      interpolateColorResult = obj3.interpolateColor(closure_19.get(), closure_20, closure_19);
      obj[0] = obj2.withTiming(interpolateColorResult, defaultIndex(isPreview[36]).timingStandard);
      return;
    }
  }
  obj = { mobileThemes, isClientThemesSelector: tmp14, currentThemeIndex: first, themeTypeIndex: activeIndex2, ClientThemeType: tmp3(tmp4[23]).ClientThemeType, withTiming: tmp3(tmp4[35]).withTiming, interpolateColor: tmp3(tmp4[32]).interpolateColor, cardSecondaryStops: memo2, cardSecondaryStyles: activeIndex2, timingStandard: tmp3(tmp4[36]).timingStandard, bgRaised: memo2 };
  Re.__closure = obj;
  Re.__workletHash = 10807943820408;
  Re.__initData = closure_40;
  obj1 = { textNormal: null, textMuted: null, textBrand: null, borderFaint: null, borderStrong: null, borderNormal: null, headerPrimary: null, headerSecondary: null, activityIcon: null, bgModSubtle: null, bgModStrong: null, iconHeaderSecondary: null, iconInteractive: null, bgBasePrimary: null, bgSurfaceOverlay: null, bgSurfaceHigh: null, bgRaised: null };
  const animatedStyle = defaultIndex(isPreview[32]).useAnimatedStyle(Re);
  obj1[0] = callback6(activeIndex2);
  obj1[1] = callback9(activeIndex2);
  obj1[2] = callback16(activeIndex2);
  obj1[3] = callback10(activeIndex2);
  obj1[4] = callback11(activeIndex2);
  obj1[5] = callback12(activeIndex2);
  obj1[6] = callback7(activeIndex2);
  obj1[7] = callback8(activeIndex2);
  obj1[8] = callback13(activeIndex2);
  obj1[9] = callback1(activeIndex2);
  obj1[10] = callback2(activeIndex2);
  obj1[11] = callback14(activeIndex2);
  obj1[12] = callback15(activeIndex2);
  obj1[13] = obj1(activeIndex2);
  obj1[14] = callback4(activeIndex2);
  obj1[15] = callback5(activeIndex2);
  obj1[16] = animatedStyle;
  const items1 = [first, "nitro" === themeSelector, activeIndex2, onSaveTheme, mobileThemes, isSynced, analyticsLocations, navigation, mode];
  callback1 = obj1.useCallback(() => {
    if (closure_14) {
      let tmp3 = tmp[first];
    } else {
      tmp3 = tmp[activeIndex2.get(activeIndex2)];
    }
    if (null != mode) {
      const result = defaultIndex(isPreview[26]).handleSaveSyncedModeTheme(tmp3, tmp5, analyticsLocations);
      const obj2 = defaultIndex(isPreview[26]);
    } else {
      defaultIndex(isPreview[26]).handleSaveTheme(tmp3, analyticsLocations, isSynced);
      const obj = defaultIndex(isPreview[26]);
    }
    if (null == onSaveTheme) {
      navigation.goBack();
    } else {
      tmp15();
    }
  }, items1);
  const items2 = [hasSaveButton, mobileThemes, first, defaultIndex, isPreview, analyticsLocations, isSynced, mode];
  callback2 = obj1.useCallback(() => {
    if (!hasSaveButton) {
      if (null != mode) {
        if (tmp !== defaultIndex) {
          const result = defaultIndex(isPreview[26]).handleSaveSyncedModeTheme(tmp2, tmp6, analyticsLocations);
          const obj2 = defaultIndex(isPreview[26]);
        }
      } else {
        defaultIndex(isPreview[26]).handleSaveTheme(tmp2, analyticsLocations, isSynced);
        const obj = defaultIndex(isPreview[26]);
      }
    }
  }, items2);
  const items3 = [navigation, callback2];
  const effect = obj1.useEffect(() => navigation.addListener("beforeRemove", () => {
    callback();
  }), items3);
  const items4 = [first, callback1, analyticsLocations, mobileThemes, isSynced, isPreview, headerTitle, "nitro" === themeSelector, navigation, , , , , , , ];
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
          let theme = closure_16;
          let tmp4;
          if (null != table[closure_11]) {
            if ("system" !== tmp3.theme) {
              theme = tmp3.theme;
            }
            tmp4 = theme;
          }
          let obj = { theme: null, children: null };
          obj[0] = tmp4;
          obj = { navigation: null };
          obj[0] = closure_9;
          obj[1] = closure_1_14(closure_1_1(closure_1_2[38]), obj);
          return closure_1_14(callback(closure_1_2[37]).ThemeContextProvider, obj);
        } else {
          return null;
        }
      },
      headerTitle() {
        const obj = { animated: true, variant: "redesign/heading-18/bold", style: textNormal.textNormal, children: null };
        let stringResult = closure_6;
        if (closure_6 == null) {
          const intl = tmp2(tmp3[15]).intl;
          stringResult = intl.string(tmp2(tmp3[15]).t.XAS5Pi);
        }
        obj[3] = stringResult;
        return closure_1_14(callback(closure_1_2[39]).Text, obj);
      },
      headerTitleAlign: "center",
      headerRight: null
    };
    let fn2;
    if (hasSaveButton) {
      fn2 = () => {
        let obj = { hitSlop: 8, disabled: closure_0, onPress: closure_1_22, children: null };
        obj = closure_0;
        items = [closure_1_21.textBrand, ];
        if (closure_0) {
          obj = { opacity: 0.4 };
        }
        obj = { animated: true, variant: "text-md/semibold", style: items, children: null };
        items[1] = obj;
        const intl = tmp2(tmp3[15]).intl;
        obj[3] = intl.string(defaultIndex(isPreview[15]).t.i4jeWR);
        obj[3] = closure_14(defaultIndex(isPreview[39]).Text, obj);
        return closure_14(defaultIndex(isPreview[40]).PressableOpacity, obj);
      };
    }
    obj[6] = fn2;
    navigation.setOptions(obj);
  }, items4);
  const tmp3Result4 = defaultIndex(isPreview[32]);
  defaultIndex(isPreview[41]).useNavigatorBackPressHandler(() => !canGoBack);
  const items5 = [first];
  let rounded = deviceWidth;
  callback3 = obj1.useCallback((mobileThemesIndex) => {
    if (mobileThemesIndex !== first) {
      callback(mobileThemesIndex);
      const result = defaultIndex(isPreview[42]).updateMobilePendingThemeIndex(mobileThemesIndex);
      const obj = defaultIndex(isPreview[42]);
    }
  }, items5);
  if (deviceWidth > deviceHeight) {
    const _Math = Math;
    rounded = Math.floor(deviceWidth / 2);
  }
  if ("nitro" === themeSelector) {
    obj2 = { themes: null, currentThemeIndex: null, isPreview: null, isSynced: null, defaultIndex: null, deviceWidth: null, animatedStyles: null, hasMidnightNux: null, onThemeSelected: null };
    obj2[0] = mobileThemes;
    obj2[1] = first;
    obj2[2] = isPreview;
    obj2[3] = isSynced;
    obj2[4] = defaultIndex;
    obj2[5] = rounded;
    obj2[6] = obj1;
    obj2[7] = hasMidnightNux;
    obj2[8] = callback3;
    let tmp42 = callback(tmp6(tmp4[43]), obj2);
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
    obj4[1] = callback(tmp3(tmp4[44]).SegmentedControl, obj5);
    const items6 = [callback(tmp3(tmp4[37]).ThemeContextProvider, obj4), ];
    const obj6 = { animated: true, variant: "text-xs/medium", style: null, children: null };
    const items7 = [obj1.headerSecondary, tmp.textCentered];
    obj6[2] = items7;
    let intl = tmp3(tmp4[15]).intl;
    obj6[3] = intl.string(tmp3(tmp4[15]).t.d5Gu9A);
    items6[1] = callback(tmp3(tmp4[39]).Text, obj6);
    obj3[2] = items6;
    tmp42 = callback2(hasSaveButton, obj3);
    tmp43 = callback;
  }
  const items8 = [first, mobileThemes, activeIndex2, stateFromStores];
  const effect2 = obj1.useEffect(() => {
    if ("system" === mobileThemes[first].theme) {
      let DARKER = stateFromStores;
      if (stateFromStores == null) {
        DARKER = _undefined.DARKER;
      }
      let theme = DARKER;
    } else {
      theme = tmp.theme;
    }
    const result = activeIndex2.set(activeIndex.indexOf(theme));
    let str = "light-content";
    if (theme === _undefined.LIGHT) {
      str = "dark-content";
    }
    _undefined(str);
  }, items8);
  const memo3 = obj1.useMemo(tmp6(tmp4[45]), []);
  const obj7 = { themes: mobileThemes, themeIndex: first, animatedStyles: obj1, data: memo3, useGradientBackground: "nitro" === themeSelector, isNitroLocked: null };
  let tmp48 = tmp14;
  const tmp3Result5 = defaultIndex(isPreview[41]);
  if ("nitro" === themeSelector) {
    tmp48 = isPreview;
  }
  if (tmp48) {
    tmp48 = mobileThemes[first].type !== tmp3(tmp4[23]).ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  obj7[5] = tmp48;
  let tmp43Result = tmp43(mobileThemes(isPreview[46]), obj7);
  const items9 = [{ width: "100%", height: "100%" }, ];
  let bgBasePrimary = !tmp14;
  if ("nitro" !== themeSelector) {
    bgBasePrimary = obj1.bgBasePrimary;
  }
  const obj8 = { style: items9, children: null };
  items9[1] = bgBasePrimary;
  tmp43Result = null;
  if ("nitro" === themeSelector) {
    const obj9 = { themes: null, themeIndex: null, isDimmed: true };
    obj9[0] = mobileThemes;
    obj9[1] = first;
    tmp43Result = tmp43(tmp6(tmp4[47]), obj9);
  }
  const items10 = [tmp43Result, ];
  const items11 = [tmp.container, , ];
  let landscapeContainer = tmp2;
  if (deviceWidth > deviceHeight) {
    landscapeContainer = tmp.landscapeContainer;
  }
  const obj10 = { bottom: true, style: items11, children: null };
  items11[1] = landscapeContainer;
  items11[2] = { marginTop: headerHeight };
  const items12 = [tmp43(mobileThemes(isPreview[49]), { animated: true, barStyle: tmp12 }), ];
  const obj11 = { children: null };
  if (deviceWidth > deviceHeight) {
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.landscapePreview;
    obj12[1] = tmp43Result;
    const items13 = [tmp43(hasSaveButton, obj12), ];
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.landscapeSelector;
    obj13[1] = tmp42;
    items13[1] = tmp43(hasSaveButton, obj13);
    obj11[0] = items13;
    let tmp53 = obj11;
  } else {
    const items14 = [tmp43Result, tmp42];
    obj11[0] = items14;
    tmp53 = obj11;
  }
  items12[1] = callback2(stateFromStores, tmp53);
  obj10[2] = items12;
  items10[1] = callback2(defaultIndex(isPreview[48]).SafeAreaPaddingView, obj10);
  obj8[1] = items10;
  return callback2(mobileThemes(isPreview[32]).View, obj8);
}
let result = set.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx");

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
  let allMobileThemes;
  let memo;
  let memo1;
  let memo2;
  ({ width, height } = importDefault(userPreset[19])());
  let obj = mode(userPreset[20]);
  items = [memo, closure_9, closure_10, memo2, memo1];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ userPreset: memo.gradientPreset, isPreview: memo.isPreview, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, isSynced: memo2.shouldSync("appearance"), userTheme: theme.theme, hasCustomTheme: memo1.hasCustomTheme() }));
  ({ usingSystemTheme: c1, userPreset } = stateFromStoresObject);
  ({ userTheme: c3, hasCustomTheme: c4, isSynced, isPreview } = stateFromStoresObject);
  const tmp = importDefault(userPreset[19])();
  allMobileThemes = mode(userPreset[21]).useAllMobileThemes(mode);
  const items1 = [userPreset, allMobileThemes];
  memo = React.useMemo(() => {
    let id;
    if (userPreset != null) {
      id = userPreset.id;
    }
    closure_0 = id === mode(userPreset[22]).BackgroundGradientPresetId.EASTER_EGG;
    return allMobileThemes.filter((type) => {
      let tmp3 = type.type !== callback(closure_1_2[23]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (!tmp3) {
        tmp3 = type.id !== callback(closure_1_2[22]).BackgroundGradientPresetId.EASTER_EGG;
      }
      if (!tmp3) {
        tmp3 = callback;
      }
      return tmp3;
    });
  }, items1);
  const items2 = [memo];
  memo1 = React.useMemo(() => memo, items2);
  const items3 = [memo1, mode];
  memo2 = React.useMemo(() => {
    if (null == mode) {
      let found = memo1;
    } else {
      found = memo1.filter((theme) => {
        if ("system" === theme.theme) {
          return tmp;
        } else if (closure_0 === closure_1_11.DARK) {
          theme = theme.theme;
          let isThemeDarkResult = closure_1_0(closure_1_2[24]).isThemeDark(theme);
          const obj2 = closure_1_0(closure_1_2[24]);
        } else {
          isThemeDarkResult = closure_1_0(closure_1_2[24]).isThemeLight(theme.theme);
          const obj = closure_1_0(closure_1_2[24]);
        }
      });
    }
    return found;
  }, items3);
  obj = {
    defaultIndex: importDefault(userPreset[25])(() => {
      if (null != mode) {
        let syncedModeThemeIndex = mode(userPreset[26]).getSyncedModeThemeIndex(memo2, tmp);
        const obj2 = mode(userPreset[26]);
      } else {
        const obj = mode(userPreset[26]);
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
    mode
  };
  return callback(ThemePicker, obj);
};