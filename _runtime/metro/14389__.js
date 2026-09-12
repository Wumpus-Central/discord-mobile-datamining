// _runtime/metro/14389__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
