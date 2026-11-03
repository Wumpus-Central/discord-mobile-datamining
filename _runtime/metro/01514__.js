// === Module 1514: ? ===

// Module 1514
import nanoid from "nanoid" /* 1508 */;
import _mod1512 from "module_1512" /* 1512 */;

require = arg1;
const dependencyMap = arg6;

export function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1512.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
}