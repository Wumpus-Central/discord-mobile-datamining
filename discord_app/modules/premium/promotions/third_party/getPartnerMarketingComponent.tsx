// === Module 9923: getPartnerMarketingComponent ===

// Module 9923 (getPartnerMarketingComponent)
import MarketingSurfaceTypeUtils from "MarketingSurfaceTypeUtils" /* 9559 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1385 */;
import PromotionsStore from "PromotionsStore" /* 9556 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/third_party/getPartnerMarketingComponent.tsx");

export default function getPartnerMarketingComponent(arg0, items) {
  _require = items;
  if (obj.isMarketingSurfaceType(items)) {
    const first = _slicedToArray(PromotionsStore.getPromotionsByPartner(arg0).oneTime, 1)[0];
    if (null == first) {
      return null;
    } else {
      importDefault = UserStore.getCurrentUser();
      const _Date = Date;
      const date = new Date();
      const marketingComponents = first.marketingComponents;
      return require("selectActiveMarketingComponent")(marketingComponents.filter((item) => MarketingSurfaceTypeUtils.isMarketingSurface(item, closure_0)), date, (isIncludedInRollout) => {
        let isIncludedInRolloutResult = null != closure_1;
        if (isIncludedInRolloutResult) {
          isIncludedInRolloutResult = isIncludedInRollout.isIncludedInRollout(tmp.id, date);
        }
        return isIncludedInRolloutResult;
      });
    }
  } else {
    return null;
  }
  obj = require("MarketingSurfaceTypeUtils");
  tmp = date;
};