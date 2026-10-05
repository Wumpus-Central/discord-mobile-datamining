// discord_app/modules/action_sheet/native/showShareActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx";
import ShowShareActionSheetUtils from "ShowShareActionSheetUtils.tsx";
import PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault, method;

const NativeEventEmitter = react_native.NativeEventEmitter;
if (PlatformUtils.isAndroid()) {
  const self = this;
  const self2 = this;
  const nativeEventEmitter = new NativeEventEmitter(react_nativeDefault);
  let str = "share-broadcast-receiver-app-clicked";
  nativeEventEmitter.addListener("share-broadcast-receiver-app-clicked", (arg0) => {
    let _location;
    let app;
    ({ app, location: _location } = arg0);
    const obj = ShowShareActionSheetUtils;
    const result = obj.trackAppClickInNativeShareSheet(app, _location);
  });
}
let result = size.fileFinishedImporting("modules/action_sheet/native/showShareActionSheet.tsx");

export const showShareActionSheet = function showShareActionSheet(source, SECURE_FRAMES_STREAM_BOTTOM_SHEET) {
  let fn;
  let mediaFallbackUrl;
  let mediaShareParams;
  let mediaStagingOptions;
  _require = source;
  let tmp = SECURE_FRAMES_STREAM_BOTTOM_SHEET;
  importDefault = SECURE_FRAMES_STREAM_BOTTOM_SHEET;
  if (null != source.source) {
    let tmp3 = fn;
    const obj2 = require("ShowShareActionSheetUtils");
    mediaShareParams = obj2.getMediaShareParams(source.source);
  } else {
    mediaShareParams = { mediaFallbackUrl: "Array", mediaStagingOptions: "Set" };
  }
  ({ mediaFallbackUrl, mediaStagingOptions } = mediaShareParams);
  if (null == source.source) {
    mediaFallbackUrl = source.url;
  }
  if (null != mediaStagingOptions) {
    let obj = {
      onCancel() {
        const obj = SECURE_FRAMES_STREAM_BOTTOM_SHEET(fn[2]);
        return obj.cancelPendingShare();
      },
    };
    const obj3 = require("showSharePreparingModal");
    fn = obj3.showSharePreparingModal(obj);
  } else {
    fn = () => {};
  }
  let message = source.message;
  const share = require("react-native").share;
  require("react-native");
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
  const shareResult = share(message, mediaFallbackUrl, subject, tmp, mediaStagingOptions, fn);
  const nextPromise = shareResult.then((method) => {
    if (null != method) {
      method = method.method;
      if (source.iOSOnlyShareCallback != null) {
        let tmp3 = method;
        if (method == null) {
          tmp3 = null;
        }
        source.iOSOnlyShareCallback(tmp, tmp3);
      }
      const obj = ShowShareActionSheetUtils;
      const result = obj.trackAppClickInNativeShareSheet(method, SECURE_FRAMES_STREAM_BOTTOM_SHEET);
    }
  });
  const catchPromise = nextPromise.catch((error) => {
    let str = SECURE_FRAMES_STREAM_BOTTOM_SHEET;
    const captureException = SentryUtilsDefault.captureException;
    SentryUtilsDefault;
    if (SECURE_FRAMES_STREAM_BOTTOM_SHEET == null) {
      str = "";
    }
    const obj = { tags: { location: str } };
    captureException(error, obj);
    if (source.iOSOnlyShareCallback != null) {
      source.iOSOnlyShareCallback(false, null);
    }
  });
  catchPromise.finally(() => {
    fn();
  });
};
