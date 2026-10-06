// _runtime/06221_traverseAndConfigureRelations.js
import tagMessage from "06152_tagMessage.js";
import ComposedGestureName from "06206_ComposedGestureName.js";
import _mod6214 from "metro/06214__.js";

const require = globalThis.__r;
let _require, dependencyMap;

function traverseAndConfigureRelations(gestures, map, set) {
  let items;
  _require = gestures;
  dependencyMap = map;
  if (items === undefined) {
    items = [];
  }
  let obj = require("metro/06214__.js");
  const tmp2 = _require;
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    let item = gestures.forEach((type) => {
      const obj = _mod6214;
      if (obj.isComposedGesture(type)) {
        const tmp13 =
          gestures.type !== ComposedGestureName.ComposedGestureName.Simultaneous &&
          type.type === ComposedGestureName.ComposedGestureName.Simultaneous;
        if (tmp13) {
          const handlerTags = type.handlerTags;
          const item = handlerTags.forEach((item) => set.add(item));
        }
        const tmp15 =
          gestures.type === ComposedGestureName.ComposedGestureName.Simultaneous &&
          type.type !== ComposedGestureName.ComposedGestureName.Simultaneous;
        if (tmp15) {
          const handlerTags1 = type.handlerTags;
          const item1 = handlerTags1.forEach((item) => set.delete(item));
        }
        const length = items.length;
        traverseAndConfigureRelations(type, map, set, items);
        const tmp24 =
          type.type === ComposedGestureName.ComposedGestureName.Simultaneous &&
          gestures.type !== ComposedGestureName.ComposedGestureName.Simultaneous;
        if (tmp24) {
          const handlerTags2 = gestures.handlerTags;
          const item2 = handlerTags2.forEach((item) => set.delete(item));
        }
        const tmp26 =
          type.type !== ComposedGestureName.ComposedGestureName.Simultaneous &&
          gestures.type === ComposedGestureName.ComposedGestureName.Simultaneous;
        if (tmp26) {
          const handlerTags3 = gestures.handlerTags;
          const item3 = handlerTags3.forEach((item) => set.add(item));
        }
        if (gestures.type === ComposedGestureName.ComposedGestureName.Exclusive) {
          const handlerTags4 = type.handlerTags;
          const item4 = handlerTags4.forEach((item) => items.push(item));
        }
        const tmp29 =
          type.type === ComposedGestureName.ComposedGestureName.Exclusive &&
          gestures.type !== ComposedGestureName.ComposedGestureName.Exclusive;
        if (tmp29) {
          items.length = length;
        }
      } else {
        const deleteResult = set.delete(type.handlerTag);
        traverseAndConfigureRelations(type, map, set, items);
        if (deleteResult) {
          set.add(type.handlerTag);
        }
        if (gestures.type === ComposedGestureName.ComposedGestureName.Exclusive) {
          items.push(type.handlerTag);
        }
      }
    });
  } else {
    const tmp2Result = tmp2(6214);
    gestures.gestureRelations = tmp2Result.prepareRelations(gestures.config, gestures.handlerTag);
    const push = simultaneousHandlers.push;
    const items1 = [];
    HermesBuiltin.arraySpread(items1, set, 0);
    HermesBuiltin.apply(push, items1, gestures.gestureRelations.simultaneousHandlers);
    const waitFor = gestures.gestureRelations.waitFor;
    const push2 = waitFor.push;
    const items2 = [];
    HermesBuiltin.arraySpread(items2, items, 0);
    let tmp15 = items2;
    HermesBuiltin.apply(push2, items2, waitFor);
    const obj2 = {
      waitFor: gestures.gestureRelations.waitFor,
      simultaneousHandlers: gestures.gestureRelations.simultaneousHandlers,
      blocksHandlers: gestures.gestureRelations.blocksHandlers,
    };
    const result = map.set(gestures.handlerTag, obj2);
  }
}
let set = new Set();

export { traverseAndConfigureRelations };
export const configureRelations = function configureRelations(externalSimultaneousHandlers) {
  map = new Map();
  const obj2 = _mod6214;
  if (obj2.isComposedGesture(externalSimultaneousHandlers)) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(externalSimultaneousHandlers.externalSimultaneousHandlers);
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
  const tmp = ReanimatedNativeDetector;
  if (!tmp) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const obj = tagMessage;
    const error = new Error(
      obj.tagMessage("Gesture expects to run on the UI thread, but failed to create the Reanimated NativeDetector."),
    );
    throw error;
  }
};
export const EMPTY_SET = set;
