// discord_app/modules/device/native/getDeviceMediaPhotos.tsx
import set from "../../../../_runtime/00002_set.js";
import timestampDefault from "../../debug/Logger.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import set2 from "../../../utils/PlatformUtils.tsx";
import get_ActivityIndicatorDefault from "DCDPhotos.tsx";

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