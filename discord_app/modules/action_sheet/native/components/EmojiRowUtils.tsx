// === Module 11529: shouldShowEmojiRow ===

// Module 11529 (shouldShowEmojiRow)
import set from "set" /* 2 */;
import hasFlag from "hasFlag" /* 1398 */;
import ME from "ME" /* 673 */;

({ MessageFlags: obj1, MessageStates: c3, MessageTypes: c4 } = ME);
const result = set.fileFinishedImporting("modules/action_sheet/native/components/EmojiRowUtils.tsx");

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
    const obj = hasFlag;
  }
  return tmp;
};