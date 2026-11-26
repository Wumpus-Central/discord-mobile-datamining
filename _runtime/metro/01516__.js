// === Module 1516: ? ===

// Module 1516
import nanoid from "nanoid" /* 1510 */;
import _mod1514 from "module_1514" /* 1514 */;

require = arg1;
const dependencyMap = arg6;

export function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1514.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
}