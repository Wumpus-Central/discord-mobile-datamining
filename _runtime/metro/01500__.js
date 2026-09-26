// _runtime/metro/01500__.js
import nanoid from "../01494_nanoid.js";
import _mod1498 from "01498__.js";

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1498.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};
