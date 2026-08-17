// discord_app/modules/premium/gifting/FriendAnniversaryGate.native.tsx
import set from "../../../../_runtime/00002_set.js";
import apexExperimentDefault from "native/MobileFriendAnniversaryExperiment.tsx";

const result = set.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};