// discord_app/modules/video_calls/native/components/ChannelCallSingleController.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import reset from "../../../../stores/ApplicationStreamingStore.tsx";
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { ParticipantTypes } from "../../../calls/CallConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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