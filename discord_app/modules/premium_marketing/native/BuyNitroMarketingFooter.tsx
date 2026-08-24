// discord_app/modules/premium_marketing/native/BuyNitroMarketingFooter.tsx
import set from "../../../../_runtime/00002_set.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LegacyBaseButton from "../../../../_runtime/06408_LegacyBaseButton.js";
import QUICK_SWITCHERDefault from "../../app_analytics/AnalyticsLocation.tsx";
import BuyNitroPurchaseButtonDefault from "components/purchase_button/BuyNitroPurchaseButton.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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