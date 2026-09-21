// === Module 9677: PictureInPictureVideo ===

// Module 9677 (PictureInPictureVideo)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4957 */;
import transitionToActivityDefault from "transitionToActivity" /* 9639 */;
import useShouldForcePipOrientation from "useShouldForcePipOrientation" /* 9658 */;
import usePipDimensionsDefault from "usePipDimensions" /* 9661 */;
import useIsViewingActivity from "useIsViewingActivity" /* 9662 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4772 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import SpeakingStore from "SpeakingStore" /* 5636 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9655 */;

require = fn;
function areParticipantsEqual(arg0, arg1) {
  [, , tmp] = arg0;
  [, , tmp2] = arg1;
  return tmp === tmp2;
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ChannelCallStore = fn(9640);
({ togglePipFocus: map1, useIsVoiceChatFocused: closure_14 } = ChannelCallStore);
const ParticipantTypes = fn(4777).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4756);
let obj = { elevationShadow: null, background: null, backgroundPipFab: null, pip: null, pipFab: null, avatarContainer: null, activityPipContainer: null, thermalAlertIconContainer: null, thermalAlertIcon: null };
const native = fn(1177);
obj.elevationShadow = native.generateBoxShadowStyle(fn(1177).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj.background = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.backgroundPipFab = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.lg };
let obj5 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.lg };
obj.pip = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj6 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.pipFab = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj.avatarContainer = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" };
obj.activityPipContainer = { flex: 1, width: "100%" };
obj.thermalAlertIconContainer = { width: 22, height: 22, backgroundColor: "rgba(78, 80, 88, 0.48)", borderRadius: 11, justifyContent: "center", alignItems: "center", position: "absolute", top: 6, left: 6 };
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
  const voiceChatNavigationContext = channel(openVoice[16]).useVoiceChatNavigationContext();
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
    if (pipParticipant != null) {
      applicationId = pipParticipant.applicationId;
    }
    tmp6ResultResult = tmp6(tmp2[19])(applicationId);
    const tmp6Result = tmp6(tmp2[19]);
  }
  let obj = channel(openVoice[16]);
  const items = [MediaEngineStore];
  const items1 = [pipParticipant];
  let type1;
  const stateFromStores = channel(openVoice[20]).useStateFromStores(items, () => {
    let isLocalVideoDisabledResult = null != pipParticipant;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id);
    }
    return isLocalVideoDisabledResult;
  }, items1);
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
    if (ParticipantTypes.STREAM !== type1) {
      if (ParticipantTypes.USER === type1) {
        let tmp15 = null;
        if (tmp6(tmp2[25])(pipParticipant)) {
          tmp15 = null;
          if (!stateFromStores) {
            const obj2 = { participant: pipParticipant, avatarSize: tmp(tmp2[14]).AvatarSizes.PROFILE, resizeMode: tmp(tmp2[24]).ResizeMode.COVER, onSingleTap: onPipTap, onDoubleTap: onPipTap };
            tmp15 = closure_16(tmp6(tmp2[26]), obj2);
            const tmp6Result4 = tmp6(tmp2[26]);
          }
        }
        let tmp14 = tmp15;
      } else {
        tmp14 = null;
        if (ParticipantTypes.ACTIVITY === type1) {
          const obj3 = {
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
                    }
          };
          tmp14 = closure_16(tmp6(tmp2[27]), obj3);
        }
      }
      let tmp24 = null;
      if (null != selfParticipant) {
        tmp24 = null;
        if (!tmp6ResultResult) {
          const obj4 = {
            participant: selfParticipant,
            avatarSize: tmp(tmp2[14]).AvatarSizes.PROFILE,
            resizeMode: tmp(tmp2[24]).ResizeMode.COVER,
            onSingleTap() {
                      if (closure_3) {
                        openVoice();
                      } else {
                        map1();
                      }
                    }
          };
          tmp24 = closure_16(tmp6(tmp2[26]), obj4);
          const tmp6Result5 = tmp6(tmp2[26]);
        }
      }
      const obj5 = { children: null };
      const items2 = [tmp24, tmp14];
      obj5.children = items2;
      return closure_18(closure_17, obj5);
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
    const obj6 = { onSingleTap: onScreenshareTap, onDoubleTap: onScreenshareTap };
    closure_16(tmp6(tmp2[22]), obj6);
  } else {
    const obj7 = { removeEmptyStateButton: true, removeEmptyStateImage: true, resizeMode: tmp(tmp2[24]).ResizeMode.CONTAIN, participant: pipParticipant, onSingleTap: onPipTap, onDoubleTap: onPipTap };
    closure_16(tmp6(tmp2[23]), obj7);
    const tmp6Result6 = tmp6(tmp2[23]);
  }
  const tmpResult = channel(openVoice[20]);
});
let closure_22 = noop.memo((arg0) => {
  ({ channel, selfParticipant } = arg0);
  const tmp = closure_19();
  let items = [ChannelCallLifecycleStore];
  const obj = id(leadingEdgeDebounce[20]);
  id = channel.id;
  leadingEdgeDebounce = undefined;
  [tmp5, tmp6] = id(leadingEdgeDebounce[20]).useStateFromStoresArray(items, () => {
    const items = [ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(), ChannelCallLifecycleStore.isReactingToThermalState()];
    return items;
  });
  const tmp4 = _slicedToArray(id(leadingEdgeDebounce[20]).useStateFromStoresArray(items, () => {
    const items = [ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(), ChannelCallLifecycleStore.isReactingToThermalState()];
    return items;
  }), 2);
  const items1 = [ChannelCallLifecycleStore];
  const stateFromStores = id(leadingEdgeDebounce[20]).useStateFromStores(items1, () => ChannelCallLifecycleStore.isReactingToThermalState());
  const obj2 = id(leadingEdgeDebounce[20]);
  const items2 = [ChannelRTCStore];
  const items3 = [id];
  const obj3 = id(leadingEdgeDebounce[20]);
  [arr5, tmp9] = id(leadingEdgeDebounce[20]).useStateFromStores(items2, () => {
    const items = [ChannelRTCStore.getParticipants(id), ChannelRTCStore.getVideoParticipants(id), ChannelRTCStore.getParticipantsVersion(id)];
    return items;
  }, items3, areParticipantsEqual);
  const tmp8 = _slicedToArray(id(leadingEdgeDebounce[20]).useStateFromStores(items2, () => {
    const items = [ChannelRTCStore.getParticipants(id), ChannelRTCStore.getVideoParticipants(id), ChannelRTCStore.getParticipantsVersion(id)];
    return items;
  }, items3, areParticipantsEqual), 2);
  const items4 = [SpeakingStore];
  const items5 = [selfParticipant];
  const stateFromStores1 = id(leadingEdgeDebounce[20]).useStateFromStores(items4, () => {
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
  }, items5);
  const obj4 = id(leadingEdgeDebounce[20]);
  leadingEdgeDebounce = id(leadingEdgeDebounce[29]).useLeadingEdgeDebounce(stateFromStores1, 1000);
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
      const obj6 = { style: null, children: null };
      const items6 = [tmp.avatarContainer, ];
      const obj7 = { backgroundColor: tmp23 };
      items6[1] = obj7;
      obj6.style = items6;
      if (tmp25) {
        if (!tmp6) {
          let tmp28 = closure_16;
          const obj8 = { participant: tmp14, avatarSize: tmp2(tmp3[14]).AvatarSizes.PROFILE, resizeMode: tmp2(tmp3[24]).ResizeMode.COVER };
          let tmp30 = closure_16(selfParticipant(tmp3[26]), obj8);
          const tmp20Result = selfParticipant(tmp3[26]);
        }
        const items7 = [tmp30, ];
        let tmp28Result = null;
        if (tmp5) {
          const obj9 = { style: tmp.thermalAlertIconContainer, children: null };
          const obj11 = { style: tmp.thermalAlertIcon, source: selfParticipant(tmp3[32]), color: tmp.thermalAlertIcon.color };
          obj9.children = tmp28(tmp2(tmp3[14]).Icon, obj11);
          tmp28Result = tmp28(closure_5, obj9);
        }
        items7[1] = tmp28Result;
        obj6.children = items7;
        return tmp26(closure_5, obj6);
      }
      const obj12 = { size: tmp2(tmp3[14]).AvatarSizes.LARGE_48, channel, guildId: channel.guild_id, user: null, speaking: null };
      ({ user: obj10.user, speaking: obj10.speaking } = tmp14);
      tmp30 = closure_16(tmp2(tmp3[14]).Avatar, obj12);
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
  const obj5 = id(leadingEdgeDebounce[29]);
});
let obj7 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureVideo.tsx");

