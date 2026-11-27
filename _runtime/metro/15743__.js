// _runtime/metro/15743__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
