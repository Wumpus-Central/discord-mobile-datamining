// _runtime/metro/01325__.js
if (!isNaN) {
  isNaN = function isNaN(arg0) {
    return arg0 != arg0;
  };
}

export default isNaN;
