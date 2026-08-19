// === Module 8292: getFriendAnniversaryGateConfig ===

// Module 8292 (getFriendAnniversaryGateConfig)
import obj132 from "obj132" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 8293 */;

const result = obj132.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};