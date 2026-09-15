// === Module 1499: ? ===

// Module 1499
import nanoid from "nanoid" /* 1493 */;
import _mod1497 from "module_1497" /* 1497 */;

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1497.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};