// === Module 19162: PictureInPictureGlobal ===

// Module 19162 (PictureInPictureGlobal)
import nativeDefault from "native" /* 575 */;
import native2 from "native" /* 1187 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5377 */;
import NavigatorConstants from "NavigatorConstants" /* 5709 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6971 */;
import isChannelFocused from "isChannelFocused" /* 6993 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8063 */;
import transitionToActivityDefault from "transitionToActivity" /* 11835 */;
import PictureInPictureDefault from "PictureInPicture" /* 11844 */;
import getPIPBottomOffsetForPIPMode from "getPIPBottomOffsetForPIPMode" /* 19163 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4989 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6963 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;

const _modDef1652 = _mod1652;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, TouchableOpacity: closure_7 } = get_ActivityIndicator);
let closure_10 = fn(10026).useBestActiveChatInputContainerHeight;
const PictureInPicturePositions = fn(1072).PictureInPicturePositions;
const ParticipantTypes = fn(5801).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5141);
let obj = { container: { flex: 1, marginLeft: 12, marginRight: 12 }, elevationShadow: null, pip: null, background: null };
const native = fn(1187);
obj.elevationShadow = native.generateBoxShadowStyle(fn(1187).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj.pip = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.background = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = noop.memo(function PIPContent(channel) {
  channel = channel.channel;
  let stateFromStores1;
  let onDoubleTap;
  let shouldForcePipOrientation;
  let isScreenLandscape;
  let width;
  let height;
  const tmp = closure_17();
  let tmp4 = stateFromStores1(onDoubleTap[14])(channel.id);
  items = [ChannelRTCStore, AuthenticationStore];
  const stateFromStores = channel(onDoubleTap[15]).useStateFromStores(items, () => {
    const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
    return streamParticipants.find((user) => user.user.id === id.getId());
  });
  let obj = channel(onDoubleTap[15]);
  const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
  stateFromStores1 = channel(onDoubleTap[15]).useStateFromStores(items1, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let participant = null;
    if (null != currentEmbeddedActivity) {
      ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
      participant = ChannelRTCStore.getParticipant(channel.id, ChannelRTCParticipants.getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
      const obj3 = { applicationId: null, instanceId: null };
    }
    return participant;
  });
  let tmp10 = stateFromStores1;
  let obj3 = channel(onDoubleTap[15]);
  if (null != tmp4) {
    tmp10 = stateFromStores1;
    if (tmp4.user.id !== AuthenticationStore.getId()) {
      tmp10 = tmp4;
    }
  }
  if (tmp9) {
    tmp10 = stateFromStores1;
  }
  stateFromStores1 = tmp10;
  tmp9 = stateFromStores1(onDoubleTap[17])(channel.id);
  const items2 = [MediaEngineStore];
  const items3 = [tmp10];
  const stateFromStores2 = channel(onDoubleTap[15]).useStateFromStores(items2, () => {
    let isLocalVideoDisabledResult = null != stateFromStores1;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id);
    }
    return isLocalVideoDisabledResult;
  }, items3);
  const tmp5Result = channel(onDoubleTap[15]);
  const items4 = [ChannelRTCStore, AuthenticationStore];
  const stateFromStores3 = channel(onDoubleTap[15]).useStateFromStores(items4, () => {
    const participant = ChannelRTCStore.getParticipant(channel.id, AuthenticationStore.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === ParticipantTypes.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  const items5 = [channel];
  onDoubleTap = isScreenLandscape.useCallback(() => {
    PrivateChannelCallUtils.openGuildVoiceModal(channel, "PIP");
  }, items5);
  const tmp5Result4 = channel(onDoubleTap[15]);
  shouldForcePipOrientation = channel(onDoubleTap[19]).useShouldForcePipOrientation({ channel });
  const tmp5Result5 = channel(onDoubleTap[19]);
  isScreenLandscape = channel(onDoubleTap[20]).useIsScreenLandscape();
  let size = tmp2(tmp3[21])({ channelId: channel.id, forcedOrientation: shouldForcePipOrientation });
  width = size.width;
  height = size.height;
  const items6 = [shouldForcePipOrientation, isScreenLandscape, height, width];
  let type;
  const memo = isScreenLandscape.useMemo(() => {
    const size = { height, width, flexDirection: null };
    if (isScreenLandscape) {
      let str = "row";
    } else {
      str = "column";
    }
    size.flexDirection = str;
    return size;
  }, items6);
  if (tmp10 != null) {
    type = tmp10.type;
  }
  const tmp19 = type === ParticipantTypes.ACTIVITY && stateFromStores1(onDoubleTap[23])(tmp10.applicationId) && null == stateFromStores;
  let type1;
  if (tmp10 != null) {
    type1 = tmp10.type;
  }
  if (ParticipantTypes.HIDDEN_STREAM !== type1) {
    if (ParticipantTypes.STREAM !== type1) {
      if (ParticipantTypes.USER === type1) {
        let tmp22 = null;
        if (!stateFromStores2) {
          const obj5 = { participant: tmp10, avatarSize: tmp5(tmp3[12]).AvatarSizes.PROFILE, resizeMode: tmp5(tmp3[25]).ResizeMode.COVER, onSingleTap: onDoubleTap, onDoubleTap };
          tmp22 = closure_15(tmp2(tmp3[26]), obj5);
          const tmp2Result = tmp2(tmp3[26]);
        }
        let tmp21 = tmp22;
      } else {
        tmp21 = null;
        if (ParticipantTypes.ACTIVITY === type1) {
          const obj6 = {
            participant: tmp10,
            channel,
            onSingleTap() {
                      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                      if (null != currentEmbeddedActivity) {
                        let _location;
                        if (currentEmbeddedActivity != null) {
                          _location = currentEmbeddedActivity.location;
                        }
                        transitionToActivityDefault(channel.guild_id, _location);
                      }
                      callback();
                    }
          };
          tmp21 = closure_15(tmp2(tmp3[27]), obj6);
        }
      }
    }
    const obj7 = { style: tmp.background, children: null };
    const obj8 = { style: null, children: null };
    const items7 = [, , ];
    ({ pip: arr8[0], elevationShadow: arr8[1] } = tmp);
    items7[2] = memo;
    obj8.style = items7;
    let tmp26Result = null != stateFromStores3;
    if (tmp26Result) {
      tmp26Result = !tmp19;
    }
    if (tmp26Result) {
      const obj9 = { participant: stateFromStores3, avatarSize: tmp5(tmp3[12]).AvatarSizes.PROFILE, resizeMode: tmp5(tmp3[25]).ResizeMode.COVER, onSingleTap: onDoubleTap };
      tmp26Result = closure_15(tmp2(tmp3[26]), obj9);
      const tmp2Result3 = tmp2(tmp3[26]);
    }
    const items8 = [tmp26Result, , ];
    let tmp26Result2 = null != stateFromStores && !tmp19;
    if (tmp26Result2) {
      const obj10 = { onSingleTap: onDoubleTap };
      tmp26Result2 = closure_15(tmp2(tmp3[29]), obj10);
    }
    items8[1] = tmp26Result2;
    const obj11 = { activeOpacity: 0.7, children: null };
    items8[2] = (null == stateFromStores3 || null == stateFromStores || null == stateFromStores1) && tmp21;
    obj8.children = items8;
    obj11.children = closure_16(width, obj8);
    obj7.children = closure_15(closure_7, obj11);
    return closure_15(width, obj7);
  }
  const obj12 = { resizeMode: null, participant: null, onSingleTap: null, onDoubleTap: null };
  const obj4 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const tmp5Result6 = channel(onDoubleTap[20]);
  obj12.resizeMode = channel(onDoubleTap[25]).ResizeMode.CONTAIN;
  obj12.participant = tmp10;
  obj12.onSingleTap = onDoubleTap;
  obj12.onDoubleTap = onDoubleTap;
  tmp21 = closure_15(stateFromStores1(onDoubleTap[24]), obj12);
  const tmp2Result4 = stateFromStores1(onDoubleTap[24]);
});
let closure_19 = noop.memo(function PIPContentContainer(channel) {
  channel = channel.channel;
  [tmp2, tmp3] = noop.useState(() => constants.TOP_RIGHT);
  const obj = { channel, preferredPosition: tmp2, onMove: tmp3, children: null };
  const tmp = _slicedToArray(noop.useState(() => constants.TOP_RIGHT), 2);
  obj.children = closure_1_15(closure_18, { channel });
  return closure_1_15(PictureInPictureDefault, obj);
});
let closure_20 = { code: "(function PictureInPictureGlobalTsx1(){let[withTiming,drawerState,STANDARD_EASING]=this.__closure;return withTiming(drawerState,{easing:STANDARD_EASING,duration:250});})" };
let closure_21 = { code: "(function PictureInPictureGlobalTsx2(){let[interpolate,animatedDrawerState,NAV_BAR_HEIGHT,PADDING,chatInputContainerHeight,PIP_AVOIDANCE_TAB_BAR_HEIGHT]=this.__closure;return{marginTop:interpolate(animatedDrawerState.get(),[0,1],[NAV_BAR_HEIGHT+PADDING,PADDING]),marginBottom:interpolate(animatedDrawerState.get(),[0,1],[chatInputContainerHeight+PADDING,PIP_AVOIDANCE_TAB_BAR_HEIGHT+PADDING])};})" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureGlobal.tsx");

export default function PictureInPictureGlobal(channel) {
  const tmp = closure_17();
  let num = 1;
  if (obj.useIsChannelFocused()) {
    num = 0;
  }
  obj = isChannelFocused;
  const tmp4 = closure_10();
  items = [closure_20, timing_timing.withTiming, num, native2.STANDARD_EASING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class PictureInPictureGlobalTsx1 {
    constructor() {
      obj = { easing: closure_2, duration: 250 };
      return closure_0(closure_1, obj);
    }
  }
  let items1 = [tmp6, tmp7, tmp8];
  PictureInPictureGlobalTsx1.__closure = items1;
  PictureInPictureGlobalTsx1.__workletHash = 16919925230637;
  PictureInPictureGlobalTsx1.__initData = tmp5;
  const derivedValue = _mod1652.useDerivedValue(PictureInPictureGlobalTsx1);
  const tmp2Result = _mod1652;
  const items2 = [closure_21, _mod1652.interpolate, derivedValue, NavigatorConstants.NAV_BAR_HEIGHT, 12, tmp4, getPIPBottomOffsetForPIPMode.PIP_AVOIDANCE_TAB_BAR_HEIGHT];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  class PictureInPictureGlobalTsx2 {
    constructor() {
      obj = { marginTop: null, marginBottom: null };
      items = [, ];
      items[0] = closure_2 + closure_3;
      items[1] = closure_3;
      obj.marginTop = closure_0(closure_1.get(), [0, 1], items);
      items1 = [, ];
      items1[0] = closure_4 + closure_3;
      items1[1] = closure_5 + closure_3;
      obj.marginBottom = closure_0(closure_1.get(), [0, 1], items1);
      return obj;
    }
  }
  const items3 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  PictureInPictureGlobalTsx2.__closure = items3;
  PictureInPictureGlobalTsx2.__workletHash = 6177116209527;
  PictureInPictureGlobalTsx2.__initData = tmp10;
  const animatedStyle = _mod1652.useAnimatedStyle(PictureInPictureGlobalTsx2);
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: null, pointerEvents: "box-none", children: null };
  const items4 = [absoluteFill.absoluteFill, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj2.style = items4;
  const obj3 = { style: null, pointerEvents: "box-none", children: closure_1_15(closure_19, { channel: channel.channel }) };
  const items5 = [tmp.container, animatedStyle];
  obj3.style = items5;
  obj2.children = closure_1_15(_modDef1652.View, obj3);
  return closure_1_15(hasOwnProperty, obj2);
};