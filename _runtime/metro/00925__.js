// === Module 925: ? ===

// Module 925
let set;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const initUnique = function initUnique(visibilityWatcher, InteractionManager) {
  try {
    if (!weakMap.get(visibilityWatcher)) {
      const self = this;
      const self2 = this;
      set = weakMap.set;
      const tmp2 = new InteractionManager();
      const result = set(visibilityWatcher, tmp2);
    }
    return weakMap.get(visibilityWatcher);
  } catch (err) {
    const self3 = this;
    const self4 = this;
    const tmp5 = new InteractionManager();
    return tmp5;
  }
};