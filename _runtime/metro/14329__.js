// _runtime/metro/14329__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
