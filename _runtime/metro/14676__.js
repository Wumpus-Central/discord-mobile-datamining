// _runtime/metro/14676__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
