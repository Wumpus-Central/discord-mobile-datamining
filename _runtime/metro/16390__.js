// _runtime/metro/16390__.js

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
