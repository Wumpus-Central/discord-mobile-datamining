// === Module 12583: SingleScreenshare ===

// Module 12583 (SingleScreenshare)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import VoiceChatDrawerState from "VoiceChatDrawerState" /* 8669 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

noopAll;
({ resetFocus: obj1, toggleFocus: c3 } = VoiceChatDrawerState);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BLACK };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default function SingleScreenshare(channel) {
  channel = channel.channel;
  channel(4761)(() => {
    callback();
  });
  const obj = {
    participant: channel.participant,
    onSingleTap() {
      callback2();
    },
    onDoubleTap() {
      closure_1_2();
      const participant = channel(dependencyMap[7]).selectParticipant(channel.id, null);
    },
    containerStyle: null
  };
  const tmp = callback();
  let stageStreamContainer;
  if (channel.isGuildStageVoice()) {
    stageStreamContainer = tmp.stageStreamContainer;
  }
  obj[3] = stageStreamContainer;
  return jsx(channel(12584), {
    participant: channel.participant,
    onSingleTap() {
      callback2();
    },
    onDoubleTap() {
      closure_1_2();
      const participant = channel(dependencyMap[7]).selectParticipant(channel.id, null);
    },
    containerStyle: null
  });
};