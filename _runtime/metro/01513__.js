// === Module 1513: ? ===

// Module 1513
import nanoid from "nanoid" /* 1507 */;
import _mod1511 from "module_1511" /* 1511 */;

require = arg1;
const dependencyMap = arg6;

export function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1511.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
}