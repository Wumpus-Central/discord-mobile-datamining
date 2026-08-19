// === Module 1049: weakMap ===

// Module 1049 (weakMap)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();
arg5.initUnique = function initUnique(metric, InteractionManager) {
  try {
    if (!weakMap.get(metric)) {
      const tmp5 = new InteractionManager();
      const result = weakMap.set(metric, tmp5);
    }
    return weakMap.get(metric);
  } catch (err) {
    tmp = new tmp();
    return tmp;
  }
};