// discord_app/modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx
import discord_common_shallowEqual from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DisplayNameStylesUtils from "../DisplayNameStylesUtils.tsx";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import UserProfileSettingsActionCreators from "../../user_profile/UserProfileSettingsActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function ApplyButton(onPress) {
  onPress = onPress.onPress;
  const visible = onPress.visible;
  let stateFromStores;
  let obj = onPress(stateFromStores[12]);
  items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = onPress(stateFromStores[53]);
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
  const animatedProps = obj1.useAnimatedProps(fn);
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
    const rect = {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      marginHorizontal: nativeDefault.space.PX_16,
      flexDirection: "column",
      justifyContent: "flex-end",
      transform: null,
      opacity: null,
    };
    let withSpringResult = num2;
    if (!stateFromStores) {
      withSpringResult = spring.withSpring(num2, closure_11);
    }
    items = [{ translateY: withSpringResult }];
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
  obj = {
    visible,
    tokens: visible(stateFromStores[10]),
    reducedMotion: stateFromStores,
    withSpring: onPress(stateFromStores[54]).withSpring,
    MEDIA_PICKER_SEND_BUTTON_SPRING,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 16786362025671;
  fn2.__initData = __initData2;
  const items1 = [onPress];
  const animatedStyle = obj2.useAnimatedStyle(fn2);
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items1);
  obj = { style: animatedStyle, children: null };
  obj1 = { style: { marginBottom: visible(stateFromStores[52])().bottom }, animatedProps, children: null };
  obj2 = { variant: "primary", onPress: callback, size: "lg", text: null };
  const intl = onPress(stateFromStores[38]).intl;
  obj2.text = intl.string(onPress(stateFromStores[38]).t["1Qm822"]);
  obj1.children = closure_12(onPress(stateFromStores[49]).Button, obj2);
  obj.children = closure_12(visible(stateFromStores[53]).View, obj1);
  return closure_12(visible(stateFromStores[53]).View, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const MEDIA_PICKER_SEND_BUTTON_SPRING = fn(1607).MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let items = [fn(1390).DisplayNameEffect.GRADIENT, fn(1390).DisplayNameEffect.GUMMY, fn(1390).DisplayNameEffect.PRISM];
fn(4560);
let createStyles = {
  container: null,
  contentContainer: null,
  fieldButtonGroup: null,
  fieldButton: null,
  fieldButtonBorder: null,
  fieldButtonLabel: null,
  fieldButtonChevron: null,
  fieldButtonTrailing: null,
  buttonContainer: null,
};
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj1 = { padding: nativeDefault.space.PX_16 };
createStyles.fieldButtonGroup = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.md,
};
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md };
createStyles.fieldButton = {
  padding: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
let obj3 = {
  padding: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
createStyles.fieldButtonBorder = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let obj4 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.fieldButtonLabel = { flex: 1, marginRight: nativeDefault.space.PX_12 };
let obj5 = { flex: 1, marginRight: nativeDefault.space.PX_12 };
createStyles.fieldButtonChevron = { flexDirection: "row", gap: nativeDefault.space.PX_8, flexShrink: 0 };
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8, flexShrink: 0 };
createStyles.fieldButtonTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.buttonContainer = {
  marginVertical: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_MUTED,
  gap: nativeDefault.space.PX_16,
};
let closure_15 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function DisplayNameStylesEditScreenTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}",
};
const __initData2 = {
  code: "function DisplayNameStylesEditScreenTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx");

