// _runtime/01515_createRouteFromAction.js
import { nanoid } from "01509_nanoid.js";
import { createParamsFromAction } from "01513_createParamsFromAction.js";
const require = arg1;
const dependencyMap = arg6;
arg5.createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: null, name: null, params: null };
  obj[0] = "" + name + "-" + nanoid.nanoid();
  obj[1] = name;
  const obj2 = nanoid;
  obj[2] = createParamsFromAction.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};