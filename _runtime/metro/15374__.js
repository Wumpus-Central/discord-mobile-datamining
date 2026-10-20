// _runtime/metro/15374__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
