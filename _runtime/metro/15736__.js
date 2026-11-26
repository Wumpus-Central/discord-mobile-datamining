// _runtime/metro/15736__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
