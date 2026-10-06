// _runtime/metro/14129__.js
const tmp =
  Math.trunc ||
  function trunc(arg0) {
    return 0 < +arg0 ? floor : ceil(+arg0);
  };

export default tmp;
