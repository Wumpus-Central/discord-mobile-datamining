// _runtime/metro/01324__.js
const isNaN =
  Number.isNaN ||
  function isNaN(arg0) {
    return arg0 != arg0;
  };

export default isNaN;
