// discord_app/modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx
import shallowEqual from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DisplayNameStylesUtils from "../DisplayNameStylesUtils.tsx";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import MediaKeyboardConstants from "../../media_keyboard/native/MediaKeyboardConstants.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import UserProfileSettingsActionCreators from "../../user_profile/UserProfileSettingsActionCreators.tsx";
import UserProfileActionCreators from "../../user_profile/UserProfileActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let navigation, onPress;

let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
({ View: hasOwnProperty, ScrollView: metroRequire, Pressable: metroImportDefault } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const MEDIA_PICKER_SEND_BUTTON_SPRING = MediaKeyboardConstants.MEDIA_PICKER_SEND_BUTTON_SPRING;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let items = [
  DisplayNameEffect.DisplayNameEffect.GRADIENT,
  DisplayNameEffect.DisplayNameEffect.GUMMY,
  DisplayNameEffect.DisplayNameEffect.PRISM,
];
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  contentContainer: obj3,
  fieldButtonGroup: obj4,
  fieldButton: obj5,
  fieldButtonBorder: obj6,
  fieldButtonLabel: obj7,
  fieldButtonChevron: obj8,
  fieldButtonTrailing: obj9,
  buttonContainer: obj10,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md };
obj5 = {
  padding: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj6 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj7 = { flex: 1, marginRight: nativeDefault.space.PX_12 };
obj8 = { flexDirection: "row", gap: nativeDefault.space.PX_8, flexShrink: 0 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj10 = {
  marginVertical: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_MUTED,
  gap: nativeDefault.space.PX_16,
};
let closure_15 = createStyles(obj);
const __initData = {
  code: 'function DisplayNameStylesEditScreenTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?"box-none":"none"};}',
};
const __initData2 = {
  code: 'function DisplayNameStylesEditScreenTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:"absolute",bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:"column",justifyContent:"flex-end",transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}',
};
const __initData3 = {
  code: "function DisplayNameStylesEditScreenTsx3(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}",
};
const __initData4 = {
  code: "function DisplayNameStylesEditScreenTsx4(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}",
};
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let stateFromStores;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp4;
      let tmp5;
      let useReducedMotion;
      let obj = onPress(stateFromStores[53]);
      const cResult = obj.c(16);
      onPress = onPress.onPress;
      const visible = onPress.visible;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [AccessibilityStore];
        const fn = function l() {
          return useReducedMotion.useReducedMotion;
        };
        let num = 0;
        cResult[0] = items;
        let num2 = 1;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = onPress(stateFromStores[12]);
      stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const bottom = visible(tmp2[54])().bottom;
      const fn2 = function p() {
        let pointerEvents = "none";
        if (visible) {
          pointerEvents = "box-none";
        }
        return { pointerEvents };
      };
      fn2.__closure = { visible };
      fn2.__workletHash = 16971768742893;
      fn2.__initData = __initData;
      const tmpResult3 = onPress(stateFromStores[55]);
      const animatedProps = tmpResult3.useAnimatedProps(fn2);
      const fn3 = function y() {
        let withSpringResult2;
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
        const rect = {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          marginHorizontal: nativeDefault.space.PX_16,
          flexDirection: "column",
          justifyContent: "flex-end",
          transform: items,
          opacity: withSpringResult2,
        };
        let withSpringResult = num2;
        if (!stateFromStores) {
          const obj2 = spring;
          withSpringResult = obj2.withSpring(num2, MEDIA_PICKER_SEND_BUTTON_SPRING);
        }
        items = [{ translateY: withSpringResult }];
        let withSpringResult1 = num3;
        if (!stateFromStores) {
          const obj3 = spring;
          withSpringResult1 = obj3.withSpring(num3, MEDIA_PICKER_SEND_BUTTON_SPRING);
        }
        items[1] = { scale: withSpringResult1 };
        withSpringResult2 = num;
        if (!stateFromStores) {
          const obj4 = spring;
          withSpringResult2 = obj4.withSpring(num, MEDIA_PICKER_SEND_BUTTON_SPRING);
        }
        return rect;
      };
      const tmpResult4 = onPress(stateFromStores[55]);
      let obj2 = {
        visible,
        tokens: visible(tmp2[10]),
        reducedMotion: stateFromStores,
        withSpring: tmp(tmp2[56]).withSpring,
        MEDIA_PICKER_SEND_BUTTON_SPRING,
      };
      fn3.__closure = obj2;
      fn3.__workletHash = 16394479325031;
      fn3.__initData = __initData2;
      const animatedStyle = tmpResult4.useAnimatedStyle(fn3);
      if (cResult[2] !== onPress) {
        const fn4 = function f() {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          onPress();
        };
        let num3 = 2;
        cResult[2] = onPress;
        cResult[3] = fn4;
        tmp11 = fn4;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== bottom) {
        let obj3 = { marginBottom: bottom };
        cResult[4] = bottom;
        cResult[5] = obj3;
        tmp12 = obj3;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[38]).intl;
        const stringResult = intl.string(onPress(stateFromStores[38]).t["1Qm822"]);
        cResult[6] = stringResult;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] !== tmp11) {
        let obj4 = { variant: "primary", onPress: tmp11, size: "lg", text: tmp13 };
        const tmp17 = closure_12(onPress(stateFromStores[49]).Button, obj4);
        cResult[7] = tmp11;
        cResult[8] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === animatedProps) {
        if (cResult[10] === tmp12) {
          let tmp18;
          if (cResult[11] === tmp15) {
            tmp18 = cResult[12];
          }
          if (cResult[13] === animatedStyle) {
            let tmp20;
            if (cResult[14] === tmp18) {
              tmp20 = cResult[15];
            }
            return tmp20;
          }
          const obj5 = { style: animatedStyle, children: tmp18 };
          const tmp22 = closure_12(visible(stateFromStores[55]).View, obj5);
          cResult[13] = animatedStyle;
          cResult[14] = tmp18;
          cResult[15] = tmp22;
          tmp20 = tmp22;
        }
      }
      const tmp19 = closure_12(visible(stateFromStores[55]).View, { style: tmp12, animatedProps, children: tmp15 });
      cResult[9] = animatedProps;
      cResult[10] = tmp12;
      cResult[11] = tmp15;
      cResult[12] = tmp19;
      tmp18 = tmp19;
    }
  : (onPress) => {
      let Button;
      let View2;
      let intl;
      let obj6;
      let obj7;
      let useReducedMotion;
      onPress = onPress.onPress;
      const visible = onPress.visible;
      let stateFromStores;
      let obj = onPress(stateFromStores[12]);
      items = [AccessibilityStore];
      stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const bottom = visible(stateFromStores[54])().bottom;
      let obj2 = onPress(stateFromStores[55]);
      const fn = function o() {
        let pointerEvents = "none";
        if (visible) {
          pointerEvents = "box-none";
        }
        return { pointerEvents };
      };
      fn.__closure = { visible };
      fn.__workletHash = 12831101080623;
      fn.__initData = __initData3;
      const animatedProps = obj2.useAnimatedProps(fn);
      let obj3 = onPress(stateFromStores[55]);
      const fn2 = function s() {
        let withSpringResult2;
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
        const rect = {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          marginHorizontal: nativeDefault.space.PX_16,
          flexDirection: "column",
          justifyContent: "flex-end",
          transform: items,
          opacity: withSpringResult2,
        };
        let withSpringResult = num2;
        if (!stateFromStores) {
          const obj2 = spring;
          withSpringResult = obj2.withSpring(num2, MEDIA_PICKER_SEND_BUTTON_SPRING);
        }
        items = [{ translateY: withSpringResult }];
        let withSpringResult1 = num3;
        if (!stateFromStores) {
          const obj3 = spring;
          withSpringResult1 = obj3.withSpring(num3, MEDIA_PICKER_SEND_BUTTON_SPRING);
        }
        items[1] = { scale: withSpringResult1 };
        withSpringResult2 = num;
        if (!stateFromStores) {
          const obj4 = spring;
          withSpringResult2 = obj4.withSpring(num, MEDIA_PICKER_SEND_BUTTON_SPRING);
        }
        return rect;
      };
      let obj4 = {
        visible,
        tokens: visible(stateFromStores[10]),
        reducedMotion: stateFromStores,
        withSpring: onPress(stateFromStores[56]).withSpring,
        MEDIA_PICKER_SEND_BUTTON_SPRING,
      };
      fn2.__closure = obj4;
      fn2.__workletHash = 4139107659649;
      fn2.__initData = __initData4;
      const items1 = [onPress];
      const animatedStyle = obj3.useAnimatedStyle(fn2);
      const callback = react.useCallback(() => {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onPress();
      }, items1);
      const obj5 = { style: animatedStyle, children: closure_12(View2, obj6) };
      const View = visible(stateFromStores[55]).View;
      obj6 = { style: { marginBottom: bottom }, animatedProps, children: closure_12(Button, obj7) };
      View2 = visible(stateFromStores[55]).View;
      obj7 = {
        variant: "primary",
        onPress: callback,
        size: "lg",
        text: intl.string(onPress(stateFromStores[38]).t["1Qm822"]),
      };
      Button = onPress(stateFromStores[49]).Button;
      intl = onPress(stateFromStores[38]).intl;
      return closure_12(View, obj5);
    };
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx");

