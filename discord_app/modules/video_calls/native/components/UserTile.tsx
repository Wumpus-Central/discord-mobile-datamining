// === Module 11777: UserTile ===

// Module 11777 (UserTile)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import _modDef11779 from "module_11779" /* 11779 */;
import _modDef11780 from "module_11780" /* 11780 */;
import _modDef11781 from "module_11781" /* 11781 */;
import _modDef11782 from "module_11782" /* 11782 */;
import _modDef11783 from "module_11783" /* 11783 */;
import mediaEngineContextFromParticipantTypeDefault from "mediaEngineContextFromParticipantType" /* 11784 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 6058 */;
import VoiceChannelEffectsStore from "VoiceChannelEffectsStore" /* 11778 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;

require = fn;
const View = fn(17).View;
let closure_8 = fn(11778).clearVoiceChannelEffectForUser;
const VideoToggleState = fn(1072).VideoToggleState;
const ParticipantTypes = fn(5681).ParticipantTypes;
const MediaEngineContextTypes = fn(5768).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const createStyles = fn(5014);
let obj = { container: { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK }, imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" }, autoDisabledVideoWrapper: { width: "100%", flexDirection: "row", justifyContent: "center" }, autoDisabledVideo: null, autoDisabledVideoTextWrapper: null, statusWrapper: null, labelText: null };
let obj4 = { backgroundColor: null, alignItems: "center", height: 24 };
let ColorUtils = fn(5011);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj.autoDisabledVideo = obj4;
let obj3 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
obj.autoDisabledVideoTextWrapper = { borderRadius: nativeDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
let size = { position: "absolute", bottom: 8, right: 8, backgroundColor: null, borderRadius: null, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
ColorUtils = fn(5011);
size.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
size.borderRadius = nativeDefault.radii.md;
obj.statusWrapper = size;
obj.labelText = { marginLeft: 8, height: 20, alignItems: "center" };
let closure_18 = createStyles.createStyles(obj);
let closure_19 = noop.memo(function VideoContent(guildId) {
  ({ user, hasVideo } = guildId);
  guildId = guildId.guildId;
  _slicedToArray = undefined;
  ({ streamId, resizeMode, ringing, avatarSize, speaking, playingSoundboard, gestureEnabled } = guildId);
  let tmp = closure_18();
  importDefault = tmp;
  const id = user.id;
  let items = [AuthenticationStore];
  let items1 = [hasVideo, id];
  const stateFromStores = hasVideo(id[15]).useStateFromStores(items, () => {
    let tmp = hasVideo;
    if (hasVideo) {
      tmp = id === AuthenticationStore.getId();
    }
    return tmp;
  }, items1);
  let obj = hasVideo(id[15]);
  const items2 = [MediaEngineStore];
  const items3 = [id];
  _slicedToArray = _slicedToArray(hasVideo(id[15]).useStateFromStoresArray(items2, () => {
    const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
    return items;
  }, items3), 1)[0];
  let obj2 = hasVideo(id[15]);
  const items4 = [MediaEngineStore];
  const items5 = [id];
  const tmp5 = hasVideo(id[15]).useStateFromStores(items4, () => {
    if (null != id) {
      let NONE = MediaEngineStore.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
    } else {
      NONE = VideoToggleState.NONE;
    }
    return NONE;
  }, items5) === VideoToggleState.AUTO_PROBING;
  closure_4 = tmp5;
  if (!ringing) {
    if (hasVideo) {
      if (!tmp5) {
        let obj4 = { resizeMode, streamId, gestureEnabled, videoSpinnerContext: null, userId: null };
        const VideoSpinnerContext = hasVideo(tmp3[22]).VideoSpinnerContext;
        obj4.videoSpinnerContext = stateFromStores ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
        obj4.userId = user.id;
        let tmp6Result = closure_15(require("VideoRenderer"), obj4);
        const tmp8 = require("VideoRenderer");
      }
      return tmp6Result;
    }
  }
  const obj5 = { style: tmp.imageBackground, url: null, user: null, guildId: null, speaking: null, playingSoundboard: null, size: null, renderVideoDetails: null };
  let obj3 = hasVideo(id[15]);
  obj5.url = user.getAvatarURL(guildId, 128);
  obj5.user = user;
  obj5.guildId = guildId;
  obj5.speaking = speaking;
  obj5.playingSoundboard = playingSoundboard;
  obj5.size = avatarSize;
  obj5.renderVideoDetails = function renderVideoAutoDisabledStatus() {
    if (closure_3) {
      const obj = { style: closure_1.autoDisabledVideoWrapper, children: null };
      const obj2 = { style: null, children: null };
      const items = [, ];
      ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = closure_1);
      obj2.style = items;
      const obj3 = { source: _modDef11779, size: native.Icon.Sizes.SMALL, disableColor: true };
      const items1 = [__initData(native.Icon, obj3), ];
      const obj4 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.m2Hyj0);
      items1[1] = __initData(Text_Text.Text, obj4);
      obj2.children = items1;
      obj.children = __initData2(View, obj2);
      let tmp2 = __initData(View, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  };
  tmp6Result = closure_15(require("VideoBackground"), obj5);
  const tmp10 = require("VideoBackground");
});
let closure_20 = noop.memo(function VoiceStatus(userId) {
  userId = userId.userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp = closure_18();
  let items = [MediaEngineStore];
  const items1 = [userId];
  const tmp4 = _slicedToArray(userId(504).useStateFromStoresArray(items, () => {
    const items = [MediaEngineStore.isLocalMute(userId), MediaEngineStore.isLocalVideoDisabled(userId), MediaEngineStore.isLocalVideoAutoDisabled(userId)];
    return items;
  }, items1), 3);
  let tmp5 = tmp4[1];
  if (tmp4[0]) {
    let tmp6 = _modDef11780;
  } else if (deafened) {
    tmp6 = _modDef11781;
  } else if (muted) {
    tmp6 = _modDef11782;
  }
  if (tmp5) {
    tmp5 = !tmp4[2];
  }
  if (tmp5) {
    let tmp14 = null;
    if (tmp5) {
      const obj2 = { style: null, children: null };
      const items2 = [tmp.statusWrapper, style];
      obj2.style = items2;
      const obj3 = { source: _modDef11783, size: tmp2(1187).Icon.Sizes.SMALL, disableColor: true };
      obj2.children = closure_15(tmp2(1187).Icon, obj3);
      tmp14 = closure_15(View, obj2);
    }
    const items3 = [tmp14, ];
    let tmp19Result = null;
    if (null != tmp6) {
      const items4 = [tmp.statusWrapper, style, ];
      let obj4 = null;
      if (tmp5) {
        obj4 = { right: 38 };
      }
      const obj5 = { style: null, children: null };
      items4[2] = obj4;
      obj5.style = items4;
      const obj6 = { source: tmp6, size: tmp2(1187).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp6 === _modDef11780 };
      obj5.children = closure_15(tmp2(1187).Icon, obj6);
      tmp19Result = closure_15(View, obj5);
    }
    const obj7 = { children: null };
    items3[1] = tmp19Result;
    obj7.children = items3;
    let tmp11Result = closure_16(closure_17, obj7);
  } else {
    tmp11Result = null;
  }
  return tmp11Result;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserTile.tsx");

export default function UserTile(participant) {
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const onLongPress = participant.onLongPress;
  let COVER = participant.resizeMode;
  if (COVER === undefined) {
    COVER = participant(onDoubleTap[21]).ResizeMode.COVER;
  }
  let user;
  let id;
  ({ statusStyle, gestureEnabled, hasNotch, style } = participant);
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const callback = user.useCallback(() => {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items);
  const items2 = [participant, onLongPress];
  const callback1 = user.useCallback(() => {
    let tmpResult;
    if (onDoubleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items1);
  user = participant.user;
  const callback2 = user.useCallback(() => {
    let tmpResult;
    if (onLongPress != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items2);
  ({ streamId, ringing } = participant);
  const tmp3 = closure_18();
  const obj = participant(onDoubleTap[27]);
  const result = obj.withLocalSelfMuteDeaf(participant.voiceState, participant(onDoubleTap[27]).useLocalSelfMuteDeaf());
  const obj2 = participant(onDoubleTap[27]);
  const obj3 = { userId: participant.id };
  const tmp10 = onSingleTap(onDoubleTap[28])({ userId: participant.id });
  const items3 = [SoundboardStore];
  let channelId;
  const stateFromStores = participant(onDoubleTap[15]).useStateFromStores(items3, () => SoundboardStore.isUserPlayingSounds(participant.id));
  if (result != null) {
    channelId = result.channelId;
  }
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmp16 = tmp9(tmp8[29])(participant);
  let flag;
  if (result != null) {
    flag = result.isVoiceMuted();
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (result != null) {
    flag2 = result.isVoiceDeafened();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  const obj5 = participant(onDoubleTap[15]);
  const items4 = [MediaEngineStore];
  const items5 = [user.id, participant.type];
  const stateFromStores1 = participant(onDoubleTap[15]).useStateFromStores(items4, () => {
    let isLocalVideoDisabledResult = null != user.id;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
    }
    return isLocalVideoDisabledResult;
  }, items5);
  const tmp7Result = participant(onDoubleTap[15]);
  const voiceChatNavigationContext = participant(onDoubleTap[31]).useVoiceChatNavigationContext();
  let swipeDismissRef;
  if (voiceChatNavigationContext != null) {
    swipeDismissRef = voiceChatNavigationContext.swipeDismissRef;
  }
  const user2 = participant.user;
  id = undefined;
  if (user2 != null) {
    id = user2.id;
  }
  const tmp7Result3 = participant(onDoubleTap[31]);
  const items6 = [VoiceChannelEffectsStore];
  const stateFromStores2 = participant(onDoubleTap[15]).useStateFromStores(items6, () => {
    let effectForUserId = null;
    if (null != id) {
      effectForUserId = VoiceChannelEffectsStore.getEffectForUserId(tmp);
    }
    return effectForUserId;
  });
  if (participant.type !== ParticipantTypes.USER) {
    const type = participant.type;
  }
  const tmp7Result4 = participant(onDoubleTap[15]);
  const Gesture = tmp7(tmp8[33]).Gesture;
  const tmp22 = onSingleTap(onDoubleTap[32])({ onDoubleTapStart: callback1, onSingleTapStart: callback });
  const LongPressResult = Gesture.LongPress();
  const runOnJSResult = Gesture.LongPress().runOnJS(true);
  const minDurationResult = Gesture.LongPress().runOnJS(true).onStart(callback2).minDuration(800);
  let result1 = minDurationResult;
  if (null != swipeDismissRef) {
    result1 = minDurationResult.requireExternalGestureToFail(swipeDismissRef);
  }
  const obj4 = { gesture: null, children: null };
  const Gesture2 = tmp7(tmp8[33]).Gesture;
  obj4.gesture = Gesture2.Simultaneous(result1, tmp22);
  const obj6 = { style: null, children: null };
  const items7 = [tmp3.container, style];
  obj6.style = items7;
  const obj7 = { guildId: guild_id, hasVideo: null, streamId: null, user: null, resizeMode: null, ringing: null, speaking: null, playingSoundboard: null, avatarSize: null, gestureEnabled: null };
  if (tmp16) {
    tmp16 = !stateFromStores1;
  }
  obj7.hasVideo = tmp16;
  obj7.streamId = streamId;
  obj7.user = user;
  obj7.resizeMode = COVER;
  obj7.ringing = ringing;
  obj7.speaking = tmp10;
  obj7.playingSoundboard = stateFromStores;
  obj7.avatarSize = participant.avatarSize;
  obj7.gestureEnabled = gestureEnabled;
  const items8 = [closure_15(closure_19, obj7), , ];
  let tmp24Result = null;
  if (null != id) {
    tmp24Result = null;
    if (null != stateFromStores2) {
      const obj8 = {
        voiceChannelEffect: stateFromStores2,
        onComplete() {
              return closure_8(id);
            },
        userId: id,
        hasNotch
      };
      tmp24Result = closure_15(tmp9(tmp8[34]), obj8);
    }
  }
  items8[1] = tmp24Result;
  items8[2] = closure_15(closure_20, { muted: flag, deafened: flag2, userId: user.id, style: statusStyle });
  obj6.children = items8;
  obj4.children = closure_16(id, obj6);
  return closure_15(participant(onDoubleTap[33]).GestureDetector, obj4);
};