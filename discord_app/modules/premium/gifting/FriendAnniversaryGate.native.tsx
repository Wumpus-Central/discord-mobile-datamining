// === Module 7998: getFriendAnniversaryGateConfig ===

// Module 7998 (getFriendAnniversaryGateConfig)
import set from "set" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 7999 */;

const result = set.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};