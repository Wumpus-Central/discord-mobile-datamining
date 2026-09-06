// === Module 9623: UserTile ===

// Module 9623 (UserTile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import _modDef8614 from "module_8614" /* 8614 */;
import _modDef9625 from "module_9625" /* 9625 */;
import _modDef9626 from "module_9626" /* 9626 */;
import _modDef9627 from "module_9627" /* 9627 */;
import _modDef9628 from "module_9628" /* 9628 */;
import mediaEngineContextFromParticipantTypeDefault from "mediaEngineContextFromParticipantType" /* 9629 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VoiceChannelEffectsStore from "VoiceChannelEffectsStore" /* 9624 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
const View = fn(17).View;
let closure_7 = fn(9624).clearVoiceChannelEffectForUser;
const VideoToggleState = fn(1074).VideoToggleState;
const ParticipantTypes = fn(4581).ParticipantTypes;
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
fn(4560);
let obj = { container: null, imageBackground: null, autoDisabledVideoWrapper: null, autoDisabledVideo: null, autoDisabledVideoTextWrapper: null, statusWrapper: null, labelText: null };
obj = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
obj.container = obj;
obj.imageBackground = { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" };
obj.autoDisabledVideoWrapper = { width: "100%", flexDirection: "row", justifyContent: "center" };
const createStyles = { backgroundColor: null, alignItems: "center", height: 24 };
let ColorUtils = fn(4409);
createStyles.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj.autoDisabledVideo = createStyles;
obj.autoDisabledVideoTextWrapper = { borderRadius: nativeDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
let size = { position: "absolute", bottom: 8, right: 8, backgroundColor: null, borderRadius: null, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
ColorUtils = fn(4409);
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
  let obj = hasVideo(id[14]);
  let items = [AuthenticationStore];
  let items1 = [hasVideo, id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = hasVideo;
    if (hasVideo) {
      tmp = id === AuthenticationStore.getId();
    }
    return tmp;
  }, items1);
  const items2 = [MediaEngineStore];
  const items3 = [id];
  _slicedToArray = _slicedToArray(hasVideo(id[14]).useStateFromStoresArray(items2, () => {
    const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
    return items;
  }, items3), 1)[0];
  const obj2 = hasVideo(id[14]);
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
        obj = { resizeMode, streamId, gestureEnabled, videoSpinnerContext: null, userId: null };
        const VideoSpinnerContext = hasVideo(tmp3[21]).VideoSpinnerContext;
        obj.videoSpinnerContext = stateFromStores ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
        obj.userId = user.id;
        let tmp6Result = closure_14(require("VideoRenderer"), obj);
        const tmp8 = require("VideoRenderer");
      }
      return tmp6Result;
    }
  }
  obj = { style: tmp.imageBackground, url: null, user: null, guildId: null, speaking: null, size: null, renderVideoDetails: null };
  const obj3 = hasVideo(id[14]);
  obj.url = user.getAvatarURL(guildId, 128);
  obj.user = user;
  obj.guildId = guildId;
  obj.speaking = speaking;
  obj.size = avatarSize;
  obj.renderVideoDetails = function renderVideoDetails() {
    if (closure_3) {
      let obj = { style: closure_1.autoDisabledVideoWrapper, children: null };
      obj = { style: null, children: null };
      const items = [, ];
      ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = closure_1);
      obj.style = items;
      obj = { source: _modDef9625, size: native.Icon.Sizes.SMALL, disableColor: true };
      const items1 = [closure_2_14(native.Icon, obj), ];
      const obj1 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: null };
      const intl = util.intl;
      obj1.children = intl.string(util.t.m2Hyj0);
      items1[1] = closure_2_14(Text_Text.Text, obj1);
      obj.children = items1;
      obj.children = __initData(View, obj);
      let tmp2 = closure_2_14(View, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  };
  tmp6Result = closure_14(require("VideoBackground"), obj);
  const tmp10 = require("VideoBackground");
});
let closure_19 = noop.memo((userId) => {
  userId = userId.userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp = closure_17();
  let obj = userId(504);
  let items = [MediaEngineStore];
  const items1 = [userId];
  const tmp4 = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const items = [MediaEngineStore.isLocalMute(userId), MediaEngineStore.isLocalVideoDisabled(userId), MediaEngineStore.isLocalVideoAutoDisabled(userId)];
    return items;
  }, items1), 3);
  let tmp5 = tmp4[1];
  if (tmp4[0]) {
    let tmp6 = _modDef8614;
  } else if (deafened) {
    tmp6 = _modDef9626;
  } else if (muted) {
    tmp6 = _modDef9627;
  }
  if (tmp5) {
    tmp5 = !tmp4[2];
  }
  if (tmp5) {
    let tmp14 = null;
    if (tmp5) {
      obj = { style: null, children: null };
      const items2 = [tmp.statusWrapper, style];
      obj.style = items2;
      obj = { source: _modDef9628, size: tmp2(1178).Icon.Sizes.SMALL, disableColor: true };
      obj.children = closure_14(tmp2(1178).Icon, obj);
      tmp14 = closure_14(View, obj);
    }
    const items3 = [tmp14, ];
    let tmp19Result = null;
    if (null != tmp6) {
      const items4 = [tmp.statusWrapper, style, ];
      let obj1 = null;
      if (tmp5) {
        obj1 = { right: 38 };
      }
      const obj2 = { style: null, children: null };
      items4[2] = obj1;
      obj2.style = items4;
      const obj3 = { source: tmp6, size: tmp2(1178).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp6 === _modDef8614 };
      obj2.children = closure_14(tmp2(1178).Icon, obj3);
      tmp19Result = closure_14(View, obj2);
    }
    const obj4 = { children: null };
    items3[1] = tmp19Result;
    obj4.children = items3;
    let tmp11Result = closure_15(closure_16, obj4);
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
  let obj = { userId: participant.id };
  let channelId;
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
  let obj1 = participant(tmp8[14]);
  const items3 = [MediaEngineStore];
  const items4 = [user.id, participant.type];
  const stateFromStores = obj1.useStateFromStores(items3, () => {
    let isLocalVideoDisabledResult = null != user.id;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
    }
    return isLocalVideoDisabledResult;
  }, items4);
  let obj2 = participant(tmp8[29]);
  const voiceChatNavigationContext = obj2.useVoiceChatNavigationContext();
  let swipeDismissRef;
  if (voiceChatNavigationContext != null) {
    swipeDismissRef = voiceChatNavigationContext.swipeDismissRef;
  }
  const user2 = participant.user;
  id = undefined;
  if (user2 != null) {
    id = user2.id;
  }
  const tmp9 = onSingleTap(onDoubleTap[26])(obj);
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
  obj = { gesture: null, children: null };
  const Gesture2 = tmp15(tmp8[31]).Gesture;
  obj.gesture = Gesture2.Simultaneous(result, tmp21);
  obj = { style: null, children: null };
  const items6 = [tmp3.container, style];
  obj.style = items6;
  obj1 = { guildId: guild_id, hasVideo: null, streamId: null, user: null, resizeMode: null, ringing: null, speaking: null, avatarSize: null, gestureEnabled: null };
  if (tmp14) {
    tmp14 = !stateFromStores;
  }
  obj1.hasVideo = tmp14;
  obj1.streamId = streamId;
  obj1.user = user;
  obj1.resizeMode = COVER;
  obj1.ringing = ringing;
  obj1.speaking = tmp9;
  obj1.avatarSize = participant.avatarSize;
  obj1.gestureEnabled = gestureEnabled;
  const items7 = [closure_14(closure_18, obj1), , ];
  let tmp23Result = null;
  if (null != id) {
    tmp23Result = null;
    if (null != stateFromStores1) {
      obj2 = {
        voiceChannelEffect: stateFromStores1,
        onComplete() {
              return closure_7(id);
            },
        userId: id,
        hasNotch
      };
      tmp23Result = closure_14(tmp7(tmp8[32]), obj2);
    }
  }
  items7[1] = tmp23Result;
  items7[2] = closure_14(closure_19, { muted: flag, deafened: flag2, userId: user.id, style: statusStyle });
  obj.children = items7;
  obj.children = closure_15(id, obj);
  return closure_14(participant(onDoubleTap[31]).GestureDetector, obj);
};