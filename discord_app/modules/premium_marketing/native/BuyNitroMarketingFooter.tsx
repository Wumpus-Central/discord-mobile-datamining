import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let Platform;
let c4;
const require = arg1;
({ Platform, View: c4 } = get_ActivityIndicator);
createCacheKey = { footer: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_12, paddingBottom: 0, backgroundColor: null, borderTopColor: null, borderTopWidth: 1 };
const PX_24 = require("Themes").space.PX_24;
createCacheKey[3] = require("Themes").colors.BACKGROUND_BASE_LOWER;
createCacheKey[4] = require("Themes").colors.BORDER_SUBTLE;
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingFooter.tsx");

export default function BuyNitroMarketingFooter(arg0) {
  let applicationId;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planSelection;
  ({ planSelection, applicationId, onPaymentSuccess, onPaymentDismiss } = arg0);
  const memo = React.useMemo(() => {
    const Gesture = callback(table[5]).Gesture;
    return Gesture.Pan().activeOffsetY([-8, 8]);
  }, []);
  let obj = { gesture: memo, children: null };
  obj = { style: createCacheKey().footer, collapsable: false, children: null };
  obj = { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null };
  const tmp = createCacheKey();
  obj[0] = importDefault(5539).PREMIUM_MARKETING_FOOTER;
  obj[1] = planSelection;
  obj[2] = applicationId;
  obj[3] = onPaymentSuccess;
  obj[4] = onPaymentDismiss;
  obj[2] = jsx(importDefault(6663), { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null });
  obj[1] = <closure_4 location={null} planSelection={null} applicationId={null} onPaymentSuccess={null} onPaymentDismiss={null} />;
  return jsx(require(5277) /* Directions */.GestureDetector, { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null });
};