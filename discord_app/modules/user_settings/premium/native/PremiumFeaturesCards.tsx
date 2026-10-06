// === Module 8896: PremiumFeaturesCards ===

// Module 8896 (PremiumFeaturesCards)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumFeaturesCardDefault from "PremiumFeaturesCard" /* 8897 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const PremiumTypes = PremiumConstants.PremiumTypes;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { width: "100%", gap: 12 } });
const PremiumFeatureCardOrder = { TIER_0_LEADING: 0, [0]: "TIER_0_LEADING", TIER_2_LEADING: 1, [1]: "TIER_2_LEADING" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPaymentSuccess) => {
  let applicationId;
  let items1;
  let onFirstCardLayout;
  let onLayout;
  let onPaymentDismiss;
  let order;
  let style;
  let tmp4;
  const obj = applicationId(onPaymentDismiss[6]);
  const cResult = obj.c(12);
  ({ style, applicationId } = onPaymentSuccess);
  onPaymentSuccess = onPaymentSuccess.onPaymentSuccess;
  onPaymentDismiss = onPaymentSuccess.onPaymentDismiss;
  ({ order, onLayout, onFirstCardLayout } = onPaymentSuccess);
  if (undefined === order) {
    order = obj.TIER_0_LEADING;
  }
  let tmp3 = closure_6();
  if (cResult[0] === applicationId) {
    if (cResult[1] === onFirstCardLayout) {
      if (cResult[2] === onLayout) {
        if (cResult[3] === onPaymentDismiss) {
          if (cResult[4] === onPaymentSuccess) {
            if (cResult[5] === order) {
              if (cResult[6] === style) {
                if (cResult[7] === tmp3.container) {
                  tmp4 = cResult[8];
                }
                return tmp4;
              }
            }
          }
        }
      }
    }
  }
  if (obj.TIER_2_LEADING === order) {
    const items = [, ];
    ({ TIER_2: arr2[0], TIER_0: arr2[1] } = PremiumTypes);
    items1 = items;
  } else {
    const TIER_0_LEADING = tmp5.TIER_0_LEADING;
    items1 = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
  }
  if (cResult[9] === style) {
    let tmp8;
    if (cResult[10] === tmp3.container) {
      tmp8 = cResult[11];
    }
    const tmp11 = <onFirstCardLayout style={tmp8} onLayout={onLayout}>{items1.map((premiumType, index) => {
      let tmp3;
      PremiumFeaturesCardDefault;
      if (0 === index) {
        tmp3 = onFirstCardLayout;
      }
      return <tmp2 key={premiumType} onLayout={tmp3} premiumType={premiumType} applicationId={applicationId} onPaymentSuccess={onPaymentSuccess} onPaymentDismiss={onPaymentDismiss} />;
    })}</onFirstCardLayout>;
    cResult[0] = applicationId;
    cResult[1] = onFirstCardLayout;
    cResult[2] = onLayout;
    cResult[3] = onPaymentDismiss;
    cResult[4] = onPaymentSuccess;
    cResult[5] = order;
    cResult[6] = style;
    cResult[7] = tmp3.container;
    cResult[8] = tmp11;
    tmp4 = tmp11;
  }
  const items2 = [tmp3.container, style];
  cResult[9] = style;
  cResult[10] = tmp3.container;
  cResult[11] = items2;
  tmp8 = items2;
}) : ((style) => {
  let applicationId;
  let items1;
  let items2;
  let obj;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let order;
  let tmp3;
  const f98901 = (premiumType, index) => {
    let tmp3;
    PremiumFeaturesCardDefault;
    if (0 === index) {
      tmp3 = onFirstCardLayout;
    }
    return <tmp2 key={premiumType} onLayout={tmp3} premiumType={premiumType} applicationId={require} onPaymentSuccess={importDefault} onPaymentDismiss={dependencyMap} />;
  };
  ({ applicationId: require, onPaymentSuccess: importDefault, onPaymentDismiss: dependencyMap, order } = style);
  style = style.style;
  if (order === undefined) {
    order = obj.TIER_0_LEADING;
  }
  const onFirstCardLayout = style.onFirstCardLayout;
  const onLayout = style.onLayout;
  const tmp2 = closure_6();
  if (obj.TIER_2_LEADING === order) {
    const items = [, ];
    ({ TIER_2: arr2[0], TIER_0: arr2[1] } = PremiumTypes);
    items1 = items;
  } else {
    const TIER_0_LEADING = tmp3.TIER_0_LEADING;
    items1 = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
  }
  obj = { style: items2, onLayout, children: items1.map(f98901) };
  items2 = [tmp2.container, style];
  return <onFirstCardLayout style={items2} onLayout={onLayout}>{items1.map(f98901)}</onFirstCardLayout>;
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCards.tsx");

export default tmp3;
export { PremiumFeatureCardOrder };