// === Module 19720: VoicePanelDisconnectCancelButton ===

// Module 19720 (VoicePanelDisconnectCancelButton)
import nativeDefault from "native" /* 575 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5888 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6761 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6906 */;
import StreamActionCreators from "StreamActionCreators" /* 7978 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 8010 */;
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 11065 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11362 */;
import shouldShowEndStageModalDefault from "shouldShowEndStageModal" /* 12048 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 19711 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6769 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import VoicePanelStore from "VoicePanelStore" /* 6930 */;

const require = globalThis.__r;

require = fn;
const VoicePanelModes = fn(11363).VoicePanelModes;
const jsx = fn(21).jsx;
const constants = { USER: 0, [0]: "USER", STREAM: 1, [1]: "STREAM", ACTIVITY: 2, [2]: "ACTIVITY" };
const createStyles = fn(5140);
let obj2 = { disconnectCancelBG: { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT }, icon: null };
let obj3 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
obj2.icon = { tintColor: nativeDefault.colors.WHITE };
let closure_12 = createStyles.createStyles(obj2);
let closure_13 = { code: "(function VoicePanelDisconnectCancelButtonTsx1(){let[mode,VoicePanelModes,focused]=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;})" };
let closure_14 = { code: "(function VoicePanelDisconnectCancelButtonTsx2(focusId,lastFocusId){let[scheduleOnRN,handleFocusChange]=this.__closure;if(focusId!==lastFocusId){scheduleOnRN(handleFocusChange,focusId);}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx");

export default function DisconnectCancelButton(props) {
  let first;
  noop = undefined;
  let PhoneHangUpIcon;
  let tmp = closure_12();
  const context = noop.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  const focused = context.focused;
  const tmp5 = first(noop.useState(null), 2);
  first = tmp5[0];
  noop = tmp5[1];
  const callback = noop.useCallback((id) => {
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
  }, []);
  items = [closure_13, context.mode, VoicePanelModes, focused];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp9, tmp10, tmp11, tmp12] = items;
  class VoicePanelDisconnectCancelButtonTsx1 {
    constructor() {
      tmp = null;
      if (closure_0.get() === closure_1.PANEL) {
        tmp2 = closure_2;
        value = closure_2.get();
        id = undefined;
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
  const items1 = [tmp10, tmp11, tmp12];
  VoicePanelDisconnectCancelButtonTsx1.__closure = items1;
  VoicePanelDisconnectCancelButtonTsx1.__workletHash = 15477130751677;
  VoicePanelDisconnectCancelButtonTsx1.__initData = tmp9;
  const items2 = [closure_14, require("module_1705").scheduleOnRN, callback];
  _require = undefined;
  importDefault = undefined;
  [tmp13, tmp14, tmp15] = items2;
  class VoicePanelDisconnectCancelButtonTsx2 {
    constructor(arg0, arg1) {
      if (props !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, props);
      }
      return;
    }
  }
  const items3 = [tmp14, tmp15];
  VoicePanelDisconnectCancelButtonTsx2.__closure = items3;
  VoicePanelDisconnectCancelButtonTsx2.__workletHash = 6008076230148;
  VoicePanelDisconnectCancelButtonTsx2.__initData = tmp13;
  const animatedReaction = require("module_1652").useAnimatedReaction(VoicePanelDisconnectCancelButtonTsx1, VoicePanelDisconnectCancelButtonTsx2);
  const items4 = [channelId, first, focused];
  const callback1 = obj.useCallback(() => {
    value = _undefined3.get();
    if (value != null) {
      const id = value.id;
    }
    if (first !== constants.ACTIVITY) {
      if (tmp2 === constants.STREAM) {
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(c1, null);
        if (null != id) {
          StreamActionCreators.stopStream(id);
        }
      } else {
        const channel = ChannelStore.getChannel(c1);
        if (null != channel) {
          if (shouldShowEndStageModalDefault(channel)) {
            StageChannelActionCreatorExtras.openEndStageModal(channel);
          }
        }
        SelectedChannelActionCreatorsDefault.disconnect();
        state = VoicePanelStore.getState();
        state.closeChannel(c1);
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
  }, items4);
  if (first === constants.ACTIVITY) {
    PhoneHangUpIcon = tmp8(12046).DoorExitIcon;
  } else if (first === constants.STREAM) {
    PhoneHangUpIcon = tmp8(19690).ScreenXIcon;
  } else {
    PhoneHangUpIcon = tmp8(9955).PhoneHangUpIcon;
  }
  const element = { onPress: callback1, props: props.props, style: tmp.disconnectCancelBG, accessibilityLabel: null, children: null };
  let obj2 = require("module_1652");
  if (first === constants.ACTIVITY) {
    const intl3 = tmp8(1113).intl;
    let stringResult = intl3.string(tmp8(1113).t["R/FK4A"]);
  } else if (first === constants.STREAM) {
    const intl2 = tmp8(1113).intl;
    stringResult = intl2.string(tmp8(1113).t.q3O3J8);
  } else {
    const intl = tmp8(1113).intl;
    stringResult = intl.string(tmp8(1113).t["6vrfgt"]);
  }
  element.accessibilityLabel = stringResult;
  const items5 = [PhoneHangUpIcon, tmp.icon];
  element.children = noop.useMemo(() => <PhoneHangUpIcon style={_undefined.icon} />, items5);
  return jsx(VoicePanelAnimatedButtonWrapperDefault, { onPress: callback1, props: props.props, style: tmp.disconnectCancelBG, accessibilityLabel: null, children: null });
};