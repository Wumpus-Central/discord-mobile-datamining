// discord_app/modules/keyboard/native/PortalKeyboardBottomSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef1652 from "../../../../_runtime/metro/01652__.js";
import useColorThemeBackgroundDefault from "../../client_themes/native/useColorThemeBackground.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import useIsScreenReaderEnabled from "../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import BottomSheetModal from "../../../../_runtime/05507_BottomSheetModal.js";
import useMountEffectDefault from "../../../hooks/useMountEffect.tsx";
import isChannelFocused from "../../panels/isChannelFocused.native.tsx";
import native from "../../../design/components/experimental/native.tsx";
import useCustomKeyboardBottomSheetConfigDefault from "../../action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx";
import useAndroidOrientationSheetResyncDefault from "useAndroidOrientationSheetResync.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import NativeMenuStore from "../../native_menu/native/NativeMenuStore.tsx";

const require = globalThis.__r;
const BottomSheetModalDefault = BottomSheetModal;

require = fn;
function PortalKeyboardBottomSheetHeader(arg0) {
  ({ style, handleCollapse } = arg0);
  const tmp = closure_10();
  items = [tmp.headerContainer, ,];
  let prop;
  if (obj.useIsScreenReaderEnabled()) {
    prop = tmp.headerContainerScreenReaderEnabled;
  }
  obj = useIsScreenReaderEnabled;
  items[1] = prop;
  items[2] = style;
  return metroImportDefault(hasOwnProperty, {
    style: items,
    children: metroImportDefault(native.ActionSheetDragHandle, { onPress: handleCollapse }),
  });
}
function PortalKeyboardBackground(arg0) {
  ({ pointerEvents, style, roundingStyle } = arg0);
  const obj = { pointerEvents, style: null };
  items = [style, closure_10().background, roundingStyle];
  obj.style = items;
  return metroImportDefault(_modDef1652.View, obj);
}
get_ActivityIndicator = fn(17);
({ Platform, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const PlatformUtils = fn(1377);
let closure_9 = PlatformUtils.isIOS();
const createStyles = fn(5243);
let obj3 = {
  container: { position: "absolute", top: 0, left: 0 },
  background: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, overflow: "hidden" },
  headerContainer: null,
  headerContainerScreenReaderEnabled: null,
  roundingView: null,
};
let size = {
  borderTopLeftRadius: nativeDefault.radii.none,
  borderTopRightRadius: nativeDefault.radii.none,
  width: "100%",
  height: fn(7932).ACTION_SHEET_DRAG_HANDLE_HEIGHT,
  marginBottom: -fn(7932).ACTION_SHEET_DRAG_HANDLE_HEIGHT,
};
obj3.headerContainer = size;
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, overflow: "hidden" };
obj3.headerContainerScreenReaderEnabled = { marginBottom: -nativeDefault.space.PX_8 };
obj3.roundingView = { overflow: "hidden", display: "flex" };
let closure_10 = createStyles.createStyles(obj3);
let closure_13 = {
  code: "(function PortalKeyboardBottomSheetTsx1(){let[animatedIndex]=this.__closure;return animatedIndex.get()>0.975;})",
};
let closure_14 = {
  code: "(function PortalKeyboardBottomSheetTsx2(){let[isFullyExpanded]=this.__closure;return isFullyExpanded.get();})",
};
let closure_15 = {
  code: "(function PortalKeyboardBottomSheetTsx3(isFullyExpanded,isFullExpandedPrevious){let[forceMaxHeight,scheduleOnRN,dismissGlobalKeyboard]=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded&&!forceMaxHeight){scheduleOnRN(dismissGlobalKeyboard);}})",
};
let closure_16 = {
  code: "(function PortalKeyboardBottomSheetTsx4(){let[interpolate,animatedIndex,cornerRadiusInputStart,cornerRadiusInputEnd,cornerRadius]=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp')};})",
};
let closure_17 = {
  code: "(function PortalKeyboardBottomSheetTsx5(){let[animatedIndex]=this.__closure;return Math.max(animatedIndex.get(),0)>0;})",
};
let closure_18 = {
  code: "(function PortalKeyboardBottomSheetTsx6(result,previous){let[scheduleOnRN,setAccessibilityViewIsModal]=this.__closure;if(result===previous)return;scheduleOnRN(setAccessibilityViewIsModal,result);})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardBottomSheet.tsx");

