// === Module 9753: UserTile ===

// Module 9753 (UserTile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import Text_Text from "Text/Text" /* 4632 */;
import _modDef8737 from "module_8737" /* 8737 */;
import _modDef9755 from "module_9755" /* 9755 */;
import _modDef9756 from "module_9756" /* 9756 */;
import _modDef9757 from "module_9757" /* 9757 */;
import _modDef9758 from "module_9758" /* 9758 */;
import mediaEngineContextFromParticipantTypeDefault from "mediaEngineContextFromParticipantType" /* 9759 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VoiceChannelEffectsStore from "VoiceChannelEffectsStore" /* 9754 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
const View = fn(17).View;
let closure_7 = fn(9754).clearVoiceChannelEffectForUser;
const VideoToggleState = fn(1074).VideoToggleState;
const ParticipantTypes = fn(4657).ParticipantTypes;
const MediaEngineContextTypes = fn(4661).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(4636);
let obj = { container: { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK }, imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" }, autoDisabledVideoWrapper: { width: "100%", flexDirection: "row", justifyContent: "center" }, autoDisabledVideo: null, autoDisabledVideoTextWrapper: null, statusWrapper: null, labelText: null };
let obj4 = { backgroundColor: null, alignItems: "center", height: 24 };
let ColorUtils = fn(4486);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj.autoDisabledVideo = obj4;
let obj3 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
obj.autoDisabledVideoTextWrapper = { borderRadius: nativeDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
let size = { position: "absolute", bottom: 8, right: 8, backgroundColor: null, borderRadius: null, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
ColorUtils = fn(4486);
size.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
size.borderRadius = nativeDefault.radii.md;
obj.statusWrapper = size;
obj.labelText = { marginLeft: 8, height: 20, alignItems: "center" };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = noop.memo((guildId) => {
  ({ user, hasVideo } = guildId);
  guildId = guildId.guildId;
  _slicedToArray = undefined;
  ({ streamId, resizeMode, ringing, avatarSize, speaking, gestureEnabled } = guildId);
  let tmp = closure_17();
  importDefault = tmp;
  const id = user.id;
  let items = [AuthenticationStore];
  let items1 = [hasVideo, id];
  const stateFromStores = hasVideo(id[14]).useStateFromStores(items, () => {
    let tmp = hasVideo;
    if (hasVideo) {
      tmp = id === AuthenticationStore.getId();
    }
    return tmp;
  }, items1);
  let obj = hasVideo(id[14]);
  const items2 = [MediaEngineStore];
  const items3 = [id];
  _slicedToArray = _slicedToArray(hasVideo(id[14]).useStateFromStoresArray(items2, () => {
    const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
    return items;
  }, items3), 1)[0];
  let obj2 = hasVideo(id[14]);
  const items4 = [MediaEngineStore];
  const items5 = [id];
  const tmp5 = hasVideo(id[14]).useStateFromStores(items4, () => {
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
        const VideoSpinnerContext = hasVideo(tmp3[21]).VideoSpinnerContext;
        obj4.videoSpinnerContext = stateFromStores ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
        obj4.userId = user.id;
        let tmp6Result = closure_14(require("VideoRenderer"), obj4);
        const tmp8 = require("VideoRenderer");
      }
      return tmp6Result;
    }
  }
  const obj5 = { style: tmp.imageBackground, url: null, user: null, guildId: null, speaking: null, size: null, renderVideoDetails: null };
  let obj3 = hasVideo(id[14]);
  obj5.url = user.getAvatarURL(guildId, 128);
  obj5.user = user;
  obj5.guildId = guildId;
  obj5.speaking = speaking;
  obj5.size = avatarSize;
  obj5.renderVideoDetails = function renderVideoDetails() {
    if (closure_3) {
      const obj = { style: closure_1.autoDisabledVideoWrapper, children: null };
      const obj2 = { style: null, children: null };
      const items = [, ];
      ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = closure_1);
      obj2.style = items;
      const obj3 = { source: _modDef9755, size: native.Icon.Sizes.SMALL, disableColor: true };
      const items1 = [closure_2_14(native.Icon, obj3), ];
      const obj4 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.m2Hyj0);
      items1[1] = closure_2_14(Text_Text.Text, obj4);
      obj2.children = items1;
      obj.children = __initData(View, obj2);
      let tmp2 = closure_2_14(View, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  };
  tmp6Result = closure_14(require("VideoBackground"), obj5);
  const tmp10 = require("VideoBackground");
});
let closure_19 = noop.memo((userId) => {
  userId = userId.userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp = closure_17();
  let items = [MediaEngineStore];
  const items1 = [userId];
  const tmp4 = _slicedToArray(userId(504).useStateFromStoresArray(items, () => {
    const items = [MediaEngineStore.isLocalMute(userId), MediaEngineStore.isLocalVideoDisabled(userId), MediaEngineStore.isLocalVideoAutoDisabled(userId)];
    return items;
  }, items1), 3);
  let tmp5 = tmp4[1];
  if (tmp4[0]) {
    let tmp6 = _modDef8737;
  } else if (deafened) {
    tmp6 = _modDef9756;
  } else if (muted) {
    tmp6 = _modDef9757;
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
      const obj3 = { source: _modDef9758, size: tmp2(1176).Icon.Sizes.SMALL, disableColor: true };
      obj2.children = closure_14(tmp2(1176).Icon, obj3);
      tmp14 = closure_14(View, obj2);
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
      const obj6 = { source: tmp6, size: tmp2(1176).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp6 === _modDef8737 };
      obj5.children = closure_14(tmp2(1176).Icon, obj6);
      tmp19Result = closure_14(View, obj5);
    }
    const obj7 = { children: null };
    items3[1] = tmp19Result;
    obj7.children = items3;
    let tmp11Result = closure_15(closure_16, obj7);
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
    COVER = participant(onDoubleTap[20]).ResizeMode.COVER;
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
  const voiceState = participant.voiceState;
  const callback2 = user.useCallback(() => {
    let tmpResult;
    if (onLongPress != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items2);
  ({ streamId, ringing } = participant);
  let channelId;
  const obj = { userId: participant.id };
  const tmp3 = closure_17();
  if (voiceState != null) {
    channelId = voiceState.channelId;
  }
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmp14 = tmp7(tmp8[27])(participant);
  let flag;
  if (voiceState != null) {
    flag = voiceState.isVoiceMuted();
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (voiceState != null) {
    flag2 = voiceState.isVoiceDeafened();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  const tmp9 = onSingleTap(onDoubleTap[26])({ userId: participant.id });
  const items3 = [MediaEngineStore];
  const items4 = [user.id, participant.type];
  const stateFromStores = participant(onDoubleTap[14]).useStateFromStores(items3, () => {
    let isLocalVideoDisabledResult = null != user.id;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
    }
    return isLocalVideoDisabledResult;
  }, items4);
  const obj2 = participant(onDoubleTap[14]);
  const voiceChatNavigationContext = participant(onDoubleTap[29]).useVoiceChatNavigationContext();
  let swipeDismissRef;
  if (voiceChatNavigationContext != null) {
    swipeDismissRef = voiceChatNavigationContext.swipeDismissRef;
  }
  const user2 = participant.user;
  id = undefined;
  if (user2 != null) {
    id = user2.id;
  }
  const obj3 = participant(onDoubleTap[29]);
  const items5 = [VoiceChannelEffectsStore];
  const stateFromStores1 = participant(onDoubleTap[14]).useStateFromStores(items5, () => {
    let effectForUserId = null;
    if (null != id) {
      effectForUserId = VoiceChannelEffectsStore.getEffectForUserId(tmp);
    }
    return effectForUserId;
  });
  if (participant.type !== ParticipantTypes.USER) {
    const type = participant.type;
  }
  const tmp15Result = participant(onDoubleTap[14]);
  const Gesture = tmp15(tmp8[31]).Gesture;
  const tmp21 = onSingleTap(onDoubleTap[30])({ onDoubleTapStart: callback1, onSingleTapStart: callback });
  const LongPressResult = Gesture.LongPress();
  const minDurationResult = Gesture.LongPress().onStart(callback2).minDuration(800);
  let result = minDurationResult;
  if (null != swipeDismissRef) {
    result = minDurationResult.requireExternalGestureToFail(swipeDismissRef);
  }
  const obj4 = { gesture: null, children: null };
  const Gesture2 = tmp15(tmp8[31]).Gesture;
  obj4.gesture = Gesture2.Simultaneous(result, tmp21);
  const obj5 = { style: null, children: null };
  const items6 = [tmp3.container, style];
  obj5.style = items6;
  const obj6 = { guildId: guild_id, hasVideo: null, streamId: null, user: null, resizeMode: null, ringing: null, speaking: null, avatarSize: null, gestureEnabled: null };
  if (tmp14) {
    tmp14 = !stateFromStores;
  }
  obj6.hasVideo = tmp14;
  obj6.streamId = streamId;
  obj6.user = user;
  obj6.resizeMode = COVER;
  obj6.ringing = ringing;
  obj6.speaking = tmp9;
  obj6.avatarSize = participant.avatarSize;
  obj6.gestureEnabled = gestureEnabled;
  const items7 = [closure_14(closure_18, obj6), , ];
  let tmp23Result = null;
  if (null != id) {
    tmp23Result = null;
    if (null != stateFromStores1) {
      const obj7 = {
        voiceChannelEffect: stateFromStores1,
        onComplete() {
              return closure_7(id);
            },
        userId: id,
        hasNotch
      };
      tmp23Result = closure_14(tmp7(tmp8[32]), obj7);
    }
  }
  items7[1] = tmp23Result;
  items7[2] = closure_14(closure_19, { muted: flag, deafened: flag2, userId: user.id, style: statusStyle });
  obj5.children = items7;
  obj4.children = closure_15(id, obj5);
  return closure_14(participant(onDoubleTap[31]).GestureDetector, obj4);
};