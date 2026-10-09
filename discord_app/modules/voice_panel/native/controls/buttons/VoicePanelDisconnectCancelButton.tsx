// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../../actions/ChannelRTCActionCreators.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../../actions/SelectedChannelActionCreators.tsx";
import ChannelRTCParticipants from "../../../../calls/ChannelRTCParticipants.tsx";
import StreamActionCreators from "../../../../../actions/StreamActionCreators.tsx";
import leaveEmbeddedActivity from "../../../../activities/leaveEmbeddedActivity.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStreamingStore from "../../../../../stores/ApplicationStreamingStore.tsx";
import VoicePanelStore from "../../../VoicePanelStore.tsx";

const require = globalThis.__r;

require = fn;
const VoicePanelModes = fn(11926).VoicePanelModes;
const jsx = fn(21).jsx;
const constants = { USER: 0, [0]: "USER", STREAM: 1, [1]: "STREAM", ACTIVITY: 2, [2]: "ACTIVITY" };
const createStyles = fn(5091);
let obj2 = {
  disconnectCancelBG: { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT },
  icon: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
obj2.icon = { tintColor: nativeDefault.colors.WHITE };
let closure_11 = createStyles.createStyles(obj2);
const __initData = {
  code: "function VoicePanelDisconnectCancelButtonTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;}",
};
const __initData2 = {
  code: "function VoicePanelDisconnectCancelButtonTsx2(focusId_0,lastFocusId){const{runOnJS,handleFocusChange}=this.__closure;if(focusId_0!==lastFocusId){runOnJS(handleFocusChange)(focusId_0);}}",
};
const __initData3 = {
  code: "function VoicePanelDisconnectCancelButtonTsx3(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;}",
};
const __initData4 = {
  code: "function VoicePanelDisconnectCancelButtonTsx4(focusId_0,lastFocusId){const{runOnJS,handleFocusChange}=this.__closure;if(focusId_0!==lastFocusId){runOnJS(handleFocusChange)(focusId_0);}}",
};
const ReactCompilerGating = fn(558);
let obj4 = { tintColor: nativeDefault.colors.WHITE };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DisconnectCancelButton(props) {
      const cResult = channelId(mode[10]).c(15);
      props = props.props;
      const tmp4 = closure_11();
      const context = noop.useContext(focused(mode[11]));
      channelId = context.channelId;
      focused = context.focused;
      mode = context.mode;
      const tmp7 = first(noop.useState(null), 2);
      first = tmp7[0];
      noop = tmp7[1];
      function handleFocusChange(id) {
        if (null != id) {
          const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
          let applicationId;
          if (currentEmbeddedActivity != null) {
            applicationId = currentEmbeddedActivity.applicationId;
          }
          if (null != applicationId) {
            ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
            if (id === obj.getEmbeddedActivityParticipantId(obj3)) {
              closure_4(constants.ACTIVITY);
            }
            obj = ChannelRTCParticipants;
            obj3 = { applicationId: null, instanceId: null };
          }
          if (null == ApplicationStreamingStore.getActiveStreamForStreamKey(id)) {
            let STREAM = constants.USER;
          } else {
            STREAM = constants.STREAM;
          }
          closure_4(STREAM);
        } else {
          closure_4(null);
        }
      }
      let obj = channelId(mode[10]);
      const tmp5 = focused;
      const fn = function v() {
        let tmp = null;
        if (mode.get() === VoicePanelModes.PANEL) {
          value = focused.get();
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
      };
      fn.__closure = { mode, VoicePanelModes, focused };
      fn.__workletHash = 1109426015268;
      fn.__initData = __initData;
      class A {
        constructor(arg0, arg1) {
          if (props !== arg1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            tmp3 = handleFocusChange;
            tmp4 = obj.runOnJS(handleFocusChange)(props);
          }
          return;
        }
      }
      let obj2 = channelId(mode[13]);
      let obj3 = { mode, VoicePanelModes, focused };
      A.__closure = { runOnJS: channelId(mode[13]).runOnJS, handleFocusChange };
      A.__workletHash = 11963160980927;
      A.__initData = __initData2;
      const animatedReaction = obj2.useAnimatedReaction(fn, A);
      if (cResult[0] === channelId) {
        if (cResult[1] === first) {
          if (cResult[2] === focused) {
            let tmp10 = cResult[3];
          }
          if (first === constants.ACTIVITY) {
            let PhoneHangUpIcon = tmp(tmp2[18]).DoorExitIcon;
          } else if (first === constants.STREAM) {
            PhoneHangUpIcon = tmp(tmp2[19]).ScreenXIcon;
          } else {
            PhoneHangUpIcon = tmp(tmp2[20]).PhoneHangUpIcon;
          }
          if (cResult[4] !== first) {
            if (first === constants.ACTIVITY) {
              const intl3 = tmp(tmp2[21]).intl;
              let stringResult = intl3.string(tmp(tmp2[21]).t["R/FK4A"]);
            } else if (first === constants.STREAM) {
              const intl2 = tmp(tmp2[21]).intl;
              stringResult = intl2.string(tmp(tmp2[21]).t.q3O3J8);
            } else {
              const intl = tmp(tmp2[21]).intl;
              stringResult = intl.string(tmp(tmp2[21]).t["6vrfgt"]);
            }
            cResult[4] = first;
            cResult[5] = stringResult;
          } else {
            if (cResult[6] === PhoneHangUpIcon) {
              if (cResult[7] === tmp4.icon) {
                let tmp15 = cResult[8];
              }
              if (cResult[9] === tmp10) {
                if (cResult[10] === props) {
                  if (cResult[11] === tmp4.disconnectCancelBG) {
                    if (cResult[12] === tmp12) {
                      if (cResult[13] === tmp15) {
                        let tmp18 = cResult[14];
                      }
                      return tmp18;
                    }
                  }
                }
              }
              const element = {
                onPress: tmp10,
                props,
                style: tmp4.disconnectCancelBG,
                accessibilityLabel: tmp12,
                children: tmp15,
              };
              const tmp20 = jsx(tmp5(tmp2[22]), {
                onPress: tmp10,
                props,
                style: tmp4.disconnectCancelBG,
                accessibilityLabel: tmp12,
                children: tmp15,
              });
              cResult[9] = tmp10;
              cResult[10] = props;
              cResult[11] = tmp4.disconnectCancelBG;
              cResult[12] = tmp12;
              cResult[13] = tmp15;
              cResult[14] = tmp20;
              tmp18 = tmp20;
            }
            const obj5 = { style: tmp4.icon };
            const tmp17 = <PhoneHangUpIcon style={tmp4.icon} />;
            cResult[6] = PhoneHangUpIcon;
            cResult[7] = tmp4.icon;
            cResult[8] = tmp17;
            tmp15 = tmp17;
          }
        }
      }
      class T {
        constructor() {
          value = focused.get();
          if (value != null) {
            id = value.id;
          }
          if (closure_3 !== closure_10.ACTIVITY) {
            if (tmp2 === closure_10.STREAM) {
              tmp16 = closure_1;
              tmp17 = closure_2;
              obj6 = closure_1(closure_2[15]);
              tmp18 = channelId;
              participant = obj6.selectParticipant(channelId, null);
              if (null != id) {
                tmp20 = closure_0;
                obj7 = closure_0(tmp17[16]);
                stopStreamResult = obj7.stopStream(id);
              }
              return;
            } else {
              tmp10 = closure_1;
              tmp11 = closure_2;
              obj4 = closure_1(closure_2[17]);
              disconnectResult = obj4.disconnect();
              tmp13 = closure_7;
              state = closure_7.getState();
              tmp14 = channelId;
              closeChannelResult = state.closeChannel(channelId);
            }
          } else {
            tmp3 = closure_5;
            currentEmbeddedActivity = closure_5.getCurrentEmbeddedActivity();
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj = closure_0(closure_2[12]);
            result = obj.activityParticipantIdToApplicationId(id);
            obj2 = closure_0(closure_2[14]);
            _location = undefined;
            if (currentEmbeddedActivity != null) {
              _location = currentEmbeddedActivity.location;
            }
            obj1 = { location: null, applicationId: null };
            obj1.location = _location;
            obj1.applicationId = result;
            result1 = obj2.leaveEmbeddedActivity(obj1);
          }
          return;
        }
      }
      cResult[0] = channelId;
      cResult[1] = first;
      cResult[2] = focused;
      cResult[3] = T;
      tmp10 = T;
      let obj4 = { runOnJS: channelId(mode[13]).runOnJS, handleFocusChange };
    }
  : function DisconnectCancelButton(props) {
      let channelId;
      let focused;
      let first;
      let PhoneHangUpIcon;
      let tmp = closure_11();
      _require = tmp;
      const context = first.useContext(channelId(focused[11]));
      channelId = context.channelId;
      focused = context.focused;
      const mode = context.mode;
      const tmp5 = mode(first.useState(null), 2);
      first = tmp5[0];
      closure_5 = tmp5[1];
      const handleFocusChange = first.useCallback((id) => {
        if (null != id) {
          const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
          let applicationId;
          if (currentEmbeddedActivity != null) {
            applicationId = currentEmbeddedActivity.applicationId;
          }
          if (null != applicationId) {
            ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
            if (id === obj.getEmbeddedActivityParticipantId(obj3)) {
              closure_5(constants.ACTIVITY);
            }
            obj = ChannelRTCParticipants;
            obj3 = { applicationId: null, instanceId: null };
          }
          if (null == ApplicationStreamingStore.getActiveStreamForStreamKey(id)) {
            let STREAM = constants.USER;
          } else {
            STREAM = constants.STREAM;
          }
          closure_5(STREAM);
        } else {
          closure_5(null);
        }
      }, []);
      const fn = function v() {
        let tmp = null;
        if (mode.get() === VoicePanelModes.PANEL) {
          value = focused.get();
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
      };
      fn.__closure = { mode, VoicePanelModes, focused };
      fn.__workletHash = 11003731851942;
      fn.__initData = __initData3;
      class C {
        constructor(arg0, arg1) {
          if (props !== arg1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            tmp3 = closure_6;
            tmp4 = obj.runOnJS(closure_6)(props);
          }
          return;
        }
      }
      let obj = first;
      let obj2 = require("ReanimatedRexport");
      let obj3 = { mode, VoicePanelModes, focused };
      const tmp2 = channelId;
      C.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, handleFocusChange };
      C.__workletHash = 10967754441017;
      C.__initData = __initData4;
      const animatedReaction = obj2.useAnimatedReaction(fn, C);
      const items = [channelId, first, focused];
      const callback1 = first.useCallback(() => {
        value = focused.get();
        if (value != null) {
          const id = value.id;
        }
        if (first !== constants.ACTIVITY) {
          if (tmp2 === constants.STREAM) {
            const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channelId, null);
            if (null != id) {
              StreamActionCreators.stopStream(id);
            }
          } else {
            SelectedChannelActionCreatorsDefault.disconnect();
            state = VoicePanelStore.getState();
            state.closeChannel(channelId);
          }
        } else {
          const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
          const result = ChannelRTCParticipants.activityParticipantIdToApplicationId(id);
          let _location;
          if (currentEmbeddedActivity != null) {
            _location = currentEmbeddedActivity.location;
          }
          const obj3 = { location: _location, applicationId: result };
          const result1 = leaveEmbeddedActivity.leaveEmbeddedActivity(obj3);
        }
      }, items);
      if (first === constants.ACTIVITY) {
        PhoneHangUpIcon = tmp8(tmp3[18]).DoorExitIcon;
      } else if (first === constants.STREAM) {
        PhoneHangUpIcon = tmp8(tmp3[19]).ScreenXIcon;
      } else {
        PhoneHangUpIcon = tmp8(tmp3[20]).PhoneHangUpIcon;
      }
      const element = {
        onPress: callback1,
        props: props.props,
        style: tmp.disconnectCancelBG,
        accessibilityLabel: null,
        children: null,
      };
      let obj4 = { runOnJS: require("ReanimatedRexport").runOnJS, handleFocusChange };
      if (first === constants.ACTIVITY) {
        const intl3 = tmp8(tmp3[21]).intl;
        let stringResult = intl3.string(tmp8(tmp3[21]).t["R/FK4A"]);
      } else if (first === constants.STREAM) {
        const intl2 = tmp8(tmp3[21]).intl;
        stringResult = intl2.string(tmp8(tmp3[21]).t.q3O3J8);
      } else {
        const intl = tmp8(tmp3[21]).intl;
        stringResult = intl.string(tmp8(tmp3[21]).t["6vrfgt"]);
      }
      element.accessibilityLabel = stringResult;
      const items1 = [PhoneHangUpIcon, tmp.icon];
      element.children = obj.useMemo(() => <PhoneHangUpIcon style={icon.icon} />, items1);
      return jsx(tmp2(focused[22]), {
        onPress: callback1,
        props: props.props,
        style: tmp.disconnectCancelBG,
        accessibilityLabel: null,
        children: null,
      });
    };
