// discord_app/modules/premium/gifting/FriendAnniversaryGate.native.tsx
import { apexExperiment } from "native/MobileFriendAnniversaryExperiment.tsx";
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = apexExperiment.getConfig(arg0).enabled;
  return obj;
};