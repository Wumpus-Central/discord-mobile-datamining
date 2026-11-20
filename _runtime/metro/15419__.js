// _runtime/metro/15419__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
