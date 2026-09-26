// === Module 1500: ? ===

// Module 1500
import nanoid from "nanoid" /* 1494 */;
import _mod1498 from "module_1498" /* 1498 */;

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1498.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};