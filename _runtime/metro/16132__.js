// _runtime/metro/16132__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
