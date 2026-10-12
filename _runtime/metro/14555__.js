// _runtime/metro/14555__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
