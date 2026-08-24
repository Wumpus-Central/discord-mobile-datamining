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
    let item = gestures.forEach((type) => {
      if (obj.isComposedGesture(type)) {
        let tmp13 = gestures.type !== tmp(tmp2[1]).ComposedGestureName.Simultaneous;
        if (tmp13) {
          tmp13 = type.type === tmp(tmp2[1]).ComposedGestureName.Simultaneous;
        }
        if (tmp13) {
          const handlerTags = type.handlerTags;
          const item = handlerTags.forEach((arg0) => set.add(arg0));
        }
        let tmp15 = tmp12.type === tmp(tmp2[1]).ComposedGestureName.Simultaneous;
        if (tmp15) {
          tmp15 = type.type !== tmp(tmp2[1]).ComposedGestureName.Simultaneous;
        }
        if (tmp15) {
          const handlerTags1 = type.handlerTags;
          const item1 = handlerTags1.forEach((arg0) => set.delete(arg0));
        }
        set(type, map, set, items);
        let tmp24 = type.type === tmp(tmp2[1]).ComposedGestureName.Simultaneous;
        if (tmp24) {
          tmp24 = tmp12.type !== tmp(tmp2[1]).ComposedGestureName.Simultaneous;
        }
        if (tmp24) {
          const handlerTags2 = tmp12.handlerTags;
          const item2 = handlerTags2.forEach((arg0) => set.delete(arg0));
        }
        let tmp26 = type.type !== tmp(tmp2[1]).ComposedGestureName.Simultaneous;
        if (tmp26) {
          tmp26 = tmp12.type === tmp(tmp2[1]).ComposedGestureName.Simultaneous;
        }
        if (tmp26) {
          const handlerTags3 = tmp12.handlerTags;
          const item3 = handlerTags3.forEach((arg0) => set.add(arg0));
        }
        if (gestures.type === tmp(tmp2[1]).ComposedGestureName.Exclusive) {
          const handlerTags4 = type.handlerTags;
          const item4 = handlerTags4.forEach((arg0) => arr.push(arg0));
        }
        let tmp29 = type.type === tmp(tmp2[1]).ComposedGestureName.Exclusive;
        if (tmp29) {
          tmp29 = tmp12.type !== tmp(tmp2[1]).ComposedGestureName.Exclusive;
        }
        if (tmp29) {
          tmp17.length = items.length;
        }
        tmp17 = items;
      } else {
        let arr = items;
        set(type, map, set, items);
        if (deleteResult) {
          obj2.add(type.handlerTag);
        }
        if (gestures.type === tmp(tmp2[1]).ComposedGestureName.Exclusive) {
          arr = arr.push(type.handlerTag);
        }
        deleteResult = set.delete(type.handlerTag);
        obj2 = set;
      }
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
      const item = handlerTags.forEach((arg0) => set.add(arg0));
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