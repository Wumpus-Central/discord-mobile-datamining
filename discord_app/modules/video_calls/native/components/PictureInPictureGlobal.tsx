// discord_app/modules/video_calls/native/components/PictureInPictureGlobal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native2 from "../../../../design/void/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import ChannelRTCParticipants from "../../../calls/ChannelRTCParticipants.tsx";
import PictureInPictureDefault from "PictureInPicture.tsx";
import transitionToActivityDefault from "../../../activities/utils/transitionToActivity.native.tsx";
import getPIPBottomOffsetForPIPMode from "../../../panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, TouchableOpacity: closure_7 } = get_ActivityIndicator);
let closure_10 = fn(9485).useBestActiveChatInputContainerHeight;
const PictureInPicturePositions = fn(1074).PictureInPicturePositions;
const ParticipantTypes = fn(4581).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let c17 = 12;
fn(4560);
let obj = {
  container: { flex: 1, marginLeft: 12, marginRight: 12 },
  elevationShadow: null,
  pip: null,
  background: null,
};
const native = fn(1178);
obj.elevationShadow = native.generateBoxShadowStyle(fn(1178).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.pip = obj;
const createStyles = {
  backgroundColor: nativeDefault.colors.BLACK,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj.background = createStyles;
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
  let obj = channel(onDoubleTap[15]);
  const items = [ChannelRTCStore];
  let obj1 = AuthenticationStore;
  items[1] = AuthenticationStore;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
    return streamParticipants.find((user) => user.user.id === id.getId());
  });
  let obj2 = channel(onDoubleTap[15]);
  const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let participant = null;
    if (null != currentEmbeddedActivity) {
      const obj = { applicationId: null, instanceId: null };
      ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
      participant = ChannelRTCStore.getParticipant(channel.id, obj.getEmbeddedActivityParticipantId(obj));
    }
    return participant;
  });
  let tmp10 = stateFromStores1;
  if (null != tmp4) {
    tmp10 = stateFromStores1;
    if (tmp4.user.id !== obj1.getId()) {
      tmp10 = tmp4;
    }
  }
  if (tmp9) {
    tmp10 = stateFromStores1;
  }
  stateFromStores1 = tmp10;
  let tmp5Result = tmp5(tmp3[15]);
  const items2 = [MediaEngineStore];
  const items3 = [tmp10];
  const stateFromStores2 = tmp5Result.useStateFromStores(
    items2,
    () => {
      let isLocalVideoDisabledResult = null != stateFromStores1;
      if (isLocalVideoDisabledResult) {
        isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id);
      }
      return isLocalVideoDisabledResult;
    },
    items3,
  );
  tmp5Result = tmp5(tmp3[15]);
  const items4 = [ChannelRTCStore, obj1];
  const stateFromStores3 = tmp5Result.useStateFromStores(items4, () => {
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
  tmp9 = stateFromStores1(onDoubleTap[17])(channel.id);
  shouldForcePipOrientation = channel(onDoubleTap[19]).useShouldForcePipOrientation({ channel });
  const tmp5Result1 = channel(onDoubleTap[19]);
  isScreenLandscape = channel(onDoubleTap[20]).useIsScreenLandscape();
  obj = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  let size = tmp2(tmp3[21])(obj);
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
  const tmp19 =
    type === ParticipantTypes.ACTIVITY &&
    stateFromStores1(onDoubleTap[23])(tmp10.applicationId) &&
    null == stateFromStores;
  let type1;
  if (tmp10 != null) {
    type1 = tmp10.type;
  }
  if (ParticipantTypes.HIDDEN_STREAM !== type1) {
    if (tmp18.STREAM !== type1) {
      if (tmp18.USER === type1) {
        let tmp22 = null;
        if (!stateFromStores2) {
          obj = { participant: tmp10, avatarSize: null, resizeMode: null, onSingleTap: null, onDoubleTap: null };
          let tmp2Result = tmp2(tmp3[26]);
          obj.avatarSize = tmp5(tmp3[12]).AvatarSizes.PROFILE;
          obj.resizeMode = tmp5(tmp3[25]).ResizeMode.COVER;
          obj.onSingleTap = onDoubleTap;
          obj.onDoubleTap = onDoubleTap;
          tmp22 = closure_15(tmp2Result, obj);
        }
        let tmp21 = tmp22;
      } else {
        tmp21 = null;
        if (tmp18.ACTIVITY === type1) {
          obj1 = {
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
            },
          };
          tmp21 = closure_15(tmp2(tmp3[27]), obj1);
        }
      }
    }
    obj2 = { style: tmp.background, children: null };
    const obj3 = { style: null, children: null };
    const items7 = [, ,];
    ({ pip: arr8[0], elevationShadow: arr8[1] } = tmp);
    items7[2] = memo;
    obj3.style = items7;
    let tmp26Result = null != stateFromStores3;
    if (tmp26Result) {
      tmp26Result = !tmp19;
    }
    if (tmp26Result) {
      const obj4 = { participant: stateFromStores3, avatarSize: null, resizeMode: null, onSingleTap: null };
      tmp2Result = tmp2(tmp3[26]);
      obj4.avatarSize = tmp5(tmp3[12]).AvatarSizes.PROFILE;
      obj4.resizeMode = tmp5(tmp3[25]).ResizeMode.COVER;
      obj4.onSingleTap = onDoubleTap;
      tmp26Result = tmp26(tmp2Result, obj4);
    }
    const items8 = [tmp26Result, ,];
    tmp26Result = null != stateFromStores && !tmp19;
    if (tmp26Result) {
      const obj5 = { onSingleTap: onDoubleTap };
      tmp26Result = tmp26(tmp2(tmp3[29]), obj5);
    }
    items8[1] = tmp26Result;
    const obj6 = { activeOpacity: 0.7, children: null };
    items8[2] = (null == stateFromStores3 || null == stateFromStores || null == stateFromStores1) && tmp21;
    obj3.children = items8;
    obj6.children = closure_16(width, obj3);
    obj2.children = closure_15(closure_7, obj6);
    return closure_15(width, obj2);
  }
  const obj7 = { resizeMode: null, participant: null, onSingleTap: null, onDoubleTap: null };
  const tmp5Result2 = channel(onDoubleTap[20]);
  obj7.resizeMode = channel(onDoubleTap[25]).ResizeMode.CONTAIN;
  obj7.participant = tmp10;
  obj7.onSingleTap = onDoubleTap;
  obj7.onDoubleTap = onDoubleTap;
  tmp21 = closure_15(stateFromStores1(onDoubleTap[24]), obj7);
});
let closure_20 = noop.memo((channel) => {
  channel = channel.channel;
  [tmp2, tmp3] = _slicedToArray(
    noop.useState(() => constants.TOP_RIGHT),
    2,
  );
  const obj = { channel, preferredPosition: tmp2, onMove: tmp3, children: null };
  const tmp = _slicedToArray(
    noop.useState(() => constants.TOP_RIGHT),
    2,
  );
  obj.children = __initData(closure_19, { channel });
  return __initData(PictureInPictureDefault, obj);
});
const __initData = {
  code: "function PictureInPictureGlobalTsx1(){const{withTiming,drawerState,STANDARD_EASING}=this.__closure;return withTiming(drawerState,{easing:STANDARD_EASING,duration:250});}",
};
const __initData2 = {
  code: "function PictureInPictureGlobalTsx2(){const{interpolate,animatedDrawerState,NAV_BAR_HEIGHT,PADDING,chatInputContainerHeight,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;return{marginTop:interpolate(animatedDrawerState.get(),[0,1],[NAV_BAR_HEIGHT+PADDING,PADDING]),marginBottom:interpolate(animatedDrawerState.get(),[0,1],[chatInputContainerHeight+PADDING,PIP_AVOIDANCE_TAB_BAR_HEIGHT+PADDING])};}",
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureGlobal.tsx");

export default function PictureInPictureGlobal(channel) {
  let num;
  importDefault = undefined;
  let derivedValue;
  let obj = num(derivedValue[31]);
  num = 1;
  if (obj.useIsChannelFocused()) {
    num = 0;
  }
  const tmp4 = closure_10();
  importDefault = tmp4;
  let tmp2Result = tmp2(tmp3[32]);
  const fn = function n() {
    const obj = { easing: native2.STANDARD_EASING, duration: 250 };
    return obj.withTiming(num, obj);
  };
  obj = { withTiming: tmp2(tmp3[33]).withTiming, drawerState: num, STANDARD_EASING: tmp2(tmp3[12]).STANDARD_EASING };
  fn.__closure = obj;
  fn.__workletHash = 5168896066356;
  fn.__initData = __initData;
  derivedValue = tmp2Result.useDerivedValue(fn);
  tmp2Result = tmp2(tmp3[32]);
  const fn2 = function o() {
    const obj = { marginTop: null, marginBottom: null };
    value = derivedValue.get();
    const items = [NavigatorConstants.NAV_BAR_HEIGHT + c17, c17];
    obj.marginTop = ReanimatedRexport.interpolate(value, [0, 1], items);
    const items1 = [closure_1 + c17];
    value = derivedValue.get();
    items1[1] = getPIPBottomOffsetForPIPMode.PIP_AVOIDANCE_TAB_BAR_HEIGHT + c17;
    obj.marginBottom = ReanimatedRexport.interpolate(value, [0, 1], items1);
    return obj;
  };
  obj = {
    interpolate: tmp2(tmp3[32]).interpolate,
    animatedDrawerState: derivedValue,
    NAV_BAR_HEIGHT: tmp2(tmp3[34]).NAV_BAR_HEIGHT,
    PADDING,
    chatInputContainerHeight: tmp4,
    PIP_AVOIDANCE_TAB_BAR_HEIGHT: tmp2(tmp3[35]).PIP_AVOIDANCE_TAB_BAR_HEIGHT,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 8833756900366;
  fn2.__initData = __initData2;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn2);
  const rect = require("useSafeAreaInsets")();
  const obj1 = { style: null, pointerEvents: "box-none", children: null };
  let items = [absoluteFill.absoluteFill, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj1.style = items;
  let obj2 = { style: null, pointerEvents: "box-none", children: closure_15(closure_20, { channel: channel.channel }) };
  let items1 = [closure_18().container, animatedStyle];
  obj2.style = items1;
  obj1.children = closure_15(require("ReanimatedRexport").View, obj2);
  return closure_15(closure_5, obj1);
}
