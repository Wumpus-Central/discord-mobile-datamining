// _runtime/metro/14520__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
