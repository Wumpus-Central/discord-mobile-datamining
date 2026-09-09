// discord_app/modules/media_viewer/native/useMediaViewerSources.tsx
import ZustandStore from "../../../lib/ZustandStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  let obj = zustandStore;
  const field = zustandStore.getField("userRevealedIndexes");
  if (!field.has(index)) {
    const _Set = Set;
    const set = new Set(field);
    set.add(index);
    obj = { userRevealedIndexes: set };
    obj.setState(obj);
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
