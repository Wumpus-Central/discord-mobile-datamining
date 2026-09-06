// === Module 1739: map ===

// Module 1739 (map)
const map = new Map();
arg5.ComponentRegistry = {
  register(arg0, arg1) {
    const result = map.set(arg0, arg1);
  },
  unregister(arg0) {
    map.delete(arg0);
  },
  getComponent(arg0) {
    return map.get(arg0);
  }
};