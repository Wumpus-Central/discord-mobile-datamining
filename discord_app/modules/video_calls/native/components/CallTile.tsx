// === Module 12174: CallTile ===

// Module 12174 (CallTile)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5377 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5879 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8874 */;
import RevealProvider from "RevealProvider" /* 11838 */;
import TouchableStreamPreviewDefault from "TouchableStreamPreview" /* 12175 */;
import _modDef12180 from "module_12180" /* 12180 */;
import _modDef12181 from "module_12181" /* 12181 */;
import _modDef12182 from "module_12182" /* 12182 */;
import _modDef12183 from "module_12183" /* 12183 */;
import _modDef12184 from "module_12184" /* 12184 */;
import ParticipantTitleDefault from "ParticipantTitle" /* 12185 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6834 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
class StreamPreviewTile {
  constructor(arg0) {
    participant = global.participant;
    obj = { style: null, children: null };
    items = [, ];
    items[0] = closure_16().streamPreview;
    items[1] = global.style;
    obj.style = items;
    obj1 = {
      guildId: participant.stream.guildId,
      userId: participant.user.id,
      style: { aspectRatio: "disabled", borderRadius: false },
      disableTransition: true,
      onPress() {
            return closure_1_8();
          }
    };
    obj.children = jsx(closure_1(closure_2[19]), obj1);
    return jsx(View, obj);
  }
}
function ParticipantIcon(participant) {
  participant = participant.participant;
  if (participant.type === constants.STREAM) {
    let tmp3 = _modDef12180;
  } else if (participant.type === tmp2.USER) {
    const voicePlatform = participant.voicePlatform;
    if (constants2.MOBILE === voicePlatform) {
      tmp3 = _modDef12181;
    } else if (constants2.XBOX === voicePlatform) {
      tmp3 = _modDef12182;
    } else if (constants2.PLAYSTATION === voicePlatform) {
      tmp3 = _modDef12183;
    } else if (constants2.QUEST === voicePlatform) {
      tmp3 = _modDef12184;
    }
  }
  let tmp14 = null;
  if (null != tmp3) {
    const obj = { source: tmp3, size: native.Icon.Sizes.REFRESH_SMALL_16, color: nativeDefault.unsafe_rawColors.WHITE, style: tmp.titleIcon };
    tmp14 = state(native.Icon, obj);
  }
  return tmp14;
}
class TileOverlay {
  constructor(arg0) {
    ({ participant, isActiveStream } = global);
    ({ channel, hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea, hasTopSafeArea } = global);
    tmp = closure_16();
    tmp2 = closure_1;
    tmp3 = closure_2;
    tmp4 = closure_1(closure_2[11])();
    ({ bottom, left, top, right } = tmp4);
    tmp5 = closure_0;
    obj = closure_0(closure_2[27]);
    items = [, , , ];
    items[0] = closure_19;
    items[1] = closure_0(closure_2[28]).withTiming;
    items[2] = closure_3.useContext(closure_0(closure_2[26]).RevealContext).reveal;
    items[3] = closure_0(closure_2[25]).STANDARD_EASING;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    [tmp6, tmp7, tmp8, tmp9] = items;
    class CallTileTsx1 {
      constructor() {
        num = 0;
        tmp = closure_0;
        if (closure_1) {
          num = 1;
        }
        obj = { opacity: null };
        obj1 = { easing: closure_2, duration: 250 };
        obj.opacity = tmp(num, obj1);
        return obj;
      }
    }
    items1 = [, , ];
    items1[0] = tmp7;
    items1[1] = tmp8;
    items1[2] = tmp9;
    CallTileTsx1.__closure = items1;
    CallTileTsx1.__workletHash = 15791495111542;
    CallTileTsx1.__initData = tmp6;
    num = 0;
    animatedStyle = obj.useAnimatedStyle(CallTileTsx1);
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
    tmp11 = jsxs;
    obj1 = { pointerEvents: "none", style: null, children: null };
    items2 = [, , ];
    items2[0] = StyleSheet.absoluteFill;
    items2[1] = rect;
    items2[2] = animatedStyle;
    obj1.style = items2;
    if (isActiveStream) {
      tmp12 = jsx;
      tmp13 = View;
      obj7 = { style: null, children: null };
      obj7.style = tmp.liveContainer;
      obj7.children = jsx(tmp5(tmp3[25]).LiveTag, {});
      isActiveStream = jsx(View, obj7);
    }
    items3 = [, ];
    items3[0] = isActiveStream;
    obj8 = { style: tmp.usernamePosition, children: null };
    obj9 = { style: tmp.usernameContainer, children: null };
    items4 = [, ];
    items4[0] = jsx(ParticipantIcon, { participant });
    items4[1] = jsx(tmp2(tmp3[29]), { channel, participant });
    obj9.children = items4;
    obj8.children = tmp11(View, obj9);
    items3[1] = jsx(View, obj8);
    obj1.children = items3;
    return tmp11(tmp2(tmp3[27]).View, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ChannelCallStore = fn(11133);
({ resetFocus: closure_8, toggleFocus: closure_9 } = ChannelCallStore);
const CallConstants = fn(5801);
({ ParticipantTypes: closure_10, isStreamParticipant: closure_11, VoicePlatforms: closure_12 } = CallConstants);
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5141);
let obj = { liveContainer: { position: "absolute", top: 8, right: 8 }, titleIcon: { marginRight: 6 }, usernameContainer: null, usernamePosition: null, streamPreview: null, screenshareContainer: null, stageStreamContainer: null };
let obj3 = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", backgroundColor: null, borderRadius: null, paddingHorizontal: 8, paddingVertical: 4 };
const ColorUtils = fn(5138);
obj3.backgroundColor = ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj3.borderRadius = nativeDefault.radii.sm;
obj.usernameContainer = obj3;
let rect = { overflow: "hidden", position: "absolute", bottom: 8, left: 8, right: 40, borderRadius: nativeDefault.radii.sm };
obj.usernamePosition = rect;
obj.streamPreview = { flex: 1, width: "100%", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
let obj4 = { flex: 1, width: "100%", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
obj.screenshareContainer = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: nativeDefault.colors.BLACK };
let obj6 = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj.stageStreamContainer = { backgroundColor: nativeDefault.colors.BLACK };
const value2 = createStyles.createStyles(obj);
let closure_19 = { code: "(function CallTileTsx1(){let[withTiming,reveal,STANDARD_EASING]=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};})" };
let obj7 = { backgroundColor: nativeDefault.colors.BLACK };
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/CallTile.tsx");

export default noop.memo(function CallTitle(participant) {
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
  items = [right];
  const stateFromStoresObject = participant(hasRightSafeArea[12]).useStateFromStoresObject(items, () => {
    let streamForUser = null;
    if (closure_2_11(participant)) {
      streamForUser = ApplicationStreamingStore.getStreamForUser(participant.user.id, participant.stream.guildId);
    }
    const obj = { stream: streamForUser, activeStream: null };
    let activeStreamForUser = null;
    if (closure_2_11(participant)) {
      activeStreamForUser = ApplicationStreamingStore.getActiveStreamForUser(participant.user.id, participant.stream.guildId);
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
  let obj = participant(hasRightSafeArea[12]);
  const items4 = [UserStore];
  const stateFromStores = participant(hasRightSafeArea[12]).useStateFromStores(items4, () => currentUser.getCurrentUser());
  const type = participant.type;
  if (constants.HIDDEN_STREAM === type) {
    const obj3 = { participant, style: contentStyle };
    let tmp10 = closure_13(StreamPreviewTile, obj3);
  } else if (constants.STREAM === type) {
    if (null != activeStream) {
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (activeStream.ownerId !== id) {
        const obj4 = { participant, onSingleTap, onDoubleTap: callback, removeEmptyStateImage: shrinkStreamEmptyState, onFullScreen: callback, fullscreenIconStyle: memo, style: contentStyle };
        let tmp17Result = closure_13(tmp2(tmp3[15]), obj4);
      } else {
        const obj5 = { style: tmp.screenshareContainer, children: null };
        const obj6 = { participant, onSingleTap, onDoubleTap: callback, containerStyle: null };
        let stageStreamContainer;
        if (channel.isGuildStageVoice()) {
          stageStreamContainer = tmp.stageStreamContainer;
        }
        obj6.containerStyle = stageStreamContainer;
        obj5.children = closure_13(tmp2(tmp3[16]), obj6);
        tmp17Result = closure_13(bottom, obj5);
        const tmp2Result = tmp2(tmp3[16]);
      }
      tmp10 = tmp17Result;
    } else {
      tmp10 = null;
      if (null != stateFromStoresObject.stream) {
        const obj7 = { participant, style: contentStyle };
        tmp10 = closure_13(StreamPreviewTile, obj7);
      }
    }
  } else if (constants.USER === type) {
    const obj8 = { participant, avatarSize, onSingleTap, onDoubleTap: callback, onLongPress: callback1, statusStyle: memo, hasNotch, resizeMode: participant.resizeMode, style: contentStyle };
    tmp10 = closure_13(tmp2(tmp3[17]), obj8);
  } else {
    tmp10 = null;
    if (constants.ACTIVITY === type) {
      const obj9 = { participant, style: contentStyle, channel, onSingleTap };
      tmp10 = closure_13(tmp2(tmp3[18]), obj9);
    }
  }
  let tmp27 = null;
  if (participant.type !== constants.ACTIVITY) {
    const obj10 = { participant, isActiveStream: null != activeStream, channel, hasTopSafeArea, hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea };
    tmp27 = closure_13(TileOverlay, obj10);
  }
  const obj11 = { children: null };
  const items5 = [tmp10, tmp27];
  obj11.children = items5;
  return closure_15(closure_14, obj11);
});
export { StreamPreviewTile };
export { TileOverlay };