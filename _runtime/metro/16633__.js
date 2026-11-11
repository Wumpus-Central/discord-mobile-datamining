// _runtime/metro/16633__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
