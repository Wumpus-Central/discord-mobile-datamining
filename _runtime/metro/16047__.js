// _runtime/metro/16047__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
