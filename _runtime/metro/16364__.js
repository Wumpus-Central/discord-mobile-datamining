// _runtime/metro/16364__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
