// === Module 9362: PremiumFeaturesCards ===

// Module 9362 (PremiumFeaturesCards)
import PremiumFeaturesCardDefault from "PremiumFeaturesCard" /* 9363 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const PremiumTypes = fn(1373).PremiumTypes;
const jsx = fn(21).jsx;
let createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ container: { width: "100%", gap: 12 } });
createStyles = { TIER_0_LEADING: 0, [0]: "TIER_0_LEADING", TIER_2_LEADING: 1, [1]: "TIER_2_LEADING" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCards.tsx");

export default function PremiumFeaturesCards(onFirstCardLayout) {
  ({ applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: View, order } = onFirstCardLayout);
  if (order === undefined) {
    order = createStyles.TIER_0_LEADING;
  }
  onFirstCardLayout = onFirstCardLayout.onFirstCardLayout;
  if (createStyles.TIER_2_LEADING === order) {
    const items = [, ];
    ({ TIER_2: arr2[0], TIER_0: arr2[1] } = onFirstCardLayout);
    let items1 = items;
  } else {
    const TIER_0_LEADING = tmp3.TIER_0_LEADING;
    items1 = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = onFirstCardLayout);
  }
  const obj = {
    style: null,
    onLayout: onFirstCardLayout.onLayout,
    children: items1.map((premiumType, index) => {
      let tmp3;
      if (0 === index) {
        tmp3 = onFirstCardLayout;
      }
      return jsx(PremiumFeaturesCardDefault, { onLayout: tmp3, premiumType, applicationId, onPaymentSuccess, onPaymentDismiss }, premiumType);
    })
  };
  const items2 = [closure_5().container, onFirstCardLayout.style];
  obj.style = items2;
  return <View style={null} onLayout={arg0.onLayout}>{items1.map((premiumType, index) => {
    let tmp3;
    if (0 === index) {
      tmp3 = onFirstCardLayout;
    }
    return jsx(PremiumFeaturesCardDefault, { onLayout: tmp3, premiumType, applicationId, onPaymentSuccess, onPaymentDismiss }, premiumType);
  })}</View>;
};
export const PremiumFeatureCardOrder = createStyles;