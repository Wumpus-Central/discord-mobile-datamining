// discord_app/modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import NotificationNudgeBottomSheetDefault from "NotificationNudgeBottomSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import handleConnectionOpen from "../../../../../stores/SelectedChannelStore.tsx";
import updateVoiceState from "../../../../../stores/VoiceStateStore.tsx";
import { PermissionPromptType } from "../../../../../stores/native/PushNotificationPermissionStore.tsx";
import EventActionType from "NotificationPermissionConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
({ EventActionLocation: closure_8, NotificationNudgeSurface: c9 } = EventActionType);
let c11 = "post-call-disconnect-nudge-key";
let closure_12 = { cooldownDurationMs: 604800000 };
let result = require("obj132").fileFinishedImporting("modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx");

export default function PostCallDisconnectNudge(arg0) {
  ({ markAsDismissed, onHide } = arg0);
  const obj = { title: null, body: null, actionLocation: null, surface: null, markAsDismissed: null, onHide: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.pJbYq1);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.vegtFT);
  obj[2] = constants.CALL_DISCONNECT;
  obj[3] = constants2.CALL_DISCONNECT_BOTTOM_SHEET;
  obj[4] = markAsDismissed;
  obj[5] = onHide;
  return jsx(NotificationNudgeBottomSheetDefault, { title: null, body: null, actionLocation: null, surface: null, markAsDismissed: null, onHide: null });
};
export const POST_CALL_DISCONNECT_NUDGE_KEY = "post-call-disconnect-nudge-key";
export const usePostCallDisconnectNudge = function usePostCallDisconnectNudge() {
  let obj = stateFromStores1(14789);
  let tmp2 = stateFromStores;
  const canSeePushNotificationNudge = stateFromStores(11583).useCanSeePushNotificationNudge();
  let obj2 = stateFromStores(11583);
  const items = [closure_6];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null));
  const obj3 = stateFromStores(589);
  const items1 = [closure_5];
  stateFromStores1 = stateFromStores(589).useStateFromStores(items1, () => channelId.getChannelId());
  dependencyMap = first.useRef(stateFromStores);
  const tmp7 = callback(first.useState(false), 2);
  callback = tmp7[1];
  const items2 = [stateFromStores, stateFromStores1];
  const effect = first.useEffect(() => {
    const current = ref.current;
    ref.current = stateFromStores;
    let tmp2 = null != current;
    if (tmp2) {
      tmp2 = null == stateFromStores;
    }
    if (tmp2) {
      tmp2 = current === stateFromStores1;
    }
    callback(tmp2);
  }, items2);
  const obj4 = stateFromStores(589);
  const obj5 = first;
  const tmp6 = callback;
  let prop = null;
  if (tmp7[0]) {
    prop = null;
    if (!obj.useConfig({ location: "usePostCallDisconnectNudge" }).inHoldout) {
      prop = null;
      if (canSeePushNotificationNudge) {
        prop = tmp2(1377).DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT;
      }
    }
  }
  const tmp6Result = tmp6(stateFromStores(7366).useSelectedTimeRecurringDismissibleContent(prop, closure_12), 2);
  first = tmp6Result[0];
  closure_5 = tmp12;
  const items3 = [first, tmp6Result[1]];
  const effect1 = obj5.useEffect(() => {
    if (null != first) {
      let obj = stateFromStores(ref[14]);
      const result = obj.setPushPermissionReactivationSeen(PermissionPromptType.CALL_DISCONNECT_BOTTOM_SHEET);
      obj = { markAsDismissed: null };
      obj[0] = closure_5;
      stateFromStores1(ref[15]).openLazy(stateFromStores(ref[17])(ref[16], ref.paths), closure_1_11, obj);
      const obj2 = stateFromStores1(ref[15]);
    }
  }, items3);
};