// _runtime/metro/16387__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
