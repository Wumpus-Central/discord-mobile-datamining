// _runtime/metro/14587__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
