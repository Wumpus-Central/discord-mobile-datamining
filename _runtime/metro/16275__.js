// _runtime/metro/16275__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
