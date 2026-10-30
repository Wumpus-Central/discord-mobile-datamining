// discord_app/modules/share/native/AppShare.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import useMountEffectDefault from "../../../hooks/useMountEffect.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import TTIAnalyticsUtils from "../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import NativePermissionManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativePermissionManagerModule.tsx";
import NativeShareManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx";
import ShareScreenDefault from "ShareScreen.tsx";
import AccessibilityManagerDefault from "../../a11y/native/AccessibilityManager.tsx";
import AppToastContainerDefault from "../../toast/native/AppToastContainer.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
fn(17).BackHandler;
const AnalyticsTrackingStore = fn(7633);
const ShareStore = fn(16182);
const AnalyticEvents = fn(1072).AnalyticEvents;
let closure_8 = fn(13928).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const share = "share";
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/AppShare.tsx");

export default function AppShare(targetUserId) {
  _require = targetUserId;
  targetUserId = targetUserId.targetUserId;
  closure_129_0 = targetUserId;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  [first, closure_129_2] = noop.useState(false);
  closure_129_1 = first;
  let tmp4 = null == targetUserId;
  if (!tmp4) {
    tmp4 = AuthenticationStore.getId() === targetUserId;
  }
  let tmpResult = _slicedToArray(noop.useState(tmp4), 2);
  closure_129_3 = tmpResult[1];
  const items = [first];
  const effect = noop.useEffect(() => {
    if (!closure_1_1) {
      AccessibilityManagerDefault.init();
      dependencyMap(true);
    }
  }, items);
  const items1 = [targetUserId];
  const effect1 = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = AuthenticationStore.getId() !== tmp;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const obj = closure_0(13931);
        closure_0(13931)
          .switchAccount(targetUserId, false, constants.SHARE_EXTENSION)
          .then(() => {
            closure_1_3(true);
          });
      }, 18);
    }
  }, items1);
  if (first) {
    first = tmpResult[0];
  }
  const items2 = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => authenticated.isAuthenticated());
  closure_130_0 = stateFromStores;
  const items3 = [stateFromStores];
  const effect2 = noop.useEffect(() => {
    if (closure_0) {
      AuthenticationActionCreatorsDefault.startSession(AuthenticationStore.getToken());
      if (obj2.isAndroid()) {
        const notificationAuthorization = NativePermissionManagerModuleDefault.requestNotificationAuthorization();
        const tmpResult = NativePermissionManagerModuleDefault;
      }
      obj2 = PlatformUtils;
    }
  }, items3);
  const items4 = [targetUserId.attachments.length, targetUserId.text];
  const effect3 = noop.useEffect(() => {
    let tmp2 = null != targetUserId.text;
    if (tmp2) {
      tmp2 = targetUserId.text.length > 0;
    }
    AnalyticsUtilsDefault.track(AnalyticEvents.EXTERNAL_SHARE_OPENED, {
      has_content: tmp2,
      has_attachment: targetUserId.attachments.length > 0,
    });
    const obj2 = { has_content: tmp2, has_attachment: targetUserId.attachments.length > 0 };
  }, items4);
  useMountEffectDefault(() => {
    const attachments = targetUserId.attachments;
    const mapped = attachments.map((mimeType) => {
      let str = mimeType.mimeType;
      if (str == null) {
        str = "unknown";
      }
      return str;
    });
    TTIAnalyticsUtils.trackAppUIViewed("share", {
      share_num_attachments: targetUserId.attachments.length,
      share_attachment_mimetypes: mapped,
    });
  });
  const obj3 = { appEntryKey: share, children: null };
  if (first) {
    const obj4 = { appEntryKey: share, sharedContent: targetUserId, onClose: null };
    const tmp14Result = ShareScreenDefault;
    if (tmp9Result.isMetaQuest()) {
      let exitApp = NativeShareManagerModuleDefault.close;
    } else {
      exitApp = BackHandler.exitApp;
    }
    obj4.onClose = exitApp;
    closure_9(tmp14Result, obj4);
    tmp9Result = tmp9(1623);
  } else {
    const items5 = [closure_9(tmp9(7202).SceneLoadingIndicator, {}), , ,];
    const obj5 = { appEntryKey: share };
    items5[1] = closure_9(tmp9(18947).ActionSheetContainer, obj5);
    items5[2] = closure_9(AppToastContainerDefault, { appChrome: false });
    items5[3] = closure_9(tmp9(5959).AlertModalContainer, {});
    obj3.children = items5;
    return closure_10(tmp17, obj3);
  }
  let obj2 = require("initialize");
}
