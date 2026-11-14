// _runtime/metro/16751__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
