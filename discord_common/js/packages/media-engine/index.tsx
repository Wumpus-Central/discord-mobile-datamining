// discord_common/js/packages/media-engine/index.tsx
import destroy from "native/index.tsx";
import BaseConnection from "BaseConnection.tsx";
import MediaEngineDummy from "MediaEngineDummy.tsx";
import MediaEngineEvent from "MediaEngineEvent.tsx";
import Constants from "Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const constants = Constants.MediaEngineImplementations;
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/index.tsx");

export const BaseConnectionEvent = BaseConnection.BaseConnectionEvent;
export const MediaEngineEvent = MediaEngineEvent.MediaEngineEvent;
export const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
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
  ({ NATIVE: arr[0], WEBRTC: arr[1] } = constants);
  let DUMMY = items.find((item) => {
    if (constants.NATIVE === item) {
      let _default = destroy.default;
    } else {
      if (constants.WEBRTC !== item) {
        const DUMMY = constants.DUMMY;
      }
      _default = MediaEngineDummy.default;
    }
    return _default.supported();
  });
  if (DUMMY == null) {
    DUMMY = constants.DUMMY;
  }
  return DUMMY;
};
export const initializeMediaEngine = function initializeMediaEngine(BaseConnectionEvent) {
  if (constants.NATIVE === BaseConnectionEvent) {
    let _default = destroy.default;
  } else {
    if (constants.WEBRTC !== BaseConnectionEvent) {
      const DUMMY = constants.DUMMY;
    }
    _default = MediaEngineDummy.default;
  }
  _default = new _default();
  return _default;
};
