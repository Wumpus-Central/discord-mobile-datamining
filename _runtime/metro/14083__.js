// _runtime/metro/14083__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
