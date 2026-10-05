// discord_app/modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import intl3 from "../../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import PushNotificationPermissionStore from "../../../../../stores/native/PushNotificationPermissionStore.tsx";
import PushNotificationActionCreators from "../../../../../actions/native/PushNotificationActionCreators.tsx";
import NotificationNudgeBottomSheetDefault from "NotificationNudgeBottomSheet.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";
import NotificationPermissionConstants from "NotificationPermissionConstants.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let c9;
let metroImportAll;
let _slicedToArray = _slicedToArray_mod;
const PermissionPromptType = PushNotificationPermissionStore.PermissionPromptType;
({ EventActionLocation: metroImportAll, NotificationNudgeSurface: c9 } = NotificationPermissionConstants);
const jsx = Fragment.jsx;
let c11 = "post-call-disconnect-nudge-key";
let closure_12 = { cooldownDurationMs: 604800000 };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let markAsDismissed;
      let onHide;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      ({ markAsDismissed, onHide } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.pJbYq1);
        const intl2 = intl3.intl;
        const stringResult1 = intl2.string(intl3.t.vegtFT);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp4 = stringResult;
        tmp5 = stringResult1;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] === markAsDismissed) {
        let tmp8;
        if (cResult[3] === onHide) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = jsx(NotificationNudgeBottomSheetDefault, {
        title: tmp4,
        body: tmp5,
        actionLocation: metroImportAll.CALL_DISCONNECT,
        surface: constants2.CALL_DISCONNECT_BOTTOM_SHEET,
        markAsDismissed,
        onHide,
      });
      cResult[2] = markAsDismissed;
      cResult[3] = onHide;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (arg0) => {
      let markAsDismissed;
      let onHide;
      ({ markAsDismissed, onHide } = arg0);
      NotificationNudgeBottomSheetDefault;
      const intl = intl3.intl;
      const intl2 = intl3.intl;
      return (
        <tmp
          title={intl.string(intl3.t.pJbYq1)}
          body={intl2.string(intl3.t.vegtFT)}
          actionLocation={metroImportAll.CALL_DISCONNECT}
          surface={constants2.CALL_DISCONNECT_BOTTOM_SHEET}
          markAsDismissed={markAsDismissed}
          onHide={onHide}
        />
      );
    };
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx");

export default tmp3;
export const POST_CALL_DISCONNECT_NUDGE_KEY = "post-call-disconnect-nudge-key";
export const usePostCallDisconnectNudge = function usePostCallDisconnectNudge() {
  let closure_3;
  let currentClientVoiceChannelId;
  let first1;
  let markAsDismissed;
  let ref;
  let stateFromStores;
  let stateFromStores1;
  let obj = stateFromStores1(15306);
  const inHoldout = obj.useConfig({ location: "usePostCallDisconnectNudge" }).inHoldout;
  let tmp2 = stateFromStores;
  let obj2 = stateFromStores(12054);
  const canSeePushNotificationNudge = obj2.useCanSeePushNotificationNudge();
  let obj3 = stateFromStores(504);
  const items = [VoiceStateStore];
  stateFromStores = obj3.useStateFromStores(items, () =>
    currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null),
  );
  const items1 = [markAsDismissed];
  const obj4 = stateFromStores(504);
  stateFromStores1 = obj4.useStateFromStores(items1, () => markAsDismissed.getChannelId());
  dependencyMap = first1.useRef(stateFromStores);
  const tmp7 = _slicedToArray(first1.useState(false), 2);
  const tmp6 = _slicedToArray;
  _slicedToArray = tmp7[1];
  const items2 = [stateFromStores, stateFromStores1];
  const first = tmp7[0];
  const effect = first1.useEffect(() => {
    const current = ref.current;
    ref.current = stateFromStores;
    const tmp2 = null != current && null == stateFromStores && current === stateFromStores1;
    closure_3(tmp2);
  }, items2);
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = stateFromStores(6891).useSelectedTimeRecurringDismissibleContent;
  stateFromStores(6891);
  const obj5 = first1;
  if (first) {
    prop = null;
    if (!inHoldout) {
      prop = null;
      if (canSeePushNotificationNudge) {
        prop = tmp2(2036).DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT;
      }
    }
  }
  const tmp6Result = tmp6(useSelectedTimeRecurringDismissibleContent(prop, closure_12), 2);
  first1 = tmp6Result[0];
  markAsDismissed = tmp14;
  const items3 = [first1, tmp6Result[1]];
  const effect1 = obj5.useEffect(() => {
    if (null != first1) {
      const obj = PushNotificationActionCreators;
      const result = obj.setPushPermissionReactivationSeen(PermissionPromptType.CALL_DISCONNECT_BOTTOM_SHEET);
      const obj3 = { markAsDismissed };
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.openLazy(asyncRequire(16470, dependencyMap.paths), c11, obj3);
    }
  }, items3);
};
