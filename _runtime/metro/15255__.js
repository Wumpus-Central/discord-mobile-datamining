// _runtime/metro/15255__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
