// _runtime/metro/14382__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
