// _runtime/metro/15548__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
