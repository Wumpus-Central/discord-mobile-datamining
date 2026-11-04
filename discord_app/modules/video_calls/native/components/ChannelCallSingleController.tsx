// === Module 12203: ChannelCallSingleController ===

// Module 12203 (ChannelCallSingleController)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5894 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6849 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const ParticipantTypes = fn(5815).ParticipantTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallSingleController.tsx");

export function ChannelCallSingleController(selectedParticipant) {
  selectedParticipant = selectedParticipant.selectedParticipant;
  const channel = selectedParticipant.channel;
  items = [channel.id];
  const effect = noop.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { video_layout: "focus" };
    const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
    obj.track(AnalyticEvents.VIDEO_LAYOUT_TOGGLED, obj2);
  }, items);
  selectedParticipant(504);
  [][0] = ApplicationStreamingStore;
  const type = selectedParticipant.type;
  if (ParticipantTypes.STREAM === type) {
    if (null == tmp4) {
      return null;
    } else {
      let tmp18 = channel;
      tmp18 = tmp18(selectedParticipant.user.id === tmp15 ? 12204 : 12206);
      let obj2 = { participant: selectedParticipant, channel };
      <tmp18 participant={selectedParticipant} channel={channel} />;
    }
  } else if (ParticipantTypes.USER === type) {
    let obj = { participant: selectedParticipant, channel };
    return jsx(channel(12207), { participant: selectedParticipant, channel });
  } else if (ParticipantTypes.HIDDEN_STREAM === type) {
    return null;
  } else if (ParticipantTypes.ACTIVITY === type) {
    const _Error = Error;
    const error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
}