// _runtime/metro/13677__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};