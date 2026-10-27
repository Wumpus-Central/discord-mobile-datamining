// === Module 1517: ? ===

// Module 1517
import nanoid from "nanoid" /* 1511 */;
import _mod1515 from "module_1515" /* 1515 */;

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1515.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};