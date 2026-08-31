// discord_app/modules/video_calls/native/components/CallTile.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef4187 from "../../../reanimated/ReanimatedRexport.tsx";
import registerAssetDefault from "../../../../../_runtime/09279_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/09854_registerAsset.js";
import StreamPreviewContainerDefault from "../../../../components_native/TouchableStreamPreview.tsx";
import registerAssetDefault3 from "../../../../../_runtime/10107_registerAsset.js";
import registerAssetDefault4 from "../../../../../_runtime/10108_registerAsset.js";
import registerAssetDefault5 from "../../../../../_runtime/10109_registerAsset.js";
import ParticipantTitleDefault from "ParticipantTitle.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/ApplicationStreamingStore.tsx";
import closure_7 from "../../../../stores/UserStore.tsx";
import VoiceChatDrawerState from "../ChannelCallStore.tsx";
import ParticipantTypes from "../../../calls/CallConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import hexToRgba from "../../../../utils/ColorUtils.tsx";

require = arg1;
class StreamPreviewTile {
  constructor(arg0) {
    participant = global.participant;
    obj = { style: null, children: null };
    items = [, ];
    items[0] = closure_16().streamPreview;
    items[1] = global.style;
    obj[0] = items;
    obj = {
      guildId: participant.stream.guildId,
      userId: participant.user.id,
      style: { aspectRatio: "ip", borderRadius: false },
      disableTransition: true,
      onPress() {
            return callback();
          }
    };
    obj[1] = jsx(require("StreamPreviewContainer"), obj);
    return jsx(View, obj);
  }
}
function ParticipantIcon(participant) {
  participant = participant.participant;
  if (participant.type === constants.STREAM) {
    let tmp3 = registerAssetDefault3;
  } else if (participant.type === tmp2.USER) {
    const voicePlatform = participant.voicePlatform;
    if (constants2.MOBILE === voicePlatform) {
      tmp3 = registerAssetDefault4;
    } else if (tmp19.XBOX === voicePlatform) {
      tmp3 = registerAssetDefault;
    } else if (tmp19.PLAYSTATION === voicePlatform) {
      tmp3 = registerAssetDefault2;
    } else if (tmp19.QUEST === voicePlatform) {
      tmp3 = registerAssetDefault5;
    }
  }
  let tmp14 = null;
  if (null != tmp3) {
    const obj = { source: null, size: null, color: null, style: null };
    obj[0] = tmp3;
    obj[1] = Button.Icon.Sizes.REFRESH_SMALL_16;
    obj[2] = ThemesDefault.unsafe_rawColors.WHITE;
    obj[3] = tmp.titleIcon;
    tmp14 = callback(Button.Icon, obj);
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
    tmp4 = require("useSafeAreaInsets")();
    ({ bottom, left, top, right } = tmp4);
    tmp5 = reveal;
    reveal = closure_3.useContext(require("useRevealProviderValue").RevealContext).reveal;
    obj = require("../../../reanimated/ReanimatedRexport.tsx");
    class T {
      constructor() {
        tmp = reveal;
        tmp2 = closure_1_2;
        obj = require("CONFIG_NEVER_ANIMATE_TIMING");
        num = 0;
        if (reveal) {
          num = 1;
        }
        obj = { opacity: null };
        obj1 = { easing: require("Button").STANDARD_EASING, duration: 250 };
        obj[0] = obj.withTiming(num, obj1);
        return obj;
      }
    }
    obj = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, reveal, STANDARD_EASING: require("Button").STANDARD_EASING };
    T.__closure = obj;
    T.__workletHash = 15640123774063;
    T.__initData = closure_19;
    num = 0;
    animatedStyle = obj.useAnimatedStyle(T);
    if (hasBottomSafeArea) {
      num = bottom;
    }
    obj1 = { bottom: num, right: null, left: null, top: null };
    num2 = 0;
    if (hasRightSafeArea) {
      num2 = right;
    }
    obj1[1] = num2;
    num3 = 0;
    if (hasLeftSafeArea) {
      num3 = left;
    }
    obj1[2] = num3;
    num4 = 0;
    if (hasTopSafeArea) {
      num4 = top;
    }
    obj1[3] = num4;
    tmp7 = jsxs;
    obj2 = { pointerEvents: "none", style: items, children: null };
    items = [, , ];
    items[0] = StyleSheet.absoluteFill;
    items[1] = obj1;
    items[2] = animatedStyle;
    if (isActiveStream) {
      tmp8 = jsx;
      tmp9 = View;
      obj3 = { style: null, children: null };
      obj3[0] = tmp.liveContainer;
      obj3[1] = jsx(require("Button").LiveTag, {});
      isActiveStream = jsx(View, obj3);
    }
    items1 = [, ];
    items1[0] = isActiveStream;
    obj4 = { style: tmp.usernamePosition, children: null };
    obj5 = { style: tmp.usernameContainer, children: null };
    items2 = [, ];
    items2[0] = jsx(ParticipantIcon, { participant });
    items2[1] = jsx(require("ParticipantTitle"), { channel, participant });
    obj5[1] = items2;
    obj4[1] = tmp7(View, obj5);
    items1[1] = jsx(View, obj4);
    obj2[2] = items1;
    return tmp7(require("../../../reanimated/ReanimatedRexport.tsx").View, obj2);
  }
}
let c3 = importAllResult;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ resetFocus: closure_8, toggleFocus: c9 } = VoiceChatDrawerState);
({ ParticipantTypes: c10, isStreamParticipant: unpackModuleId, VoicePlatforms: closure_12 } = ParticipantTypes);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let obj = { liveContainer: { position: "absolute", top: 8, right: 8 }, titleIcon: { marginRight: 6 }, usernameContainer: null, usernamePosition: null, streamPreview: null, screenshareContainer: null, stageStreamContainer: null };
obj = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", backgroundColor: null, borderRadius: null, paddingHorizontal: 8, paddingVertical: 4 };
obj[3] = hexToRgba.hexOpacityToRgba(ThemesDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj[4] = ThemesDefault.radii.sm;
obj[2] = obj;
createCacheKey = { overflow: "hidden", position: "absolute", bottom: 8, left: 8, right: 40, borderRadius: ThemesDefault.radii.sm };
obj[3] = createCacheKey;
obj[4] = { flex: 1, width: "100%", backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_600 };
let obj2 = { flex: 1, width: "100%", backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_600 };
obj[5] = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: ThemesDefault.colors.BLACK };
hexToRgba = { backgroundColor: ThemesDefault.colors.BLACK };
obj[6] = hexToRgba;
let closure_16 = createCacheKey.createStyles(obj);
let closure_19 = { code: "function CallTileTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: ThemesDefault.colors.BLACK };
const memoResult = importAllResult.memo((participant) => {
  participant = participant.participant;
  const channel = participant.channel;
  const hasRightSafeArea = participant.hasRightSafeArea;
  const hasBottomSafeArea = participant.hasBottomSafeArea;
  ({ contentStyle, hasNotch } = participant);
  ({ avatarSize, hasTopSafeArea, hasLeftSafeArea, shrinkStreamEmptyState } = participant);
  if (hasNotch === undefined) {
    hasNotch = false;
  }
  let analyticsLocations;
  let bottom;
  let right;
  const tmp = callback3();
  analyticsLocations = channel(hasRightSafeArea[10])().analyticsLocations;
  const rect = channel(hasRightSafeArea[11])();
  bottom = rect.bottom;
  right = rect.right;
  let obj = participant(hasRightSafeArea[12]);
  const items = [right];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let streamForUser = null;
    if (closure_1_11(participant)) {
      streamForUser = right.getStreamForUser(tmp2.user.id, tmp2.stream.guildId);
    }
    const obj = { stream: streamForUser, activeStream: null };
    let activeStreamForUser = null;
    if (closure_1_11(participant)) {
      activeStreamForUser = right.getActiveStreamForUser(tmp2.user.id, tmp2.stream.guildId);
    }
    obj[1] = activeStreamForUser;
    return obj;
  });
  const activeStream = stateFromStoresObject.activeStream;
  const items1 = [channel.id, participant.id];
  const callback = hasBottomSafeArea.useCallback(() => {
    closure_1_8();
    participant = channel(hasRightSafeArea[13]).selectParticipant(channel.id, participant.id);
  }, items1);
  const items2 = [channel.id, analyticsLocations];
  const items3 = [hasBottomSafeArea, hasRightSafeArea, bottom, right];
  const callback1 = hasBottomSafeArea.useCallback((user) => {
    channel(hasRightSafeArea[14])({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items2);
  const memo = hasBottomSafeArea.useMemo(() => {
    let num = 8;
    if (hasBottomSafeArea) {
      num = 8 + bottom;
    }
    const obj = { bottom: num, right: null };
    let num2 = 8;
    if (hasRightSafeArea) {
      num2 = 8 + right;
    }
    obj[1] = num2;
    return obj;
  }, items3);
  obj1 = participant(hasRightSafeArea[12]);
  const items4 = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items4, () => currentUser.getCurrentUser());
  const type = participant.type;
  if (constants.HIDDEN_STREAM === type) {
    obj = { participant: null, style: null };
    obj[0] = participant;
    obj[1] = contentStyle;
    let tmp10 = callback(StreamPreviewTile, obj);
  } else if (tmp9.STREAM === type) {
    if (null != activeStream) {
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (activeStream.ownerId !== id) {
        obj = { participant: null, onSingleTap: null, onDoubleTap: null, removeEmptyStateImage: null, onFullScreen: null, fullscreenIconStyle: null, style: null };
        obj[0] = participant;
        obj[1] = closure_9;
        obj[2] = callback;
        obj[3] = shrinkStreamEmptyState;
        obj[4] = callback;
        obj[5] = memo;
        obj[6] = contentStyle;
        let tmp17Result = callback(tmp2(tmp3[15]), obj);
      } else {
        obj1 = { style: null, children: null };
        obj1[0] = tmp.screenshareContainer;
        const obj2 = { participant: null, onSingleTap: null, onDoubleTap: null, containerStyle: null };
        obj2[0] = participant;
        obj2[1] = closure_9;
        obj2[2] = callback;
        let stageStreamContainer;
        if (channel.isGuildStageVoice()) {
          stageStreamContainer = tmp.stageStreamContainer;
        }
        obj2[3] = stageStreamContainer;
        obj1[1] = callback(tmp2(tmp3[16]), obj2);
        tmp17Result = tmp17(bottom, obj1);
        const tmp18 = bottom;
        const tmp2Result = tmp2(tmp3[16]);
      }
      tmp10 = tmp17Result;
    } else {
      tmp10 = null;
      if (null != stateFromStoresObject.stream) {
        const obj3 = { participant: null, style: null };
        obj3[0] = participant;
        obj3[1] = contentStyle;
        tmp10 = callback(StreamPreviewTile, obj3);
      }
    }
  } else if (tmp9.USER === type) {
    const obj4 = { participant: null, avatarSize: null, onSingleTap: null, onDoubleTap: null, onLongPress: null, statusStyle: null, hasNotch: null, resizeMode: null, style: null };
    obj4[0] = participant;
    obj4[1] = avatarSize;
    obj4[2] = closure_9;
    obj4[3] = callback;
    obj4[4] = callback1;
    obj4[5] = memo;
    obj4[6] = hasNotch;
    obj4[7] = participant.resizeMode;
    obj4[8] = contentStyle;
    tmp10 = callback(tmp2(tmp3[17]), obj4);
  } else {
    tmp10 = null;
    if (tmp9.ACTIVITY === type) {
      const obj5 = { participant: null, style: null, channel: null, onSingleTap: null };
      obj5[0] = participant;
      obj5[1] = contentStyle;
      obj5[2] = channel;
      obj5[3] = closure_9;
      tmp10 = callback(tmp2(tmp3[18]), obj5);
    }
  }
  let tmp27 = null;
  if (participant.type !== constants.ACTIVITY) {
    const obj6 = { participant: null, isActiveStream: null, channel: null, hasTopSafeArea: null, hasLeftSafeArea: null, hasRightSafeArea: null, hasBottomSafeArea: null };
    obj6[0] = participant;
    obj6[1] = null != activeStream;
    obj6[2] = channel;
    obj6[3] = hasTopSafeArea;
    obj6[4] = hasLeftSafeArea;
    obj6[5] = hasRightSafeArea;
    obj6[6] = hasBottomSafeArea;
    tmp27 = callback(TileOverlay, obj6);
  }
  const children = [tmp10, tmp27];
  return callback2(closure_14, { children });
});
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/CallTile.tsx");

export default memoResult;
export { StreamPreviewTile };
export { TileOverlay };