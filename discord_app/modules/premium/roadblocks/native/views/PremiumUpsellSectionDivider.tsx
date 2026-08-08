// discord_app/modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { Gradients } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../../../_runtime/04725_LinearGradient.js";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { keys } from "../../../../../ConstantsIOS.tsx";
import { PremiumUpsellGradientBackground } from "PremiumUpsellGradientBackground.tsx";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles((arg0) => {
  let num;
  if (arg0 === createCacheKey.START) {
    num = 6;
  }
  let obj = { height: 28, flex: 1, justifyContent: "center", marginTop: num, marginBottom: null };
  let num2;
  if (arg0 === createCacheKey.END) {
    num2 = 6;
  }
  obj = { container: obj, lockContainer: null, lockGradient: null, lock: null, divider: null, gradient: null };
  obj[4] = num2;
  obj = { justifyContent: "center", alignItems: "center" };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj[1] = obj;
  obj[2] = { width: 28, height: 28, justifyContent: "center", borderRadius: Themes.radii.round };
  obj[3] = { width: 16, height: 16, alignSelf: "center" };
  obj[4] = { height: 1 };
  let num3;
  if (arg0 === createCacheKey.START) {
    num3 = 0;
  }
  const obj2 = { flex: 1, height: 14, left: 0, right: 0, position: "absolute", bottom: num3, top: null };
  let num4;
  if (arg0 === createCacheKey.END) {
    num4 = 0;
  }
  obj2[6] = num4;
  obj[5] = obj2;
  return obj;
});
createCacheKey = { START: 0, [0]: "START", END: 1, [1]: "END" };
const result = require("items").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx");

export default function PremiumUpsellSectionDivider(arg0) {
  let position;
  let useTier0UpsellContent;
  ({ useTier0UpsellContent, position } = arg0);
  let lock = callback2(position);
  let obj = { style: lock.container, children: null };
  obj = { style: lock.gradient, children: callback(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, { useTier0UpsellContent }) };
  let LockIcon = require;
  let WHITE = dependencyMap;
  const items = [callback(closure_4, obj), , ];
  obj = { style: lock.divider, start: null, end: null, colors: null };
  obj[1] = keys.HorizontalGradient.START;
  obj[2] = keys.HorizontalGradient.END;
  if (true === useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
    let tmp6 = Gradients;
  } else {
    tmp6 = Gradients;
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj[3] = PREMIUM_TIER_2_TRI_COLOR;
  items[1] = callback(LinearGradient, obj);
  if (position !== createCacheKey.START) {
    items[2] = tmp8;
    obj[1] = items;
    return closure_7(tmp2, obj);
  } else {
    const obj1 = { style: null, children: null };
    obj1[0] = lock.lockContainer;
    let obj2 = { style: null, start: null, end: null, colors: null, children: null };
    obj2[0] = lock.lockGradient;
    obj2[1] = LockIcon(691).HorizontalGradient.START;
    obj2[2] = LockIcon(691).HorizontalGradient.END;
    obj2[3] = useTier0UpsellContent ? tmp6.PREMIUM_TIER_0 : tmp6.PREMIUM_TIER_2_TRI_COLOR;
    LockIcon = LockIcon(4823).LockIcon;
    const obj3 = { color: null, style: null };
    WHITE = tmp4(712).colors.WHITE;
    obj3[0] = WHITE;
    lock = lock.lock;
    obj3[1] = lock;
    obj2[4] = tmp3(LockIcon, obj3);
    obj2 = tmp3(tmp4(4725), obj2);
    obj1[1] = obj2;
    tmp3(tmp2, obj1);
    const tmp4Result = tmp4(4725);
  }
};
export const PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT = 28;
export const PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN = 6;
export const PremiumUpsellSectionDividerPosition = createCacheKey;