// _runtime/metro/16087__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
