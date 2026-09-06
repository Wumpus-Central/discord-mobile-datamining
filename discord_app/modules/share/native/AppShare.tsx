// === Module 17927: AppShare ===

// Module 17927 (AppShare)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7475 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14434 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
get_ActivityIndicator = fn(17);
({ BackHandler: hasOwnProperty, NativeModules: metroRequire } = get_ActivityIndicator);
const AnalyticsTrackingStore = fn(7460);
const ShareStore = fn(14395);
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_9 = fn(12414).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const share = "share";
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/AppShare.tsx");

export default function AppShare(targetUserId) {
  _require = targetUserId;
  targetUserId = targetUserId.targetUserId;
  closure_129_0 = targetUserId;
  closure_129_3 = undefined;
  let obj = noop;
  let tmp2 = _slicedToArray(noop.useState(false), 2);
  let first = tmp2[0];
  closure_129_1 = first;
  closure_129_2 = tmp2[1];
  let tmp4 = null == targetUserId;
  if (!tmp4) {
    tmp4 = AuthenticationStore.getId() === targetUserId;
  }
  const tmpResult = _slicedToArray(noop.useState(tmp4), 2);
  closure_129_3 = tmpResult[1];
  const items = [first];
  const effect = obj.useEffect(() => {
    if (!closure_1_1) {
      AccessibilityManagerDefault.init();
      dependencyMap(true);
    }
  }, items);
  const items1 = [targetUserId];
  const effect1 = obj.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = AuthenticationStore.getId() !== tmp;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const obj = closure_0(12417);
        closure_0(12417).switchAccount(targetUserId, false, constants.SHARE_EXTENSION).then(() => {
          closure_1_3(true);
        });
      }, 18);
    }
  }, items1);
  if (first) {
    first = tmpResult[0];
  }
  let obj1 = require("initialize");
  const items2 = [AuthenticationStore];
  const stateFromStores = obj1.useStateFromStores(items2, () => authenticated.isAuthenticated());
  closure_130_0 = stateFromStores;
  const items3 = [stateFromStores];
  const effect2 = obj.useEffect(() => {
    if (closure_0) {
      AuthenticationActionCreatorsDefault.startSession(AuthenticationStore.getToken());
      if (obj2.isAndroid()) {
        const NativePermissionManager = timestampProducer.NativePermissionManager;
        const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
      }
      obj2 = PlatformUtils;
    }
  }, items3);
  const items4 = [targetUserId.attachments.length, targetUserId.text];
  const effect3 = obj.useEffect(() => {
    let obj = AnalyticsUtilsDefault;
    let tmp2 = null != targetUserId.text;
    if (tmp2) {
      tmp2 = tmp.text.length > 0;
    }
    obj = { has_content: tmp2, has_attachment: tmp.attachments.length > 0 };
    obj.track(AnalyticEvents.EXTERNAL_SHARE_OPENED, obj);
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
    TTIAnalyticsUtils.trackAppUIViewed("share", { share_num_attachments: targetUserId.attachments.length, share_attachment_mimetypes: mapped });
  });
  obj = { appEntryKey: share, children: null };
  if (first) {
    obj = { appEntryKey: tmp18, sharedContent: targetUserId, onClose: null };
    const tmp14Result = tmp14(13900);
    if (tmp9Result.isMetaQuest()) {
      exitApp = tmp14(8362).close;
    } else {
      exitApp = exitApp.exitApp;
    }
    obj.onClose = exitApp;
    tmp19(tmp14Result, obj);
    tmp9Result = tmp9(1608);
  } else {
    const items5 = [tmp19(tmp9(7039).SceneLoadingIndicator, {}), , , ];
    obj1 = { appEntryKey: tmp18 };
    items5[1] = tmp19(tmp9(16908).ActionSheetContainer, obj1);
    items5[2] = tmp19(tmp14(16954), {});
    items5[3] = tmp19(tmp9(4910).AlertModalContainer, {});
    obj.children = items5;
    return closure_11(tmp17, obj);
  }
};