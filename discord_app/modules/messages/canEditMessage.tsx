// === Module 11746: canEditMessage ===

// Module 11746 (canEditMessage)
import MessageRecordUtils from "MessageRecordUtils" /* 4783 */;
import isSystemMessageDefault from "isSystemMessage" /* 7270 */;
import isForwardMessageDefault from "isForwardMessage" /* 7302 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ MessageFlags: c3, MessageStates: closure_4, MessageTypes: hasOwnProperty } = Constants);
let result = size.fileFinishedImporting("modules/messages/canEditMessage.tsx");

export default function canEditMessage(author, id) {
  let tmp = null != id;
  if (tmp) {
    let tmp3 = author.author.id === id;
    if (tmp3) {
      let tmp5 = author.state === constants2.SENT;
      if (tmp5) {
        const tmp8 = isSystemMessageDefault(author);
        let tmp9 = !tmp8;
        if (!tmp8) {
          let result = MessageRecordUtils.canEditMessageWithStickers(author);
          if (result) {
            const hasFlagResult = author.hasFlag(constants.IS_VOICE_MESSAGE);
            let tmp14 = !hasFlagResult;
            if (!hasFlagResult) {
              let tmp15 = null == author.referralTrialOfferId;
              if (tmp15) {
                const isPollResult = author.isPoll();
                let tmp17 = !isPollResult;
                if (!isPollResult) {
                  const tmp18 = isForwardMessageDefault(author);
                  let tmp19 = !tmp18;
                  if (!tmp18) {
                    tmp19 = author.type !== constants3.MEDIA_MENTION_MESSAGE;
                  }
                  tmp17 = tmp19;
                }
                tmp15 = tmp17;
              }
              tmp14 = tmp15;
            }
            result = tmp14;
          }
          tmp9 = result;
        }
        tmp5 = tmp9;
      }
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
};