// === Module 12582: ChannelCallSingleController ===

// Module 12582 (ChannelCallSingleController)
import closure_3 from "noop" /* 19 */;
import closure_4 from "reset" /* 4652 */;
import closure_5 from "fetchFingerprint" /* 1218 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4544 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/ChannelCallSingleController.tsx");

export const ChannelCallSingleController = function ChannelCallSingleController(selectedParticipant) {
  selectedParticipant = selectedParticipant.selectedParticipant;
  const channel = selectedParticipant.channel;
  const items = [channel.id];
  const effect = React.useEffect(() => {
    let obj = channel(closure_1_2[6]);
    obj = { video_layout: "focus" };
    const merged = Object.assign(selectedParticipant(closure_1_2[7]).collectVoiceAnalyticsMetadata(channel.id));
    obj.track(closure_1_6.VIDEO_LAYOUT_TOGGLED, obj);
  }, items);
  selectedParticipant(589);
  [][0] = closure_4;
  const type = selectedParticipant.type;
  if (ParticipantTypes.STREAM === type) {
    if (null == tmp4) {
      return null;
    } else {
      let tmp18 = channel;
      tmp18 = tmp18(selectedParticipant.user.id === tmp15 ? 12583 : 12585);
      let obj = { participant: null, channel: null };
      obj[0] = selectedParticipant;
      obj[1] = channel;
      <tmp18 participant={null} channel={null} />;
      const tmp17 = jsx;
    }
  } else if (tmp5.USER === type) {
    obj = { participant: null, channel: null };
    obj[0] = selectedParticipant;
    obj[1] = channel;
    return jsx(channel(12586), { participant: null, channel: null });
  } else if (tmp5.HIDDEN_STREAM === type) {
    return null;
  } else if (tmp5.ACTIVITY === type) {
    const _Error = Error;
    error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
};