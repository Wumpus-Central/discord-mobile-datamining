// === Module 1520: ? ===

// Module 1520
import nanoid from "nanoid" /* 1514 */;
import _mod1518 from "module_1518" /* 1518 */;

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1518.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};