// discord_app/modules/premium_marketing/native/BuyNitroMarketingFooter.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { LegacyBaseButton } from "../../../../_runtime/05488_LegacyBaseButton.js";
import { QUICK_SWITCHER } from "../../app_analytics/AnalyticsLocation.tsx";
import { BuyNitroPurchaseButton } from "components/purchase_button/BuyNitroPurchaseButton.tsx";

let Platform;
let c3;
({ Platform, View: c3 } = get_ActivityIndicator);
let obj = { footer: null };
obj = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_12, paddingBottom: 0, backgroundColor: null, borderTopColor: null, borderTopWidth: 1 };
const PX_24 = require("Themes").space.PX_24;
obj[3] = require("Themes").colors.BACKGROUND_BASE_LOWER;
obj[4] = require("Themes").colors.BORDER_SUBTLE;
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingFooter.tsx");

export default function BuyNitroMarketingFooter(arg0) {
  let applicationId;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planSelection;
  ({ planSelection, applicationId, onPaymentSuccess, onPaymentDismiss } = arg0);
  let obj = LegacyBaseButton;
  const panGesture = obj.usePanGesture({ activeOffsetY: [-8, 8] });
  obj = { gesture: panGesture, children: null };
  obj = { style: callback().footer, collapsable: false, children: null };
  const obj1 = { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null };
  const tmp = callback();
  obj1[0] = QUICK_SWITCHER.PREMIUM_MARKETING_FOOTER;
  obj1[1] = planSelection;
  obj1[2] = applicationId;
  obj1[3] = onPaymentSuccess;
  obj1[4] = onPaymentDismiss;
  obj[2] = jsx(BuyNitroPurchaseButton, { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null });
  obj[1] = <closure_3 style={callback().footer} collapsable={false}>{null}</closure_3>;
  return jsx(LegacyBaseButton.GestureDetector, { style: callback().footer, collapsable: false, children: null });
};