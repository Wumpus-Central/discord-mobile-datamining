// _runtime/metro/15324__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
