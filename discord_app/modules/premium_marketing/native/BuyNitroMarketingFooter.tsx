// === Module 13291: BuyNitroMarketingFooter ===

// Module 13291 (BuyNitroMarketingFooter)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 709 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5660 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5981 */;
import BuyNitroPurchaseButtonDefault from "BuyNitroPurchaseButton" /* 13270 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import createCacheKey from "createCacheKey" /* 4478 */;

({ Platform, View: c3 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let obj = { footer: null };
obj = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_12, paddingBottom: 0, backgroundColor: null, borderTopColor: null, borderTopWidth: 1 };
const PX_24 = ThemesDefault.space.PX_24;
obj[3] = ThemesDefault.colors.BACKGROUND_BASE_LOWER;
obj[4] = ThemesDefault.colors.BORDER_SUBTLE;
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingFooter.tsx");

export default function BuyNitroMarketingFooter(arg0) {
  ({ planSelection, applicationId, onPaymentSuccess, onPaymentDismiss } = arg0);
  let obj = LegacyBaseButton;
  const panGesture = obj.usePanGesture({ activeOffsetY: [-8, 8] });
  obj = { gesture: panGesture, children: null };
  obj = { style: callback().footer, collapsable: false, children: null };
  obj1 = { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null };
  const tmp = callback();
  obj1[0] = QUICK_SWITCHERDefault.PREMIUM_MARKETING_FOOTER;
  obj1[1] = planSelection;
  obj1[2] = applicationId;
  obj1[3] = onPaymentSuccess;
  obj1[4] = onPaymentDismiss;
  obj[2] = jsx(BuyNitroPurchaseButtonDefault, { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null });
  obj[1] = <closure_3 style={callback().footer} collapsable={false}>{null}</closure_3>;
  return jsx(LegacyBaseButton.GestureDetector, { style: callback().footer, collapsable: false, children: null });
};