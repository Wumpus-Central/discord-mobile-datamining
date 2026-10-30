// === Module 15184: premiumOrbsDeliveredModal ===

// Module 15184 (premiumOrbsDeliveredModal)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5954 */;
import NitroOrbsDeliveredModalDefault from "NitroOrbsDeliveredModal" /* 15186 */;
import PremiumOrbsDeliveredModalExperimentDefault from "PremiumOrbsDeliveredModalExperiment" /* 15188 */;
import noop from "module_19" /* 19 */;
import EntitlementStore from "EntitlementStore" /* 7573 */;

const require = fn;
function getCoinEntitlements() {
  return EntitlementStore.getForSku(SINGLE_ORB_SKU_ID);
}
const jsx = fn(21).jsx;
const SINGLE_ORB_SKU_ID = fn(15185).SINGLE_ORB_SKU_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_marketing/native/premiumOrbsDeliveredModal.tsx");

export function anchorOrbsPurchaseStart() {
  const forSku = EntitlementStore.getForSku(SINGLE_ORB_SKU_ID);
  obj = { startedAt: Date.now(), knownCoinEntitlementIds: null };
  if (null == forSku) {
    let items = [];
  } else {
    const _Array = Array;
    items = Array.from(forSku, (id) => id.id);
  }
  obj.knownCoinEntitlementIds = new Set(items);
}
export function openOrbsModalIfDelivered() {
  c6 = null;
  if (null != c6) {
    if (obj.getConfig({ location: "premiumOrbsDeliveredModal" })) {
      const tmp4 = (function getDeliveredOrbsAmount(knownCoinEntitlementIds) {
        const tmp = getCoinEntitlements();
        if (null == tmp) {
          return null;
        } else {
          for (const item10008 of tmp) {
            if (item10008.type === closure_0(1086).EntitlementTypes.PURCHASE_REWARD) {
              knownCoinEntitlementIds = arg0.knownCoinEntitlementIds;
              if (!knownCoinEntitlementIds.has(item10008.id)) {
                obj = SnowflakeUtilsDefault;
                if (obj.extractTimestamp(item10008.id) >= arg0.startedAt) {
                  if (null != item10008.orbsReward) {
                    if (item10008.orbsReward > 0) {
                      obj2.return();
                      return item10008.orbsReward;
                    }
                  }
                }
              }
            }
            continue;
          }
          return null;
        }
      })(tmp);
      if (null != tmp4) {
        closure_0 = tmp4;
        const obj2 = {
          importer() {
                  return Promise.resolve((onClose) => jsx(NitroOrbsDeliveredModalDefault, { orbsAmount, onClose: onClose.onClose }));
                },
          isDismissable: false
        };
        actions_AlertActionCreatorsDefault.openLazy(obj2);
        const tmp2Result = actions_AlertActionCreatorsDefault;
      }
    }
    obj = PremiumOrbsDeliveredModalExperimentDefault;
  }
}