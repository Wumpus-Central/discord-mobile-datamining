// discord_app/modules/messages/isMessagePinnable.tsx
import ThreadHooks from "../threads/ThreadHooks.tsx";
import isSystemMessageDefault from "isSystemMessage.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

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
  let isPrivateResult =
    PermissionStore.can(constants2.PIN_MESSAGES, isSystemDM) &&
    PermissionStore.can(constants2.READ_MESSAGE_HISTORY, isSystemDM);
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
}
