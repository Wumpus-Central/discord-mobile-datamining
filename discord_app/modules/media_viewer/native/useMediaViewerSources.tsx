// === Module 8262: useMediaViewerSources ===

// Module 8262 (useMediaViewerSources)
import ZustandStore from "ZustandStore" /* 4429 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8263 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { sources: [], spoilerIndexes: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSources.tsx");

export const MediaViewerSourcesStore = zustandStore;
export const setMediaViewerSources = function setMediaViewerSources(arg0) {
  ({ sources, initialIndex } = arg0);
  if (initialIndex === undefined) {
    initialIndex = null;
  }
  const items = [];
  const set = new Set();
  const item = sources.forEach((item, index) => {
    const flattenSourceResult = MediaSourceUtil.flattenSource(item);
    let tmp2 = null != flattenSourceResult;
    if (tmp2) {
      tmp2 = flattenSourceResult.spoiler || flattenSourceResult.obscure;
      const tmp3 = flattenSourceResult.spoiler || flattenSourceResult.obscure;
    }
    if (tmp2) {
      tmp2 = initialIndex !== index;
    }
    if (tmp2) {
      set.add(index);
    }
    items.push(item);
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
    obj = { spoilerIndexes: set };
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