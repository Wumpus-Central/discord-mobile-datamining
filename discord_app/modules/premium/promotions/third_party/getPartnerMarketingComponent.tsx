// discord_app/modules/premium/promotions/third_party/getPartnerMarketingComponent.tsx
import selectActiveMarketingComponentDefault from "../selectActiveMarketingComponent.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import PromotionsStore from "../PromotionsStore.tsx";

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
    return selectActiveMarketingComponentDefault(
      marketingComponents.filter((componentType) => componentType.componentType === closure_0),
      date,
      (isIncludedInRollout) => {
        let isIncludedInRolloutResult = null != closure_1;
        if (isIncludedInRolloutResult) {
          isIncludedInRolloutResult = isIncludedInRollout.isIncludedInRollout(tmp.id, date);
        }
        return isIncludedInRolloutResult;
      },
    );
  }
}
