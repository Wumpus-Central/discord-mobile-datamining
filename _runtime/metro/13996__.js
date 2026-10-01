// _runtime/metro/13996__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
