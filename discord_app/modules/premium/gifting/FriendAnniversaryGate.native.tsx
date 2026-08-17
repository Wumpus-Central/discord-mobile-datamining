// discord_app/modules/premium/gifting/FriendAnniversaryGate.native.tsx
import set from "set" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 8293 */;

const result = set.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};