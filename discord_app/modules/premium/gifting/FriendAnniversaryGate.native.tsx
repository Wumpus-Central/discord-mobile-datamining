// discord_app/modules/premium/gifting/FriendAnniversaryGate.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import apexExperimentDefault from "native/MobileFriendAnniversaryExperiment.tsx";

const result = obj132.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};