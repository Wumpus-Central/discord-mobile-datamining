// discord_app/modules/video_calls/native/components/ChannelCallSingleController.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/ApplicationStreamingStore.tsx";
import closure_5 from "../../../../stores/AuthenticationStore.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { ParticipantTypes } from "../../../calls/CallConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/video_calls/native/components/ChannelCallSingleController.tsx",
);

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
  selectedParticipant(586);
  [][0] = closure_4;
  const type = selectedParticipant.type;
  if (ParticipantTypes.STREAM === type) {
    if (null == tmp4) {
      return null;
    } else {
      let tmp18 = channel;
      tmp18 = tmp18(selectedParticipant.user.id === tmp15 ? 10128 : 10130);
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
    return jsx(channel(10131), { participant: null, channel: null });
  } else if (tmp5.HIDDEN_STREAM === type) {
    return null;
  } else if (tmp5.ACTIVITY === type) {
    const _Error = Error;
    error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
};
