// _runtime/00204_register.js
const map = new Map();

export const register = (arg0) => {
  value = map.get(arg0);
  if (null != value) {
    const result = obj.set(arg0, value + 1);
  } else {
    const result1 = obj.set(arg0, 1);
  }
};
export const unregister = (arg0) => {
  value = map.get(arg0);
  if (null != value) {
    if (value <= 1) {
      obj.delete(arg0);
    } else {
      const result = obj.set(arg0, value - 1);
    }
  }
};
export const has = (arg0) => map.get(arg0) || false;
