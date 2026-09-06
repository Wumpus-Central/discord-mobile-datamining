// === Module 10645: getDeviceMediaPhotos ===

// Module 10645 (getDeviceMediaPhotos)
import LoggerDefault from "Logger" /* 3 */;
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import DCDPhotosDefault from "DCDPhotos" /* 10646 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
let closure_4 = new LoggerDefault("DeviceMedia.tsx");
const result = size.fileFinishedImporting("modules/device/native/getDeviceMediaPhotos.tsx");

export default function getDeviceMediaPhotos(arg0) {
  ({ batchSize, extensions, onFetched, onError } = arg0);
  ({ endCursor, lastAssetIndex, lastNodeImageUri } = arg0);
  if (onError === undefined) {
    onError = function u(error) {
      logger.log("CameraRollUtils -- Failed to get photos with error " + error);
      SentryUtilsDefault.captureException(error, { tags: { source: "DEVICE_MEDIA" } });
    };
  }
  let obj = PlatformUtils;
  if (obj.isIOS()) {
    const obj3 = DCDPhotosDefault;
    if (obj3 != null) {
      obj = { first: batchSize, groupTypes: "Recents", assetType: "All", after: endCursor, extensions };
      const photos = obj3.getPhotos(obj);
      photos.then(onFetched).catch(onError);
      const nextPromise = photos.then(onFetched);
    }
  } else {
    const CameraRollUtils = NativeModules.CameraRollUtils;
    obj = { first: batchSize, assetType: "All", after: lastNodeImageUri, offset: lastAssetIndex, extensions };
    const photos1 = CameraRollUtils.getPhotos(obj);
    photos1.then(onFetched).catch(onError);
    const nextPromise1 = photos1.then(onFetched);
  }
};