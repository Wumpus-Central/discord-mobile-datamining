// _runtime/metro/13792__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
