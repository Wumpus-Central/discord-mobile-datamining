// === Module 10375: getDeviceMediaPhotos ===

// Module 10375 (getDeviceMediaPhotos)
import set from "set" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set2 from "set" /* 500 */;
import get_ActivityIndicatorDefault from "get ActivityIndicator" /* 10376 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let closure_4 = new timestampDefault("DeviceMedia.tsx");
const tmp2 = new timestampDefault("DeviceMedia.tsx");
const result = set.fileFinishedImporting("modules/device/native/getDeviceMediaPhotos.tsx");

export default function getDeviceMediaPhotos(arg0) {
  ({ batchSize, extensions, onFetched, onError } = arg0);
  ({ endCursor, lastAssetIndex, lastNodeImageUri } = arg0);
  if (onError === undefined) {
    onError = function u(arg0) {
      logger.log("CameraRollUtils -- Failed to get photos with error " + arg0);
      callback(table[2]).captureException(arg0, { tags: { source: "DEVICE_MEDIA" } });
    };
  }
  let obj = set2;
  if (obj.isIOS()) {
    const obj3 = get_ActivityIndicatorDefault;
    if (obj3 != null) {
      obj = { first: null, groupTypes: "Recents", assetType: "All", after: null, extensions: null };
      obj[0] = batchSize;
      obj[3] = endCursor;
      obj[4] = extensions;
      const photos = obj3.getPhotos(obj);
      photos.then(onFetched).catch(onError);
      const nextPromise = photos.then(onFetched);
    }
  } else {
    const CameraRollUtils = NativeModules.CameraRollUtils;
    obj = { first: null, assetType: "All", after: null, offset: null, extensions: null };
    obj[0] = batchSize;
    obj[2] = lastNodeImageUri;
    obj[3] = lastAssetIndex;
    obj[4] = extensions;
    const photos1 = CameraRollUtils.getPhotos(obj);
    photos1.then(onFetched).catch(onError);
    const nextPromise1 = photos1.then(onFetched);
  }
};