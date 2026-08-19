// discord_app/modules/auth/PromoEmailConsentStore.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import keys from "../../../_runtime/00644_keys.js";

const obj = keys.create(() => ({ required: false, checked: false, preChecked: false }));
const result = obj132.fileFinishedImporting("modules/auth/PromoEmailConsentStore.tsx");

export const setPromoEmailConsentState = function setPromoEmailConsentState(arg0) {
  const _require = arg0;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => obj.setState(closure_0));
};
export const setPromoEmailConsentChecked = function setPromoEmailConsentChecked(arg0) {
  const _require = arg0;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => closure_1_2.setState({ checked: closure_0 }));
};
export const usePromoEmailConsentStore = obj;