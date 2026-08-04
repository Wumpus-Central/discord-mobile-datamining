// discord_app/modules/action_sheet/native/showShareActionSheet.tsx
import PlatformTypes from "PlatformTypes";

if (PlatformTypes.isAndroid()) {
  const nativeEventEmitter = new require("get ActivityIndicator").NativeEventEmitter(require("enforcing"));
  nativeEventEmitter.addListener("share-broadcast-receiver-app-clicked", (arg0) => {
    let _location;
    let app;
    ({ app, location: _location } = arg0);
    const result = require(8202) /* trackAppClickInNativeShareSheet */.trackAppClickInNativeShareSheet(app, _location);
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
    let mediaShareParams = _require(8202).getMediaShareParams(source.source);
    const obj2 = _require(8202);
  } else {
    mediaShareParams = { mediaFallbackUrl: "Array", mediaStagingOptions: "HermesInternal" };
  }
  ({ mediaFallbackUrl, mediaStagingOptions } = mediaShareParams);
  if (null == source.source) {
    mediaFallbackUrl = source.url;
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
  const obj3 = importDefault(8201);
  const shareResult = importDefault(8201).share(message, mediaFallbackUrl, subject, tmp, mediaStagingOptions);
  importDefault(8201).share(message, mediaFallbackUrl, subject, tmp, mediaStagingOptions).then((method) => {
    if (null != method) {
      method = method.method;
      if (source.iOSOnlyShareCallback != null) {
        let tmp3 = method;
        if (method == null) {
          tmp3 = null;
        }
        iOSOnlyShareCallback(tmp, tmp3);
      }
      const result = source(outer1_2[3]).trackAppClickInNativeShareSheet(method, closure_1);
      const obj = source(outer1_2[3]);
    }
  }).catch((arg0) => {
    let str = SECURE_FRAMES_STREAM_BOTTOM_SHEET;
    if (SECURE_FRAMES_STREAM_BOTTOM_SHEET == null) {
      str = "";
    }
    SECURE_FRAMES_STREAM_BOTTOM_SHEET(outer1_2[4]).captureException(arg0, { tags: { location: str } });
    if (source.iOSOnlyShareCallback != null) {
      iOSOnlyShareCallback(false, null);
    }
  });
};