// discord_app/modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx
import util from "../../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import PushNotificationActionCreators from "../../../../../actions/native/PushNotificationActionCreators.tsx";
import NotificationNudgeBottomSheetDefault from "NotificationNudgeBottomSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";

require = fn;
const PermissionPromptType = fn(12409).PermissionPromptType;
const NotificationPermissionConstants = fn(12410);
({ EventActionLocation: closure_8, NotificationNudgeSurface: closure_9 } = NotificationPermissionConstants);
const jsx = fn(21).jsx;
let c11 = "post-call-disconnect-nudge-key";
let closure_12 = { cooldownDurationMs: 604800000 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx");

export default function PostCallDisconnectNudge(arg0) {
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
  return jsx(NotificationNudgeBottomSheetDefault, {
    title: null,
    body: null,
    actionLocation: null,
    surface: null,
    markAsDismissed: null,
    onHide: null,
  });
}
export const POST_CALL_DISCONNECT_NUDGE_KEY = "post-call-disconnect-nudge-key";
export const usePostCallDisconnectNudge = function usePostCallDisconnectNudge() {
  let obj = stateFromStores1(15481);
  let tmp2 = stateFromStores;
  const canSeePushNotificationNudge = stateFromStores(12411).useCanSeePushNotificationNudge();
  let obj2 = stateFromStores(12411);
  const items = [VoiceStateStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () =>
    currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null),
  );
  const obj3 = stateFromStores(504);
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
        prop = tmp2(1943).DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT;
      }
    }
  }
  const tmp6Result = tmp6(stateFromStores(7388).useSelectedTimeRecurringDismissibleContent(prop, closure_12), 2);
  first = tmp6Result[0];
  markAsDismissed = tmp12;
  const items3 = [first, tmp6Result[1]];
  const effect1 = obj5.useEffect(() => {
    if (null != first) {
      let obj = PushNotificationActionCreators;
      const result = obj.setPushPermissionReactivationSeen(PermissionPromptType.CALL_DISCONNECT_BOTTOM_SHEET);
      obj = { markAsDismissed };
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16526, dependencyMap.paths), c11, obj);
    }
  }, items3);
};
