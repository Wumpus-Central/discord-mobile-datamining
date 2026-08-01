// === Module 5646: setPromoEmailConsentState ===

// Module 5646 (setPromoEmailConsentState)
import keys from "keys";

const obj = keys.create(() => ({ required: false, checked: false, preChecked: false }));
const result = require("set").fileFinishedImporting("modules/auth/PromoEmailConsentStore.tsx");

export const setPromoEmailConsentState = function setPromoEmailConsentState(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => outer1_2.setState(closure_0));
};
export const setPromoEmailConsentChecked = function setPromoEmailConsentChecked(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => outer1_2.setState({ checked: closure_0 }));
};
export const usePromoEmailConsentStore = obj;