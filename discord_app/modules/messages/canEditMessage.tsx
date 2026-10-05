// discord_app/modules/messages/canEditMessage.tsx
import MessageRecordUtils from "MessageRecordUtils.tsx";
import isSystemMessageDefault from "isSystemMessage.tsx";
import isForwardMessageDefault from "../forwarding/isForwardMessage.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
({ MessageFlags: c3, MessageStates: closure_4, MessageTypes: hasOwnProperty } = Constants);
let result = size.fileFinishedImporting("modules/messages/canEditMessage.tsx");

export default function canEditMessage(author, id) {
  let tmp = null != id;
  if (tmp) {
    let tmp3 = author.author.id === id;
    if (tmp3) {
      let tmp5 = author.state === constants2.SENT;
      if (tmp5) {
        let tmp9 = !isSystemMessageDefault(author);
        isSystemMessageDefault(author);
        if (tmp9) {
          const obj = MessageRecordUtils;
          let result = obj.canEditMessageWithStickers(author);
          if (result) {
            let tmp14 = !author.hasFlag(constants.IS_VOICE_MESSAGE);
            author.hasFlag(constants.IS_VOICE_MESSAGE);
            if (tmp14) {
              let tmp15 = null == author.referralTrialOfferId;
              if (tmp15) {
                let tmp17 = !author.isPoll();
                author.isPoll();
                if (tmp17) {
                  let tmp19 = !isForwardMessageDefault(author);
                  isForwardMessageDefault(author);
                  if (tmp19) {
                    tmp19 = author.type !== hasOwnProperty.MEDIA_MENTION_MESSAGE;
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
}
