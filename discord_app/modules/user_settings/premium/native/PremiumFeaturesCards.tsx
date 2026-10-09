// === Module 9367: PremiumFeaturesCards ===

// Module 9367 (PremiumFeaturesCards)
import PremiumFeaturesCardDefault from "PremiumFeaturesCard" /* 9368 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1392).PremiumTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles({ container: { width: "100%", gap: 12 } });
let obj2 = { TIER_0_LEADING: 0, [0]: "TIER_0_LEADING", TIER_2_LEADING: 1, [1]: "TIER_2_LEADING" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCards.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumFeaturesCards(onPaymentSuccess) {
  const cResult = applicationId(onPaymentDismiss[6]).c(12);
  ({ style, applicationId } = onPaymentSuccess);
  onPaymentSuccess = onPaymentSuccess.onPaymentSuccess;
  onPaymentDismiss = onPaymentSuccess.onPaymentDismiss;
  ({ order, onLayout, onFirstCardLayout } = onPaymentSuccess);
  if (undefined === order) {
    order = obj2.TIER_0_LEADING;
  }
  let container = closure_6();
  if (cResult[0] === applicationId) {
    if (cResult[1] === onFirstCardLayout) {
      if (cResult[2] === onLayout) {
        if (cResult[3] === onPaymentDismiss) {
          if (cResult[4] === onPaymentSuccess) {
            if (cResult[5] === order) {
              if (cResult[6] === style) {
                if (cResult[7] === container.container) {
                  return cResult[8];
                }
              }
            }
          }
        }
      }
    }
  }
  if (obj2.TIER_2_LEADING === order) {
    const items = [, ];
    ({ TIER_2: arr2[0], TIER_0: arr2[1] } = PremiumTypes);
    let items1 = items;
  } else {
    const TIER_0_LEADING = tmp3.TIER_0_LEADING;
    items1 = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
  }
  if (cResult[9] === style) {
    if (cResult[10] === container.container) {
      let tmp6 = cResult[11];
    }
    obj2 = {
      style: tmp6,
      onLayout,
      children: items1.map((premiumType, index) => {
          let tmp3;
          if (0 === index) {
            tmp3 = onFirstCardLayout;
          }
          return jsx(PremiumFeaturesCardDefault, { onLayout: tmp3, premiumType, applicationId, onPaymentSuccess, onPaymentDismiss }, premiumType);
        })
    };
    const tmp9 = <onFirstCardLayout style={tmp6} onLayout={onLayout}>{items1.map((premiumType, index) => {
      let tmp3;
      if (0 === index) {
        tmp3 = onFirstCardLayout;
      }
      return jsx(PremiumFeaturesCardDefault, { onLayout: tmp3, premiumType, applicationId, onPaymentSuccess, onPaymentDismiss }, premiumType);
    })}</onFirstCardLayout>;
    cResult[0] = applicationId;
    cResult[1] = onFirstCardLayout;
    cResult[2] = onLayout;
    cResult[3] = onPaymentDismiss;
    cResult[4] = onPaymentSuccess;
    cResult[5] = order;
    cResult[6] = style;
    container = container.container;
    cResult[7] = container;
    cResult[8] = tmp9;
  }
  const items2 = [container.container, style];
  cResult[9] = style;
  cResult[10] = container.container;
  cResult[11] = items2;
  tmp6 = items2;
  const obj = applicationId(onPaymentDismiss[6]);
}) : (function PremiumFeaturesCards(onFirstCardLayout) {
  ({ applicationId: require, onPaymentSuccess: importDefault, onPaymentDismiss: dependencyMap, order } = onFirstCardLayout);
  if (order === undefined) {
    order = obj2.TIER_0_LEADING;
  }
  onFirstCardLayout = onFirstCardLayout.onFirstCardLayout;
  if (obj2.TIER_2_LEADING === order) {
    const items = [, ];
    ({ TIER_2: arr2[0], TIER_0: arr2[1] } = PremiumTypes);
    let items1 = items;
  } else {
    const TIER_0_LEADING = tmp3.TIER_0_LEADING;
    items1 = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
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
  const items2 = [closure_6().container, onFirstCardLayout.style];
  obj.style = items2;
  return <onFirstCardLayout style={null} onLayout={onFirstCardLayout.onLayout}>{items1.map((premiumType, index) => {
    let tmp3;
    if (0 === index) {
      tmp3 = onFirstCardLayout;
    }
    return jsx(PremiumFeaturesCardDefault, { onLayout: tmp3, premiumType, applicationId, onPaymentSuccess, onPaymentDismiss }, premiumType);
  })}</onFirstCardLayout>;
});
export const PremiumFeatureCardOrder = obj2;