export default function DisplayNameStylesEditScreen() {
  let Provider;
  let combined;
  let combined1;
  let guildDisplayNameStyles;
  let intl10;
  let intl11;
  let intl12;
  let intl4;
  let intl7;
  let intl8;
  let intl9;
  let isTryItOut;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let items9;
  let mapped;
  let num;
  let obj6;
  let obj7;
  let onSelectColor;
  let onSelectEffect;
  let tmp12;
  let tryItOutDisplayNameStyles;
  let tmp = onSelectColor();
  const tmp3 = isTryItOut;
  let obj = navigation(isTryItOut[11]);
  const route = obj.useRoute();
  let obj2 = navigation(isTryItOut[11]);
  navigation = obj2.useNavigation();
  let params = route.params;
  if (params == null) {
    params = {};
  }
  const guildId = params.guildId;
  isTryItOut = params.isTryItOut;
  let tmp2Result = tmp2(tmp3[12]);
  items = [onSelectEffect];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => onSelectEffect.getCurrentUser());
  const tmp2Result11 = navigation(tmp3[13]);
  const displayNameStylesPendingName = tmp2Result11.useDisplayNameStylesPendingName(stateFromStores, guildId);
  const tmp2Result12 = navigation(tmp3[14]);
  const guildMemberOrUserPendingDisplayNameStyles = tmp2Result12.useGuildMemberOrUserPendingDisplayNameStyles(
    stateFromStores,
    guildId,
  );
  const pendingDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
  const tmp9 = guildId;
  ({ guildDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  let id;
  const tmp10 = guildId(tmp3[15]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let obj3 = { userId: id, guildId, pendingDisplayNameStyles: tmp12, ignoreDisabledStylesSetting: true };
  tmp12 = pendingDisplayNameStyles;
  if (isTryItOut) {
    tmp12 = tryItOutDisplayNameStyles;
  }
  const tmp10Result = tmp10(obj3);
  let closure_5 = tmp10Result;
  let fontId;
  const tmp14 = tmp9(tmp3[16])();
  const useState = displayNameStylesPendingName.useState;
  if (tmp10Result != null) {
    fontId = tmp10Result.fontId;
  }
  if (fontId == null) {
    fontId = tmp2(tmp3[17]).DisplayNameFont.DEFAULT;
  }
  const tmp17 = stateFromStores(useState(fontId), 2);
  const selectedFontId = tmp17[0];
  const onSelectFont = tmp17[1];
  let effectId;
  const useState2 = obj8.useState;
  if (tmp10Result != null) {
    effectId = tmp10Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[8]).DisplayNameEffect.SOLID;
  }
  const tmp16Result = stateFromStores(useState2(effectId), 2);
  const first1 = tmp16Result[0];
  onSelectEffect = tmp16Result[1];
  const tmp2Result13 = navigation(tmp3[18]);
  const tmp22 = tmp2Result13.getEffectColorCount(first1) > 1;
  let closure_10 = tmp22;
  const tmp2Result14 = navigation(tmp3[19]);
  const isDisplayNameStylesFlywheelSettersEnabled =
    tmp2Result14.useIsDisplayNameStylesFlywheelSettersEnabled("DisplayNameStylesEditScreen");
  const tmp2Result15 = navigation(tmp3[20]);
  const displayNameStylesEffectConfig = tmp2Result15.useDisplayNameStylesEffectConfig(first1);
  closure_12 = tmp9(tmp3[21])();
  let colors;
  if (tmp10Result != null) {
    colors = tmp10Result.colors;
  }
  if (colors == null) {
    colors = [];
  }
  if (colors.length > 0) {
    let first2;
    if (!tmp22) {
      first2 = colors[0];
    }
    const tmp16Result3 = stateFromStores(tmp25(first2), 2);
    const first3 = tmp16Result3[0];
    onSelectColor = tmp16Result3[1];
    const tmp16Result4 = stateFromStores(
      displayNameStylesPendingName.useState(() => {
        let length;
        return Object.fromEntries(
          items.map((item) => {
            items = [item];
            let tmp = length;
            if (length.length <= 0) {
              tmp = closure_1_12[item];
            }
            items[1] = tmp;
            return items;
          }),
        );
      }),
      2,
    );
    const first4 = tmp16Result4[0];
    let closure_17 = tmp16Result4[1];
    const callback = obj8.useCallback((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
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
        const areArraysShallowEqual = shallowEqual.areArraysShallowEqual;
        shallowEqual;
        if (closure_5 != null) {
          colors = closure_5.colors;
        }
        if (colors == null) {
          colors = [];
        }
        tmp4 = !areArraysShallowEqual(memo, colors);
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
      },
    };
    const tmp2Result16 = navigation(tmp3[23]);
    const displayNameStylesHandleApply = tmp2Result16.useDisplayNameStylesHandleApply(obj4);
    const tmp2Result17 = navigation(tmp3[24]);
    const visibleFontOrder = tmp2Result17.useVisibleFontOrder();
    const tmp2Result18 = navigation(tmp3[25]);
    const visibleEffectOrder = tmp2Result18.useVisibleEffectOrder();
    const tmp2Result19 = navigation(tmp3[26]);
    const displayNameStylesNewFontsBadge = tmp2Result19.useDisplayNameStylesNewFontsBadge(visibleFontOrder);
    const showFontsBadge = displayNameStylesNewFontsBadge.showFontsBadge;
    const dismissFontsBadge = displayNameStylesNewFontsBadge.dismissFontsBadge;
    const tmp2Result20 = navigation(tmp3[26]);
    const displayNameStylesNewEffectsBadge = tmp2Result20.useDisplayNameStylesNewEffectsBadge(visibleEffectOrder);
    const showEffectsBadge = displayNameStylesNewEffectsBadge.showEffectsBadge;
    const dismissEffectsBadge = displayNameStylesNewEffectsBadge.dismissEffectsBadge;
    const items3 = [callback, visibleFontOrder, visibleEffectOrder];
    const items4 = [navigation, isTryItOut];
    const callback1 = obj8.useCallback(() => {
      let effectId;
      const obj = DisplayNameStylesUtils;
      const randomDisplayNameStyles = obj.generateRandomDisplayNameStyles(visibleFontOrder, visibleEffectOrder);
      ({ effectId, colors } = randomDisplayNameStyles);
      onSelectFont(randomDisplayNameStyles.fontId);
      onSelectEffect(effectId);
      const obj2 = DisplayNameStylesUtils;
      if (obj2.getEffectColorCount(effectId) > 1) {
        callback(effectId, colors);
      } else {
        onSelectColor(colors[0]);
      }
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(AnalyticEvents.DISPLAY_NAME_STYLES_SURPRISE_ME);
    }, items3);
    const items5 = [guildId, navigation];
    const callback2 = obj8.useCallback(() => {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      if (isTryItOut) {
        const tmpResult = UserProfileActionCreators;
        const result1 = tmpResult.setTryItOutDisplayNameStyles(null);
      } else {
        const tmpResult2 = UserProfileSettingsActionCreators;
        tmpResult2.setPendingChanges({ displayNameStyles: null });
      }
      const obj4 = AnalyticsUtilsDefault;
      obj4.track(AnalyticEvents.DISPLAY_NAME_STYLES_REMOVED);
      navigation.goBack();
    }, items4);
    const items6 = [selectedFontId, displayNameStylesPendingName, showFontsBadge, dismissFontsBadge];
    const callback3 = obj8.useCallback(() => {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj2 = UserProfileSettingsActionCreators;
      const obj3 = { guildId, displayNameStyles: null };
      obj2.setPendingChanges(obj3);
      navigation.goBack();
    }, items5);
    const items7 = [first1, , ,];
    let id1;
    const callback4 = obj8.useCallback(() => {
      if (showFontsBadge) {
        dismissFontsBadge();
      }
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { selectedFontId, onSelectFont, displayName: displayNameStylesPendingName };
      obj.openLazy(asyncRequire(15162, dependencyMap.paths), "DisplayNameStylesFontPickerSheet", obj2);
    }, items6);
    const useCallback = displayNameStylesPendingName.useCallback;
    if (stateFromStores != null) {
      id1 = stateFromStores.id;
    }
    items7[1] = id1;
    items7[2] = showEffectsBadge;
    items7[3] = dismissEffectsBadge;
    const items8 = [tmp22, memo, first3, first1, callback];
    const callback5 = useCallback(() => {
      if (showEffectsBadge) {
        dismissEffectsBadge();
      }
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      let id;
      ActionSheetActionCreatorsDefault;
      const tmp5 = asyncRequire(15164, dependencyMap.paths);
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const obj = { userId: id, selectedEffectId: first1, onSelectEffect };
      openLazy(tmp5, "DisplayNameStylesEffectPickerSheet", obj);
    }, items7);
    const callback6 = obj8.useCallback(() => {
      if (first1 === DisplayNameEffect.DisplayNameEffect.GUMMY) {
        const obj2 = {
          selectedColors: memo,
          onSelectColors(arg0) {
            return callback(navigation(isTryItOut[8]).DisplayNameEffect.GUMMY, arg0);
          },
        };
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.openLazy(asyncRequire(15165, dependencyMap.paths), "DisplayNameStylesGummyColorPickerSheet", obj2);
      } else {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        ActionSheetActionCreatorsDefault;
        const tmp2Result = asyncRequire;
        if (closure_10) {
          const obj4 = {
            selectedColors: memo,
            selectedEffectId: first1,
            onSelectColors(arg0) {
              return callback(first1, arg0);
            },
          };
          openLazy(tmp2Result(15170, dependencyMap.paths), "DisplayNameStylesGradientPickerSheet", obj4);
        } else {
          const obj = { selectedColor: first3, selectedEffectId: first1, onSelectColor };
          openLazy(tmp2Result(15174, dependencyMap.paths), "DisplayNameStylesColorPickerSheet", obj);
        }
      }
    }, items8);
    const intl = tmp2(tmp3[38]).intl;
    const stringResult = intl.string(tmp9(tmp3[39])(selectedFontId));
    let tmp47Result5 = null;
    if (null != stateFromStores) {
      let tmp47Result3;
      let tmp48Result2;
      const obj5 = { theme: tmp14, children: closure_12(Provider, obj6) };
      const ThemeContextProvider = tmp2(tmp3[40]).ThemeContextProvider;
      obj6 = { value: { overrideSettings: true }, children: colors(closure_5, obj7) };
      obj7 = { style: tmp.container, children: items23 };
      const obj9 = { paddingBottom: num };
      Provider = tmp2(tmp3[41]).DisplayNameStylesContext.Provider;
      let merged = Object.assign(tmp.contentContainer);
      num = 0;
      const tmp50 = selectedFontId;
      if (memo1) {
        num = 70;
      }
      const obj10 = { contentContainerStyle: obj9, children: items9 };
      const obj11 = {
        user: stateFromStores,
        displayName: displayNameStylesPendingName,
        guildId,
        selectedFontId,
        selectedEffectId: first1,
        selectedColors: memo,
      };
      items9 = [closure_12(tmp9(tmp3[42]), obj11), ,];
      const obj12 = { style: tmp.fieldButtonGroup, children: items13 };
      const obj13 = {
        onPress: callback4,
        style: tmp.fieldButton,
        accessibilityRole: "button",
        accessibilityLabel: combined,
        children: items11,
      };
      const intl2 = tmp2(tmp3[38]).intl;
      const stringResult1 = intl2.string(tmp9(tmp3[43])["0JCuGm"]);
      if (showFontsBadge) {
        const intl3 = tmp2(tmp3[38]).intl;
        const _HermesInternal2 = HermesInternal;
        combined = "" + stringResult1 + ", " + stringResult + ", " + intl3.string(tmp2(tmp3[38]).t.y2b7CA);
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult1 + ", " + stringResult;
      }
      const obj14 = { children: items10 };
      const obj15 = {
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: intl4.string(tmp9(tmp3[43])["0JCuGm"]),
      };
      const Text = tmp2(tmp3[44]).Text;
      intl4 = tmp2(tmp3[38]).intl;
      items10 = [closure_12(Text, obj15)];
      const obj16 = { variant: "text-md/normal", color: "text-subtle", children: stringResult };
      items10[1] = closure_12(navigation(tmp3[44]).Text, obj16);
      items11 = [colors(closure_5, obj14)];
      if (showFontsBadge) {
        const obj17 = { style: tmp.fieldButtonTrailing, children: items12 };
        items12 = [
          closure_12(navigation(tmp3[45]).NewTag, {}),
          closure_12(navigation(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" }),
        ];
        tmp47Result3 = tmp48(tmp49, obj17);
      } else {
        tmp47Result3 = tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" });
      }
      items11[1] = tmp47Result3;
      items13 = [colors(onSelectFont, obj13), ,];
      const obj18 = {
        onPress: callback5,
        style: items14,
        accessibilityRole: "button",
        accessibilityLabel: combined1,
        children: items16,
      };
      items14 = [,];
      ({ fieldButton: arr17[0], fieldButtonBorder: arr17[1] } = tmp);
      const intl5 = tmp2(tmp3[38]).intl;
      const stringResult2 = intl5.string(tmp9(tmp3[43]).RVtMxT);
      const name = displayNameStylesEffectConfig.name;
      if (showEffectsBadge) {
        const intl6 = tmp2(tmp3[38]).intl;
        const _HermesInternal4 = HermesInternal;
        combined1 = "" + stringResult2 + ", " + name + ", " + intl6.string(tmp2(tmp3[38]).t.y2b7CA);
      } else {
        const _HermesInternal3 = HermesInternal;
        combined1 = "" + stringResult2 + ", " + name;
      }
      const obj19 = { children: items15 };
      const obj20 = {
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: intl7.string(tmp9(tmp3[43]).RVtMxT),
      };
      const Text2 = tmp2(tmp3[44]).Text;
      intl7 = tmp2(tmp3[38]).intl;
      items15 = [closure_12(Text2, obj20)];
      const obj21 = { variant: "text-md/normal", color: "text-subtle", children: displayNameStylesEffectConfig.name };
      items15[1] = closure_12(navigation(tmp3[44]).Text, obj21);
      items16 = [colors(closure_5, obj19)];
      if (showEffectsBadge) {
        const obj22 = { style: tmp.fieldButtonTrailing, children: items17 };
        items17 = [
          closure_12(navigation(tmp3[45]).NewTag, {}),
          closure_12(navigation(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" }),
        ];
        tmp48Result2 = tmp48(tmp49, obj22);
      } else {
        tmp48Result2 = tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" });
      }
      items16[1] = tmp48Result2;
      items13[1] = colors(onSelectFont, obj18);
      const obj23 = {
        onPress: callback6,
        style: items18,
        accessibilityRole: "button",
        accessibilityLabel: intl8.string(tmp9(tmp3[43])["6OxgN7"]),
        children: items20,
      };
      items18 = [,];
      ({ fieldButton: arr21[0], fieldButtonBorder: arr21[1] } = tmp);
      intl8 = tmp2(tmp3[38]).intl;
      const obj24 = { style: tmp.fieldButtonLabel, children: items19 };
      const obj25 = {
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: intl9.string(tmp9(tmp3[43])["6OxgN7"]),
      };
      const Text3 = tmp2(tmp3[44]).Text;
      intl9 = tmp2(tmp3[38]).intl;
      items19 = [closure_12(Text3, obj25)];
      let str13 = "text-md/normal";
      const Text4 = tmp2(tmp3[44]).Text;
      if (isDisplayNameStylesFlywheelSettersEnabled) {
        str13 = "text-sm/normal";
      }
      const obj26 = { variant: str13, color: "text-subtle", lineClamp: 1, children: mapped.join(", ") };
      mapped = memo.map((item) => {
        const obj = navigation(isTryItOut[47]);
        return obj.int2hex(item);
      });
      items19[1] = closure_12(Text4, obj26);
      items20 = [colors(closure_5, obj24)];
      const obj27 = { style: tmp.fieldButtonChevron, children: items21 };
      const obj28 = { colors: memo, effectId: first1 };
      items21 = [
        closure_12(tmp9(tmp3[48]), obj28),
        closure_12(navigation(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" }),
      ];
      items20[1] = colors(closure_5, obj27);
      items13[2] = colors(onSelectFont, obj23);
      items9[1] = colors(closure_5, obj12);
      const obj29 = { style: tmp.buttonContainer, children: items22 };
      const obj30 = {
        text: intl10.string(tmp9(tmp3[43]).NOGFds),
        onPress: callback1,
        variant: "tertiary",
        size: "lg",
        grow: true,
        icon: closure_12(navigation(tmp3[50]).DiceIcon, {}),
        iconPosition: "start",
      };
      const Button = tmp2(tmp3[49]).Button;
      intl10 = tmp2(tmp3[38]).intl;
      items22 = [closure_12(Button, obj30), ,];
      let tmp47Result = null == guildId && null != tmp10Result;
      if (tmp47Result) {
        const obj31 = {
          text: intl11.string(tmp9(tmp3[43]).ymq8WQ),
          onPress: callback2,
          variant: "tertiary",
          size: "lg",
          grow: true,
          icon: closure_12(navigation(tmp3[51]).DenyIcon, {}),
          iconPosition: "start",
        };
        const Button2 = tmp2(tmp3[49]).Button;
        intl11 = tmp2(tmp3[38]).intl;
        tmp47Result = tmp47(Button2, obj31);
      }
      items22[1] = tmp47Result;
      let tmp47Result4 = null != guildId;
      if (tmp47Result4) {
        tmp47Result4 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
      }
      if (tmp47Result4) {
        const obj32 = {
          text: intl12.string(tmp9(tmp3[43])["j/KRxc"]),
          onPress: callback3,
          variant: "tertiary",
          size: "lg",
          grow: true,
          icon: closure_12(navigation(tmp3[51]).DenyIcon, {}),
          iconPosition: "start",
        };
        const Button3 = tmp2(tmp3[49]).Button;
        intl12 = tmp2(tmp3[38]).intl;
        tmp47Result4 = tmp47(Button3, obj32);
      }
      items22[2] = tmp47Result4;
      items9[2] = colors(closure_5, obj29);
      items23 = [colors(tmp50, obj10)];
      const obj33 = { onPress: displayNameStylesHandleApply, visible: memo1 };
      items23[1] = closure_12(visibleFontOrder, obj33);
      tmp47Result5 = tmp47(ThemeContextProvider, obj5);
    }
    return tmp47Result5;
  }
  first2 = displayNameStylesEffectConfig.defaultColors[0];
}
