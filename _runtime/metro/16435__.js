// _runtime/metro/16435__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
