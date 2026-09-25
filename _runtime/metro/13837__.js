// _runtime/metro/13837__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
