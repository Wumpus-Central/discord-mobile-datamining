// discord_app/modules/video_calls/native/components/PictureInPictureVideo.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import useShouldForcePipOrientation from "useShouldForcePipOrientation.tsx";
import usePipDimensionsDefault from "usePipDimensions.tsx";
import useIsViewingActivity from "../../../activities/native/useIsViewingActivity.tsx";
import transitionToActivityDefault from "../../../activities/utils/transitionToActivity.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";
import ChannelCallLifecycleStore from "../ChannelCallLifecycleStore.tsx";

require = fn;
function areParticipantsEqual(arg0, arg1) {
  [, , tmp] = arg0;
  [, , tmp2] = arg1;
  return tmp === tmp2;
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ChannelCallStore = fn(9467);
({ togglePipFocus: map1, useIsVoiceChatFocused: closure_14 } = ChannelCallStore);
const ParticipantTypes = fn(4581).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
fn(4560);
let obj = {
  elevationShadow: null,
  background: null,
  backgroundPipFab: null,
  pip: null,
  pipFab: null,
  avatarContainer: null,
  activityPipContainer: null,
  thermalAlertIconContainer: null,
  thermalAlertIcon: null,
};
let native = fn(1178);
obj.elevationShadow = native.generateBoxShadowStyle(fn(1178).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.background = obj;
const createStyles = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.lg };
obj.backgroundPipFab = createStyles;
obj.pip = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
native = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj.pipFab = native;
obj.avatarContainer = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" };
obj.activityPipContainer = { flex: 1, width: "100%" };
obj.thermalAlertIconContainer = {
  width: 22,
  height: 22,
  backgroundColor: "rgba(78, 80, 88, 0.48)",
  borderRadius: 11,
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: 6,
  left: 6,
};
let size = { width: 14, height: 14, color: nativeDefault.colors.WHITE };
obj.thermalAlertIcon = size;
let closure_19 = createStyles.createStyles(obj);
let closure_20 = noop.memo((channel) => {
  channel = channel.channel;
  const pipParticipant = channel.pipParticipant;
  const selfParticipant = channel.selfParticipant;
  let openVoice;
  closure_3 = undefined;
  closure_4 = undefined;
  let obj = channel(openVoice[16]);
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  openVoice = undefined;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (openVoice == null) {
    openVoice = pipParticipant(tmp2[17]).noop;
  }
  closure_3 = closure_14();
  closure_4 = pipParticipant(tmp2[18])(channel.id);
  let type;
  if (pipParticipant != null) {
    type = pipParticipant.type;
  }
  let tmp6ResultResult = type === ParticipantTypes.ACTIVITY;
  if (tmp6ResultResult) {
    let applicationId;
    let tmp6Result = tmp6(tmp2[19]);
    if (pipParticipant != null) {
      applicationId = pipParticipant.applicationId;
    }
    tmp6ResultResult = tmp6Result(applicationId);
  }
  const items = [MediaEngineStore];
  const items1 = [pipParticipant];
  let type1;
  const stateFromStores = channel(openVoice[20]).useStateFromStores(
    items,
    () => {
      let isLocalVideoDisabledResult = null != pipParticipant;
      if (isLocalVideoDisabledResult) {
        isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id);
      }
      return isLocalVideoDisabledResult;
    },
    items1,
  );
  if (pipParticipant != null) {
    type1 = pipParticipant.type;
  }
  function onPipTap() {
    if (closure_3) {
      openVoice();
    }
    if (closure_4) {
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    } else {
      map1();
    }
  }
  if (ParticipantTypes.HIDDEN_STREAM !== type1) {
    if (tmp8.STREAM !== type1) {
      if (tmp8.USER === type1) {
        let tmp15 = null;
        if (tmp6(tmp2[25])(pipParticipant)) {
          tmp15 = null;
          if (!stateFromStores) {
            obj = {
              participant: pipParticipant,
              avatarSize: null,
              resizeMode: null,
              onSingleTap: null,
              onDoubleTap: null,
            };
            tmp6Result = tmp6(tmp2[26]);
            obj.avatarSize = tmp(tmp2[14]).AvatarSizes.PROFILE;
            obj.resizeMode = tmp(tmp2[24]).ResizeMode.COVER;
            obj.onSingleTap = onPipTap;
            obj.onDoubleTap = onPipTap;
            tmp15 = closure_16(tmp6Result, obj);
          }
        }
        let tmp14 = tmp15;
      } else {
        tmp14 = null;
        if (tmp8.ACTIVITY === type1) {
          obj = {
            participant: pipParticipant,
            channel,
            onSingleTap() {
              const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
              if (null != currentEmbeddedActivity) {
                transitionToActivityDefault(channel.guild_id, currentEmbeddedActivity.location);
              }
              if (closure_3) {
                openVoice();
              }
            },
          };
          tmp14 = closure_16(tmp6(tmp2[27]), obj);
        }
      }
      let tmp24 = null;
      if (null != selfParticipant) {
        tmp24 = null;
        if (!tmp6ResultResult) {
          const obj1 = {
            participant: selfParticipant,
            avatarSize: tmp(tmp2[14]).AvatarSizes.PROFILE,
            resizeMode: tmp(tmp2[24]).ResizeMode.COVER,
            onSingleTap() {
              if (closure_3) {
                openVoice();
              } else {
                map1();
              }
            },
          };
          tmp24 = closure_16(tmp6(tmp2[26]), obj1);
          const tmp6Result1 = tmp6(tmp2[26]);
        }
      }
      const obj2 = { children: null };
      const items2 = [tmp24, tmp14];
      obj2.children = items2;
      return closure_18(closure_17, obj2);
    }
  }
  if (pipParticipant.user.id === AuthenticationStore.getId()) {
    function onScreenshareTap() {
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      if (null != voiceChannelId) {
        let id;
        if (pipParticipant != null) {
          id = pipParticipant.id;
        }
        if (id == null) {
          id = null;
        }
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(voiceChannelId, id);
        if (closure_3) {
          openVoice();
        }
      }
    }
    const obj3 = { onSingleTap: onScreenshareTap, onDoubleTap: onScreenshareTap };
    closure_16(tmp6(tmp2[22]), obj3);
  } else {
    const obj4 = {
      removeEmptyStateButton: true,
      removeEmptyStateImage: true,
      resizeMode: tmp(tmp2[24]).ResizeMode.CONTAIN,
      participant: pipParticipant,
      onSingleTap: onPipTap,
      onDoubleTap: onPipTap,
    };
    closure_16(tmp6(tmp2[23]), obj4);
    const tmp6Result2 = tmp6(tmp2[23]);
  }
});
let closure_22 = noop.memo((arg0) => {
  ({ channel, selfParticipant } = arg0);
  const tmp = closure_19();
  let obj = id(leadingEdgeDebounce[20]);
  let items = [ChannelCallLifecycleStore];
  id = channel.id;
  leadingEdgeDebounce = undefined;
  [tmp5, tmp6] = _slicedToArray(
    obj.useStateFromStoresArray(items, () => {
      const items = [
        ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(),
        ChannelCallLifecycleStore.isReactingToThermalState(),
      ];
      return items;
    }),
    2,
  );
  let obj1 = id(leadingEdgeDebounce[20]);
  const items1 = [ChannelCallLifecycleStore];
  const stateFromStores = obj1.useStateFromStores(items1, () => ChannelCallLifecycleStore.isReactingToThermalState());
  let obj2 = id(leadingEdgeDebounce[20]);
  const items2 = [ChannelRTCStore];
  const items3 = [id];
  const tmp4 = _slicedToArray(
    obj.useStateFromStoresArray(items, () => {
      const items = [
        ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(),
        ChannelCallLifecycleStore.isReactingToThermalState(),
      ];
      return items;
    }),
    2,
  );
  [arr5, tmp9] = _slicedToArray(
    obj2.useStateFromStores(
      items2,
      () => {
        const items = [
          ChannelRTCStore.getParticipants(id),
          ChannelRTCStore.getVideoParticipants(id),
          ChannelRTCStore.getParticipantsVersion(id),
        ];
        return items;
      },
      items3,
      areParticipantsEqual,
    ),
    2,
  );
  let obj3 = id(leadingEdgeDebounce[20]);
  const items4 = [SpeakingStore];
  const items5 = [selfParticipant];
  const stateFromStores1 = obj3.useStateFromStores(
    items4,
    () => {
      let found = null;
      if (null != selfParticipant) {
        const speakers = SpeakingStore.getSpeakers();
        found = speakers.find((item) => {
          let isSpeakingResult = item !== user.user.id;
          if (isSpeakingResult) {
            isSpeakingResult = speaking.isSpeaking(item);
          }
          return isSpeakingResult;
        });
      }
      return found;
    },
    items5,
  );
  let obj4 = id(leadingEdgeDebounce[29]);
  leadingEdgeDebounce = obj4.useLeadingEdgeDebounce(stateFromStores1, 1000);
  if (null != leadingEdgeDebounce) {
    let found = arr5.find((id) => id.id === leadingEdgeDebounce);
    if (null != found) {
      let tmp14 = found;
    }
    const token = tmp2(tmp3[30]).useToken(selfParticipant(tmp3[15]).unsafe_rawColors.PRIMARY_800);
    if (tmp14 != null) {
      const user = tmp14.user;
      const avatarURL = user.getAvatarURL(channel.guild_id, 80);
    }
    if (null == tmp14) {
      return null;
    } else {
      let tmp25 = null != tmp14.streamId;
      if (tmp25) {
        const voiceState = tmp14.voiceState;
        let selfVideo;
        if (voiceState != null) {
          selfVideo = voiceState.selfVideo;
        }
        tmp25 = selfVideo;
      }
      obj = { style: null, children: null };
      const items6 = [tmp.avatarContainer];
      obj = { backgroundColor: tmp23 };
      items6[1] = obj;
      obj.style = items6;
      if (tmp25) {
        if (!tmp6) {
          let tmp28 = closure_16;
          obj1 = {
            participant: tmp14,
            avatarSize: tmp2(tmp3[14]).AvatarSizes.PROFILE,
            resizeMode: tmp2(tmp3[24]).ResizeMode.COVER,
          };
          let tmp30 = closure_16(tmp20(tmp3[26]), obj1);
          const tmp20Result = tmp20(tmp3[26]);
        }
        const items7 = [tmp30];
        let tmp28Result = null;
        if (tmp5) {
          obj2 = { style: tmp.thermalAlertIconContainer, children: null };
          obj3 = { style: tmp.thermalAlertIcon, source: tmp20(tmp3[32]), color: tmp.thermalAlertIcon.color };
          obj2.children = tmp28(tmp2(tmp3[14]).Icon, obj3);
          tmp28Result = tmp28(tmp27, obj2);
        }
        items7[1] = tmp28Result;
        obj.children = items7;
        return tmp26(tmp27, obj);
      }
      obj4 = {
        size: tmp2(tmp3[14]).AvatarSizes.LARGE_48,
        channel,
        guildId: channel.guild_id,
        user: null,
        speaking: null,
      };
      ({ user: obj10.user, speaking: obj10.speaking } = tmp14);
      tmp30 = closure_16(tmp2(tmp3[14]).Avatar, obj4);
      tmp28 = closure_16;
    }
    const tmp2Result = tmp2(tmp3[30]);
  }
  let streamId;
  if (selfParticipant != null) {
    streamId = selfParticipant.streamId;
  }
  tmp14 = selfParticipant;
  if (null == streamId) {
    tmp14 = selfParticipant;
    if (!stateFromStores) {
      const items8 = [];
      HermesBuiltin.arraySpread(tmp9, 0);
      const first = items8.sort((lastSpoke, lastSpoke2) => {
        let num = -1;
        if (lastSpoke.lastSpoke < lastSpoke2.lastSpoke) {
          num = 1;
        }
        return num;
      })[0];
      tmp14 = selfParticipant;
      if (null != first) {
        tmp14 = first;
      }
    }
  }
});
let obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureVideo.tsx");

