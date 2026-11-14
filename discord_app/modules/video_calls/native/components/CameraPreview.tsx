// discord_app/modules/video_calls/native/components/CameraPreview.tsx
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef1655 from "../../../../../_runtime/metro/01655__.js";
import _mod1708 from "../../../../../_runtime/metro/01708__.js";
import LegacyBaseButton from "../../../../../_runtime/05598_LegacyBaseButton.js";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import usePreviousDefault from "../../../../hooks/usePrevious.tsx";
import useIsActivityFocusedDefault from "../../../activities/useIsActivityFocused.tsx";
import usePipPositionDefault from "usePipPosition.tsx";
import PictureInPicture from "PictureInPicture.tsx";
import useActionBarHeightDefault from "../useActionBarHeight.tsx";
import PopoutMenuDefault from "PopoutMenu.tsx";
import PictureInPictureVideoDefault from "PictureInPictureVideo.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelCallLifecycleStore from "../ChannelCallLifecycleStore.tsx";

const PictureInPictureDefault = PictureInPicture;

require = fn;
function CameraPreview(arg0) {
  ({ channel, participantScreenIsFocused } = arg0);
  _require = participantScreenIsFocused;
  _slicedToArray = undefined;
  noop = undefined;
  closure_9 = undefined;
  let screenOrientation;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  ({ nonSelfPipParticipant, selfParticipant } = arg0);
  obj = require("initialize");
  items = [c12];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined5.isReactingToThermalState());
  importDefault = stateFromStores;
  const tmp6 = _slicedToArray(usePipPositionDefault(), 2);
  dependencyMap = tmp7;
  const reveal = noop.useContext(require("RevealProvider").RevealContext).reveal;
  _slicedToArray = reveal;
  const tmp8 = useActionBarHeightDefault();
  noop = tmp8;
  const tmp9 = closure_9();
  closure_5 = tmp9;
  const tmp10 = useIsActivityFocusedDefault(channel.id);
  closure_6 = tmp10;
  const isScreenLandscape = require("useIsScreenLandscape").useIsScreenLandscape();
  const rect = useSafeAreaInsetsDefault();
  const bottom = rect.bottom;
  const top = rect.top;
  ({ left, right } = rect);
  const obj3 = require("useIsScreenLandscape");
  let isViewingActivity = require("useIsViewingActivity").useIsViewingActivity({ channelId: channel.id });
  const obj4 = require("useIsViewingActivity");
  const obj5 = { channelId: channel.id };
  let items1 = [c12];
  const tmp13 = require("initialize").useStateFromStores(items1, () => _undefined5.getVoiceCallOverlayLayoutStates())[
    constants.CAMERA_PREVIEW_PICTURE_IN_PICTURE
  ];
  const OrientationType = require("DeviceOrientation").OrientationType;
  const tmp14 = isScreenLandscape ? OrientationType.LANDSCAPE : OrientationType.PORTRAIT;
  closure_9 = tmp14;
  const tmp15 = usePreviousDefault(tmp14);
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
  const effect = obj2.useEffect(() => {
    let tmp2 = null != screenOrientation;
    if (tmp2) {
      tmp2 = tmp !== closure_9;
    }
    if (tmp2) {
      tmp2 = closure_6;
    }
    if (tmp2) {
      _undefined3(PictureInPicture.DEFAULT_PIP_POSITION);
    }
  }, items2);
  const obj6 = require("initialize");
  [tmp20, c11] = noop.useState(top + closure_16);
  const tmp5Result = _slicedToArray(noop.useState(top + closure_16), 2);
  [tmp22, c12] = noop.useState(bottom + closure_16);
  const items3 = [reveal, tmp9, participantScreenIsFocused, tmp8, top, bottom];
  const effect1 = obj2.useEffect(() => {
    let sum = top + closure_2_16;
    let sum1 = bottom + closure_2_16;
    if (c0) {
      if (c3) {
        sum = NavigatorConstants.NAV_BAR_HEIGHT + tmp + closure_2_16;
      }
      if (c3) {
        sum1 = closure_4 + bottom + closure_2_16;
      }
      let sum3 = sum1;
      let sum2 = sum;
    } else {
      sum2 = NavigatorConstants.NAV_BAR_HEIGHT + closure_2_16;
      sum3 = closure_5 + bottom + closure_2_16;
    }
    _undefined4(sum2);
    _undefined5(sum3);
  }, items3);
  const tmp5Result3 = _slicedToArray(noop.useState(bottom + closure_16), 2);
  const items4 = [closure_27, require("timing/timing").withTiming, tmp20, obj, tmp22];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp24, tmp25, tmp26, tmp27, tmp28] = items4;
  class CameraPreviewTsx2 {
    constructor() {
      obj = { marginTop: closure_0(closure_1, closure_2), marginBottom: closure_0(closure_3, closure_2) };
      return obj;
    }
  }
  const items5 = [tmp25, tmp26, tmp27, tmp28];
  CameraPreviewTsx2.__closure = items5;
  CameraPreviewTsx2.__workletHash = 12303259660253;
  CameraPreviewTsx2.__initData = tmp24;
  const animatedStyle = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(CameraPreviewTsx2);
  const ref = noop.useRef(null);
  const tmpResult = require("../../../../../_runtime/metro/01655__.js");
  [tmp32, c13] = noop.useState(null);
  if (constants3.HIDE_PIP === tmp32) {
    const obj7 = { text: null, onClick: null };
    function handleHidePip() {
      const result = _undefined(_undefined3[31]).setPipEnabledWhileFocusedOnActivityOrStream(false);
    }
    const intl2 = tmp(1113).intl;
    obj7.text = intl2.string(tmp(1113).t.L3I0Jr);
    obj7.onClick = handleHidePip;
    const items6 = [obj7];
    let items8 = items6;
  } else if (tmp33.HANDLE_THERMAL_EVENT === tmp32) {
    const obj8 = { text: null, onClick: null };
    const intl = tmp(1113).intl;
    obj8.text = intl.string(tmp(1113).t["1fRDnT"]);
    obj8.onClick = tmp(12739).openIgnoreThermalStateAlert;
    const items7 = [obj8];
    items8 = items7;
  } else {
    items8 = [];
  }
  closure_129_0 = ref;
  [][0] = ref;
  let tmp37 = null;
  if (null != tmp32) {
    const obj9 = { gesture: tmp34, children: null };
    const obj10 = { style: closure_5.absoluteFill };
    obj9.children = closure_21(closure_6, obj10);
    tmp37 = closure_21(tmp(5598).GestureDetector, obj9);
  }
  const items9 = [tmp37];
  const obj11 = { style: closure_5.absoluteFill, pointerEvents: "box-none", children: null };
  const obj12 = { style: null, pointerEvents: "box-none", children: null };
  const items10 = [{ flex: 1, marginLeft: left + closure_15, marginRight: right + closure_15 }, animatedStyle];
  obj12.style = items10;
  const obj14 = {
    channel,
    preferredPosition: tmp6[0],
    onMove: tmp6[1],
    isInCallScreen: true,
    marginTop: tmp20,
    marginBottom: tmp22,
    children: null,
  };
  const obj13 = { flex: 1, marginLeft: left + closure_15, marginRight: right + closure_15 };
  const tmp42 = closure_6;
  const tmp5Result4 = _slicedToArray(noop.useState(null), 2);
  const obj15 = { ref, disabled: null, trigger: null, rows: null, onOpen: null, onClose: null };
  const tmp4Result = PictureInPictureDefault;
  if (isViewingActivity) {
    isViewingActivity = stateFromStores;
  }
  obj15.disabled = !isViewingActivity;
  obj15.trigger = closure_21(PictureInPictureVideoDefault, {
    channel,
    selfParticipant,
    pipParticipant: nonSelfPipParticipant,
  });
  obj15.rows = items8;
  obj15.onOpen = function onOpen() {
    _undefined6(c1 ? constants.HANDLE_THERMAL_EVENT : constants.HIDE_PIP);
  };
  obj15.onClose = function onClose() {
    _undefined6(null);
  };
  obj14.children = closure_21(PopoutMenuDefault, obj15);
  obj12.children = closure_21(tmp4Result, obj14);
  let str = "portrait";
  if (isScreenLandscape) {
    str = "landscape";
  }
  const obj16 = { children: null };
  obj11.children = closure_21(_modDef1655.View, obj12, str);
  items9[1] = closure_21(tmp42, obj11);
  obj16.children = items9;
  return closure_23(closure_22, obj16);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
