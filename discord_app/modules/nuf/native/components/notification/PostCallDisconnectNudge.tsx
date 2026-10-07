// === Module 16510: PostCallDisconnectNudge ===

// Module 16510 (PostCallDisconnectNudge)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12070 */;
import NotificationNudgeBottomSheetDefault from "NotificationNudgeBottomSheet" /* 16507 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;

require = fn;
const PermissionPromptType = fn(12067).PermissionPromptType;
const NotificationPermissionConstants = fn(12068);
({ EventActionLocation: closure_8, NotificationNudgeSurface: closure_9 } = NotificationPermissionConstants);
const jsx = fn(21).jsx;
let c11 = "post-call-disconnect-nudge-key";
let closure_12 = { cooldownDurationMs: 604800000 };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  ({ markAsDismissed, onHide } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.pJbYq1);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.vegtFT);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === markAsDismissed) {
    if (cResult[3] === onHide) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = jsx(NotificationNudgeBottomSheetDefault, { title: tmp4, body: tmp5, actionLocation: constants.CALL_DISCONNECT, surface: constants2.CALL_DISCONNECT_BOTTOM_SHEET, markAsDismissed, onHide });
  cResult[2] = markAsDismissed;
  cResult[3] = onHide;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const obj2 = { title: tmp4, body: tmp5, actionLocation: constants.CALL_DISCONNECT, surface: constants2.CALL_DISCONNECT_BOTTOM_SHEET, markAsDismissed, onHide };
}) : ((arg0) => {
  ({ markAsDismissed, onHide } = arg0);
  const obj = { title: null, body: null, actionLocation: null, surface: null, markAsDismissed: null, onHide: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.pJbYq1);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.vegtFT);
  obj.actionLocation = constants.CALL_DISCONNECT;
  obj.surface = constants2.CALL_DISCONNECT_BOTTOM_SHEET;
  obj.markAsDismissed = markAsDismissed;
  obj.onHide = onHide;
  return jsx(NotificationNudgeBottomSheetDefault, { title: null, body: null, actionLocation: null, surface: null, markAsDismissed: null, onHide: null });
});
export const POST_CALL_DISCONNECT_NUDGE_KEY = "post-call-disconnect-nudge-key";
export const usePostCallDisconnectNudge = function usePostCallDisconnectNudge() {
  let obj = stateFromStores1(15321);
  let tmp2 = stateFromStores;
  const canSeePushNotificationNudge = stateFromStores(12069).useCanSeePushNotificationNudge();
  let obj2 = stateFromStores(12069);
  const items = [VoiceStateStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null));
  let obj3 = stateFromStores(504);
  const items1 = [markAsDismissed];
  stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => markAsDismissed.getChannelId());
  dependencyMap = first.useRef(stateFromStores);
  const tmp7 = _slicedToArray(first.useState(false), 2);
  _slicedToArray = tmp7[1];
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
    closure_3(tmp2);
  }, items2);
  const obj4 = stateFromStores(504);
  const obj5 = first;
  const tmp6 = _slicedToArray;
  let prop = null;
  if (tmp7[0]) {
    prop = null;
    if (!obj.useConfig({ location: "usePostCallDisconnectNudge" }).inHoldout) {
      prop = null;
      if (canSeePushNotificationNudge) {
        prop = tmp2(2036).DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT;
      }
    }
  }
  const tmp6Result = tmp6(stateFromStores(6901).useSelectedTimeRecurringDismissibleContent(prop, closure_12), 2);
  first = tmp6Result[0];
  markAsDismissed = tmp12;
  const items3 = [first, tmp6Result[1]];
  const effect1 = obj5.useEffect(() => {
    if (null != first) {
      const result = PushNotificationActionCreators.setPushPermissionReactivationSeen(PermissionPromptType.CALL_DISCONNECT_BOTTOM_SHEET);
      const obj3 = { markAsDismissed };
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16510, dependencyMap.paths), c11, obj3);
    }
  }, items3);
};