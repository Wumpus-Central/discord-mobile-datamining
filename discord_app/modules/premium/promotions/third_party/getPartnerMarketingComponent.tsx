// === Module 15596: getPartnerMarketingComponent ===

// Module 15596 (getPartnerMarketingComponent)
import selectActiveMarketingComponentDefault from "selectActiveMarketingComponent" /* 9763 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1385 */;
import PromotionsStore from "PromotionsStore" /* 9720 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/third_party/getPartnerMarketingComponent.tsx");

export default function getPartnerMarketingComponent(arg0, arg1) {
  closure_0 = arg1;
  const first = _slicedToArray(PromotionsStore.getPromotionsByPartner(arg0).oneTime, 1)[0];
  if (null == first) {
    return null;
  } else {
    const currentUser = UserStore.getCurrentUser();
    const _Date = Date;
    const date = new Date();
    const marketingComponents = first.marketingComponents;
    return selectActiveMarketingComponentDefault(marketingComponents.filter((componentType) => componentType.componentType === closure_0), date, (isIncludedInRollout) => {
      let isIncludedInRolloutResult = null != closure_1;
      if (isIncludedInRolloutResult) {
        isIncludedInRolloutResult = isIncludedInRollout.isIncludedInRollout(tmp.id, date);
      }
      return isIncludedInRolloutResult;
    });
  }
};