// discord_app/modules/action_sheet/native/components/EmojiRowUtils.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import hasFlag from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import ME from "../../../../Constants.tsx";

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