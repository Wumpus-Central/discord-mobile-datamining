// _runtime/metro/14063__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
