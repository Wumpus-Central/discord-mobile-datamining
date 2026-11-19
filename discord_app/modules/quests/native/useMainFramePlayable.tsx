// === Module 19262: useMainFramePlayable ===

// Module 19262 (useMainFramePlayable)
import initialize from "initialize" /* 504 */;
import FramesStore from "FramesStore" /* 6502 */;
import PlayableStore from "PlayableStore" /* 16525 */;

require = fn;
const asLaunched = fn(6503).asLaunched;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/useMainFramePlayable.tsx");

export default function useMainFramePlayable() {
  items = [FramesStore, PlayableStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    const tmp = asLaunched(mainFrame.getMainFrame());
    playableForFrame = null;
    if (null != tmp) {
      playableForFrame = playableForFrame.getPlayableForFrame(tmp.id);
    }
    if (null != tmp) {
      if (null != playableForFrame) {
        const obj = { frameId: tmp.id, playable: playableForFrame };
      }
      return { frameId: null, playable: null };
    }
  });
  let tmp2 = null;
  if (null != stateFromStoresObject.frameId) {
    tmp2 = stateFromStoresObject;
  }
  return tmp2;
};