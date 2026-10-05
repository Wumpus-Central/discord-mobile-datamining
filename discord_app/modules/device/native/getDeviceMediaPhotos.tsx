// === Module 10376: getDeviceMediaPhotos ===

// Module 10376 (getDeviceMediaPhotos)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import react_nativeDefault from "react-native" /* 10377 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
let closure_4 = new LoggerDefault("DeviceMedia.tsx");
new LoggerDefault("DeviceMedia.tsx");
const result = size.fileFinishedImporting("modules/device/native/getDeviceMediaPhotos.tsx");

export default function getDeviceMediaPhotos(arg0) {
  let batchSize;
  let endCursor;
  let extensions;
  let lastAssetIndex;
  let lastNodeImageUri;
  let logger;
  let onError;
  let onFetched;
  ({ batchSize, extensions, onFetched, onError } = arg0);
  ({ endCursor, lastAssetIndex, lastNodeImageUri } = arg0);
  if (onError === undefined) {
    onError = function u(error) {
      logger.log("CameraRollUtils -- Failed to get photos with error " + error);
      const obj = SentryUtilsDefault;
      obj.captureException(error, { tags: { source: "DEVICE_MEDIA" } });
    };
  }
  let obj = PlatformUtils;
  if (obj.isIOS()) {
    const obj3 = react_nativeDefault;
    if (obj3 != null) {
      const obj2 = { first: batchSize, groupTypes: "Recents", assetType: "All", after: endCursor, extensions };
      const photos = obj3.getPhotos(obj2);
      const nextPromise = photos.then(onFetched);
      nextPromise.catch(onError);
    }
  } else {
    const CameraRollUtils = NativeModules.CameraRollUtils;
    const obj4 = { first: batchSize, assetType: "All", after: lastNodeImageUri, offset: lastAssetIndex, extensions };
    const photos1 = CameraRollUtils.getPhotos(obj4);
    const nextPromise1 = photos1.then(onFetched);
    nextPromise1.catch(onError);
  }
};