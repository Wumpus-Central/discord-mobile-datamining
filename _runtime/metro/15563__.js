// _runtime/metro/15563__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
