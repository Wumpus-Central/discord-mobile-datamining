// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import StreamActionCreators from "../../../../../actions/StreamActionCreators.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../../actions/ChannelRTCActionCreators.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../../actions/SelectedChannelActionCreators.tsx";
import ChannelRTCParticipants from "../../../../calls/ChannelRTCParticipants.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../../../../activities/native/EmbeddedActivitiesNativeManager.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStreamingStore from "../../../../../stores/ApplicationStreamingStore.tsx";
import VoicePanelStore from "../../../VoicePanelStore.tsx";

require = fn;
const VoicePanelModes = fn(12273).VoicePanelModes;
const jsx = fn(21).jsx;
const constants = { USER: 0, [0]: "USER", STREAM: 1, [1]: "STREAM", ACTIVITY: 2, [2]: "ACTIVITY" };
fn(4560);
let createStyles = { disconnectCancelBG: null, icon: null };
createStyles = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
createStyles.disconnectCancelBG = createStyles;
createStyles.icon = { tintColor: nativeDefault.colors.WHITE };
let closure_11 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function VoicePanelDisconnectCancelButtonTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;}",
};
const __initData2 = {
  code: "function VoicePanelDisconnectCancelButtonTsx2(focusId,lastFocusId){const{runOnJS,handleFocusChange}=this.__closure;if(focusId!==lastFocusId){runOnJS(handleFocusChange)(focusId);}}",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx",
);

export default function DisconnectCancelButton(props) {
  let channelId;
  let focused;
  let first;
  let PhoneHangUpIcon;
  let tmp = closure_11();
  _require = tmp;
  const context = first.useContext(channelId(focused[9]));
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
        const obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
        if (id === obj.getEmbeddedActivityParticipantId(obj)) {
          closure_5(constants.ACTIVITY);
        }
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
  const fn = function p() {
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
  let obj = { mode, VoicePanelModes, focused };
  fn.__closure = obj;
  fn.__workletHash = 1109426015268;
  fn.__initData = __initData;
  class T {
    constructor(arg0, arg1) {
      if (props !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[11]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(props);
      }
      return;
    }
  }
  obj = { runOnJS: require("ReanimatedRexport").runOnJS, handleFocusChange };
  T.__closure = obj;
  T.__workletHash = 16719769067952;
  T.__initData = __initData2;
  const animatedReaction = require("ReanimatedRexport").useAnimatedReaction(fn, T);
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
        const state = VoicePanelStore.getState();
        state.closeChannel(channelId);
      }
    } else {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let obj = ChannelRTCParticipants;
      const result = obj.activityParticipantIdToApplicationId(id);
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      obj = { location: _location, applicationId: result };
      EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj);
    }
  }, items);
  if (first === constants.ACTIVITY) {
    PhoneHangUpIcon = tmp8(tmp3[16]).DoorExitIcon;
  } else if (first === tmp11.STREAM) {
    PhoneHangUpIcon = tmp8(tmp3[17]).ScreenXIcon;
  } else {
    PhoneHangUpIcon = tmp8(tmp3[18]).PhoneHangUpIcon;
  }
  const element = {
    onPress: callback1,
    props: props.props,
    style: tmp.disconnectCancelBG,
    accessibilityLabel: null,
    children: null,
  };
  let obj2 = require("ReanimatedRexport");
  let tmp12 = jsx;
  if (first === constants.ACTIVITY) {
    const intl3 = tmp8(tmp3[20]).intl;
    let stringResult = intl3.string(tmp8(tmp3[20]).t["R/FK4A"]);
  } else if (first === tmp11.STREAM) {
    const intl2 = tmp8(tmp3[20]).intl;
    stringResult = intl2.string(tmp8(tmp3[20]).t.q3O3J8);
  } else {
    const intl = tmp8(tmp3[20]).intl;
    stringResult = intl.string(tmp8(tmp3[20]).t["6vrfgt"]);
  }
  element.accessibilityLabel = stringResult;
  const items1 = [PhoneHangUpIcon, tmp.icon];
  element.children = obj.useMemo(() => <PhoneHangUpIcon style={icon.icon} />, items1);
  return tmp12(channelId(focused[19]), element);
}
