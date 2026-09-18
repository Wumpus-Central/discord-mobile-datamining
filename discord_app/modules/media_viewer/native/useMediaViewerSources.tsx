// === Module 8492: useMediaViewerSources ===

// Module 8492 (useMediaViewerSources)
import ZustandStore from "ZustandStore" /* 4592 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { sources: [], userRevealedIndexes: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSources.tsx");

export const MediaViewerSourcesStore = zustandStore;
export const setMediaViewerSources = function setMediaViewerSources(sources) {
  let initialIndex = sources.initialIndex;
  if (initialIndex === undefined) {
    initialIndex = null;
  }
  if (null != initialIndex) {
    const _Set2 = Set;
    const items = [initialIndex];
    let set = new Set(items);
  } else {
    const _Set = Set;
    set = new Set();
  }
  zustandStore.setState({ sources: sources.sources, userRevealedIndexes: set });
};
export const updateMediaViewerSources = function updateMediaViewerSources(items) {
  zustandStore.setState({ sources: items });
};
export const removeSpoiler = function removeSpoiler(index) {
  const field = zustandStore.getField("userRevealedIndexes");
  if (!field.has(index)) {
    const _Set = Set;
    const set = new Set(field);
    set.add(index);
    const obj2 = { userRevealedIndexes: set };
    zustandStore.setState(obj2);
  }
};
export const toggleSpoiler = function toggleSpoiler(index) {
  const set = new Set(zustandStore.getField("userRevealedIndexes"));
  if (set.has(index)) {
    set.delete(index);
  } else {
    set.add(index);
  }
  zustandStore.setState({ userRevealedIndexes: set });
};