// discord_app/modules/premium_marketing/native/BuyNitroMarketingFooter.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LegacyBaseButton from "../../../../_runtime/06655_LegacyBaseButton.js";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import BuyNitroPurchaseButtonDefault from "components/purchase_button/BuyNitroPurchaseButton.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ Platform, View: c3 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let obj = { footer: null };
obj = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: 0,
  backgroundColor: null,
  borderTopColor: null,
  borderTopWidth: 1,
};
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
  const obj1 = {
    location: null,
    planSelection: null,
    applicationId: null,
    onPaymentSuccess: null,
    onPaymentDismiss: null,
  };
  const tmp = closure_5();
  obj1.location = AnalyticsLocationDefault.PREMIUM_MARKETING_FOOTER;
  obj1.planSelection = planSelection;
  obj1.applicationId = applicationId;
  obj1.onPaymentSuccess = onPaymentSuccess;
  obj1.onPaymentDismiss = onPaymentDismiss;
  obj.children = jsx(BuyNitroPurchaseButtonDefault, {
    location: null,
    planSelection: null,
    applicationId: null,
    onPaymentSuccess: null,
    onPaymentDismiss: null,
  });
  obj.children = (
    <React3 style={closure_5().footer} collapsable={false}>
      {null}
    </React3>
  );
  return jsx(LegacyBaseButton.GestureDetector, { style: closure_5().footer, collapsable: false, children: null });
}
