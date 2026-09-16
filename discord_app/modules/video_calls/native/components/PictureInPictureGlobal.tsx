// === Module 17119: PictureInPictureGlobal ===

// Module 17119 (PictureInPictureGlobal)
import nativeDefault from "native" /* 576 */;
import native2 from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4374 */;
import timing from "timing" /* 4639 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4845 */;
import NavigatorConstants from "NavigatorConstants" /* 5768 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9619 */;
import PictureInPictureDefault from "PictureInPicture" /* 9631 */;
import transitionToActivityDefault from "transitionToActivity" /* 9678 */;
import getPIPBottomOffsetForPIPMode from "getPIPBottomOffsetForPIPMode" /* 17120 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4654 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, TouchableOpacity: closure_7 } = get_ActivityIndicator);
let closure_10 = fn(9628).useBestActiveChatInputContainerHeight;
const PictureInPicturePositions = fn(1074).PictureInPicturePositions;
const ParticipantTypes = fn(4659).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let c17 = 12;
const createStyles = fn(4638);
let obj = { container: { flex: 1, marginLeft: 12, marginRight: 12 }, elevationShadow: null, pip: null, background: null };
const native = fn(1177);
obj.elevationShadow = native.generateBoxShadowStyle(fn(1177).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj.pip = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.background = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_18 = createStyles.createStyles(obj);
let closure_19 = noop.memo((channel) => {
  channel = channel.channel;
  let stateFromStores1;
  let onDoubleTap;
  let shouldForcePipOrientation;
  let isScreenLandscape;
  let width;
  let height;
  const tmp = closure_18();
  let tmp4 = stateFromStores1(onDoubleTap[14])(channel.id);
  const items = [ChannelRTCStore, AuthenticationStore];
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
let closure_20 = noop.memo((channel) => {
  channel = channel.channel;
  [tmp2, tmp3] = noop.useState(() => constants.TOP_RIGHT);
  const obj = { channel, preferredPosition: tmp2, onMove: tmp3, children: null };
  const tmp = _slicedToArray(noop.useState(() => constants.TOP_RIGHT), 2);
  obj.children = __initData(closure_19, { channel });
  return __initData(PictureInPictureDefault, obj);
});
const __initData = { code: "function PictureInPictureGlobalTsx1(){const{withTiming,drawerState,STANDARD_EASING}=this.__closure;return withTiming(drawerState,{easing:STANDARD_EASING,duration:250});}" };
const __initData2 = { code: "function PictureInPictureGlobalTsx2(){const{interpolate,animatedDrawerState,NAV_BAR_HEIGHT,PADDING,chatInputContainerHeight,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;return{marginTop:interpolate(animatedDrawerState.get(),[0,1],[NAV_BAR_HEIGHT+PADDING,PADDING]),marginBottom:interpolate(animatedDrawerState.get(),[0,1],[chatInputContainerHeight+PADDING,PIP_AVOIDANCE_TAB_BAR_HEIGHT+PADDING])};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureGlobal.tsx");

export default function PictureInPictureGlobal(channel) {
  importDefault = undefined;
  let derivedValue;
  const tmp = closure_18();
  let num = 1;
  if (obj.useIsChannelFocused()) {
    num = 0;
  }
  const tmp4 = closure_10();
  importDefault = tmp4;
  obj = num(derivedValue[31]);
  const fn = function n() {
    const obj = timing;
    return obj.withTiming(num, { easing: native2.STANDARD_EASING, duration: 250 });
  };
  const tmp2Result = num(derivedValue[32]);
  fn.__closure = { withTiming: num(derivedValue[33]).withTiming, drawerState: num, STANDARD_EASING: num(derivedValue[12]).STANDARD_EASING };
  fn.__workletHash = 5168896066356;
  fn.__initData = __initData;
  derivedValue = tmp2Result.useDerivedValue(fn);
  let obj2 = { withTiming: num(derivedValue[33]).withTiming, drawerState: num, STANDARD_EASING: num(derivedValue[12]).STANDARD_EASING };
  const fn2 = function o() {
    const obj = { marginTop: null, marginBottom: null };
    value = derivedValue.get();
    const items = [NavigatorConstants.NAV_BAR_HEIGHT + c17, c17];
    obj.marginTop = ReanimatedRexport.interpolate(value, [0, 1], items);
    const items1 = [closure_1 + c17, ];
    value2 = derivedValue.get();
    items1[1] = getPIPBottomOffsetForPIPMode.PIP_AVOIDANCE_TAB_BAR_HEIGHT + c17;
    obj.marginBottom = ReanimatedRexport.interpolate(value2, [0, 1], items1);
    return obj;
  };
  const tmp2Result2 = num(derivedValue[32]);
  fn2.__closure = { interpolate: num(derivedValue[32]).interpolate, animatedDrawerState: derivedValue, NAV_BAR_HEIGHT: num(derivedValue[34]).NAV_BAR_HEIGHT, PADDING, chatInputContainerHeight: tmp4, PIP_AVOIDANCE_TAB_BAR_HEIGHT: num(derivedValue[35]).PIP_AVOIDANCE_TAB_BAR_HEIGHT };
  fn2.__workletHash = 8833756900366;
  fn2.__initData = __initData2;
  const animatedStyle = tmp2Result2.useAnimatedStyle(fn2);
  const rect = require("useSafeAreaInsets")();
  const obj4 = { style: null, pointerEvents: "box-none", children: null };
  let items = [absoluteFill.absoluteFill, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj4.style = items;
  const obj5 = { style: null, pointerEvents: "box-none", children: closure_15(closure_20, { channel: channel.channel }) };
  let items1 = [tmp.container, animatedStyle];
  obj5.style = items1;
  obj4.children = closure_15(require("ReanimatedRexport").View, obj5);
  return closure_15(closure_5, obj4);
};