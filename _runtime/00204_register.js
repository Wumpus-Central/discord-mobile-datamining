// _runtime/00204_register.js
const map = new Map();

export const register = (blobId) => {
  value = map.get(blobId);
  if (null != value) {
    const result = map.set(blobId, value + 1);
  } else {
    const result1 = map.set(blobId, 1);
  }
};
export const unregister = (arg0) => {
  value = map.get(arg0);
  if (null != value) {
    if (value <= 1) {
      map.delete(arg0);
    } else {
      const result = map.set(arg0, value - 1);
    }
  }
};
export const has = (arg0) => map.get(arg0) || false;
