// === Module 11664: isMessagePinnable ===

// Module 11664 (isMessagePinnable)
import ThreadHooks from "ThreadHooks" /* 7269 */;
import isSystemMessageDefault from "isSystemMessage" /* 7270 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
const Constants = fn(1074);
({ ChannelTypes: closure_4, Permissions: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/isMessagePinnable.tsx");

export default function isMessagePinnable(arg0, isSystemDM) {
  const isSystemDMResult = isSystemDM.isSystemDM();
  let isActiveChannelOrUnarchivableThread = !isSystemDMResult;
  if (!isSystemDMResult) {
    isActiveChannelOrUnarchivableThread = !isSystemMessageDefault(arg0);
  }
  let isPrivateResult = PermissionStore.can(constants2.PIN_MESSAGES, isSystemDM) && PermissionStore.can(constants2.READ_MESSAGE_HISTORY, isSystemDM);
  if (isActiveChannelOrUnarchivableThread) {
    if (!isPrivateResult) {
      isPrivateResult = isSystemDM.isPrivate();
    }
    isActiveChannelOrUnarchivableThread = isPrivateResult;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = ThreadHooks.getIsActiveChannelOrUnarchivableThread(isSystemDM);
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