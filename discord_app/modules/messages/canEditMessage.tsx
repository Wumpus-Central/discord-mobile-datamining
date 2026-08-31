// discord_app/modules/messages/canEditMessage.tsx
import set from "../../../_runtime/00002_set.js";
import createMinimalMessageRecord from "MessageRecordUtils.tsx";
import isSystemMessageDefault from "isSystemMessage.tsx";
import ME from "../../Constants.tsx";

({ MessageFlags: c3, MessageStates: c4, MessageTypes: c5 } = ME);
let result = set.fileFinishedImporting("modules/messages/canEditMessage.tsx");

export default function canEditMessage(author) {
  let tmp = null != arg1;
  if (tmp) {
    let tmp3 = author.author.id === arg1;
    if (tmp3) {
      let tmp5 = author.state === constants2.SENT;
      if (tmp5) {
        const tmp8 = isSystemMessageDefault(author);
        let tmp9 = !tmp8;
        if (!tmp8) {
          let result = createMinimalMessageRecord.canEditMessageWithStickers(author);
          if (result) {
            const hasFlagResult = author.hasFlag(constants.IS_VOICE_MESSAGE);
            let tmp14 = !hasFlagResult;
            if (!hasFlagResult) {
              let tmp15 = null == author.referralTrialOfferId;
              if (tmp15) {
                const isPollResult = author.isPoll();
                let tmp17 = !isPollResult;
                if (!isPollResult) {
                  const tmp18 = tmp6(6115)(author);
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
          const obj = createMinimalMessageRecord;
        }
        tmp5 = tmp9;
        tmp6 = importDefault;
      }
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
};