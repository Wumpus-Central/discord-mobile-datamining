// _runtime/metro/15455__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
