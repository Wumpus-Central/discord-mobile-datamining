// discord_app/modules/video_calls/native/components/CallTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import _modDef9369 from "../../../../../_runtime/metro/09369__.js";
import _modDef10066 from "../../../../../_runtime/metro/10066__.js";
import TouchableStreamPreviewDefault from "../../../../components_native/TouchableStreamPreview.tsx";
import _modDef10326 from "../../../../../_runtime/metro/10326__.js";
import _modDef10327 from "../../../../../_runtime/metro/10327__.js";
import _modDef10328 from "../../../../../_runtime/metro/10328__.js";
import ParticipantTitleDefault from "ParticipantTitle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
class StreamPreviewTile {
  constructor(arg0) {
    participant = global.participant;
    obj = { style: null, children: null };
    items = [,];
    items[0] = closure_16().streamPreview;
    items[1] = global.style;
    obj.style = items;
    obj1 = {
      guildId: participant.stream.guildId,
      userId: participant.user.id,
      style: { aspectRatio: "ip", borderRadius: false },
      disableTransition: true,
      onPress() {
        return closure_1_8();
      },
    };
    obj.children = jsx(closure_1(closure_2[19]), obj1);
    return jsx(View, obj);
  }
}
function ParticipantIcon(participant) {
  participant = participant.participant;
  if (participant.type === constants.STREAM) {
    let tmp3 = _modDef10326;
  } else if (participant.type === tmp2.USER) {
    const voicePlatform = participant.voicePlatform;
    if (constants2.MOBILE === voicePlatform) {
      tmp3 = _modDef10327;
    } else if (constants2.XBOX === voicePlatform) {
      tmp3 = _modDef9369;
    } else if (constants2.PLAYSTATION === voicePlatform) {
      tmp3 = _modDef10066;
    } else if (constants2.QUEST === voicePlatform) {
      tmp3 = _modDef10328;
    }
  }
  let tmp14 = null;
  if (null != tmp3) {
    const obj = {
      source: tmp3,
      size: native.Icon.Sizes.REFRESH_SMALL_16,
      color: nativeDefault.unsafe_rawColors.WHITE,
      style: tmp.titleIcon,
    };
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
        obj1 = { opacity: null };
        obj4 = { easing: tmp(tmp2[25]).STANDARD_EASING, duration: 250 };
        obj1.opacity = obj.withTiming(num, obj4);
        return obj1;
      }
    }
    obj1 = {
      withTiming: reveal(closure_2[28]).withTiming,
      reveal,
      STANDARD_EASING: reveal(closure_2[25]).STANDARD_EASING,
    };
    T.__closure = obj1;
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
    obj8 = { pointerEvents: "none", style: null, children: null };
    items = [, ,];
    items[0] = StyleSheet.absoluteFill;
    items[1] = rect;
    items[2] = animatedStyle;
    obj8.style = items;
    if (isActiveStream) {
      tmp8 = jsx;
      tmp9 = View;
      obj9 = { style: null, children: null };
      obj9.style = tmp.liveContainer;
      obj9.children = jsx(tmp5(tmp3[25]).LiveTag, {});
      isActiveStream = jsx(View, obj9);
    }
    items1 = [,];
    items1[0] = isActiveStream;
    obj10 = { style: tmp.usernamePosition, children: null };
    obj11 = { style: tmp.usernameContainer, children: null };
    items2 = [,];
    items2[0] = jsx(ParticipantIcon, { participant });
    items2[1] = jsx(tmp2(tmp3[29]), { channel, participant });
    obj11.children = items2;
    obj10.children = tmp7(View, obj11);
    items1[1] = jsx(View, obj10);
    obj8.children = items1;
    return tmp7(tmp2(tmp3[27]).View, obj8);
  }
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ChannelCallStore = fn(9646);
({ resetFocus: closure_8, toggleFocus: closure_9 } = ChannelCallStore);
const CallConstants = fn(4778);
({ ParticipantTypes: c10, isStreamParticipant: closure_11, VoicePlatforms: closure_12 } = CallConstants);
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4757);
let obj = {
  liveContainer: { position: "absolute", top: 8, right: 8 },
  titleIcon: { marginRight: 6 },
  usernameContainer: null,
  usernamePosition: null,
  streamPreview: null,
  screenshareContainer: null,
  stageStreamContainer: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  backgroundColor: null,
  borderRadius: null,
  paddingHorizontal: 8,
  paddingVertical: 4,
};
const ColorUtils = fn(4606);
obj3.backgroundColor = ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj3.borderRadius = nativeDefault.radii.sm;
obj.usernameContainer = obj3;
let rect = {
  overflow: "hidden",
  position: "absolute",
  bottom: 8,
  left: 8,
  right: 40,
  borderRadius: nativeDefault.radii.sm,
};
obj.usernamePosition = rect;
obj.streamPreview = { flex: 1, width: "100%", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
let obj4 = { flex: 1, width: "100%", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
obj.screenshareContainer = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  width: "100%",
  backgroundColor: nativeDefault.colors.BLACK,
};
let obj6 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  width: "100%",
  backgroundColor: nativeDefault.colors.BLACK,
};
obj.stageStreamContainer = { backgroundColor: nativeDefault.colors.BLACK };
const value = createStyles.createStyles(obj);
const __initData = {
  code: "function CallTileTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}",
};
let obj7 = { backgroundColor: nativeDefault.colors.BLACK };
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
  const items = [right];
  const stateFromStoresObject = participant(hasRightSafeArea[12]).useStateFromStoresObject(items, () => {
    let streamForUser = null;
    if (closure_2_11(participant)) {
      streamForUser = ApplicationStreamingStore.getStreamForUser(participant.user.id, participant.stream.guildId);
    }
    const obj = { stream: streamForUser, activeStream: null };
    let activeStreamForUser = null;
    if (closure_2_11(participant)) {
      activeStreamForUser = ApplicationStreamingStore.getActiveStreamForUser(
        participant.user.id,
        participant.stream.guildId,
      );
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
    showUserProfileActionSheetDefault({
      userId: user.user.id,
      channelId: channel.id,
      isVoiceContext: true,
      sourceAnalyticsLocations: analyticsLocations,
    });
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
  const stateFromStores = participant(hasRightSafeArea[12]).useStateFromStores(items4, () =>
    currentUser.getCurrentUser(),
  );
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
        const obj4 = {
          participant,
          onSingleTap,
          onDoubleTap: callback,
          removeEmptyStateImage: shrinkStreamEmptyState,
          onFullScreen: callback,
          fullscreenIconStyle: memo,
          style: contentStyle,
        };
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
    const obj8 = {
      participant,
      avatarSize,
      onSingleTap,
      onDoubleTap: callback,
      onLongPress: callback1,
      statusStyle: memo,
      hasNotch,
      resizeMode: participant.resizeMode,
      style: contentStyle,
    };
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
    const obj10 = {
      participant,
      isActiveStream: null != activeStream,
      channel,
      hasTopSafeArea,
      hasLeftSafeArea,
      hasRightSafeArea,
      hasBottomSafeArea,
    };
    tmp27 = closure_13(TileOverlay, obj10);
  }
  const obj11 = { children: null };
  const items5 = [tmp10, tmp27];
  obj11.children = items5;
  return closure_15(closure_14, obj11);
});
export { StreamPreviewTile };
export { TileOverlay };
