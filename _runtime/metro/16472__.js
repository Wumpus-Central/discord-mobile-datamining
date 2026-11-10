// _runtime/metro/16472__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
