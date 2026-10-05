// discord_common/js/packages/media-engine/index.tsx
import MediaEngineNative from "native/index.tsx";
import MediaEngineEvent from "MediaEngineEvent.tsx";
import BaseConnection from "BaseConnection.tsx";
import MediaEngineDummy from "MediaEngineDummy.tsx";
import Constants from "Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const MediaEngineImplementations = Constants.MediaEngineImplementations;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/index.tsx");
const MediaEngineEvent_export = MediaEngineEvent.MediaEngineEvent;

export const BaseConnectionEvent = BaseConnection.BaseConnectionEvent;
export { MediaEngineEvent_export as MediaEngineEvent };
export { MediaEngineContextTypes };
export const DesktopSourceEndReason = {
  SOURCE_NOT_FOUND: 0,
  [0]: "SOURCE_NOT_FOUND",
  USER_STOPPED: 1,
  [1]: "USER_STOPPED",
  OTHER_ERROR: 2,
  [2]: "OTHER_ERROR",
};
export const FilterTargetType = { INPUT_DEVICE: "input_device", STREAM: "stream" };
export const FilterSettingsGraph = {
  NONE: "",
  BACKGROUND_BLUR: "background_blur",
  BACKGROUND_REPLACEMENT: "background_replacement",
};
export const FilterSettingsKey = {
  CAMERA_BACKGROUND_PREVIEW: "cameraBackgroundPreview",
  CAMERA_BACKGROUND_LIVE: "cameraBackgroundLive",
};
export const determineMediaEngine = function determineMediaEngine() {
  const items = [,];
  ({ NATIVE: arr[0], WEBRTC: arr[1] } = MediaEngineImplementations);
  let DUMMY = items.find((item) => {
    let _default;
    if (constants.NATIVE === item) {
      _default = MediaEngineNative.default;
    } else {
      if (constants.WEBRTC !== item) {
        const DUMMY = constants.DUMMY;
      }
      _default = MediaEngineDummy.default;
    }
    return _default.supported();
  });
  if (DUMMY == null) {
    DUMMY = MediaEngineImplementations.DUMMY;
  }
  return DUMMY;
};
export const initializeMediaEngine = function initializeMediaEngine(BaseConnectionEvent) {
  let _default;
  if (MediaEngineImplementations.NATIVE === BaseConnectionEvent) {
    _default = MediaEngineNative.default;
  } else {
    if (MediaEngineImplementations.WEBRTC !== BaseConnectionEvent) {
      const DUMMY = MediaEngineImplementations.DUMMY;
    }
    _default = MediaEngineDummy.default;
  }
  const _default1 = new _default();
  return _default1;
};
