// _runtime/metro/14532__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
