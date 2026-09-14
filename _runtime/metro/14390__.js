// _runtime/metro/14390__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
