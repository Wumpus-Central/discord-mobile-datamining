// _runtime/metro/16786__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
