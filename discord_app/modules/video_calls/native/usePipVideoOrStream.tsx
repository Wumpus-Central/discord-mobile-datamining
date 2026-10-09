// === Module 10825: usePipVideoOrStream ===

// Module 10825 (usePipVideoOrStream)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4937 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 10815 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6043 */;
import VideoSpeakerStore from "VideoSpeakerStore" /* 10826 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5894 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;

require = fn;
const CallConstants = fn(5114);
({ isStreamParticipant: closure_11, isUserParticipant: closure_12, ParticipantTypes: map1 } = CallConstants);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePipVideoOrStream(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, VideoSpeakerStore, ApplicationStreamingStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      if (null != _undefined) {
        let videoParticipants = ChannelRTCStore.getVideoParticipants(_undefined);
      } else {
        videoParticipants = [];
      }
      let selectedParticipant = null;
      if (null != _undefined) {
        selectedParticipant = ChannelRTCStore.getSelectedParticipant(_undefined);
      }
      const found = videoParticipants.find((type) => type.type === constants.USER && !type.localVideoDisabled);
      if (null != _undefined) {
        let videoParticipants1 = ChannelRTCStore.getVideoParticipants(_undefined);
      } else {
        videoParticipants1 = [];
      }
      let participant = null;
      const found1 = videoParticipants1.find((id) => {
        let tmp = id.id !== id.getId();
        if (tmp) {
          const tmp3 = closure_1_12(id);
          let localVideoDisabled = !tmp3;
          if (tmp3) {
            localVideoDisabled = id.localVideoDisabled;
          }
          tmp = localVideoDisabled;
        }
        return tmp;
      });
      if (null != _undefined) {
        participant = ChannelRTCStore.getParticipant(_undefined, VideoSpeakerStore.getSpeaker(_undefined));
      }
      if (participant == null) {
        participant = found1;
      }
      if (!__initData(participant)) {
        let tmp8 = participant;
      } else {
        tmp8 = null;
      }
      if (null != _undefined) {
        let allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(_undefined);
      } else {
        allActiveStreamsForChannel = [];
      }
      c0 = tmp8;
      let tmp10 = tmp8;
      if (closure_2_11(tmp8)) {
        if (allActiveStreamsForChannel.filter((streamType) => {
          let id;
          const obj = _undefined(dependencyMap[11]);
          const obj2 = { streamType: streamType.streamType, guildId: streamType.guildId, channelId: streamType.channelId, ownerId: streamType.ownerId };
          if (_undefined != null) {
            id = _undefined.id;
          }
          return _undefined(dependencyMap[11]).encodeStreamKey({ streamType: streamType.streamType, guildId: streamType.guildId, channelId: streamType.channelId, ownerId: streamType.ownerId }) === id;
        }).length <= 0) {
          c0 = undefined;
        }
        tmp10 = tmp8;
      }
      let tmp11 = tmp10;
      if (tmp10 == null) {
        tmp11 = found;
      }
      let isModalOpenResult = null != _undefined && null != selectedParticipant;
      if (isModalOpenResult) {
        let id;
        if (tmp10 != null) {
          id = tmp10.id;
        }
        isModalOpenResult = selectedParticipant.id === id;
      }
      if (isModalOpenResult) {
        isModalOpenResult = null != tmp11;
      }
      if (isModalOpenResult) {
        let id1;
        if (tmp10 != null) {
          id1 = tmp10.id;
        }
        isModalOpenResult = tmp11.id === id1;
      }
      if (isModalOpenResult) {
        isModalOpenResult = NavigationRouteUtils.isModalOpen(ChannelCallModalDefault);
      }
      if (isModalOpenResult) {
        isModalOpenResult = !ChannelRTCStore.getChatOpen(_undefined);
      }
      if (isModalOpenResult) {
        tmp11 = found;
      }
      let tmp18 = null;
      if (null != tmp11) {
        tmp18 = null;
        if (tmp11.type !== constants.ACTIVITY) {
          tmp18 = null;
          if (null != tmp11.streamId) {
            tmp18 = tmp11;
          }
        }
      }
      return tmp18;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStores(first, tmp8, tmp9);
}) : (function usePipVideoOrStream(arg0) {
  _require = arg0;
  const items = [ChannelRTCStore, VideoSpeakerStore, ApplicationStreamingStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (null != _undefined) {
      let videoParticipants = ChannelRTCStore.getVideoParticipants(_undefined);
    } else {
      videoParticipants = [];
    }
    let selectedParticipant = null;
    if (null != _undefined) {
      selectedParticipant = ChannelRTCStore.getSelectedParticipant(_undefined);
    }
    const found = videoParticipants.find((type) => type.type === constants.USER && !type.localVideoDisabled);
    if (null != _undefined) {
      let videoParticipants1 = ChannelRTCStore.getVideoParticipants(_undefined);
    } else {
      videoParticipants1 = [];
    }
    let participant = null;
    const found1 = videoParticipants1.find((id) => {
      let tmp = id.id !== id.getId();
      if (tmp) {
        const tmp3 = closure_1_12(id);
        let localVideoDisabled = !tmp3;
        if (tmp3) {
          localVideoDisabled = id.localVideoDisabled;
        }
        tmp = localVideoDisabled;
      }
      return tmp;
    });
    if (null != _undefined) {
      participant = ChannelRTCStore.getParticipant(_undefined, VideoSpeakerStore.getSpeaker(_undefined));
    }
    if (participant == null) {
      participant = found1;
    }
    if (!__initData(participant)) {
      let tmp8 = participant;
    } else {
      tmp8 = null;
    }
    if (null != _undefined) {
      let allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(_undefined);
    } else {
      allActiveStreamsForChannel = [];
    }
    c0 = tmp8;
    let tmp10 = tmp8;
    if (closure_2_11(tmp8)) {
      if (allActiveStreamsForChannel.filter((streamType) => {
        id = undefined;
        const obj = _undefined(dependencyMap[11]);
        const obj2 = { streamType: streamType.streamType, guildId: streamType.guildId, channelId: streamType.channelId, ownerId: streamType.ownerId };
        if (_undefined != null) {
          id = _undefined.id;
        }
        return _undefined(dependencyMap[11]).encodeStreamKey({ streamType: streamType.streamType, guildId: streamType.guildId, channelId: streamType.channelId, ownerId: streamType.ownerId }) === id;
      }).length <= 0) {
        c0 = undefined;
      }
      tmp10 = tmp8;
    }
    let tmp11 = tmp10;
    if (tmp10 == null) {
      tmp11 = found;
    }
    let isModalOpenResult = null != _undefined && null != selectedParticipant;
    if (isModalOpenResult) {
      let id;
      if (tmp10 != null) {
        id = tmp10.id;
      }
      isModalOpenResult = selectedParticipant.id === id;
    }
    if (isModalOpenResult) {
      isModalOpenResult = null != tmp11;
    }
    if (isModalOpenResult) {
      let id1;
      if (tmp10 != null) {
        id1 = tmp10.id;
      }
      isModalOpenResult = tmp11.id === id1;
    }
    if (isModalOpenResult) {
      isModalOpenResult = NavigationRouteUtils.isModalOpen(ChannelCallModalDefault);
    }
    if (isModalOpenResult) {
      isModalOpenResult = !ChannelRTCStore.getChatOpen(_undefined);
    }
    if (isModalOpenResult) {
      tmp11 = found;
    }
    let tmp18 = null;
    if (null != tmp11) {
      tmp18 = null;
      if (tmp11.type !== constants.ACTIVITY) {
        tmp18 = null;
        if (null != tmp11.streamId) {
          tmp18 = tmp11;
        }
      }
    }
    return tmp18;
  }, items1);
});
let closure_14 = tmp3;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/usePipVideoOrStream.tsx");

export default tmp3;
export const useHasPipParticipant = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasPipParticipant(isActivityViewFocused) {
  const cResult = isActivityViewFocused(576).c(8);
  isActivityViewFocused = isActivityViewFocused.isActivityViewFocused;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    const fn = function o() {
      return channelId.getChannelId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = isActivityViewFocused(576);
  const stateFromStores = isActivityViewFocused(504).useStateFromStores(tmp4, tmp5);
  const tmp8Result = closure_14(stateFromStores);
  dependencyMap = tmp8Result;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore, EmbeddedActivitiesStore, MediaEngineStore];
    cResult[2] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === isActivityViewFocused) {
      if (cResult[5] === tmp8Result) {
        let tmp15 = cResult[6];
        let tmp16 = cResult[7];
      }
      return tmp(504).useStateFromStores(tmp11, tmp15, tmp16);
    }
  }
  const fn2 = function v() {
    if (null == ChannelStore.getChannel(stateFromStores)) {
      return false;
    } else {
      let isLocalVideoDisabledResult = null != closure_2;
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      if (isLocalVideoDisabledResult) {
        isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(closure_2.id);
      }
      let tmp6 = null != currentEmbeddedActivity;
      if (tmp6) {
        tmp6 = !isActivityViewFocused;
      }
      if (!tmp6) {
        tmp6 = null != closure_2 && null != closure_2.streamId && !isLocalVideoDisabledResult;
        const tmp8 = null != closure_2 && null != closure_2.streamId && !isLocalVideoDisabledResult;
      }
      return tmp6;
    }
  };
  const items2 = [stateFromStores, tmp8Result, isActivityViewFocused];
  cResult[3] = stateFromStores;
  cResult[4] = isActivityViewFocused;
  cResult[5] = tmp8Result;
  cResult[6] = fn2;
  cResult[7] = items2;
  tmp16 = items2;
  tmp15 = fn2;
  const tmpResult = isActivityViewFocused(504);
}) : (function useHasPipParticipant(isActivityViewFocused) {
  isActivityViewFocused = isActivityViewFocused.isActivityViewFocused;
  const items = [RTCConnectionStore];
  const stateFromStores = isActivityViewFocused(504).useStateFromStores(items, () => channelId.getChannelId());
  const tmp4Result = closure_14(stateFromStores);
  dependencyMap = tmp4Result;
  const obj = isActivityViewFocused(504);
  const items1 = [ChannelStore, EmbeddedActivitiesStore, MediaEngineStore];
  const items2 = [stateFromStores, tmp4Result, isActivityViewFocused];
  return isActivityViewFocused(504).useStateFromStores(items1, () => {
    if (null == ChannelStore.getChannel(stateFromStores)) {
      return false;
    } else {
      let isLocalVideoDisabledResult = null != closure_2;
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      if (isLocalVideoDisabledResult) {
        isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(closure_2.id);
      }
      let tmp6 = null != currentEmbeddedActivity;
      if (tmp6) {
        tmp6 = !isActivityViewFocused;
      }
      if (!tmp6) {
        tmp6 = null != closure_2 && null != closure_2.streamId && !isLocalVideoDisabledResult;
        const tmp8 = null != closure_2 && null != closure_2.streamId && !isLocalVideoDisabledResult;
      }
      return tmp6;
    }
  }, items2);
});