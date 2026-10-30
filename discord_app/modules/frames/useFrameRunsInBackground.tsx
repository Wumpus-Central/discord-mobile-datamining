// === Module 14361: useFrameRunsInBackground ===

// Module 14361 (useFrameRunsInBackground)
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 14362 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import FramesStore from "FramesStore" /* 6840 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/useFrameRunsInBackground.tsx");

export default function useFrameRunsInBackground(arg0) {
  _require = arg0;
  const items = [FramesStore, UnsyncedUserSettingsStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => frameRunsInBackgroundDefault(FramesStore.getFrame(closure_0), UnsyncedUserSettingsStore), items1);
};