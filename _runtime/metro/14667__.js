// _runtime/metro/14667__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
