// === Module 13803: useFrameRunsInBackground ===

// Module 13803 (useFrameRunsInBackground)
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 13804 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;
import FramesStore from "FramesStore" /* 6761 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/useFrameRunsInBackground.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFrameRunsInBackground(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore, UnsyncedUserSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return frameRunsInBackgroundDefault(FramesStore.getFrame(closure_0), UnsyncedUserSettingsStore);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useFrameRunsInBackground(arg0) {
  _require = arg0;
  const items = [FramesStore, UnsyncedUserSettingsStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => frameRunsInBackgroundDefault(FramesStore.getFrame(closure_0), UnsyncedUserSettingsStore), items1);
});