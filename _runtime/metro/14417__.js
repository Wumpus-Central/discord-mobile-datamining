// _runtime/metro/14417__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
