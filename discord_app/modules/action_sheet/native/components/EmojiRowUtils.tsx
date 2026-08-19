// === Module 10892: shouldShowEmojiRow ===

// Module 10892 (shouldShowEmojiRow)
import obj132 from "obj132" /* 2 */;
import hasFlag from "hasFlag" /* 1403 */;
import ME from "ME" /* 676 */;

({ MessageFlags: obj1, MessageStates: c3, MessageTypes: c4 } = ME);
const result = obj132.fileFinishedImporting("modules/action_sheet/native/components/EmojiRowUtils.tsx");

export const shouldShowEmojiRow = function shouldShowEmojiRow(closure_8, message, closure_10) {
  let tmp = closure_8;
  if (closure_8) {
    tmp = closure_10;
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
    tmp = !hasFlag.hasFlag(message.flags, constants.EPHEMERAL);
  }
  return tmp;
};