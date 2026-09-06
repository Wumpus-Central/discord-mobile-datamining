// === Module 1498: ? ===

// Module 1498
import nanoid from "nanoid" /* 1492 */;
import _mod1496 from "module_1496" /* 1496 */;

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1496.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};