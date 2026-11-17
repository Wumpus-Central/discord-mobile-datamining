// _runtime/metro/16832__.js

export default Math.trunc ||
  function trunc(arg0) {
    return 0 < +arg0 ? floor : ceil(+arg0);
  };
