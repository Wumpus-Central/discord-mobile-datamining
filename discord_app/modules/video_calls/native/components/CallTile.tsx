// === Module 10057: CallTile ===

// Module 10057 (CallTile)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import _modDef9442 from "module_9442" /* 9442 */;
import _modDef9464 from "module_9464" /* 9464 */;
import TouchableStreamPreviewDefault from "TouchableStreamPreview" /* 10058 */;
import _modDef10063 from "module_10063" /* 10063 */;
import _modDef10064 from "module_10064" /* 10064 */;
import _modDef10065 from "module_10065" /* 10065 */;
import ParticipantTitleDefault from "ParticipantTitle" /* 10066 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
class StreamPreviewTile {
  constructor(arg0) {
    participant = global.participant;
    obj = { style: null, children: null };
    items = [, ];
    items[0] = closure_16().streamPreview;
    items[1] = global.style;
    obj.style = items;
    obj = {
      guildId: participant.stream.guildId,
      userId: participant.user.id,
      style: { aspectRatio: "ip", borderRadius: false },
      disableTransition: true,
      onPress() {
            return closure_1_8();
          }
    };
    obj.children = jsx(closure_1(closure_2[19]), obj);
    return jsx(View, obj);
  }
}
function ParticipantIcon(participant) {
  participant = participant.participant;
  if (participant.type === constants.STREAM) {
    let tmp3 = _modDef10063;
  } else if (participant.type === tmp2.USER) {
    const voicePlatform = participant.voicePlatform;
    if (constants2.MOBILE === voicePlatform) {
      tmp3 = _modDef10064;
    } else if (tmp19.XBOX === voicePlatform) {
      tmp3 = _modDef9442;
    } else if (tmp19.PLAYSTATION === voicePlatform) {
      tmp3 = _modDef9464;
    } else if (tmp19.QUEST === voicePlatform) {
      tmp3 = _modDef10065;
    }
  }
  let tmp14 = null;
  if (null != tmp3) {
    const obj = { source: tmp3, size: native.Icon.Sizes.REFRESH_SMALL_16, color: nativeDefault.unsafe_rawColors.WHITE, style: tmp.titleIcon };
    tmp14 = map1(native.Icon, obj);
  }
  return tmp14;
}
class TileOverlay {
  constructor(arg0) {
    ({ participant, isActiveStream } = global);
    reveal = undefined;
    ({ channel, hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea, hasTopSafeArea } = global);
    tmp = closure_16();
    tmp2 = closure_1;
    tmp3 = closure_2;
    tmp4 = closure_1(closure_2[11])();
    ({ bottom, left, top, right } = tmp4);
    tmp5 = reveal;
    reveal = closure_3.useContext(reveal(closure_2[26]).RevealContext).reveal;
    obj = reveal(closure_2[27]);
    class T {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[28]);
        num = 0;
        if (reveal) {
          num = 1;
        }
        obj = { opacity: null };
        obj1 = { easing: tmp(tmp2[25]).STANDARD_EASING, duration: 250 };
        obj.opacity = obj.withTiming(num, obj1);
        return obj;
      }
    }
    obj = { withTiming: reveal(closure_2[28]).withTiming, reveal, STANDARD_EASING: reveal(closure_2[25]).STANDARD_EASING };
    T.__closure = obj;
    T.__workletHash = 15640123774063;
    T.__initData = closure_19;
    num = 0;
    animatedStyle = obj.useAnimatedStyle(T);
    if (hasBottomSafeArea) {
      num = bottom;
    }
    rect = { bottom: num, right: null, left: null, top: null };
    num2 = 0;
    if (hasRightSafeArea) {
      num2 = right;
    }
    rect.right = num2;
    num3 = 0;
    if (hasLeftSafeArea) {
      num3 = left;
    }
    rect.left = num3;
    num4 = 0;
    if (hasTopSafeArea) {
      num4 = top;
    }
    rect.top = num4;
    tmp7 = jsxs;
    obj1 = { pointerEvents: "none", style: null, children: null };
    items = [, , ];
    items[0] = StyleSheet.absoluteFill;
    items[1] = rect;
    items[2] = animatedStyle;
    obj1.style = items;
    if (isActiveStream) {
      tmp8 = jsx;
      tmp9 = View;
      obj2 = { style: null, children: null };
      obj2.style = tmp.liveContainer;
      obj2.children = jsx(tmp5(tmp3[25]).LiveTag, {});
      isActiveStream = jsx(View, obj2);
    }
    items1 = [, ];
    items1[0] = isActiveStream;
    obj3 = { style: tmp.usernamePosition, children: null };
    obj4 = { style: tmp.usernameContainer, children: null };
    items2 = [, ];
    items2[0] = jsx(ParticipantIcon, { participant });
    items2[1] = jsx(tmp2(tmp3[29]), { channel, participant });
    obj4.children = items2;
    obj3.children = tmp7(View, obj4);
    items1[1] = jsx(View, obj3);
    obj1.children = items1;
    return tmp7(tmp2(tmp3[27]).View, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ChannelCallStore = fn(9467);
({ resetFocus: closure_8, toggleFocus: closure_9 } = ChannelCallStore);
const CallConstants = fn(4581);
({ ParticipantTypes: c10, isStreamParticipant: closure_11, VoicePlatforms: closure_12 } = CallConstants);
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let obj = { liveContainer: { position: "absolute", top: 8, right: 8 }, titleIcon: { marginRight: 6 }, usernameContainer: null, usernamePosition: null, streamPreview: null, screenshareContainer: null, stageStreamContainer: null };
obj = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", backgroundColor: null, borderRadius: null, paddingHorizontal: 8, paddingVertical: 4 };
const ColorUtils = fn(4409);
obj.backgroundColor = ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj.borderRadius = nativeDefault.radii.sm;
obj.usernameContainer = obj;
let rect = { overflow: "hidden", position: "absolute", bottom: 8, left: 8, right: 40, borderRadius: nativeDefault.radii.sm };
obj.usernamePosition = rect;
const createStyles = { flex: 1, width: "100%", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
obj.streamPreview = createStyles;
obj.screenshareContainer = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: nativeDefault.colors.BLACK };
let obj2 = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj.stageStreamContainer = { backgroundColor: nativeDefault.colors.BLACK };
const value = createStyles.createStyles(obj);
const __initData = { code: "function CallTileTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
let obj3 = { backgroundColor: nativeDefault.colors.BLACK };
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/CallTile.tsx");

export default noop.memo((participant) => {
  participant = participant.participant;
  const channel = participant.channel;
  const hasRightSafeArea = participant.hasRightSafeArea;
  const hasBottomSafeArea = participant.hasBottomSafeArea;
  ({ contentStyle, hasNotch } = participant);
  ({ avatarSize, hasTopSafeArea, hasLeftSafeArea, shrinkStreamEmptyState } = participant);
  if (hasNotch === undefined) {
    hasNotch = false;
  }
  const tmp = closure_16();
  const analyticsLocations = channel(hasRightSafeArea[10])().analyticsLocations;
  let rect = channel(hasRightSafeArea[11])();
  const bottom = rect.bottom;
  const right = rect.right;
  let obj = participant(hasRightSafeArea[12]);
  const items = [right];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let streamForUser = null;
    if (closure_2_11(participant)) {
      streamForUser = ApplicationStreamingStore.getStreamForUser(tmp2.user.id, tmp2.stream.guildId);
    }
    const obj = { stream: streamForUser, activeStream: null };
    let activeStreamForUser = null;
    if (closure_2_11(participant)) {
      activeStreamForUser = ApplicationStreamingStore.getActiveStreamForUser(tmp2.user.id, tmp2.stream.guildId);
    }
    obj.activeStream = activeStreamForUser;
    return obj;
  });
  const activeStream = stateFromStoresObject.activeStream;
  const items1 = [channel.id, participant.id];
  const callback = hasBottomSafeArea.useCallback(() => {
    React6();
    participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, participant.id);
  }, items1);
  const items2 = [channel.id, analyticsLocations];
  const items3 = [hasBottomSafeArea, hasRightSafeArea, bottom, right];
  const callback1 = hasBottomSafeArea.useCallback((user) => {
    showUserProfileActionSheetDefault({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items2);
  const memo = hasBottomSafeArea.useMemo(() => {
    let num = 8;
    if (hasBottomSafeArea) {
      num = 8 + bottom;
    }
    const rect = { bottom: num, right: null };
    let num2 = 8;
    if (hasRightSafeArea) {
      num2 = 8 + right;
    }
    rect.right = num2;
    return rect;
  }, items3);
  let obj1 = participant(hasRightSafeArea[12]);
  const items4 = [UserStore];
  const stateFromStores = obj1.useStateFromStores(items4, () => currentUser.getCurrentUser());
  const type = participant.type;
  if (constants.HIDDEN_STREAM === type) {
    obj = { participant, style: contentStyle };
    let tmp10 = closure_13(StreamPreviewTile, obj);
  } else if (tmp9.STREAM === type) {
    if (null != activeStream) {
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (activeStream.ownerId !== id) {
        obj = { participant, onSingleTap, onDoubleTap: callback, removeEmptyStateImage: shrinkStreamEmptyState, onFullScreen: callback, fullscreenIconStyle: memo, style: contentStyle };
        let tmp17Result = closure_13(tmp2(tmp3[15]), obj);
      } else {
        obj1 = { style: tmp.screenshareContainer, children: null };
        const obj2 = { participant, onSingleTap, onDoubleTap: callback, containerStyle: null };
        let stageStreamContainer;
        if (channel.isGuildStageVoice()) {
          stageStreamContainer = tmp.stageStreamContainer;
        }
        obj2.containerStyle = stageStreamContainer;
        obj1.children = closure_13(tmp2(tmp3[16]), obj2);
        tmp17Result = tmp17(bottom, obj1);
        const tmp2Result = tmp2(tmp3[16]);
      }
      tmp10 = tmp17Result;
    } else {
      tmp10 = null;
      if (null != stateFromStoresObject.stream) {
        const obj3 = { participant, style: contentStyle };
        tmp10 = closure_13(StreamPreviewTile, obj3);
      }
    }
  } else if (tmp9.USER === type) {
    const obj4 = { participant, avatarSize, onSingleTap, onDoubleTap: callback, onLongPress: callback1, statusStyle: memo, hasNotch, resizeMode: participant.resizeMode, style: contentStyle };
    tmp10 = closure_13(tmp2(tmp3[17]), obj4);
  } else {
    tmp10 = null;
    if (tmp9.ACTIVITY === type) {
      const obj5 = { participant, style: contentStyle, channel, onSingleTap };
      tmp10 = closure_13(tmp2(tmp3[18]), obj5);
    }
  }
  let tmp27 = null;
  if (participant.type !== constants.ACTIVITY) {
    const obj6 = { participant, isActiveStream: null != activeStream, channel, hasTopSafeArea, hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea };
    tmp27 = closure_13(TileOverlay, obj6);
  }
  const obj7 = { children: null };
  const items5 = [tmp10, tmp27];
  obj7.children = items5;
  return closure_15(closure_14, obj7);
});
export { StreamPreviewTile };
export { TileOverlay };