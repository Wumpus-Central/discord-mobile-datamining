// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SettingsAppearanceConstants from "../SettingsAppearanceConstants.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let closure_10 = ReanimatedRexport.createAnimatedComponent(fn(1178).Icon);
fn(4560);
let obj = {
  container: null,
  textCentered: null,
  labelGroup: null,
  titleContainer: null,
  floatingNuxContainer: null,
  floatingNux: null,
  arrowLeft: null,
  uppercase: null,
  selectionBorder: null,
  a11yThemeList: null,
  a11yThemeListScroll: null,
};
obj = { gap: nativeDefault.space.PX_24, alignItems: "center" };
obj.container = obj;
obj.textCentered = { textAlign: "center" };
const createStyles = { gap: nativeDefault.space.PX_4, alignItems: "center" };
obj.labelGroup = createStyles;
obj.titleContainer = {
  minHeight: 20,
  marginTop: nativeDefault.space.PX_4,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};
let obj2 = {
  minHeight: 20,
  marginTop: nativeDefault.space.PX_4,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};
obj.floatingNuxContainer = { position: "absolute", left: nativeDefault.space.PX_24 };
let obj4 = {
  borderRadius: nativeDefault.radii.lg,
  flexDirection: "row",
  alignItems: "center",
  padding: nativeDefault.space.PX_4,
  paddingRight: nativeDefault.space.PX_8,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj4.shadowColor = "#000000";
obj.floatingNux = obj4;
let obj5 = { transform: null };
let items = [{ rotate: "90deg" }];
obj5.transform = items;
obj.arrowLeft = obj5;
obj.uppercase = { textTransform: "uppercase" };
let size = {
  position: "absolute",
  alignSelf: "center",
  width: SettingsAppearanceConstants.THEME_ITEM_WIDTH,
  height: SettingsAppearanceConstants.THEME_ITEM_HEIGHT,
  borderRadius: nativeDefault.radii.md,
  borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT,
  borderWidth: 2,
};
obj.selectionBorder = size;
obj.a11yThemeList = { flexDirection: "row" };
obj.a11yThemeListScroll = { flexGrow: 0 };
let closure_11 = createStyles.createStyles(obj);
const __initData = {
  code: "function SettingsAppearanceThemeCarouselTsx1(){const{withTiming,isMidnightNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isMidnightNuxVisible.get()?1:0,timingStandard),pointerEvents:isMidnightNuxVisible.get()?'auto':'none'};}",
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx",
);

export default function SettingsAppearanceThemeCarousel(themes) {
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  const isPreview = themes.isPreview;
  ({ defaultIndex, deviceWidth } = themes);
  ({ animatedStyles, hasMidnightNux: closure_4, onThemeSelected } = themes);
  closure_11 = undefined;
  const tmp = closure_11();
  let obj = themes(isPreview[8]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  deviceWidth.useRef(null);
  const ref = deviceWidth.useRef(defaultIndex);
  const items = [themes];
  closure_8 = deviceWidth.useMemo(() => {
    const findIndexResult = themes.findIndex((theme) => "midnight" === theme.theme);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  let obj1 = themes(isPreview[4]);
  const sharedValue = obj1.useSharedValue(false);
  let obj2 = themes(isPreview[4]);
  const sharedValue1 = obj2.useSharedValue(false);
  const items1 = [sharedValue, sharedValue1];
  const effect = deviceWidth.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(false);
      const result1 = sharedValue1.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items1);
  const items2 = [onThemeSelected];
  closure_11 = deviceWidth.useMemo(() => _modDef12.debounce(onThemeSelected, 180), items2);
  const items3 = [isPreview, onThemeSelected, currentThemeIndex];
  const callback = deviceWidth.useCallback((themePreset) => {
    const index = themePreset.index;
    return ref(currentThemeIndex(isPreview[10]), {
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
                let obj = { count: index };
                return ref.current.next(obj);
              } else {
                const current2 = ref.current;
                obj = { index, animated: true };
                current2.scrollTo(obj);
              }
            }
            const current3 = ref.current;
            if (current3 != null) {
              obj = { index, animated: true };
              current3.scrollTo(obj);
            }
          }
        }
      },
      isNew: false,
    });
  }, items3);
  let obj3 = themes(isPreview[4]);
  class L {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[11]);
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
      obj.pointerEvents = str;
      return obj;
    }
  }
  obj = {
    withTiming: themes(isPreview[11]).withTiming,
    isMidnightNuxVisible: sharedValue,
    timingStandard: themes(isPreview[12]).timingStandard,
  };
  L.__closure = obj;
  L.__workletHash = 3854555745742;
  L.__initData = __initData;
  obj = { style: tmp.titleContainer, children: null };
  const animatedStyle = obj3.useAnimatedStyle(L);
  let tmp13 = null;
  if (themes[currentThemeIndex].type !== themes(isPreview[13]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
    obj1 = {
      source: currentThemeIndex(tmp3[14]),
      style: animatedStyles.iconHeaderSecondary,
      size: tmp2(tmp3[5]).IconSizes.SMALL_20,
    };
    tmp13 = ref(sharedValue1, obj1);
  }
  const items4 = [tmp13];
  obj2 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-sm/semibold", children: null };
  let obj8 = themes[currentThemeIndex];
  obj2.children = obj8.getName();
  items4[1] = ref(themes(isPreview[15]).Text, obj2);
  obj.children = items4;
  if (!isScreenReaderEnabled) {
    if (!tmp2(tmp3[16]).isThumbstickScrollDevice) {
      obj3 = { children: null };
      const obj4 = { pointerEvents: "none", style: tmp.selectionBorder };
      const items5 = [tmp17(closure_4, obj4)];
      const size = {
        ref,
        data: themes,
        renderItem: callback,
        style: null,
        width: null,
        height: null,
        loop: false,
        pagingEnabled: true,
        defaultIndex: null,
        onSnapToItem: null,
        scrollAnimationDuration: 200,
        onProgressChange: null,
      };
      const obj5 = {
        width: deviceWidth,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: ref.THEME_ITEM_HORIZONTAL_MARGIN,
      };
      size.style = obj5;
      size.width = ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN;
      size.height = ref.THEME_ITEM_HEIGHT;
      size.defaultIndex = defaultIndex;
      size.onSnapToItem = onThemeSelected;
      size.onProgressChange = function onProgressChange(arg0, arg1) {
        const rounded = Math.round(arg1);
        if (rounded !== ref.current) {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          tmp2.current = rounded;
          closure_11(rounded);
        }
        if (closure_1_4) {
          const _Math = Math;
          const tmp11 =
            arg1 <
            closure_8 +
              Math.ceil(
                deviceWidth /
                  (SettingsAppearanceConstants.THEME_ITEM_WIDTH +
                    SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN),
              ) /
                2;
          if (tmp11) {
            const result1 = sharedValue1.set(true);
          }
          value = sharedValue1.get();
          let tmp17 = !value;
          if (!value) {
            tmp17 = !tmp11;
          }
          const result2 = sharedValue.set(tmp17);
        }
      };
      items5[1] = tmp17(currentThemeIndex(tmp3[17]), size);
      obj3.children = items5;
      let tmp17Result = tmp11(sharedValue, obj3);
    }
    const obj6 = { children: tmp17Result };
    tmp17Result = tmp17(closure_4, obj6);
    const obj7 = { animated: true, style: null, variant: "text-sm/medium", children: null };
    const items6 = [animatedStyles.headerSecondary, tmp.textCentered];
    obj7.style = items6;
    if (isPreview) {
      if (themes[currentThemeIndex].type !== tmp2(tmp3[13]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
        const intl2 = tmp2(tmp3[19]).intl;
        let stringResult = intl2.string(tmp2(tmp3[19]).t.VqGKm0);
      }
      obj7.children = stringResult;
      obj8 = { children: null };
      const items7 = [tmp17Result];
      const obj9 = { style: tmp.labelGroup, children: null };
      const items8 = [tmp18, tmp17(tmp24, obj7)];
      obj9.children = items8;
      items7[1] = tmp11(closure_4, obj9);
      obj8.children = items7;
      const obj10 = { style: tmp.container, children: null };
      const obj11 = { style: tmp.floatingNuxContainer, children: null };
      const obj12 = { style: null, children: null };
      const items9 = [tmp.floatingNux, animatedStyle, ,];
      ({ bgSurfaceOverlay: arr11[2], borderFaint: arr11[3] } = animatedStyles);
      obj12.style = items9;
      const obj13 = { style: null, source: null, size: null };
      const items10 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      obj13.style = items10;
      obj13.source = currentThemeIndex(tmp3[20]);
      obj13.size = tmp2(tmp3[5]).IconSizes.REFRESH_SMALL_16;
      const items11 = [tmp17(sharedValue1, obj13)];
      const obj14 = { animated: true, style: null, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: null };
      const items12 = [animatedStyles.textNormal, tmp.uppercase];
      obj14.style = items12;
      const intl3 = tmp2(tmp3[19]).intl;
      obj14.children = intl3.string(tmp2(tmp3[19]).t.y2b7CA);
      items11[1] = tmp17(tmp2(tmp3[15]).Text, obj14);
      obj12.children = items11;
      obj11.children = tmp11(currentThemeIndex(tmp3[4]).View, obj12);
      const items13 = [tmp17(closure_4, obj11), tmp11(sharedValue, obj8)];
      obj10.children = items13;
      return tmp11(closure_4, obj10);
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
  tmp17Result = tmp17(onThemeSelected, {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      let obj = { children: null };
      closure_0 = index;
      obj = {
        themePreset,
        isPreview,
        isSelected: index === currentThemeIndex,
        onPress() {
          return onThemeSelected(closure_0);
        },
      };
      obj.children = ref(currentThemeIndex(isPreview[10]), obj);
      return ref(closure_1_4, obj, "theme-" + index);
    }),
  });
  const obj15 = {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      let obj = { children: null };
      closure_0 = index;
      obj = {
        themePreset,
        isPreview,
        isSelected: index === currentThemeIndex,
        onPress() {
          return onThemeSelected(closure_0);
        },
      };
      obj.children = ref(currentThemeIndex(isPreview[10]), obj);
      return ref(closure_1_4, obj, "theme-" + index);
    }),
  };
}
