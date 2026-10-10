// === Module 10905: UserTile ===

// Module 10905 (UserTile)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import _modDef10910 from "module_10910" /* 10910 */;
import _modDef10911 from "module_10911" /* 10911 */;
import _modDef10912 from "module_10912" /* 10912 */;
import _modDef10913 from "module_10913" /* 10913 */;
import _modDef10914 from "module_10914" /* 10914 */;
import mediaEngineContextFromParticipantTypeDefault from "mediaEngineContextFromParticipantType" /* 10915 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VoiceChannelEffectsStore from "VoiceChannelEffectsStore" /* 10906 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;

require = fn;
const View = fn(17).View;
let closure_7 = fn(10906).clearVoiceChannelEffectForUser;
const VideoToggleState = fn(1085).VideoToggleState;
const ParticipantTypes = fn(5115).ParticipantTypes;
const MediaEngineContextTypes = fn(5117).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(5092);
let obj = { container: { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK }, imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" }, autoDisabledVideoWrapper: { width: "100%", flexDirection: "row", justifyContent: "center" }, autoDisabledVideo: null, autoDisabledVideoTextWrapper: null, statusWrapper: null, labelText: null };
let obj4 = { backgroundColor: null, alignItems: "center", height: 24 };
let ColorUtils = fn(4967);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj.autoDisabledVideo = obj4;
let obj3 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
obj.autoDisabledVideoTextWrapper = { borderRadius: nativeDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
let size = { position: "absolute", bottom: 8, right: 8, backgroundColor: null, borderRadius: null, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
ColorUtils = fn(4967);
size.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
size.borderRadius = nativeDefault.radii.md;
obj.statusWrapper = size;
obj.labelText = { marginLeft: 8, height: 20, alignItems: "center" };
let closure_17 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_18 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VideoContent(guildId) {
  const cResult = hasVideo(id[15]).c(35);
  ({ streamId, user, resizeMode, ringing, avatarSize, speaking, gestureEnabled, hasVideo } = guildId);
  guildId = guildId.guildId;
  const tmp4 = closure_17();
  closure_1 = tmp4;
  id = user.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === hasVideo) {
    if (cResult[2] === id) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStores = hasVideo(tmp2[16]).useStateFromStores(first, tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [MediaEngineStore];
      cResult[5] = items1;
      let tmp10 = items1;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== id) {
      class F {
        constructor() {
          items = [];
          items[0] = closure_10.isLocalVideoAutoDisabled(id);
          return items;
        }
      }
      const items2 = [id];
      cResult[6] = id;
      cResult[7] = F;
      cResult[8] = items2;
      let tmp13 = items2;
    } else {
      class F {
        constructor() {
          items = [];
          items[0] = closure_10.isLocalVideoAutoDisabled(id);
          return items;
        }
      }
      tmp13 = cResult[8];
    }
    const tmpResult = hasVideo(tmp2[16]);
    first1 = first1(hasVideo(tmp2[16]).useStateFromStoresArray(tmp10, F, tmp13), 1)[0];
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          items = [];
          items[0] = closure_10.isLocalVideoAutoDisabled(id);
          return items;
        }
      }
      const items3 = [MediaEngineStore];
      cResult[9] = items3;
      const tmp16 = items3;
    } else {
      class F {
        constructor() {
          items = [];
          items[0] = closure_10.isLocalVideoAutoDisabled(id);
          return items;
        }
      }
    }
    if (cResult[10] !== id) {
      class P {
        constructor() {
          if (null != id) {
            tmp3 = closure_10;
            tmp4 = MediaEngineContextTypes;
            NONE = closure_10.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
          } else {
            tmp2 = VideoToggleState;
            NONE = VideoToggleState.NONE;
          }
          return NONE;
        }
      }
      const items4 = [id];
      cResult[10] = id;
      cResult[11] = P;
      cResult[12] = items4;
      let tmp18 = items4;
    } else {
      class P {
        constructor() {
          if (null != id) {
            tmp3 = closure_10;
            tmp4 = MediaEngineContextTypes;
            NONE = closure_10.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
          } else {
            tmp2 = VideoToggleState;
            NONE = VideoToggleState.NONE;
          }
          return NONE;
        }
      }
      tmp18 = cResult[12];
    }
    const tmpResult4 = hasVideo(tmp2[16]);
    const tmp20 = hasVideo(tmp2[16]).useStateFromStores(tmp16, P, tmp18) === VideoToggleState.AUTO_PROBING;
    closure_4 = tmp20;
    if (cResult[13] === guildId) {
      class P {
        constructor() {
          if (null != id) {
            tmp3 = closure_10;
            tmp4 = MediaEngineContextTypes;
            NONE = closure_10.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
          } else {
            tmp2 = VideoToggleState;
            NONE = VideoToggleState.NONE;
          }
          return NONE;
        }
      }
      const avatarSpeakingColor = hasVideo(tmp2[17]).useAvatarSpeakingColor(tmp21);
      if (cResult[16] === first1) {
        class P {
          constructor() {
            if (null != id) {
              tmp3 = closure_10;
              tmp4 = MediaEngineContextTypes;
              NONE = closure_10.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
            } else {
              tmp2 = VideoToggleState;
              NONE = VideoToggleState.NONE;
            }
            return NONE;
          }
        }
      }
      function renderVideoAutoDisabledStatus() {
        if (first1) {
          const obj = { style: closure_1.autoDisabledVideoWrapper, children: null };
          const obj2 = { style: null, children: null };
          const items = [, ];
          ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = closure_1);
          obj2.style = items;
          const obj3 = { source: _modDef10910, size: native.Icon.Sizes.SMALL, disableColor: true };
          const items1 = [closure_2_14(native.Icon, obj3), ];
          const obj4 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: null };
          const intl = util.intl;
          obj4.children = intl.string(util.t.m2Hyj0);
          items1[1] = closure_2_14(Text_Text.Text, obj4);
          obj2.children = items1;
          obj.children = value2(View, obj2);
          let tmp2 = closure_2_14(View, obj);
        } else {
          tmp2 = null;
        }
        return tmp2;
      }
      cResult[16] = first1;
      cResult[17] = tmp20;
      cResult[18] = tmp4;
      cResult[19] = renderVideoAutoDisabledStatus;
      const tmpResult6 = hasVideo(tmp2[17]);
    }
    let obj2 = { userId: id, guildId };
    cResult[13] = guildId;
    cResult[14] = id;
    cResult[15] = obj2;
    tmp21 = obj2;
    const tmpResult5 = hasVideo(tmp2[16]);
  }
  const fn = function l() {
    let tmp = hasVideo;
    if (hasVideo) {
      tmp = id === AuthenticationStore.getId();
    }
    return tmp;
  };
  const items5 = [hasVideo, id];
  cResult[1] = hasVideo;
  cResult[2] = id;
  cResult[3] = fn;
  cResult[4] = items5;
  tmp8 = items5;
  tmp7 = fn;
  let obj = hasVideo(id[15]);
}) : (function VideoContent(guildId) {
  ({ user, hasVideo } = guildId);
  guildId = guildId.guildId;
  _slicedToArray = undefined;
  ({ streamId, resizeMode, ringing, avatarSize, speaking, gestureEnabled } = guildId);
  let tmp = closure_17();
  importDefault = tmp;
  const id = user.id;
  let items = [AuthenticationStore];
  let items1 = [hasVideo, id];
  const stateFromStores = hasVideo(id[16]).useStateFromStores(items, () => {
    let tmp = hasVideo;
    if (hasVideo) {
      tmp = id === AuthenticationStore.getId();
    }
    return tmp;
  }, items1);
  let obj = hasVideo(id[16]);
  const items2 = [MediaEngineStore];
  const items3 = [id];
  _slicedToArray = _slicedToArray(hasVideo(id[16]).useStateFromStoresArray(items2, () => {
    const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
    return items;
  }, items3), 1)[0];
  let obj2 = hasVideo(id[16]);
  const items4 = [MediaEngineStore];
  const items5 = [id];
  const tmp5 = hasVideo(id[16]).useStateFromStores(items4, () => {
    if (null != id) {
      let NONE = MediaEngineStore.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
    } else {
      NONE = VideoToggleState.NONE;
    }
    return NONE;
  }, items5) === VideoToggleState.AUTO_PROBING;
  closure_4 = tmp5;
  let obj3 = hasVideo(id[16]);
  const avatarSpeakingColor = hasVideo(id[17]).useAvatarSpeakingColor({ userId: id, guildId });
  if (!ringing) {
    if (hasVideo) {
      if (!tmp5) {
        const obj5 = { resizeMode, streamId, gestureEnabled, videoSpinnerContext: null, userId: null };
        const VideoSpinnerContext = hasVideo(tmp3[24]).VideoSpinnerContext;
        obj5.videoSpinnerContext = stateFromStores ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
        obj5.userId = user.id;
        let tmp7Result = closure_14(require("VideoRenderer"), obj5);
        const tmp9 = require("VideoRenderer");
      }
      return tmp7Result;
    }
  }
  const obj6 = { style: tmp.imageBackground, url: null, user: null, guildId: null, speaking: null, speakingColor: null, size: null, renderVideoDetails: null };
  let obj4 = hasVideo(id[17]);
  obj6.url = user.getAvatarURL(guildId, 128);
  obj6.user = user;
  obj6.guildId = guildId;
  obj6.speaking = speaking;
  obj6.speakingColor = avatarSpeakingColor;
  obj6.size = avatarSize;
  obj6.renderVideoDetails = function renderVideoAutoDisabledStatus() {
    if (closure_3) {
      const obj = { style: closure_1.autoDisabledVideoWrapper, children: null };
      const obj2 = { style: null, children: null };
      const items = [, ];
      ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = closure_1);
      obj2.style = items;
      const obj3 = { source: _modDef10910, size: native.Icon.Sizes.SMALL, disableColor: true };
      const items1 = [closure_2_14(native.Icon, obj3), ];
      const obj4 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.m2Hyj0);
      items1[1] = closure_2_14(Text_Text.Text, obj4);
      obj2.children = items1;
      obj.children = value2(View, obj2);
      let tmp2 = closure_2_14(View, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  };
  tmp7Result = closure_14(require("VideoBackground"), obj6);
  const tmp11 = require("VideoBackground");
}));
ReactCompilerGating = fn(558);
let closure_19 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceStatus(userId) {
  const cResult = userId(576).c(16);
  userId = userId.userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MediaEngineStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function l() {
      const items = [MediaEngineStore.isLocalMute(userId), MediaEngineStore.isLocalVideoDisabled(userId), MediaEngineStore.isLocalVideoAutoDisabled(userId)];
      return items;
    };
    const items1 = [userId];
    cResult[1] = userId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = userId(576);
  const tmp9 = _slicedToArray(userId(504).useStateFromStoresArray(first, tmp7, tmp8), 3);
  let tmp10 = tmp9[1];
  if (tmp9[0]) {
    let tmp11 = _modDef10911;
  } else if (deafened) {
    tmp11 = _modDef10912;
  } else if (muted) {
    tmp11 = _modDef10913;
  }
  if (tmp10) {
    tmp10 = !tmp9[2];
  }
  if (!tmp10) {
    if (null == tmp11) {
      return null;
    }
  }
  if (cResult[4] === tmp10) {
    if (cResult[5] === style) {
      if (cResult[6] === tmp4) {
        let tmp16 = cResult[7];
      }
      if (cResult[8] === tmp11) {
        if (cResult[9] === tmp10) {
          if (cResult[10] === style) {
            if (cResult[11] === tmp4) {
              let tmp21 = cResult[12];
            }
            if (cResult[13] === tmp16) {
            }
            const obj2 = { children: null };
            const items2 = [tmp16, tmp21];
            obj2.children = items2;
            const tmp30 = closure_15(closure_16, obj2);
            cResult[13] = tmp16;
            cResult[14] = tmp21;
            cResult[15] = tmp30;
          }
        }
      }
      let tmp24Result = null;
      if (null != tmp11) {
        const items3 = [tmp4.statusWrapper, style, ];
        let obj3 = null;
        if (tmp10) {
          obj3 = { right: 38 };
        }
        const obj4 = { style: null, children: null };
        items3[2] = obj3;
        obj4.style = items3;
        const obj5 = { source: tmp11, size: tmp(1200).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp11 === _modDef10911 };
        obj4.children = closure_14(tmp(1200).Icon, obj5);
        tmp24Result = closure_14(View, obj4);
      }
      cResult[8] = tmp11;
      cResult[9] = tmp10;
      cResult[10] = style;
      cResult[11] = tmp4;
      cResult[12] = tmp24Result;
      tmp21 = tmp24Result;
    }
  }
  let tmp17 = null;
  if (tmp10) {
    const obj6 = { style: null, children: null };
    const items4 = [tmp4.statusWrapper, style];
    obj6.style = items4;
    const obj7 = { source: _modDef10914, size: tmp(1200).Icon.Sizes.SMALL, disableColor: true };
    obj6.children = closure_14(tmp(1200).Icon, obj7);
    tmp17 = closure_14(View, obj6);
  }
  cResult[4] = tmp10;
  cResult[5] = style;
  cResult[6] = tmp4;
  cResult[7] = tmp17;
  tmp16 = tmp17;
  const tmpResult = userId(504);
}) : (function VoiceStatus(userId) {
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
    let tmp6 = _modDef10911;
  } else if (deafened) {
    tmp6 = _modDef10912;
  } else if (muted) {
    tmp6 = _modDef10913;
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
      const obj3 = { source: _modDef10914, size: tmp2(1200).Icon.Sizes.SMALL, disableColor: true };
      obj2.children = closure_14(tmp2(1200).Icon, obj3);
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
      const obj6 = { source: tmp6, size: tmp2(1200).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp6 === _modDef10911 };
      obj5.children = closure_14(tmp2(1200).Icon, obj6);
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
}));
const __initData = { code: "function UserTileTsx1(){const{onLongPress,participant}=this.__closure;var _onLongPress;return(_onLongPress=onLongPress)===null||_onLongPress===void 0?void 0:_onLongPress(participant);}" };
ReactCompilerGating = fn(558);
let obj5 = { borderRadius: nativeDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserTile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserTile(participant) {
  const cResult = participant(onDoubleTap[15]).c(65);
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  onDoubleTap = participant.onDoubleTap;
  const onLongPress = participant.onLongPress;
  ({ avatarSize, resizeMode, statusStyle, gestureEnabled, hasNotch, style } = participant);
  if (undefined === resizeMode) {
    resizeMode = tmp(tmp2[23]).ResizeMode.COVER;
  }
  closure_17();
  if (cResult[0] === onSingleTap) {
    if (cResult[1] === participant) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === onDoubleTap) {
      if (cResult[4] === participant) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === onLongPress) {
        if (cResult[7] === participant) {
          let tmp7 = cResult[8];
        }
        const streamId = participant.streamId;
        class UserTileTsx1 {
          constructor() {
            tmpResult = undefined;
            if (onLongPress != null) {
              tmp3 = participant;
              tmpResult = tmp(participant);
            }
            return tmpResult;
          }
        }
        const user = participant.user;
        ({ voiceState, id } = participant);
        if (cResult[9] !== id) {
          const obj2 = { userId: id };
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          cResult[9] = id;
          cResult[10] = obj2;
          let tmp9 = obj2;
        } else {
          tmp9 = cResult[10];
        }
        onSingleTap(tmp2[29])(tmp9);
        let channelId;
        if (voiceState != null) {
          channelId = voiceState.channelId;
        }
        const channel = ChannelStore.getChannel(channelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (cResult[11] !== participant) {
          const tmp18 = tmp10(tmp2[30])(participant);
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          cResult[12] = tmp18;
        }
        if (cResult[13] !== voiceState) {
          let isVoiceMutedResult;
          if (voiceState != null) {
            isVoiceMutedResult = voiceState.isVoiceMuted();
          }
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          cResult[13] = voiceState;
          cResult[14] = isVoiceMutedResult;
        }
        if (cResult[15] !== voiceState) {
          let isVoiceDeafenedResult;
          if (voiceState != null) {
            isVoiceDeafenedResult = voiceState.isVoiceDeafened();
          }
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          cResult[15] = voiceState;
          cResult[16] = isVoiceDeafenedResult;
        }
        const _Symbol = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [];
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          cResult[17] = items;
        }
        if (cResult[18] === participant.type) {
          tmp(tmp2[16]);
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          const voiceChatNavigationContext = tmp(tmp2[32]).useVoiceChatNavigationContext();
          if (voiceChatNavigationContext != null) {
            const swipeDismissRef = voiceChatNavigationContext.swipeDismissRef;
          }
          const user2 = participant.user;
          let id1;
          if (user2 != null) {
            id1 = user2.id;
          }
          const _Symbol2 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [];
            class UserTileTsx1 {
              constructor() {
                tmpResult = undefined;
                if (onLongPress != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            cResult[22] = items1;
            let tmp31 = items1;
          } else {
            tmp31 = cResult[22];
          }
          if (cResult[23] !== id1) {
            function ie() {
              let effectForUserId = null;
              if (null != id1) {
                effectForUserId = VoiceChannelEffectsStore.getEffectForUserId(tmp);
              }
              return effectForUserId;
            }
            class UserTileTsx1 {
              constructor() {
                tmpResult = undefined;
                if (onLongPress != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            cResult[24] = ie;
            let tmp33 = ie;
          } else {
            tmp33 = cResult[24];
          }
          const tmpResult3 = tmp(tmp2[32]);
          const stateFromStores = tmp(tmp2[16]).useStateFromStores(tmp31, tmp33);
          const type = participant.type;
          const USER = ParticipantTypes.USER;
          if (cResult[25] === tmp6) {
            if (cResult[26] === tmp5) {
              let tmp37 = cResult[27];
            }
            const tmp38 = tmp10(tmp2[33])(tmp37);
            class UserTileTsx1 {
              constructor() {
                tmpResult = undefined;
                if (onLongPress != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            const Gesture = tmp(tmp2[34]).Gesture;
            const LongPressResult = Gesture.LongPress();
            const runOnJSResult = Gesture.LongPress().runOnJS(true);
            const minDurationResult = Gesture.LongPress().runOnJS(true).onStart(tmp7).minDuration(800);
            let result = minDurationResult;
            if (null != swipeDismissRef) {
              result = minDurationResult.requireExternalGestureToFail(swipeDismissRef);
            }
            const GestureDetector = tmp(tmp2[34]).GestureDetector;
            const Gesture2 = tmp(tmp2[34]).Gesture;
            const SimultaneousResult = Gesture2.Simultaneous(result, tmp38);
            cResult[28] = tmp7;
            cResult[29] = swipeDismissRef;
            cResult[30] = tmp38;
            cResult[31] = GestureDetector;
            cResult[32] = SimultaneousResult;
            const onStartResult = Gesture.LongPress().runOnJS(true).onStart(tmp7);
          }
          const obj3 = { onDoubleTapStart: tmp6, onSingleTapStart: tmp5 };
          cResult[25] = tmp6;
          cResult[26] = tmp5;
          cResult[27] = obj3;
          tmp37 = obj3;
          const tmpResult4 = tmp(tmp2[16]);
        }
        const fn2 = function $() {
          let isLocalVideoDisabledResult = null != user.id;
          if (isLocalVideoDisabledResult) {
            isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
          }
          return isLocalVideoDisabledResult;
        };
        const items2 = [user.id, participant.type];
        cResult[18] = participant.type;
        cResult[19] = user.id;
        cResult[20] = fn2;
        cResult[21] = items2;
      }
      class UserTileTsx1 {
        constructor() {
          tmpResult = undefined;
          if (onLongPress != null) {
            tmp3 = participant;
            tmpResult = tmp(participant);
          }
          return tmpResult;
        }
      }
      const obj4 = { onLongPress, participant };
      UserTileTsx1.__closure = obj4;
      UserTileTsx1.__workletHash = 2859882955573;
      UserTileTsx1.__initData = __initData;
      cResult[6] = onLongPress;
      cResult[7] = participant;
      cResult[8] = UserTileTsx1;
      tmp7 = UserTileTsx1;
    }
    class R {
      constructor() {
        tmpResult = undefined;
        if (onDoubleTap != null) {
          tmp3 = participant;
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }
    }
    cResult[3] = onDoubleTap;
    cResult[4] = participant;
    cResult[5] = R;
    tmp6 = R;
  }
  const fn = function o() {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  };
  cResult[0] = onSingleTap;
  cResult[1] = participant;
  cResult[2] = fn;
  tmp5 = fn;
  const obj = participant(onDoubleTap[15]);
}) : (function UserTile(participant) {
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const onLongPress = participant.onLongPress;
  let COVER = participant.resizeMode;
  if (COVER === undefined) {
    COVER = participant(onDoubleTap[23]).ResizeMode.COVER;
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
  let tmp14 = tmp7(tmp8[30])(participant);
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
  const tmp9 = onSingleTap(onDoubleTap[29])({ userId: participant.id });
  const items3 = [MediaEngineStore];
  const items4 = [user.id, participant.type];
  const stateFromStores = participant(onDoubleTap[16]).useStateFromStores(items3, () => {
    let isLocalVideoDisabledResult = null != user.id;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
    }
    return isLocalVideoDisabledResult;
  }, items4);
  const obj2 = participant(onDoubleTap[16]);
  const voiceChatNavigationContext = participant(onDoubleTap[32]).useVoiceChatNavigationContext();
  let swipeDismissRef;
  if (voiceChatNavigationContext != null) {
    swipeDismissRef = voiceChatNavigationContext.swipeDismissRef;
  }
  const user2 = participant.user;
  id = undefined;
  if (user2 != null) {
    id = user2.id;
  }
  const obj3 = participant(onDoubleTap[32]);
  const items5 = [VoiceChannelEffectsStore];
  const stateFromStores1 = participant(onDoubleTap[16]).useStateFromStores(items5, () => {
    let effectForUserId = null;
    if (null != id) {
      effectForUserId = VoiceChannelEffectsStore.getEffectForUserId(tmp);
    }
    return effectForUserId;
  });
  if (participant.type !== ParticipantTypes.USER) {
    const type = participant.type;
  }
  const tmp15Result = participant(onDoubleTap[16]);
  const Gesture = tmp15(tmp8[34]).Gesture;
  const tmp21 = onSingleTap(onDoubleTap[33])({ onDoubleTapStart: callback1, onSingleTapStart: callback });
  const LongPressResult = Gesture.LongPress();
  const runOnJSResult = Gesture.LongPress().runOnJS(true);
  const minDurationResult = Gesture.LongPress().runOnJS(true).onStart(callback2).minDuration(800);
  let result = minDurationResult;
  if (null != swipeDismissRef) {
    result = minDurationResult.requireExternalGestureToFail(swipeDismissRef);
  }
  const obj4 = { gesture: null, children: null };
  const Gesture2 = tmp15(tmp8[34]).Gesture;
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
      tmp23Result = closure_14(tmp7(tmp8[35]), obj7);
    }
  }
  items7[1] = tmp23Result;
  items7[2] = closure_14(closure_19, { muted: flag, deafened: flag2, userId: user.id, style: statusStyle });
  obj5.children = items7;
  obj4.children = closure_15(id, obj5);
  return closure_14(participant(onDoubleTap[34]).GestureDetector, obj4);
});