// _runtime/metro/14378__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
