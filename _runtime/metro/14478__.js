// _runtime/metro/14478__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
