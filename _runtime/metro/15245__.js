// _runtime/metro/15245__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
