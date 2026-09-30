// === Module 7718: FriendAnniversaryGate ===

// Module 7718 (FriendAnniversaryGate)
import MobileFriendAnniversaryExperimentDefault from "MobileFriendAnniversaryExperiment" /* 7719 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: MobileFriendAnniversaryExperimentDefault.getConfig(arg0).enabled };
  return obj;
};