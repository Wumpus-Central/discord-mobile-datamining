// discord_app/modules/video_calls/native/usePipVideoOrStream.tsx
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ChannelCallModalDefault from "components/ChannelCallModal.tsx";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";
import VideoSpeakerStore from "../../calls/VideoSpeakerStore.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";

require = fn;
const CallConstants = fn(4581);
({ isStreamParticipant: closure_11, isUserParticipant: closure_12, ParticipantTypes: map1 } = CallConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/usePipVideoOrStream.tsx");

export default function usePipVideoOrStream(arg0) {
  _require = arg0;
  const items = [ChannelRTCStore, VideoSpeakerStore, ApplicationStreamingStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      if (null != isActivityViewFocused) {
        let videoParticipants = ChannelRTCStore.getVideoParticipants(isActivityViewFocused);
      } else {
        videoParticipants = [];
      }
      let selectedParticipant = null;
      if (null != isActivityViewFocused) {
        selectedParticipant = ChannelRTCStore.getSelectedParticipant(isActivityViewFocused);
      }
      const found = videoParticipants.find((type) => type.type === constants.USER && !type.localVideoDisabled);
      if (null != isActivityViewFocused) {
        let videoParticipants1 = ChannelRTCStore.getVideoParticipants(isActivityViewFocused);
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
      if (null != isActivityViewFocused) {
        participant = ChannelRTCStore.getParticipant(
          isActivityViewFocused,
          VideoSpeakerStore.getSpeaker(isActivityViewFocused),
        );
      }
      if (participant == null) {
        participant = found1;
      }
      let tmp8 = participant;
      if (closure_2_12(participant)) {
        let tmp9 = null;
        if (!participant.localVideoDisabled) {
          tmp9 = participant;
        }
        tmp8 = tmp9;
      }
      if (null != isActivityViewFocused) {
        let allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(isActivityViewFocused);
      } else {
        allActiveStreamsForChannel = [];
      }
      c0 = tmp8;
      let tmp11 = tmp8;
      if (closure_2_11(tmp8)) {
        if (
          allActiveStreamsForChannel.filter((streamType) => {
            isActivityViewFocused(stateFromStores1[10]);
            const obj = {
              streamType: streamType.streamType,
              guildId: streamType.guildId,
              channelId: streamType.channelId,
              ownerId: streamType.ownerId,
            };
            id = undefined;
            if (_undefined != null) {
              id = _undefined.id;
            }
            return obj.encodeStreamKey(obj) === id;
          }).length <= 0
        ) {
          c0 = undefined;
        }
        tmp11 = tmp8;
      }
      let tmp12 = tmp11;
      if (tmp11 == null) {
        tmp12 = found;
      }
      let isModalOpenResult = null != selectedParticipant;
      if (isModalOpenResult) {
        let id;
        if (tmp11 != null) {
          id = tmp11.id;
        }
        isModalOpenResult = selectedParticipant.id === id;
      }
      if (isModalOpenResult) {
        isModalOpenResult = null != tmp12;
      }
      if (isModalOpenResult) {
        let id1;
        if (tmp11 != null) {
          id1 = tmp11.id;
        }
        isModalOpenResult = tmp12.id === id1;
      }
      if (isModalOpenResult) {
        isModalOpenResult = NavigationRouteUtils.isModalOpen(ChannelCallModalDefault);
      }
      if (isModalOpenResult) {
        tmp12 = found;
      }
      let tmp19 = null;
      if (null != tmp12) {
        tmp19 = null;
        if (tmp12.type !== constants.ACTIVITY) {
          tmp19 = null;
          if (null != tmp12.streamId) {
            tmp19 = tmp12;
          }
        }
      }
      return tmp19;
    },
    items1,
  );
}
export const useHasPipParticipant = function useHasPipParticipant(isActivityViewFocused) {
  isActivityViewFocused = isActivityViewFocused.isActivityViewFocused;
  let stateFromStores1;
  const items = [RTCConnectionStore];
  const stateFromStores = isActivityViewFocused(stateFromStores1[9]).useStateFromStores(items, () =>
    channelId.getChannelId(),
  );
  closure_129_0 = tmp4;
  let tmpResult = tmp(tmp2[9]);
  const items1 = [ChannelRTCStore, VideoSpeakerStore, ApplicationStreamingStore];
  const items2 = [stateFromStores];
  stateFromStores1 = tmpResult.useStateFromStores(
    items1,
    () => {
      if (null != isActivityViewFocused) {
        let videoParticipants = ChannelRTCStore.getVideoParticipants(isActivityViewFocused);
      } else {
        videoParticipants = [];
      }
      let selectedParticipant = null;
      if (null != isActivityViewFocused) {
        selectedParticipant = ChannelRTCStore.getSelectedParticipant(isActivityViewFocused);
      }
      const found = videoParticipants.find((type) => type.type === constants.USER && !type.localVideoDisabled);
      if (null != isActivityViewFocused) {
        let videoParticipants1 = ChannelRTCStore.getVideoParticipants(isActivityViewFocused);
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
      if (null != isActivityViewFocused) {
        participant = ChannelRTCStore.getParticipant(
          isActivityViewFocused,
          VideoSpeakerStore.getSpeaker(isActivityViewFocused),
        );
      }
      if (participant == null) {
        participant = found1;
      }
      let tmp8 = participant;
      if (closure_2_12(participant)) {
        let tmp9 = null;
        if (!participant.localVideoDisabled) {
          tmp9 = participant;
        }
        tmp8 = tmp9;
      }
      if (null != isActivityViewFocused) {
        let allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(isActivityViewFocused);
      } else {
        allActiveStreamsForChannel = [];
      }
      c0 = tmp8;
      let tmp11 = tmp8;
      if (closure_2_11(tmp8)) {
        if (
          allActiveStreamsForChannel.filter((streamType) => {
            isActivityViewFocused(stateFromStores1[10]);
            const obj = {
              streamType: streamType.streamType,
              guildId: streamType.guildId,
              channelId: streamType.channelId,
              ownerId: streamType.ownerId,
            };
            id = undefined;
            if (_undefined != null) {
              id = _undefined.id;
            }
            return obj.encodeStreamKey(obj) === id;
          }).length <= 0
        ) {
          c0 = undefined;
        }
        tmp11 = tmp8;
      }
      let tmp12 = tmp11;
      if (tmp11 == null) {
        tmp12 = found;
      }
      let isModalOpenResult = null != selectedParticipant;
      if (isModalOpenResult) {
        let id;
        if (tmp11 != null) {
          id = tmp11.id;
        }
        isModalOpenResult = selectedParticipant.id === id;
      }
      if (isModalOpenResult) {
        isModalOpenResult = null != tmp12;
      }
      if (isModalOpenResult) {
        let id1;
        if (tmp11 != null) {
          id1 = tmp11.id;
        }
        isModalOpenResult = tmp12.id === id1;
      }
      if (isModalOpenResult) {
        isModalOpenResult = NavigationRouteUtils.isModalOpen(ChannelCallModalDefault);
      }
      if (isModalOpenResult) {
        tmp12 = found;
      }
      let tmp19 = null;
      if (null != tmp12) {
        tmp19 = null;
        if (tmp12.type !== constants.ACTIVITY) {
          tmp19 = null;
          if (null != tmp12.streamId) {
            tmp19 = tmp12;
          }
        }
      }
      return tmp19;
    },
    items2,
  );
  tmpResult = tmp(tmp2[9]);
  const items3 = [ChannelStore, EmbeddedActivitiesStore, MediaEngineStore];
  const items4 = [stateFromStores, stateFromStores1, isActivityViewFocused];
  return tmpResult.useStateFromStores(
    items3,
    () => {
      if (null == ChannelStore.getChannel(stateFromStores)) {
        return false;
      } else {
        let isLocalVideoDisabledResult = null != stateFromStores1;
        const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
        if (isLocalVideoDisabledResult) {
          isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(stateFromStores1.id);
        }
        let tmp6 = null != currentEmbeddedActivity;
        if (tmp6) {
          tmp6 = !isActivityViewFocused;
        }
        if (!tmp6) {
          tmp6 = null != stateFromStores1 && null != stateFromStores1.streamId && !isLocalVideoDisabledResult;
          const tmp8 = null != stateFromStores1 && null != stateFromStores1.streamId && !isLocalVideoDisabledResult;
        }
        return tmp6;
      }
    },
    items4,
  );
};
