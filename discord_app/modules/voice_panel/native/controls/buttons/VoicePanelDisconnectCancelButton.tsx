// === Module 17337: VoicePanelDisconnectCancelButton ===

// Module 17337 (VoicePanelDisconnectCancelButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import StreamActionCreators from "StreamActionCreators" /* 5032 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5091 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5568 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8991 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9016 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11902 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import VoicePanelStore from "VoicePanelStore" /* 5098 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, props;

let obj2;
let obj3;
let react = react_mod;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const jsx = Fragment.jsx;
const constants = { USER: 0, [0]: "USER", STREAM: 1, [1]: "STREAM", ACTIVITY: 2, [2]: "ACTIVITY" };
let createStyles = createStyles_mod;
let obj = { disconnectCancelBG: obj2, icon: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.WHITE };
let closure_11 = createStyles(obj);
const __initData = { code: "function VoicePanelDisconnectCancelButtonTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;}" };
const __initData2 = { code: "function VoicePanelDisconnectCancelButtonTsx2(focusId_0,lastFocusId){const{runOnJS,handleFocusChange}=this.__closure;if(focusId_0!==lastFocusId){runOnJS(handleFocusChange)(focusId_0);}}" };
const __initData3 = { code: "function VoicePanelDisconnectCancelButtonTsx3(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;}" };
const __initData4 = { code: "function VoicePanelDisconnectCancelButtonTsx4(focusId_0,lastFocusId){const{runOnJS,handleFocusChange}=this.__closure;if(focusId_0!==lastFocusId){runOnJS(handleFocusChange)(focusId_0);}}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((props) => {
  let channelId;
  let closure_4;
  let first;
  let focused;
  let mode;
  let tmp = channelId;
  const tmp2 = mode;
  let obj = channelId(mode[10]);
  const cResult = obj.c(15);
  props = props.props;
  const tmp4 = closure_11();
  const context = react.useContext(focused(mode[11]));
  channelId = context.channelId;
  const tmp5 = focused;
  focused = context.focused;
  mode = context.mode;
  const tmp7 = first(react.useState(null), 2);
  first = tmp7[0];
  react = tmp7[1];
  function handleFocusChange(id) {
    if (null != id) {
      let STREAM;
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      if (null != applicationId) {
        const obj3 = { applicationId: null, instanceId: null };
        ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
        const obj = ChannelRTCParticipants;
        if (id === obj.getEmbeddedActivityParticipantId(obj3)) {
          closure_4(constants.ACTIVITY);
        }
      }
      if (null == ApplicationStreamingStore.getActiveStreamForStreamKey(id)) {
        STREAM = constants.USER;
      } else {
        STREAM = constants.STREAM;
      }
      closure_4(STREAM);
    } else {
      closure_4(null);
    }
  }
  let obj2 = channelId(mode[13]);
  class C {
    constructor() {
      let tmp = null;
      if (mode.get() === VoicePanelModes.PANEL) {
        const value = focused.get();
        let id;
        if (value != null) {
          id = value.id;
        }
        if (id == null) {
          id = null;
        }
        tmp = id;
      }
      return tmp;
    }
  }
  let obj3 = { mode, VoicePanelModes, focused };
  C.__closure = obj3;
  C.__workletHash = 1109426015268;
  C.__initData = __initData;
  const fn = function v(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(handleFocusChange)(arg0);
    }
  };
  fn.__closure = { runOnJS: channelId(mode[13]).runOnJS, handleFocusChange };
  fn.__workletHash = 11963160980927;
  fn.__initData = __initData2;
  ({ runOnJS: channelId(mode[13]).runOnJS, handleFocusChange });
  const animatedReaction = obj2.useAnimatedReaction(C, fn);
  if (cResult[0] === channelId) {
    if (cResult[1] === first) {
      let tmp10;
      let PhoneHangUpIcon;
      let tmp12;
      if (cResult[2] === focused) {
        tmp10 = cResult[3];
      }
      if (first === constants.ACTIVITY) {
        PhoneHangUpIcon = tmp(tmp2[18]).DoorExitIcon;
      } else if (first === constants.STREAM) {
        PhoneHangUpIcon = tmp(tmp2[19]).ScreenXIcon;
      } else {
        PhoneHangUpIcon = tmp(tmp2[20]).PhoneHangUpIcon;
      }
      if (cResult[4] !== first) {
        let stringResult;
        if (first === constants.ACTIVITY) {
          const intl3 = tmp(tmp2[21]).intl;
          stringResult = intl3.string(tmp(tmp2[21]).t["R/FK4A"]);
        } else if (first === constants.STREAM) {
          const intl2 = tmp(tmp2[21]).intl;
          stringResult = intl2.string(tmp(tmp2[21]).t.q3O3J8);
        } else {
          const intl = tmp(tmp2[21]).intl;
          stringResult = intl.string(tmp(tmp2[21]).t["6vrfgt"]);
        }
        cResult[4] = first;
        cResult[5] = stringResult;
        tmp12 = stringResult;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === PhoneHangUpIcon) {
        let tmp14;
        if (cResult[7] === tmp4.icon) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp10) {
          if (cResult[10] === props) {
            if (cResult[11] === tmp4.disconnectCancelBG) {
              if (cResult[12] === tmp12) {
                let tmp17;
                if (cResult[13] === tmp14) {
                  tmp17 = cResult[14];
                }
                return tmp17;
              }
            }
          }
        }
        const tmp19 = jsx(tmp5(tmp2[22]), { onPress: tmp10, props, style: tmp4.disconnectCancelBG, accessibilityLabel: tmp12, children: tmp14 });
        cResult[9] = tmp10;
        cResult[10] = props;
        cResult[11] = tmp4.disconnectCancelBG;
        cResult[12] = tmp12;
        cResult[13] = tmp14;
        cResult[14] = tmp19;
        tmp17 = tmp19;
      }
      const tmp16 = <PhoneHangUpIcon style={tmp4.icon} />;
      cResult[6] = PhoneHangUpIcon;
      cResult[7] = tmp4.icon;
      cResult[8] = tmp16;
      tmp14 = tmp16;
    }
  }
  class T {
    constructor() {
      let id;
      const value = focused.get();
      if (value != null) {
        id = value.id;
      }
      if (first !== constants.ACTIVITY) {
        if (tmp2 === constants.STREAM) {
          const obj5 = ChannelRTCActionCreatorsDefault;
          const participant = obj5.selectParticipant(channelId, null);
          if (null != id) {
            const obj6 = StreamActionCreators;
            obj6.stopStream(id);
          }
        } else {
          const obj3 = SelectedChannelActionCreatorsDefault;
          obj3.disconnect();
          const state = VoicePanelStore.getState();
          state.closeChannel(channelId);
        }
      } else {
        const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
        const obj = ChannelRTCParticipants;
        const result = obj.activityParticipantIdToApplicationId(id);
        let _location;
        const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
        EmbeddedActivitiesNativeManagerDefault;
        if (currentEmbeddedActivity != null) {
          _location = currentEmbeddedActivity.location;
        }
        const obj2 = { location: _location, applicationId: result };
        leaveActivity(obj2);
      }
    }
  }
  cResult[0] = channelId;
  cResult[1] = first;
  cResult[2] = focused;
  cResult[3] = T;
  tmp10 = T;
}) : ((props) => {
  let icon;
  let stringResult;
  let channelId;
  let focused;
  let first;
  let PhoneHangUpIcon;
  props = props.props;
  let tmp = closure_11();
  _require = tmp;
  let obj = first;
  const tmp2 = channelId;
  const context = first.useContext(channelId(focused[11]));
  channelId = context.channelId;
  focused = context.focused;
  const mode = context.mode;
  const tmp5 = mode(first.useState(null), 2);
  first = tmp5[0];
  let closure_5 = tmp5[1];
  const handleFocusChange = first.useCallback((id) => {
    if (null != id) {
      let STREAM;
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      if (null != applicationId) {
        const obj3 = { applicationId: null, instanceId: null };
        ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
        const obj = ChannelRTCParticipants;
        if (id === obj.getEmbeddedActivityParticipantId(obj3)) {
          closure_5(constants.ACTIVITY);
        }
      }
      if (null == ApplicationStreamingStore.getActiveStreamForStreamKey(id)) {
        STREAM = constants.USER;
      } else {
        STREAM = constants.STREAM;
      }
      closure_5(STREAM);
    } else {
      closure_5(null);
    }
  }, []);
  let obj2 = require("ReanimatedRexport");
  class C {
    constructor() {
      let tmp = null;
      if (mode.get() === VoicePanelModes.PANEL) {
        const value = focused.get();
        let id;
        if (value != null) {
          id = value.id;
        }
        if (id == null) {
          id = null;
        }
        tmp = id;
      }
      return tmp;
    }
  }
  let obj3 = { mode, VoicePanelModes, focused };
  C.__closure = obj3;
  C.__workletHash = 11003731851942;
  C.__initData = __initData3;
  const fn = function p(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback)(arg0);
    }
  };
  fn.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, handleFocusChange };
  fn.__workletHash = 10967754441017;
  fn.__initData = __initData4;
  ({ runOnJS: require("ReanimatedRexport").runOnJS, handleFocusChange });
  const animatedReaction = obj2.useAnimatedReaction(C, fn);
  const items = [channelId, first, focused];
  const callback1 = first.useCallback(() => {
    let id;
    const value = focused.get();
    if (value != null) {
      id = value.id;
    }
    if (first !== constants.ACTIVITY) {
      if (tmp2 === constants.STREAM) {
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channelId, null);
        if (null != id) {
          const obj6 = StreamActionCreators;
          obj6.stopStream(id);
        }
      } else {
        const obj3 = SelectedChannelActionCreatorsDefault;
        obj3.disconnect();
        const state = VoicePanelStore.getState();
        state.closeChannel(channelId);
      }
    } else {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      const obj = ChannelRTCParticipants;
      const result = obj.activityParticipantIdToApplicationId(id);
      let _location;
      const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
      EmbeddedActivitiesNativeManagerDefault;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj2 = { location: _location, applicationId: result };
      leaveActivity(obj2);
    }
  }, items);
  if (first === constants.ACTIVITY) {
    PhoneHangUpIcon = tmp8(tmp3[18]).DoorExitIcon;
  } else if (first === constants.STREAM) {
    PhoneHangUpIcon = tmp8(tmp3[19]).ScreenXIcon;
  } else {
    PhoneHangUpIcon = tmp8(tmp3[20]).PhoneHangUpIcon;
  }
  tmp2(focused[22]);
  if (first === constants.ACTIVITY) {
    const intl3 = tmp8(tmp3[21]).intl;
    stringResult = intl3.string(tmp8(tmp3[21]).t["R/FK4A"]);
  } else if (first === constants.STREAM) {
    const intl2 = tmp8(tmp3[21]).intl;
    stringResult = intl2.string(tmp8(tmp3[21]).t.q3O3J8);
  } else {
    const intl = tmp8(tmp3[21]).intl;
    stringResult = intl.string(tmp8(tmp3[21]).t["6vrfgt"]);
  }
  const items1 = [PhoneHangUpIcon, tmp.icon];
  return <tmp2Result onPress={callback1} props={props} style={tmp.disconnectCancelBG} accessibilityLabel={stringResult}>{obj.useMemo(() => <PhoneHangUpIcon style={icon.icon} />, items1)}</tmp2Result>;
});
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx");

export default tmp3;