export default function PortalKeyboardBottomSheet(isAppsKeyboard) {
  ({ animatedIndex, chatInputRef } = isAppsKeyboard);
  _require = chatInputRef;
  let flag = isAppsKeyboard.isAppsKeyboard;
  ({ animatedPosition, children } = isAppsKeyboard);
  if (flag === undefined) {
    flag = false;
  }
  importDefault = flag;
  const onClose = isAppsKeyboard.onClose;
  dependencyMap = onClose;
  ({ backdropComponent, headerStyle } = isAppsKeyboard);
  _slicedToArray = headerStyle;
  ({ disableHeaderRoundingAnimation, onAnimate } = isAppsKeyboard);
  noop = onAnimate;
  ({ rendersHandle, animationConfigs, transitionState, roundingViewStyle } = isAppsKeyboard);
  if (rendersHandle === undefined) {
    rendersHandle = true;
  }
  ({ width, forceMaxHeight } = isAppsKeyboard);
  if (forceMaxHeight === undefined) {
    forceMaxHeight = false;
  }
  let flag2 = isAppsKeyboard.enablePanDownToClose;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = isAppsKeyboard.renderExpressionFooter;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let isScreenReaderEnabled;
  let derivedValue;
  let animatedStyle;
  let tmp = animatedStyle();
  const ref = noop.useRef(null);
  const tmp5 = useCustomKeyboardBottomSheetConfigDefault({ forceMaxHeight, enablePanDownToClose: flag2 });
  const tmp7 = transitionState === require("native").TransitionStates.YEETED;
  closure_7 = tmp7;
  const bottomSheetImperativeHandle = require("Sheet/BottomSheetHandle").useBottomSheetImperativeHandle(
    isAppsKeyboard.ref,
    ref,
  );
  items = [ref, tmp7];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (closure_7) {
      const current = ref.current;
      if (current != null) {
        current.forceClose();
      }
    }
  }, items);
  useAndroidOrientationSheetResyncDefault({
    animatedIndex,
    bottomSheetRef: ref,
    containerHeight: tmp5.containerHeight,
    forceMaxHeight,
    isYeeted: tmp7,
    snapPoints: tmp5.snapPoints,
  });
  let obj2 = require("Sheet/BottomSheetHandle");
  const obj3 = {
    animatedIndex,
    bottomSheetRef: ref,
    containerHeight: tmp5.containerHeight,
    forceMaxHeight,
    isYeeted: tmp7,
    snapPoints: tmp5.snapPoints,
  };
  let items1 = [ref];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => ref.isOpen());
  if (flag3) {
    flag3 = !tmp7;
  }
  const obj4 = require("initialize");
  isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  let items2 = [chatInputRef, tmp7, onAnimate, onClose, flag];
  const callback = obj.useCallback((arg0, arg1, arg2, arg3, arg4) => {
    if (closure_7) {
      if (-1 !== arg1) {
        if (c2 != null) {
          tmp17();
        }
      }
    }
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = -1 !== arg1;
    }
    if (tmp) {
      if (c4 != null) {
        tmp3(arg0, arg1, arg4);
      }
      if (0 === arg0) {
        if (arg4 !== BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        }
      } else {
        let tmp6 = 1 === arg0 && 0 === arg1;
        if (tmp6) {
          tmp6 = !isChannelFocused.isChannelFocused();
        }
        if (tmp6) {
          tmp6 = c1;
        }
        if (tmp6) {
          const current = _undefined.current;
          if (current != null) {
            current.closeCustomKeyboard();
          }
        }
      }
    }
  }, items2);
  const tmp6Result = require("useIsScreenReaderEnabled");
  let items3 = [closure_13, animatedIndex];
  _require = undefined;
  [tmp14, tmp15] = items3;
  class PortalKeyboardBottomSheetTsx1 {
    constructor() {
      return closure_0.get() > 0.975;
    }
  }
  const items4 = [tmp15];
  PortalKeyboardBottomSheetTsx1.__closure = items4;
  PortalKeyboardBottomSheetTsx1.__workletHash = 856294233955;
  PortalKeyboardBottomSheetTsx1.__initData = tmp14;
  derivedValue = require("../../../../_runtime/metro/01652__.js").useDerivedValue(PortalKeyboardBottomSheetTsx1);
  const tmp6Result7 = require("../../../../_runtime/metro/01652__.js");
  const items5 = [closure_14, derivedValue];
  _require = undefined;
  [tmp17, tmp18] = items5;
  class PortalKeyboardBottomSheetTsx2 {
    constructor() {
      return closure_0.get();
    }
  }
  const items6 = [tmp18];
  PortalKeyboardBottomSheetTsx2.__closure = items6;
  PortalKeyboardBottomSheetTsx2.__workletHash = 6167248889275;
  PortalKeyboardBottomSheetTsx2.__initData = tmp17;
  const items7 = [
    closure_15,
    forceMaxHeight,
    require("../../../../_runtime/metro/01705__.js").scheduleOnRN,
    require("KeyboardManagerUtils").dismissGlobalKeyboard,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp19, tmp20, tmp21, tmp22] = items7;
  class PortalKeyboardBottomSheetTsx3 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = isAppsKeyboard;
        if (!isAppsKeyboard) {
          tmp = closure_0;
        }
        if (!tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          tmp4 = closure_1(closure_2);
        }
      }
      return;
    }
  }
  const items8 = [tmp20, tmp21, tmp22];
  PortalKeyboardBottomSheetTsx3.__closure = items8;
  PortalKeyboardBottomSheetTsx3.__workletHash = 2281542026606;
  PortalKeyboardBottomSheetTsx3.__initData = tmp19;
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    PortalKeyboardBottomSheetTsx2,
    PortalKeyboardBottomSheetTsx3,
  );
  useMountEffectDefault(() => () => {
    if (_undefined3 != null) {
      tmp();
    }
  });
  const items9 = [headerStyle, ref, rendersHandle, derivedValue, isScreenReaderEnabled];
  const callback1 = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.pressBehavior = "collapse";
    return closure_7(_undefined(_undefined3[16]).BottomSheetBackdrop, obj);
  }, []);
  const callback2 = obj.useCallback(() => {
    let tmp = null;
    if (false !== rendersHandle) {
      const obj = {
        style,
        handleCollapse() {
          const current = ref.current;
          if (current != null) {
            current.collapse();
          }
          if (isScreenReaderEnabled) {
            const current2 = ref.current;
            if (current2 != null) {
              current2.forceClose();
            }
          }
        },
        isFullyExpanded: derivedValue,
      };
      tmp = metroImportDefault(PortalKeyboardBottomSheetHeader, obj);
    }
    return tmp;
  }, items9);
  const tmp6Result8 = require("../../../../_runtime/metro/01652__.js");
  const token = require("useToken").useToken(tmp3(575).modules.mobile.MOBILE_KEYBOARD_TOP_BORDER_RADIUS);
  const tmp6Result9 = require("useToken");
  const items10 = [
    closure_16,
    require("../../../../_runtime/metro/01652__.js").interpolate,
    animatedIndex,
    -1,
    0,
    token,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items10;
  class PortalKeyboardBottomSheetTsx4 {
    constructor() {
      obj = { borderTopLeftRadius: null, borderTopRightRadius: null };
      items = [,];
      items[0] = closure_2;
      items[1] = closure_3;
      items1 = [0];
      items1[1] = closure_4;
      obj.borderTopLeftRadius = closure_0(closure_1.get(), items, items1, "clamp");
      items2 = [,];
      items2[0] = closure_2;
      items2[1] = closure_3;
      items3 = [0];
      items3[1] = closure_4;
      obj.borderTopRightRadius = closure_0(closure_1.get(), items2, items3, "clamp");
      return obj;
    }
  }
  const items11 = [tmp29, tmp30, tmp31, tmp32, tmp33];
  PortalKeyboardBottomSheetTsx4.__closure = items11;
  PortalKeyboardBottomSheetTsx4.__workletHash = 10458527292035;
  PortalKeyboardBottomSheetTsx4.__initData = tmp28;
  animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(PortalKeyboardBottomSheetTsx4);
  let tmp35;
  if (!disableHeaderRoundingAnimation) {
    tmp35 = animatedStyle;
  }
  animatedStyle = tmp35;
  const items12 = [tmp35];
  const callback3 = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.roundingStyle = animatedStyle;
    return metroImportDefault(PortalKeyboardBackground, obj);
  }, items12);
  const tmp6Result10 = require("../../../../_runtime/metro/01652__.js");
  ({ left, right } = useSafeAreaInsetsDefault());
  const tmp37 = useSafeAreaInsetsDefault();
  ({ height, width: width2 } = useWindowDimensionsDefault({ ignoreKeyboard: true }));
  const callback4 = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.children = closure_7(_undefined(_undefined3[25]).PortalHost, { name: "expression-footer" });
    return closure_7(_undefined(_undefined3[16]).BottomSheetFooter, obj);
  }, []);
  const tmp38 = useWindowDimensionsDefault({ ignoreKeyboard: true });
  [tmp41, tmp42] = noop.useState(false);
  const tmp40 = _slicedToArray(noop.useState(false), 2);
  const items13 = [closure_17, animatedIndex];
  _require = undefined;
  [tmp43, tmp44] = items13;
  class PortalKeyboardBottomSheetTsx5 {
    constructor() {
      return Math.max(closure_0.get(), 0) > 0;
    }
  }
  const items14 = [tmp44];
  PortalKeyboardBottomSheetTsx5.__closure = items14;
  PortalKeyboardBottomSheetTsx5.__workletHash = 10562013634405;
  PortalKeyboardBottomSheetTsx5.__initData = tmp43;
  const items15 = [closure_18, require("../../../../_runtime/metro/01705__.js").scheduleOnRN, tmp42];
  _require = undefined;
  importDefault = undefined;
  [tmp45, tmp46, tmp47] = items15;
  class PortalKeyboardBottomSheetTsx6 {
    constructor(arg0, arg1) {
      if (isAppsKeyboard !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, isAppsKeyboard);
      }
      return;
    }
  }
  const items16 = [tmp46, tmp47];
  PortalKeyboardBottomSheetTsx6.__closure = items16;
  PortalKeyboardBottomSheetTsx6.__workletHash = 8913266183594;
  PortalKeyboardBottomSheetTsx6.__initData = tmp45;
  const animatedReaction1 = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    PortalKeyboardBottomSheetTsx5,
    PortalKeyboardBottomSheetTsx6,
  );
  let tmp49 = isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp49 = tmp7;
  }
  const tmp6Result11 = require("../../../../_runtime/metro/01652__.js");
  const obj5 = { gradient: useColorThemeBackgroundDefault(), children: null };
  let str;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  const obj6 = { importantForAccessibility: str, style: null, pointerEvents: "box-none", children: null };
  const items17 = [tmp.container, { marginLeft: left, marginRight: right }];
  if (width == null) {
    const _Number = Number;
    width = Number.MAX_SAFE_INTEGER;
  }
  const size = { width: Math.min(width, width2 - left - right), height };
  items17[2] = size;
  obj6.style = items17;
  const obj7 = {
    ref,
    animatedIndex,
    animatedPosition,
    animationConfigs,
    onClose,
    onAnimate: callback,
    enableContentPanningGesture: !tmp49,
    enableHandlePanningGesture: !tmp49,
    handleComponent: callback2,
    renderFooter: null,
    backgroundComponent: null,
    backgroundStyle: null,
    backdropComponent: null,
    activeOffsetY: null,
    handleHeight: null,
  };
  const tmp50 = useColorThemeBackgroundDefault();
  const tmp52 = isScreenReaderEnabled;
  const tmp3Result = BottomSheetModalDefault;
  let tmp54;
  if (tmp6Result12.isAndroid()) {
    if (flag3) {
      tmp54 = callback4;
    }
  }
  obj7.renderFooter = tmp54;
  obj7.backgroundComponent = callback3;
  obj7.backgroundStyle = tmp.background;
  if (backdropComponent == null) {
    backdropComponent = callback1;
  }
  obj7.backdropComponent = backdropComponent;
  obj7.activeOffsetY = [-10, 10];
  let num = 0;
  if (rendersHandle) {
    num = tmp6(7932).ACTION_SHEET_DRAG_HANDLE_HEIGHT;
  }
  obj7.handleHeight = num;
  let merged = Object.assign(tmp5);
  const items18 = [tmp.roundingView, ,];
  let tmp56 = !disableHeaderRoundingAnimation;
  if (!disableHeaderRoundingAnimation) {
    tmp56 = animatedStyle;
  }
  items18[1] = tmp56;
  items18[2] = roundingViewStyle;
  obj7.children = closure_7(require("AccessibilityView").AccessibilityViewAnimated, {
    nativeID: "portal-keyboard-sheet",
    style: items18,
    onAccessibilityEscape: function handleClose() {
      const current = ref.current;
      if (current != null) {
        current.collapse();
      }
    },
    accessibilityViewIsModal: tmp41,
    children,
  });
  const items19 = [closure_7(tmp3Result, obj7), ,];
  let tmp51Result = derivedValue;
  if (derivedValue) {
    tmp51Result = flag3;
  }
  if (tmp51Result) {
    const obj9 = { animatedSheetIndex: animatedIndex };
    tmp51Result = tmp51(tmp3(11185), obj9);
  }
  items19[1] = tmp51Result;
  items19[2] = closure_7(require("NavScrim").NavScrim, {});
  obj6.children = items19;
  obj5.children = tmp52(_modDef1652.View, obj6);
  return closure_7(require("native").ThemeContextProvider, obj5);
}
