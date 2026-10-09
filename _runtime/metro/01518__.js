// === Module 1518: ? ===

// Module 1518
import nanoid from "nanoid" /* 1512 */;
import _mod1516 from "module_1516" /* 1516 */;

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1516.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};