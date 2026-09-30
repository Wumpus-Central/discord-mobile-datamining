// _runtime/metro/13988__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
