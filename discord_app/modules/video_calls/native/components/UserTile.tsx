// === Module 9609: UserTile ===

// Module 9609 (UserTile)
import ThemesDefault from "Themes" /* 709 */;
import registerAssetDefault from "registerAsset" /* 8760 */;
import registerAssetDefault2 from "registerAsset" /* 9612 */;
import registerAssetDefault3 from "registerAsset" /* 9613 */;
import registerAssetDefault4 from "registerAsset" /* 9614 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "recentlyUsedEmojis" /* 9610 */;
import { clearVoiceChannelEffectForUser as closure_7 } from "recentlyUsedEmojis" /* 9610 */;
import closure_8 from "fetchFingerprint" /* 1215 */;
import closure_9 from "ensureGuildLoaded" /* 1386 */;
import closure_10 from "_detectH265HardwareDecode" /* 4529 */;
import { VideoToggleState } from "ME" /* 673 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4499 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4542 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import hexToRgba from "hexToRgba" /* 4326 */;

const require = arg1;
let c4 = importAllResult;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let obj = { container: null, imageBackground: null, autoDisabledVideoWrapper: null, autoDisabledVideo: null, autoDisabledVideoTextWrapper: null, statusWrapper: null, labelText: null };
obj = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: ThemesDefault.colors.BLACK };
obj[0] = obj;
obj[1] = { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" };
obj[2] = { width: "100%", flexDirection: "row", justifyContent: "center" };
createCacheKey = { backgroundColor: null, alignItems: "center", height: 24 };
createCacheKey[0] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj[3] = createCacheKey;
obj[4] = { borderRadius: ThemesDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
let obj3 = { position: "absolute", bottom: 8, right: 8, backgroundColor: null, borderRadius: null, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj3[3] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj3[4] = ThemesDefault.radii.md;
obj[5] = obj3;
obj[6] = { marginLeft: 8, height: 20, alignItems: "center" };
let closure_17 = createCacheKey.createStyles(obj);
let closure_18 = importAllResult.memo((guildId) => {
  ({ user, hasVideo } = guildId);
  guildId = guildId.guildId;
  importDefault = undefined;
  let id;
  let callback;
  closure_4 = undefined;
  ({ streamId, resizeMode, ringing, avatarSize, speaking, gestureEnabled } = guildId);
  let tmp = callback3();
  importDefault = tmp;
  id = user.id;
  let obj = hasVideo(id[14]);
  let items = [closure_8];
  let items1 = [hasVideo, id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = hasVideo;
    if (hasVideo) {
      tmp = id === closure_1_8.getId();
    }
    return tmp;
  }, items1);
  const items2 = [closure_10];
  const items3 = [id];
  callback = callback(hasVideo(id[14]).useStateFromStoresArray(items2, () => {
    const items = [closure_1_10.isLocalVideoAutoDisabled(id)];
    return items;
  }, items3), 1)[0];
  const obj2 = hasVideo(id[14]);
  let tmp2 = hasVideo;
  const items4 = [closure_10];
  const items5 = [id];
  const tmp5 = hasVideo(id[14]).useStateFromStores(items4, () => {
    if (null != id) {
      let NONE = closure_1_10.getVideoToggleState(tmp, closure_1_13.DEFAULT);
    } else {
      NONE = closure_1_11.NONE;
    }
    return NONE;
  }, items5) === VideoToggleState.AUTO_PROBING;
  closure_4 = tmp5;
  if (!ringing) {
    if (hasVideo) {
      if (!tmp5) {
        obj = { resizeMode: null, streamId: null, gestureEnabled: null, videoSpinnerContext: null, userId: null };
        obj[0] = resizeMode;
        obj[1] = streamId;
        obj[2] = gestureEnabled;
        const VideoSpinnerContext = tmp2(tmp3[21]).VideoSpinnerContext;
        obj[3] = stateFromStores ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
        obj[4] = user.id;
        let tmp6Result = callback2(importDefault(tmp3[20]), obj);
        const tmp6 = callback2;
        const tmp8 = importDefault(tmp3[20]);
      }
      return tmp6Result;
    }
  }
  obj = { style: tmp.imageBackground, url: null, user: null, guildId: null, speaking: null, size: null, renderVideoDetails: null };
  const obj3 = hasVideo(id[14]);
  obj[1] = user.getAvatarURL(guildId, 128);
  obj[2] = user;
  obj[3] = guildId;
  obj[4] = speaking;
  obj[5] = avatarSize;
  obj[6] = function renderVideoDetails() {
    if (closure_3) {
      let obj = { style: null, children: null };
      obj[0] = lib.autoDisabledVideoWrapper;
      obj = { style: null, children: null };
      const items = [, ];
      ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = lib);
      obj[0] = items;
      obj = { source: null, size: null, disableColor: true };
      obj[0] = lib(id[17]);
      obj[1] = hasVideo(id[16]).Icon.Sizes.SMALL;
      const items1 = [closure_1_14(hasVideo(id[16]).Icon, obj), ];
      obj1 = { variant: "text-sm/normal", color: "text-default", style: null, children: null };
      obj1[2] = lib.labelText;
      const intl = hasVideo(id[19]).intl;
      obj1[3] = intl.string(hasVideo(id[19]).t.m2Hyj0);
      items1[1] = closure_1_14(hasVideo(id[18]).Text, obj1);
      obj[1] = items1;
      obj[1] = closure_1_15(closure_1_5, obj);
      let tmp2 = closure_1_14(closure_1_5, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  };
  tmp6Result = callback2(importDefault(id[15]), obj);
});
let closure_19 = importAllResult.memo((userId) => {
  userId = userId.userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp = callback3();
  let obj = userId(586);
  let items = [closure_10];
  const items1 = [userId];
  const tmp4 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_1_10.isLocalMute(userId), closure_1_10.isLocalVideoDisabled(userId), closure_1_10.isLocalVideoAutoDisabled(userId)];
    return items;
  }, items1), 3);
  let tmp5 = tmp4[1];
  if (tmp4[0]) {
    let tmp6 = registerAssetDefault;
  } else if (deafened) {
    tmp6 = registerAssetDefault2;
  } else if (muted) {
    tmp6 = registerAssetDefault3;
  }
  if (tmp5) {
    tmp5 = !tmp4[2];
  }
  if (tmp5) {
    let tmp14 = null;
    if (tmp5) {
      obj = { style: null, children: null };
      const items2 = [tmp.statusWrapper, style];
      obj[0] = items2;
      obj = { source: null, size: null, disableColor: true };
      obj[0] = registerAssetDefault4;
      obj[1] = tmp2(1296).Icon.Sizes.SMALL;
      obj[1] = callback2(tmp2(1296).Icon, obj);
      tmp14 = callback2(View, obj);
    }
    const items3 = [tmp14, ];
    let tmp19Result = null;
    if (null != tmp6) {
      const items4 = [tmp.statusWrapper, style, ];
      obj1 = null;
      if (tmp5) {
        obj1 = { right: 38 };
      }
      const obj2 = { style: null, children: null };
      items4[2] = obj1;
      obj2[0] = items4;
      const obj3 = { source: null, size: null, color: null, disableColor: null };
      obj3[0] = tmp6;
      obj3[1] = tmp2(1296).Icon.Sizes.SMALL;
      obj3[2] = ThemesDefault.unsafe_rawColors.WHITE;
      obj3[3] = tmp6 === registerAssetDefault;
      obj2[1] = callback2(tmp2(1296).Icon, obj3);
      tmp19Result = tmp19(View, obj2);
      const tmp20 = View;
    }
    const obj4 = { children: null };
    items3[1] = tmp19Result;
    obj4[0] = items3;
    let tmp11Result = closure_15(closure_16, obj4);
    const tmp11 = closure_15;
    const tmp12 = closure_16;
  } else {
    tmp11Result = null;
  }
  return tmp11Result;
});
let obj2 = { borderRadius: ThemesDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
let result = require("set").fileFinishedImporting("modules/video_calls/native/components/UserTile.tsx");

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
  const tmp3 = callback3();
  if (voiceState != null) {
    channelId = voiceState.channelId;
  }
  channel = channel.getChannel(channelId);
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
  obj1 = participant(tmp8[14]);
  const items3 = [closure_10];
  const items4 = [user.id, participant.type];
  const stateFromStores = obj1.useStateFromStores(items3, () => {
    let isLocalVideoDisabledResult = null != user.id;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = closure_1_10.isLocalVideoDisabled(tmp.id, onSingleTap(onDoubleTap[28])(participant.type));
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
  const items5 = [closure_6];
  const stateFromStores1 = participant(onDoubleTap[14]).useStateFromStores(items5, () => {
    let effectForUserId = null;
    if (null != id) {
      effectForUserId = closure_1_6.getEffectForUserId(tmp);
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
  obj[0] = Gesture2.Simultaneous(result, tmp21);
  obj = { style: items6, children: null };
  items6 = [tmp3.container, style];
  obj1 = { guildId: guild_id, hasVideo: null, streamId: null, user: null, resizeMode: null, ringing: null, speaking: null, avatarSize: null, gestureEnabled: null };
  if (tmp14) {
    tmp14 = !stateFromStores;
  }
  obj1[1] = tmp14;
  obj1[2] = streamId;
  obj1[3] = user;
  obj1[4] = COVER;
  obj1[5] = ringing;
  obj1[6] = tmp9;
  obj1[7] = participant.avatarSize;
  obj1[8] = gestureEnabled;
  const items7 = [closure_14(closure_18, obj1), , ];
  let tmp23Result = null;
  if (null != id) {
    tmp23Result = null;
    if (null != stateFromStores1) {
      obj2 = { voiceChannelEffect: null, onComplete: null, userId: null, hasNotch: null };
      obj2[0] = stateFromStores1;
      obj2[1] = function onComplete() {
        return closure_1_7(id);
      };
      obj2[2] = id;
      obj2[3] = hasNotch;
      tmp23Result = tmp23(tmp7(tmp8[32]), obj2);
    }
  }
  items7[1] = tmp23Result;
  items7[2] = closure_14(closure_19, { muted: flag, deafened: flag2, userId: user.id, style: statusStyle });
  obj[1] = items7;
  obj[1] = closure_15(id, obj);
  return closure_14(participant(onDoubleTap[31]).GestureDetector, obj);
};