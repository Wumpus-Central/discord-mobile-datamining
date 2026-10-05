// === Module 9120: UserTile ===

// Module 9120 (UserTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AssetRegistryDefault from "AssetRegistry" /* 4808 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 4819 */;
import Text_Text from "Text/Text" /* 4886 */;
import CallConstants from "CallConstants" /* 4911 */;
import Constants2 from "Constants" /* 4915 */;
import VoiceChannelEffectsStore2 from "VoiceChannelEffectsStore" /* 9121 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9125 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9126 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9127 */;
import mediaEngineContextFromParticipantTypeDefault from "mediaEngineContextFromParticipantType" /* 9128 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ColorUtils_mod from "ColorUtils" /* 4727 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const VoiceChannelEffectsStore = VoiceChannelEffectsStore2;
let guildId, importDefault, userId;

let ColorUtils;
let closure_14;
let closure_15;
let closure_16;
let obj2;
let obj3;
let obj4;
let size;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let closure_7 = VoiceChannelEffectsStore2.clearVoiceChannelEffectForUser;
const VideoToggleState = Constants.VideoToggleState;
const ParticipantTypes = CallConstants.ParticipantTypes;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" }, autoDisabledVideoWrapper: { width: "100%", flexDirection: "row", justifyContent: "center" }, autoDisabledVideo: obj3, autoDisabledVideoTextWrapper: obj4, statusWrapper: size, labelText: { marginLeft: 8, height: 20, alignItems: "center" } };
obj2 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), alignItems: "center", height: 24 };
ColorUtils = ColorUtils_mod;
obj4 = { borderRadius: nativeDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
size = { position: "absolute", bottom: 8, right: 8, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), borderRadius: nativeDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
ColorUtils = ColorUtils_mod;
let closure_17 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let avatarSize;
  let closure_1;
  let first;
  let first1;
  let gestureEnabled;
  let hasVideo;
  let id;
  let resizeMode;
  let ringing;
  let speaking;
  let streamId;
  let tmp21;
  let user;
  let obj = hasVideo(id[15]);
  const cResult = obj.c(35);
  ({ streamId, user, resizeMode, ringing, avatarSize, speaking, gestureEnabled, hasVideo } = guildId);
  guildId = guildId.guildId;
  const tmp4 = closure_17();
  importDefault = tmp4;
  id = user.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === hasVideo) {
    let tmp7;
    let tmp8;
    let tmp10;
    let tmp13;
    let tmp16;
    let tmp18;
    if (cResult[2] === id) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = hasVideo(id[16]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [MediaEngineStore];
      cResult[5] = items1;
      tmp10 = items1;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== id) {
      class F {
        constructor() {
          const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
          return items;
        }
      }
      const items2 = [id];
      cResult[6] = id;
      cResult[7] = F;
      cResult[8] = items2;
      tmp13 = items2;
    } else {
      class F {
        constructor() {
          const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
          return items;
        }
      }
      tmp13 = cResult[8];
    }
    const tmpResult4 = hasVideo(id[16]);
    first1 = first1(tmpResult4.useStateFromStoresArray(tmp10, F, tmp13), 1)[0];
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
          return items;
        }
      }
      const items3 = [MediaEngineStore];
      cResult[9] = items3;
      tmp16 = items3;
    } else {
      class F {
        constructor() {
          const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
          return items;
        }
      }
    }
    if (cResult[10] !== id) {
      class P {
        constructor() {
          let NONE;
          if (null != id) {
            NONE = MediaEngineStore.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
          } else {
            NONE = VideoToggleState.NONE;
          }
          return NONE;
        }
      }
      const items4 = [id];
      cResult[10] = id;
      cResult[11] = P;
      cResult[12] = items4;
      tmp18 = items4;
    } else {
      class P {
        constructor() {
          let NONE;
          if (null != id) {
            NONE = MediaEngineStore.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
          } else {
            NONE = VideoToggleState.NONE;
          }
          return NONE;
        }
      }
      tmp18 = cResult[12];
    }
    const tmpResult5 = hasVideo(id[16]);
    const tmp20 = tmpResult5.useStateFromStores(tmp16, P, tmp18) === VideoToggleState.AUTO_PROBING;
    let closure_4 = tmp20;
    if (cResult[13] === guildId) {
      class P {
        constructor() {
          let NONE;
          if (null != id) {
            NONE = MediaEngineStore.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
          } else {
            NONE = VideoToggleState.NONE;
          }
          return NONE;
        }
      }
      const tmpResult6 = hasVideo(id[17]);
      const avatarSpeakingColor = tmpResult6.useAvatarSpeakingColor(tmp21);
      if (cResult[16] === first1) {
        class P {
          constructor() {
            let NONE;
            if (null != id) {
              NONE = MediaEngineStore.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
            } else {
              NONE = VideoToggleState.NONE;
            }
            return NONE;
          }
        }
      }
      class G {
        constructor() {
          let intl;
          let items;
          let items1;
          let obj2;
          let tmp3;
          if (first1) {
            const obj = { style: closure_1.autoDisabledVideoWrapper, children: closure_15(View, obj2) };
            obj2 = { style: items, children: items1 };
            items = [, ];
            ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = closure_1);
            const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL, disableColor: true };
            const Icon = native.Icon;
            items1 = [authStore2(Icon, obj3), ];
            const obj4 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: intl.string(intl2.t.m2Hyj0) };
            const Text = Text_Text.Text;
            intl = intl2.intl;
            items1[1] = authStore2(Text, obj4);
            tmp3 = authStore2(View, obj);
          } else {
            tmp3 = null;
          }
          return tmp3;
        }
      }
      cResult[16] = first1;
      cResult[17] = tmp20;
      cResult[18] = tmp4;
      cResult[19] = G;
    }
    let obj2 = { userId: id, guildId };
    cResult[13] = guildId;
    cResult[14] = id;
    cResult[15] = obj2;
    tmp21 = obj2;
  }
  const fn = function l() {
    const tmp = hasVideo && id === AuthenticationStore.getId();
    return tmp;
  };
  const items5 = [hasVideo, id];
  cResult[1] = hasVideo;
  cResult[2] = id;
  cResult[3] = fn;
  cResult[4] = items5;
  tmp8 = items5;
  tmp7 = fn;
}) : ((guildId) => {
  let VideoSpinnerContext;
  let avatarSize;
  let closure_1;
  let closure_3;
  let gestureEnabled;
  let hasVideo;
  let resizeMode;
  let ringing;
  let speaking;
  let streamId;
  let user;
  ({ user, hasVideo } = guildId);
  guildId = guildId.guildId;
  _slicedToArray = undefined;
  ({ streamId, resizeMode, ringing, avatarSize, speaking, gestureEnabled } = guildId);
  let tmp = closure_17();
  importDefault = tmp;
  const id = user.id;
  let tmp3 = id;
  let obj = hasVideo(id[16]);
  let items = [AuthenticationStore];
  let items1 = [hasVideo, id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = hasVideo && id === AuthenticationStore.getId();
    return tmp;
  }, items1);
  let obj2 = hasVideo(id[16]);
  const items2 = [MediaEngineStore];
  const items3 = [id];
  _slicedToArray = _slicedToArray(obj2.useStateFromStoresArray(items2, () => {
    const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
    return items;
  }, items3), 1)[0];
  let obj3 = hasVideo(id[16]);
  const items4 = [MediaEngineStore];
  const items5 = [id];
  const tmp5 = obj3.useStateFromStores(items4, () => {
    let NONE;
    if (null != id) {
      NONE = MediaEngineStore.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
    } else {
      NONE = VideoToggleState.NONE;
    }
    return NONE;
  }, items5) === VideoToggleState.AUTO_PROBING;
  let closure_4 = tmp5;
  let obj4 = hasVideo(id[17]);
  const avatarSpeakingColor = obj4.useAvatarSpeakingColor({ userId: id, guildId });
  if (!ringing) {
    if (hasVideo) {
      let tmp7Result;
      if (!tmp5) {
        const obj5 = { resizeMode, streamId, gestureEnabled, videoSpinnerContext: stateFromStores ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO, userId: user.id };
        const tmp9 = require("VideoRenderer");
        VideoSpinnerContext = hasVideo(tmp3[24]).VideoSpinnerContext;
        tmp7Result = closure_14(tmp9, obj5);
      }
      return tmp7Result;
    }
  }
  const obj6 = {
    style: tmp.imageBackground,
    url: user.getAvatarURL(guildId, 128),
    user,
    guildId,
    speaking,
    speakingColor: avatarSpeakingColor,
    size: avatarSize,
    renderVideoDetails() {
      let intl;
      let items;
      let items1;
      let obj2;
      let tmp3;
      if (closure_3) {
        const obj = { style: closure_1.autoDisabledVideoWrapper, children: closure_15(View, obj2) };
        obj2 = { style: items, children: items1 };
        items = [, ];
        ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = closure_1);
        const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL, disableColor: true };
        const Icon = native.Icon;
        items1 = [authStore2(Icon, obj3), ];
        const obj4 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: intl.string(intl2.t.m2Hyj0) };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        items1[1] = authStore2(Text, obj4);
        tmp3 = authStore2(View, obj);
      } else {
        tmp3 = null;
      }
      return tmp3;
    }
  };
  const tmp11 = require("VideoBackground");
  tmp7Result = closure_14(tmp11, obj6);
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let Icon;
  let Icon2;
  let deafened;
  let first;
  let items2;
  let items4;
  let muted;
  let obj5;
  let obj7;
  let tmp12;
  let tmp16;
  let tmp7;
  let tmp8;
  const obj = userId(576);
  const cResult = obj.c(16);
  userId = userId.userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MediaEngineStore];
    cResult[0] = items;
    first = items;
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
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = userId(504);
  const tmp9 = _slicedToArray(tmpResult.useStateFromStoresArray(first, tmp7, tmp8), 3);
  let tmp10 = tmp9[1];
  const tmp11 = tmp9[2];
  if (tmp9[0]) {
    tmp12 = AssetRegistryDefault3;
  } else if (deafened) {
    tmp12 = AssetRegistryDefault4;
  } else if (muted) {
    tmp12 = AssetRegistryDefault2;
  }
  if (tmp10) {
    tmp10 = !tmp11;
  }
  if (tmp10) {
    if (cResult[4] === tmp10) {
      if (cResult[5] === style) {
        let tmp17;
        if (cResult[6] === tmp4) {
          tmp17 = cResult[7];
        }
        if (cResult[8] === tmp12) {
          if (cResult[9] === tmp10) {
            if (cResult[10] === style) {
              let tmp22;
              if (cResult[11] === tmp4) {
                tmp22 = cResult[12];
              }
              if (cResult[13] === tmp17) {
                let tmp28;
                if (cResult[14] === tmp22) {
                  tmp28 = cResult[15];
                }
                tmp16 = tmp28;
              }
              const obj2 = { children: items2 };
              items2 = [tmp17, tmp22];
              const tmp31 = closure_15(closure_16, obj2);
              cResult[13] = tmp17;
              cResult[14] = tmp22;
              cResult[15] = tmp31;
              tmp28 = tmp31;
            }
          }
        }
        let tmp25Result = null;
        if (null != tmp12) {
          const items3 = [tmp4.statusWrapper, style, ];
          let obj3 = null;
          if (tmp10) {
            obj3 = { right: 38 };
          }
          items3[2] = obj3;
          const obj4 = { style: items3, children: closure_14(Icon2, obj5) };
          obj5 = { source: tmp12, size: userId(1188).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp12 === AssetRegistryDefault3 };
          Icon2 = tmp(1188).Icon;
          tmp25Result = closure_14(View, obj4);
        }
        cResult[8] = tmp12;
        cResult[9] = tmp10;
        cResult[10] = style;
        cResult[11] = tmp4;
        cResult[12] = tmp25Result;
        tmp22 = tmp25Result;
      }
    }
    let tmp18 = null;
    if (tmp10) {
      const obj6 = { style: items4, children: closure_14(Icon, obj7) };
      items4 = [tmp4.statusWrapper, style];
      obj7 = { source: AssetRegistryDefault5, size: userId(1188).Icon.Sizes.SMALL, disableColor: true };
      Icon = tmp(1188).Icon;
      tmp18 = closure_14(View, obj6);
    }
    cResult[4] = tmp10;
    cResult[5] = style;
    cResult[6] = tmp4;
    cResult[7] = tmp18;
    tmp17 = tmp18;
  } else {
    tmp16 = null;
  }
  return tmp16;
}) : ((userId) => {
  let Icon;
  let Icon2;
  let deafened;
  let items2;
  let muted;
  let obj3;
  let obj6;
  let tmp12Result;
  let tmp7;
  userId = userId.userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp = closure_17();
  let items = [MediaEngineStore];
  const items1 = [userId];
  const obj = userId(504);
  const tmp4 = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const items = [MediaEngineStore.isLocalMute(userId), MediaEngineStore.isLocalVideoDisabled(userId), MediaEngineStore.isLocalVideoAutoDisabled(userId)];
    return items;
  }, items1), 3);
  let tmp5 = tmp4[1];
  const tmp6 = tmp4[2];
  if (tmp4[0]) {
    tmp7 = AssetRegistryDefault3;
  } else if (deafened) {
    tmp7 = AssetRegistryDefault4;
  } else if (muted) {
    tmp7 = AssetRegistryDefault2;
  }
  if (tmp5) {
    tmp5 = !tmp6;
  }
  if (tmp5) {
    let tmp15 = null;
    if (tmp5) {
      const obj2 = { style: items2, children: closure_14(Icon, obj3) };
      items2 = [tmp.statusWrapper, style];
      obj3 = { source: AssetRegistryDefault5, size: userId(1188).Icon.Sizes.SMALL, disableColor: true };
      Icon = tmp2(1188).Icon;
      tmp15 = closure_14(View, obj2);
    }
    const items3 = [tmp15, ];
    let tmp20Result = null;
    if (null != tmp7) {
      const items4 = [tmp.statusWrapper, style, ];
      let obj4 = null;
      if (tmp5) {
        obj4 = { right: 38 };
      }
      items4[2] = obj4;
      const obj5 = { style: items4, children: closure_14(Icon2, obj6) };
      obj6 = { source: tmp7, size: userId(1188).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp7 === AssetRegistryDefault3 };
      Icon2 = tmp2(1188).Icon;
      tmp20Result = closure_14(View, obj5);
    }
    const obj7 = { children: items3 };
    items3[1] = tmp20Result;
    tmp12Result = closure_15(closure_16, obj7);
  } else {
    tmp12Result = null;
  }
  return tmp12Result;
}));
const __initData = { code: "function UserTileTsx1(){const{onLongPress,participant}=this.__closure;var _onLongPress;return(_onLongPress=onLongPress)===null||_onLongPress===void 0?void 0:_onLongPress(participant);}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((participant) => {
  let avatarSize;
  let gestureEnabled;
  let hasNotch;
  let id;
  let onDoubleTap;
  let resizeMode;
  let statusStyle;
  let style;
  let voiceState;
  const tmp = participant;
  const obj = participant(onDoubleTap[15]);
  const cResult = obj.c(65);
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
    let tmp5;
    if (cResult[1] === participant) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === onDoubleTap) {
      let tmp6;
      if (cResult[4] === participant) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === onLongPress) {
        let tmp7;
        let tmp9;
        if (cResult[7] === participant) {
          tmp7 = cResult[8];
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
          tmp9 = obj2;
        } else {
          tmp9 = cResult[10];
        }
        onSingleTap(onDoubleTap[29])(tmp9);
        let channelId;
        const getChannel = ChannelStore.getChannel;
        if (voiceState != null) {
          channelId = voiceState.channelId;
        }
        const channel = getChannel(channelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (cResult[11] !== participant) {
          const tmp18 = onSingleTap(onDoubleTap[30])(participant);
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
          let swipeDismissRef;
          let tmp31;
          let tmp33;
          let tmpResult = tmp(tmp2[16]);
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
          const tmpResult3 = tmp(onDoubleTap[32]);
          const voiceChatNavigationContext = tmpResult3.useVoiceChatNavigationContext();
          if (voiceChatNavigationContext != null) {
            swipeDismissRef = voiceChatNavigationContext.swipeDismissRef;
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
            tmp31 = items1;
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
            tmp33 = ie;
          } else {
            tmp33 = cResult[24];
          }
          const tmpResult4 = tmp(onDoubleTap[16]);
          const stateFromStores = tmpResult4.useStateFromStores(tmp31, tmp33);
          const type = participant.type;
          const USER = ParticipantTypes.USER;
          if (cResult[25] === tmp6) {
            let tmp37;
            if (cResult[26] === tmp5) {
              tmp37 = cResult[27];
            }
            const tmp38 = onSingleTap(onDoubleTap[33])(tmp37);
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
            const runOnJSResult = LongPressResult.runOnJS(true);
            const onStartResult = runOnJSResult.onStart(tmp7);
            const minDurationResult = onStartResult.minDuration(800);
            let result = minDurationResult;
            if (null != swipeDismissRef) {
              result = minDurationResult.requireExternalGestureToFail(swipeDismissRef);
            }
            const GestureDetector = tmp(tmp2[34]).GestureDetector;
            const Gesture2 = tmp(tmp2[34]).Gesture;
            cResult[28] = tmp7;
            cResult[29] = swipeDismissRef;
            cResult[30] = tmp38;
            cResult[31] = GestureDetector;
            cResult[32] = Gesture2.Simultaneous(result, tmp38);
            const SimultaneousResult = Gesture2.Simultaneous(result, tmp38);
          }
          const obj3 = { onDoubleTapStart: tmp6, onSingleTapStart: tmp5 };
          cResult[25] = tmp6;
          cResult[26] = tmp5;
          cResult[27] = obj3;
          tmp37 = obj3;
        }
        const fn2 = function $() {
          const isLocalVideoDisabledResult = null != user.id && MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
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
        let tmpResult;
        if (onDoubleTap != null) {
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
}) : ((participant) => {
  let Gesture2;
  let gestureEnabled;
  let hasNotch;
  let items6;
  let items7;
  let obj5;
  let ringing;
  let statusStyle;
  let streamId;
  let style;
  let tmp25;
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const onLongPress = participant.onLongPress;
  let COVER = participant.resizeMode;
  const avatarSize = participant.avatarSize;
  if (COVER === undefined) {
    const tmp = participant;
    COVER = participant(onDoubleTap[23]).ResizeMode.COVER;
  }
  let user;
  let id;
  ({ statusStyle, gestureEnabled, hasNotch, style } = participant);
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const tmp3 = closure_17();
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
  const getChannel = ChannelStore.getChannel;
  const obj = { userId: participant.id };
  const tmp9 = onSingleTap(onDoubleTap[29])(obj);
  if (voiceState != null) {
    channelId = voiceState.channelId;
  }
  const channel = getChannel(channelId);
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
  const items3 = [MediaEngineStore];
  const items4 = [user.id, participant.type];
  const obj2 = participant(onDoubleTap[16]);
  const stateFromStores = obj2.useStateFromStores(items3, () => {
    const isLocalVideoDisabledResult = null != user.id && MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
    return isLocalVideoDisabledResult;
  }, items4);
  const obj3 = participant(onDoubleTap[32]);
  const voiceChatNavigationContext = obj3.useVoiceChatNavigationContext();
  let swipeDismissRef;
  if (voiceChatNavigationContext != null) {
    swipeDismissRef = voiceChatNavigationContext.swipeDismissRef;
  }
  const user2 = participant.user;
  id = undefined;
  if (user2 != null) {
    id = user2.id;
  }
  const items5 = [VoiceChannelEffectsStore];
  const tmp15Result = participant(onDoubleTap[16]);
  const stateFromStores1 = tmp15Result.useStateFromStores(items5, () => {
    let effectForUserId = null;
    if (null != id) {
      effectForUserId = VoiceChannelEffectsStore.getEffectForUserId(tmp);
    }
    return effectForUserId;
  });
  if (participant.type !== ParticipantTypes.USER) {
    const type = participant.type;
  }
  const tmp21 = onSingleTap(onDoubleTap[33])({ onDoubleTapStart: callback1, onSingleTapStart: callback });
  const Gesture = tmp15(tmp8[34]).Gesture;
  const LongPressResult = Gesture.LongPress();
  const runOnJSResult = LongPressResult.runOnJS(true);
  const onStartResult = runOnJSResult.onStart(callback2);
  const minDurationResult = onStartResult.minDuration(800);
  let result = minDurationResult;
  if (null != swipeDismissRef) {
    result = minDurationResult.requireExternalGestureToFail(swipeDismissRef);
  }
  const obj4 = { gesture: Gesture2.Simultaneous(result, tmp21), children: closure_15(tmp25, obj5) };
  const GestureDetector = tmp15(tmp8[34]).GestureDetector;
  Gesture2 = tmp15(tmp8[34]).Gesture;
  obj5 = { style: items6, children: items7 };
  items6 = [tmp3.container, style];
  const obj6 = { guildId: guild_id, hasVideo: tmp14, streamId, user, resizeMode: COVER, ringing, speaking: tmp9, avatarSize, gestureEnabled };
  tmp25 = id;
  if (tmp14) {
    tmp14 = !stateFromStores;
  }
  items7 = [closure_14(closure_18, obj6), , ];
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
  const obj8 = { muted: flag, deafened: flag2, userId: user.id, style: statusStyle };
  items7[2] = closure_14(closure_19, obj8);
  return closure_14(GestureDetector, obj4);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserTile.tsx");

export default tmp5;