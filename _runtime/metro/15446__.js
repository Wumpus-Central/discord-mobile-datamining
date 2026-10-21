// _runtime/metro/15446__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
