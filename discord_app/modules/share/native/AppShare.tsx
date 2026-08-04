import _slicedToArray from "_slicedToArray";
import isMetaQuest from "isMetaQuest";
import get_ActivityIndicator from "GestureWrapper";
import result from "result";
import handleTokenUpdated from "handleTokenUpdated";
import fetchFingerprint from "fetchFingerprint";
import { AnalyticEvents } from "ME";
import { MultiAccountSwitchLocation as closure_9 } from "MAX_ACCOUNTS";
import jsxProd from "SceneLoadingIndicator";

let c10;
let c5;
let closure_6;
let unpackModuleId;
const require = arg1;
({ BackHandler: c5, NativeModules: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const share = "share";
result = require("get ActivityIndicator").fileFinishedImporting("modules/share/native/AppShare.tsx");

export default function AppShare(targetUserId) {
  let stateFromStores = targetUserId;
  targetUserId = targetUserId.targetUserId;
  stateFromStores = targetUserId;
  let first;
  let dependencyMap;
  let callback;
  let obj = React;
  let tmp2 = callback(React.useState(false), 2);
  first = tmp2[0];
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
      first(13615).init();
      dependencyMap(true);
      const obj = first(13615);
    }
  }, items);
  const items1 = [targetUserId];
  const effect1 = obj.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = outer1_7.getId() !== tmp;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const obj = outer1_0(outer1_2[13]);
        outer1_0(outer1_2[13]).switchAccount(closure_0, false, outer1_9.SHARE_EXTENSION).then(() => {
          callback(true);
        });
      }, 18);
    }
  }, items1);
  if (first) {
    first = tmpResult[0];
  }
  let obj1 = stateFromStores(589);
  const items2 = [id];
  stateFromStores = obj1.useStateFromStores(items2, () => authenticated.isAuthenticated());
  const items3 = [stateFromStores];
  const effect2 = obj.useEffect(() => {
    if (stateFromStores) {
      first(5736).startSession(outer1_7.getToken());
      const obj = first(5736);
      if (obj2.isAndroid()) {
        const NativePermissionManager = outer1_6.NativePermissionManager;
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
      tmp2 = tmp.text.length > 0;
    }
    obj = { has_content: tmp2, has_attachment: tmp.attachments.length > 0 };
    obj.track(outer1_8.EXTERNAL_SHARE_OPENED, obj);
  }, items4);
  first(4711)(() => {
    const attachments = stateFromStores.attachments;
    const mapped = attachments.map((mimeType) => {
      let str = mimeType.mimeType;
      if (str == null) {
        str = "unknown";
      }
      return str;
    });
    stateFromStores(6843).trackAppUIViewed("share", { share_num_attachments: stateFromStores.attachments.length, share_attachment_mimetypes: mapped });
  });
  obj = { appEntryKey: share, children: null };
  if (first) {
    obj = { appEntryKey: null, sharedContent: null, onClose: null };
    obj[0] = tmp18;
    obj[1] = targetUserId;
    const tmp14Result = tmp14(13155);
    if (tmp9Result.isMetaQuest()) {
      let exitApp = tmp14(8846).close;
    } else {
      exitApp = exitApp.exitApp;
    }
    obj[2] = exitApp;
    tmp19(tmp14Result, obj);
    tmp9Result = tmp9(1577);
  } else {
    const items5 = [tmp19(tmp9(5731).SceneLoadingIndicator, {}), , , ];
    obj1 = { appEntryKey: null };
    obj1[0] = tmp18;
    items5[1] = tmp19(tmp9(15853).ActionSheetContainer, obj1);
    items5[2] = tmp19(tmp14(15899), {});
    items5[3] = tmp19(tmp9(4628).AlertModalContainer, {});
    obj[1] = items5;
    return closure_11(tmp17, obj);
  }
};