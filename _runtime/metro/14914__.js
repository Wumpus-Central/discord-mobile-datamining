// _runtime/metro/14914__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
