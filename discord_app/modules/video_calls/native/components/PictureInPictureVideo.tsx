// === Module 12433: areParticipantsEqual ===

// Module 12433 (areParticipantsEqual)
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import useShouldForcePipOrientation from "useShouldForcePipOrientation" /* 8686 */;
import usePipDimensionsDefault from "usePipDimensions" /* 8689 */;
import useIsViewingActivity from "useIsViewingActivity" /* 8690 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "participantFromServer" /* 1390 */;
import closure_7 from "getParticipants" /* 4773 */;
import closure_8 from "fetchFingerprint" /* 1218 */;
import closure_9 from "_detectH265HardwareDecode" /* 4497 */;
import closure_10 from "handleConnectionOpen" /* 1979 */;
import closure_11 from "anyoneHasFlagInContext" /* 4774 */;
import closure_12 from "initialize" /* 8683 */;
import VoiceChatDrawerState from "VoiceChatDrawerState" /* 8669 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4544 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import Button from "Button" /* 1297 */;

require = arg1;
function areParticipantsEqual(arg0, arg1) {
  [, , tmp] = arg0;
  [, , tmp2] = arg1;
  return tmp === tmp2;
}
({ TouchableOpacity: c4, View: c5 } = get_ActivityIndicator);
({ togglePipFocus: map1, useIsVoiceChatFocused: closure_14 } = VoiceChatDrawerState);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
let obj = { elevationShadow: null, background: null, backgroundPipFab: null, pip: null, pipFab: null, avatarContainer: null, activityPipContainer: null, thermalAlertIconContainer: null, thermalAlertIcon: null };
obj[0] = Button.generateBoxShadowStyle(require("Button").EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj = { backgroundColor: ThemesDefault.colors.BLACK, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
obj[1] = obj;
createCacheKey = { backgroundColor: ThemesDefault.colors.BLACK, borderRadius: ThemesDefault.radii.lg };
obj[2] = createCacheKey;
obj[3] = { borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
Button = { borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
obj[4] = Button;
obj[5] = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" };
obj[6] = { flex: 1, width: "100%" };
obj[7] = { width: 22, height: 22, backgroundColor: "rgba(78, 80, 88, 0.48)", borderRadius: 11, justifyContent: "center", alignItems: "center", position: "absolute", top: 6, left: 6 };
let obj2 = { borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
obj[8] = { width: 14, height: 14, color: ThemesDefault.colors.WHITE };
let closure_19 = createCacheKey.createStyles(obj);
let closure_20 = importAllResult.memo((channel) => {
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
  closure_3 = callback2();
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
  const items = [closure_9];
  const items1 = [pipParticipant];
  let type1;
  const stateFromStores = channel(openVoice[20]).useStateFromStores(items, () => {
    let isLocalVideoDisabledResult = null != pipParticipant;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = closure_1_9.isLocalVideoDisabled(tmp.id);
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
      const participant = pipParticipant(openVoice[21]).selectParticipant(channel.id, null);
      const obj = pipParticipant(openVoice[21]);
    } else {
      closure_1_13();
    }
  }
  if (ParticipantTypes.HIDDEN_STREAM !== type1) {
    if (tmp8.STREAM !== type1) {
      if (tmp8.USER === type1) {
        let tmp15 = null;
        if (tmp6(tmp2[25])(pipParticipant)) {
          tmp15 = null;
          if (!stateFromStores) {
            obj = { participant: null, avatarSize: null, resizeMode: null, onSingleTap: null, onDoubleTap: null };
            obj[0] = pipParticipant;
            tmp6Result = tmp6(tmp2[26]);
            obj[1] = tmp(tmp2[14]).AvatarSizes.PROFILE;
            obj[2] = tmp(tmp2[24]).ResizeMode.COVER;
            obj[3] = onPipTap;
            obj[4] = onPipTap;
            tmp15 = callback3(tmp6Result, obj);
          }
        }
        let tmp14 = tmp15;
      } else {
        tmp14 = null;
        if (tmp8.ACTIVITY === type1) {
          obj = { participant: null, channel: null, onSingleTap: null };
          obj[0] = pipParticipant;
          obj[1] = channel;
          obj[2] = function onSingleTap() {
            const currentEmbeddedActivity = closure_1_6.getCurrentEmbeddedActivity();
            if (null != currentEmbeddedActivity) {
              pipParticipant(openVoice[28])(channel.guild_id, currentEmbeddedActivity.location);
            }
            if (closure_3) {
              openVoice();
            }
          };
          tmp14 = callback3(tmp6(tmp2[27]), obj);
        }
      }
      let tmp24 = null;
      if (null != selfParticipant) {
        tmp24 = null;
        if (!tmp6ResultResult) {
          obj1 = { participant: null, avatarSize: null, resizeMode: null, onSingleTap: null };
          obj1[0] = selfParticipant;
          obj1[1] = tmp(tmp2[14]).AvatarSizes.PROFILE;
          obj1[2] = tmp(tmp2[24]).ResizeMode.COVER;
          obj1[3] = function onSingleTap() {
            if (closure_3) {
              openVoice();
            } else {
              closure_1_13();
            }
          };
          tmp24 = callback3(tmp6(tmp2[26]), obj1);
          const tmp6Result1 = tmp6(tmp2[26]);
        }
      }
      const obj2 = { children: null };
      const items2 = [tmp24, tmp14];
      obj2[0] = items2;
      return closure_18(closure_17, obj2);
    }
  }
  if (pipParticipant.user.id === id.getId()) {
    function onScreenshareTap() {
      const voiceChannelId = closure_1_10.getVoiceChannelId();
      if (null != voiceChannelId) {
        let id;
        if (pipParticipant != null) {
          id = pipParticipant.id;
        }
        if (id == null) {
          id = null;
        }
        const participant = pipParticipant(openVoice[21]).selectParticipant(voiceChannelId, id);
        if (closure_3) {
          openVoice();
        }
        const obj = pipParticipant(openVoice[21]);
      }
    }
    const obj3 = { onSingleTap: null, onDoubleTap: null };
    obj3[0] = onScreenshareTap;
    obj3[1] = onScreenshareTap;
    callback3(tmp6(tmp2[22]), obj3);
  } else {
    const obj4 = { removeEmptyStateButton: true, removeEmptyStateImage: true, resizeMode: null, participant: null, onSingleTap: null, onDoubleTap: null };
    obj4[2] = tmp(tmp2[24]).ResizeMode.CONTAIN;
    obj4[3] = pipParticipant;
    obj4[4] = onPipTap;
    obj4[5] = onPipTap;
    callback3(tmp6(tmp2[23]), obj4);
    const tmp6Result2 = tmp6(tmp2[23]);
  }
});
let closure_22 = importAllResult.memo((arg0) => {
  ({ channel, selfParticipant } = arg0);
  const tmp = callback4();
  let obj = id(leadingEdgeDebounce[20]);
  let items = [closure_12];
  id = channel.id;
  leadingEdgeDebounce = undefined;
  [tmp5, tmp6] = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_12.consumedRequestToRespondToSeriousThermalState(), closure_12.isReactingToThermalState()];
    return items;
  }), 2);
  obj1 = id(leadingEdgeDebounce[20]);
  const items1 = [closure_12];
  const stateFromStores = obj1.useStateFromStores(items1, () => closure_12.isReactingToThermalState());
  let obj2 = id(leadingEdgeDebounce[20]);
  const items2 = [closure_7];
  const items3 = [id];
  const tmp4 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_12.consumedRequestToRespondToSeriousThermalState(), closure_12.isReactingToThermalState()];
    return items;
  }), 2);
  [arr5, tmp9] = callback(obj2.useStateFromStores(items2, () => {
    const items = [closure_1_7.getParticipants(id), closure_1_7.getVideoParticipants(id), closure_1_7.getParticipantsVersion(id)];
    return items;
  }, items3, areParticipantsEqual), 2);
  let obj3 = id(leadingEdgeDebounce[20]);
  const items4 = [closure_11];
  const items5 = [selfParticipant];
  const stateFromStores1 = obj3.useStateFromStores(items4, () => {
    let found = null;
    if (null != selfParticipant) {
      const speakers = closure_1_11.getSpeakers();
      found = speakers.find((c12) => {
        let isSpeakingResult = c12 !== user.user.id;
        if (isSpeakingResult) {
          isSpeakingResult = closure_1_11.isSpeaking(c12);
        }
        return isSpeakingResult;
      });
    }
    return found;
  }, items5);
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
      const items6 = [tmp.avatarContainer, ];
      obj = { backgroundColor: null };
      obj[0] = tmp23;
      items6[1] = obj;
      obj[0] = items6;
      if (tmp25) {
        if (!tmp6) {
          let tmp28 = callback3;
          obj1 = { participant: null, avatarSize: null, resizeMode: null };
          obj1[0] = tmp14;
          obj1[1] = tmp2(tmp3[14]).AvatarSizes.PROFILE;
          obj1[2] = tmp2(tmp3[24]).ResizeMode.COVER;
          let tmp30 = callback3(tmp20(tmp3[26]), obj1);
          const tmp20Result = tmp20(tmp3[26]);
        }
        const items7 = [tmp30, ];
        let tmp28Result = null;
        if (tmp5) {
          obj2 = { style: null, children: null };
          obj2[0] = tmp.thermalAlertIconContainer;
          obj3 = { style: null, source: null, color: null };
          obj3[0] = tmp.thermalAlertIcon;
          obj3[1] = tmp20(tmp3[32]);
          obj3[2] = tmp.thermalAlertIcon.color;
          obj2[1] = tmp28(tmp2(tmp3[14]).Icon, obj3);
          tmp28Result = tmp28(tmp27, obj2);
        }
        items7[1] = tmp28Result;
        obj[1] = items7;
        return tmp26(tmp27, obj);
      }
      obj4 = { size: null, channel: null, guildId: null, user: null, speaking: null };
      obj4[0] = tmp2(tmp3[14]).AvatarSizes.LARGE_48;
      obj4[1] = channel;
      obj4[2] = channel.guild_id;
      ({ user: obj10[3], speaking: obj10[4] } = tmp14);
      tmp30 = callback3(tmp2(tmp3[14]).Avatar, obj4);
      tmp28 = callback3;
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
let obj4 = { width: 14, height: 14, color: ThemesDefault.colors.WHITE };
const memoResult = importAllResult.memo((arg0) => {
  ({ channel, pipParticipant, selfParticipant } = arg0);
  const tmp = callback4();
  let obj = useIsViewingActivity;
  obj = { channelId: channel.id };
  const isViewingActivity = obj.useIsViewingActivity(obj);
  let obj2 = useShouldForcePipOrientation;
  const shouldForcePipOrientation = obj2.useShouldForcePipOrientation({ channel });
  obj = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const tmp6 = usePipDimensionsDefault(obj);
  obj1 = { style: isViewingActivity ? tmp.backgroundPipFab : tmp.background, children: null };
  const items = [isViewingActivity ? tmp.pipFab : tmp.pip, , , ];
  ({ width, height } = useWindowDimensionsDefault());
  const tmp10 = closure_4;
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
    const obj3 = { pointerEvents: "none", style: null, children: null };
    obj3[1] = tmp.activityPipContainer;
    const obj4 = { channel: null, pipParticipant: null, selfParticipant: null };
    obj4[0] = channel;
    obj4[1] = pipParticipant;
    obj4[2] = selfParticipant;
    obj3[2] = tmp8(closure_22, obj4);
    let tmp8Result = tmp8(tmp9, obj3);
  } else {
    const obj5 = { channel: null, pipParticipant: null, selfParticipant: null };
    obj5[0] = channel;
    obj5[1] = pipParticipant;
    obj5[2] = selfParticipant;
    tmp8Result = tmp8(closure_20, obj5);
  }
  tmp2Result = set;
  obj2[1] = tmp8Result;
  obj1[1] = closure_16(tmp10, { activeOpacity: 0.7, children: closure_16(closure_5, obj2) });
  return closure_16(closure_5, obj1);
});
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/PictureInPictureVideo.tsx");

export default memoResult;
export { areParticipantsEqual };