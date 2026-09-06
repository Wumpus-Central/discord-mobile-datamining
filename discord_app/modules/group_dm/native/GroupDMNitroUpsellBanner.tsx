// discord_app/modules/group_dm/native/GroupDMNitroUpsellBanner.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import registerAssetDefault from "../../../../_runtime/08051_registerAsset.js";
import GroupDMNitroAcquisitionStrategy from "GroupDMNitroUpsellModel.tsx";
import getGroupDMNitroCapConfigDefault from "../GroupDMNitroCapExperiment.tsx";
import useGroupDMNitroUpsellActionDefault from "useGroupDMNitroUpsellAction.tsx";
import GroupDMNitroCapBannerDefault from "GroupDMNitroCapBanner.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../a11y/AccessibilityStore.tsx";
import { MAX_GROUP_DM_NITRO_PARTICIPANTS as closure_8 } from "../GroupDMConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function FloatingBanner(children) {
  const visible = children.visible;
  ({ hideGradient, onListInsetChange } = children);
  let bottom;
  let callback;
  let token;
  let absoluteFillObject;
  let sharedValue;
  let sharedValue1;
  let bound1;
  let tmp = callback2();
  bottom = onListInsetChange(bottom[8])().bottom;
  const tmp4 = onListInsetChange(bottom[9])();
  callback = tmp4;
  let obj = visible(bottom[10]);
  token = obj.useToken(onListInsetChange(bottom[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  obj1 = token;
  let num = 0;
  [tmp8, c5] = callback(token.useState(0), 2);
  const tmp7 = callback(token.useState(0), 2);
  if (visible) {
    num = 0.4;
  }
  sharedValue = visible(bottom[11]).useSharedValue(num);
  let tmp5Result = tmp5(tmp3[11]);
  sharedValue1 = tmp5Result.useSharedValue(PX_16);
  const bound = Math.max(125, tmp8 + PX_40);
  bound1 = Math.max(tmp2(tmp3[6]).space.PX_12, tmp8 - PX_8 + PX_24);
  let items = [bound1, onListInsetChange, visible];
  const effect = obj1.useEffect(() => {
    if (onListInsetChange != null) {
      if (visible) {
        let PX_12 = bound1;
      } else {
        PX_12 = onListInsetChange(bottom[6]).space.PX_12;
      }
      tmp(PX_12);
    }
  }, items);
  const items1 = [token];
  callback = obj1.useCallback((nativeEvent) => {
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
    const obj = onListInsetChange(bottom[12])(token);
    const items = [onListInsetChange(bottom[12])(token).alpha(0).hex(), ,];
    const alphaResult = onListInsetChange(bottom[12])(token).alpha(0);
    const obj3 = onListInsetChange(bottom[12])(token);
    items[1] = onListInsetChange(bottom[12])(token).alpha(1).hex();
    const alphaResult1 = onListInsetChange(bottom[12])(token).alpha(1);
    const obj5 = onListInsetChange(bottom[12])(token);
    items[2] = onListInsetChange(bottom[12])(token).alpha(1).hex();
    return items;
  }, items1);
  const effect1 = obj1.useEffect(() => {
    if (visible) {
      const result = sharedValue.set(0.4);
      const result1 = sharedValue1.set(closure_1_12);
    }
    let num2 = 0;
    if (visible) {
      num2 = 1;
    }
    const result2 = sharedValue.set(visible(bottom[13]).withSpring(num2, closure_1_16));
    const obj = visible(bottom[13]);
    const tmp10 = closure_1_16;
    const tmp8 = visible;
    const tmp9 = bottom;
    let num3 = 0;
    if (!visible) {
      num3 = closure_1_12;
    }
    const result3 = sharedValue1.set(visible(bottom[13]).withSpring(num3, tmp10));
  }, items2);
  tmp5Result = tmp5(tmp3[11]);
  class L {
    constructor() {
      obj = { opacity: closure_6.get(), transform: null };
      obj = { translateY: closure_7.get() };
      items = [];
      items[0] = obj;
      obj[1] = items;
      return obj;
    }
  }
  L.__closure = { opacity: sharedValue, translateY: sharedValue1 };
  L.__workletHash = 9160619443528;
  L.__initData = closure_18;
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
  U.__initData = closure_19;
  const animatedStyle1 = visible(bottom[11]).useAnimatedStyle(U);
  obj = {
    style: items3,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  items3 = [tmp.floatingOverlay, { height: bound + bottom }, animatedStyle1];
  let str = "none";
  if (visible) {
    str = "box-none";
  }
  obj[1] = str;
  obj[2] = !visible;
  let str2 = "no-hide-descendants";
  if (visible) {
    str2 = "auto";
  }
  obj[3] = str2;
  obj = { style: items4, children: null };
  items4 = [absoluteFillObject.absoluteFillObject, tmp.floatingContent, { paddingBottom: bottom }, animatedStyle];
  let tmp19Result = !hideGradient;
  if (!hideGradient) {
    obj1 = { style: null, colors: null, locations: null, start: null, end: null, pointerEvents: "none" };
    obj1[0] = tmp21.absoluteFill;
    obj1[1] = memo;
    obj1[2] = closure_15;
    obj1[3] = { x: 0.5, y: 0 };
    obj1[4] = { x: 0.5, y: 1 };
    tmp19Result = tmp19(tmp2(tmp3[14]), obj1);
  }
  const items5 = [tmp19Result, closure_9(sharedValue, { onLayout: callback, children: children.children })];
  obj[1] = items5;
  obj[4] = closure_10(onListInsetChange(bottom[11]).View, obj);
  return closure_9(onListInsetChange(bottom[11]).View, obj);
}
({ StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const PX_40 = ThemesDefault.space.PX_40;
const PX_16 = ThemesDefault.space.PX_16;
const PX_24 = ThemesDefault.space.PX_24;
const PX_8 = ThemesDefault.space.PX_8;
let closure_15 = [0, 0.225, 1];
let closure_16 = { mass: 0.8, stiffness: 400, damping: 32, overshootClamping: true };
createCacheKey = {
  floatingOverlay: { position: "absolute", left: 0, right: 0, bottom: 0 },
  floatingContent: { justifyContent: "flex-end" },
  floatingBanner: null,
};
createCacheKey = { backgroundColor: "transparent", paddingTop: 0, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[2] = createCacheKey;
let closure_17 = createCacheKey.createStyles(createCacheKey);
let closure_18 = {
  code: "function GroupDMNitroUpsellBannerTsx1(){const{opacity,translateY}=this.__closure;return{opacity:opacity.get(),transform:[{translateY:translateY.get()}]};}",
};
let closure_19 = {
  code: "function GroupDMNitroUpsellBannerTsx2(){const{keyboardHeight,safeAreaBottom}=this.__closure;return{bottom:Math.max(keyboardHeight.get()-safeAreaBottom,0)};}",
};
let result = require("set").fileFinishedImporting("modules/group_dm/native/GroupDMNitroUpsellBanner.tsx");

export default function GroupDMNitroUpsellBanner(wrapperStyle) {
  ({ location: _location, floating } = wrapperStyle);
  ({ memberCount, recipientLimit } = wrapperStyle);
  if (floating === undefined) {
    floating = false;
  }
  wrapperStyle = wrapperStyle.wrapperStyle;
  ({ hideFloatingGradient, onFloatingListInsetChange } = wrapperStyle);
  let obj = initialize;
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj1 = getGroupDMNitroCapConfigDefault;
  let obj2 = GroupDMNitroAcquisitionStrategy;
  const groupDMNitroAudience = obj2.useGroupDMNitroAudience();
  obj = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: null };
  const tmp = callback2();
  obj[2] = GroupDMNitroAcquisitionStrategy.GroupDMNitroAcquisitionStrategy.MARKETING;
  const tmp7 = useGroupDMNitroUpsellActionDefault;
  let obj4 = GroupDMNitroAcquisitionStrategy;
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
  const tmp11 = closure_10;
  const tmp7Result = useGroupDMNitroUpsellActionDefault(obj);
  if (floating) {
    const items1 = [tmp.floatingBanner, wrapperStyle];
    tmp13 = items1;
  }
  obj = { showLeadingIcon: false, wrapperStyle: tmp13, trailing: null, children: null };
  obj1 = { text: null, size: "sm", variant: "experimental_premium-primary", shiny: null, icon: null, onPress: null };
  const intl = tmp2(1114).intl;
  const tmp5Result = GroupDMNitroCapBannerDefault;
  obj1[0] = intl.string(GroupDMNitroAcquisitionStrategy.getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
  let tmp15 = tmp9;
  if (tmp9) {
    tmp15 = !stateFromStores;
  }
  obj1[3] = tmp15;
  obj1[4] = registerAssetDefault;
  obj1[5] = tmp7Result;
  obj[2] = closure_9(Button.Button, obj1);
  obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp2(1114).intl;
  obj2[2] = intl2.string(getSystemLocale.t.KCD0Hp);
  const items2 = [closure_9(Text.Text, obj2)];
  const obj3 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: null };
  const intl3 = tmp2(1114).intl;
  obj4 = { number: closure_8 };
  obj3[2] = intl3.formatToPlainString(getSystemLocale.t["8o8Zk5"], obj4);
  items2[1] = closure_9(Text.Text, obj3);
  obj[3] = items2;
  const tmp11Result = tmp11(tmp5Result, obj);
  let tmp14Result = tmp11Result;
  if (floating) {
    const obj5 = { visible: null, hideGradient: null, onListInsetChange: null, children: null };
    obj5[0] = tmp9;
    obj5[1] = hideFloatingGradient;
    obj5[2] = onFloatingListInsetChange;
    obj5[3] = tmp11Result;
    tmp14Result = tmp14(FloatingBanner, obj5);
  }
  return tmp14Result;
}
