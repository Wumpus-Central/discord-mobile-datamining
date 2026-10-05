// discord_app/modules/action_sheet/native/components/EmojiRowUtils.tsx
import FlagUtils from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c2;
let c3;
let closure_4;
({ MessageFlags: c2, MessageStates: c3, MessageTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/action_sheet/native/components/EmojiRowUtils.tsx");

export const shouldShowEmojiRow = function shouldShowEmojiRow(arg0, message, isActiveChannelOrUnarchivableThread) {
  let tmp =
    arg0 &&
    isActiveChannelOrUnarchivableThread &&
    message.state !== constants2.SEND_FAILED &&
    message.state !== constants2.SENDING &&
    message.type !== constants3.THREAD_STARTER_MESSAGE;
  if (tmp) {
    const obj = FlagUtils;
    tmp = !obj.hasFlag(message.flags, constants.EPHEMERAL);
  }
  return tmp;
};
