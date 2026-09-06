// _runtime/metro/14301__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
