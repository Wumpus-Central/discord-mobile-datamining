// _runtime/metro/15490__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
