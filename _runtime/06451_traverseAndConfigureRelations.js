// === Module 6451: traverseAndConfigureRelations ===

// Module 6451 (traverseAndConfigureRelations)
import tagMessage from "tagMessage" /* 6382 */;

require = arg1;
let dependencyMap = arg6;
function traverseAndConfigureRelations(gestures, map, set) {
  const _require = gestures;
  dependencyMap = map;
  closure_2 = set;
  let items = arg3;
  if (arg3 === undefined) {
    items = [];
  }
  let obj = _require(6444);
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    let item = gestures.forEach((item, index) => {
      if (obj.isComposedGesture(item)) {
        let tmp13 = gestures.type !== gestures(map[1]).ComposedGestureName.Simultaneous;
        if (tmp13) {
          tmp13 = item.type === gestures(map[1]).ComposedGestureName.Simultaneous;
        }
        if (tmp13) {
          const handlerTags = item.handlerTags;
          item = handlerTags.forEach((item, index) => set.add(item));
        }
        let tmp15 = gestures.type === gestures(map[1]).ComposedGestureName.Simultaneous;
        if (tmp15) {
          tmp15 = item.type !== gestures(map[1]).ComposedGestureName.Simultaneous;
        }
        if (tmp15) {
          const handlerTags1 = item.handlerTags;
          const item1 = handlerTags1.forEach((item, index) => set.delete(item));
        }
        set(item, map, set, items);
        let tmp24 = item.type === gestures(map[1]).ComposedGestureName.Simultaneous;
        if (tmp24) {
          tmp24 = gestures.type !== gestures(map[1]).ComposedGestureName.Simultaneous;
        }
        if (tmp24) {
          const handlerTags2 = gestures.handlerTags;
          const item2 = handlerTags2.forEach((item, index) => set.delete(item));
        }
        let tmp26 = item.type !== gestures(map[1]).ComposedGestureName.Simultaneous;
        if (tmp26) {
          tmp26 = gestures.type === gestures(map[1]).ComposedGestureName.Simultaneous;
        }
        if (tmp26) {
          const handlerTags3 = gestures.handlerTags;
          const item3 = handlerTags3.forEach((item, index) => set.add(item));
        }
        if (gestures.type === gestures(map[1]).ComposedGestureName.Exclusive) {
          const handlerTags4 = item.handlerTags;
          const item4 = handlerTags4.forEach((item, index) => arr.push(item));
        }
        let tmp29 = item.type === gestures(map[1]).ComposedGestureName.Exclusive;
        if (tmp29) {
          tmp29 = gestures.type !== gestures(map[1]).ComposedGestureName.Exclusive;
        }
        if (tmp29) {
          items.length = items.length;
        }
      } else {
        let arr = items;
        set(item, map, set, items);
        if (deleteResult) {
          set.add(item.handlerTag);
        }
        if (gestures.type === gestures(map[1]).ComposedGestureName.Exclusive) {
          arr = arr.push(item.handlerTag);
        }
        deleteResult = set.delete(item.handlerTag);
      }
      obj = gestures(map[0]);
    });
  } else {
    gestures.gestureRelations = tmp(6444).prepareRelations(gestures.config, gestures.handlerTag);
    const push = simultaneousHandlers.push;
    const items1 = [];
    HermesBuiltin.arraySpread(set, 0);
    HermesBuiltin.apply(items1, gestures.gestureRelations.simultaneousHandlers);
    const waitFor = gestures.gestureRelations.waitFor;
    const push2 = waitFor.push;
    const items2 = [];
    HermesBuiltin.arraySpread(items, 0);
    HermesBuiltin.apply(items2, waitFor);
    obj = { waitFor: null, simultaneousHandlers: null, blocksHandlers: null };
    obj[0] = gestures.gestureRelations.waitFor;
    obj[1] = gestures.gestureRelations.simultaneousHandlers;
    obj[2] = gestures.gestureRelations.blocksHandlers;
    const result = map.set(gestures.handlerTag, obj);
  }
  tmp = _require;
}
arg5.traverseAndConfigureRelations = traverseAndConfigureRelations;
arg5.configureRelations = function configureRelations(externalSimultaneousHandlers) {
  const map = new Map();
  if (obj2.isComposedGesture(externalSimultaneousHandlers)) {
    const _Set = Set;
    const set = new Set(externalSimultaneousHandlers.externalSimultaneousHandlers);
    if (externalSimultaneousHandlers.type === set(6436).ComposedGestureName.Simultaneous) {
      const handlerTags = externalSimultaneousHandlers.handlerTags;
      const item = handlerTags.forEach((item, index) => set.add(item));
    }
    traverseAndConfigureRelations(externalSimultaneousHandlers, map, set);
  } else {
    const result = map.set(externalSimultaneousHandlers.handlerTag, externalSimultaneousHandlers.gestureRelations);
  }
  return map;
};
arg5.ensureNativeDetectorComponent = function ensureNativeDetectorComponent(ReanimatedNativeDetector) {
  if (!ReanimatedNativeDetector) {
    const _Error = Error;
    error = new Error(tagMessage.tagMessage("Gesture expects to run on the UI thread, but failed to create the Reanimated NativeDetector."));
    throw error;
  }
};
arg5.EMPTY_SET = new Set();