// === Module 8337: FriendAnniversaryGate ===

// Module 8337 (FriendAnniversaryGate)
import MobileFriendAnniversaryExperimentDefault from "MobileFriendAnniversaryExperiment" /* 8338 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: MobileFriendAnniversaryExperimentDefault.getConfig(arg0).enabled };
  return obj;
};