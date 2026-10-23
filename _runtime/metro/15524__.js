// _runtime/metro/15524__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
