// === Module 17163: VoicePanelPreJoinUtils ===

// Module 17163 (VoicePanelPreJoinUtils)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinUtils.tsx");

export const areVoicePanelPreJoinContentPropsEqual = function areVoicePanelPreJoinContentPropsEqual(streamingMembers, arg1) {
  if (null != streamingMembers) {
    if (null != arg1) {
      if (discord_common_shallowEqualDefault(streamingMembers, arg1, ["streamingMembers"])) {
        let num = 0;
        streamingMembers = streamingMembers.streamingMembers;
        for (const item10013 of streamingMembers) {
          let tmp3 = item10013;
          let tmp5 = arg1.streamingMembers[num];
          let tmp6 = tmp5;
          if (null == tmp5) {
            obj.return();
            let flag3 = false;
            return false;
          } else {
            if (tmp3[0] === tmp6[0]) {
              if (tmp3[1] === tmp6[1]) {
                num = num + 1;
                continue;
              }
            }
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