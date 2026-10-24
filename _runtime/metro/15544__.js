// _runtime/metro/15544__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
