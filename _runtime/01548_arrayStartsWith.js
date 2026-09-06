// _runtime/01548_arrayStartsWith.js

export const arrayStartsWith = function arrayStartsWith(routeNames, routeNames2) {
  closure_0 = routeNames;
  return routeNames2.length <= routeNames.length && routeNames2.every((item, index) => item === closure_0[index]);
};
