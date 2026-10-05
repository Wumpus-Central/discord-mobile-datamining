// discord_app/modules/media_viewer/native/useMediaViewerSources.tsx
import ZustandStore from "../../../lib/ZustandStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let set;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { sources: [], userRevealedIndexes: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSources.tsx");

export const MediaViewerSourcesStore = zustandStore;
export const setMediaViewerSources = function setMediaViewerSources(initialIndex) {
  initialIndex = initialIndex.initialIndex;
  const sources = initialIndex.sources;
  if (initialIndex === undefined) {
    initialIndex = null;
  }
  if (null != initialIndex) {
    const _Set2 = Set;
    const items = [initialIndex];
    const self3 = this;
    const self4 = this;
    set = new Set(items);
  } else {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
  }
  zustandStore.setState({ sources, userRevealedIndexes: set });
};
export const updateMediaViewerSources = function updateMediaViewerSources(items) {
  const obj = { sources: items };
  zustandStore.setState(obj);
};
export const removeSpoiler = function removeSpoiler(index) {
  const field = zustandStore.getField("userRevealedIndexes");
  if (!field.has(index)) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(field);
    set.add(index);
    const obj2 = { userRevealedIndexes: set };
    zustandStore.setState(obj2);
  }
};
export const toggleSpoiler = function toggleSpoiler(index) {
  set = new Set(zustandStore.getField("userRevealedIndexes"));
  if (set.has(index)) {
    set.delete(index);
  } else {
    set.add(index);
  }
  zustandStore.setState({ userRevealedIndexes: set });
};
