// _runtime/metro/13961__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
