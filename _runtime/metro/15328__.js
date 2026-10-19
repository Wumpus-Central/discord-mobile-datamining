// _runtime/metro/15328__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
