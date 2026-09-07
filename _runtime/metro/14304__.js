// _runtime/metro/14304__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
