// _runtime/metro/15811__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
