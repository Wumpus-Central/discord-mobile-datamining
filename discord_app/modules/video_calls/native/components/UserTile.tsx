// === Module 11485: UserTile ===

// Module 11485 (UserTile)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import native from "native" /* 1199 */;
import Text_Text from "Text/Text" /* 5270 */;
import _modDef11487 from "module_11487" /* 11487 */;
import _modDef11488 from "module_11488" /* 11488 */;
import _modDef11489 from "module_11489" /* 11489 */;
import _modDef11490 from "module_11490" /* 11490 */;
import _modDef11491 from "module_11491" /* 11491 */;
import mediaEngineContextFromParticipantTypeDefault from "mediaEngineContextFromParticipantType" /* 11492 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 6042 */;
import VoiceChannelEffectsStore from "VoiceChannelEffectsStore" /* 11486 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;

require = fn;
const View = fn(17).View;
let closure_8 = fn(11486).clearVoiceChannelEffectForUser;
const VideoToggleState = fn(1084).VideoToggleState;
const ParticipantTypes = fn(5668).ParticipantTypes;
const MediaEngineContextTypes = fn(5754).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const createStyles = fn(5004);
let obj = { container: { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK }, imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" }, autoDisabledVideoWrapper: { width: "100%", flexDirection: "row", justifyContent: "center" }, autoDisabledVideo: null, autoDisabledVideoTextWrapper: null, statusWrapper: null, labelText: null };
let obj4 = { backgroundColor: null, alignItems: "center", height: 24 };
let ColorUtils = fn(5001);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj.autoDisabledVideo = obj4;
let obj3 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
obj.autoDisabledVideoTextWrapper = { borderRadius: nativeDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
let size = { position: "absolute", bottom: 8, right: 8, backgroundColor: null, borderRadius: null, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
ColorUtils = fn(5001);
size.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
size.borderRadius = nativeDefault.radii.md;
obj.statusWrapper = size;
obj.labelText = { marginLeft: 8, height: 20, alignItems: "center" };
let closure_18 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_19 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VideoContent(arg0) {
  const cResult = hasVideo(id[16]).c(32);
  ({ streamId, user, resizeMode, ringing, avatarSize, speaking, playingSoundboard, gestureEnabled, hasVideo } = arg0);
  const tmp4 = closure_18();
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
    const stateFromStores = hasVideo(tmp2[17]).useStateFromStores(first, tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [MediaEngineStore];
      cResult[5] = items1;
      let tmp10 = items1;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== id) {
      class R {
        constructor() {
          items = [];
          items[0] = closure_11.isLocalVideoAutoDisabled(id);
          return items;
        }
      }
      const items2 = [id];
      cResult[6] = id;
      cResult[7] = R;
      cResult[8] = items2;
      let tmp13 = items2;
    } else {
      class R {
        constructor() {
          items = [];
          items[0] = closure_11.isLocalVideoAutoDisabled(id);
          return items;
        }
      }
      tmp13 = cResult[8];
    }
    const tmpResult = hasVideo(tmp2[17]);
    first1 = first1(hasVideo(tmp2[17]).useStateFromStoresArray(tmp10, R, tmp13), 1)[0];
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          items = [];
          items[0] = closure_11.isLocalVideoAutoDisabled(id);
          return items;
        }
      }
      const items3 = [MediaEngineStore];
      cResult[9] = items3;
      const tmp16 = items3;
    } else {
      class R {
        constructor() {
          items = [];
          items[0] = closure_11.isLocalVideoAutoDisabled(id);
          return items;
        }
      }
    }
    if (cResult[10] !== id) {
      class R {
        constructor() {
          items = [];
          items[0] = closure_11.isLocalVideoAutoDisabled(id);
          return items;
        }
      }
      const items4 = [id];
      cResult[10] = id;
      cResult[11] = tmp19;
      cResult[12] = items4;
      let tmp18 = items4;
    } else {
      class R {
        constructor() {
          items = [];
          items[0] = closure_11.isLocalVideoAutoDisabled(id);
          return items;
        }
      }
      tmp18 = cResult[12];
    }
    const tmpResult3 = hasVideo(tmp2[17]);
    const tmp21 = hasVideo(tmp2[17]).useStateFromStores(tmp16, tmp19, tmp18) === VideoToggleState.AUTO_PROBING;
    closure_4 = tmp21;
    if (cResult[13] === first1) {
      class R {
        constructor() {
          items = [];
          items[0] = closure_11.isLocalVideoAutoDisabled(id);
          return items;
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
        const obj3 = { source: _modDef11487, size: native.Icon.Sizes.SMALL, disableColor: true };
        const items1 = [value2(native.Icon, obj3), ];
        const obj4 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: null };
        const intl = util.intl;
        obj4.children = intl.string(util.t.m2Hyj0);
        items1[1] = value2(Text_Text.Text, obj4);
        obj2.children = items1;
        obj.children = value3(View, obj2);
        let tmp2 = value2(View, obj);
      } else {
        tmp2 = null;
      }
      return tmp2;
    }
    cResult[13] = first1;
    cResult[14] = tmp21;
    cResult[15] = tmp4;
    cResult[16] = renderVideoAutoDisabledStatus;
    const tmpResult4 = hasVideo(tmp2[17]);
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
  let obj = hasVideo(id[16]);
}) : (function VideoContent(guildId) {
  ({ user, hasVideo } = guildId);
  guildId = guildId.guildId;
  _slicedToArray = undefined;
  ({ streamId, resizeMode, ringing, avatarSize, speaking, playingSoundboard, gestureEnabled } = guildId);
  let tmp = closure_18();
  importDefault = tmp;
  const id = user.id;
  let items = [AuthenticationStore];
  let items1 = [hasVideo, id];
  const stateFromStores = hasVideo(id[17]).useStateFromStores(items, () => {
    let tmp = hasVideo;
    if (hasVideo) {
      tmp = id === AuthenticationStore.getId();
    }
    return tmp;
  }, items1);
  let obj = hasVideo(id[17]);
  const items2 = [MediaEngineStore];
  const items3 = [id];
  _slicedToArray = _slicedToArray(hasVideo(id[17]).useStateFromStoresArray(items2, () => {
    const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
    return items;
  }, items3), 1)[0];
  let obj2 = hasVideo(id[17]);
  const items4 = [MediaEngineStore];
  const items5 = [id];
  const tmp5 = hasVideo(id[17]).useStateFromStores(items4, () => {
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
        const VideoSpinnerContext = hasVideo(tmp3[24]).VideoSpinnerContext;
        obj4.videoSpinnerContext = stateFromStores ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
        obj4.userId = user.id;
        let tmp6Result = closure_15(require("VideoRenderer"), obj4);
        const tmp8 = require("VideoRenderer");
      }
      return tmp6Result;
    }
  }
  const obj5 = { style: tmp.imageBackground, url: null, user: null, guildId: null, speaking: null, playingSoundboard: null, size: null, renderVideoDetails: null };
  let obj3 = hasVideo(id[17]);
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
      const obj3 = { source: _modDef11487, size: native.Icon.Sizes.SMALL, disableColor: true };
      const items1 = [value2(native.Icon, obj3), ];
      const obj4 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.m2Hyj0);
      items1[1] = value2(Text_Text.Text, obj4);
      obj2.children = items1;
      obj.children = value3(View, obj2);
      let tmp2 = value2(View, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  };
  tmp6Result = closure_15(require("VideoBackground"), obj5);
  const tmp10 = require("VideoBackground");
}));
ReactCompilerGating = fn(558);
let closure_20 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceStatus(userId) {
  const cResult = userId(576).c(16);
  userId = userId.userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp4 = closure_18();
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
    let tmp11 = _modDef11488;
  } else if (deafened) {
    tmp11 = _modDef11489;
  } else if (muted) {
    tmp11 = _modDef11490;
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
            const tmp30 = closure_16(closure_17, obj2);
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
        const obj5 = { source: tmp11, size: tmp(1199).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp11 === _modDef11488 };
        obj4.children = closure_15(tmp(1199).Icon, obj5);
        tmp24Result = closure_15(View, obj4);
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
    const obj7 = { source: _modDef11491, size: tmp(1199).Icon.Sizes.SMALL, disableColor: true };
    obj6.children = closure_15(tmp(1199).Icon, obj7);
    tmp17 = closure_15(View, obj6);
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
  const tmp = closure_18();
  let items = [MediaEngineStore];
  const items1 = [userId];
  const tmp4 = _slicedToArray(userId(504).useStateFromStoresArray(items, () => {
    const items = [MediaEngineStore.isLocalMute(userId), MediaEngineStore.isLocalVideoDisabled(userId), MediaEngineStore.isLocalVideoAutoDisabled(userId)];
    return items;
  }, items1), 3);
  let tmp5 = tmp4[1];
  if (tmp4[0]) {
    let tmp6 = _modDef11488;
  } else if (deafened) {
    tmp6 = _modDef11489;
  } else if (muted) {
    tmp6 = _modDef11490;
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
      const obj3 = { source: _modDef11491, size: tmp2(1199).Icon.Sizes.SMALL, disableColor: true };
      obj2.children = closure_15(tmp2(1199).Icon, obj3);
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
      const obj6 = { source: tmp6, size: tmp2(1199).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp6 === _modDef11488 };
      obj5.children = closure_15(tmp2(1199).Icon, obj6);
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
}));
const __initData = { code: "function UserTileTsx1(){const{onLongPress,participant}=this.__closure;var _onLongPress;return(_onLongPress=onLongPress)===null||_onLongPress===void 0?void 0:_onLongPress(participant);}" };
ReactCompilerGating = fn(558);
let obj5 = { borderRadius: nativeDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserTile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserTile(participant) {
  const cResult = participant(onDoubleTap[16]).c(69);
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  onDoubleTap = participant.onDoubleTap;
  const onLongPress = participant.onLongPress;
  ({ avatarSize, resizeMode, statusStyle, gestureEnabled, hasNotch, style } = participant);
  if (undefined === resizeMode) {
    resizeMode = tmp(tmp2[23]).ResizeMode.COVER;
  }
  closure_18();
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
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
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
          cResult[11] = items;
          let tmp13 = items;
        } else {
          tmp13 = cResult[11];
        }
        if (cResult[12] !== participant.id) {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
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
          cResult[13] = J;
        } else {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
          }
        }
        const stateFromStores = tmp(tmp2[17]).useStateFromStores(tmp13, J);
        if (voiceState != null) {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
          }
        }
        const channel = ChannelStore.getChannel(tmp19);
        if (channel != null) {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
          }
        }
        if (undefined == null) {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
          }
        }
        if (cResult[14] !== participant) {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
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
          cResult[15] = tmp23;
        } else {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
          }
        }
        if (cResult[16] !== voiceState) {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
          }
          if (voiceState != null) {
            class J {
              constructor() {
                return closure_6.isUserPlayingSounds(participant.id);
              }
            }
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
          cResult[16] = voiceState;
          cResult[17] = tmp25;
        } else {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
          }
        }
        if (cResult[18] !== voiceState) {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
          }
          if (voiceState != null) {
            class J {
              constructor() {
                return closure_6.isUserPlayingSounds(participant.id);
              }
            }
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
          cResult[18] = voiceState;
          cResult[19] = tmp27;
        } else {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
          }
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
          cResult[20] = items1;
        } else {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
          }
        }
        if (cResult[21] === participant.type) {
          class J {
            constructor() {
              return closure_6.isUserPlayingSounds(participant.id);
            }
          }
          tmp(tmp2[17]);
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
            class J {
              constructor() {
                return closure_6.isUserPlayingSounds(participant.id);
              }
            }
          }
          if (participant.user != null) {
            class J {
              constructor() {
                return closure_6.isUserPlayingSounds(participant.id);
              }
            }
          }
          c5 = tmp34;
          const _Symbol3 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor() {
                return closure_6.isUserPlayingSounds(participant.id);
              }
            }
            const items2 = [];
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
            cResult[25] = items2;
            const tmp35 = items2;
          } else {
            class J {
              constructor() {
                return closure_6.isUserPlayingSounds(participant.id);
              }
            }
          }
          if (cResult[26] !== undefined) {
            class J {
              constructor() {
                return closure_6.isUserPlayingSounds(participant.id);
              }
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
            cResult[27] = tmp37;
          } else {
            class J {
              constructor() {
                return closure_6.isUserPlayingSounds(participant.id);
              }
            }
          }
          const tmpResult5 = tmp(tmp2[32]);
          const stateFromStores1 = tmp(tmp2[17]).useStateFromStores(tmp35, tmp37);
          const type = participant.type;
          const USER = ParticipantTypes.USER;
          if (cResult[28] === tmp6) {
            class J {
              constructor() {
                return closure_6.isUserPlayingSounds(participant.id);
              }
            }
            const tmp42 = tmp10(tmp2[33])(tmp41);
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
            const onStartResult = Gesture.LongPress().runOnJS(true).onStart(tmp7);
            const minDurationResult = Gesture.LongPress().runOnJS(true).onStart(tmp7).minDuration(800);
            if (null != tmp33) {
              class J {
                constructor() {
                  return closure_6.isUserPlayingSounds(participant.id);
                }
              }
            }
            const GestureDetector = tmp(tmp2[34]).GestureDetector;
            const Gesture2 = tmp(tmp2[34]).Gesture;
            const SimultaneousResult = Gesture2.Simultaneous(Gesture.LongPress().runOnJS(true).onStart(tmp7).minDuration(800), tmp42);
            cResult[31] = tmp7;
            cResult[32] = tmp33;
            cResult[33] = tmp42;
            cResult[34] = GestureDetector;
            cResult[35] = SimultaneousResult;
            const tmp46 = Gesture.LongPress().runOnJS(true).onStart(tmp7).minDuration(800);
          }
          const obj3 = { onDoubleTapStart: tmp6, onSingleTapStart: tmp5 };
          cResult[28] = tmp6;
          cResult[29] = tmp5;
          cResult[30] = obj3;
          tmp41 = obj3;
          const tmpResult6 = tmp(tmp2[17]);
        }
        function ie() {
          let isLocalVideoDisabledResult = null != user.id;
          if (isLocalVideoDisabledResult) {
            isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
          }
          return isLocalVideoDisabledResult;
        }
        const items3 = [user.id, participant.type];
        cResult[21] = participant.type;
        cResult[22] = user.id;
        cResult[23] = ie;
        cResult[24] = items3;
        tmp10 = onSingleTap;
        let tmpResult = tmp(tmp2[17]);
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
    class O {
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
    cResult[5] = O;
    tmp6 = O;
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
  const obj = participant(onDoubleTap[16]);
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
  const obj = { userId: participant.id };
  const tmp3 = closure_18();
  const tmp9 = onSingleTap(onDoubleTap[29])({ userId: participant.id });
  const items3 = [SoundboardStore];
  let channelId;
  const stateFromStores = participant(onDoubleTap[17]).useStateFromStores(items3, () => SoundboardStore.isUserPlayingSounds(participant.id));
  if (voiceState != null) {
    channelId = voiceState.channelId;
  }
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmp16 = tmp7(tmp8[30])(participant);
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
  const obj2 = participant(onDoubleTap[17]);
  const items4 = [MediaEngineStore];
  const items5 = [user.id, participant.type];
  const stateFromStores1 = participant(onDoubleTap[17]).useStateFromStores(items4, () => {
    let isLocalVideoDisabledResult = null != user.id;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
    }
    return isLocalVideoDisabledResult;
  }, items5);
  const tmp10Result = participant(onDoubleTap[17]);
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
  const tmp10Result3 = participant(onDoubleTap[32]);
  const items6 = [VoiceChannelEffectsStore];
  const stateFromStores2 = participant(onDoubleTap[17]).useStateFromStores(items6, () => {
    let effectForUserId = null;
    if (null != id) {
      effectForUserId = VoiceChannelEffectsStore.getEffectForUserId(tmp);
    }
    return effectForUserId;
  });
  if (participant.type !== ParticipantTypes.USER) {
    const type = participant.type;
  }
  const tmp10Result4 = participant(onDoubleTap[17]);
  const Gesture = tmp10(tmp8[34]).Gesture;
  const tmp22 = onSingleTap(onDoubleTap[33])({ onDoubleTapStart: callback1, onSingleTapStart: callback });
  const LongPressResult = Gesture.LongPress();
  const runOnJSResult = Gesture.LongPress().runOnJS(true);
  const minDurationResult = Gesture.LongPress().runOnJS(true).onStart(callback2).minDuration(800);
  let result = minDurationResult;
  if (null != swipeDismissRef) {
    result = minDurationResult.requireExternalGestureToFail(swipeDismissRef);
  }
  const obj3 = { gesture: null, children: null };
  const Gesture2 = tmp10(tmp8[34]).Gesture;
  obj3.gesture = Gesture2.Simultaneous(result, tmp22);
  const obj4 = { style: null, children: null };
  const items7 = [tmp3.container, style];
  obj4.style = items7;
  const obj5 = { guildId: guild_id, hasVideo: null, streamId: null, user: null, resizeMode: null, ringing: null, speaking: null, playingSoundboard: null, avatarSize: null, gestureEnabled: null };
  if (tmp16) {
    tmp16 = !stateFromStores1;
  }
  obj5.hasVideo = tmp16;
  obj5.streamId = streamId;
  obj5.user = user;
  obj5.resizeMode = COVER;
  obj5.ringing = ringing;
  obj5.speaking = tmp9;
  obj5.playingSoundboard = stateFromStores;
  obj5.avatarSize = participant.avatarSize;
  obj5.gestureEnabled = gestureEnabled;
  const items8 = [closure_15(closure_19, obj5), , ];
  let tmp24Result = null;
  if (null != id) {
    tmp24Result = null;
    if (null != stateFromStores2) {
      const obj6 = {
        voiceChannelEffect: stateFromStores2,
        onComplete() {
              return closure_8(id);
            },
        userId: id,
        hasNotch
      };
      tmp24Result = closure_15(tmp7(tmp8[35]), obj6);
    }
  }
  items8[1] = tmp24Result;
  items8[2] = closure_15(closure_20, { muted: flag, deafened: flag2, userId: user.id, style: statusStyle });
  obj4.children = items8;
  obj3.children = closure_16(id, obj4);
  return closure_15(participant(onDoubleTap[34]).GestureDetector, obj3);
});