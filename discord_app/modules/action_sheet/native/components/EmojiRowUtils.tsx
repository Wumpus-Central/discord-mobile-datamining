// discord_app/modules/action_sheet/native/components/EmojiRowUtils.tsx
import ME from "ME";

let c3;
let c4;
let obj1;
({ MessageFlags: obj1, MessageStates: c3, MessageTypes: c4 } = ME);
const result = require("set").fileFinishedImporting("modules/action_sheet/native/components/EmojiRowUtils.tsx");

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
    tmp = !require("../../../../../discord_common/js/shared/utils/FlagUtils.tsx") /* hasFlag */.hasFlag(message.flags, constants.EPHEMERAL);
    const obj = require("../../../../../discord_common/js/shared/utils/FlagUtils.tsx") /* hasFlag */;
  }
  return tmp;
};