// === Module 6005: setPromoEmailConsentState ===

// Module 6005 (setPromoEmailConsentState)
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;

const obj = keys.create(() => ({ required: false, checked: false, preChecked: false }));
const result = set.fileFinishedImporting("modules/auth/PromoEmailConsentStore.tsx");

export const setPromoEmailConsentState = function setPromoEmailConsentState(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => closure_1_2.setState(closure_0));
};
export const setPromoEmailConsentChecked = function setPromoEmailConsentChecked(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => closure_1_2.setState({ checked: closure_0 }));
};
export const usePromoEmailConsentStore = obj;