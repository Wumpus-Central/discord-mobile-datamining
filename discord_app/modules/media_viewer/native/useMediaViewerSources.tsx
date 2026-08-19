// === Module 8993: zustandStore ===

// Module 8993 (zustandStore)
import obj132 from "obj132" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4241 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => {
  const obj = { sources: [], spoilerIndexes: new Set() };
  return obj;
});
const result = obj132.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSources.tsx");

export const MediaViewerSourcesStore = zustandStore;
export const setMediaViewerSources = function setMediaViewerSources(arg0) {
  ({ sources, initialIndex } = arg0);
  if (initialIndex === undefined) {
    initialIndex = null;
  }
  const items = [];
  const set = new Set();
  const item = sources.forEach((item, index) => {
    const flattenSourceResult = initialIndex(items[1]).flattenSource(item);
    let tmp2 = null != flattenSourceResult;
    if (tmp2) {
      tmp2 = flattenSourceResult.spoiler || flattenSourceResult.obscure;
    }
    if (tmp2) {
      tmp2 = initialIndex !== index;
    }
    if (tmp2) {
      set.add(index);
    }
    items.push(item);
    const obj = initialIndex(items[1]);
  });
  set.setState({ sources: items, spoilerIndexes: set });
};
export const removeSpoiler = function removeSpoiler(index) {
  let obj = zustandStore;
  const field = zustandStore.getField("spoilerIndexes");
  if (field.has(index)) {
    const _Set = Set;
    const set = new Set(field);
    set.delete(index);
    obj = { spoilerIndexes: null };
    obj[0] = set;
    obj.setState(obj);
  }
};
export const toggleSpoiler = function toggleSpoiler(index) {
  const set = new Set(zustandStore.getField("spoilerIndexes"));
  if (set.has(index)) {
    set.delete(index);
  } else {
    set.add(index);
  }
  zustandStore.setState({ spoilerIndexes: set });
};