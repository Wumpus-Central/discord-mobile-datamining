// discord_app/modules/waterwheels/interest/native/InterestSearchShadow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import LinearGradientDefault from "../../../../../_runtime/05830_LinearGradient.js";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import InterestScrollHeader from "InterestScrollHeader.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { backing: null, shadow: null, bar: null, barAndroid: null, fill: null };
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: nativeDefault.space.PX_26 + nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.backing = rect;
const rect1 = {
  position: "absolute",
  top: nativeDefault.space.PX_26 + nativeDefault.space.PX_16,
  left: 0,
  right: 0,
  height: nativeDefault.space.PX_64 + nativeDefault.space.PX_8,
};
obj2.shadow = rect1;
const rect2 = {
  position: "absolute",
  top: 0,
  left: nativeDefault.space.PX_16,
  right: nativeDefault.space.PX_16,
  height: nativeDefault.space.PX_48 + nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.bar = rect2;
obj2.barAndroid = { elevation: 0 };
obj2.fill = { flex: 1 };
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = {
  code: "(function InterestSearchShadowTsx1(){let[interestHeaderElevation,scrollY,collapseOffset]=this.__closure;return{opacity:interestHeaderElevation(scrollY.get(),collapseOffset)};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestSearchShadow.tsx");

export default function InterestSearchShadow(arg0) {
  ({ scrollY, collapseOffset } = arg0);
  const tmp = closure_7();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  items = [closure_8, InterestScrollHeader.interestHeaderElevation, scrollY, collapseOffset];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items;
  class InterestSearchShadowTsx1 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), closure_2) };
      return obj;
    }
  }
  const items1 = [tmp7, tmp8, tmp9];
  InterestSearchShadowTsx1.__closure = items1;
  InterestSearchShadowTsx1.__workletHash = 15648602916327;
  InterestSearchShadowTsx1.__initData = tmp6;
  const animatedStyle = _mod1652.useAnimatedStyle(InterestSearchShadowTsx1);
  const items2 = [React4(View, { pointerEvents: "none", style: tmp.backing }), ,];
  const items3 = [tmp.bar, ,];
  const obj3 = { pointerEvents: "none", style: tmp.backing };
  const tmp2Result = PlatformUtils;
  const obj4 = { children: null };
  items3[1] = PlatformUtils.isAndroid() && tmp.barAndroid;
  items3[2] = animatedStyle;
  items2[1] = React4(_modDef1652.View, { pointerEvents: "none", style: items3 });
  const obj5 = { pointerEvents: "none", style: null, children: null };
  const items4 = [tmp.shadow, animatedStyle];
  obj5.style = items4;
  const obj6 = { style: tmp.fill, colors: null };
  const items5 = [token];
  const tmp14 = PlatformUtils.isAndroid() && tmp.barAndroid;
  const tmp4Result = LinearGradientDefault;
  const obj8 = _modDef671(token);
  items5[1] = _modDef671(token).alpha(0).hex();
  obj6.colors = items5;
  obj5.children = React4(tmp4Result, obj6);
  items2[2] = React4(_modDef1652.View, obj5);
  obj4.children = items2;
  return timestampProducer(hasOwnProperty, obj4);
}
