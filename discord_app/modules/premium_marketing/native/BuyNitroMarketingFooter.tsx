// === Module 13408: BuyNitroMarketingFooter ===

// Module 13408 (BuyNitroMarketingFooter)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import BuyNitroPurchaseButtonDefault from "BuyNitroPurchaseButton" /* 13387 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

({ Platform, View: c3 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let obj = { footer: null };
obj = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: 0, backgroundColor: null, borderTopColor: null, borderTopWidth: 1 };
const PX_24 = nativeDefault.space.PX_24;
obj.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWER;
obj.borderTopColor = nativeDefault.colors.BORDER_SUBTLE;
obj.footer = obj;
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingFooter.tsx");

export default function BuyNitroMarketingFooter(arg0) {
  ({ planSelection, applicationId, onPaymentSuccess, onPaymentDismiss } = arg0);
  let obj = LegacyBaseButton;
  const panGesture = obj.usePanGesture({ activeOffsetY: [-8, 8] });
  obj = { gesture: panGesture, children: null };
  obj = { style: closure_5().footer, collapsable: false, children: null };
  const obj1 = { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null };
  const tmp = closure_5();
  obj1.location = AnalyticsLocationDefault.PREMIUM_MARKETING_FOOTER;
  obj1.planSelection = planSelection;
  obj1.applicationId = applicationId;
  obj1.onPaymentSuccess = onPaymentSuccess;
  obj1.onPaymentDismiss = onPaymentDismiss;
  obj.children = jsx(BuyNitroPurchaseButtonDefault, { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null });
  obj.children = <React3 style={closure_5().footer} collapsable={false}>{null}</React3>;
  return jsx(LegacyBaseButton.GestureDetector, { style: closure_5().footer, collapsable: false, children: null });
};