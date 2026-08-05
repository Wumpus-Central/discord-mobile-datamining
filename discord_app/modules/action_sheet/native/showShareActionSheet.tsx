// discord_app/modules/action_sheet/native/showShareActionSheet.tsx
import PlatformTypes from "PlatformTypes";
import { trackAppClickInNativeShareSheet } from "ShowShareActionSheetUtils.tsx";

if (PlatformTypes.isAndroid()) {
  const nativeEventEmitter = new require("get ActivityIndicator").NativeEventEmitter(require("enforcing"));
  nativeEventEmitter.addListener("share-broadcast-receiver-app-clicked", (arg0) => {
    let _location;
    let app;
    ({ app, location: _location } = arg0);
    const result = trackAppClickInNativeShareSheet /* trackAppClickInNativeShareSheet */.trackAppClickInNativeShareSheet(app, _location);
  });
}
let result = require("enforcing").fileFinishedImporting("modules/action_sheet/native/showShareActionSheet.tsx");

export const showShareActionSheet = function showShareActionSheet(source, SECURE_FRAMES_STREAM_BOTTOM_SHEET) {
  let mediaFallbackUrl;
  let mediaStagingOptions;
  const _require = source;
  let tmp = SECURE_FRAMES_STREAM_BOTTOM_SHEET;
  const importDefault = SECURE_FRAMES_STREAM_BOTTOM_SHEET;
  if (null != source.source) {
    let mediaShareParams = _require(fn[3]).getMediaShareParams(source.source);
    const obj2 = _require(fn[3]);
  } else {
    mediaShareParams = { mediaFallbackUrl: "body", mediaStagingOptions: "useStateFromStores" };
  }
  ({ mediaFallbackUrl, mediaStagingOptions } = mediaShareParams);
  if (null == source.source) {
    mediaFallbackUrl = source.url;
  }
  if (null != mediaStagingOptions) {
    let obj = { onCancel: null };
    obj[0] = function onCancel() {
      return SECURE_FRAMES_STREAM_BOTTOM_SHEET(fn[2]).cancelPendingShare();
    };
    fn = _require(fn[4]).showSharePreparingModal(obj);
    const obj3 = _require(fn[4]);
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
  const obj5 = importDefault(fn[2]);
  const shareResult = importDefault(fn[2]).share(message, mediaFallbackUrl, subject, tmp, mediaStagingOptions, fn);
  const nextPromise = importDefault(fn[2]).share(message, mediaFallbackUrl, subject, tmp, mediaStagingOptions, fn).then((method) => {
    if (null != method) {
      method = method.method;
      if (source.iOSOnlyShareCallback != null) {
        let tmp3 = method;
        if (method == null) {
          tmp3 = null;
        }
        iOSOnlyShareCallback(tmp, tmp3);
      }
      const result = source(fn[3]).trackAppClickInNativeShareSheet(method, closure_1);
      const obj = source(fn[3]);
    }
  });
  importDefault(fn[2]).share(message, mediaFallbackUrl, subject, tmp, mediaStagingOptions, fn).then((method) => {
    if (null != method) {
      method = method.method;
      if (source.iOSOnlyShareCallback != null) {
        let tmp3 = method;
        if (method == null) {
          tmp3 = null;
        }
        iOSOnlyShareCallback(tmp, tmp3);
      }
      const result = source(fn[3]).trackAppClickInNativeShareSheet(method, closure_1);
      const obj = source(fn[3]);
    }
  }).catch((arg0) => {
    let str = SECURE_FRAMES_STREAM_BOTTOM_SHEET;
    if (SECURE_FRAMES_STREAM_BOTTOM_SHEET == null) {
      str = "";
    }
    SECURE_FRAMES_STREAM_BOTTOM_SHEET(fn[5]).captureException(arg0, { tags: { location: str } });
    if (source.iOSOnlyShareCallback != null) {
      iOSOnlyShareCallback(false, null);
    }
  }).finally(() => {
    fn();
  });
};