// discord_app/modules/device/native/getDeviceMediaPhotos.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import react_native from "../../../../_runtime/00017_react-native.js";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import react_nativeDefault from "DCDPhotos.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
