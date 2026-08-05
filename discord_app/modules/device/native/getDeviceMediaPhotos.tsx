// discord_app/modules/device/native/getDeviceMediaPhotos.tsx
import { NativeModules } from "get ActivityIndicator";
import { set } from "../../../utils/PlatformUtils.tsx";

let c4 = new require("set")("DeviceMedia.tsx");
const tmp2 = new require("set")("DeviceMedia.tsx");
const result = require("module_1208").fileFinishedImporting("modules/device/native/getDeviceMediaPhotos.tsx");

export default function getDeviceMediaPhotos(arg0) {
  let batchSize;
  let endCursor;
  let extensions;
  let lastAssetIndex;
  let lastNodeImageUri;
  let onError;
  let onFetched;
  ({ batchSize, extensions, onFetched, onError } = arg0);
  ({ endCursor, lastAssetIndex, lastNodeImageUri } = arg0);
  if (onError === undefined) {
    onError = function u(arg0) {
      logger.log("CameraRollUtils -- Failed to get photos with error " + arg0);
      callback(table[2]).captureException(arg0, { tags: { source: "DEVICE_MEDIA" } });
    };
  }
  let obj = set /* set */;
  if (obj.isIOS()) {
    const obj3 = require("DCDPhotos.tsx") /* get ActivityIndicator */;
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