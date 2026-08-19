// === Module 12582: ChannelCallSingleController ===

// Module 12582 (ChannelCallSingleController)
import noop from "noop" /* 19 */;
import reset from "reset" /* 4652 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4544 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/ChannelCallSingleController.tsx");

export const ChannelCallSingleController = function ChannelCallSingleController(selectedParticipant) {
  selectedParticipant = selectedParticipant.selectedParticipant;
  const channel = selectedParticipant.channel;
  const items = [channel.id];
  const effect = React.useEffect(() => {
    channel(dependencyMap[6]);
    const obj = { video_layout: "focus" };
    const merged = Object.assign(selectedParticipant(dependencyMap[7]).collectVoiceAnalyticsMetadata(channel.id));
    obj.track(AnalyticEvents.VIDEO_LAYOUT_TOGGLED, obj);
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
    }
  } else if (ParticipantTypes.USER === type) {
    obj = { participant: null, channel: null };
    obj[0] = selectedParticipant;
    obj[1] = channel;
    return jsx(channel(12586), { participant: null, channel: null });
  } else if (ParticipantTypes.HIDDEN_STREAM === type) {
    return null;
  } else if (ParticipantTypes.ACTIVITY === type) {
    const _Error = Error;
    error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
};