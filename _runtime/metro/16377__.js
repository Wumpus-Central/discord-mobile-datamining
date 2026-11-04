// _runtime/metro/16377__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
