// _runtime/metro/14399__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
