// _runtime/metro/14575__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
