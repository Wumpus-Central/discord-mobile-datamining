// === Module 8361: showShareActionSheet ===

// Module 8361 (showShareActionSheet)
import _mod17 from "module_17" /* 17 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import NativeShareManagerModuleDefault from "NativeShareManagerModule" /* 8362 */;
import ShowShareActionSheetUtils from "ShowShareActionSheetUtils" /* 8363 */;
import PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isAndroid()) {
  const nativeEventEmitter = new _mod17.NativeEventEmitter(NativeShareManagerModuleDefault);
  nativeEventEmitter.addListener("share-broadcast-receiver-app-clicked", (arg0) => {
    ({ app, location: _location } = arg0);
    const result = ShowShareActionSheetUtils.trackAppClickInNativeShareSheet(app, _location);
  });
}
let result = size.fileFinishedImporting("modules/action_sheet/native/showShareActionSheet.tsx");

export const showShareActionSheet = function showShareActionSheet(source, PREMIUM_GIFT_SUCCESS_MODAL) {
  _require = source;
  let tmp = PREMIUM_GIFT_SUCCESS_MODAL;
  importDefault = PREMIUM_GIFT_SUCCESS_MODAL;
  if (null != source.source) {
    let mediaShareParams = require("ShowShareActionSheetUtils").getMediaShareParams(source.source);
    const obj2 = require("ShowShareActionSheetUtils");
  } else {
    mediaShareParams = { mediaFallbackUrl: "hash", mediaStagingOptions: "call" };
  }
  ({ mediaFallbackUrl, mediaStagingOptions } = mediaShareParams);
  if (null == source.source) {
    mediaFallbackUrl = source.url;
  }
  if (null != mediaStagingOptions) {
    let obj = {
      onCancel() {
          return PREMIUM_GIFT_SUCCESS_MODAL(fn[2]).cancelPendingShare();
        }
    };
    fn = require("showSharePreparingModal").showSharePreparingModal(obj);
    const obj3 = require("showSharePreparingModal");
  } else {
    fn = () => {

    };
  }
  let message = source.message;
  if (message == null) {
    message = null;
  }
  if (mediaFallbackUrl == null) {
    mediaFallbackUrl = null;
  }
  let subject = source.subject;
  if (subject == null) {
    subject = null;
  }
  if (tmp == null) {
    tmp = null;
  }
  if (mediaStagingOptions == null) {
    mediaStagingOptions = null;
  }
  const obj5 = require("NativeShareManagerModule");
  const shareResult = require("NativeShareManagerModule").share(message, mediaFallbackUrl, subject, tmp, mediaStagingOptions, fn);
  const nextPromise = require("NativeShareManagerModule").share(message, mediaFallbackUrl, subject, tmp, mediaStagingOptions, fn).then((method) => {
    if (null != method) {
      method = method.method;
      if (source.iOSOnlyShareCallback != null) {
        let tmp3 = method;
        if (method == null) {
          tmp3 = null;
        }
        iOSOnlyShareCallback(tmp, tmp3);
      }
      const result = ShowShareActionSheetUtils.trackAppClickInNativeShareSheet(method, closure_1);
    }
  });
  require("NativeShareManagerModule").share(message, mediaFallbackUrl, subject, tmp, mediaStagingOptions, fn).then((method) => {
    if (null != method) {
      method = method.method;
      if (source.iOSOnlyShareCallback != null) {
        let tmp3 = method;
        if (method == null) {
          tmp3 = null;
        }
        iOSOnlyShareCallback(tmp, tmp3);
      }
      const result = ShowShareActionSheetUtils.trackAppClickInNativeShareSheet(method, closure_1);
    }
  }).catch((error) => {
    let obj = SentryUtilsDefault;
    let str = closure_1;
    if (closure_1 == null) {
      str = "";
    }
    obj = { tags: { location: str } };
    obj.captureException(error, obj);
    if (source.iOSOnlyShareCallback != null) {
      iOSOnlyShareCallback(false, null);
    }
  }).finally(() => {
    fn();
  });
};