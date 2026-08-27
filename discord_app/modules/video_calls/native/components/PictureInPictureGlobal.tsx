// === Module 16401: PictureInPictureGlobal ===

// Module 16401 (PictureInPictureGlobal)
import ThemesDefault from "Themes" /* 712 */;
import PictureInPicturePositionsDefault from "PictureInPicturePositions" /* 9458 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "participantFromServer" /* 1390 */;
import closure_9 from "getParticipants" /* 4461 */;
import { useBestActiveChatInputContainerHeight as closure_10 } from "updateChatInputContainerHeight" /* 9455 */;
import closure_11 from "fetchFingerprint" /* 1218 */;
import closure_12 from "_detectH265HardwareDecode" /* 4496 */;
import { PictureInPicturePositions } from "ME" /* 676 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4466 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import Button from "Button" /* 1297 */;

const require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6, TouchableOpacity: error } = get_ActivityIndicator);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let c17 = 12;
let obj = { container: { flex: 1, marginLeft: 12, marginRight: 12 }, elevationShadow: null, pip: null, background: null };
obj[1] = Button.generateBoxShadowStyle(require("Button").EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj = { borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
obj[2] = obj;
createCacheKey = { backgroundColor: ThemesDefault.colors.BLACK, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
obj[3] = createCacheKey;
let closure_18 = createCacheKey.createStyles(obj);
let closure_19 = importAllResult.memo((channel) => {
  channel = channel.channel;
  let stateFromStores1;
  let callback;
  let shouldForcePipOrientation;
  let isScreenLandscape;
  let width;
  let height;
  const tmp = callback4();
  let tmp4 = stateFromStores1(callback[14])(channel.id);
  let obj = channel(callback[15]);
  const items = [closure_9, ];
  obj1 = closure_11;
  items[1] = closure_11;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const streamParticipants = closure_1_9.getStreamParticipants(channel.id);
    return streamParticipants.find((user) => user.user.id === id.getId());
  });
  let obj2 = channel(callback[15]);
  const items1 = [closure_9, closure_8];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const currentEmbeddedActivity = closure_1_8.getCurrentEmbeddedActivity();
    let participant = null;
    if (null != currentEmbeddedActivity) {
      let obj = channel(callback[16]);
      obj = { applicationId: null, instanceId: null };
      ({ applicationId: obj2[0], compositeInstanceId: obj2[1] } = currentEmbeddedActivity);
      participant = closure_1_9.getParticipant(channel.id, obj.getEmbeddedActivityParticipantId(obj));
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
  const items2 = [closure_12];
  const items3 = [tmp10];
  const stateFromStores2 = tmp5Result.useStateFromStores(items2, () => {
    let isLocalVideoDisabledResult = null != stateFromStores1;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = closure_1_12.isLocalVideoDisabled(tmp.id);
    }
    return isLocalVideoDisabledResult;
  }, items3);
  tmp5Result = tmp5(tmp3[15]);
  const items4 = [closure_9, obj1];
  const stateFromStores3 = tmp5Result.useStateFromStores(items4, () => {
    const participant = closure_1_9.getParticipant(channel.id, closure_1_11.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === closure_1_14.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  const items5 = [channel];
  callback = isScreenLandscape.useCallback(() => {
    channel(callback[18]).openGuildVoiceModal(channel, "PIP");
  }, items5);
  const tmp6 = closure_9;
  tmp9 = stateFromStores1(callback[17])(channel.id);
  shouldForcePipOrientation = channel(callback[19]).useShouldForcePipOrientation({ channel });
  const tmp5Result1 = channel(callback[19]);
  isScreenLandscape = channel(callback[20]).useIsScreenLandscape();
  obj = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const size = tmp2(tmp3[21])(obj);
  width = size.width;
  height = size.height;
  const items6 = [shouldForcePipOrientation, isScreenLandscape, height, width];
  let type;
  const memo = isScreenLandscape.useMemo(() => {
    const obj = { height, width, flexDirection: null };
    if (isScreenLandscape) {
      let str = "row";
    } else {
      str = "column";
    }
    obj[2] = str;
    return obj;
  }, items6);
  if (tmp10 != null) {
    type = tmp10.type;
  }
  const tmp19 = type === ParticipantTypes.ACTIVITY && stateFromStores1(callback[23])(tmp10.applicationId) && null == stateFromStores;
  let type1;
  if (tmp10 != null) {
    type1 = tmp10.type;
  }
  if (ParticipantTypes.HIDDEN_STREAM !== type1) {
    if (tmp18.STREAM !== type1) {
      if (tmp18.USER === type1) {
        let tmp22 = null;
        if (!stateFromStores2) {
          obj = { participant: null, avatarSize: null, resizeMode: null, onSingleTap: null, onDoubleTap: null };
          obj[0] = tmp10;
          let tmp2Result = tmp2(tmp3[26]);
          obj[1] = tmp5(tmp3[12]).AvatarSizes.PROFILE;
          obj[2] = tmp5(tmp3[25]).ResizeMode.COVER;
          obj[3] = callback;
          obj[4] = callback;
          tmp22 = callback3(tmp2Result, obj);
        }
        let tmp21 = tmp22;
      } else {
        tmp21 = null;
        if (tmp18.ACTIVITY === type1) {
          obj1 = { participant: null, channel: null, onSingleTap: null };
          obj1[0] = tmp10;
          obj1[1] = channel;
          obj1[2] = function onSingleTap() {
            const currentEmbeddedActivity = closure_1_8.getCurrentEmbeddedActivity();
            if (null != currentEmbeddedActivity) {
              let _location;
              if (currentEmbeddedActivity != null) {
                _location = currentEmbeddedActivity.location;
              }
              stateFromStores1(callback[28])(channel.guild_id, _location);
              const tmp4 = stateFromStores1(callback[28]);
            }
            callback();
          };
          tmp21 = callback3(tmp2(tmp3[27]), obj1);
        }
      }
    }
    obj2 = { style: null, children: null };
    obj2[0] = tmp.background;
    const obj3 = { style: null, children: null };
    const items7 = [, , ];
    ({ pip: arr8[0], elevationShadow: arr8[1] } = tmp);
    items7[2] = memo;
    obj3[0] = items7;
    let tmp26Result = null != stateFromStores3;
    if (tmp26Result) {
      tmp26Result = !tmp19;
    }
    if (tmp26Result) {
      const obj4 = { participant: null, avatarSize: null, resizeMode: null, onSingleTap: null };
      obj4[0] = stateFromStores3;
      tmp2Result = tmp2(tmp3[26]);
      obj4[1] = tmp5(tmp3[12]).AvatarSizes.PROFILE;
      obj4[2] = tmp5(tmp3[25]).ResizeMode.COVER;
      obj4[3] = callback;
      tmp26Result = tmp26(tmp2Result, obj4);
    }
    const items8 = [tmp26Result, , ];
    tmp26Result = null != stateFromStores && !tmp19;
    if (tmp26Result) {
      const obj5 = { onSingleTap: null };
      obj5[0] = callback;
      tmp26Result = tmp26(tmp2(tmp3[29]), obj5);
    }
    items8[1] = tmp26Result;
    const obj6 = { activeOpacity: 0.7, children: null };
    items8[2] = (null == stateFromStores3 || null == stateFromStores || null == stateFromStores1) && tmp21;
    obj3[1] = items8;
    obj6[1] = closure_16(width, obj3);
    obj2[1] = callback3(closure_7, obj6);
    return callback3(width, obj2);
  }
  const obj7 = { resizeMode: null, participant: null, onSingleTap: null, onDoubleTap: null };
  const tmp5Result2 = channel(callback[20]);
  obj7[0] = channel(callback[25]).ResizeMode.CONTAIN;
  obj7[1] = tmp10;
  obj7[2] = callback;
  obj7[3] = callback;
  tmp21 = callback3(stateFromStores1(callback[24]), obj7);
});
let closure_20 = importAllResult.memo((channel) => {
  channel = channel.channel;
  [tmp2, tmp3] = callback(importAllResult.useState(() => constants.TOP_RIGHT), 2);
  const obj = { channel, preferredPosition: tmp2, onMove: tmp3, children: null };
  const tmp = callback(importAllResult.useState(() => constants.TOP_RIGHT), 2);
  obj[3] = callback3(closure_19, { channel });
  return callback3(PictureInPicturePositionsDefault, obj);
});
let closure_21 = { code: "function PictureInPictureGlobalTsx1(){const{withTiming,drawerState,STANDARD_EASING}=this.__closure;return withTiming(drawerState,{easing:STANDARD_EASING,duration:250});}" };
let closure_22 = { code: "function PictureInPictureGlobalTsx2(){const{interpolate,animatedDrawerState,NAV_BAR_HEIGHT,PADDING,chatInputContainerHeight,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;return{marginTop:interpolate(animatedDrawerState.get(),[0,1],[NAV_BAR_HEIGHT+PADDING,PADDING]),marginBottom:interpolate(animatedDrawerState.get(),[0,1],[chatInputContainerHeight+PADDING,PIP_AVOIDANCE_TAB_BAR_HEIGHT+PADDING])};}" };
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/PictureInPictureGlobal.tsx");

export default function PictureInPictureGlobal(channel) {
  let num;
  importDefault = undefined;
  let derivedValue;
  let obj = num(derivedValue[31]);
  num = 1;
  if (obj.useIsChannelFocused()) {
    num = 0;
  }
  const tmp4 = callback2();
  importDefault = tmp4;
  let tmp2Result = tmp2(tmp3[32]);
  const fn = function n() {
    let obj = num(derivedValue[33]);
    obj = { easing: num(derivedValue[12]).STANDARD_EASING, duration: 250 };
    return obj.withTiming(num, obj);
  };
  obj = { withTiming: tmp2(tmp3[33]).withTiming, drawerState: num, STANDARD_EASING: tmp2(tmp3[12]).STANDARD_EASING };
  fn.__closure = obj;
  fn.__workletHash = 5168896066356;
  fn.__initData = closure_21;
  derivedValue = tmp2Result.useDerivedValue(fn);
  tmp2Result = tmp2(tmp3[32]);
  const fn2 = function o() {
    const obj = { marginTop: null, marginBottom: null };
    let value = derivedValue.get();
    const items = [num(derivedValue[34]).NAV_BAR_HEIGHT + closure_1_17, closure_1_17];
    obj[0] = num(derivedValue[32]).interpolate(value, [0, 1], items);
    const obj2 = num(derivedValue[32]);
    const items1 = [closure_1 + closure_1_17, ];
    value = derivedValue.get();
    items1[1] = num(derivedValue[35]).PIP_AVOIDANCE_TAB_BAR_HEIGHT + closure_1_17;
    obj[1] = num(derivedValue[32]).interpolate(value, [0, 1], items1);
    return obj;
  };
  obj = { interpolate: tmp2(tmp3[32]).interpolate, animatedDrawerState: derivedValue, NAV_BAR_HEIGHT: tmp2(tmp3[34]).NAV_BAR_HEIGHT, PADDING: c17, chatInputContainerHeight: tmp4, PIP_AVOIDANCE_TAB_BAR_HEIGHT: tmp2(tmp3[35]).PIP_AVOIDANCE_TAB_BAR_HEIGHT };
  fn2.__closure = obj;
  fn2.__workletHash = 8833756900366;
  fn2.__initData = closure_22;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn2);
  const rect = importDefault(tmp3[36])();
  obj1 = { style: items, pointerEvents: "box-none", children: null };
  items = [absoluteFill.absoluteFill, { paddingLeft: rect.left, paddingRight: rect.right }];
  const tmp = callback4();
  let items1 = [tmp.container, animatedStyle];
  obj1[2] = callback3(importDefault(derivedValue[32]).View, { style: items1, pointerEvents: "box-none", children: callback3(closure_20, { channel: channel.channel }) });
  return callback3(closure_5, obj1);
};