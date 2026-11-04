// discord_app/modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx
import discord_common_shallowEqual from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DisplayNameStylesUtils from "../DisplayNameStylesUtils.tsx";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef1652 from "../../../../_runtime/metro/01652__.js";
import asyncRequireImpl from "../../../../_runtime/02123_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import UserProfileSettingsActionCreators from "../../user_profile/UserProfileSettingsActionCreators.tsx";
import UserProfileActionCreators from "../../user_profile/UserProfileActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function ApplyButton(onPress) {
  onPress = onPress.onPress;
  _require = onPress;
  const visible = onPress.visible;
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj = require("initialize");
  const items1 = [closure_18, visible];
  _require = undefined;
  [tmp5, tmp6] = items1;
  class DisplayNameStylesEditScreenTsx1 {
    constructor() {
      pointerEvents = "none";
      if (closure_0) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  const items2 = [tmp6];
  DisplayNameStylesEditScreenTsx1.__closure = items2;
  DisplayNameStylesEditScreenTsx1.__workletHash = 11149120055604;
  DisplayNameStylesEditScreenTsx1.__initData = tmp5;
  const animatedProps = require("../../../../_runtime/metro/01652__.js").useAnimatedProps(
    DisplayNameStylesEditScreenTsx1,
  );
  const obj2 = require("../../../../_runtime/metro/01652__.js");
  const items3 = [closure_19, visible, nativeDefault, stateFromStores, require("spring/spring").withSpring, closure_12];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items3;
  class DisplayNameStylesEditScreenTsx2 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_0) {
        num = 1;
      }
      num2 = 60;
      if (tmp) {
        num2 = 0;
      }
      num3 = 0.9;
      if (tmp) {
        num3 = 1;
      }
      rect = {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        marginHorizontal: closure_1.space.PX_16,
        flexDirection: "column",
        justifyContent: "flex-end",
        transform: null,
        opacity: null,
      };
      tmp2 = closure_2;
      tmp3 = num2;
      if (!closure_2) {
        tmp4 = closure_3;
        tmp5 = closure_4;
        tmp3 = closure_3(num2, closure_4);
      }
      items = [,];
      items[0] = { translateY: tmp3 };
      tmp6 = num3;
      if (!tmp2) {
        tmp7 = closure_3;
        tmp8 = closure_4;
        tmp6 = closure_3(num3, closure_4);
      }
      items[1] = { scale: tmp6 };
      rect.transform = items;
      tmp9 = num;
      if (!tmp2) {
        tmp10 = closure_3;
        tmp11 = closure_4;
        tmp9 = closure_3(num, closure_4);
      }
      rect.opacity = tmp9;
      return rect;
    }
  }
  const items4 = [tmp9, tmp10, tmp11, tmp12, tmp13];
  DisplayNameStylesEditScreenTsx2.__closure = items4;
  DisplayNameStylesEditScreenTsx2.__workletHash = 4978276148126;
  DisplayNameStylesEditScreenTsx2.__initData = tmp8;
  const items5 = [onPress];
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    DisplayNameStylesEditScreenTsx2,
  );
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    _undefined();
  }, items5);
  const obj3 = { style: animatedStyle, children: null };
  const obj4 = { style: { marginBottom: useSafeAreaInsetsDefault().bottom }, animatedProps, children: null };
  const obj5 = { variant: "primary", onPress: callback, size: "lg", text: null, loading: null };
  const intl = tmp(1113).intl;
  obj5.text = intl.string(require("util").t["1Qm822"]);
  obj5.loading = onPress.loading;
  obj4.children = closure_13(require("components/Button/Button").Button, obj5);
  obj3.children = closure_13(_modDef1652.View, obj4);
  return closure_13(_modDef1652.View, obj3);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6, Pressable: metroImportDefault } = get_ActivityIndicator);
