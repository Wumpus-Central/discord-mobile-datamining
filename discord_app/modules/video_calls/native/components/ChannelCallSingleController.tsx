// === Module 9706: ChannelCallSingleController ===

// Module 9706 (ChannelCallSingleController)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import CallConstants from "CallConstants" /* 4911 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const ParticipantTypes = CallConstants.ParticipantTypes;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedParticipant) => {
  let tmp4;
  let tmp5;
  const tmp = selectedParticipant;
  let obj = selectedParticipant(576);
  const cResult = obj.c(14);
  selectedParticipant = selectedParticipant.selectedParticipant;
  const channel = selectedParticipant.channel;
  if (cResult[0] !== channel.id) {
    const fn = function p() {
      const track = AnalyticsUtilsDefault.track;
      const VIDEO_LAYOUT_TOGGLED = AnalyticEvents.VIDEO_LAYOUT_TOGGLED;
      const obj = { video_layout: "focus" };
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
      track(VIDEO_LAYOUT_TOGGLED, obj);
    };
    const items = [channel.id];
    cResult[0] = channel.id;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApplicationStreamingStore];
    cResult[3] = items1;
  }
  if (cResult[4] !== selectedParticipant.id) {
    class S {
      constructor() {
        return ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipant.id);
      }
    }
    cResult[4] = selectedParticipant.id;
    cResult[5] = S;
  } else {
    class S {
      constructor() {
        return ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipant.id);
      }
    }
  }
  tmp(504);
  if (ParticipantTypes.STREAM === selectedParticipant.type) {
    class S {
      constructor() {
        return ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipant.id);
      }
    }
    const id = selectedParticipant.user.id;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          return ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipant.id);
        }
      }
      const id1 = AuthenticationStore.getId();
      cResult[6] = id1;
    } else {
      class S {
        constructor() {
          return ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipant.id);
        }
      }
    }
    if (null != tmp11) {
      class S {
        constructor() {
          return ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipant.id);
        }
      }
      if (cResult[7] === channel) {
        class S {
          constructor() {
            return ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipant.id);
          }
        }
      }
      cResult[7] = channel;
      cResult[8] = tmp15;
      cResult[9] = selectedParticipant;
      cResult[10] = jsx(channel(tmp15 ? 9707 : 9709), { participant: selectedParticipant, channel });
      const tmp17Result = jsx(channel(tmp15 ? 9707 : 9709), { participant: selectedParticipant, channel });
    }
    return null;
  } else {
    class S {
      constructor() {
        return ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipant.id);
      }
    }
  }
}) : (function(selectedParticipant) {
  selectedParticipant = selectedParticipant.selectedParticipant;
  const channel = selectedParticipant.channel;
  const items = [channel.id];
  const effect = react.useEffect(() => {
    const track = AnalyticsUtilsDefault.track;
    const VIDEO_LAYOUT_TOGGLED = AnalyticEvents.VIDEO_LAYOUT_TOGGLED;
    const obj = { video_layout: "focus" };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
    track(VIDEO_LAYOUT_TOGGLED, obj);
  }, items);
  selectedParticipant(504);
  [][0] = ApplicationStreamingStore;
  const type = selectedParticipant.type;
  if (ParticipantTypes.STREAM === type) {
    const id = selectedParticipant.user.id;
    let tmp15Result = null;
    if (null != tmp4) {
      tmp15Result = jsx(channel(id === tmp13 ? 9707 : 9709), { participant: selectedParticipant, channel });
    }
    return tmp15Result;
  } else if (ParticipantTypes.USER === type) {
    return jsx(channel(9710), { participant: selectedParticipant, channel });
  } else if (ParticipantTypes.HIDDEN_STREAM === type) {
    return null;
  } else if (ParticipantTypes.ACTIVITY === type) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallSingleController.tsx");

export const ChannelCallSingleController = tmp2;