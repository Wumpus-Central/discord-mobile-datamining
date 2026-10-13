// _runtime/metro/14876__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
