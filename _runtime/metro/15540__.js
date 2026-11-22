// _runtime/metro/15540__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
