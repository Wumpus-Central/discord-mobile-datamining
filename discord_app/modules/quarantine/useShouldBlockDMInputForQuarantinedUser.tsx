// discord_app/modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx
import closure_2 from "reinjectEphemerals" /* 4994 */;
import { UserFlags } from "ME" /* 676 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { MAX_MESSAGES_ALLOWED_FOR_GREETING } from "../messages/useShowConvoStarterInDM.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

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