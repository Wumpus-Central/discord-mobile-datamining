// _runtime/metro/14354__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
