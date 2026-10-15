// _runtime/metro/15210__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
