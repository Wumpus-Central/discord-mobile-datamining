// _runtime/metro/13883__.js

export default Math.trunc ||
  function trunc(arg0) {
    return 0 < +arg0 ? floor : ceil(+arg0);
  };
