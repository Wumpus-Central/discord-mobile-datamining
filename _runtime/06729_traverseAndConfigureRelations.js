// === Module 6729: traverseAndConfigureRelations ===

// Module 6729 (traverseAndConfigureRelations)
import tagMessage from "tagMessage" /* 6660 */;
import ComposedGestureName from "ComposedGestureName" /* 6714 */;
import _mod6722 from "module_6722" /* 6722 */;

require = arg1;
let dependencyMap = arg6;
function traverseAndConfigureRelations(gestures, map, set) {
  _require = gestures;
  dependencyMap = map;
  if (items === undefined) {
    items = [];
  }
  let obj = require("module_6722");
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    let item = gestures.forEach((type) => {
      if (obj.isComposedGesture(type)) {
        let tmp13 = gestures.type !== ComposedGestureName.ComposedGestureName.Simultaneous;
        if (tmp13) {
          tmp13 = type.type === ComposedGestureName.ComposedGestureName.Simultaneous;
        }
        if (tmp13) {
          const handlerTags = type.handlerTags;
          const item = handlerTags.forEach((item) => set.add(item));
        }
        let tmp15 = gestures.type === ComposedGestureName.ComposedGestureName.Simultaneous;
        if (tmp15) {
          tmp15 = type.type !== ComposedGestureName.ComposedGestureName.Simultaneous;
        }
        if (tmp15) {
          const handlerTags1 = type.handlerTags;
          const item1 = handlerTags1.forEach((item) => set.delete(item));
        }
        traverseAndConfigureRelations(type, closure_1, set, items);
        let tmp24 = type.type === ComposedGestureName.ComposedGestureName.Simultaneous;
        if (tmp24) {
          tmp24 = gestures.type !== ComposedGestureName.ComposedGestureName.Simultaneous;
        }
        if (tmp24) {
          const handlerTags2 = gestures.handlerTags;
          const item2 = handlerTags2.forEach((item) => set.delete(item));
        }
        let tmp26 = type.type !== ComposedGestureName.ComposedGestureName.Simultaneous;
        if (tmp26) {
          tmp26 = gestures.type === ComposedGestureName.ComposedGestureName.Simultaneous;
        }
        if (tmp26) {
          const handlerTags3 = gestures.handlerTags;
          const item3 = handlerTags3.forEach((item) => set.add(item));
        }
        if (gestures.type === ComposedGestureName.ComposedGestureName.Exclusive) {
          const handlerTags4 = type.handlerTags;
          const item4 = handlerTags4.forEach((item) => items.push(item));
        }
        let tmp29 = type.type === ComposedGestureName.ComposedGestureName.Exclusive;
        if (tmp29) {
          tmp29 = gestures.type !== ComposedGestureName.ComposedGestureName.Exclusive;
        }
        if (tmp29) {
          items.length = items.length;
        }
      } else {
        let arr = items;
        traverseAndConfigureRelations(type, closure_1, set, items);
        if (deleteResult) {
          set.add(type.handlerTag);
        }
        if (gestures.type === ComposedGestureName.ComposedGestureName.Exclusive) {
          arr = arr.push(type.handlerTag);
        }
        deleteResult = set.delete(type.handlerTag);
      }
      obj = _mod6722;
    });
  } else {
    gestures.gestureRelations = tmp(6722).prepareRelations(gestures.config, gestures.handlerTag);
    const push = simultaneousHandlers.push;
    const items1 = [];
    HermesBuiltin.arraySpread(set, 0);
    HermesBuiltin.apply(items1, gestures.gestureRelations.simultaneousHandlers);
    const waitFor = gestures.gestureRelations.waitFor;
    const push2 = waitFor.push;
    const items2 = [];
    HermesBuiltin.arraySpread(items, 0);
    HermesBuiltin.apply(items2, waitFor);
    obj = { waitFor: gestures.gestureRelations.waitFor, simultaneousHandlers: gestures.gestureRelations.simultaneousHandlers, blocksHandlers: gestures.gestureRelations.blocksHandlers };
    const result = map.set(gestures.handlerTag, obj);
  }
  tmp = _require;
}

export { traverseAndConfigureRelations };
export const configureRelations = function configureRelations(externalSimultaneousHandlers) {
  const map = new Map();
  if (obj2.isComposedGesture(externalSimultaneousHandlers)) {
    const _Set = Set;
    const set = new Set(externalSimultaneousHandlers.externalSimultaneousHandlers);
    if (externalSimultaneousHandlers.type === ComposedGestureName.ComposedGestureName.Simultaneous) {
      const handlerTags = externalSimultaneousHandlers.handlerTags;
      const item = handlerTags.forEach((item) => set.add(item));
    }
    traverseAndConfigureRelations(externalSimultaneousHandlers, map, set);
  } else {
    const result = map.set(externalSimultaneousHandlers.handlerTag, externalSimultaneousHandlers.gestureRelations);
  }
  return map;
};
export const ensureNativeDetectorComponent = function ensureNativeDetectorComponent(ReanimatedNativeDetector) {
  if (!ReanimatedNativeDetector) {
    const _Error = Error;
    const error = new Error(tagMessage.tagMessage("Gesture expects to run on the UI thread, but failed to create the Reanimated NativeDetector."));
    throw error;
  }
};
export const EMPTY_SET = new Set();