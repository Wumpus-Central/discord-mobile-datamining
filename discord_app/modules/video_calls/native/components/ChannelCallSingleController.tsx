// discord_app/modules/video_calls/native/components/ChannelCallSingleController.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../../../app_analytics/AppAnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ParticipantTypes = fn(4581).ParticipantTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallSingleController.tsx");

export const ChannelCallSingleController = function ChannelCallSingleController(selectedParticipant) {
  selectedParticipant = selectedParticipant.selectedParticipant;
  const channel = selectedParticipant.channel;
  const items = [channel.id];
  const effect = noop.useEffect(() => {
    const obj = { video_layout: "focus" };
    const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
    obj.track(AnalyticEvents.VIDEO_LAYOUT_TOGGLED, obj);
  }, items);
  selectedParticipant(504);
  [][0] = ApplicationStreamingStore;
  const type = selectedParticipant.type;
  if (ParticipantTypes.STREAM === type) {
    if (null == tmp4) {
      return null;
    } else {
      let tmp18 = channel;
      tmp18 = tmp18(selectedParticipant.user.id === tmp15 ? 10023 : 10025);
      let obj = { participant: selectedParticipant, channel };
      <tmp18 participant={selectedParticipant} channel={channel} />;
    }
  } else if (ParticipantTypes.USER === type) {
    obj = { participant: selectedParticipant, channel };
    return jsx(channel(10026), { participant: selectedParticipant, channel });
  } else if (ParticipantTypes.HIDDEN_STREAM === type) {
    return null;
  } else if (ParticipantTypes.ACTIVITY === type) {
    const _Error = Error;
    const error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
};
