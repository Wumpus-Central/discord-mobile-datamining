// === Module 9706: ChannelCallSingleController ===

// Module 9706 (ChannelCallSingleController)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ParticipantTypes = fn(4911).ParticipantTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallSingleController.tsx");

export const ChannelCallSingleController = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedParticipant) => {
  const cResult = selectedParticipant(576).c(14);
  selectedParticipant = selectedParticipant.selectedParticipant;
  const channel = selectedParticipant.channel;
  if (cResult[0] !== channel.id) {
    const fn = function p() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { video_layout: "focus" };
      const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
      obj.track(AnalyticEvents.VIDEO_LAYOUT_TOGGLED, obj2);
    };
    const items = [channel.id];
    cResult[0] = channel.id;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApplicationStreamingStore];
    cResult[3] = items1;
  }
  if (cResult[4] !== selectedParticipant.id) {
    class S {
      constructor() {
        return closure_4.getActiveStreamForStreamKey(selectedParticipant.id);
      }
    }
    cResult[4] = selectedParticipant.id;
    cResult[5] = S;
  } else {
    class S {
      constructor() {
        return closure_4.getActiveStreamForStreamKey(selectedParticipant.id);
      }
    }
  }
  selectedParticipant(504);
  if (ParticipantTypes.STREAM === selectedParticipant.type) {
    class S {
      constructor() {
        return closure_4.getActiveStreamForStreamKey(selectedParticipant.id);
      }
    }
    const id = selectedParticipant.user.id;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          return closure_4.getActiveStreamForStreamKey(selectedParticipant.id);
        }
      }
      const id1 = AuthenticationStore.getId();
      cResult[6] = id1;
    } else {
      class S {
        constructor() {
          return closure_4.getActiveStreamForStreamKey(selectedParticipant.id);
        }
      }
    }
    if (null == tmp11) {
      class S {
        constructor() {
          return closure_4.getActiveStreamForStreamKey(selectedParticipant.id);
        }
      }
    } else {
      class S {
        constructor() {
          return closure_4.getActiveStreamForStreamKey(selectedParticipant.id);
        }
      }
      if (cResult[7] === channel) {
        class S {
          constructor() {
            return closure_4.getActiveStreamForStreamKey(selectedParticipant.id);
          }
        }
      }
      let tmp17 = channel;
      tmp17 = tmp17(tmp15 ? 9707 : 9709);
      let obj2 = { participant: selectedParticipant, channel };
      const tmp16Result = <tmp17 participant={selectedParticipant} channel={channel} />;
      cResult[7] = channel;
      cResult[8] = tmp15;
      cResult[9] = selectedParticipant;
      cResult[10] = tmp16Result;
    }
  } else {
    class S {
      constructor() {
        return closure_4.getActiveStreamForStreamKey(selectedParticipant.id);
      }
    }
  }
  let obj = selectedParticipant(576);
}) : ((selectedParticipant) => {
  selectedParticipant = selectedParticipant.selectedParticipant;
  const channel = selectedParticipant.channel;
  const items = [channel.id];
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
      tmp18 = tmp18(selectedParticipant.user.id === tmp15 ? 9707 : 9709);
      let obj2 = { participant: selectedParticipant, channel };
      <tmp18 participant={selectedParticipant} channel={channel} />;
    }
  } else if (ParticipantTypes.USER === type) {
    let obj = { participant: selectedParticipant, channel };
    return jsx(channel(9710), { participant: selectedParticipant, channel });
  } else if (ParticipantTypes.HIDDEN_STREAM === type) {
    return null;
  } else if (ParticipantTypes.ACTIVITY === type) {
    const _Error = Error;
    const error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
});