let closure_9 = fn(11865).useBestActiveChatInputContainerHeight;
const useChannelCallStore = fn(11003).useChannelCallStore;
const ChannelCallConstants = fn(11004);
({
  VoiceChatDrawerState: closure_14,
  VOICE_CALL_OVERLAY_HORIZONTAL_MARGIN: closure_15,
  VOICE_CALL_OVERLAY_VERTICAL_MARGIN: closure_16,
  VoiceCallOverlayType: closure_17,
} = ChannelCallConstants);
const ApplicationStreamStates = fn(1072).ApplicationStreamStates;
const CallConstants = fn(5983);
({ ParticipantTypes: closure_19, isStreamParticipant: closure_20 } = CallConstants);
const jsxProd = fn(21);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
let closure_24 = {
  code: "(function CameraPreviewTsx1(){let[closeFunc,scheduleOnRN]=this.__closure;if(closeFunc!=null){scheduleOnRN(closeFunc);}})",
};
let obj = { duration: 250, easing: fn(1187).STANDARD_EASING };
const constants3 = { HIDE_PIP: "HIDE_PIP", HANDLE_THERMAL_EVENT: "HANDLE_THERMAL_EVENT" };
let closure_27 = {
  code: "(function CameraPreviewTsx2(){let[withTiming,marginTopState,TIMING_CONFIG,marginBottomState]=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/CameraPreview.tsx");

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
  closure_3 = undefined;
  let id;
  const tmp3 = flag(11006)(channel);
  dependencyMap = tmp3;
  items = [ChannelRTCStore, AuthenticationStore, ApplicationStreamingStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    const id2 = AuthenticationStore.getId();
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    let tmp2 = null != currentUserActiveStream;
    if (tmp2) {
      tmp2 = currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
    }
    closure_1 = tmp2;
    const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
    const found = streamParticipants.find((user) => user.user.id === closure_0 && closure_1);
    if (null != id) {
      if (null != found) {
        if (id.id === found.id) {
          let tmp6 = null;
        }
        return tmp6;
      }
    }
    tmp6 = found;
  });
  obj = channel(504);
  const tmp7 = useChannelCallStore((voiceChatDrawerState) => {
    voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
    return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
  });
  const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let found = null;
    if (null != currentEmbeddedActivity) {
      const participants = ChannelRTCStore.getParticipants(channel.id);
      found = participants.find(
        (id) =>
          id.id ===
          channel(closure_2[38]).getEmbeddedActivityParticipantId({
            applicationId: currentEmbeddedActivity.applicationId,
            instanceId: currentEmbeddedActivity.compositeInstanceId,
          }),
      );
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
  const obj3 = channel(504);
  const isStreamFocused = channel(12900).useIsStreamFocused(channel.id);
  const tmp4Result = channel(12900);
  const isViewingActivity = channel(12726).useIsViewingActivity({ channelId: channel.id });
  const obj4 = { channelId: channel.id };
  const tmp4Result7 = channel(12726);
  const items2 = [ChannelRTCStore, AuthenticationStore];
  const stateFromStores2 = channel(504).useStateFromStores(items2, () => {
    id = AuthenticationStore.getId();
    const participant = ChannelRTCStore.getParticipant(channel.id, id);
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
      let tmp6 = null != id;
      if (tmp6) {
        let id1;
        if (id != null) {
          id1 = id.id;
        }
        tmp6 = id1 !== id;
      }
      if (null == id) {
        if (!channel.isGuildStageVoice()) {
          const participants = ChannelRTCStore.getParticipants(channel.id);
          let found = participants;
          if (participants.length <= 4) {
            found = participants.filter((user) => {
              let tmp = closure_2_20(user);
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
  const tmp4Result8 = channel(504);
  const items3 = [AuthenticationStore, ChannelRTCStore];
  id = channel.id;
  const stateFromStores3 = channel(504).useStateFromStores(items3, () => {
    const tmp2 = dependencyMap(user);
    let type;
    if (user != null) {
      type = user.type;
    }
    if (tmp2) {
      let streamId;
      if (user != null) {
        streamId = user.streamId;
      }
      if (null != streamId) {
        let found = user;
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
      if (user != null) {
        id = user.user.id;
      }
      if (id !== AuthenticationStore.getId()) {
        const participant = ChannelRTCStore.getParticipant(channel.id, user.user.id);
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
    if (tmp4) {
      const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
      found = streamParticipants.find((user) => user.user.id === user.user.id);
    }
    tmp4 = type === constants2.USER;
  });
  const tmp4Result9 = channel(504);
  const items4 = [ChannelRTCStore];
  closure_129_0 = channel;
  const stateFromStores4 = channel(504).useStateFromStores(items4, () => {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = null != ChannelRTCStore.getSelectedParticipant(tmp);
    }
    return tmp2;
  });
  const tmp4Result10 = channel(504);
  const items5 = [ChannelRTCStore];
  const stateFromStores5 = channel(504).useStateFromStores(items5, () =>
    ChannelRTCStore.getSelectedParticipant(channel.id),
  );
  const tmp19 = flag(12723)(channel.id);
  let tmp20 = null;
  if (null != tmp19) {
    tmp20 = null;
    if (tmp19.user.id !== AuthenticationStore.getId()) {
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
  const tmp4Result11 = channel(504);
  const items6 = [ChannelCallLifecycleStore];
  const stateFromStores6 = channel(504).useStateFromStores(items6, () =>
    pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream(),
  );
  if (flag2) {
    flag2 = channel.isGuildStageVoice();
  }
  if (flag2) {
    flag2 = flag;
  }
  flag(12901)(channel);
  if (tmp9) {
    if (!stateFromStores6) {
      let tmp25 = null;
    }
    return tmp25;
  }
  if (null != tmp22) {
    tmp25 = null;
    if (!flag2) {
      const obj5 = { channel, participantScreenIsFocused: flag, nonSelfPipParticipant: tmp12, selfParticipant: tmp22 };
      tmp25 = closure_21(CameraPreview, obj5);
    }
  } else {
    tmp25 = null;
  }
  const tmp4Result12 = channel(504);
}
