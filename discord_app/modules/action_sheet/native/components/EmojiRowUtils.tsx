// === Module 12779: EmojiRowUtils ===

// Module 12779 (EmojiRowUtils)
import FlagUtils from "FlagUtils" /* 1403 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

({ MessageFlags: c2, MessageStates: c3, MessageTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/action_sheet/native/components/EmojiRowUtils.tsx");

export const shouldShowEmojiRow = function shouldShowEmojiRow(arg0, message, isActiveChannelOrUnarchivableThread) {
  let tmp = arg0;
  if (arg0) {
    tmp = isActiveChannelOrUnarchivableThread;
  }
  if (tmp) {
    tmp = message.state !== constants2.SEND_FAILED;
  }
  if (tmp) {
    tmp = message.state !== constants2.SENDING;
  }
  if (tmp) {
    tmp = message.type !== constants3.THREAD_STARTER_MESSAGE;
  }
  if (tmp) {
    tmp = !FlagUtils.hasFlag(message.flags, constants.EPHEMERAL);
  }
  return tmp;
};