// _runtime/metro/15469__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
