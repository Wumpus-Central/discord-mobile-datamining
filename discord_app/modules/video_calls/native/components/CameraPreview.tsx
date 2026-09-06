// === Module 9484: CameraPreview ===

// Module 9484 (CameraPreview)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "participantFromServer" /* 1956 */;
import closure_8 from "getParticipants" /* 4576 */;
import { useBestActiveChatInputContainerHeight as closure_9 } from "updateChatInputContainerHeight" /* 9485 */;
import closure_10 from "reset" /* 4582 */;
import closure_11 from "fetchFingerprint" /* 502 */;
import closure_12 from "initialize" /* 9486 */;
import { useChannelCallStore } from "VoiceChatDrawerState" /* 9467 */;
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH" /* 9468 */;
import { ApplicationStreamStates } from "ME" /* 1074 */;
import ParticipantTypes from "ParticipantTypes" /* 4581 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
function CameraPreview(arg0) {
  ({ channel, participantScreenIsFocused } = arg0);
  let ref = participantScreenIsFocused;
  let stateFromStores;
  dependencyMap = undefined;
  let reveal;
  let React;
  closure_5 = undefined;
  closure_6 = undefined;
  let bottom;
  let top;
  let callback;
  let screenOrientation;
  let first;
  closure_12 = undefined;
  let first1;
  closure_14 = undefined;
  c15 = undefined;
  ({ nonSelfPipParticipant, selfParticipant } = arg0);
  obj = ref(504);
  const items = [closure_12];
  stateFromStores = obj.useStateFromStores(items, () => lib.isReactingToThermalState());
  const tmp6 = reveal(stateFromStores(9487)(), 2);
  dependencyMap = tmp7;
  obj1 = React;
  reveal = React.useContext(ref(9474).RevealContext).reveal;
  let tmp8 = stateFromStores(9496)();
  React = tmp8;
  let tmp9 = callback();
  closure_5 = tmp9;
  const tmp10 = stateFromStores(9475)(channel.id);
  closure_6 = tmp10;
  let obj2 = ref(5126);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  const rect = stateFromStores(1611)();
  bottom = rect.bottom;
  top = rect.top;
  ({ left, right } = rect);
  let obj3 = ref(9493);
  obj = { channelId: channel.id };
  let isViewingActivity = obj3.useIsViewingActivity(obj);
  let obj5 = ref(504);
  const items1 = [closure_12];
  const tmp13 = obj5.useStateFromStores(items1, () => lib.getVoiceCallOverlayLayoutStates())[constants.CAMERA_PREVIEW_PICTURE_IN_PICTURE];
  const OrientationType = ref(8332).OrientationType;
  const tmp14 = isScreenLandscape ? OrientationType.LANDSCAPE : OrientationType.PORTRAIT;
  callback = tmp14;
  const tmp15 = stateFromStores(8272)(tmp14);
  let tmp16 = tmp15;
  if (tmp15 == null) {
    screenOrientation = undefined;
    if (tmp13 != null) {
      screenOrientation = tmp13.screenOrientation;
    }
    tmp16 = screenOrientation;
  }
  screenOrientation = tmp16;
  const items2 = [tmp14, tmp16, tmp10, tmp6[1]];
  const effect = obj1.useEffect(() => {
    let tmp2 = null != screenOrientation;
    if (tmp2) {
      tmp2 = tmp !== closure_9;
    }
    if (tmp2) {
      tmp2 = closure_6;
    }
    if (tmp2) {
      dependencyMap(ref(9488).DEFAULT_PIP_POSITION);
    }
  }, items2);
  let tmp5Result = tmp5(obj1.useState(top + closure_16), 2);
  first = tmp5Result[0];
  closure_12 = tmp5Result[1];
  tmp5Result = tmp5(obj1.useState(bottom + closure_16), 2);
  first1 = tmp5Result[0];
  closure_14 = tmp5Result[1];
  const items3 = [reveal, tmp9, participantScreenIsFocused, tmp8, top, bottom];
  const effect1 = obj1.useEffect(() => {
    let sum = top + closure_1_16;
    let sum1 = bottom + closure_1_16;
    if (ref) {
      if (reveal) {
        sum = ref(5682).NAV_BAR_HEIGHT + tmp + tmp2;
      }
      if (tmp9) {
        sum1 = closure_4 + tmp4 + tmp2;
      }
      let sum2 = sum1;
      let tmp8 = sum;
      tmp9 = reveal;
    } else {
      sum2 = closure_5 + tmp4 + tmp2;
      tmp8 = sum;
    }
    lib(tmp8);
    callback(sum2);
  }, items3);
  function ee() {
    obj = { marginTop: ref(4561).withTiming(first, closure_1_25), marginBottom: null };
    const obj2 = ref(4561);
    obj[1] = ref(4561).withTiming(first1, closure_1_25);
    return obj;
  }
  obj = { withTiming: tmp(4561).withTiming, marginTopState: first, TIMING_CONFIG: obj, marginBottomState: first1 };
  ee.__closure = obj;
  ee.__workletHash = 17411027531876;
  ee.__initData = closure_27;
  const animatedStyle = ref(4296).useAnimatedStyle(ee);
  ref = obj1.useRef(null);
  const tmpResult = ref(4296);
  [tmp27, c15] = reveal(obj1.useState(null), 2);
  if (constants2.HIDE_PIP === tmp27) {
    obj1 = { text: null, onClick: null };
    function handleHidePip() {
      const result = ref(9584).setPipEnabledWhileFocusedOnActivityOrStream(false);
    }
    const intl2 = tmp(1114).intl;
    obj1[0] = intl2.string(tmp(1114).t.L3I0Jr);
    obj1[1] = handleHidePip;
    const items4 = [obj1];
    let items6 = items4;
  } else if (tmp28.HANDLE_THERMAL_EVENT === tmp27) {
    obj2 = { text: null, onClick: null };
    const intl = tmp(1114).intl;
    obj2[0] = intl.string(tmp(1114).t["1fRDnT"]);
    obj2[1] = tmp(9585).openIgnoreThermalStateAlert;
    const items5 = [obj2];
    items6 = items5;
  } else {
    items6 = [];
  }
  [][0] = ref;
  let tmp32 = null;
  if (null != tmp27) {
    obj3 = { gesture: null, children: null };
    obj3[0] = tmp29;
    const obj4 = { style: null };
    obj4[0] = closure_5.absoluteFill;
    obj3[1] = callback2(closure_6, obj4);
    tmp32 = callback2(tmp(6655).GestureDetector, obj3);
  }
  const items7 = [tmp32, ];
  obj5 = { style: closure_5.absoluteFill, pointerEvents: "box-none", children: null };
  const obj6 = { style: items8, pointerEvents: "box-none", children: null };
  items8 = [{ flex: 1, marginLeft: left + c15, marginRight: right + c15 }, animatedStyle];
  const obj8 = { channel, preferredPosition: tmp6[0], onMove: tmp6[1], isInCallScreen: true, marginTop: first, marginBottom: first1, children: null };
  let tmp4Result = tmp4(9488);
  const obj9 = { ref, disabled: null, trigger: null, rows: null, onOpen: null, onClose: null };
  tmp4Result = tmp4(9587);
  if (isViewingActivity) {
    isViewingActivity = stateFromStores;
  }
  obj9[1] = !isViewingActivity;
  obj9[2] = callback2(stateFromStores(9588), { channel, selfParticipant, pipParticipant: nonSelfPipParticipant });
  obj9[3] = items6;
  obj9[4] = function onOpen() {
    _undefined(stateFromStores ? closure_1_26.HANDLE_THERMAL_EVENT : closure_1_26.HIDE_PIP);
  };
  obj9[5] = function onClose() {
    _undefined(null);
  };
  obj8[6] = callback2(tmp4Result, obj9);
  obj6[2] = callback2(tmp4Result, obj8);
  let str = "portrait";
  if (isScreenLandscape) {
    str = "landscape";
  }
  const obj10 = { children: null };
  obj5[2] = callback2(stateFromStores(4296).View, obj6, str);
  items7[1] = callback2(closure_6, obj5);
  obj10[0] = items7;
  return closure_23(closure_22, obj10);
}
({ StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ VoiceChatDrawerState: closure_14, VOICE_CALL_OVERLAY_HORIZONTAL_MARGIN: closure_15, VOICE_CALL_OVERLAY_VERTICAL_MARGIN: closure_16, VoiceCallOverlayType: closure_17 } = BOX_MODE_ACTIONSHEET_WIDTH);
({ ParticipantTypes: closure_19, isStreamParticipant: closure_20 } = ParticipantTypes);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
let closure_24 = { code: "function CameraPreviewTsx1(){const{closeFunc,runOnJS}=this.__closure;if(closeFunc!=null){runOnJS(closeFunc)();}}" };
let obj = { duration: 250, easing: require("Button").STANDARD_EASING };
let closure_26 = { HIDE_PIP: "HIDE_PIP", HANDLE_THERMAL_EVENT: "HANDLE_THERMAL_EVENT" };
let closure_27 = { code: "function CameraPreviewTsx2(){const{withTiming,marginTopState,TIMING_CONFIG,marginBottomState}=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};}" };
let result = require("set").fileFinishedImporting("modules/video_calls/native/components/CameraPreview.tsx");

export default function CameraPreviewContainer(channel) {
  channel = channel.channel;
  let flag = channel.participantScreenIsFocused;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = channel.isChannelCallModalOpen;
  if (flag2 === undefined) {
    flag2 = false;
  }
  dependencyMap = undefined;
  closure_3 = undefined;
  let id;
  const tmp3 = flag(9470)(channel);
  dependencyMap = tmp3;
  obj = channel(504);
  const items = [closure_8, closure_11, closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => {
    id = closure_1_11.getId();
    const currentUserActiveStream = closure_1_10.getCurrentUserActiveStream();
    let tmp2 = null != currentUserActiveStream;
    if (tmp2) {
      tmp2 = currentUserActiveStream.state === closure_1_18.ACTIVE;
    }
    closure_1 = tmp2;
    const streamParticipants = closure_1_8.getStreamParticipants(id.id);
    const found = streamParticipants.find((user) => user.user.id === closure_0 && closure_1);
    if (null != id2) {
      if (null != found) {
        if (id2.id === found.id) {
          let tmp6 = null;
        }
        return tmp6;
      }
    }
    tmp6 = found;
  });
  const tmp7 = useChannelCallStore((voiceChatDrawerState) => {
    voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
    return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
  });
  const items1 = [closure_8, closure_7];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => {
    const currentEmbeddedActivity = closure_1_7.getCurrentEmbeddedActivity();
    let found = null;
    if (null != currentEmbeddedActivity) {
      const participants = closure_1_8.getParticipants(currentEmbeddedActivity.id);
      found = participants.find((id) => {
        obj = currentEmbeddedActivity(closure_1_2[37]);
        obj = { applicationId: currentEmbeddedActivity.applicationId, instanceId: currentEmbeddedActivity.compositeInstanceId };
        return id.id === obj.getEmbeddedActivityParticipantId(obj);
      });
    }
    return found;
  });
  let tmp9 = null != stateFromStores1;
  if (tmp9) {
    id = undefined;
    if (tmp3 != null) {
      id = tmp3.id;
    }
    let id1;
    if (stateFromStores1 != null) {
      id1 = stateFromStores1.id;
    }
    tmp9 = id === id1;
  }
  if (tmp9) {
    tmp9 = !tmp7;
  }
  closure_3 = tmp9;
  let tmp12 = null;
  if (!tmp9) {
    tmp12 = stateFromStores1;
  }
  let tmp4Result = tmp4(9654);
  const isStreamFocused = tmp4Result.useIsStreamFocused(channel.id);
  tmp4Result = tmp4(9493);
  obj = { channelId: channel.id };
  const isViewingActivity = tmp4Result.useIsViewingActivity(obj);
  const obj3 = channel(504);
  const items2 = [closure_8, closure_11];
  const stateFromStores2 = channel(504).useStateFromStores(items2, () => {
    id = closure_1_11.getId();
    const participant = closure_1_8.getParticipant(id.id, id);
    let streamId;
    if (participant != null) {
      streamId = participant.streamId;
    }
    if (null == streamId) {
      if (!closure_3) {
        return null;
      }
    }
    if (flag) {
      let tmp6 = null != closure_2;
      if (tmp6) {
        let id1;
        if (tmp5 != null) {
          id1 = tmp5.id;
        }
        tmp6 = id1 !== id;
      }
      if (null == closure_2) {
        if (!obj2.isGuildStageVoice()) {
          const participants = closure_1_8.getParticipants(obj2.id);
          let found = participants;
          if (participants.length <= 4) {
            found = participants.filter((user) => {
              let tmp = closure_1_20(user);
              if (tmp) {
                tmp = user.user.id === id;
              }
              return !tmp;
            });
          }
          let tmp8 = found.length > 1;
          if (tmp8) {
            tmp8 = found.length <= 3;
          }
          return tmp9;
        }
        tmp9 = participant;
      }
      tmp9 = null;
    } else {
      return participant;
    }
  });
  const tmp4Result1 = channel(504);
  const items3 = [closure_11, closure_8];
  id = channel.id;
  const stateFromStores3 = channel(504).useStateFromStores(items3, () => {
    const tmp2 = closure_1_20(closure_2);
    let type;
    if (closure_2 != null) {
      type = tmp.type;
    }
    if (tmp2) {
      let streamId;
      if (tmp != null) {
        streamId = tmp.streamId;
      }
      if (null != streamId) {
        let found = tmp;
      }
      let streamId1;
      if (found != null) {
        streamId1 = found.streamId;
      }
      let tmp17 = null;
      if (null != streamId1) {
        tmp17 = found;
      }
      return tmp17;
    }
    if (tmp2) {
      id = undefined;
      if (tmp != null) {
        id = tmp.user.id;
      }
      if (id !== closure_1_11.getId()) {
        const participant = closure_1_8.getParticipant(channel.id, tmp.user.id);
        let localVideoDisabled;
        if (participant != null) {
          localVideoDisabled = participant.localVideoDisabled;
        }
        found = participant;
        if (localVideoDisabled) {
          found = null;
        }
      }
    }
    if (type === closure_1_19.USER) {
      const streamParticipants = closure_1_8.getStreamParticipants(channel.id);
      found = streamParticipants.find((user) => user.user.id === user.user.id);
    }
  });
  const tmp4Result2 = channel(504);
  const items4 = [closure_8];
  const stateFromStores4 = channel(504).useStateFromStores(items4, () => {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = null != closure_1_8.getSelectedParticipant(tmp);
    }
    return tmp2;
  });
  const tmp4Result3 = channel(504);
  const items5 = [closure_8];
  const stateFromStores5 = channel(504).useStateFromStores(items5, () => closure_1_8.getSelectedParticipant(channel.id));
  const tmp19 = flag(9490)(channel.id);
  let tmp20 = null;
  if (null != tmp19) {
    tmp20 = null;
    if (tmp19.user.id !== obj2.getId()) {
      if (!flag) {
        let id2;
        if (stateFromStores5 != null) {
          id2 = stateFromStores5.id;
        }
        tmp20 = null;
        if (tmp19.id !== id2) {
          tmp20 = tmp19;
        }
      } else {
        tmp20 = null;
      }
    }
  }
  if (tmp12 == null) {
    tmp12 = stateFromStores;
  }
  if (tmp12 == null) {
    tmp12 = stateFromStores3;
  }
  if (tmp12 == null) {
    tmp12 = tmp20;
  }
  let tmp22 = null;
  if (stateFromStores2 !== tmp12) {
    tmp22 = stateFromStores2;
  }
  const tmp4Result4 = channel(504);
  const items6 = [closure_12];
  const stateFromStores6 = channel(504).useStateFromStores(items6, () => pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream());
  if (flag2) {
    flag2 = channel.isGuildStageVoice();
  }
  flag(9655)(channel);
  if (tmp9) {
    if (!stateFromStores6) {
      let tmp25 = null;
    }
    return tmp25;
  }
  if (null != tmp22) {
    tmp25 = null;
    if (!flag2) {
      obj = { channel: null, participantScreenIsFocused: null, nonSelfPipParticipant: null, selfParticipant: null };
      obj[0] = channel;
      obj[1] = flag;
      obj[2] = tmp12;
      obj[3] = tmp22;
      tmp25 = callback2(CameraPreview, obj);
    }
  } else {
    tmp25 = null;
  }
};