// === Module 16692: DisplayNameStylesEditScreen ===

// Module 16692 (DisplayNameStylesEditScreen)
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 568 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1409 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1411 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import HapticUtils from "HapticUtils" /* 5212 */;
import spring from "spring" /* 5247 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8653 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 8656 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const AnalyticEvents = fn(1087).AnalyticEvents;
const MEDIA_PICKER_SEND_BUTTON_SPRING = fn(1629).MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let items = [fn(1411).DisplayNameEffect.GRADIENT, fn(1411).DisplayNameEffect.GUMMY, fn(1411).DisplayNameEffect.PRISM];
let value = { overrideSettings: true };
const createStyles = fn(4971);
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
let obj8 = { flex: 1, marginRight: nativeDefault.space.PX_12 };
obj2.fieldButtonChevron = { flexDirection: "row", gap: nativeDefault.space.PX_8, flexShrink: 0 };
let obj9 = { flexDirection: "row", gap: nativeDefault.space.PX_8, flexShrink: 0 };
obj2.fieldButtonTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.buttonContainer = { marginVertical: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_MUTED, gap: nativeDefault.space.PX_16 };
let closure_16 = createStyles.createStyles(obj2);
const __initData = { code: "function DisplayNameStylesEditScreenTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?\"box-none\":\"none\"};}" };
const __initData2 = { code: "function DisplayNameStylesEditScreenTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:\"absolute\",bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:\"column\",justifyContent:\"flex-end\",transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
const __initData3 = { code: "function DisplayNameStylesEditScreenTsx3(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}" };
const __initData4 = { code: "function DisplayNameStylesEditScreenTsx4(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
const ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function ApplyButton(onPress) {
  const cResult = onPress(stateFromStores[57]).c(17);
  onPress = onPress.onPress;
  const visible = onPress.visible;
  const loading = onPress.loading;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [AccessibilityStore];
    const fn = function l() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = onPress(stateFromStores[57]);
  stateFromStores = onPress(stateFromStores[15]).useStateFromStores(tmp4, tmp5);
  const bottom = visible(tmp2[58])().bottom;
  const tmp8 = visible;
  const tmpResult = onPress(stateFromStores[15]);
  const fn2 = function y() {
    let pointerEvents = "none";
    if (visible) {
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  fn2.__closure = { visible };
  fn2.__workletHash = 16971768742893;
  fn2.__initData = __initData;
  const animatedProps = onPress(stateFromStores[59]).useAnimatedProps(fn2);
  const tmpResult3 = onPress(stateFromStores[59]);
  const fn3 = function _() {
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
  const tmpResult4 = onPress(stateFromStores[59]);
  fn3.__closure = { visible, tokens: visible(stateFromStores[10]), reducedMotion: stateFromStores, withSpring: onPress(stateFromStores[60]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING };
  fn3.__workletHash = 16394479325031;
  fn3.__initData = __initData2;
  const animatedStyle = tmpResult4.useAnimatedStyle(fn3);
  if (cResult[2] !== onPress) {
    class E {
      constructor() {
        obj = closure_0(closure_2[33]);
        result = obj.triggerHapticFeedback(closure_0(closure_2[33]).HapticFeedbackTypes.IMPACT_MEDIUM);
        tmp2 = onPress();
        return;
      }
    }
    cResult[2] = onPress;
    cResult[3] = E;
  } else {
    class E {
      constructor() {
        obj = closure_0(closure_2[33]);
        result = obj.triggerHapticFeedback(closure_0(closure_2[33]).HapticFeedbackTypes.IMPACT_MEDIUM);
        tmp2 = onPress();
        return;
      }
    }
  }
  if (cResult[4] !== bottom) {
    class E {
      constructor() {
        obj = closure_0(closure_2[33]);
        result = obj.triggerHapticFeedback(closure_0(closure_2[33]).HapticFeedbackTypes.IMPACT_MEDIUM);
        tmp2 = onPress();
        return;
      }
    }
    tmp13[0] = bottom;
    cResult[4] = bottom;
    cResult[5] = tmp13;
  } else {
    class E {
      constructor() {
        obj = closure_0(closure_2[33]);
        result = obj.triggerHapticFeedback(closure_0(closure_2[33]).HapticFeedbackTypes.IMPACT_MEDIUM);
        tmp2 = onPress();
        return;
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = closure_0(closure_2[33]);
        result = obj.triggerHapticFeedback(closure_0(closure_2[33]).HapticFeedbackTypes.IMPACT_MEDIUM);
        tmp2 = onPress();
        return;
      }
    }
    const stringResult = obj6.string(tmp(tmp2[27]).t["1Qm822"]);
    cResult[6] = stringResult;
    const tmp14 = stringResult;
  } else {
    class E {
      constructor() {
        obj = closure_0(closure_2[33]);
        result = obj.triggerHapticFeedback(closure_0(closure_2[33]).HapticFeedbackTypes.IMPACT_MEDIUM);
        tmp2 = onPress();
        return;
      }
    }
  }
  if (cResult[7] === E) {
    class E {
      constructor() {
        obj = closure_0(closure_2[33]);
        result = obj.triggerHapticFeedback(closure_0(closure_2[33]).HapticFeedbackTypes.IMPACT_MEDIUM);
        tmp2 = onPress();
        return;
      }
    }
    if (cResult[10] === animatedProps) {
      class E {
        constructor() {
          obj = closure_0(closure_2[33]);
          result = obj.triggerHapticFeedback(closure_0(closure_2[33]).HapticFeedbackTypes.IMPACT_MEDIUM);
          tmp2 = onPress();
          return;
        }
      }
    }
    let obj3 = { style: tmp13, animatedProps, children: tmp16 };
    const tmp20 = closure_12(tmp8(tmp2[59]).View, obj3);
    cResult[10] = animatedProps;
    cResult[11] = tmp13;
    cResult[12] = tmp16;
    cResult[13] = tmp20;
  }
  const tmp17 = closure_12(onPress(stateFromStores[53]).Button, { variant: "primary", onPress: E, size: "lg", text: tmp14, loading });
  cResult[7] = E;
  cResult[8] = loading;
  cResult[9] = tmp17;
  let obj2 = { visible, tokens: visible(stateFromStores[10]), reducedMotion: stateFromStores, withSpring: onPress(stateFromStores[60]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING };
}) : (function ApplyButton(onPress) {
  onPress = onPress.onPress;
  const visible = onPress.visible;
  let stateFromStores;
  items = [AccessibilityStore];
  stateFromStores = onPress(stateFromStores[15]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj = onPress(stateFromStores[15]);
  const fn = function s() {
    let pointerEvents = "none";
    if (visible) {
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  fn.__closure = { visible };
  fn.__workletHash = 12831101080623;
  fn.__initData = __initData3;
  const animatedProps = onPress(stateFromStores[59]).useAnimatedProps(fn);
  let obj2 = onPress(stateFromStores[59]);
  const fn2 = function c() {
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
  let obj3 = onPress(stateFromStores[59]);
  fn2.__closure = { visible, tokens: visible(stateFromStores[10]), reducedMotion: stateFromStores, withSpring: onPress(stateFromStores[60]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING };
  fn2.__workletHash = 4139107659649;
  fn2.__initData = __initData4;
  const items1 = [onPress];
  const animatedStyle = obj3.useAnimatedStyle(fn2);
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items1);
  const obj5 = { style: animatedStyle, children: null };
  const obj6 = { style: { marginBottom: visible(stateFromStores[58])().bottom }, animatedProps, children: null };
  const obj7 = { variant: "primary", onPress: callback, size: "lg", text: null, loading: null };
  const intl = onPress(stateFromStores[27]).intl;
  obj7.text = intl.string(onPress(stateFromStores[27]).t["1Qm822"]);
  obj7.loading = onPress.loading;
  obj6.children = closure_12(onPress(stateFromStores[53]).Button, obj7);
  obj5.children = closure_12(visible(stateFromStores[59]).View, obj6);
  return closure_12(visible(stateFromStores[59]).View, obj5);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx");

export default function DisplayNameStylesEditScreen() {
  let tmp = first4();
  const tmp2 = navigation;
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
  let obj3 = { type: null, name: null, properties: null };
  let obj2 = navigation(isTryItOut[11]);
  obj3.type = tmp2(tmp3[13]).ImpressionTypes.POPOUT;
  obj3.name = tmp2(tmp3[13]).ImpressionNames.DISPLAY_NAME_STYLES_MODAL;
  const tmp7 = guildId(tmp3[12]);
  obj3.properties = { entry_point: tmp2(tmp3[14]).DisplayNameStylesEntryPoints.PROFILE_EDITOR };
  tmp7(obj3, { trackOnInitialLoad: true });
  let obj4 = { entry_point: tmp2(tmp3[14]).DisplayNameStylesEntryPoints.PROFILE_EDITOR };
  items = [onSelectEffect];
  const stateFromStores = tmp2(tmp3[15]).useStateFromStores(items, () => onSelectEffect.getCurrentUser());
  let tmp2Result = tmp2(tmp3[15]);
  const displayNameStylesPendingName = tmp2(tmp3[16]).useDisplayNameStylesPendingName(stateFromStores, guildId);
  const tmp2Result13 = tmp2(tmp3[16]);
  const guildMemberOrUserPendingDisplayNameStyles = tmp2(tmp3[17]).useGuildMemberOrUserPendingDisplayNameStyles(stateFromStores, guildId);
  ({ pendingDisplayNameStyles, guildDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  let id;
  const tmp2Result14 = tmp2(tmp3[17]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const obj5 = { userId: id, guildId, pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true };
  let tmp14 = pendingDisplayNameStyles;
  if (isTryItOut) {
    tmp14 = tryItOutDisplayNameStyles;
  }
  obj5.pendingDisplayNameStyles = tmp14;
  const tmp12Result = guildId(tmp3[18])(obj5);
  closure_5 = tmp12Result;
  let fontId;
  const tmp12 = guildId(tmp3[18]);
  if (tmp12Result != null) {
    fontId = tmp12Result.fontId;
  }
  if (fontId == null) {
    fontId = tmp2(tmp3[20]).DisplayNameFont.DEFAULT;
  }
  const tmp19 = stateFromStores(displayNameStylesPendingName.useState(fontId), 2);
  const selectedFontId = tmp19[0];
  const onSelectFont = tmp19[1];
  let effectId;
  if (tmp12Result != null) {
    effectId = tmp12Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[8]).DisplayNameEffect.SOLID;
  }
  const tmp18Result = stateFromStores(displayNameStylesPendingName.useState(effectId), 2);
  const first1 = tmp18Result[0];
  onSelectEffect = tmp18Result[1];
  const tmp16 = guildId(tmp3[19])();
  const tmp24 = tmp2(tmp3[21]).getEffectColorCount(first1) > 1;
  closure_10 = tmp24;
  const tmp2Result15 = tmp2(tmp3[21]);
  const isDisplayNameStylesFlywheelSettersEnabled = tmp2(tmp3[22]).useIsDisplayNameStylesFlywheelSettersEnabled("DisplayNameStylesEditScreen");
  const tmp2Result16 = tmp2(tmp3[22]);
  const displayNameStylesEffectConfig = tmp2(tmp3[23]).useDisplayNameStylesEffectConfig(first1);
  closure_12 = tmp6(tmp3[24])();
  let colors;
  if (tmp12Result != null) {
    colors = tmp12Result.colors;
  }
  if (colors == null) {
    colors = [];
  }
  if (colors.length > 0) {
    if (!tmp24) {
      let first2 = colors[0];
    }
    const tmp18Result3 = tmp18(tmp27(first2), 2);
    const first3 = tmp18Result3[0];
    value = tmp18Result3[1];
    const tmp18Result4 = tmp18(obj10.useState(() => Object.fromEntries(items.map((item) => {
      items = [item, ];
      let tmp = length;
      if (length.length <= 0) {
        tmp = closure_1_12[item];
      }
      items[1] = tmp;
      return items;
    }))), 2);
    first4 = tmp18Result4[0];
    closure_17 = tmp18Result4[1];
    const callback = obj10.useCallback((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_17((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[closure_0] = closure_1;
        return obj;
      });
    }, []);
    const items1 = [tmp24, first4, first1, displayNameStylesEffectConfig.defaultColors, first3];
    const memo = obj10.useMemo(() => {
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
    const items2 = [tmp12Result, selectedFontId, first1, memo];
    const memo1 = obj10.useMemo(() => {
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
    const callback1 = obj10.useCallback(() => {
      const obj2 = { text: null };
      const intl = navigation(isTryItOut[27]).intl;
      obj2.text = intl.string(navigation(isTryItOut[27]).t.F8FvUy);
      guildId(isTryItOut[26]).open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj2);
    }, []);
    const obj6 = {
      hasChanges: memo1,
      entryPoint: tmp2(tmp3[14]).DisplayNameStylesEntryPoints.PROFILE_EDITOR,
      selectedFontId,
      selectedEffectId: first1,
      selectedColors: memo,
      defaultColor: displayNameStylesEffectConfig.defaultColors[0],
      guildId,
      isTryItOut,
      onClose() {
          if (navigation.isFocused()) {
            navigation.goBack();
          }
        },
      onEnrollmentError: callback1
    };
    const displayNameStylesHandleApply = tmp2(tmp3[14]).useDisplayNameStylesHandleApply(obj6);
    ({ handleApply, isApplying } = displayNameStylesHandleApply);
    const tmp2Result18 = tmp2(tmp3[14]);
    const visibleFontOrder = tmp2(tmp3[28]).useVisibleFontOrder({ includeCampaignFonts: true });
    const tmp2Result19 = tmp2(tmp3[28]);
    const visibleEffectOrder = tmp2(tmp3[29]).useVisibleEffectOrder();
    const tmp2Result20 = tmp2(tmp3[29]);
    const displayNameStylesNewFontsBadge = tmp2(tmp3[30]).useDisplayNameStylesNewFontsBadge(visibleFontOrder);
    const showFontsBadge = displayNameStylesNewFontsBadge.showFontsBadge;
    const dismissFontsBadge = displayNameStylesNewFontsBadge.dismissFontsBadge;
    const tmp2Result21 = tmp2(tmp3[30]);
    const hexagonCampaignNewFontBadge = tmp2(tmp3[31]).useHexagonCampaignNewFontBadge("DisplayNameStylesEditScreen");
    const showCampaignFontBadge = hexagonCampaignNewFontBadge.showCampaignFontBadge;
    const dismissCampaignFontBadge = hexagonCampaignNewFontBadge.dismissCampaignFontBadge;
    const tmp2Result22 = tmp2(tmp3[31]);
    const markHexagonCampaignDisplayNameStylesVisited = tmp2(tmp3[31]).useMarkHexagonCampaignDisplayNameStylesVisited("DisplayNameStylesEditScreen");
    let tmp42 = showFontsBadge;
    if (!showFontsBadge) {
      tmp42 = showCampaignFontBadge;
    }
    const tmp2Result23 = tmp2(tmp3[31]);
    const displayNameStylesNewEffectsBadge = tmp2(tmp3[30]).useDisplayNameStylesNewEffectsBadge(visibleEffectOrder);
    const showEffectsBadge = displayNameStylesNewEffectsBadge.showEffectsBadge;
    const dismissEffectsBadge = displayNameStylesNewEffectsBadge.dismissEffectsBadge;
    const items3 = [callback, visibleFontOrder, visibleEffectOrder];
    const items4 = [navigation, isTryItOut];
    const callback2 = obj10.useCallback(() => {
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
    const callback3 = obj10.useCallback(() => {
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
    const items6 = [selectedFontId, displayNameStylesPendingName, isTryItOut, showFontsBadge, dismissFontsBadge, showCampaignFontBadge, dismissCampaignFontBadge];
    const callback4 = obj10.useCallback(() => {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      UserProfileSettingsActionCreators.setPendingChanges({ guildId, displayNameStyles: null });
      navigation.goBack();
    }, items5);
    const items7 = [first1, , , ];
    let id1;
    const callback5 = obj10.useCallback(() => {
      if (showFontsBadge) {
        dismissFontsBadge();
      }
      if (showCampaignFontBadge) {
        dismissCampaignFontBadge();
      }
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16697, dependencyMap.paths), "DisplayNameStylesFontPickerSheet", { selectedFontId, onSelectFont, displayName: displayNameStylesPendingName, isTryItOut });
      const obj2 = { selectedFontId, onSelectFont, displayName: displayNameStylesPendingName, isTryItOut };
    }, items6);
    if (stateFromStores != null) {
      id1 = stateFromStores.id;
    }
    items7[1] = id1;
    items7[2] = showEffectsBadge;
    items7[3] = dismissEffectsBadge;
    const items8 = [tmp24, memo, first3, first1, callback];
    const callback6 = obj10.useCallback(() => {
      if (showEffectsBadge) {
        dismissEffectsBadge();
      }
      let id;
      const obj = ActionSheetActionCreatorsDefault;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj.openLazy(asyncRequireImpl(16700, dependencyMap.paths), "DisplayNameStylesEffectPickerSheet", { userId: id, selectedEffectId: first1, onSelectEffect });
      const obj2 = { userId: id, selectedEffectId: first1, onSelectEffect };
      const tmp3 = asyncRequireImpl(16700, dependencyMap.paths);
    }, items7);
    const callback7 = obj10.useCallback(() => {
      if (first1 === DisplayNameEffect.DisplayNameEffect.GUMMY) {
        const obj2 = {
          selectedColors: memo,
          onSelectColors(arg0) {
              return callback(navigation(isTryItOut[8]).DisplayNameEffect.GUMMY, arg0);
            }
        };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16701, dependencyMap.paths), "DisplayNameStylesGummyColorPickerSheet", obj2);
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
          openLazy(tmp2Result(16706, dependencyMap.paths), "DisplayNameStylesGradientPickerSheet", obj4);
        } else {
          const obj = { selectedColor: first3, selectedEffectId: first1, onSelectColor };
          openLazy(tmp2Result(16710, dependencyMap.paths), "DisplayNameStylesColorPickerSheet", obj);
        }
      }
    }, items8);
    let intl = tmp2(tmp3[27]).intl;
    const stringResult = intl.string(tmp6(tmp3[43])(selectedFontId));
    let tmp53Result5 = null;
    if (null != stateFromStores) {
      const obj7 = { theme: tmp16, children: null };
      const obj8 = { value, children: null };
      const obj9 = { style: tmp.container, children: null };
      const obj11 = {};
      let merged = Object.assign(tmp.contentContainer);
      let num = 0;
      if (memo1) {
        num = 70;
      }
      const obj12 = { contentContainerStyle: null, children: null };
      obj11.paddingBottom = num;
      obj12.contentContainerStyle = obj11;
      const obj13 = { user: stateFromStores, displayName: displayNameStylesPendingName, guildId, selectedFontId, selectedEffectId: first1, selectedColors: memo, isTryItOut };
      const items9 = [closure_12(tmp6(tmp3[46]), obj13), , ];
      const obj14 = { style: tmp.fieldButtonGroup, children: null };
      const obj15 = { onPress: callback5, style: tmp.fieldButton, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl2 = tmp2(tmp3[27]).intl;
      const stringResult1 = intl2.string(tmp6(tmp3[47])["0JCuGm"]);
      if (tmp42) {
        const intl3 = tmp2(tmp3[27]).intl;
        const _HermesInternal2 = HermesInternal;
        let combined = "" + stringResult1 + ", " + stringResult + ", " + intl3.string(tmp2(tmp3[27]).t.y2b7CA);
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult1 + ", " + stringResult;
      }
      obj15.accessibilityLabel = combined;
      const obj16 = { children: null };
      const obj17 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl4 = tmp2(tmp3[27]).intl;
      obj17.children = intl4.string(tmp6(tmp3[47])["0JCuGm"]);
      const items10 = [closure_12(tmp2(tmp3[48]).Text, obj17), ];
      const obj18 = { variant: "text-md/normal", color: "text-subtle", children: stringResult };
      items10[1] = closure_12(tmp2(tmp3[48]).Text, obj18);
      obj16.children = items10;
      const items11 = [colors(closure_5, obj16), ];
      if (tmp42) {
        const obj19 = { style: tmp.fieldButtonTrailing, children: null };
        const items12 = [tmp53(tmp2(tmp3[49]).NewTag, {}), tmp53(tmp2(tmp3[50]).ChevronSmallRightIcon, { color: "icon-muted" })];
        obj19.children = items12;
        let tmp53Result3 = tmp55(tmp56, obj19);
      } else {
        tmp53Result3 = tmp53(tmp2(tmp3[50]).ChevronSmallRightIcon, { color: "icon-muted" });
      }
      items11[1] = tmp53Result3;
      obj15.children = items11;
      const items13 = [colors(onSelectFont, obj15), , ];
      const obj20 = { onPress: callback6, style: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const items14 = [, ];
      ({ fieldButton: arr17[0], fieldButtonBorder: arr17[1] } = tmp);
      obj20.style = items14;
      const intl5 = tmp2(tmp3[27]).intl;
      const stringResult2 = intl5.string(tmp6(tmp3[47]).RVtMxT);
      const name = displayNameStylesEffectConfig.name;
      if (showEffectsBadge) {
        const intl6 = tmp2(tmp3[27]).intl;
        const _HermesInternal4 = HermesInternal;
        let combined1 = "" + stringResult2 + ", " + name + ", " + intl6.string(tmp2(tmp3[27]).t.y2b7CA);
      } else {
        const _HermesInternal3 = HermesInternal;
        combined1 = "" + stringResult2 + ", " + name;
      }
      obj20.accessibilityLabel = combined1;
      const obj21 = { children: null };
      const obj22 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl7 = tmp2(tmp3[27]).intl;
      obj22.children = intl7.string(tmp6(tmp3[47]).RVtMxT);
      const items15 = [closure_12(tmp2(tmp3[48]).Text, obj22), ];
      const obj23 = { variant: "text-md/normal", color: "text-subtle", children: displayNameStylesEffectConfig.name };
      items15[1] = closure_12(tmp2(tmp3[48]).Text, obj23);
      obj21.children = items15;
      const items16 = [colors(closure_5, obj21), ];
      if (showEffectsBadge) {
        const obj24 = { style: tmp.fieldButtonTrailing, children: null };
        const items17 = [tmp53(tmp2(tmp3[49]).NewTag, {}), tmp53(tmp2(tmp3[50]).ChevronSmallRightIcon, { color: "icon-muted" })];
        obj24.children = items17;
        let tmp55Result2 = tmp55(tmp56, obj24);
      } else {
        tmp55Result2 = tmp53(tmp2(tmp3[50]).ChevronSmallRightIcon, { color: "icon-muted" });
      }
      items16[1] = tmp55Result2;
      obj20.children = items16;
      items13[1] = colors(onSelectFont, obj20);
      const obj25 = { onPress: callback7, style: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const items18 = [, ];
      ({ fieldButton: arr21[0], fieldButtonBorder: arr21[1] } = tmp);
      obj25.style = items18;
      const intl8 = tmp2(tmp3[27]).intl;
      obj25.accessibilityLabel = intl8.string(tmp6(tmp3[47])["6OxgN7"]);
      const obj26 = { style: tmp.fieldButtonLabel, children: null };
      const obj27 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl9 = tmp2(tmp3[27]).intl;
      obj27.children = intl9.string(tmp6(tmp3[47])["6OxgN7"]);
      const items19 = [closure_12(tmp2(tmp3[48]).Text, obj27), ];
      let str13 = "text-md/normal";
      if (isDisplayNameStylesFlywheelSettersEnabled) {
        str13 = "text-sm/normal";
      }
      const obj28 = { variant: str13, color: "text-subtle", lineClamp: 1, children: null };
      const mapped = memo.map((item) => navigation(isTryItOut[51]).int2hex(item));
      obj28.children = mapped.join(", ");
      items19[1] = closure_12(tmp2(tmp3[48]).Text, obj28);
      obj26.children = items19;
      const items20 = [colors(closure_5, obj26), ];
      const obj29 = { style: tmp.fieldButtonChevron, children: null };
      const obj30 = { colors: memo, effectId: first1 };
      const items21 = [closure_12(tmp6(tmp3[52]), obj30), closure_12(tmp2(tmp3[50]).ChevronSmallRightIcon, { color: "icon-muted" })];
      obj29.children = items21;
      items20[1] = colors(closure_5, obj29);
      obj25.children = items20;
      items13[2] = colors(onSelectFont, obj25);
      obj14.children = items13;
      items9[1] = colors(closure_5, obj14);
      const obj31 = { style: tmp.buttonContainer, children: null };
      const obj32 = { text: null, onPress: null, variant: "tertiary", size: "lg", grow: true, icon: null, iconPosition: "start" };
      const intl10 = tmp2(tmp3[27]).intl;
      obj32.text = intl10.string(tmp6(tmp3[47]).NOGFds);
      obj32.onPress = callback2;
      obj32.icon = closure_12(tmp2(tmp3[54]).DiceIcon, {});
      const items22 = [closure_12(tmp2(tmp3[53]).Button, obj32), , ];
      let tmp53Result = null == guildId && null != tmp12Result;
      if (tmp53Result) {
        const obj33 = { text: null, onPress: null, variant: "tertiary", size: "lg", grow: true, icon: null, iconPosition: "start" };
        const intl11 = tmp2(tmp3[27]).intl;
        obj33.text = intl11.string(tmp6(tmp3[47]).ymq8WQ);
        obj33.onPress = callback3;
        obj33.icon = tmp53(tmp2(tmp3[55]).DenyIcon, {});
        tmp53Result = tmp53(tmp2(tmp3[53]).Button, obj33);
      }
      items22[1] = tmp53Result;
      let tmp53Result4 = null != guildId;
      if (tmp53Result4) {
        tmp53Result4 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
        const tmp77 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
      }
      if (tmp53Result4) {
        const obj34 = { text: null, onPress: null, variant: "tertiary", size: "lg", grow: true, icon: null, iconPosition: "start" };
        const intl12 = tmp2(tmp3[27]).intl;
        obj34.text = intl12.string(tmp6(tmp3[47])["j/KRxc"]);
        obj34.onPress = callback4;
        obj34.icon = tmp53(tmp2(tmp3[55]).DenyIcon, {});
        tmp53Result4 = tmp53(tmp2(tmp3[53]).Button, obj34);
      }
      items22[2] = tmp53Result4;
      obj31.children = items22;
      items9[2] = colors(closure_5, obj31);
      obj12.children = items9;
      const items23 = [colors(selectedFontId, obj12), ];
      const obj35 = { onPress: handleApply, visible: memo1, loading: isApplying };
      items23[1] = closure_12(visibleEffectOrder, obj35);
      obj9.children = items23;
      obj8.children = colors(closure_5, obj9);
      obj7.children = closure_12(tmp2(tmp3[45]).DisplayNameStylesContext.Provider, obj8);
      tmp53Result5 = tmp53(tmp2(tmp3[44]).ThemeContextProvider, obj7);
    }
    return tmp53Result5;
  }
  first2 = displayNameStylesEffectConfig.defaultColors[0];
};