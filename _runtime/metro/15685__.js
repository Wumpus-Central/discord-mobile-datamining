// _runtime/metro/15685__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
