// discord_app/modules/action_sheet/native/showShareActionSheet.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx";
import trackAppClickInNativeShareSheet from "ShowShareActionSheetUtils.tsx";
import PlatformTypes from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";

if (PlatformTypes.isAndroid()) {
  const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(enforcingDefault);
  nativeEventEmitter.addListener("share-broadcast-receiver-app-clicked", (arg0) => {
    ({ app, location: _location } = arg0);
    const result = trackAppClickInNativeShareSheet.trackAppClickInNativeShareSheet(app, _location);
  });
}
let result = obj132.fileFinishedImporting("modules/action_sheet/native/showShareActionSheet.tsx");

export const showShareActionSheet = function showShareActionSheet(source, PREMIUM_GIFT_SUCCESS_MODAL) {
  const _require = source;
  let tmp = PREMIUM_GIFT_SUCCESS_MODAL;
  importDefault = PREMIUM_GIFT_SUCCESS_MODAL;
  if (null != source.source) {
    let mediaShareParams = _require(fn[3]).getMediaShareParams(source.source);
    const obj2 = _require(fn[3]);
  } else {
    mediaShareParams = { mediaFallbackUrl: "r", mediaStagingOptions: "accessibilityRole" };
  }
  ({ mediaFallbackUrl, mediaStagingOptions } = mediaShareParams);
  if (null == source.source) {
    mediaFallbackUrl = source.url;
  }
  if (null != mediaStagingOptions) {
    let obj = { onCancel: null };
    obj[0] = function onCancel() {
      return PREMIUM_GIFT_SUCCESS_MODAL(fn[2]).cancelPendingShare();
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
  const nextPromise = importDefault(fn[2]).share(message, mediaFallbackUrl, subject, tmp, mediaStagingOptions, fn).then((result) => {
    if (null != result) {
      const method = result.method;
      if (source.iOSOnlyShareCallback != null) {
        let tmp3 = method;
        if (method == null) {
          tmp3 = null;
        }
        iOSOnlyShareCallback(tmp, tmp3);
      }
      result = source(fn[3]).trackAppClickInNativeShareSheet(method, closure_1);
      const obj = source(fn[3]);
    }
  });
  importDefault(fn[2]).share(message, mediaFallbackUrl, subject, tmp, mediaStagingOptions, fn).then((result) => {
    if (null != result) {
      const method = result.method;
      if (source.iOSOnlyShareCallback != null) {
        let tmp3 = method;
        if (method == null) {
          tmp3 = null;
        }
        iOSOnlyShareCallback(tmp, tmp3);
      }
      result = source(fn[3]).trackAppClickInNativeShareSheet(method, closure_1);
      const obj = source(fn[3]);
    }
  }).catch((error) => {
    let str = PREMIUM_GIFT_SUCCESS_MODAL;
    if (PREMIUM_GIFT_SUCCESS_MODAL == null) {
      str = "";
    }
    PREMIUM_GIFT_SUCCESS_MODAL(fn[5]).captureException(error, { tags: { location: str } });
    if (source.iOSOnlyShareCallback != null) {
      iOSOnlyShareCallback(false, null);
    }
  }).finally(() => {
    fn();
  });
};