export default noop.memo((arg0) => {
  ({ channel, pipParticipant, selfParticipant } = arg0);
  const tmp = closure_19();
  const isViewingActivity = useIsViewingActivity.useIsViewingActivity({ channelId: channel.id });
  const obj2 = { channelId: channel.id };
  const shouldForcePipOrientation = useShouldForcePipOrientation.useShouldForcePipOrientation({ channel });
  const obj4 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const tmp6 = usePipDimensionsDefault({ channelId: channel.id, forcedOrientation: shouldForcePipOrientation });
  const obj5 = { style: isViewingActivity ? tmp.backgroundPipFab : tmp.background, children: null };
  const items = [isViewingActivity ? tmp.pipFab : tmp.pip, , , ];
  ({ width, height } = useWindowDimensionsDefault());
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
  const obj6 = { style: items, children: null };
  items[2] = { flexDirection: str };
  items[3] = tmp6;
  if (isViewingActivity) {
    const obj7 = { pointerEvents: "none", style: tmp.activityPipContainer, children: null };
    const obj8 = { channel, pipParticipant, selfParticipant };
    obj7.children = value2(closure_22, obj8);
    let tmp8Result = value2(hasOwnProperty, obj7);
  } else {
    const obj9 = { channel, pipParticipant, selfParticipant };
    tmp8Result = value2(closure_20, obj9);
  }
  tmp2Result = PlatformUtils;
  obj6.children = tmp8Result;
  obj5.children = value2(React4, { activeOpacity: 0.7, children: value2(hasOwnProperty, obj6) });
  return value2(hasOwnProperty, obj5);
});
export { areParticipantsEqual };