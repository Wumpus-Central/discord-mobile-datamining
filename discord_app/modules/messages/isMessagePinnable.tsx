// === Module 11284: isMessagePinnable ===

// Module 11284 (isMessagePinnable)
import useCanUnarchiveThread from "useCanUnarchiveThread" /* 6062 */;
import isSystemMessageDefault from "isSystemMessage" /* 6063 */;
import closure_3 from "getUncachedChannelPermissions" /* 4089 */;
import ME from "ME" /* 676 */;

require = arg1;
({ ChannelTypes: c4, Permissions: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/isMessagePinnable.tsx");

export default function isMessagePinnable(arg0, isSystemDM) {
  const isSystemDMResult = isSystemDM.isSystemDM();
  let isActiveChannelOrUnarchivableThread = !isSystemDMResult;
  if (!isSystemDMResult) {
    isActiveChannelOrUnarchivableThread = !isSystemMessageDefault(arg0);
  }
  let isPrivateResult = closure_3.can(constants2.PIN_MESSAGES, isSystemDM) && closure_3.can(constants2.READ_MESSAGE_HISTORY, isSystemDM);
  if (isActiveChannelOrUnarchivableThread) {
    if (!isPrivateResult) {
      isPrivateResult = isSystemDM.isPrivate();
    }
    isActiveChannelOrUnarchivableThread = isPrivateResult;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = useCanUnarchiveThread.getIsActiveChannelOrUnarchivableThread(isSystemDM);
    const obj2 = useCanUnarchiveThread;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isSystemDM.type !== constants.GUILD_VOICE;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isSystemDM.type !== constants.GUILD_STAGE_VOICE;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isSystemDM.type !== constants.MEDIA_THREAD;
  }
  return isActiveChannelOrUnarchivableThread;
};