// _runtime/metro/15356__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
