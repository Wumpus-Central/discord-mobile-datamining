// === Module 1514: createRouteFromAction ===

// Module 1514 (createRouteFromAction)
import nanoid from "nanoid" /* 1508 */;
import createParamsFromAction from "createParamsFromAction" /* 1512 */;

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