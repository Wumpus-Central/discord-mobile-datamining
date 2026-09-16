// discord_app/modules/group_dm/native/GroupDMNitroUpsellBanner.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../_runtime/metro/00672__.js";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import _modDef8168 from "../../../../_runtime/metro/08168__.js";
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel.tsx";
import GroupDMNitroCapExperimentDefault from "../GroupDMNitroCapExperiment.tsx";
import useGroupDMNitroUpsellActionDefault from "useGroupDMNitroUpsellAction.tsx";
import GroupDMNitroCapBannerDefault from "GroupDMNitroCapBanner.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
function FloatingBanner(children) {
  const visible = children.visible;
  ({ hideGradient, onListInsetChange } = children);
  let bottom;
  absoluteFillObject = undefined;
  let sharedValue;
  let sharedValue1;
  let bound1;
  let tmp = closure_17();
  bottom = onListInsetChange(bottom[8])().bottom;
  const tmp4 = onListInsetChange(bottom[9])();
  _slicedToArray = tmp4;
  const token = visible(bottom[10]).useToken(onListInsetChange(bottom[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let num = 0;
  let obj = visible(bottom[10]);
  [tmp8, c5] = token.useState(0);
  const tmp7 = _slicedToArray(token.useState(0), 2);
  if (visible) {
    num = 0.4;
  }
  sharedValue = visible(bottom[11]).useSharedValue(num);
  let obj3 = visible(bottom[11]);
  sharedValue1 = visible(bottom[11]).useSharedValue(PX_16);
  const bound = Math.max(125, tmp8 + PX_40);
  bound1 = Math.max(onListInsetChange(tmp3[6]).space.PX_12, tmp8 - PX_8 + PX_24);
  let items = [bound1, onListInsetChange, visible];
  const effect = obj2.useEffect(() => {
    if (onListInsetChange != null) {
      if (visible) {
        let PX_12 = bound1;
      } else {
        PX_12 = nativeDefault.space.PX_12;
      }
      tmp(PX_12);
    }
  }, items);
  const items1 = [token];
  const callback = obj2.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    _undefined((arg0) => {
      let tmp = height;
      if (arg0 === height) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const items2 = [visible, sharedValue, sharedValue1];
  const memo = obj2.useMemo(() => {
    const obj = _modDef672(token);
    const items = [_modDef672(token).alpha(0).hex(), ,];
    const alphaResult = _modDef672(token).alpha(0);
    const obj3 = _modDef672(token);
    items[1] = _modDef672(token).alpha(1).hex();
    const alphaResult1 = _modDef672(token).alpha(1);
    const obj5 = _modDef672(token);
    items[2] = _modDef672(token).alpha(1).hex();
    return items;
  }, items1);
  const effect1 = obj2.useEffect(() => {
    if (visible) {
      const result = sharedValue.set(0.4);
      const result1 = sharedValue1.set(PX_16);
    }
    let num2 = 0;
    if (visible) {
      num2 = 1;
    }
    const result2 = sharedValue.set(spring.withSpring(num2, closure_16));
    let num3 = 0;
    if (!visible) {
      num3 = PX_16;
    }
    const result3 = sharedValue1.set(spring.withSpring(num3, closure_16));
    const tmp8Result = spring;
  }, items2);
  const tmp5Result = visible(bottom[11]);
  class L {
    constructor() {
      obj = { opacity: closure_6.get(), transform: null };
      obj1 = { translateY: closure_7.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  L.__closure = { opacity: sharedValue, translateY: sharedValue1 };
  L.__workletHash = 9160619443528;
  L.__initData = __initData;
  const animatedStyle = visible(bottom[11]).useAnimatedStyle(L);
  const tmp5Result3 = visible(bottom[11]);
  class U {
    constructor() {
      obj = { bottom: Math.max(closure_3.get() - bottom, 0) };
      return obj;
    }
  }
  U.__closure = { keyboardHeight: tmp4, safeAreaBottom: bottom };
  U.__workletHash = 9321236677185;
  U.__initData = __initData2;
  const animatedStyle1 = visible(bottom[11]).useAnimatedStyle(U);
  const obj4 = {
    style: null,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  const items3 = [tmp.floatingOverlay, { height: bound + bottom }, animatedStyle1];
  obj4.style = items3;
  let str = "none";
  if (visible) {
    str = "box-none";
  }
  obj4.pointerEvents = str;
  obj4.accessibilityElementsHidden = !visible;
  let str2 = "no-hide-descendants";
  if (visible) {
    str2 = "auto";
  }
  obj4.importantForAccessibility = str2;
  let obj5 = { style: null, children: null };
  const items4 = [absoluteFillObject.absoluteFillObject, tmp.floatingContent, { paddingBottom: bottom }, animatedStyle];
  obj5.style = items4;
  let tmp19Result = !hideGradient;
  if (!hideGradient) {
    const obj6 = {
      style: tmp21.absoluteFill,
      colors: memo,
      locations,
      start: { x: 0.5, y: 0 },
      end: { x: 0.5, y: 1 },
      pointerEvents: "none",
    };
    tmp19Result = closure_9(onListInsetChange(tmp3[14]), obj6);
  }
  const items5 = [tmp19Result, closure_9(sharedValue, { onLayout: callback, children: children.children })];
  obj5.children = items5;
  obj4.children = closure_10(onListInsetChange(bottom[11]).View, obj5);
  return closure_9(onListInsetChange(bottom[11]).View, obj4);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const number = fn(11735).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
const PX_16 = nativeDefault.space.PX_16;
const PX_24 = nativeDefault.space.PX_24;
const PX_8 = nativeDefault.space.PX_8;
const locations = [0, 0.225, 1];
let closure_16 = { mass: 0.8, stiffness: 400, damping: 32, overshootClamping: true };
const createStyles = fn(4638);
let obj2 = {
  floatingOverlay: { position: "absolute", left: 0, right: 0, bottom: 0 },
  floatingContent: { justifyContent: "flex-end" },
  floatingBanner: { backgroundColor: "transparent", paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 },
};
let closure_17 = createStyles.createStyles(obj2);
const __initData = {
  code: "function GroupDMNitroUpsellBannerTsx1(){const{opacity,translateY}=this.__closure;return{opacity:opacity.get(),transform:[{translateY:translateY.get()}]};}",
};
const __initData2 = {
  code: "function GroupDMNitroUpsellBannerTsx2(){const{keyboardHeight,safeAreaBottom}=this.__closure;return{bottom:Math.max(keyboardHeight.get()-safeAreaBottom,0)};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroUpsellBanner.tsx");

export default function GroupDMNitroUpsellBanner(wrapperStyle) {
  ({ location: _location, floating } = wrapperStyle);
  ({ memberCount, recipientLimit } = wrapperStyle);
  if (floating === undefined) {
    floating = false;
  }
  wrapperStyle = wrapperStyle.wrapperStyle;
  ({ hideFloatingGradient, onFloatingListInsetChange } = wrapperStyle);
  const tmp = closure_17();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = GroupDMNitroCapExperimentDefault;
  const groupDMNitroAudience = GroupDMNitroUpsellModel.useGroupDMNitroAudience();
  const obj4 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: null };
  obj4.acquisitionStrategy = GroupDMNitroUpsellModel.GroupDMNitroAcquisitionStrategy.MARKETING;
  const tmp7Result = useGroupDMNitroUpsellActionDefault(obj4);
  const tmp9 =
    GroupDMNitroUpsellModel.isGroupDMNitroUpsellAudience(groupDMNitroAudience) &&
    memberCount >= recipientLimit &&
    obj2.useConfig({ location: _location }).enabled;
  if (!floating) {
    if (!tmp9) {
      return null;
    }
  }
  let tmp13 = wrapperStyle;
  if (floating) {
    const items1 = [tmp.floatingBanner, wrapperStyle];
    tmp13 = items1;
  }
  const obj6 = { showLeadingIcon: false, wrapperStyle: tmp13, trailing: null, children: null };
  const obj7 = {
    text: null,
    size: "sm",
    variant: "experimental_premium-primary",
    shiny: null,
    icon: null,
    onPress: null,
  };
  const intl = util.intl;
  const tmp5Result = GroupDMNitroCapBannerDefault;
  obj7.text = intl.string(GroupDMNitroUpsellModel.getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
  let tmp15 = tmp9;
  if (tmp9) {
    tmp15 = !stateFromStores;
  }
  obj7.shiny = tmp15;
  obj7.icon = _modDef8168;
  obj7.onPress = tmp7Result;
  obj6.trailing = React7(components_Button_Button.Button, obj7);
  const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj8.children = intl2.string(util.t.KCD0Hp);
  const items2 = [React7(Text_Text.Text, obj8)];
  const obj9 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: null };
  const intl3 = util.intl;
  obj9.children = intl3.formatToPlainString(util.t["8o8Zk5"], { number });
  items2[1] = React7(Text_Text.Text, obj9);
  obj6.children = items2;
  const tmp11Result = closure_1_10(tmp5Result, obj6);
  let tmp14Result = tmp11Result;
  if (floating) {
    const obj11 = {
      visible: tmp9,
      hideGradient: hideFloatingGradient,
      onListInsetChange: onFloatingListInsetChange,
      children: tmp11Result,
    };
    tmp14Result = React7(FloatingBanner, obj11);
  }
  return tmp14Result;
}
