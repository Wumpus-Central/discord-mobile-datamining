// discord_app/modules/premium/gifting/FriendAnniversaryGate.native.tsx
import MobileFriendAnniversaryExperimentDefault from "native/MobileFriendAnniversaryExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: MobileFriendAnniversaryExperimentDefault.getConfig(arg0).enabled };
  return obj;
};
