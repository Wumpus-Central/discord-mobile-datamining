// === Module 6594: PromoEmailConsentStore ===

// Module 6594 (PromoEmailConsentStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const usePromoEmailConsentStore = module_560.create(() => ({ required: false, checked: false, preChecked: false }));
const result = size.fileFinishedImporting("modules/auth/PromoEmailConsentStore.tsx");

export const setPromoEmailConsentState = function setPromoEmailConsentState(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState(closure_0));
};
export const setPromoEmailConsentChecked = function setPromoEmailConsentChecked(checked) {
  _require = checked;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { checked };
    return obj.setState(obj);
  });
};
export { usePromoEmailConsentStore };