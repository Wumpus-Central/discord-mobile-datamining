// _runtime/metro/01512__.js
import nanoid from "../01506_nanoid.js";
import _mod1510 from "01510__.js";

require = arg1;
const dependencyMap = arg6;

export function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1510.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
}
