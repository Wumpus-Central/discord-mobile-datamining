// _runtime/metro/14065__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
