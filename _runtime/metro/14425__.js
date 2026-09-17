// _runtime/metro/14425__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
