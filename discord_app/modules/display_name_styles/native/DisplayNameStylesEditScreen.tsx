// === Module 15671: DisplayNameStylesEditScreen ===

// Module 15671 (DisplayNameStylesEditScreen)
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1389 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1391 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import HapticUtils from "HapticUtils" /* 4795 */;
import spring from "spring" /* 5270 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8508 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 8511 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function ApplyButton(onPress) {
  onPress = onPress.onPress;
  const visible = onPress.visible;
  let stateFromStores;
  items = [AccessibilityStore];
  stateFromStores = onPress(stateFromStores[12]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj = onPress(stateFromStores[12]);
  const fn = function o() {
    let pointerEvents = "none";
    if (visible) {
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  fn.__closure = { visible };
  fn.__workletHash = 2349569076845;
  fn.__initData = __initData;
  const animatedProps = onPress(stateFromStores[53]).useAnimatedProps(fn);
  let obj2 = onPress(stateFromStores[53]);
  const fn2 = function s() {
    let num = 0;
    if (visible) {
      num = 1;
    }
    let num2 = 60;
    if (visible) {
      num2 = 0;
    }
    let num3 = 0.9;
    if (visible) {
      num3 = 1;
    }
    const rect = { position: "absolute", bottom: 0, left: 0, right: 0, marginHorizontal: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "flex-end", transform: null, opacity: null };
    let withSpringResult = num2;
    if (!stateFromStores) {
      withSpringResult = spring.withSpring(num2, closure_11);
    }
    items = [{ translateY: withSpringResult }, ];
    let withSpringResult1 = num3;
    if (!stateFromStores) {
      withSpringResult1 = spring.withSpring(num3, closure_11);
    }
    items[1] = { scale: withSpringResult1 };
    rect.transform = items;
    let withSpringResult2 = num;
    if (!stateFromStores) {
      withSpringResult2 = spring.withSpring(num, closure_11);
    }
    rect.opacity = withSpringResult2;
    return rect;
  };
  let obj3 = onPress(stateFromStores[53]);
  fn2.__closure = { visible, tokens: visible(stateFromStores[10]), reducedMotion: stateFromStores, withSpring: onPress(stateFromStores[54]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING };
  fn2.__workletHash = 16786362025671;
  fn2.__initData = __initData2;
  const items1 = [onPress];
  const animatedStyle = obj3.useAnimatedStyle(fn2);
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items1);
  const obj5 = { style: animatedStyle, children: null };
  const obj6 = { style: { marginBottom: visible(stateFromStores[52])().bottom }, animatedProps, children: null };
  const obj7 = { variant: "primary", onPress: callback, size: "lg", text: null };
  const intl = onPress(stateFromStores[38]).intl;
  obj7.text = intl.string(onPress(stateFromStores[38]).t["1Qm822"]);
  obj6.children = closure_12(onPress(stateFromStores[49]).Button, obj7);
  obj5.children = closure_12(visible(stateFromStores[53]).View, obj6);
  return closure_12(visible(stateFromStores[53]).View, obj5);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const MEDIA_PICKER_SEND_BUTTON_SPRING = fn(1608).MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let items = [fn(1391).DisplayNameEffect.GRADIENT, fn(1391).DisplayNameEffect.GUMMY, fn(1391).DisplayNameEffect.PRISM];
const createStyles = fn(4827);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, contentContainer: null, fieldButtonGroup: null, fieldButton: null, fieldButtonBorder: null, fieldButtonLabel: null, fieldButtonChevron: null, fieldButtonTrailing: null, buttonContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.fieldButtonGroup = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md };
obj2.fieldButton = { padding: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj6 = { padding: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.fieldButtonBorder = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let obj7 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.fieldButtonLabel = { flex: 1, marginRight: nativeDefault.space.PX_12 };
const obj8 = { flex: 1, marginRight: nativeDefault.space.PX_12 };
obj2.fieldButtonChevron = { flexDirection: "row", gap: nativeDefault.space.PX_8, flexShrink: 0 };
let obj9 = { flexDirection: "row", gap: nativeDefault.space.PX_8, flexShrink: 0 };
obj2.fieldButtonTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.buttonContainer = { marginVertical: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_MUTED, gap: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj2);
const __initData = { code: "function DisplayNameStylesEditScreenTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}" };
const __initData2 = { code: "function DisplayNameStylesEditScreenTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx");

export default function DisplayNameStylesEditScreen() {
  let tmp = onSelectColor();
  let tmp3 = isTryItOut;
  const route = navigation(isTryItOut[11]).useRoute();
  let obj = navigation(isTryItOut[11]);
  navigation = navigation(isTryItOut[11]).useNavigation();
  let params = route.params;
  if (params == null) {
    params = {};
  }
  const guildId = params.guildId;
  isTryItOut = params.isTryItOut;
  let obj2 = navigation(isTryItOut[11]);
  items = [onSelectEffect];
  const stateFromStores = navigation(tmp3[12]).useStateFromStores(items, () => onSelectEffect.getCurrentUser());
  let tmp2Result = navigation(tmp3[12]);
  const displayNameStylesPendingName = navigation(tmp3[13]).useDisplayNameStylesPendingName(stateFromStores, guildId);
  const tmp2Result11 = navigation(tmp3[13]);
  const guildMemberOrUserPendingDisplayNameStyles = navigation(tmp3[14]).useGuildMemberOrUserPendingDisplayNameStyles(stateFromStores, guildId);
  const pendingDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
  ({ guildDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  let id;
  const tmp2Result12 = navigation(tmp3[14]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let obj3 = { userId: id, guildId, pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true };
  let tmp12 = pendingDisplayNameStyles;
  if (isTryItOut) {
    tmp12 = tryItOutDisplayNameStyles;
  }
  obj3.pendingDisplayNameStyles = tmp12;
  const tmp10Result = guildId(tmp3[15])(obj3);
  closure_5 = tmp10Result;
  let fontId;
  const tmp10 = guildId(tmp3[15]);
  if (tmp10Result != null) {
    fontId = tmp10Result.fontId;
  }
  if (fontId == null) {
    fontId = tmp2(tmp3[17]).DisplayNameFont.DEFAULT;
  }
  const tmp17 = stateFromStores(displayNameStylesPendingName.useState(fontId), 2);
  const selectedFontId = tmp17[0];
  const onSelectFont = tmp17[1];
  let effectId;
  if (tmp10Result != null) {
    effectId = tmp10Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[8]).DisplayNameEffect.SOLID;
  }
  const tmp16Result = stateFromStores(displayNameStylesPendingName.useState(effectId), 2);
  const first1 = tmp16Result[0];
  onSelectEffect = tmp16Result[1];
  let tmp14 = guildId(tmp3[16])();
  const tmp22 = navigation(tmp3[18]).getEffectColorCount(first1) > 1;
  closure_10 = tmp22;
  const tmp2Result13 = navigation(tmp3[18]);
  const isDisplayNameStylesFlywheelSettersEnabled = navigation(tmp3[19]).useIsDisplayNameStylesFlywheelSettersEnabled("DisplayNameStylesEditScreen");
  const tmp2Result14 = navigation(tmp3[19]);
  const displayNameStylesEffectConfig = navigation(tmp3[20]).useDisplayNameStylesEffectConfig(first1);
  closure_12 = tmp9(tmp3[21])();
  let colors;
  if (tmp10Result != null) {
    colors = tmp10Result.colors;
  }
  if (colors == null) {
    colors = [];
  }
  if (colors.length > 0) {
    if (!tmp22) {
      let first2 = colors[0];
    }
    const tmp16Result3 = tmp16(tmp25(first2), 2);
    const first3 = tmp16Result3[0];
    onSelectColor = tmp16Result3[1];
    const tmp16Result4 = tmp16(obj8.useState(() => Object.fromEntries(items.map((item) => {
      items = [item, ];
      let tmp = length;
      if (length.length <= 0) {
        tmp = closure_1_12[item];
      }
      items[1] = tmp;
      return items;
    }))), 2);
    const first4 = tmp16Result4[0];
    closure_17 = tmp16Result4[1];
    const callback = obj8.useCallback((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_17((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[closure_0] = closure_1;
        return obj;
      });
    }, []);
    const items1 = [tmp22, first4, first1, displayNameStylesEffectConfig.defaultColors, first3];
    const memo = obj8.useMemo(() => {
      if (closure_10) {
        let defaultColors = first4[first1];
        if (defaultColors == null) {
          defaultColors = displayNameStylesEffectConfig.defaultColors;
        }
        items = defaultColors;
      } else {
        items = [first3];
      }
      return items;
    }, items1);
    const items2 = [tmp10Result, selectedFontId, first1, memo];
    const memo1 = obj8.useMemo(() => {
      let fontId;
      if (closure_5 != null) {
        fontId = closure_5.fontId;
      }
      let tmp4 = first !== fontId;
      if (!tmp4) {
        let effectId;
        if (closure_5 != null) {
          effectId = closure_5.effectId;
        }
        tmp4 = first1 !== effectId;
      }
      if (!tmp4) {
        colors = undefined;
        if (closure_5 != null) {
          colors = closure_5.colors;
        }
        if (colors == null) {
          colors = [];
        }
        tmp4 = !discord_common_shallowEqual.areArraysShallowEqual(memo, colors);
      }
      return tmp4;
    }, items2);
    let obj4 = {
      hasChanges: memo1,
      selectedFontId,
      selectedEffectId: first1,
      selectedColors: memo,
      defaultColor: displayNameStylesEffectConfig.defaultColors[0],
      guildId,
      isTryItOut,
      onClose() {
          return navigation.goBack();
        }
    };
    const displayNameStylesHandleApply = tmp2(tmp3[23]).useDisplayNameStylesHandleApply(obj4);
    const tmp2Result16 = tmp2(tmp3[23]);
    const visibleFontOrder = tmp2(tmp3[24]).useVisibleFontOrder();
    const tmp2Result17 = tmp2(tmp3[24]);
    const visibleEffectOrder = tmp2(tmp3[25]).useVisibleEffectOrder();
    const tmp2Result18 = tmp2(tmp3[25]);
    const displayNameStylesNewFontsBadge = tmp2(tmp3[26]).useDisplayNameStylesNewFontsBadge(visibleFontOrder);
    const showFontsBadge = displayNameStylesNewFontsBadge.showFontsBadge;
    const dismissFontsBadge = displayNameStylesNewFontsBadge.dismissFontsBadge;
    const tmp2Result19 = tmp2(tmp3[26]);
    const displayNameStylesNewEffectsBadge = tmp2(tmp3[26]).useDisplayNameStylesNewEffectsBadge(visibleEffectOrder);
    const showEffectsBadge = displayNameStylesNewEffectsBadge.showEffectsBadge;
    const dismissEffectsBadge = displayNameStylesNewEffectsBadge.dismissEffectsBadge;
    const items3 = [callback, visibleFontOrder, visibleEffectOrder];
    const items4 = [navigation, isTryItOut];
    const callback1 = obj8.useCallback(() => {
      const randomDisplayNameStyles = DisplayNameStylesUtils.generateRandomDisplayNameStyles(visibleFontOrder, visibleEffectOrder);
      ({ effectId, colors } = randomDisplayNameStyles);
      onSelectFont(randomDisplayNameStyles.fontId);
      onSelectEffect(effectId);
      if (obj2.getEffectColorCount(effectId) > 1) {
        callback(effectId, colors);
      } else {
        onSelectColor(colors[0]);
      }
      obj2 = DisplayNameStylesUtils;
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_SURPRISE_ME);
    }, items3);
    const items5 = [guildId, navigation];
    const callback2 = obj8.useCallback(() => {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      if (isTryItOut) {
        const result1 = UserProfileActionCreators.setTryItOutDisplayNameStyles(null);
        const tmpResult = UserProfileActionCreators;
      } else {
        UserProfileSettingsActionCreators.setPendingChanges({ displayNameStyles: null });
        const tmpResult2 = UserProfileSettingsActionCreators;
      }
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_REMOVED);
      navigation.goBack();
    }, items4);
    const items6 = [selectedFontId, displayNameStylesPendingName, showFontsBadge, dismissFontsBadge];
    const callback3 = obj8.useCallback(() => {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      UserProfileSettingsActionCreators.setPendingChanges({ guildId, displayNameStyles: null });
      navigation.goBack();
    }, items5);
    const items7 = [first1, , , ];
    let id1;
    const callback4 = obj8.useCallback(() => {
      if (showFontsBadge) {
        dismissFontsBadge();
      }
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15679, dependencyMap.paths), "DisplayNameStylesFontPickerSheet", { selectedFontId, onSelectFont, displayName: displayNameStylesPendingName });
      const obj2 = { selectedFontId, onSelectFont, displayName: displayNameStylesPendingName };
    }, items6);
    if (stateFromStores != null) {
      id1 = stateFromStores.id;
    }
    items7[1] = id1;
    items7[2] = showEffectsBadge;
    items7[3] = dismissEffectsBadge;
    const items8 = [tmp22, memo, first3, first1, callback];
    const callback5 = obj8.useCallback(() => {
      if (showEffectsBadge) {
        dismissEffectsBadge();
      }
      let id;
      const obj = ActionSheetActionCreatorsDefault;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj.openLazy(asyncRequireImpl(15681, dependencyMap.paths), "DisplayNameStylesEffectPickerSheet", { userId: id, selectedEffectId: first1, onSelectEffect });
      const obj2 = { userId: id, selectedEffectId: first1, onSelectEffect };
      const tmp3 = asyncRequireImpl(15681, dependencyMap.paths);
    }, items7);
    const callback6 = obj8.useCallback(() => {
      if (first1 === DisplayNameEffect.DisplayNameEffect.GUMMY) {
        const obj2 = {
          selectedColors: memo,
          onSelectColors(arg0) {
              return callback(navigation(isTryItOut[8]).DisplayNameEffect.GUMMY, arg0);
            }
        };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15682, dependencyMap.paths), "DisplayNameStylesGummyColorPickerSheet", obj2);
      } else {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        const tmp2Result = asyncRequireImpl;
        if (closure_10) {
          const obj4 = {
            selectedColors: memo,
            selectedEffectId: first1,
            onSelectColors(arg0) {
                  return callback(first1, arg0);
                }
          };
          openLazy(tmp2Result(15687, dependencyMap.paths), "DisplayNameStylesGradientPickerSheet", obj4);
        } else {
          const obj = { selectedColor: first3, selectedEffectId: first1, onSelectColor };
          openLazy(tmp2Result(15691, dependencyMap.paths), "DisplayNameStylesColorPickerSheet", obj);
        }
      }
    }, items8);
    const intl = tmp2(tmp3[38]).intl;
    const stringResult = intl.string(tmp9(tmp3[39])(selectedFontId));
    let tmp47Result5 = null;
    if (null != stateFromStores) {
      const obj5 = { theme: tmp14, children: null };
      const obj6 = { value: { overrideSettings: true }, children: null };
      const obj7 = { style: tmp.container, children: null };
      const obj9 = {};
      let merged = Object.assign(tmp.contentContainer);
      let num = 0;
      if (memo1) {
        num = 70;
      }
      const obj10 = { contentContainerStyle: null, children: null };
      obj9.paddingBottom = num;
      obj10.contentContainerStyle = obj9;
      const obj11 = { user: stateFromStores, displayName: displayNameStylesPendingName, guildId, selectedFontId, selectedEffectId: first1, selectedColors: memo };
      const items9 = [closure_12(tmp9(tmp3[42]), obj11), , ];
      const obj12 = { style: tmp.fieldButtonGroup, children: null };
      const obj13 = { onPress: callback4, style: tmp.fieldButton, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl2 = tmp2(tmp3[38]).intl;
      const stringResult1 = intl2.string(tmp9(tmp3[43])["0JCuGm"]);
      if (showFontsBadge) {
        const intl3 = tmp2(tmp3[38]).intl;
        const _HermesInternal2 = HermesInternal;
        let combined = "" + stringResult1 + ", " + stringResult + ", " + intl3.string(tmp2(tmp3[38]).t.y2b7CA);
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult1 + ", " + stringResult;
      }
      obj13.accessibilityLabel = combined;
      const obj14 = { children: null };
      const obj15 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl4 = tmp2(tmp3[38]).intl;
      obj15.children = intl4.string(tmp9(tmp3[43])["0JCuGm"]);
      const items10 = [closure_12(tmp2(tmp3[44]).Text, obj15), ];
      const obj16 = { variant: "text-md/normal", color: "text-subtle", children: stringResult };
      items10[1] = closure_12(tmp2(tmp3[44]).Text, obj16);
      obj14.children = items10;
      const items11 = [colors(closure_5, obj14), ];
      if (showFontsBadge) {
        const obj17 = { style: tmp.fieldButtonTrailing, children: null };
        const items12 = [tmp47(tmp2(tmp3[45]).NewTag, {}), tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" })];
        obj17.children = items12;
        let tmp47Result3 = tmp48(tmp49, obj17);
      } else {
        tmp47Result3 = tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" });
      }
      items11[1] = tmp47Result3;
      obj13.children = items11;
      const items13 = [colors(onSelectFont, obj13), , ];
      const obj18 = { onPress: callback5, style: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const items14 = [, ];
      ({ fieldButton: arr17[0], fieldButtonBorder: arr17[1] } = tmp);
      obj18.style = items14;
      const intl5 = tmp2(tmp3[38]).intl;
      const stringResult2 = intl5.string(tmp9(tmp3[43]).RVtMxT);
      const name = displayNameStylesEffectConfig.name;
      if (showEffectsBadge) {
        const intl6 = tmp2(tmp3[38]).intl;
        const _HermesInternal4 = HermesInternal;
        let combined1 = "" + stringResult2 + ", " + name + ", " + intl6.string(tmp2(tmp3[38]).t.y2b7CA);
      } else {
        const _HermesInternal3 = HermesInternal;
        combined1 = "" + stringResult2 + ", " + name;
      }
      obj18.accessibilityLabel = combined1;
      const obj19 = { children: null };
      const obj20 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl7 = tmp2(tmp3[38]).intl;
      obj20.children = intl7.string(tmp9(tmp3[43]).RVtMxT);
      const items15 = [closure_12(tmp2(tmp3[44]).Text, obj20), ];
      const obj21 = { variant: "text-md/normal", color: "text-subtle", children: displayNameStylesEffectConfig.name };
      items15[1] = closure_12(tmp2(tmp3[44]).Text, obj21);
      obj19.children = items15;
      const items16 = [colors(closure_5, obj19), ];
      if (showEffectsBadge) {
        const obj22 = { style: tmp.fieldButtonTrailing, children: null };
        const items17 = [tmp47(tmp2(tmp3[45]).NewTag, {}), tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" })];
        obj22.children = items17;
        let tmp48Result2 = tmp48(tmp49, obj22);
      } else {
        tmp48Result2 = tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" });
      }
      items16[1] = tmp48Result2;
      obj18.children = items16;
      items13[1] = colors(onSelectFont, obj18);
      const obj23 = { onPress: callback6, style: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const items18 = [, ];
      ({ fieldButton: arr21[0], fieldButtonBorder: arr21[1] } = tmp);
      obj23.style = items18;
      const intl8 = tmp2(tmp3[38]).intl;
      obj23.accessibilityLabel = intl8.string(tmp9(tmp3[43])["6OxgN7"]);
      const obj24 = { style: tmp.fieldButtonLabel, children: null };
      const obj25 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl9 = tmp2(tmp3[38]).intl;
      obj25.children = intl9.string(tmp9(tmp3[43])["6OxgN7"]);
      const items19 = [closure_12(tmp2(tmp3[44]).Text, obj25), ];
      let str13 = "text-md/normal";
      if (isDisplayNameStylesFlywheelSettersEnabled) {
        str13 = "text-sm/normal";
      }
      const obj26 = { variant: str13, color: "text-subtle", lineClamp: 1, children: null };
      const mapped = memo.map((item) => navigation(isTryItOut[47]).int2hex(item));
      obj26.children = mapped.join(", ");
      items19[1] = closure_12(tmp2(tmp3[44]).Text, obj26);
      obj24.children = items19;
      const items20 = [colors(closure_5, obj24), ];
      const obj27 = { style: tmp.fieldButtonChevron, children: null };
      const obj28 = { colors: memo, effectId: first1 };
      const items21 = [closure_12(tmp9(tmp3[48]), obj28), closure_12(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" })];
      obj27.children = items21;
      items20[1] = colors(closure_5, obj27);
      obj23.children = items20;
      items13[2] = colors(onSelectFont, obj23);
      obj12.children = items13;
      items9[1] = colors(closure_5, obj12);
      const obj29 = { style: tmp.buttonContainer, children: null };
      const obj30 = { text: null, onPress: null, variant: "tertiary", size: "lg", grow: true, icon: null, iconPosition: "start" };
      const intl10 = tmp2(tmp3[38]).intl;
      obj30.text = intl10.string(tmp9(tmp3[43]).NOGFds);
      obj30.onPress = callback1;
      obj30.icon = closure_12(tmp2(tmp3[50]).DiceIcon, {});
      const items22 = [closure_12(tmp2(tmp3[49]).Button, obj30), , ];
      let tmp47Result = null == guildId && null != tmp10Result;
      if (tmp47Result) {
        const obj31 = { text: null, onPress: null, variant: "tertiary", size: "lg", grow: true, icon: null, iconPosition: "start" };
        const intl11 = tmp2(tmp3[38]).intl;
        obj31.text = intl11.string(tmp9(tmp3[43]).ymq8WQ);
        obj31.onPress = callback2;
        obj31.icon = tmp47(tmp2(tmp3[51]).DenyIcon, {});
        tmp47Result = tmp47(tmp2(tmp3[49]).Button, obj31);
      }
      items22[1] = tmp47Result;
      let tmp47Result4 = null != guildId;
      if (tmp47Result4) {
        tmp47Result4 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
        const tmp70 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
      }
      if (tmp47Result4) {
        const obj32 = { text: null, onPress: null, variant: "tertiary", size: "lg", grow: true, icon: null, iconPosition: "start" };
        const intl12 = tmp2(tmp3[38]).intl;
        obj32.text = intl12.string(tmp9(tmp3[43])["j/KRxc"]);
        obj32.onPress = callback3;
        obj32.icon = tmp47(tmp2(tmp3[51]).DenyIcon, {});
        tmp47Result4 = tmp47(tmp2(tmp3[49]).Button, obj32);
      }
      items22[2] = tmp47Result4;
      obj29.children = items22;
      items9[2] = colors(closure_5, obj29);
      obj10.children = items9;
      const items23 = [colors(selectedFontId, obj10), ];
      const obj33 = { onPress: displayNameStylesHandleApply, visible: memo1 };
      items23[1] = closure_12(callback, obj33);
      obj7.children = items23;
      obj6.children = colors(closure_5, obj7);
      obj5.children = closure_12(tmp2(tmp3[41]).DisplayNameStylesContext.Provider, obj6);
      tmp47Result5 = tmp47(tmp2(tmp3[40]).ThemeContextProvider, obj5);
    }
    return tmp47Result5;
  }
  first2 = displayNameStylesEffectConfig.defaultColors[0];
};