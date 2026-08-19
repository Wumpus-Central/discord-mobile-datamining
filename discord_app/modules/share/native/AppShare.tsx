// === Module 17143: AppShare ===

// Module 17143 (AppShare)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import "result";
import handleTokenUpdated from "handleTokenUpdated" /* 13771 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { MultiAccountSwitchLocation as closure_9 } from "MAX_ACCOUNTS" /* 11586 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
({ BackHandler: c5, NativeModules: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const share = "share";
const result = require("obj132").fileFinishedImporting("modules/share/native/AppShare.tsx");

export default function AppShare(targetUserId) {
  targetUserId = targetUserId.targetUserId;
  let stateFromStores = targetUserId;
  let callback;
  let obj = React;
  let tmp2 = callback(React.useState(false), 2);
  let first = tmp2[0];
  dependencyMap = tmp2[1];
  let tmp4 = null == targetUserId;
  if (!tmp4) {
    tmp4 = id.getId() === targetUserId;
  }
  const tmpResult = callback(React.useState(tmp4), 2);
  callback = tmpResult[1];
  const items = [first];
  const effect = obj.useEffect(() => {
    if (!first) {
      first(13810).init();
      dependencyMap(true);
      const obj = first(13810);
    }
  }, items);
  const items1 = [targetUserId];
  const effect1 = obj.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = closure_1_7.getId() !== tmp;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const obj = stateFromStores(closure_1_2[13]);
        stateFromStores(closure_1_2[13]).switchAccount(closure_0, false, closure_1_9.SHARE_EXTENSION).then((result) => {
          callback(true);
        });
      }, 18);
    }
  }, items1);
  if (first) {
    first = tmpResult[0];
  }
  obj1 = stateFromStores(589);
  const items2 = [id];
  stateFromStores = obj1.useStateFromStores(items2, () => authenticated.isAuthenticated());
  const items3 = [stateFromStores];
  const effect2 = obj.useEffect(() => {
    if (stateFromStores) {
      first(5256).startSession(closure_1_7.getToken());
      const obj = first(5256);
      if (obj2.isAndroid()) {
        const NativePermissionManager = closure_1_6.NativePermissionManager;
        const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
      }
      obj2 = stateFromStores(500);
    }
  }, items3);
  const items4 = [targetUserId.attachments.length, targetUserId.text];
  const effect3 = obj.useEffect(() => {
    let obj = first(698);
    let tmp2 = null != stateFromStores.text;
    if (tmp2) {
      tmp2 = stateFromStores.text.length > 0;
    }
    obj = { has_content: tmp2, has_attachment: stateFromStores.attachments.length > 0 };
    obj.track(AnalyticEvents.EXTERNAL_SHARE_OPENED, obj);
  }, items4);
  first(4761)(() => {
    const attachments = stateFromStores.attachments;
    const mapped = attachments.map((item, index) => {
      let str = item.mimeType;
      if (str == null) {
        str = "unknown";
      }
      return str;
    });
    stateFromStores(5066).trackAppUIViewed("share", { share_num_attachments: stateFromStores.attachments.length, share_attachment_mimetypes: mapped });
  });
  obj = { appEntryKey: share, children: null };
  if (first) {
    obj = { appEntryKey: null, sharedContent: null, onClose: null };
    obj[0] = share;
    obj[1] = targetUserId;
    const tmp14Result = tmp14(13360);
    if (tmp9Result.isMetaQuest()) {
      let exitApp = tmp14(9068).close;
    } else {
      exitApp = exitApp.exitApp;
    }
    obj[2] = exitApp;
    callback(tmp14Result, obj);
    tmp9Result = tmp9(1625);
  } else {
    const items5 = [callback(tmp9(6549).SceneLoadingIndicator, {}), , , ];
    obj1 = { appEntryKey: null };
    obj1[0] = share;
    items5[1] = callback(tmp9(16124).ActionSheetContainer, obj1);
    items5[2] = callback(tmp14(16172), {});
    items5[3] = callback(tmp9(4660).AlertModalContainer, {});
    obj[1] = items5;
    return callback2(tmp17, obj);
  }
};