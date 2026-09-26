// _runtime/metro/13793__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
