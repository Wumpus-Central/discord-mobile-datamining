// === Module 16054: useHideSelfVideo ===

// Module 16054 (useHideSelfVideo)
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { VideoToggleState } from "ME";
import DesktopSources from "DesktopSources";

let closure_6;
let error;
const require = arg1;
({ MediaEngineContextTypes: closure_6, Features: error } = DesktopSources);
const result = require("ME").fileFinishedImporting("modules/calls/useHideSelfVideo.tsx");

export default function useHideSelfVideo(arg0) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let stateFromStores;
  const items = [fetchFingerprint];
  stateFromStores = DEFAULT(589).useStateFromStores(items, () => id.getId());
  const obj = DEFAULT(589);
  const items1 = [_detectH265HardwareDecode];
  const stateFromStores1 = DEFAULT(589).useStateFromStores(items1, () => _detectH265HardwareDecode.supports(constants.DISABLE_VIDEO));
  const obj2 = DEFAULT(589);
  const items2 = [_detectH265HardwareDecode];
  const items3 = [stateFromStores, DEFAULT];
  let tmp5 = null == arg0;
  const stateFromStores2 = DEFAULT(589).useStateFromStores(items2, () => outer1_4.isLocalVideoDisabled(stateFromStores, DEFAULT), items3);
  if (!tmp5) {
    tmp5 = arg0 === stateFromStores;
  }
  if (tmp5) {
    tmp5 = stateFromStores1;
  }
  const items4 = [
    tmp5,
    stateFromStores2,
    (arg0) => {
      stateFromStores(outer1_2[5]).setDisableLocalVideo(stateFromStores, arg0 ? outer1_5.DISABLED : outer1_5.MANUAL_ENABLED, DEFAULT);
    }
  ];
  return items4;
};