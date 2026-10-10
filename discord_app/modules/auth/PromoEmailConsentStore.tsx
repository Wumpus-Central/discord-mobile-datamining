// === Module 5931: PromoEmailConsentStore ===

// Module 5931 (PromoEmailConsentStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const usePromoEmailConsentStore = module_570.create(() => ({ required: false, checked: false, preChecked: false }));
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