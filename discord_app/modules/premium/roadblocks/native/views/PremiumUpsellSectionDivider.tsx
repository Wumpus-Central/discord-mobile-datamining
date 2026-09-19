// discord_app/modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../../ConstantsIOS.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05198_LinearGradient.js";
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const LockIcon2 = LockIcon(5306);
require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const Gradients = fn(7672).Gradients;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let closure_8 = createStyles.createStyles((arg0) => {
  let num;
  if (arg0 === obj2.START) {
    num = 6;
  }
  const obj = { height: 28, flex: 1, justifyContent: "center", marginTop: num, marginBottom: null };
  let num2;
  if (arg0 === obj2.END) {
    num2 = 6;
  }
  obj2 = { container: obj, lockContainer: null, lockGradient: null, lock: null, divider: null, gradient: null };
  obj.marginBottom = num2;
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2.lockContainer = { justifyContent: "center", alignItems: "center" };
  const size = { width: 28, height: 28, justifyContent: "center", borderRadius: nativeDefault.radii.round };
  obj2.lockGradient = size;
  obj2.lock = { width: 16, height: 16, alignSelf: "center" };
  obj2.divider = { height: 1 };
  let num3;
  if (arg0 === obj2.START) {
    num3 = 0;
  }
  const rect = { flex: 1, height: 14, left: 0, right: 0, position: "absolute", bottom: num3, top: null };
  let num4;
  if (arg0 === obj2.END) {
    num4 = 0;
  }
  rect.top = num4;
  obj2.gradient = rect;
  return obj2;
});
let obj2 = { START: 0, [0]: "START", END: 1, [1]: "END" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx");

export default function PremiumUpsellSectionDivider(arg0) {
  ({ useTier0UpsellContent, position } = arg0);
  let lock = closure_8(position);
  const obj = { style: lock.container, children: null };
  obj2 = {
    style: lock.gradient,
    children: timestampProducer(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {
      useTier0UpsellContent,
    }),
  };
  let LockIcon = require;
  let WHITE = dependencyMap;
  const items = [timestampProducer(React4, obj2), ,];
  const obj3 = {
    style: lock.divider,
    start: ConstantsIOS.HorizontalGradient.START,
    end: ConstantsIOS.HorizontalGradient.END,
    colors: null,
  };
  if (true === useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
    let tmp6 = Gradients;
  } else {
    tmp6 = Gradients;
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj3.colors = PREMIUM_TIER_2_TRI_COLOR;
  items[1] = timestampProducer(LinearGradientDefault, obj3);
  if (position !== obj2.START) {
    items[2] = tmp8;
    obj.children = items;
    return React5(React4, obj);
  } else {
    const obj4 = { style: lock.lockContainer, children: null };
    let obj5 = {
      style: lock.lockGradient,
      start: ConstantsIOS.HorizontalGradient.START,
      end: ConstantsIOS.HorizontalGradient.END,
      colors: useTier0UpsellContent ? tmp6.PREMIUM_TIER_0 : tmp6.PREMIUM_TIER_2_TRI_COLOR,
      children: null,
    };
    LockIcon = LockIcon2.LockIcon;
    const obj6 = { color: null, style: null };
    WHITE = nativeDefault.colors.WHITE;
    obj6.color = WHITE;
    lock = lock.lock;
    obj6.style = lock;
    obj5.children = timestampProducer(LockIcon, obj6);
    obj5 = timestampProducer(LinearGradientDefault, obj5);
    obj4.children = obj5;
    timestampProducer(React4, obj4);
    const tmp4Result = LinearGradientDefault;
  }
}
export const PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT = 28;
export const PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN = 6;
export const PremiumUpsellSectionDividerPosition = obj2;
