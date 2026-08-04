// discord_app/modules/voice_panel/native/prejoin/VoicePanelPreJoinUtils.tsx
const result = require("set").fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinUtils.tsx");

export const areVoicePanelPreJoinContentPropsEqual = function areVoicePanelPreJoinContentPropsEqual(streamingMembers) {
  if (null != streamingMembers) {
    if (null != arg1) {
      if (importDefault(643)(streamingMembers, arg1, ["streamingMembers"])) {
        let num = 0;
        streamingMembers = streamingMembers.streamingMembers;
        for (const item10013 of streamingMembers) {
          let tmp3 = item10013;
          let tmp4 = num;
          let tmp5 = arg1.streamingMembers[num];
          let tmp6 = tmp5;
          if (null == tmp5) {
            let tmp13 = obj;
            obj.return();
            let flag3 = false;
            return false;
          } else {
            let tmp7 = item10013;
            let tmp8 = tmp5;
            if (tmp3[0] === tmp6[0]) {
              let tmp9 = item10013;
              let tmp10 = tmp5;
              if (tmp3[1] === tmp6[1]) {
                let tmp11 = num;
                num = num + 1;
                continue;
              }
            }
            let tmp12 = obj;
            obj.return();
            let flag2 = false;
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }
  }
  return streamingMembers === arg1;
};