// _runtime/00204_map.js
const map = new Map();
arg5.register = (arg0) => {
  const value = map.get(arg0);
  if (null != value) {
    const result = map.set(arg0, value + 1);
  } else {
    const result1 = map.set(arg0, 1);
  }
};
arg5.unregister = (arg0) => {
  const value = map.get(arg0);
  if (null != value) {
    if (value <= 1) {
      map.delete(arg0);
    } else {
      const result = map.set(arg0, value - 1);
    }
  }
};
arg5.has = (arg0) => map.get(arg0) || false;