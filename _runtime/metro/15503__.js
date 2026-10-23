// _runtime/metro/15503__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
