// === Module 10306: PremiumUpsellSectionDivider ===

// Module 10306 (PremiumUpsellSectionDivider)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 10307 */;
import noop from "module_19" /* 19 */;

const LockIcon2 = LockIcon(5095);
require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const Gradients = fn(7432).Gradients;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4560);
let closure_8 = createStyles.createStyles((arg0) => {
  let num;
  if (arg0 === createStyles.START) {
    num = 6;
  }
  let obj = { height: 28, flex: 1, justifyContent: "center", marginTop: num, marginBottom: null };
  let num2;
  if (arg0 === createStyles.END) {
    num2 = 6;
  }
  obj = { container: obj, lockContainer: null, lockGradient: null, lock: null, divider: null, gradient: null, marginBottom: num2 };
  obj = { justifyContent: "center", alignItems: "center" };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.lockContainer = obj;
  const size = { width: 28, height: 28, justifyContent: "center", borderRadius: nativeDefault.radii.round };
  obj.lockGradient = size;
  obj.lock = { width: 16, height: 16, alignSelf: "center" };
  obj.divider = { height: 1 };
  let num3;
  if (arg0 === createStyles.START) {
    num3 = 0;
  }
  const rect = { flex: 1, height: 14, left: 0, right: 0, position: "absolute", bottom: num3, top: null };
  let num4;
  if (arg0 === createStyles.END) {
    num4 = 0;
  }
  rect.top = num4;
  obj.gradient = rect;
  return obj;
});
createStyles = { START: 0, [0]: "START", END: 1, [1]: "END" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx");

export default function PremiumUpsellSectionDivider(arg0) {
  ({ useTier0UpsellContent, position } = arg0);
  let lock = closure_8(position);
  let obj = { style: lock.container, children: null };
  obj = { style: lock.gradient, children: timestampProducer(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, { useTier0UpsellContent }) };
  let LockIcon = require;
  let WHITE = dependencyMap;
  const items = [timestampProducer(React4, obj), , ];
  obj = { style: lock.divider, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: null };
  if (true === useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
    let tmp6 = Gradients;
  } else {
    tmp6 = Gradients;
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj.colors = PREMIUM_TIER_2_TRI_COLOR;
  items[1] = timestampProducer(LinearGradientDefault, obj);
  if (position !== createStyles.START) {
    items[2] = tmp8;
    obj.children = items;
    return React5(tmp2, obj);
  } else {
    const obj1 = { style: lock.lockContainer, children: null };
    let obj2 = { style: lock.lockGradient, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: useTier0UpsellContent ? tmp6.PREMIUM_TIER_0 : tmp6.PREMIUM_TIER_2_TRI_COLOR, children: null };
    LockIcon = LockIcon2.LockIcon;
    const obj3 = { color: null, style: null };
    WHITE = tmp4(576).colors.WHITE;
    obj3.color = WHITE;
    lock = lock.lock;
    obj3.style = lock;
    obj2.children = tmp3(LockIcon, obj3);
    obj2 = tmp3(tmp4(4987), obj2);
    obj1.children = obj2;
    tmp3(tmp2, obj1);
    const tmp4Result = tmp4(4987);
  }
};
export const PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT = 28;
export const PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN = 6;
export const PremiumUpsellSectionDividerPosition = createStyles;