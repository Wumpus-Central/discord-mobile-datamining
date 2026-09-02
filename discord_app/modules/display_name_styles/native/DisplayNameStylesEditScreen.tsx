// === Module 15159: ApplyButton ===

// Module 15159 (ApplyButton)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import closure_9 from "mergeGuildAvatar" /* 1921 */;
import { AnalyticEvents } from "ME" /* 673 */;
import { MEDIA_PICKER_SEND_BUTTON_SPRING as closure_11 } from "DRAG_HANDLE" /* 1622 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function ApplyButton(onPress) {
  onPress = onPress.onPress;
  const visible = onPress.visible;
  let stateFromStores;
  let obj = onPress(stateFromStores[12]);
  items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj1 = onPress(stateFromStores[53]);
  const fn = function o() {
    let pointerEvents = "none";
    if (visible) {
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  fn.__closure = { visible };
  fn.__workletHash = 2349569076845;
  fn.__initData = closure_16;
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
    const obj = { position: "absolute", bottom: 0, left: 0, right: 0, marginHorizontal: visible(stateFromStores[10]).space.PX_16, flexDirection: "column", justifyContent: "flex-end", transform: null, opacity: null };
    let withSpringResult = num2;
    if (!stateFromStores) {
      withSpringResult = onPress(tmp2[54]).withSpring(num2, closure_1_11);
      const obj2 = onPress(tmp2[54]);
    }
    items = [{ translateY: withSpringResult }, ];
    let withSpringResult1 = num3;
    if (!stateFromStores) {
      withSpringResult1 = onPress(tmp2[54]).withSpring(num3, closure_1_11);
      const obj3 = onPress(tmp2[54]);
    }
    items[1] = { scale: withSpringResult1 };
    obj[7] = items;
    let withSpringResult2 = num;
    if (!stateFromStores) {
      withSpringResult2 = onPress(tmp2[54]).withSpring(num, closure_1_11);
      const obj4 = onPress(tmp2[54]);
    }
    obj[8] = withSpringResult2;
    return obj;
  };
  obj = { visible, tokens: visible(stateFromStores[10]), reducedMotion: stateFromStores, withSpring: onPress(stateFromStores[54]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: closure_11 };
  fn2.__closure = obj;
  fn2.__workletHash = 16786362025671;
  fn2.__initData = closure_17;
  const items1 = [onPress];
  const animatedStyle = obj2.useAnimatedStyle(fn2);
  const callback = React.useCallback(() => {
    const result = onPress(stateFromStores[28]).triggerHapticFeedback(onPress(stateFromStores[28]).HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items1);
  obj = { style: animatedStyle, children: null };
  obj1 = { style: { marginBottom: visible(stateFromStores[52])().bottom }, animatedProps, children: null };
  obj2 = { variant: "primary", onPress: callback, size: "lg", text: null };
  const intl = onPress(stateFromStores[38]).intl;
  obj2[3] = intl.string(onPress(stateFromStores[38]).t["1Qm822"]);
  obj1[2] = callback(onPress(stateFromStores[49]).Button, obj2);
  obj[1] = callback(visible(stateFromStores[53]).View, obj1);
  return callback(visible(stateFromStores[53]).View, obj);
}
({ View: c5, ScrollView: closure_6, Pressable: error } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let items = [require("DisplayNameEffect").DisplayNameEffect.GRADIENT, require("DisplayNameEffect").DisplayNameEffect.GUMMY, require("DisplayNameEffect").DisplayNameEffect.PRISM];
createCacheKey = { container: null, contentContainer: null, fieldButtonGroup: null, fieldButton: null, fieldButtonBorder: null, fieldButtonLabel: null, fieldButtonChevron: null, fieldButtonTrailing: null, buttonContainer: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16 };
let obj1 = { padding: ThemesDefault.space.PX_16 };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: ThemesDefault.radii.md };
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: ThemesDefault.radii.md };
createCacheKey[3] = { padding: ThemesDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj3 = { padding: ThemesDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey[4] = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj4 = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[5] = { flex: 1, marginRight: ThemesDefault.space.PX_12 };
let obj5 = { flex: 1, marginRight: ThemesDefault.space.PX_12 };
createCacheKey[6] = { flexDirection: "row", gap: ThemesDefault.space.PX_8, flexShrink: 0 };
let obj6 = { flexDirection: "row", gap: ThemesDefault.space.PX_8, flexShrink: 0 };
createCacheKey[7] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
let obj7 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[8] = { marginVertical: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_MUTED, gap: ThemesDefault.space.PX_16 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let closure_16 = { code: "function DisplayNameStylesEditScreenTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}" };
let closure_17 = { code: "function DisplayNameStylesEditScreenTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
let obj8 = { marginVertical: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_MUTED, gap: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx");

export default function DisplayNameStylesEditScreen() {
  let tmp = callback2();
  const tmp3 = isTryItOut;
  let obj = navigation(isTryItOut[11]);
  const route = obj.useRoute();
  obj1 = navigation(isTryItOut[11]);
  navigation = obj1.useNavigation();
  let params = route.params;
  if (params == null) {
    params = {};
  }
  const guildId = params.guildId;
  isTryItOut = params.isTryItOut;
  let tmp2Result = tmp2(tmp3[12]);
  items = [closure_9];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => currentUser.getCurrentUser());
  tmp2Result = tmp2(tmp3[13]);
  const displayNameStylesPendingName = tmp2Result.useDisplayNameStylesPendingName(stateFromStores, guildId);
  const guildMemberOrUserPendingDisplayNameStyles = navigation(tmp3[14]).useGuildMemberOrUserPendingDisplayNameStyles(stateFromStores, guildId);
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
  obj[2] = tmp12;
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
  const first = tmp17[0];
  closure_7 = tmp17[1];
  let effectId;
  if (tmp10Result != null) {
    effectId = tmp10Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[8]).DisplayNameEffect.SOLID;
  }
  let tmp16Result = tmp16(obj7.useState(effectId), 2);
  const first1 = tmp16Result[0];
  closure_9 = tmp16Result[1];
  let tmp14 = guildId(tmp3[16])();
  const tmp22 = navigation(tmp3[18]).getEffectColorCount(first1) > 1;
  closure_10 = tmp22;
  const tmp2Result2 = navigation(tmp3[18]);
  const isDisplayNameStylesFlywheelSettersEnabled = navigation(tmp3[19]).useIsDisplayNameStylesFlywheelSettersEnabled("DisplayNameStylesEditScreen");
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
    callback2 = tmp16Result[1];
    const tmp16Result1 = tmp16(obj7.useState(() => Object.fromEntries(first3.map((arg0) => {
      items = [arg0, ];
      let tmp = length;
      if (length.length <= 0) {
        tmp = table[arg0];
      }
      items[1] = tmp;
      return items;
    }))), 2);
    const first4 = tmp16Result1[0];
    closure_17 = tmp16Result1[1];
    const callback = obj7.useCallback((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      callback3((arg0) => {
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
    const items2 = [tmp10Result, first, first1, memo];
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
        const tmp5 = first1;
      }
      if (!tmp4) {
        colors = undefined;
        if (tmp2 != null) {
          colors = tmp2.colors;
        }
        if (colors == null) {
          colors = [];
        }
        tmp4 = !navigation(isTryItOut[22]).areArraysShallowEqual(memo, colors);
        const obj = navigation(isTryItOut[22]);
        const tmp9 = memo;
      }
      return tmp4;
    }, items2);
    obj = { hasChanges: null, selectedFontId: null, selectedEffectId: null, selectedColors: null, defaultColor: null, guildId: null, isTryItOut: null, onClose: null };
    obj[0] = memo1;
    obj[1] = first;
    obj[2] = first1;
    obj[3] = memo;
    obj[4] = displayNameStylesEffectConfig.defaultColors[0];
    obj[5] = guildId;
    obj[6] = isTryItOut;
    obj[7] = function onClose() {
      return navigation.goBack();
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
      const randomDisplayNameStyles = navigation(isTryItOut[18]).generateRandomDisplayNameStyles(visibleFontOrder, visibleEffectOrder);
      ({ effectId, colors } = randomDisplayNameStyles);
      callback(randomDisplayNameStyles.fontId);
      currentUser(effectId);
      const obj = navigation(isTryItOut[18]);
      const tmp = isTryItOut;
      if (obj2.getEffectColorCount(effectId) > 1) {
        callback(effectId, colors);
      } else {
        callback2(colors[0]);
      }
      obj2 = navigation(isTryItOut[18]);
      guildId(tmp[27]).track(constants.DISPLAY_NAME_STYLES_SURPRISE_ME);
    }, items3);
    const items5 = [guildId, navigation];
    callback2 = obj7.useCallback(() => {
      const result = navigation(isTryItOut[28]).triggerHapticFeedback(navigation(isTryItOut[28]).HapticFeedbackTypes.IMPACT_MEDIUM);
      if (isTryItOut) {
        let tmpResult = tmp(tmp2[29]);
        const result1 = tmpResult.setTryItOutDisplayNameStyles(null);
      } else {
        tmpResult = tmp(tmp2[30]);
        tmpResult.setPendingChanges({ displayNameStyles: null });
      }
      const obj = navigation(isTryItOut[28]);
      guildId(isTryItOut[27]).track(constants.DISPLAY_NAME_STYLES_REMOVED);
      navigation.goBack();
    }, items4);
    const items6 = [first, displayNameStylesPendingName, showFontsBadge, dismissFontsBadge];
    const callback3 = obj7.useCallback(() => {
      let obj = navigation(isTryItOut[28]);
      const result = obj.triggerHapticFeedback(navigation(isTryItOut[28]).HapticFeedbackTypes.IMPACT_MEDIUM);
      obj = { guildId, displayNameStyles: null };
      navigation(isTryItOut[30]).setPendingChanges(obj);
      navigation.goBack();
    }, items5);
    const items7 = [first1, , , ];
    let id1;
    const callback4 = obj7.useCallback(() => {
      if (showFontsBadge) {
        dismissFontsBadge();
      }
      let obj = guildId(isTryItOut[31]);
      obj = { selectedFontId: first, onSelectFont: closure_7, displayName: displayNameStylesPendingName };
      obj.openLazy(navigation(isTryItOut[33])(isTryItOut[32], isTryItOut.paths), "DisplayNameStylesFontPickerSheet", obj);
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
      let obj = guildId(isTryItOut[31]);
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj = { userId: id, selectedEffectId: first1, onSelectEffect: closure_9 };
      obj.openLazy(navigation(isTryItOut[33])(isTryItOut[34], isTryItOut.paths), "DisplayNameStylesEffectPickerSheet", obj);
    }, items7);
    const callback6 = obj7.useCallback(() => {
      if (first1 === navigation(isTryItOut[8]).DisplayNameEffect.GUMMY) {
        let obj = { selectedColors: null, onSelectColors: null };
        obj[0] = memo;
        obj[1] = function onSelectColors(arg0) {
          return callback(closure_1_0(closure_1_2[8]).DisplayNameEffect.GUMMY, arg0);
        };
        guildId(tmp3[31]).openLazy(tmp2(tmp3[33])(tmp3[35], tmp3.paths), "DisplayNameStylesGummyColorPickerSheet", obj);
        const obj3 = guildId(tmp3[31]);
      } else {
        const openLazy = guildId(tmp3[31]).openLazy;
        const tmp2Result = tmp2(tmp3[33]);
        if (closure_10) {
          obj = { selectedColors: null, selectedEffectId: null, onSelectColors: null };
          obj[0] = memo;
          obj[1] = tmp;
          obj[2] = function onSelectColors(arg0) {
            return callback(closure_8, arg0);
          };
          openLazy(tmp2Result(tmp3[36], tmp3.paths), "DisplayNameStylesGradientPickerSheet", obj);
        } else {
          obj = { selectedColor: null, selectedEffectId: null, onSelectColor: null };
          obj[0] = first3;
          obj[1] = tmp;
          obj[2] = closure_15;
          openLazy(tmp2Result(tmp3[37], tmp3.paths), "DisplayNameStylesColorPickerSheet", obj);
        }
        const tmp14 = guildId(tmp3[31]);
      }
    }, items8);
    const intl = tmp2(tmp3[38]).intl;
    const stringResult = intl.string(tmp9(tmp3[39])(first));
    let tmp47Result2 = null;
    if (null != stateFromStores) {
      obj1 = { theme: null, children: null };
      obj1[0] = tmp14;
      let obj2 = { value: null, children: null };
      obj2[0] = { overrideSettings: true };
      let obj3 = { style: null, children: null };
      obj3[0] = tmp.container;
      const obj4 = {};
      let merged = Object.assign(tmp.contentContainer);
      let num = 0;
      if (memo1) {
        num = 70;
      }
      const obj5 = { contentContainerStyle: null, children: null };
      obj4.paddingBottom = num;
      obj5[0] = obj4;
      const obj6 = { user: null, displayName: null, guildId: null, selectedFontId: null, selectedEffectId: null, selectedColors: null };
      obj6[0] = stateFromStores;
      obj6[1] = displayNameStylesPendingName;
      obj6[2] = guildId;
      obj6[3] = first;
      obj6[4] = first1;
      obj6[5] = memo;
      const items9 = [closure_12(tmp9(tmp3[42]), obj6), , ];
      obj7 = { style: null, children: null };
      obj7[0] = tmp.fieldButtonGroup;
      const obj8 = { onPress: null, style: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj8[0] = callback4;
      obj8[1] = tmp.fieldButton;
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
      obj8[3] = combined;
      const obj9 = { children: null };
      const obj10 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl4 = tmp2(tmp3[38]).intl;
      obj10[2] = intl4.string(tmp9(tmp3[43])["0JCuGm"]);
      const items10 = [closure_12(tmp2(tmp3[44]).Text, obj10), ];
      const obj11 = { variant: "text-md/normal", color: "text-subtle", children: null };
      obj11[2] = stringResult;
      items10[1] = closure_12(tmp2(tmp3[44]).Text, obj11);
      obj9[0] = items10;
      const items11 = [colors(closure_5, obj9), ];
      if (showFontsBadge) {
        const obj12 = { style: null, children: null };
        obj12[0] = tmp.fieldButtonTrailing;
        const items12 = [tmp47(tmp2(tmp3[45]).NewTag, {}), tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" })];
        obj12[1] = items12;
        let tmp47Result = tmp48(tmp49, obj12);
      } else {
        tmp47Result = tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" });
      }
      items11[1] = tmp47Result;
      obj8[4] = items11;
      const items13 = [colors(closure_7, obj8), , ];
      const obj13 = { onPress: null, style: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj13[0] = callback5;
      const items14 = [, ];
      ({ fieldButton: arr17[0], fieldButtonBorder: arr17[1] } = tmp);
      obj13[1] = items14;
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
      obj13[3] = combined1;
      const obj14 = { children: null };
      const obj15 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl7 = tmp2(tmp3[38]).intl;
      obj15[2] = intl7.string(tmp9(tmp3[43]).RVtMxT);
      const items15 = [closure_12(tmp2(tmp3[44]).Text, obj15), ];
      const obj16 = { variant: "text-md/normal", color: "text-subtle", children: null };
      obj16[2] = displayNameStylesEffectConfig.name;
      items15[1] = closure_12(tmp2(tmp3[44]).Text, obj16);
      obj14[0] = items15;
      const items16 = [colors(closure_5, obj14), ];
      if (showEffectsBadge) {
        const obj17 = { style: null, children: null };
        obj17[0] = tmp.fieldButtonTrailing;
        const items17 = [tmp47(tmp2(tmp3[45]).NewTag, {}), tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" })];
        obj17[1] = items17;
        let tmp48Result = tmp48(tmp49, obj17);
      } else {
        tmp48Result = tmp47(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" });
      }
      items16[1] = tmp48Result;
      obj13[4] = items16;
      items13[1] = colors(closure_7, obj13);
      const obj18 = { onPress: null, style: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj18[0] = callback6;
      const items18 = [, ];
      ({ fieldButton: arr21[0], fieldButtonBorder: arr21[1] } = tmp);
      obj18[1] = items18;
      const intl8 = tmp2(tmp3[38]).intl;
      obj18[3] = intl8.string(tmp9(tmp3[43])["6OxgN7"]);
      const obj19 = { style: null, children: null };
      obj19[0] = tmp.fieldButtonLabel;
      const obj20 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl9 = tmp2(tmp3[38]).intl;
      obj20[2] = intl9.string(tmp9(tmp3[43])["6OxgN7"]);
      const items19 = [closure_12(tmp2(tmp3[44]).Text, obj20), ];
      let str13 = "text-md/normal";
      if (isDisplayNameStylesFlywheelSettersEnabled) {
        str13 = "text-sm/normal";
      }
      const obj21 = { variant: null, color: "text-subtle", lineClamp: 1, children: null };
      obj21[0] = str13;
      const mapped = memo.map((color) => navigation(isTryItOut[47]).int2hex(color));
      obj21[3] = mapped.join(", ");
      items19[1] = closure_12(tmp2(tmp3[44]).Text, obj21);
      obj19[1] = items19;
      const items20 = [colors(closure_5, obj19), ];
      const obj22 = { style: null, children: null };
      obj22[0] = tmp.fieldButtonChevron;
      const obj23 = { colors: null, effectId: null };
      obj23[0] = memo;
      obj23[1] = first1;
      const items21 = [closure_12(tmp9(tmp3[48]), obj23), closure_12(tmp2(tmp3[46]).ChevronSmallRightIcon, { color: "icon-muted" })];
      obj22[1] = items21;
      items20[1] = colors(closure_5, obj22);
      obj18[4] = items20;
      items13[2] = colors(closure_7, obj18);
      obj7[1] = items13;
      items9[1] = colors(closure_5, obj7);
      const obj24 = { style: null, children: null };
      obj24[0] = tmp.buttonContainer;
      const obj25 = { text: null, onPress: null, variant: "tertiary", size: "lg", grow: true, icon: null, iconPosition: "start" };
      const intl10 = tmp2(tmp3[38]).intl;
      obj25[0] = intl10.string(tmp9(tmp3[43]).NOGFds);
      obj25[1] = callback1;
      obj25[5] = closure_12(tmp2(tmp3[50]).DiceIcon, {});
      const items22 = [closure_12(tmp2(tmp3[49]).Button, obj25), , ];
      tmp47Result = null == guildId && null != tmp10Result;
      if (tmp47Result) {
        const obj26 = { text: null, onPress: null, variant: "tertiary", size: "lg", grow: true, icon: null, iconPosition: "start" };
        const intl11 = tmp2(tmp3[38]).intl;
        obj26[0] = intl11.string(tmp9(tmp3[43]).ymq8WQ);
        obj26[1] = callback2;
        obj26[5] = tmp47(tmp2(tmp3[51]).DenyIcon, {});
        tmp47Result = tmp47(tmp2(tmp3[49]).Button, obj26);
      }
      items22[1] = tmp47Result;
      let tmp47Result1 = null != guildId;
      if (tmp47Result1) {
        tmp47Result1 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
        const tmp70 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
      }
      if (tmp47Result1) {
        const obj27 = { text: null, onPress: null, variant: "tertiary", size: "lg", grow: true, icon: null, iconPosition: "start" };
        const intl12 = tmp2(tmp3[38]).intl;
        obj27[0] = intl12.string(tmp9(tmp3[43])["j/KRxc"]);
        obj27[1] = callback3;
        obj27[5] = tmp47(tmp2(tmp3[51]).DenyIcon, {});
        tmp47Result1 = tmp47(tmp2(tmp3[49]).Button, obj27);
      }
      items22[2] = tmp47Result1;
      obj24[1] = items22;
      items9[2] = colors(closure_5, obj24);
      obj5[1] = items9;
      const items23 = [colors(first, obj5), ];
      const obj28 = { onPress: null, visible: null };
      obj28[0] = displayNameStylesHandleApply;
      obj28[1] = memo1;
      items23[1] = closure_12(callback, obj28);
      obj3[1] = items23;
      obj2[1] = colors(closure_5, obj3);
      obj1[1] = closure_12(tmp2(tmp3[41]).DisplayNameStylesContext.Provider, obj2);
      tmp47Result2 = tmp47(tmp2(tmp3[40]).ThemeContextProvider, obj1);
      const tmp50 = first;
    }
    return tmp47Result2;
  }
  first2 = displayNameStylesEffectConfig.defaultColors[0];
};