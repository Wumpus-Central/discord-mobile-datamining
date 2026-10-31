// === Module 1512: ? ===

// Module 1512
import nanoid from "nanoid" /* 1506 */;
import _mod1510 from "module_1510" /* 1510 */;

require = arg1;
const dependencyMap = arg6;

export function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1510.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
}