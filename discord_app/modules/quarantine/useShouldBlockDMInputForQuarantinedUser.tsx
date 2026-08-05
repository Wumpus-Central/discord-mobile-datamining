import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { MAX_MESSAGES_ALLOWED_FOR_GREETING } from "../messages/useShowConvoStarterInDM.tsx";
// discord_app/modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx
import reinjectEphemerals from "reinjectEphemerals";
import { UserFlags } from "ME";

const require = arg1;
const result = require("MAX_MESSAGES_ALLOWED_FOR_GREETING").fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default function useShouldBlockDMInputForQuarantinedUser(hasFlag, channel) {
  const _require = channel;
  const showConvoStarterInDM = _MAX_MESSAGES_ALLOWED_FOR_GREETING.useShowConvoStarterInDM(channel);
  _initialize;
  [][0] = channel;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    const tmp6 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
};