// discord_app/modules/voice_panel/native/prejoin/VoicePanelPreJoinUtils.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import shallowEqualDefault from "../../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";

const result = obj132.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinUtils.tsx");

export const areVoicePanelPreJoinContentPropsEqual = function areVoicePanelPreJoinContentPropsEqual(streamingMembers) {
  if (null != streamingMembers) {
    if (null != arg1) {
      if (shallowEqualDefault(streamingMembers, arg1, ["streamingMembers"])) {
        let num = 0;
        streamingMembers = streamingMembers.streamingMembers;
        for (const item10013 of streamingMembers) {
          let tmp5 = arg1.streamingMembers[num];
          let tmp6 = tmp5;
          if (null == tmp5) {
            obj.return();
            let flag3 = false;
            return false;
          } else {
            if (item10013[0] === tmp6[0]) {
              if (item10013[1] === tmp6[1]) {
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