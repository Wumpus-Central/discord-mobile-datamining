// === Module 1498: createRouteFromAction ===

// Module 1498 (createRouteFromAction)
import nanoid from "nanoid" /* 1492 */;
import createParamsFromAction from "createParamsFromAction" /* 1496 */;

require = arg1;
const dependencyMap = arg6;
arg5.createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  const obj2 = nanoid;
  obj[2] = createParamsFromAction.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};