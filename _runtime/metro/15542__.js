// _runtime/metro/15542__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
