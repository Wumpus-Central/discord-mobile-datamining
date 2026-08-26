// === Module 9060: zustandStore ===

// Module 9060 (zustandStore)
import set2 from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4310 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => {
  const obj = { sources: [], spoilerIndexes: new Set() };
  return obj;
});
const result = set2.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSources.tsx");

export const MediaViewerSourcesStore = zustandStore;
export const setMediaViewerSources = function setMediaViewerSources(arg0) {
  ({ sources, initialIndex } = arg0);
  if (initialIndex === undefined) {
    initialIndex = null;
  }
  let set;
  const items = [];
  set = new Set();
  const item = sources.forEach((closure_1) => {
    const flattenSourceResult = initialIndex(items[1]).flattenSource(closure_1);
    let tmp2 = null != flattenSourceResult;
    if (tmp2) {
      tmp2 = flattenSourceResult.spoiler || flattenSourceResult.obscure;
      const tmp3 = flattenSourceResult.spoiler || flattenSourceResult.obscure;
    }
    if (tmp2) {
      tmp2 = initialIndex !== arg1;
    }
    if (tmp2) {
      set.add(arg1);
    }
    items.push(closure_1);
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