const EFFECT_ORDER = fn(1403).EFFECT_ORDER;
const AnalyticEvents = fn(1072).AnalyticEvents;
let closure_12 = fn(1623).MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let items = [fn(1405).DisplayNameEffect.GRADIENT, fn(1405).DisplayNameEffect.GUMMY, fn(1405).DisplayNameEffect.PRISM];
let closure_16 = { overrideSettings: true };
const createStyles = fn(5141);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  contentContainer: null,
  fieldButtonGroup: null,
  fieldButton: null,
  fieldButtonBorder: null,
  fieldButtonLabel: null,
  fieldButtonChevron: null,
  fieldButtonTrailing: null,
  buttonContainer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.fieldButtonGroup = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.md,
};
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md };
obj2.fieldButton = {
  padding: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
let obj6 = {
  padding: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj2.fieldButtonBorder = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let obj7 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.fieldButtonLabel = { flex: 1, marginRight: nativeDefault.space.PX_12 };
let obj8 = { flex: 1, marginRight: nativeDefault.space.PX_12 };
obj2.fieldButtonChevron = { flexDirection: "row", gap: nativeDefault.space.PX_8, flexShrink: 0 };
let obj9 = { flexDirection: "row", gap: nativeDefault.space.PX_8, flexShrink: 0 };
obj2.fieldButtonTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.buttonContainer = {
  marginVertical: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_MUTED,
  gap: nativeDefault.space.PX_16,
};
let closure_17 = createStyles.createStyles(obj2);
let closure_18 = {
  code: "(function DisplayNameStylesEditScreenTsx1(){let[visible]=this.__closure;return{pointerEvents:visible?'box-none':'none'};})",
};
let closure_19 = {
  code: "(function DisplayNameStylesEditScreenTsx2(){let[visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING]=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx");

export default function DisplayNameStylesEditScreen() {
  let tmp = closure_17();
  const tmp2 = navigation;
  let tmp3 = isTryItOut;
  const route = navigation(isTryItOut[12]).useRoute();
  let obj = navigation(isTryItOut[12]);
  navigation = navigation(isTryItOut[12]).useNavigation();
  let params = route.params;
  if (params == null) {
    params = {};
  }
  const guildId = params.guildId;
  isTryItOut = params.isTryItOut;
  let obj3 = { type: null, name: null, properties: null };
  let obj2 = navigation(isTryItOut[12]);
  obj3.type = tmp2(tmp3[14]).ImpressionTypes.POPOUT;
  obj3.name = tmp2(tmp3[14]).ImpressionNames.DISPLAY_NAME_STYLES_MODAL;
  const tmp7 = guildId(tmp3[13]);
  obj3.properties = { entry_point: tmp2(tmp3[15]).DisplayNameStylesEntryPoints.PROFILE_EDITOR };
  tmp7(obj3, { trackOnInitialLoad: true });
  let obj4 = { entry_point: tmp2(tmp3[15]).DisplayNameStylesEntryPoints.PROFILE_EDITOR };
  items = [onSelectEffect];
  const stateFromStores = tmp2(tmp3[16]).useStateFromStores(items, () => onSelectEffect.getCurrentUser());
  let tmp2Result = tmp2(tmp3[16]);
  const displayNameStylesPendingName = tmp2(tmp3[17]).useDisplayNameStylesPendingName(stateFromStores, guildId);
  const tmp2Result11 = tmp2(tmp3[17]);
  const guildMemberOrUserPendingDisplayNameStyles = tmp2(tmp3[18]).useGuildMemberOrUserPendingDisplayNameStyles(
    stateFromStores,
    guildId,
  );
  ({ pendingDisplayNameStyles, guildDisplayNameStyles, tryItOutDisplayNameStyles } =
    guildMemberOrUserPendingDisplayNameStyles);
  let id;
  const tmp2Result12 = tmp2(tmp3[18]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const obj5 = { userId: id, guildId, pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true };
  let tmp14 = pendingDisplayNameStyles;
  if (isTryItOut) {
    tmp14 = tryItOutDisplayNameStyles;
  }
  obj5.pendingDisplayNameStyles = tmp14;
  const tmp12Result = guildId(tmp3[19])(obj5);
  closure_5 = tmp12Result;
  let fontId;
  const tmp12 = guildId(tmp3[19]);
  if (tmp12Result != null) {
    fontId = tmp12Result.fontId;
  }
  if (fontId == null) {
    fontId = tmp2(tmp3[21]).DisplayNameFont.DEFAULT;
  }
  const tmp19 = stateFromStores(displayNameStylesPendingName.useState(fontId), 2);
  const selectedFontId = tmp19[0];
  const onSelectFont = tmp19[1];
  let effectId;
  if (tmp12Result != null) {
    effectId = tmp12Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[9]).DisplayNameEffect.SOLID;
  }
  const tmp18Result = stateFromStores(displayNameStylesPendingName.useState(effectId), 2);
  const first1 = tmp18Result[0];
  onSelectEffect = tmp18Result[1];
  const tmp16 = guildId(tmp3[20])();
  const tmp24 = tmp2(tmp3[22]).getEffectColorCount(first1) > 1;
  closure_10 = tmp24;
  const tmp2Result13 = tmp2(tmp3[22]);
  const displayNameStylesEffectConfig = tmp2(tmp3[23]).useDisplayNameStylesEffectConfig(first1);
  closure_12 = tmp6(tmp3[24])();
  let colors;
  if (tmp12Result != null) {
    colors = tmp12Result.colors;
  }
  if (colors == null) {
    colors = [];
  }
  if (tmp26) {
    let first2 = colors[0];
  } else {
    first2 = displayNameStylesEffectConfig.defaultColors[0];
  }
  const tmp18Result3 = stateFromStores(displayNameStylesPendingName.useState(first2), 2);
  const first3 = tmp18Result3[0];
  const onSelectColor = tmp30;
  const tmp18Result4 = stateFromStores(
    displayNameStylesPendingName.useState(() =>
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
  const first4 = tmp18Result4[0];
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
  tmp26 = colors.length > 0 && !tmp24;
  const tmp2Result14 = tmp2(tmp3[23]);
  const tmp2Result15 = tmp2(tmp3[15]);
  const displayNameStylesHandleApply = tmp2Result15.useDisplayNameStylesHandleApply({
    hasChanges: memo1,
    entryPoint: tmp2(tmp3[15]).DisplayNameStylesEntryPoints.PROFILE_EDITOR,
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
    onEnrollmentError: callback1,
  });
  ({ handleApply, isApplying } = displayNameStylesHandleApply);
  const obj6 = {
    hasChanges: memo1,
    entryPoint: tmp2(tmp3[15]).DisplayNameStylesEntryPoints.PROFILE_EDITOR,
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
    onEnrollmentError: callback1,
  };
  const visibleFontOrder = tmp2(tmp3[28]).useVisibleFontOrder({ includeCampaignFonts: true });
  const tmp2Result16 = tmp2(tmp3[28]);
  const displayNameStylesNewFontsBadge = tmp2(tmp3[29]).useDisplayNameStylesNewFontsBadge(visibleFontOrder);
  const showFontsBadge = displayNameStylesNewFontsBadge.showFontsBadge;
  const dismissFontsBadge = displayNameStylesNewFontsBadge.dismissFontsBadge;
  const tmp2Result17 = tmp2(tmp3[29]);
  const hexagonCampaignNewFontBadge = tmp2(tmp3[30]).useHexagonCampaignNewFontBadge("DisplayNameStylesEditScreen");
  const showCampaignFontBadge = hexagonCampaignNewFontBadge.showCampaignFontBadge;
  const dismissCampaignFontBadge = hexagonCampaignNewFontBadge.dismissCampaignFontBadge;
  const tmp2Result18 = tmp2(tmp3[30]);
  const markHexagonCampaignDisplayNameStylesVisited = tmp2(tmp3[30]).useMarkHexagonCampaignDisplayNameStylesVisited(
    "DisplayNameStylesEditScreen",
  );
  let tmp41 = showFontsBadge;
  if (!showFontsBadge) {
    tmp41 = showCampaignFontBadge;
  }
  const tmp2Result19 = tmp2(tmp3[30]);
  const displayNameStylesNewEffectsBadge = tmp2(tmp3[29]).useDisplayNameStylesNewEffectsBadge(closure_10);
  const showEffectsBadge = displayNameStylesNewEffectsBadge.showEffectsBadge;
  const dismissEffectsBadge = displayNameStylesNewEffectsBadge.dismissEffectsBadge;
  const items3 = [callback, tmp18Result3[1], visibleFontOrder];
  const items4 = [navigation, isTryItOut];
  const callback2 = obj10.useCallback(() => {
    const randomDisplayNameStyles = DisplayNameStylesUtils.generateRandomDisplayNameStyles(
      visibleFontOrder,
      EFFECT_ORDER,
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
  const items6 = [
    selectedFontId,
    displayNameStylesPendingName,
    isTryItOut,
    showFontsBadge,
    dismissFontsBadge,
    showCampaignFontBadge,
    dismissCampaignFontBadge,
  ];
  const callback4 = obj10.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    UserProfileSettingsActionCreators.setPendingChanges({ guildId, displayNameStyles: null });
    navigation.goBack();
  }, items5);
  const items7 = [first1, , ,];
  let id1;
  const callback5 = obj10.useCallback(() => {
    if (showFontsBadge) {
      dismissFontsBadge();
    }
    if (showCampaignFontBadge) {
      dismissCampaignFontBadge();
    }
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(17577, dependencyMap.paths),
      "DisplayNameStylesFontPickerSheet",
      { selectedFontId, onSelectFont, displayName: displayNameStylesPendingName, isTryItOut },
    );
    const obj2 = { selectedFontId, onSelectFont, displayName: displayNameStylesPendingName, isTryItOut };
  }, items6);
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  items7[1] = id1;
  items7[2] = showEffectsBadge;
  items7[3] = dismissEffectsBadge;
  const items8 = [tmp24, memo, first3, first1, callback, tmp18Result3[1]];
  const callback6 = obj10.useCallback(() => {
    if (showEffectsBadge) {
      dismissEffectsBadge();
    }
    let id;
    const obj = ActionSheetActionCreatorsDefault;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    obj.openLazy(asyncRequireImpl(17580, dependencyMap.paths), "DisplayNameStylesEffectPickerSheet", {
      userId: id,
      selectedEffectId: first1,
      onSelectEffect,
    });
    const obj2 = { userId: id, selectedEffectId: first1, onSelectEffect };
    const tmp3 = asyncRequireImpl(17580, dependencyMap.paths);
  }, items7);
  const callback7 = obj10.useCallback(() => {
    if (first1 === DisplayNameEffect.DisplayNameEffect.GUMMY) {
      const obj2 = {
        selectedColors: memo,
        onSelectColors(arg0) {
          return callback(navigation(isTryItOut[9]).DisplayNameEffect.GUMMY, arg0);
        },
      };
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(17581, dependencyMap.paths),
        "DisplayNameStylesGummyColorPickerSheet",
        obj2,
      );
    } else {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const tmp2Result = asyncRequireImpl;
      if (closure_10) {
        const obj4 = {
          selectedColors: memo,
          selectedEffectId: first1,
          onSelectColors(arg0) {
            return callback(first1, arg0);
          },
        };
        openLazy(tmp2Result(17591, dependencyMap.paths), "DisplayNameStylesGradientPickerSheet", obj4);
      } else {
        const obj = { selectedColor: first3, selectedEffectId: first1, onSelectColor };
        openLazy(tmp2Result(17593, dependencyMap.paths), "DisplayNameStylesColorPickerSheet", obj);
      }
    }
  }, items8);
  let intl = tmp2(tmp3[27]).intl;
  const stringResult = intl.string(guildId(tmp3[42])(selectedFontId));
  let tmp52Result5 = null;
  if (null != stateFromStores) {
    const obj7 = { theme: tmp16, children: null };
    const obj8 = { value: first4, children: null };
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
    const obj13 = {
      user: stateFromStores,
      displayName: displayNameStylesPendingName,
      guildId,
      selectedFontId,
      selectedEffectId: first1,
      selectedColors: memo,
      isTryItOut,
    };
    const items9 = [colors(tmp6(tmp3[45]), obj13), ,];
    const obj14 = { style: tmp.fieldButtonGroup, children: null };
    const obj15 = {
      onPress: callback5,
      style: tmp.fieldButton,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const intl2 = tmp2(tmp3[27]).intl;
    const stringResult1 = intl2.string(tmp6(tmp3[46])["0JCuGm"]);
    if (tmp41) {
      const intl3 = tmp2(tmp3[27]).intl;
      const _HermesInternal2 = HermesInternal;
      let combined = "" + stringResult1 + ", " + stringResult + ", " + intl3.string(tmp2(tmp3[27]).t.y2b7CA);
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stringResult1 + ", " + stringResult;
    }
    obj15.accessibilityLabel = combined;
    const obj16 = { children: null };
    const obj17 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl4 = tmp2(tmp3[27]).intl;
    obj17.children = intl4.string(tmp6(tmp3[46])["0JCuGm"]);
    const items10 = [colors(tmp2(tmp3[47]).Text, obj17)];
    const obj18 = { variant: "body-md/normal", color: "text-subtle", children: stringResult };
    items10[1] = colors(tmp2(tmp3[47]).Text, obj18);
    obj16.children = items10;
    const items11 = [first3(closure_5, obj16)];
    if (tmp41) {
      const obj19 = { style: tmp.fieldButtonTrailing, children: null };
      const items12 = [
        tmp52(tmp2(tmp3[48]).NewTag, {}),
        tmp52(tmp2(tmp3[49]).ChevronSmallRightIcon, { color: "icon-muted" }),
      ];
      obj19.children = items12;
      let tmp52Result3 = tmp54(tmp55, obj19);
    } else {
      tmp52Result3 = tmp52(tmp2(tmp3[49]).ChevronSmallRightIcon, { color: "icon-muted" });
    }
    items11[1] = tmp52Result3;
    obj15.children = items11;
    const items13 = [first3(onSelectFont, obj15), ,];
    const obj20 = {
      onPress: callback6,
      style: null,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const items14 = [,];
    ({ fieldButton: arr17[0], fieldButtonBorder: arr17[1] } = tmp);
    obj20.style = items14;
    const intl5 = tmp2(tmp3[27]).intl;
    const stringResult2 = intl5.string(tmp6(tmp3[46]).RVtMxT);
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
    const obj22 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl7 = tmp2(tmp3[27]).intl;
    obj22.children = intl7.string(tmp6(tmp3[46]).RVtMxT);
    const items15 = [colors(tmp2(tmp3[47]).Text, obj22)];
    const obj23 = { variant: "body-md/normal", color: "text-subtle", children: displayNameStylesEffectConfig.name };
    items15[1] = colors(tmp2(tmp3[47]).Text, obj23);
    obj21.children = items15;
    const items16 = [first3(closure_5, obj21)];
    if (showEffectsBadge) {
      const obj24 = { style: tmp.fieldButtonTrailing, children: null };
      const items17 = [
        tmp52(tmp2(tmp3[48]).NewTag, {}),
        tmp52(tmp2(tmp3[49]).ChevronSmallRightIcon, { color: "icon-muted" }),
      ];
      obj24.children = items17;
      let tmp54Result2 = tmp54(tmp55, obj24);
    } else {
      tmp54Result2 = tmp52(tmp2(tmp3[49]).ChevronSmallRightIcon, { color: "icon-muted" });
    }
    items16[1] = tmp54Result2;
    obj20.children = items16;
    items13[1] = first3(onSelectFont, obj20);
    const obj25 = {
      onPress: callback7,
      style: null,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const items18 = [,];
    ({ fieldButton: arr21[0], fieldButtonBorder: arr21[1] } = tmp);
    obj25.style = items18;
    const intl8 = tmp2(tmp3[27]).intl;
    obj25.accessibilityLabel = intl8.string(tmp6(tmp3[46])["6OxgN7"]);
    const obj26 = { style: tmp.fieldButtonLabel, children: null };
    const obj27 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl9 = tmp2(tmp3[27]).intl;
    obj27.children = intl9.string(tmp6(tmp3[46])["6OxgN7"]);
    const items19 = [colors(tmp2(tmp3[47]).Text, obj27)];
    const obj28 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 1, children: null };
    const mapped = memo.map((item) => navigation(isTryItOut[50]).int2hex(item));
    obj28.children = mapped.join(", ");
    items19[1] = colors(tmp2(tmp3[47]).Text, obj28);
    obj26.children = items19;
    const items20 = [first3(closure_5, obj26)];
    const obj29 = { style: tmp.fieldButtonChevron, children: null };
    const obj30 = { colors: memo, effectId: first1 };
    const items21 = [
      colors(tmp6(tmp3[51]), obj30),
      colors(tmp2(tmp3[49]).ChevronSmallRightIcon, { color: "icon-muted" }),
    ];
    obj29.children = items21;
    items20[1] = first3(closure_5, obj29);
    obj25.children = items20;
    items13[2] = first3(onSelectFont, obj25);
    obj14.children = items13;
    items9[1] = first3(closure_5, obj14);
    const obj31 = { style: tmp.buttonContainer, children: null };
    const obj32 = {
      text: null,
      onPress: null,
      variant: "tertiary",
      size: "lg",
      grow: true,
      icon: null,
      iconPosition: "start",
    };
    const intl10 = tmp2(tmp3[27]).intl;
    obj32.text = intl10.string(tmp6(tmp3[46]).NOGFds);
    obj32.onPress = callback2;
    obj32.icon = colors(tmp2(tmp3[53]).DiceIcon, {});
    const items22 = [colors(tmp2(tmp3[52]).Button, obj32), ,];
    let tmp52Result = null == guildId && null != tmp12Result;
    if (tmp52Result) {
      const obj33 = {
        text: null,
        onPress: null,
        variant: "tertiary",
        size: "lg",
        grow: true,
        icon: null,
        iconPosition: "start",
      };
      const intl11 = tmp2(tmp3[27]).intl;
      obj33.text = intl11.string(tmp6(tmp3[46]).ymq8WQ);
      obj33.onPress = callback3;
      obj33.icon = tmp52(tmp2(tmp3[54]).DenyIcon, {});
      tmp52Result = tmp52(tmp2(tmp3[52]).Button, obj33);
    }
    items22[1] = tmp52Result;
    let tmp52Result4 = null != guildId;
    if (tmp52Result4) {
      tmp52Result4 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
      const tmp76 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
    }
    if (tmp52Result4) {
      const obj34 = {
        text: null,
        onPress: null,
        variant: "tertiary",
        size: "lg",
        grow: true,
        icon: null,
        iconPosition: "start",
      };
      const intl12 = tmp2(tmp3[27]).intl;
      obj34.text = intl12.string(tmp6(tmp3[46])["j/KRxc"]);
      obj34.onPress = callback4;
      obj34.icon = tmp52(tmp2(tmp3[54]).DenyIcon, {});
      tmp52Result4 = tmp52(tmp2(tmp3[52]).Button, obj34);
    }
    items22[2] = tmp52Result4;
    obj31.children = items22;
    items9[2] = first3(closure_5, obj31);
    obj12.children = items9;
    const items23 = [first3(selectedFontId, obj12)];
    const obj35 = { onPress: handleApply, visible: memo1, loading: isApplying };
    items23[1] = colors(visibleFontOrder, obj35);
    obj9.children = items23;
    obj8.children = first3(closure_5, obj9);
    obj7.children = colors(tmp2(tmp3[44]).DisplayNameStylesContext.Provider, obj8);
    tmp52Result5 = tmp52(tmp2(tmp3[43]).ThemeContextProvider, obj7);
  }
  return tmp52Result5;
}
