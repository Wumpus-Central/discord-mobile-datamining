// discord_app/modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import handleConnectionOpen from "handleConnectionOpen";
import updateVoiceState from "updateVoiceState";
import { PermissionPromptType } from "set";
import EventActionType from "EventActionType";
import { jsx } from "jsxProd";

let c9;
let metroImportAll;
const require = arg1;
({ EventActionLocation: metroImportAll, NotificationNudgeSurface: c9 } = EventActionType);
let c11 = "post-call-disconnect-nudge-key";
let closure_12 = { cooldownDurationMs: 604800000 };
let result = require("handleConnectionOpen").fileFinishedImporting("modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx");

export default function PostCallDisconnectNudge(arg0) {
  let markAsDismissed;
  let onHide;
  ({ markAsDismissed, onHide } = arg0);
  const obj = { title: null, body: null, actionLocation: null, surface: null, markAsDismissed: null, onHide: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.pJbYq1);
  const intl2 = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.vegtFT);
  obj[2] = constants.CALL_DISCONNECT;
  obj[3] = constants2.CALL_DISCONNECT_BOTTOM_SHEET;
  obj[4] = markAsDismissed;
  obj[5] = onHide;
  return jsx(require("NotificationNudgeBottomSheet.tsx"), { title: null, body: null, actionLocation: null, surface: null, markAsDismissed: null, onHide: null });
};
export const POST_CALL_DISCONNECT_NUDGE_KEY = "post-call-disconnect-nudge-key";
export const usePostCallDisconnectNudge = function usePostCallDisconnectNudge() {
  let obj = stateFromStores1(14560);
  let tmp2 = stateFromStores;
  const canSeePushNotificationNudge = stateFromStores(11692).useCanSeePushNotificationNudge();
  let obj2 = stateFromStores(11692);
  const items = [updateVoiceState];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null));
  const obj3 = stateFromStores(589);
  const items1 = [handleConnectionOpen];
  stateFromStores1 = stateFromStores(589).useStateFromStores(items1, () => tmp12.getChannelId());
  const dependencyMap = first.useRef(stateFromStores);
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
    _slicedToArray(tmp2);
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
        prop = tmp2(1358).DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT;
      }
    }
  }
  const tmp6Result = tmp6(stateFromStores(5931).useSelectedTimeRecurringDismissibleContent(prop, closure_12), 2);
  first = tmp6Result[0];
  handleConnectionOpen = tmp12;
  const items3 = [first, tmp6Result[1]];
  const effect1 = obj5.useEffect(() => {
    if (null != first) {
      let obj = stateFromStores(ref[14]);
      const result = obj.setPushPermissionReactivationSeen(outer1_7.CALL_DISCONNECT_BOTTOM_SHEET);
      obj = { markAsDismissed: null };
      obj[0] = handleConnectionOpen;
      stateFromStores1(ref[15]).openLazy(stateFromStores(ref[17])(ref[16], ref.paths), outer1_11, obj);
      const obj2 = stateFromStores1(ref[15]);
    }
  }, items3);
};