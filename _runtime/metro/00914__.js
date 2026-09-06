// _runtime/metro/00914__.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const initUnique = function initUnique(visibilityWatcher, InteractionManager) {
  try {
    if (!weakMap.get(visibilityWatcher)) {
      const tmp5 = new InteractionManager();
      const result = obj.set(visibilityWatcher, tmp5);
    }
    return weakMap.get(visibilityWatcher);
  } catch (err) {
    tmp = new tmp();
    return tmp;
  }
};
