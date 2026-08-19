// discord_app/modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import keys from "../../../../../ConstantsIOS.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../../../_runtime/04756_LinearGradient.js";
import LockIcon2 from "../../../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground.tsx";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { Gradients } from "../../../../colors/native/ColorConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles((arg0) => {
  let num;
  if (arg0 === createCacheKey.START) {
    num = 6;
  }
  let obj = { height: 28, flex: 1, justifyContent: "center", marginTop: num, marginBottom: null };
  obj = { justifyContent: "center", alignItems: "center" };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj[1] = obj;
  obj[2] = { width: 28, height: 28, justifyContent: "center", borderRadius: ThemesDefault.radii.round };
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
const result = require("obj132").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx");

export default function PremiumUpsellSectionDivider(arg0) {
  ({ useTier0UpsellContent, position } = arg0);
  let lock = callback2(position);
  let obj = { style: lock.gradient, children: callback(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, { useTier0UpsellContent }) };
  let LockIcon = require;
  let WHITE = dependencyMap;
  const items = [callback(closure_4, obj), , ];
  obj = { style: lock.divider, start: keys.HorizontalGradient.START, end: keys.HorizontalGradient.END, colors: null };
  if (true === useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
    let tmp6 = Gradients;
  } else {
    tmp6 = Gradients;
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj[3] = PREMIUM_TIER_2_TRI_COLOR;
  items[1] = callback(LinearGradientDefault, obj);
  if (position !== createCacheKey.START) {
    items[2] = tmp8;
    obj[1] = items;
    return callback(closure_4, obj);
  } else {
    obj1 = { style: null, children: null };
    obj1[0] = lock.lockContainer;
    let obj2 = { style: null, start: null, end: null, colors: null, children: null };
    obj2[0] = lock.lockGradient;
    obj2[1] = keys.HorizontalGradient.START;
    obj2[2] = keys.HorizontalGradient.END;
    obj2[3] = useTier0UpsellContent ? tmp6.PREMIUM_TIER_0 : tmp6.PREMIUM_TIER_2_TRI_COLOR;
    LockIcon = LockIcon2.LockIcon;
    const obj3 = { color: null, style: null };
    WHITE = ThemesDefault.colors.WHITE;
    obj3[0] = WHITE;
    lock = lock.lock;
    obj3[1] = lock;
    obj2[4] = callback(LockIcon, obj3);
    obj2 = callback(LinearGradientDefault, obj2);
    obj1[1] = obj2;
    callback(closure_4, obj1);
    const tmp4Result = LinearGradientDefault;
  }
};
export const PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT = 28;
export const PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN = 6;
export const PremiumUpsellSectionDividerPosition = createCacheKey;