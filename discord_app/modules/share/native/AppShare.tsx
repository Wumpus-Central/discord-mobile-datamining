// === Module 18453: AppShare ===

// Module 18453 (AppShare)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import useMountEffectDefault from "useMountEffect" /* 5392 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5936 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7185 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7500 */;
import NativeShareManagerModuleDefault from "NativeShareManagerModule" /* 8458 */;
import ShareScreenDefault from "ShareScreen" /* 13952 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14517 */;
import _modDef14638 from "module_14638" /* 14638 */;
import AppToastContainerDefault from "AppToastContainer" /* 17449 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
fn(17).BackHandler;
const AnalyticsTrackingStore = fn(7171);
const ShareStore = fn(14477);
const AnalyticEvents = fn(1085).AnalyticEvents;
let closure_8 = fn(12145).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAuthenticated() {
  const cResult = stateFromStores(576).c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function s() {
      return authenticated.isAuthenticated();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function h() {
      if (stateFromStores) {
        AuthenticationActionCreatorsDefault.startSession(AuthenticationStore.getToken());
        if (obj2.isAndroid()) {
          const notificationAuthorization = NativePermissionManagerModuleDefault.requestNotificationAuthorization();
          const tmpResult = NativePermissionManagerModuleDefault;
        }
        obj2 = PlatformUtils;
      }
    };
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp9 = items1;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = noop.useEffect(tmp8, tmp9);
  let tmpResult = stateFromStores(504);
}) : (function useAuthenticated() {
  const items = [AuthenticationStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => authenticated.isAuthenticated());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      AuthenticationActionCreatorsDefault.startSession(AuthenticationStore.getToken());
      if (obj2.isAndroid()) {
        const notificationAuthorization = NativePermissionManagerModuleDefault.requestNotificationAuthorization();
        const tmpResult = NativePermissionManagerModuleDefault;
      }
      obj2 = PlatformUtils;
    }
  }, items1);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInitialization(targetUserId) {
  const cResult = targetUserId(576).c(8);
  targetUserId = targetUserId.targetUserId;
  [first, dependencyMap] = noop.useState(false);
  if (cResult[0] !== targetUserId) {
    let tmp7 = null == targetUserId;
    if (!tmp7) {
      tmp7 = AuthenticationStore.getId() === targetUserId;
    }
    cResult[0] = targetUserId;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  let obj = targetUserId(576);
  [r10031, _slicedToArray] = noop.useState(tmp5);
  if (cResult[2] !== first) {
    class A {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[15]);
          initResult = obj.init();
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_2(true);
        }
        return;
      }
    }
    const items = [first];
    cResult[2] = first;
    cResult[3] = A;
    cResult[4] = items;
    let tmp11 = items;
  } else {
    class A {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[15]);
          initResult = obj.init();
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_2(true);
        }
        return;
      }
    }
    tmp11 = cResult[4];
  }
  const effect = noop.useEffect(A, tmp11);
  if (cResult[5] !== targetUserId) {
    class A {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[15]);
          initResult = obj.init();
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_2(true);
        }
        return;
      }
    }
    const items1 = [targetUserId];
    cResult[5] = targetUserId;
    cResult[6] = tmp15;
    cResult[7] = items1;
    let tmp14 = items1;
  } else {
    class A {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[15]);
          initResult = obj.init();
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_2(true);
        }
        return;
      }
    }
    tmp14 = cResult[7];
  }
  const effect1 = noop.useEffect(tmp15, tmp14);
  if (first) {
    class A {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[15]);
          initResult = obj.init();
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_2(true);
        }
        return;
      }
    }
  }
  return first;
}) : (function useInitialization(targetUserId) {
  targetUserId = targetUserId.targetUserId;
  first = undefined;
  closure_2 = undefined;
  _slicedToArray = undefined;
  [first, closure_2] = noop.useState(false);
  let tmp4 = null == targetUserId;
  if (!tmp4) {
    tmp4 = AuthenticationStore.getId() === targetUserId;
  }
  const tmpResult = _slicedToArray(noop.useState(tmp4), 2);
  _slicedToArray = tmpResult[1];
  const items = [first];
  const effect = noop.useEffect(() => {
    if (!first) {
      AccessibilityManagerDefault.init();
      closure_2(true);
    }
  }, items);
  const items1 = [targetUserId];
  const effect1 = noop.useEffect(() => {
    let tmp2 = null != targetUserId;
    if (tmp2) {
      tmp2 = AuthenticationStore.getId() !== tmp;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const obj = targetUserId(dependencyMap[16]);
        targetUserId(dependencyMap[16]).switchAccount(closure_1_0, false, constants.SHARE_EXTENSION).then(() => {
          closure_1_3(true);
        });
      }, 18);
    }
  }, items1);
  if (first) {
    first = tmpResult[0];
  }
  return first;
});
const share = "share";
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/AppShare.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppShare(attachments) {
  _require = attachments;
  const cResult = require("c").c(14);
  const tmp4 = closure_12(attachments);
  closure_11();
  if (cResult[0] === attachments.attachments.length) {
    if (cResult[1] === attachments.text) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    if (cResult[4] !== attachments.attachments) {
      const fn2 = function u() {
        attachments = attachments.attachments;
        const mapped = attachments.map((mimeType) => {
          let str = mimeType.mimeType;
          if (str == null) {
            str = "unknown";
          }
          return str;
        });
        TTIAnalyticsUtils.trackAppUIViewed("share", { share_num_attachments: attachments.attachments.length, share_attachment_mimetypes: mapped });
      };
      cResult[4] = attachments.attachments;
      cResult[5] = fn2;
      let tmp10 = fn2;
    } else {
      tmp10 = cResult[5];
    }
    useMountEffectDefault(tmp10);
    if (cResult[6] === tmp4) {
      if (cResult[7] === attachments) {
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { appEntryKey: share };
          const tmp27 = closure_9(tmp(17396).ActionSheetContainer, obj2);
          const tmp28 = closure_9(AppToastContainerDefault, { appChrome: false });
          const tmp29 = closure_9(tmp(5303).AlertModalContainer, {});
          cResult[9] = tmp27;
          cResult[10] = tmp28;
          cResult[11] = tmp29;
          let tmp24 = tmp29;
          let tmp23 = tmp28;
          let tmp22 = tmp27;
        } else {
          tmp22 = cResult[9];
          tmp23 = cResult[10];
          tmp24 = cResult[11];
        }
        if (cResult[12] !== cResult[8]) {
          const obj3 = { appEntryKey: share, children: null };
          const items = [tmp13, tmp22, tmp23, tmp24];
          obj3.children = items;
          const tmp33 = closure_10(_modDef14638, obj3);
          cResult[12] = tmp13;
          cResult[13] = tmp33;
          let tmp30 = tmp33;
        } else {
          tmp30 = cResult[13];
        }
        return tmp30;
      }
    }
    if (!tmp4) {
      const tmp14Result = closure_9(tmp(6718).SceneLoadingIndicator, {});
      cResult[6] = tmp4;
      cResult[7] = attachments;
      cResult[8] = tmp14Result;
    }
    const obj4 = { appEntryKey: share, sharedContent: attachments, onClose: null };
    const tmp11Result = ShareScreenDefault;
    if (tmpResult.isMetaQuest()) {
      let exitApp = NativeShareManagerModuleDefault.close;
    } else {
      exitApp = BackHandler.exitApp;
    }
    obj4.onClose = exitApp;
    closure_9(tmp11Result, obj4);
    tmpResult = tmp(1627);
  }
  const fn = function c() {
    let tmp2 = null != attachments.text;
    if (tmp2) {
      tmp2 = attachments.text.length > 0;
    }
    AnalyticsUtilsDefault.track(AnalyticEvents.EXTERNAL_SHARE_OPENED, { has_content: tmp2, has_attachment: attachments.attachments.length > 0 });
    const obj2 = { has_content: tmp2, has_attachment: attachments.attachments.length > 0 };
  };
  const items1 = [attachments.attachments.length, attachments.text];
  cResult[0] = attachments.attachments.length;
  cResult[1] = attachments.text;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp7 = items1;
  tmp6 = fn;
  let obj = require("c");
}) : (function AppShare(attachments) {
  _require = attachments;
  closure_11();
  const items = [attachments.attachments.length, attachments.text];
  const effect = noop.useEffect(() => {
    let tmp2 = null != attachments.text;
    if (tmp2) {
      tmp2 = attachments.text.length > 0;
    }
    AnalyticsUtilsDefault.track(AnalyticEvents.EXTERNAL_SHARE_OPENED, { has_content: tmp2, has_attachment: attachments.attachments.length > 0 });
    const obj2 = { has_content: tmp2, has_attachment: attachments.attachments.length > 0 };
  }, items);
  useMountEffectDefault(() => {
    attachments = attachments.attachments;
    const mapped = attachments.map((mimeType) => {
      let str = mimeType.mimeType;
      if (str == null) {
        str = "unknown";
      }
      return str;
    });
    TTIAnalyticsUtils.trackAppUIViewed("share", { share_num_attachments: attachments.attachments.length, share_attachment_mimetypes: mapped });
  });
  let obj = { appEntryKey: share, children: null };
  if (tmp) {
    let obj2 = { appEntryKey: share, sharedContent: attachments, onClose: null };
    const tmp4Result = ShareScreenDefault;
    if (obj3.isMetaQuest()) {
      let exitApp = NativeShareManagerModuleDefault.close;
    } else {
      exitApp = BackHandler.exitApp;
    }
    obj2.onClose = exitApp;
    closure_9(tmp4Result, obj2);
    obj3 = require("MetaQuestUtils");
  } else {
    const items1 = [closure_9(require("SceneLoadingIndicator").SceneLoadingIndicator, {}), , , ];
    const obj4 = { appEntryKey: share };
    items1[1] = closure_9(require("MainShared").ActionSheetContainer, obj4);
    items1[2] = closure_9(AppToastContainerDefault, { appChrome: false });
    items1[3] = closure_9(require("AlertModal").AlertModalContainer, {});
    obj.children = items1;
    return closure_10(tmp8, obj);
  }
  tmp = closure_12(attachments);
});