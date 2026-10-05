// discord_app/modules/premium/premium_marketing/native/premiumOrbsDeliveredModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import VirtualCurrencyConstants from "../../../../../discord_common/js/shared/shared-constants/VirtualCurrencyConstants.tsx";
import PremiumOrbsDeliveredModalExperimentDefault from "PremiumOrbsDeliveredModalExperiment.tsx";
import react from "../../../../../_runtime/00019_react.js";
import EntitlementStore from "../../../../stores/game_store/EntitlementStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let importDefault;

function getCoinEntitlements() {
  return EntitlementStore.getForSku(SINGLE_ORB_SKU_ID);
}
const EntitlementTypes = Constants.EntitlementTypes;
const SINGLE_ORB_SKU_ID = VirtualCurrencyConstants.SINGLE_ORB_SKU_ID;
const jsx = Fragment.jsx;
let obj = null;
const result = size.fileFinishedImporting("modules/premium/premium_marketing/native/premiumOrbsDeliveredModal.tsx");

export const anchorOrbsPurchaseStart = function anchorOrbsPurchaseStart() {
  let _Set1;
  let items;
  const forSku = EntitlementStore.getForSku(SINGLE_ORB_SKU_ID);
  obj = { startedAt: Date.now(), knownCoinEntitlementIds: _Set1 };
  const _Set = Set;
  if (null == forSku) {
    items = [];
  } else {
    const _Array = Array;
    items = Array.from(forSku, (id) => id.id);
  }
  _Set1 = new _Set(items);
};
export const openOrbsModalIfDelivered = function openOrbsModalIfDelivered() {
  let closure_0;
  let tmp;
  function getDeliveredOrbsAmount(knownCoinEntitlementIds) {
    const tmp = getCoinEntitlements();
    if (null == tmp) {
      return null;
    } else {
      for (const item10008 of tmp) {
        if (item10008.type === constants.PURCHASE_REWARD) {
          knownCoinEntitlementIds = knownCoinEntitlementIds.knownCoinEntitlementIds;
          if (!knownCoinEntitlementIds.has(item10008.id)) {
            obj = closure_0(dependencyMap[7]);
            if (obj.extractTimestamp(item10008.id) >= knownCoinEntitlementIds.startedAt) {
              if (null != item10008.orbsReward) {
                if (item10008.orbsReward > 0) {
                  let orbsReward = item10008.orbsReward;
                  obj2.return();
                  return orbsReward;
                }
              }
            }
          }
        }
        continue;
      }
      return null;
    }
  }
  let c6 = null;
  if (null != c6) {
    obj = PremiumOrbsDeliveredModalExperimentDefault;
    const tmp2 = importDefault;
    if (obj.getConfig({ location: "premiumOrbsDeliveredModal" })) {
      const tmp4 = getDeliveredOrbsAmount(tmp);
      if (null != tmp4) {
        importDefault = tmp4;
        const obj2 = {
          importer() {
            let orbsAmount;
            return Promise.resolve((onClose) =>
              jsx(orbsAmount(dependencyMap[6]), { orbsAmount, onClose: onClose.onClose }),
            );
          },
          isDismissable: false,
        };
        const tmp2Result = tmp2(5708);
        tmp2Result.openLazy(obj2);
      }
    }
  }
};
