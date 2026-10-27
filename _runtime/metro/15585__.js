// _runtime/metro/15585__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
