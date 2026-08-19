// === Module 16426: useHideSelfVideo ===

// Module 16426 (useHideSelfVideo)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import { VideoToggleState } from "ME" /* 676 */;
import DesktopSources from "DesktopSources" /* 4529 */;

const require = fn;
({ MediaEngineContextTypes: closure_6, Features: error } = DesktopSources);
const result = require("obj132").fileFinishedImporting("modules/calls/useHideSelfVideo.tsx");

export default function useHideSelfVideo(arg0) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  const items = [closure_3];
  const stateFromStores = DEFAULT(589).useStateFromStores(items, () => id.getId());
  let obj = DEFAULT(589);
  const items1 = [closure_4];
  const stateFromStores1 = DEFAULT(589).useStateFromStores(items1, () => closure_4.supports(constants.DISABLE_VIDEO));
  const obj2 = DEFAULT(589);
  const items2 = [closure_4];
  const items3 = [stateFromStores, DEFAULT];
  let tmp5 = null == arg0;
  const stateFromStores2 = DEFAULT(589).useStateFromStores(items2, () => closure_1_4.isLocalVideoDisabled(stateFromStores, DEFAULT), items3);
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
      stateFromStores(dependencyMap[5]).setDisableLocalVideo(stateFromStores, arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED, DEFAULT);
      const obj = stateFromStores(dependencyMap[5]);
    }
  ];
  return items4;
};