export default noop.memo((arg0) => {
  ({ channel, pipParticipant, selfParticipant } = arg0);
  const tmp = closure_19();
  let obj = { channelId: channel.id };
  const isViewingActivity = obj.useIsViewingActivity(obj);
  let obj2 = useShouldForcePipOrientation;
  const shouldForcePipOrientation = obj2.useShouldForcePipOrientation({ channel });
  obj = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const tmp6 = usePipDimensionsDefault(obj);
  const obj1 = { style: isViewingActivity ? tmp.backgroundPipFab : tmp.background, children: null };
  const items = [isViewingActivity ? tmp.pipFab : tmp.pip, , ,];
  ({ width, height } = useWindowDimensionsDefault());
  const tmp10 = React4;
  const tmp7 = useWindowDimensionsDefault();
  let elevationShadow;
  if (tmp2Result.isAndroid()) {
    elevationShadow = tmp.elevationShadow;
  }
  items[1] = elevationShadow;
  if (width > height) {
    let str = "row";
  } else {
    str = "column";
  }
  obj2 = { style: items, children: null };
  items[2] = { flexDirection: str };
  items[3] = tmp6;
  if (isViewingActivity) {
    const obj3 = { pointerEvents: "none", style: tmp.activityPipContainer, children: null };
    const obj4 = { channel, pipParticipant, selfParticipant };
    obj3.children = tmp8(closure_22, obj4);
    let tmp8Result = tmp8(tmp9, obj3);
  } else {
    const obj5 = { channel, pipParticipant, selfParticipant };
    tmp8Result = tmp8(closure_20, obj5);
  }
  tmp2Result = PlatformUtils;
  obj2.children = tmp8Result;
  obj1.children = value2(tmp10, { activeOpacity: 0.7, children: value2(hasOwnProperty, obj2) });
  return value2(hasOwnProperty, obj1);
});
export { areParticipantsEqual };