export default function DisplayNameStylesEditScreen() {
  let tmp = onSelectColor();
  const tmp3 = isTryItOut;
  let obj = navigation(isTryItOut[11]);
  const route = obj.useRoute();
  let obj1 = navigation(isTryItOut[11]);
  navigation = obj1.useNavigation();
  let params = route.params;
  if (params == null) {
    params = {};
  }
  const guildId = params.guildId;
  isTryItOut = params.isTryItOut;
  let tmp2Result = tmp2(tmp3[12]);
  items = [onSelectEffect];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => onSelectEffect.getCurrentUser());
  tmp2Result = tmp2(tmp3[13]);
  const displayNameStylesPendingName = tmp2Result.useDisplayNameStylesPendingName(stateFromStores, guildId);
  const guildMemberOrUserPendingDisplayNameStyles = navigation(tmp3[14]).useGuildMemberOrUserPendingDisplayNameStyles(
    stateFromStores,
    guildId,
  );
  const pendingDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
  ({ guildDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  let id;
  const tmp2Result1 = navigation(tmp3[14]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  obj = { userId: id, guildId, pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true };
  let tmp12 = pendingDisplayNameStyles;
  if (isTryItOut) {
    tmp12 = tryItOutDisplayNameStyles;
  }
  obj.pendingDisplayNameStyles = tmp12;
  const tmp10Result = guildId(tmp3[15])(obj);
  closure_5 = tmp10Result;
  let obj7 = displayNameStylesPendingName;
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
  let tmp16Result = tmp16(obj7.useState(effectId), 2);
  const first1 = tmp16Result[0];
  onSelectEffect = tmp16Result[1];
  let tmp14 = guildId(tmp3[16])();
  const tmp22 = navigation(tmp3[18]).getEffectColorCount(first1) > 1;
  closure_10 = tmp22;
  const tmp2Result2 = navigation(tmp3[18]);
  const isDisplayNameStylesFlywheelSettersEnabled = navigation(tmp3[19]).useIsDisplayNameStylesFlywheelSettersEnabled(
    "DisplayNameStylesEditScreen",
  );
  const tmp2Result3 = navigation(tmp3[19]);
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
    tmp16Result = tmp16(tmp25(first2), 2);
    const first3 = tmp16Result[0];
    onSelectColor = tmp16Result[1];
    const tmp16Result1 = tmp16(
      obj7.useState(() =>
        Object.fromEntries(
          items.map((item) => {
            items = [item];
            let tmp = length;
            if (length.length <= 0) {
              tmp = closure_1_12[item];
            }
            items[1] = tmp;
            return items;
          }),
        ),
      ),
      2,
    );
    const first4 = tmp16Result1[0];
    closure_17 = tmp16Result1[1];
    const callback = obj7.useCallback((arg0, arg1) => {
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
    const memo = obj7.useMemo(() => {
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
    const memo1 = obj7.useMemo(() => {
      let fontId;
      if (closure_5 != null) {
        fontId = tmp2.fontId;
      }
      let tmp4 = first !== fontId;
      if (!tmp4) {
        let effectId;
        if (tmp2 != null) {
          effectId = tmp2.effectId;
        }
        tmp4 = first1 !== effectId;
      }
      if (!tmp4) {
        colors = undefined;
        if (tmp2 != null) {
          colors = tmp2.colors;
        }
        if (colors == null) {
          colors = [];
        }
        tmp4 = !discord_common_shallowEqual.areArraysShallowEqual(memo, colors);
      }
      return tmp4;
    }, items2);
    obj = {
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
    const displayNameStylesHandleApply = tmp2(tmp3[23]).useDisplayNameStylesHandleApply(obj);
    const tmp2Result5 = tmp2(tmp3[23]);
    const visibleFontOrder = tmp2(tmp3[24]).useVisibleFontOrder();
    const tmp2Result6 = tmp2(tmp3[24]);
    const visibleEffectOrder = tmp2(tmp3[25]).useVisibleEffectOrder();
    const tmp2Result7 = tmp2(tmp3[25]);
    const displayNameStylesNewFontsBadge = tmp2(tmp3[26]).useDisplayNameStylesNewFontsBadge(visibleFontOrder);
    const showFontsBadge = displayNameStylesNewFontsBadge.showFontsBadge;
    const dismissFontsBadge = displayNameStylesNewFontsBadge.dismissFontsBadge;
    const tmp2Result8 = tmp2(tmp3[26]);
    const displayNameStylesNewEffectsBadge = tmp2(tmp3[26]).useDisplayNameStylesNewEffectsBadge(visibleEffectOrder);
    const showEffectsBadge = displayNameStylesNewEffectsBadge.showEffectsBadge;
    const dismissEffectsBadge = displayNameStylesNewEffectsBadge.dismissEffectsBadge;
    const items3 = [callback, visibleFontOrder, visibleEffectOrder];
    const items4 = [navigation, isTryItOut];
    const callback1 = obj7.useCallback(() => {
      const randomDisplayNameStyles = DisplayNameStylesUtils.generateRandomDisplayNameStyles(
        visibleFontOrder,
        visibleEffectOrder,
      );
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
    const callback2 = obj7.useCallback(() => {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      if (isTryItOut) {
        let tmpResult = tmp(8167);
        const result1 = tmpResult.setTryItOutDisplayNameStyles(null);
      } else {
        tmpResult = tmp(8164);
        tmpResult.setPendingChanges({ displayNameStyles: null });
      }
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_REMOVED);
      navigation.goBack();
    }, items4);
    const items6 = [selectedFontId, displayNameStylesPendingName, showFontsBadge, dismissFontsBadge];
    const callback3 = obj7.useCallback(() => {
      let obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      obj = { guildId, displayNameStyles: null };
      UserProfileSettingsActionCreators.setPendingChanges(obj);
      navigation.goBack();
    }, items5);
    const items7 = [first1, , ,];
    let id1;
    const callback4 = obj7.useCallback(() => {
      if (showFontsBadge) {
        dismissFontsBadge();
      }
      const obj = { selectedFontId, onSelectFont, displayName: displayNameStylesPendingName };
      obj.openLazy(asyncRequireImpl(15342, dependencyMap.paths), "DisplayNameStylesFontPickerSheet", obj);
    }, items6);
    if (stateFromStores != null) {
      id1 = stateFromStores.id;
    }
    items7[1] = id1;
    items7[2] = showEffectsBadge;
    items7[3] = dismissEffectsBadge;
    const items8 = [tmp22, memo, first3, first1, callback];
    const callback5 = obj7.useCallback(() => {
      if (showEffectsBadge) {
        dismissEffectsBadge();
      }
      let obj = ActionSheetActionCreatorsDefault;
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj = { userId: id, selectedEffectId: first1, onSelectEffect };
      obj.openLazy(asyncRequireImpl(15343, dependencyMap.paths), "DisplayNameStylesEffectPickerSheet", obj);
    }, items7);
    const callback6 = obj7.useCallback(() => {
      if (first1 === DisplayNameEffect.DisplayNameEffect.GUMMY) {
        let obj = {
          selectedColors: memo,
          onSelectColors(arg0) {
            return callback(navigation(isTryItOut[8]).DisplayNameEffect.GUMMY, arg0);
          },
        };
        ActionSheetActionCreatorsDefault.openLazy(
          tmp2(1896)(15344, tmp3.paths),
          "DisplayNameStylesGummyColorPickerSheet",
          obj,
        );
      } else {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        const tmp2Result = tmp2(1896);
        if (closure_10) {
          obj = {
            selectedColors: memo,
            selectedEffectId: tmp,
            onSelectColors(arg0) {
              return callback(first1, arg0);
            },
          };
          openLazy(tmp2Result(15349, tmp3.paths), "DisplayNameStylesGradientPickerSheet", obj);
        } else {
          obj = { selectedColor: first3, selectedEffectId: tmp, onSelectColor };
          openLazy(tmp2Result(15352, tmp3.paths), "DisplayNameStylesColorPickerSheet", obj);
        }
      }
    }, items8);
    const intl = tmp2(tmp3[38]).intl;
    const stringResult = intl.string(tmp9(tmp3[39])(selectedFontId));
    let tmp47Result2 = null;
    if (null != stateFromStores) {
      obj1 = { theme: tmp14, children: null };
      let obj2 = { value: { overrideSettings: true }, children: null };
      let obj3 = { style: tmp.container, children: null };
      const obj4 = {};
      let merged = Object.assign(tmp.contentContainer);
      let num = 0;
      if (memo1) {
        num = 70;
      }
      const obj5 = { contentContainerStyle: null, children: null };
      obj4.paddingBottom = num;
      obj5.contentContainerStyle = obj4;
      const obj6 = {
        user: stateFromStores,
        displayName: displayNameStylesPendingName,
        guildId,
        selectedFontId,
        selectedEffectId: first1,
        selectedColors: memo,
      };
      const items9 = [closure_12(tmp9(tmp3[42]), obj6), ,];
      obj7 = { style: tmp.fieldButtonGroup, children: null };
      const obj8 = {
        onPress: callback4,
        style: tmp.fieldButton,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
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
      obj8.accessibilityLabel = combined;
      const obj9 = { children: null };
      const obj10 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl4 = tmp2(tmp3[38]).intl;
      obj10.children = intl4.string(tmp9(tmp3[43])["0JCuGm"]);
      const items10 = [closure_12(tmp2(tmp3[44]).Text, obj10)];
      const obj11 = { variant: "text-md/normal", color: "text-subtle", children: stringResult };
      items10[1] = closure_12(tmp2(tmp3[44]).Text, obj11);
      obj9.children = items10;
      const items11 = [colors(closure_5, obj9)];
      if (showFontsBadge) {
        const obj12 = { style: tmp.fieldButtonTrailing, children: null };
        const items12 = [
          tmp47(tmp2(tmp3[45]).NewTag, {}),
          tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" }),
        ];
        obj12.children = items12;
        let tmp47Result = tmp48(tmp49, obj12);
      } else {
        tmp47Result = tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" });
      }
      items11[1] = tmp47Result;
      obj8.children = items11;
      const items13 = [colors(onSelectFont, obj8), ,];
      const obj13 = {
        onPress: callback5,
        style: null,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const items14 = [,];
      ({ fieldButton: arr17[0], fieldButtonBorder: arr17[1] } = tmp);
      obj13.style = items14;
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
      obj13.accessibilityLabel = combined1;
      const obj14 = { children: null };
      const obj15 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl7 = tmp2(tmp3[38]).intl;
      obj15.children = intl7.string(tmp9(tmp3[43]).RVtMxT);
      const items15 = [closure_12(tmp2(tmp3[44]).Text, obj15)];
      const obj16 = { variant: "text-md/normal", color: "text-subtle", children: displayNameStylesEffectConfig.name };
      items15[1] = closure_12(tmp2(tmp3[44]).Text, obj16);
      obj14.children = items15;
      const items16 = [colors(closure_5, obj14)];
      if (showEffectsBadge) {
        const obj17 = { style: tmp.fieldButtonTrailing, children: null };
        const items17 = [
          tmp47(tmp2(tmp3[45]).NewTag, {}),
          tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" }),
        ];
        obj17.children = items17;
        let tmp48Result = tmp48(tmp49, obj17);
      } else {
        tmp48Result = tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" });
      }
      items16[1] = tmp48Result;
      obj13.children = items16;
      items13[1] = colors(onSelectFont, obj13);
      const obj18 = {
        onPress: callback6,
        style: null,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const items18 = [,];
      ({ fieldButton: arr21[0], fieldButtonBorder: arr21[1] } = tmp);
      obj18.style = items18;
      const intl8 = tmp2(tmp3[38]).intl;
      obj18.accessibilityLabel = intl8.string(tmp9(tmp3[43])["6OxgN7"]);
      const obj19 = { style: tmp.fieldButtonLabel, children: null };
      const obj20 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl9 = tmp2(tmp3[38]).intl;
      obj20.children = intl9.string(tmp9(tmp3[43])["6OxgN7"]);
      const items19 = [closure_12(tmp2(tmp3[44]).Text, obj20)];
      let str13 = "text-md/normal";
      if (isDisplayNameStylesFlywheelSettersEnabled) {
        str13 = "text-sm/normal";
      }
      const obj21 = { variant: str13, color: "text-subtle", lineClamp: 1, children: null };
      const mapped = memo.map((item) => navigation(isTryItOut[47]).int2hex(item));
      obj21.children = mapped.join(", ");
      items19[1] = closure_12(tmp2(tmp3[44]).Text, obj21);
      obj19.children = items19;
      const items20 = [colors(closure_5, obj19)];
      const obj22 = { style: tmp.fieldButtonChevron, children: null };
      const obj23 = { colors: memo, effectId: first1 };
      const items21 = [
        closure_12(tmp9(tmp3[48]), obj23),
        closure_12(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" }),
      ];
      obj22.children = items21;
      items20[1] = colors(closure_5, obj22);
      obj18.children = items20;
      items13[2] = colors(onSelectFont, obj18);
      obj7.children = items13;
      items9[1] = colors(closure_5, obj7);
      const obj24 = { style: tmp.buttonContainer, children: null };
      const obj25 = {
        text: null,
        onPress: null,
        variant: "tertiary",
        size: "lg",
        grow: true,
        icon: null,
        iconPosition: "start",
      };
      const intl10 = tmp2(tmp3[38]).intl;
      obj25.text = intl10.string(tmp9(tmp3[43]).NOGFds);
      obj25.onPress = callback1;
      obj25.icon = closure_12(tmp2(tmp3[50]).DiceIcon, {});
      const items22 = [closure_12(tmp2(tmp3[49]).Button, obj25), ,];
      tmp47Result = null == guildId && null != tmp10Result;
      if (tmp47Result) {
        const obj26 = {
          text: null,
          onPress: null,
          variant: "tertiary",
          size: "lg",
          grow: true,
          icon: null,
          iconPosition: "start",
        };
        const intl11 = tmp2(tmp3[38]).intl;
        obj26.text = intl11.string(tmp9(tmp3[43]).ymq8WQ);
        obj26.onPress = callback2;
        obj26.icon = tmp47(tmp2(tmp3[51]).DenyIcon, {});
        tmp47Result = tmp47(tmp2(tmp3[49]).Button, obj26);
      }
      items22[1] = tmp47Result;
      let tmp47Result1 = null != guildId;
      if (tmp47Result1) {
        tmp47Result1 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
        const tmp70 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
      }
      if (tmp47Result1) {
        const obj27 = {
          text: null,
          onPress: null,
          variant: "tertiary",
          size: "lg",
          grow: true,
          icon: null,
          iconPosition: "start",
        };
        const intl12 = tmp2(tmp3[38]).intl;
        obj27.text = intl12.string(tmp9(tmp3[43])["j/KRxc"]);
        obj27.onPress = callback3;
        obj27.icon = tmp47(tmp2(tmp3[51]).DenyIcon, {});
        tmp47Result1 = tmp47(tmp2(tmp3[49]).Button, obj27);
      }
      items22[2] = tmp47Result1;
      obj24.children = items22;
      items9[2] = colors(closure_5, obj24);
      obj5.children = items9;
      const items23 = [colors(selectedFontId, obj5)];
      const obj28 = { onPress: displayNameStylesHandleApply, visible: memo1 };
      items23[1] = closure_12(callback, obj28);
      obj3.children = items23;
      obj2.children = colors(closure_5, obj3);
      obj1.children = closure_12(tmp2(tmp3[41]).DisplayNameStylesContext.Provider, obj2);
      tmp47Result2 = tmp47(tmp2(tmp3[40]).ThemeContextProvider, obj1);
    }
    return tmp47Result2;
  }
  first2 = displayNameStylesEffectConfig.defaultColors[0];
}
