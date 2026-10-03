// === Module 1505: ? ===

// Module 1505
import nanoid from "nanoid" /* 1499 */;
import _mod1503 from "module_1503" /* 1503 */;

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1503.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};