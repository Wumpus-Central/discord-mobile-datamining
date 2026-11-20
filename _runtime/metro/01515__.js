// === Module 1515: ? ===

// Module 1515
import nanoid from "nanoid" /* 1509 */;
import _mod1513 from "module_1513" /* 1513 */;

require = arg1;
const dependencyMap = arg6;

export function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1513.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
}