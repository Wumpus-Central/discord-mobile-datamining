// discord_app/modules/group_dm/native/GroupDMNitroUpsellBanner.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../_runtime/metro/00672__.js";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import _modDef8051 from "../../../../_runtime/metro/08051__.js";
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
  let obj = visible(bottom[10]);
  const token = obj.useToken(onListInsetChange(bottom[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj1 = token;
  let num = 0;
  [tmp8, c5] = _slicedToArray(token.useState(0), 2);
  const tmp7 = _slicedToArray(token.useState(0), 2);
  if (visible) {
    num = 0.4;
  }
  sharedValue = visible(bottom[11]).useSharedValue(num);
  let tmp5Result = tmp5(tmp3[11]);
  sharedValue1 = tmp5Result.useSharedValue(PX_16);
  const bound = Math.max(125, tmp8 + PX_40);
  bound1 = Math.max(onListInsetChange(tmp3[6]).space.PX_12, tmp8 - PX_8 + PX_24);
  let items = [bound1, onListInsetChange, visible];
  const effect = obj1.useEffect(() => {
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
  const callback = obj1.useCallback((nativeEvent) => {
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
  const memo = obj1.useMemo(() => {
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
  const effect1 = obj1.useEffect(() => {
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
  tmp5Result = tmp5(tmp3[11]);
  class L {
    constructor() {
      obj = { opacity: closure_6.get(), transform: null };
      obj = { translateY: closure_7.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  L.__closure = { opacity: sharedValue, translateY: sharedValue1 };
  L.__workletHash = 9160619443528;
  L.__initData = __initData;
  const animatedStyle = tmp5Result.useAnimatedStyle(L);
  let obj3 = visible(bottom[11]);
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
  obj = {
    style: null,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  const items3 = [tmp.floatingOverlay, { height: bound + bottom }, animatedStyle1];
  obj.style = items3;
  let str = "none";
  if (visible) {
    str = "box-none";
  }
  obj.pointerEvents = str;
  obj.accessibilityElementsHidden = !visible;
  let str2 = "no-hide-descendants";
  if (visible) {
    str2 = "auto";
  }
  obj.importantForAccessibility = str2;
  obj = { style: null, children: null };
  const items4 = [absoluteFillObject.absoluteFillObject, tmp.floatingContent, { paddingBottom: bottom }, animatedStyle];
  obj.style = items4;
  let tmp19Result = !hideGradient;
  if (!hideGradient) {
    obj1 = {
      style: tmp21.absoluteFill,
      colors: memo,
      locations,
      start: { x: 0.5, y: 0 },
      end: { x: 0.5, y: 1 },
      pointerEvents: "none",
    };
    tmp19Result = closure_9(onListInsetChange(tmp3[14]), obj1);
  }
  const items5 = [tmp19Result, closure_9(sharedValue, { onLayout: callback, children: children.children })];
  obj.children = items5;
  obj.children = closure_10(onListInsetChange(bottom[11]).View, obj);
  return closure_9(onListInsetChange(bottom[11]).View, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const number = fn(11593).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
const PX_16 = nativeDefault.space.PX_16;
const PX_24 = nativeDefault.space.PX_24;
const PX_8 = nativeDefault.space.PX_8;
const locations = [0, 0.225, 1];
let closure_16 = { mass: 0.8, stiffness: 400, damping: 32, overshootClamping: true };
fn(4560);
let createStyles = {
  floatingOverlay: { position: "absolute", left: 0, right: 0, bottom: 0 },
  floatingContent: { justifyContent: "flex-end" },
  floatingBanner: null,
};
createStyles = { backgroundColor: "transparent", paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 };
createStyles.floatingBanner = createStyles;
let closure_17 = createStyles.createStyles(createStyles);
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
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = GroupDMNitroCapExperimentDefault;
  let obj2 = GroupDMNitroUpsellModel;
  const groupDMNitroAudience = obj2.useGroupDMNitroAudience();
  obj = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: null };
  const tmp = closure_17();
  obj.acquisitionStrategy = GroupDMNitroUpsellModel.GroupDMNitroAcquisitionStrategy.MARKETING;
  let obj4 = GroupDMNitroUpsellModel;
  const tmp9 =
    obj4.isGroupDMNitroUpsellAudience(groupDMNitroAudience) &&
    memberCount >= recipientLimit &&
    obj1.useConfig({ location: _location }).enabled;
  if (!floating) {
    if (!tmp9) {
      return null;
    }
  }
  let tmp13 = wrapperStyle;
  const tmp7Result = useGroupDMNitroUpsellActionDefault(obj);
  if (floating) {
    const items1 = [tmp.floatingBanner, wrapperStyle];
    tmp13 = items1;
  }
  obj = { showLeadingIcon: false, wrapperStyle: tmp13, trailing: null, children: null };
  obj1 = { text: null, size: "sm", variant: "experimental_premium-primary", shiny: null, icon: null, onPress: null };
  const intl = util.intl;
  const tmp5Result = GroupDMNitroCapBannerDefault;
  obj1.text = intl.string(GroupDMNitroUpsellModel.getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
  let tmp15 = tmp9;
  if (tmp9) {
    tmp15 = !stateFromStores;
  }
  obj1.shiny = tmp15;
  obj1.icon = _modDef8051;
  obj1.onPress = tmp7Result;
  obj.trailing = React7(components_Button_Button.Button, obj1);
  obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.KCD0Hp);
  const items2 = [React7(Text_Text.Text, obj2)];
  const obj3 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: null };
  const intl3 = util.intl;
  obj4 = { number };
  obj3.children = intl3.formatToPlainString(util.t["8o8Zk5"], obj4);
  items2[1] = React7(Text_Text.Text, obj3);
  obj.children = items2;
  const tmp11Result = closure_1_10(tmp5Result, obj);
  let tmp14Result = tmp11Result;
  if (floating) {
    const obj5 = {
      visible: tmp9,
      hideGradient: hideFloatingGradient,
      onListInsetChange: onFloatingListInsetChange,
      children: tmp11Result,
    };
    tmp14Result = React7(FloatingBanner, obj5);
  }
  return tmp14Result;
}
