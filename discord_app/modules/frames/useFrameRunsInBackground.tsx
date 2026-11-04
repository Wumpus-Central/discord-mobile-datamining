// === Module 14625: useFrameRunsInBackground ===

// Module 14625 (useFrameRunsInBackground)
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 12288 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import FramesStore from "FramesStore" /* 6981 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/useFrameRunsInBackground.tsx");

export default function useFrameRunsInBackground(arg0) {
  _require = arg0;
  items = [FramesStore, UnsyncedUserSettingsStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => frameRunsInBackgroundDefault(FramesStore.getFrame(closure_0), UnsyncedUserSettingsStore), items1);
};