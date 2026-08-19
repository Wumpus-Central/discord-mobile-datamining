// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import participantFromServer from "../../../../activities/EmbeddedActivitiesStore.tsx";
import reset from "../../../../../stores/ApplicationStreamingStore.tsx";
import withEqualityFn from "../../../VoicePanelStore.tsx";
import { VoicePanelModes } from "../../../VoicePanelConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
let closure_10 = { USER: 0, [0]: "USER", STREAM: 1, [1]: "STREAM", ACTIVITY: 2, [2]: "ACTIVITY" };
const createCacheKey = { backgroundColor: ThemesDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: ThemesDefault.colors.WHITE };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let closure_12 = { code: "function VoicePanelDisconnectCancelButtonTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;}" };
let closure_13 = { code: "function VoicePanelDisconnectCancelButtonTsx2(focusId,lastFocusId){const{runOnJS,handleFocusChange}=this.__closure;if(focusId!==lastFocusId){runOnJS(handleFocusChange)(focusId);}}" };
let result = require("obj132").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx");

export default function DisconnectCancelButton(props) {
  let channelId;
  let focused;
  let first;
  let callback;
  let PhoneHangUpIcon;
  let tmp = callback();
  const _require = tmp;
  const context = first.useContext(channelId(focused[9]));
  channelId = context.channelId;
  focused = context.focused;
  const mode = context.mode;
  const tmp5 = mode(first.useState(null), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  callback = first.useCallback((id) => {
    if (null != id) {
      const currentEmbeddedActivity = store.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      if (null != applicationId) {
        lib(focused[10]);
        const obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj2[0], compositeInstanceId: obj2[1] } = currentEmbeddedActivity);
        if (id === obj.getEmbeddedActivityParticipantId(obj)) {
          store(closure_1_10.ACTIVITY);
        }
      }
      if (null == callback.getActiveStreamForStreamKey(id)) {
        let STREAM = closure_1_10.USER;
      } else {
        STREAM = closure_1_10.STREAM;
      }
      store(STREAM);
    } else {
      store(null);
    }
  }, []);
  obj1 = _require(focused[11]);
  const fn = function p() {
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
  };
  let obj = { mode, VoicePanelModes, focused };
  fn.__closure = obj;
  fn.__workletHash = 1109426015268;
  fn.__initData = closure_12;
  class T {
    constructor(arg0, arg1) {
      if (props !== arg1) {
        tmp = closure_0;
        tmp2 = focused;
        obj = closure_0(focused[11]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(props);
      }
      return;
    }
  }
  obj = { runOnJS: _require(focused[11]).runOnJS, handleFocusChange: callback };
  T.__closure = obj;
  T.__workletHash = 16719769067952;
  T.__initData = closure_13;
  const animatedReaction = obj1.useAnimatedReaction(fn, T);
  const items = [channelId, first, focused];
  const callback1 = first.useCallback(() => {
    const value = focused.get();
    if (value != null) {
      const id = value.id;
    }
    if (first !== closure_1_10.ACTIVITY) {
      if (tmp2 === closure_1_10.STREAM) {
        const participant = channelId(focused[13]).selectParticipant(channelId, null);
        if (null != id) {
          lib(focused[14]).stopStream(id);
          const obj7 = lib(focused[14]);
        }
        const obj6 = channelId(focused[13]);
      } else {
        channelId(focused[15]).disconnect();
        const state = PhoneHangUpIcon.getState();
        state.closeChannel(channelId);
        const obj4 = channelId(focused[15]);
      }
    } else {
      const currentEmbeddedActivity = store.getCurrentEmbeddedActivity();
      let obj = lib(focused[10]);
      const result = obj.activityParticipantIdToApplicationId(id);
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      obj = { location: null, applicationId: null };
      obj[0] = _location;
      obj[1] = result;
      channelId(focused[12]).leaveActivity(obj);
      const obj2 = channelId(focused[12]);
    }
  }, items);
  if (first === constants.ACTIVITY) {
    PhoneHangUpIcon = tmp8(tmp3[16]).DoorExitIcon;
  } else if (first === constants.STREAM) {
    PhoneHangUpIcon = tmp8(tmp3[17]).ScreenXIcon;
  } else {
    PhoneHangUpIcon = tmp8(tmp3[18]).PhoneHangUpIcon;
  }
  obj1 = { onPress: callback1, props: props.props, style: tmp.disconnectCancelBG, accessibilityLabel: null, children: null };
  if (first === constants.ACTIVITY) {
    const intl3 = tmp8(tmp3[20]).intl;
    let stringResult = intl3.string(tmp8(tmp3[20]).t["R/FK4A"]);
  } else if (first === constants.STREAM) {
    const intl2 = tmp8(tmp3[20]).intl;
    stringResult = intl2.string(tmp8(tmp3[20]).t.q3O3J8);
  } else {
    const intl = tmp8(tmp3[20]).intl;
    stringResult = intl.string(tmp8(tmp3[20]).t["6vrfgt"]);
  }
  obj1[3] = stringResult;
  const items1 = [PhoneHangUpIcon, tmp.icon];
  obj1[4] = obj.useMemo(() => <PhoneHangUpIcon style={lib.icon} />, items1);
  return jsx(channelId(focused[19]), { onPress: callback1, props: props.props, style: tmp.disconnectCancelBG, accessibilityLabel: null, children: null });
};