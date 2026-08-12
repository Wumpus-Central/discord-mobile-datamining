// discord_common/js/packages/media-engine/index.tsx
import DesktopSources from "DesktopSources";
import { Video } from "MediaEngineDummy.tsx";
import { destroy } from "native/index.tsx";

let closure_2 = DesktopSources.MediaEngineImplementations;
const result = require("Video").fileFinishedImporting("../discord_common/js/packages/media-engine/index.tsx");

export const BaseConnectionEvent = require("destroy").BaseConnectionEvent;
export const MediaEngineEvent = require("MediaEngineEvent").MediaEngineEvent;
export const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
export const DesktopSourceEndReason = { SOURCE_NOT_FOUND: 0, [0]: "SOURCE_NOT_FOUND", USER_STOPPED: 1, [1]: "USER_STOPPED", OTHER_ERROR: 2, [2]: "OTHER_ERROR" };
export const FilterTargetType = { INPUT_DEVICE: "input_device", STREAM: "stream" };
export const FilterSettingsGraph = { NONE: "", BACKGROUND_BLUR: "background_blur", BACKGROUND_REPLACEMENT: "background_replacement" };
export const FilterSettingsKey = { CAMERA_BACKGROUND_PREVIEW: "cameraBackgroundPreview", CAMERA_BACKGROUND_LIVE: "cameraBackgroundLive" };
export const determineMediaEngine = function determineMediaEngine() {
  const items = [, ];
  ({ NATIVE: arr[0], WEBRTC: arr[1] } = closure_2);
  let DUMMY = items.find((arg0) => {
    if (constants.NATIVE === arg0) {
      let _default = callback(4441).default;
    } else {
      if (tmp.WEBRTC !== arg0) {
        const DUMMY = tmp.DUMMY;
      }
      _default = callback(4511).default;
    }
    return _default.supported();
  });
  if (DUMMY == null) {
    DUMMY = closure_2.DUMMY;
  }
  return DUMMY;
};
export const initializeMediaEngine = function initializeMediaEngine(BaseConnectionEvent) {
  if (constants.NATIVE === BaseConnectionEvent) {
    let _default = destroy.default;
  } else {
    if (tmp.WEBRTC !== BaseConnectionEvent) {
      const DUMMY = tmp.DUMMY;
    }
    _default = Video.default;
  }
  _default = new _default();
  return _default;
};